# Jasonette docs (Jsonelle archive) — Getting started

- Title: Getting started — Jasonette
- Source URL: https://jasonelle-archive.github.io/docs/legacy/
- Fetched: 2026-09-23
- Status: ok

## Summary

The archived getting-started page states the product in one move: you do not program the app on the device. You write a JSON file on a server, and the Jasonette iOS, Android, or web app fetches it and builds itself when opened. Three native-or-web codebases are listed: Objective-C (JASONETTE-iOS), Java (JASONETTE-Android), and a JavaScript web implementation (JASONETTE-Web). Community channels named on the page are Twitter @jasonclient, a Medium blog, Slack, and forum.jasonette.com.

Quickstart is three steps. Download the iOS or Android shell. Write and host a JSON "recipe." Point the shell at that URL. Hosting options, in the order the page recommends them: Jasonette Web (web.jasonette.com), a free hosted social JSON store with folders, markdown readmes, bookmarks, version control, and realtime editing, explicitly optional because any JSON host works; GitHub or Pastebin, discouraged for development because responses are cached; a local http-server plus Jasonette-Web; or an endpoint on an existing app. Two videos (JSON basics, then JASON syntax) are the tutorial. The written curriculum is: document anatomy, components, layout, linking views with `href`, actions, and templates.

The same page is a docs hub. Sidebar topics include iOS and Android setup, examples, the document model, href, actions, components, layout, templates, mixins, offline, agents, web containers, environment, conventions, advanced, FAQ, and a JASON reference. An "in-depth tutorials" list points at the freeCodeCamp markup article, an offline post, and several 2017 blog.jasonette.com pieces (Slack bot, tab bar, functional programming in JSON, require, mixins, self-mixin, JSON web container). Child pages that were saved are listed in archive/INDEX.md under extras. Two of those blog URLs redirected away from the article.

## Key facts

- Model: server-hosted JSON, fetched on open, builds the app on device.
- Runtimes: iOS (Objective-C), Android (Java), Web (JavaScript).
- Optional host: Jasonette Web, described as free, with version control and realtime edit. Not required.
- GitHub and Pastebin called out as poor dev hosts because of caching.
- Curriculum order: document, components, layout, href, actions, templates.
- This page is a collection. Expanded child notes live under archive/extra/.

## How it works

The installed app is a shell. The product is the URL. On launch the shell requests the JSON and constructs native (or web) UI from a fixed vocabulary: components inside layouts, views linked by href, behaviour as actions, data filled in by templates. Offline, agents, and web containers are separate chapters, meaning the format grew from static screens to device behaviour, background JavaScript, and embedded HTML.

The page is explicit that portability of the JSON is the point: you can change hosts without changing the shell.

## Implications for jsonapp.com / ui121

jsonapp.com's homepage is this quickstart with the curriculum removed. ui121 should publish the curriculum Jasonette already had: document shape, component catalog, layout, navigation, actions, templates, and a schema. The hosting warning matters for marketing: if the app is a URL, cache headers and versioning are product features, not ops details. A git-friendly JSON file plus a viewer is the modern version of "Jasonette Web, but you own the repo."

Child references worth stealing as an outline, not as a syntax: components as the atom, layout as composition, href as navigation, actions as the controller, templates as the binding layer.
