import { defineEventHandler } from 'h3'
import { parseString } from 'xml2js'
import { $fetch } from 'ofetch'

export default defineEventHandler(async (event) => {
    const url = 'https://data.feedland.com/feeds/shanson.xml'

    try {
        const xml = await $fetch(url, { responseType: 'text' })

        return new Promise((resolve, reject) => {
            parseString(xml, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    } catch (error) {
        console.error('Error fetching RSS feed:', error)
        return { error: 'Failed to fetch RSS feed' }
    }
})
