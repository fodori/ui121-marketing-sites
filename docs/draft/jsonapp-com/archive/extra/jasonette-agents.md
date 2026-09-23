# Jasonette agents

- Title: Jasonette agents
- Source URL: https://jasonelle-archive.github.io/docs/legacy/agents/
- Fetched: 2026-09-23
- Status: ok
- Parent: source 05

## Summary

Agents are described as microservices on the frontend. The user touches the native core. The core starts background JavaScript containers. They talk JSON-RPC. The containers are invisible WebViews (WKWebView on iOS, WebView on Android), optimized so the user never interacts with them directly. The page’s three uses: run any JavaScript capability inside the app; point an agent at an existing website and treat that site as a backend for the native UI; and get concurrency, because the core stays single-threaded for deterministic UI while agents do parallel work and report events.

An agent is a web page. The example loads CryptoJS and defines a function that calls `$agent.response` with an MD5 digest. Agents are registered in the head by name and URL. A websocket chat sample registers `ws` at a heroku URL and keeps the native screen as the only UI while the site runs behind it. The docs also point at turning Angular, Vue, or similar apps into agents. Multiple agents are allowed. The web container in the seven-lines article is a special visible agent; this chapter is the invisible version of the same bridge.

## Key facts

- Slogan on the page: microservices on the frontend.
- Implementation: background web view, one or many, JSON-RPC to the native core.
- Registration: `$jason.head.agents`, each with a name and a URL.
- Response API used in the sample: `$agent.response`.
- Core stays single-threaded; agents are the concurrency mechanism.
- Existing web apps can be imported as agents without rewriting them as JSON components.

## How it works

The JSON names a URL. The runtime loads it off-screen, calls into its JavaScript by JSON-RPC, and receives results the same way. Events from the agent can re-enter the action system. The user-facing tree remains native components. The web code is a worker with a document, not the layout.

## Implications for jsonapp.com / ui121

A JSON app runtime will eventually need an escape hatch for logic the catalog cannot express. Jasonette’s answer is a named background web worker with a message bridge. ui121 should treat that as optional and sandboxed, not as the default way to ship business rules. Prefer server-side actions and schema validation. If an agent-like slot exists, it should be allow-listed and invisible, matching this chapter, rather than an open web view.

> "In short, it's like microservices, but on the frontend."
