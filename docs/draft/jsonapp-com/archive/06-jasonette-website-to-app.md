# Medium — Turn a website into an app with a few lines of JSON

- Title: How to turn your website into a mobile app with 7 lines of JSON
- Source URL: https://medium.com/free-code-camp/how-to-turn-your-website-into-a-mobile-app-with-7-lines-of-json-631c9c9895f5
- Fetched: 2026-09-23
- Status: ok

## Summary

Ethan's 22 March 2018 freeCodeCamp/Medium piece argues that a website does not have to be rewritten to become a mobile app. A short JSON document can place an existing URL inside a native frame: native navigation header, native tab bar, native transitions, and a web view that is just another component. The example he opens with embeds github.com while the chrome around it stays native.

The real subject is two-way communication, not a wrapped browser. He wants the parent app to call JavaScript inside the web view, and the web view to call native APIs. A worked example is a native chat field whose text is passed into a web QR-code generator so the image updates without a native QR library. He rejects the usual "HTML5 or native" debate: the useful design is both, in one layout.

Reasons he gives for mixing HTML into a native app: use a capability the web engine already has (he cites WebSocket, so you skip a third-party native port); avoid binary size from a native library (QR generation via a script tag); adopt a technology that has a stable JavaScript library before a stable mobile one; and port a site incrementally when one page is too complex to rewrite and the rest is not.

Jasonette, as he restates it, is one binary that interprets JSON into native UI the way a browser interprets HTML. Web Container 1.0 could embed HTML as a background (`type: html` plus a `text` body) but could not talk to it. Version 2.0 adds a `url` (local `file://` or remote http/https) and a JSON-RPC channel called `$agent`. `$agent.request` calls a named JavaScript function with a params array. The web container is a special agent whose id is `$webcontainer`. The reverse direction, web calling native, is documented under agents. He also shows `$agent.inject` for pages you do not control, and a click handler on the web background so a link can be hijacked: some URLs stay in the web view (`$default`), others trigger a native `$href`. A custom Hacker News browser in that style is described as about 48 lines of JSON. He ends with a warning: an app that is only web views is just a website.

## Key facts

- Date: 22 March 2018. Author: Ethan. Publication: freeCodeCamp on Medium.
- Web container background: `type` html, then either inline `text` or a `url` (`file://` or http/https).
- Bridge: JSON-RPC via `$agent.request`. Options: `id` (`$webcontainer`), `method` (JS function name), `params` (array).
- Trigger example: `$load` in head actions fires the request when the view opens.
- Link policy: attach an action on the html background; `$jason.url` is the clicked link; `$default` keeps browser behaviour; `$href` does a native transition.
- Claimed size of the custom-browser example: 48 lines of JSON.
- Disclaimer in the conclusion: do not build the whole app as web views.

## How it works

The JSON describes a native layout. One slot in that layout is an HTML container. The container is an agent: the native side sends JSON-RPC requests into it, and the page can answer. Because both sides speak JSON, the same action chain used for buttons and network calls can drive the web view. Link clicks are events with a URL payload, so routing between "stay on the web" and "open a native JSON view" is a conditional in the document.

This is a hybrid that is layout-level, not "website in a splash screen." Native components and the web container share one screen.

## Implications for jsonapp.com / ui121

The marketing artifact is the extreme: a working shell in a handful of lines. Use it as a story about apps as data, and pair it with the disclaimer so the pitch stays honest. For ui121, the durable idea is a sandboxed web (or agent) slot inside a JSON UI, with a typed message channel, not an iframe free-for-all. Shopify's remote-dom note is the 2020s version of the same host/guest split. ui121 already renders JSON UI natively; a deliberate escape hatch for HTML, with an allow-listed bridge, matches this article's design and its warning.

> "All Jasonette apps have exactly the same binary, and it interprets various JSON markup on demand to create your app."
