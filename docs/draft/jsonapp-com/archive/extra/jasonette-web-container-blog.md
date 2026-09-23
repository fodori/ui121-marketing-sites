# Jasonette — JSON web container (2017 blog)

- Title: JSON web container
- Source URL: http://blog.jasonette.com/2017/04/07/JSON-web-container/
- Fetched: 2026-09-23
- Status: ok
- Parent: source 05 (in-depth tutorials list)
- Note: the live blog redirects to a lander. This paraphrase is from the 2018 Wayback capture. A later freeCodeCamp piece (source 06) covers the next version of the same idea.

## Summary

The 7 April 2017 post introduces a web container as a native component: write ordinary HTML, CSS, and JavaScript, then describe in JSON how that page sits in a native layout and scroll view beside other native components. The first Jasonette HTML widget had been a limited iOS hack with no Android version, because the author assumed web views would feel wrong inside an app. A pull request from a contributor named Brad put multiple web views inside an Android list and they scrolled smoothly. The iOS HTML component was then rebuilt the same way, with styling so the container could sit in native layout, and with JavaScript so the page could do more than display markup.

Performance feedback on the forum showed that each container was downloading the same remote scripts and styles again. Caching those static assets stopped the duplicate fetches. After that, he says the container was smooth on both platforms and sometimes hard to tell from a native cell. He is explicit that it should be mixed into a native app, not used to build the whole app in HTML. The first release is described as intentionally minimal, with more features planned. The close credits the open pull-request process.

## Key facts

- Date on the capture: 7 April 2017.
- Three steps he names: write HTML, write JSON for placement and style, run it as a native component.
- Origin: an Android pull request, then an iOS port, then JavaScript support.
- Fix called out: cache shared remote assets across containers.
- Limit he states: mix into native layout. Do not power the entire app with HTML.

## How it works

The JSON document places a web container the way it places any other component, including inside scrolling lists and native backgrounds. The HTML runs in that slot. Remote CSS and script are cached so several containers do not each download the same files. Interaction beyond display depends on the JavaScript support added in this pass. The later “seven lines of JSON” article (source 06) is where the parent app and the container start talking through a structured request channel. This post is the layout and performance story, not that protocol.

## Implications for jsonapp.com / ui121

A JSON app runtime will be asked to embed a page it does not own. Jasonette’s rule is the useful one: the web view is one block in a native (or JSON) layout, with cached assets and a later message channel, not a browser pretending to be the app. ui121 can offer the same escape hatch for a task that needs a chart or a third-party widget, while the rest of the surface stays declared data.
