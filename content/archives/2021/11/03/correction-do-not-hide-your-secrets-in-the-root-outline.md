---
title: "Correction: Do NOT hide your secrets in the root outline"
date: "2021-11-03"
---

_Correction 13 November:_ you should _not_ use this for real secrets, since the root outline is not really hidden or secure. But for global variables that you don't mind having exposed it should be OK. <i>Caveat emptor!</i>

My video demo yesterday revealed the URL of my Netlify build hook for all to see. It's now been changed, but I need not have revealed. <a href="http://docserver.scripting.com/drummer/about.opml">Drummer</a> has a <a href="http://docserver.scripting.com/drummer/scripting.opml#1629216924000">root outline </a>where global variables can be defined.

So in the root outIine I can create an `env` object, and define an entry for `netlifyBuildHook` for the URL. (You have to <a href="http://docserver.scripting.com/drummer/scripting.opml#1629218924000">use proper JavaScript object syntax</a>, with brackets, colons and quotes.)

The xhr.open line of my build script can then be <br />`xhr.open("POST", root.env.netlifyBuildHook, true);`<br /> without revealing the actual URL.
