# MCP Apps overview (official docs)

- **Source:** https://modelcontextprotocol.io/extensions/apps/overview
- **Fetched:** 2026-09-23
- **Status:** ok
- **Expanded from:** source 03 (“Build MCP Apps”) and sources 07–08

## Summary

The official extension overview says text only goes so far: people need to interact with data. MCP Apps let a server return HTML — visualizations, forms, dashboards — that renders in the chat. A normal web app plus a link is the alternative, and the page lists when the in-chat version wins. The conversation keeps its place. The app can call tools on the same server and receive new results without a separate API and login. The host can route an outcome (“schedule this meeting”) through capabilities the user already connected. The iframe is sandboxed so it cannot read the parent page, steal cookies, or leave its frame, which is how a host can show third-party UI without fully trusting the author.

The sequence is preload, fetch, sandbox, then bidirectional messages. The tool’s `_meta.ui.resourceUri` points at a `ui://` resource the host may fetch before the call, including so it can stream partial inputs. The resource is usually one HTML bundle; external scripts require `_meta.ui.csp`. Permissions can request microphone or camera. The app speaks a JSON-RPC dialect over `postMessage`: some methods match core MCP (`tools/call`), many are `ui/*` (`ui/initialize`). The host may limit which tools the app can call or turn off opening links.

Good fits: exploring data (a map of sales by region), configuring many dependent options, viewing a PDF or a 3D model, live metrics, and multi-step review such as expenses or code. Any web framework works because the transport is standard browser primitives. The `App` class in `@modelcontextprotocol/ext-apps` is optional. Starters exist for React, Vue, Svelte, Preact, Solid, and vanilla JavaScript.

Hosts the page names for MCP Apps: Claude, Claude Desktop, VS Code GitHub Copilot, Microsoft 365 Copilot, Goose, Postman, MCPJam, and Archestra.AI. Host authors can embed `@mcp-ui/client` or the SDK’s App Bridge. The basic-host example is the reference integration. Examples match the ext-apps repo: maps, Three.js, heatmaps, budgets, PDF, video, QR, system monitor.

## Key facts

- Extension docs, not core protocol.
- Four advantages versus a standalone site: context, bidirectional tools, host capabilities, sandbox.
- Metadata: `_meta.ui.resourceUri`, plus CSP and permissions.
- Transport: `postMessage`, method prefix `ui/`.
- Named hosts include Claude, VS Code Copilot, Microsoft 365 Copilot, Goose, Postman, MCPJam, Archestra.AI.

## How it works

The model calls a tool that declared a UI. The host has preloaded or then fetches the HTML, shows it in a sandboxed iframe, pushes the tool result in, and forwards later tool calls the UI requests. The app can also update the model’s context so the chat knows what the person did. If the use case does not need that loop, the page says a normal website is simpler.

## Implications for ui-mcp.com / ui121

This is the canonical product definition for the domain. ui-mcp.com can lift the four advantages almost as a homepage outline, in original wording: stay in the thread, talk back to tools, reuse connections the user already approved, and keep third-party UI fenced. ui121’s work is the HTML that makes the five job types feel designed — explore, configure, view media, monitor, review — rather than a default iframe. Link the build guide for developers and this overview for buyers.

> “Text responses can only go so far. Sometimes users need to interact with data, not just read about it.” — MCP Apps overview
