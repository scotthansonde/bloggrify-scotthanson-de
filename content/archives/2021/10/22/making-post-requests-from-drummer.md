---
title: Making POST requests from Drummer
date: "2021-10-22"
---

That build hook URL for Netlify requires a POST request. But Drummer lets you run a script from the Iconbar. Here's mine.

```js
const xhr = new XMLHttpRequest();
// XXX is given to you by Netlify
const hookUrl = "https://api.netlify.com/build_hooks/XXX";
xhr.open("POST", hookUrl, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({}));
```
