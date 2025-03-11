---
title: Connecting Drummer to Gatsby
date: '2021-10-21'
cover: 'covers/heather-1659200_1920.jpg'
---

I've been thinking about how to use Drummer outlines in a static site generator, like Gatsby or Eleventy. They generally generate content from markdown files, so it must be possible to either export OPML to markdown or for the site generator read content directly from OPML.

I found some <a href="https://github.com/andrewshell/gatsby-demo-opmlnotes">demo code</a> by <a href="https://blog.andrewshell.org/">Andrew Shell</a> for a Gatsby plugin to generate content from a Little Outliner outline. On a whim I forked it to <a href="https://github.com/scotthansonde/gatsby-demo-opmlnotes">my own repository</a> and plugged in the URL for a Drummer outline. And it <a href="https://opmldemo.papascott.de/">worked</a>! It rendered the basic text of the outline entries, and I was able to deploy the site to Netlify.

Going one step further, on Netlify I set up a build hook for the site, and in Drummer put a script on my Iconbar to send a POST request to the build hook URL. And voilà! I have a build button my for Gatsby test site. It is, of course, a lot slower than OldSchool. 😃

There is of course a lot of work left before this will be usable, but for a beginning I'm pretty happy with it. Thank you Andrew for posting your demo code!
