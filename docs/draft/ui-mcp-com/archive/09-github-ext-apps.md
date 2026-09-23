# Official MCP Apps repository (ext-apps)

- **Source:** https://github.com/modelcontextprotocol/ext-apps
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

`modelcontextprotocol/ext-apps` is the official spec and SDK for MCP Apps. The README positions it as the way to ship charts, forms, and dashboards that render inline in Claude, ChatGPT, and any other compliant host. The GitHub listing showed about 2,865 stars when fetched; the HTML view did not return a reliable fork count. The full README was read from the raw default branch.

The fastest path in the README is agent skills, not a blank editor. Four skills ship with the repo: `create-mcp-app` (scaffold), `migrate-oai-app` (convert an OpenAI app), `add-app-to-server` (attach UI to an existing MCP server), and `convert-web-app` (make a site a hybrid web app and MCP App). Claude Code installs them from the plugin marketplace; other agents that support Agent Skills can install them manually.

SDK roles are split. `@modelcontextprotocol/ext-apps` is the View (`App`, postMessage transport). A React entry exposes hooks such as `useApp`. `app-bridge` is how a host embeds a View. The server helpers register tools and resources. There is no supported full host in the repo beyond `examples/basic-host`. The README points host authors at the MCP-UI client SDK if they want a fuller framework. Peer packages expect MCP SDK 2.x. The wire protocol is unchanged between ext-apps 1.x and 2.x, so a 2.x view still renders in a 1.x host.

Examples on the README include a Cesium map, Three.js, ShaderToy, sheet music, a Wikipedia link graph, cohort heatmap, scenario modeler, budget allocator, customer segmentation, system monitor, transcript, video, PDF, QR (Python), and text-to-speech. Starters exist for React, Vue, Svelte, Preact, Solid, and vanilla JS. Stable spec version listed: 2026-01-26, plus a draft. Node 20+ is required for the quickstart.

## Key facts

- Official spec and SDK repo for MCP Apps.
- About 2,865 GitHub stars at fetch.
- Skills: create, migrate from OpenAI, add UI to a server, convert a web app.
- Spec pin named in the README: 2026-01-26 stable, plus draft.
- Wire compatible between ext-apps 1.x and 2.x.
- Local demo host: `npm start` then http://localhost:8080.

## How it works

A tool declares a `ui://` resource that holds its HTML. The model calls the tool. The host fetches the resource and shows it in a sandboxed iframe. The host pushes tool data into the view; the view can call other tools back through the host. Published examples can be launched with `npx` against `@modelcontextprotocol/server-<name>` for clients that speak stdio.

## Implications for ui-mcp.com / ui121

ui121 can meet developers where this repo already points them: “add UI to my MCP server” and “turn my web app into an MCP App.” That is a services and product wedge — take an existing ui121 interface and register it as a View — without inventing a private runtime. The skill names are also copy: the market expects an agent to scaffold the app, so the differentiated work is the interface quality, not the boilerplate.

Docs siblings: `extra/mcp-apps-overview.md`, `extra/mcp-apps-build.md`.
