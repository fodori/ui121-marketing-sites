# MCP Apps — Overview

- Source: https://modelcontextprotocol.io/extensions/apps/overview
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

MCP Apps let a server return an interactive HTML interface — a chart, a form, a dashboard — that renders inside the host conversation, instead of only text or structured data. The page argues a normal web app loses the thread: the user changes tabs and forgets which chat held the dashboard. An MCP App stays beside the discussion, can call tools on the server, can receive fresh results pushed by the host, and can ask the host to perform an outcome (“schedule this meeting”) using integrations the user already connected. Security is a sandboxed iframe: no parent DOM, no host cookies, no navigation of the parent page. Communication is `postMessage`. If those properties are not needed, the page says a normal website is simpler.

The pattern joins two primitives. A tool declares `_meta.ui.resourceUri` pointing at a `ui://` resource. The host can preload it, fetch HTML (scripts limited by a content-security policy in metadata), render it in the sandbox, and exchange a JSON-RPC dialect (`ui/initialize`, `tools/call`, context updates). Good fits they name: drill-down maps, multi-field configuration forms, PDF or 3D viewers, live dashboards, and multi-step work such as expense approval, code review, or triage. Hosts listed as supporting the extension include Claude, Claude Desktop, VS Code GitHub Copilot, Microsoft 365 Copilot, Goose, Postman, MCPJam, and Archestra.AI. Support is not universal because Apps are an extension. Templates exist for React, Vue, Svelte, Preact, Solid, and plain JavaScript. The `App` class in `@modelcontextprotocol/ext-apps` is optional. Fuller API docs live at `https://apps.extensions.modelcontextprotocol.io`.

## Key facts

- UI is HTML in a sandboxed iframe, addressed by `ui://`.
- Tool metadata points at the UI resource so the host can preload it.
- Channel: `postMessage`, not stdio or HTTP, for the app-to-host dialect.
- Use cases called out: exploration, dense forms, rich media, live monitoring, multi-step approval.
- Named hosts include Claude, VS Code Copilot, Microsoft 365 Copilot, Goose, Postman.
- Secrets and parent-page access are blocked by the sandbox; the host decides which tools the app may call.

## How it works

The model calls a tool that has a UI. The host fetches the resource, iframes it, and pushes tool results in. User actions in the app request further tool calls or context updates. The host forwards those calls to the server and returns data. The app never touches the host document. External scripts load only from origins the metadata allows. Permissions such as microphone are requested, not assumed.

## Implications for ui1to1.com / ui121

MCP Apps are the closest public cousin to a generated interface inside an agent. ui1to1.com should treat them as validation that text is not enough for approval, review, and live status — and as a different home for the UI. Their app lives in the assistant. ui121’s canvas is the person’s own one-to-one surface, not a guest iframe in someone else’s chat. JSONUI is declarative and host-owned, which avoids shipping arbitrary HTML into a sandbox, while still covering the same jobs: a form with every option visible, a live view, a step-through review. Human-in-the-loop is literally one of their examples (expense approval). The brand line: agents can render a widget; the human still needs one interface that is theirs.
