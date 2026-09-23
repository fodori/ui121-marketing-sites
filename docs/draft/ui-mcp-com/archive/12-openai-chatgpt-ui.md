# Add UI to your MCP server (OpenAI)

- **Source:** https://developers.openai.com/plugins/build/chatgpt-ui
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

OpenAI’s current developer page tells plugin authors to add UI only when a person must inspect, compare, edit, confirm, or move through structured information. Tools must stay useful with no component, so ChatGPT and Codex can finish the job in a text-only client. The page has moved under a Plugins heading: the MCP server returns UI resources, ChatGPT renders them in an iframe, and the iframe talks to the host through the MCP Apps bridge.

New work should start on the open standard. Declare `_meta.ui.resourceUri`, use the `ui/*` JSON-RPC bridge over `postMessage`, and keep a text path. ChatGPT-only extras live on `window.openai` and should be feature-detected, never branched on a product name. The page maps shared capabilities to compatibility aliases: resource URI versus `openai/outputTemplate`, tool input and result notifications versus `toolInput` and `toolOutput`, `tools/call` versus `callTool`, and `ui/message` versus `sendFollowUpMessage`.

ChatGPT-only examples include instant checkout, file upload and download URLs, host modals, and widget state. An optional `@openai/apps-sdk-ui` library supplies buttons, cards, and layout that match ChatGPT.

Presentation sizes, smallest first: inline card, inline carousel, fullscreen (maps, canvases, browsing, with the composer still available), and picture-in-picture for video, games, or live sessions.

A decoupled pattern is recommended so the iframe does not remount on every call. Data tools return structured results and no template. A render tool owns `_meta.ui.resourceUri` and paints the final set. The real-estate example is a broad search that returns listing IDs, a model that filters them (school zone), and a render tool that shows only the filtered cards and map. Local actions such as re-roll should call the data tool from the UI without rebuilding the widget.

## Key facts

- UI is optional; text-only completion is required.
- Portable fields: `_meta.ui.resourceUri` and the `ui/*` bridge.
- ChatGPT extras: checkout, files, modals, widget state, via `window.openai`.
- Layouts: inline card, carousel, fullscreen, picture-in-picture.
- Pattern: separate data tools from render tools.
- Component library: `@openai/apps-sdk-ui`.

## How it works

The model calls a data tool, reads structured content, then calls a render tool whose metadata points at HTML. ChatGPT loads that HTML in an iframe and connects it with MCP Apps messages. If the host lacks a ChatGPT-only API, the widget checks for the method and falls back. The same UI can run in other MCP Apps hosts because the portable half does not depend on `window.openai`.

## Implications for ui-mcp.com / ui121

This is the practical spec for a ui121 surface inside ChatGPT that still travels. Design the portable iframe first; add checkout or fullscreen only behind a capability check. The data-versus-render split matches how ui121 already separates a workflow from its screen: the agent gathers and filters, the interface presents the decision. Marketing line: one component works in ChatGPT and in any other host that speaks MCP Apps.

Docs outline a marketer can reuse: when to add UI, portable versus ChatGPT-only APIs, choosing a frame size, decoupling data from render.
