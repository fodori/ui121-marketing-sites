# freeCodeCamp — JSON markup for cross-platform apps (Jasonette)

- Title: How to build cross-platform mobile apps using nothing more than a JSON markup
- Source URL: https://www.freecodecamp.org/news/how-to-build-cross-platform-mobile-apps-using-nothing-more-than-a-json-markup-f493abec1873/
- Fetched: 2026-09-23
- Status: ok

## Summary

Ethan (Jasonette) argues, in a February 2017 freeCodeCamp article, that an entire native iOS and Android app can be one JSON document. Because the app is data, it can be hosted anywhere and fetched when the app opens, so logic is not frozen in the binary. Updating the server JSON updates the app. He compares the runtime to a browser that draws native views from JSON instead of a web view from HTML.

The article focuses on the view layer, then points at model and controller as the same idea extended. Design constraints he set for the syntax: feel native on a phone (not a desktop layout language), work on both iOS and Android, and stay simple enough to compose. He reduces most mobile UI to vertical lists, horizontal lists, absolute positioning, and grids, and walks through the first three.

Under the hood, vertical sections map to UITableView on iOS and RecyclerView on Android. Horizontal sections nest a horizontal scroller inside the vertical one (UICollectionView inside UITableView; nested RecyclerViews on Android). Items inside a section do not scroll; they are a single component or a stack. Stacks map to UIStackView and LinearLayout, which he treats as the cross-platform cousin of flexbox, and they nest. Styles cover font, size, width, height, color, background, corner radius, and opacity. Layers are the absolute-position case, limited at the time to image and label, with explicit coordinates. He shows the pattern by reconstructing Instagram-like and Twitter-like screens from those blocks.

Beyond views, actions attach to touches, chain through success and error callbacks, and can listen for events. He claims a full model-view-controller program can live in JSON. The server can be anything that returns JSON: an existing API, a static file on GitHub or Pastebin, or even a Raspberry Pi. A cheerio-based HTML-to-JSON step can turn a site without an API into a native view, though he prefers real JSON. Examples he names: an S3 photo upload feed, an Eliza chatbot, a Rails microblog with token auth, a Slack-bot remote control, and an iOS Dev Weekly reader built from HTML. iOS was open-sourced in late 2016; Android followed about a month later. The audience he wants includes people who are not professional developers.

## Key facts

- Date: 12 February 2017. Author: Ethan. Project: Jasonette.
- Root shape: a `$jason` object with `head` (metadata) and `body` (what is drawn).
- Section types: vertical (default) and horizontal.
- Item layouts: vertical and horizontal component stacks, nestable.
- Layers: absolute image and label placement.
- Native mapping called out: UITableView, UICollectionView, RecyclerView, UIStackView, LinearLayout. No Storyboards or Android XML layouts; views are built in code so they can change at runtime.
- Distribution: any JSON host. Examples include API backends, static files, and HTML transformed to JSON.
- Named sample apps: S3 upload feed, Eliza chatbot, token-auth microblog, Slack remote, iOS Dev Weekly.

## How it works

A document opens with `$jason.head` and `$jason.body`. Body sections are lists of items. An item is either one component (label, image, button, textarea) or a vertical or horizontal layout of components. The same JSON is interpreted by two native codebases, so authors do not write Swift and Kotlin. Actions are JSON too: a user event starts an action, and success or error continues the chain. Templates and styles are mentioned as further JSON parts, but this article stays on views.

The browser analogy is operational, not decorative. One binary, many documents, fetched on open. That is the same delivery model jsonapp.com states more briefly.

## Implications for jsonapp.com / ui121

This is the clearest public precedent for "apps as JSON." Marketing can say the pattern is a decade old and was already framed as a browser for native UI. ui121 should not copy Jasonette's component vocabulary; it should copy the contract: one document, head for behaviour, body for layout, a fixed component catalog, and updates by serving new JSON.

Honest limit from the article itself: the author expects the "toy app" objection and answers it by pointing at actions, not by showing production scale. ui121's proof should come from later SDUI write-ups (Airbnb, Lyft) plus a schema, not from 2017 demos alone.

> "If your app consists entirely of JSON, it can be treated like any other data."
