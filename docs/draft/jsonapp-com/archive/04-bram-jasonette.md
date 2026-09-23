# Bram.us — Jasonette turns JSON into native components

- Title: Jasonette – Build cross-platform mobile apps using JSON
- Source URL: https://www.bram.us/2017/02/21/jasonette-build-cross-platform-mobile-apps-using-json/
- Fetched: 2026-09-23
- Status: ok

## Summary

Bramus's 21 February 2017 link post is short, but it is the cleanest statement of the browser analogy in this research set. He quotes the Jasonette framing that a browser turns HTML into a page and Jasonette turns JSON into iOS native components, so a native app is "a simple JSON." He then pastes a complete hello-world document and a diagram of JSON fetched over HTTP into the app.

The sample document shows the practical shape. `$jason.head` holds a title, an offline flag, and named actions: coming to the foreground reloads, and pull-to-refresh reloads. `$jason.body` sets header and page background, then a vertical section whose first item is a padded, centered stack with one label ("It's ALIVE!") and two further labels that are links: one to a live demo JSON, one to a YouTube URL opened with `view: Web`. So navigation and a web view are properties on the component, not separate code.

Bramus connects this to work he had done on Culture Club Magazine. Beside typed story items (cover, teaser, article, list), that product had a Custom item: a declarative list of components with style, animation, and actions, rendered as React components inside the story. He treats Jasonette as the mobile version of a pattern he already used in a web editorial product.

## Key facts

- Published 21 February 2017 on bram.us, tagged android, apps, ios, json.
- Core quote he leads with: browsers turn HTML into pages; Jasonette turns JSON into iOS native components.
- Sample head actions: `$foreground` and `$pull`, both type `$reload`. `offline` is the string `"true"`.
- Sample body: white header and page, a vertical item with padding 30, spacing 20, center align, then two href labels, one of them `view: Web`.
- Author's own analogue: a Custom story item that is a declarative component list rendered in React.

## How it works

The runtime fetches the JSON over HTTP and builds the native screen. Reload is itself an action in the document, wired to lifecycle (`$foreground`) and gesture (`$pull`), so "refresh the app definition" is data, not an app-store update. Links are `href` objects on labels. A web destination is a view type, not a different app.

The post does not explain the native mapping. It is a pointer plus one document and a personal parallel.

## Implications for jsonapp.com / ui121

Use this sentence shape in marketing: the runtime is to JSON apps what the browser is to HTML. The sample also shows three product details worth matching: the document can declare its own refresh behaviour, links can open either another JSON view or the web, and an editorial product already treated "custom UI" as a component list. ui121's JSON UI is that Custom slot, generalized to the whole app.

> "Just like how web browsers turn HTML into a web page, Jasonette turns JSON into iOS native components."
