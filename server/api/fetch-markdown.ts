import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkFrontmatter from 'remark-frontmatter'
import { unified } from 'unified'

export default defineEventHandler(async (event) => {
    const url = `http://localhost:3000/markdown/2024/10/12/adding-the-cloud-element-to-rss.md`
    console.log(url)
    const md = await $fetch(url, { responseType: 'text' })

    const parsed = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(remarkFrontmatter)
        .process(md)

    event.node.res.setHeader('content-type', 'text/plain')
    return parsed.value
})
