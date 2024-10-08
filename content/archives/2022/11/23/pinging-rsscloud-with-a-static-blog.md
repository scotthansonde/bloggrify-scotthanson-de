---
title: 'Pinging RSSCloud with a static blog'
date: '2022-11-23'
cover: 'covers/pexels-leica-palma-818954161-19395821.jpg'
---

One way to connect a blog to RSS readers and communities (like [FeedLand](http://feedland.org)) is to ping an [RSSCloud server](http://rpc.rsscloud.io:5337/docs) whenever your feed changes. But with the Jamstack model of triggering deploys to a static site hoster, I wasn't sure how to implement that, and a [web search](https://duckduckgo.com/?q=jamstack+rsscloud) did not offer much help.

H﻿owever, my hoster [Netlify](https://www.netlify.com/) offers serverless functions (as do similar hosters like [Vercel](https://vercel.com/), [Cloudflare Pages](https://pages.cloudflare.com/), [DigitalOcean Apps](https://www.digitalocean.com/products/app-platform), etc.). Specifically, I can run a [function on a "deploy-successful" event,](https://docs.netlify.com/functions/trigger-on-events/) so I know the blog has just been rebuilt. RSSCloud expects a POST request, so I can send that off with node-fetch.

```js
const fetch = require('node-fetch')

const handler = async function (_event, _context) {
    try {
        const params = new URLSearchParams()
        params.append('url', 'https://scotthanson.de/feed.xml')

        const response = await fetch('http://rpc.rsscloud.io:5337/ping', {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: params,
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        // output to netlify function log
        console.log(error)
    }
}

module.exports = { handler }
```

Now RSS readers that listen to RSSCloud servers will know about changes to my feed within seconds.
