import { serverQueryContent } from '#content/server'
import jstoxml from 'jstoxml'
const { toXML } = jstoxml

export default defineEventHandler(async (event) => {
    const config = useAppConfig()
    const url = config.url?.replace(/\/$/, '')

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
                { favicon: url + '/favicon.ico' },
                { copyright: `All rights reserved ${now.getFullYear()}, ${config.name}` },
                { generator: 'bloggrify-smh' },
                {
                    _name: 'cloud',
                    _attrs: {
                        domain: 'rpc.rsscloud.io',
                        port: 5337,
                        path: '/pleaseNotify',
                        registerProcedure: 'http-post',
                    },
                },
            ],
        },
    }
    docs.forEach((post) => {
        const path = post._path
        if (post.date) {
            content._content.channel.push({
                item: {
                    title: post.title ?? '-',
                    id: url + path,
                    link: url + path,
                    guid: url + path,
                    description: post.description,
                    pubDate: new Date(post.date).toUTCString(),
                },
            })
        }
    })

    const configXML = {
        indent: '  ',
    }

    event.node.res.setHeader('content-type', 'text/xml')
    return toXML(content, configXML)
})
