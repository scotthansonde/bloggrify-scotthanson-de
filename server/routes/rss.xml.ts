import { serverQueryContent } from '#content/server'
import jstoxml from 'jstoxml'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkFrontmatter from 'remark-frontmatter'
import { unified } from 'unified'
const { toXML } = jstoxml

const parseHTML = async (md: string) => {
    const html = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(remarkFrontmatter)
        .process(md)
    return html.value
}

export default defineEventHandler(async (event) => {
    const config = useAppConfig()
    const url = config.url?.replace(/\/$/, '')
    const host = event.node.req.headers.host

    const docs = await serverQueryContent(event)
        .where({ hidden: { $ne: true } })
        .sort({ date: -1 })
        .find()

    const now = new Date()
    const content = {
        _name: 'rss',
        _attrs: {
            version: '2.0',
        },
        _content: {
            channel: [
                { title: config.name },
                { description: config.description },
                { link: url },
                { docs: 'http://cyber.law.harvard.edu/rss/rss.html' },
                { language: config.language },
                { copyright: `All rights reserved ${now.getFullYear()}, ${config.name}` },
                { generator: 'bloggrify-smh' },
                {
                    _name: 'cloud',
                    _attrs: {
                        domain: 'rpc.rsscloud.io',
                        port: 5337,
                        path: '/pleaseNotify',
                        registerProcedure: '',
                        protocol: 'http-post',
                    },
                },
            ],
        },
    }
    for (const post of docs) {
        // docs.forEach(async (post) => {
        const path = post._path
        if (post.date) {
            const mdUrl = `http://${host}/markdown${path}.md`

            const md = await $fetch(mdUrl, { responseType: 'text' })
            const parsedHTML = await parseHTML(md)
            console.log(parsedHTML)
            content._content.channel.push({
                item: {
                    title: post.title ?? '-',
                    id: url + path,
                    link: url + path,
                    guid: url + path,
                    // description: post.description,
                    description: `<![CDATA[${parsedHTML}]]>`,
                    pubDate: new Date(post.date).toUTCString(),
                },
            })
        }
    }

    const configXML = {
        indent: '  ',
    }

    event.node.res.setHeader('content-type', 'text/xml')
    return toXML(content, configXML)
})
