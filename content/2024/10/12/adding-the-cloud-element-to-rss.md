---
title: 'Adding the cloud element to RSS'
date: '2024-10-12'
cover: 'pexels-soner-arkan-277045183-19984342.jpg'
---

The blog generator [bloggrify](https://bloggrify.com) is based on [nuxt-content](https://content.nuxt.com) and [generates a RSS feed](https://github.com/bloggrify/bloggrify/blob/main/server/routes/rss.xml.ts) as a server route in nuxtjs using the [feed](https://www.npmjs.com/package/feed) package from npm. However, try as I may, I was unable to add the cloud element to the feed. The [cloud element](https://cyber.harvard.edu/rss/rss.html#ltcloudgtSubelementOfLtchannelgt) is used to notify feed readers (like [FeedLand](https://feedland.com/)) that the feed has been updated. It's a standard element for RSS, and I was surprised it could not simply be added to the generating the feed.

I ended up [rewriting the route](https://github.com/scotthansonde/bloggrify-scotthanson-de/blob/main/server/routes/rss.xml.ts) using [jstoxml](https://www.npmjs.com/package/jstoxml) so I can choose my own elements.

```ts
import jstoxml from 'jstoxml'
const { toXML } = jstoxml
// config contains data for title, description, etc.
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
// After adding items content (code omitted), generate the feed
const configXML = {
    indent: '  ',
}
return toXML(content, configXML)
```

FeedLand seems to accept the feed, and this post will be a test of whether the ping goes through or not. 😃

**Update** It worked! [rsscloud.io](https://rpc.rsscloud.io/) was pinged, and FeedLand updated the feed.

![Screenshot showing FeedLand updated the feed](https://images.scotthanson.de/posts/2024/feedland-success-2024-10-12.png)
