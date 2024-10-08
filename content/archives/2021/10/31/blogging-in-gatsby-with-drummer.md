---
title: Blogging in Gatsby with Drummer
date: '2021-10-31'
cover: 'covers/hamburg-3071437_1920.jpg'
---

It works! At least for me, with a lot of limitations. But this post (and the two previous posts) on my <a href="https://www.gatsbyjs.com/">Gatsby</a>-powered blog was written in <a href="http://docserver.scripting.com/drummer/about.opml">Drummer</a>. The Dummer posts are integrated with the previous posts that were written in Markdown. The code for my blog with the new OPML plugin is on <a href="https://github.com/scotthansonde/papascott-gatsby">GitHub</a>.

As I mentioned, I started with <a href="https://github.com/andrewshell/gatsby-demo-opmlnotes">demo code</a> by Andrew Shell for Little Outliner outlines. That was written for Gatsby v2, I submitted a couple of fixes so it would work with Gatsby v3 and the recently released v4.

The demo code plugin creates Markdown 'nodes' for the outline entries. I added a couple of frontmatter entries to these nodes for ease of processing. I then adapted my `gatsby-node.js` to handle both Markdown files and the Markdown nodes from the OPML plugin.

There are still a lot of limitations. It ignores blog posts without titles (my wish, for now) and does not support most of the <a href="http://docserver.scripting.com/drummer/blogging.opml">attributes</a> used by the OldSchool CMS. But now it's my template, my layout, and my code, and I can add those features later whenever I want! 😛
