# MCP Apps — ext-apps repository

- Source: https://github.com/modelcontextprotocol/ext-apps
- Fetched: 2026-09-23
- Status: ok

## Summary

This is the official specification and SDK repository for MCP Apps, the extension that lets an MCP tool bring an interactive interface into a chat host. The README’s pitch: charts, forms, dashboards, and similar views render inline in Claude, ChatGPT, and any other compliant client. Stars observed at fetch: about 2,865. The extension sits on top of the core Model Context Protocol; host support is uneven and the README points at the MCP clients page for the live matrix.

The problem statement is that ordinary MCP tools return text and structured data, which is enough until the task needs a chart, a form, a design canvas, or a video player. MCP Apps standardise how that UI is delivered so it shows up in the conversation, in context.

Mechanism, in four steps. The tool definition declares a `ui://` resource that holds the HTML interface. The model calls the tool. The host fetches the resource and shows it in a sandboxed iframe. Communication is bidirectional: the host pushes tool data into the UI with notifications, and the UI can ask the host to call other tools.

SDK roles: `@modelcontextprotocol/ext-apps` for Views (an App class and a postMessage transport); a React entry with hooks such as useApp and useHostStyles; `app-bridge` for hosts that embed Views; `server` helpers to register tools and resources. Peer packages called out include the MCP client, and for servers the server, Node, and Express packages, plus Zod. The README says the wire protocol is unchanged between ext-apps 1.x and 2.x, so a 2.x view can run in a 1.x host and the reverse. There is no supported full host in the repo beyond an examples/basic-host reference; the MCP-UI client SDK is named as a fuller host framework some products use.

Four agent skills ship in the repo for coding agents: create an app, migrate an OpenAI app onto MCP Apps, add UI to an existing MCP server, and convert a web app into a hybrid site plus MCP App. Examples include a map (Cesium), Three.js, ShaderToy, sheet music, a Wikipedia graph, cohort heatmap, scenario modeler, budget allocator, customer segmentation, system monitor, transcript, video, PDF, QR, and text-to-speech. Starters exist for React, Vue, Svelte, Preact, Solid, and vanilla JS. Local run is `npm start` then localhost:8080. Node examples can be launched with npx `@modelcontextprotocol/server-<name>`.

Spec table: a stable document dated 2026-01-26, plus a draft. Discussion referenced as SEP-1865. Quickstart and API docs live at apps.extensions.modelcontextprotocol.io.

## Key facts

- Official MCP extension repo. ~2,865 stars at fetch.
- UI is a `ui://` resource, rendered in a sandboxed iframe.
- Wire-compatible across ext-apps 1.x and 2.x.
- Stable spec date named: 2026-01-26. Draft spec also in tree.
- Skills: create-mcp-app, migrate-oai-app, add-app-to-server, convert-web-app.
- MCP-UI is acknowledged as a host SDK, not as the spec.

## How it works

Server authors attach UI metadata to tools and serve HTML (or a richer view) as an MCP resource. The host, not the model, performs the fetch and the sandbox. The view talks to the host over a defined bridge, so a button in the iframe can trigger another tool call without the iframe holding MCP credentials itself. Text content of the tool should still be useful, because not every host will render the app. That fallback is spelled out more clearly in the Vercel AI SDK page (source 15) than here, but the architecture matches.

Section outline of the README: why; four-step flow; install; SDK packages; example gallery; how to run; spec versions; links.

## Implications for generatedui / ui121

MCP Apps are the iframe pole. They are the right way to embed a third-party tool the user already understands. They are a poor default for ui121’s own product UI, because the host cannot restyle an opaque page into the brand system, and non-web clients are second class. generatedui should say: MCP is how agents reach tools and data; the interface ui121 renders is a catalog of blocks (A2UI-like), not an HTML resource, unless the customer explicitly wants to host an MCP App inside the conversation. The migrate-from-OpenAI-Apps skill is evidence that the app-store UI idea is converging on this spec.
