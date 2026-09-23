# MCP-UI repository

- Source: https://github.com/MCP-UI-Org/mcp-ui
- Fetched: 2026-09-23
- Status: ok

## Summary

MCP-UI is the project that pioneered interactive UI over the Model Context Protocol. The README states that, together with OpenAI’s Apps SDK, its patterns fed the official MCP Apps specification, and that the `@mcp-ui/*` packages now implement that spec. `@mcp-ui/client` is recommended for hosts. License: Apache 2.0. Stars observed at fetch: about 5,176. Core team named: Ido Salomon and Liad Yosef. An older GitHub path, idosal/mcp-ui, is the historical name; the organisation remote is MCP-UI-Org/mcp-ui. Docs site: mcpui.dev.

Packages: `@mcp-ui/server` (`createUIResource`, used with `registerAppTool` and `registerAppResource` from the ext-apps server helpers), `@mcp-ui/client` (`AppRenderer` for MCP Apps, `UIResourceRenderer` for legacy hosts that still embed the resource in the tool result), plus Ruby (`mcp_ui_server`) and Python (`mcp-ui-server`).

The recommended wire pattern links a tool to UI with `_meta.ui.resourceUri`. The host sees that URI, reads the resource, and renders it. The resource uses the `ui://` scheme and the MIME type `text/html;profile=mcp-app`, delivered as text or base64. Legacy rendering still accepts a resource object and an `onUIAction` callback. A web component, `ui-resource-renderer`, exists for non-React hosts. Security line: remote code runs in a sandboxed iframe.

UI actions are structured events, not direct DOM access to the host. Types described across the README and the WorkOS deep dive include tool, intent, prompt, notify, and link. An Apps SDK adapter translates MCP-UI postMessage calls into ChatGPT’s `window.openai` APIs so the same widget can run there.

Hosts listed for the MCP Apps pattern include Claude, VS Code, Postman, Goose, MCPJam, LibreChat, mcp-use, and Smithery. Legacy hosts that expect UI inside the tool response include Nanobot, MCPJam, Postman, Goose, LibreChat, Smithery, and fast-agent, with uneven support for UI actions. ChatGPT needs the Apps SDK adapter.

Roadmap items still open on the README include component libraries, more language SDKs, more frontend frameworks, a UI SDK, a declarative UI content type, and “support generative UI?” — an explicit admission that iframe HTML is not the declarative-catalog end of the spectrum.

## Key facts

- Apache 2.0. ~5,176 stars at fetch.
- Now an SDK for the MCP Apps standard, not a competing spec.
- Link field: `_meta.ui.resourceUri`. MIME: `text/html;profile=mcp-app`.
- Renderers: AppRenderer (current), UIResourceRenderer (legacy), web component.
- Languages: TypeScript, Ruby, Python.
- Declarative UI content type: listed as not done.

## How it works

The server creates a UI resource and registers it. The tool advertises the resource URI in metadata. The host fetches and sandboxes the HTML, passes tool input and result in, and receives structured actions out (call a tool, open a link, send a prompt). Remote DOM, mentioned in the Ruby examples, is the variant that tries to render through the host’s own components instead of raw HTML, using a script that creates elements such as `ui-button`. That is closer to a catalog, but it is not the default MCP Apps path.

## Implications for generatedui / ui121

MCP-UI’s unfinished “declarative UI” roadmap item is the gap ui121 can stand in. The ecosystem already standardised sandboxed HTML for third-party apps. What businesses still need for their own workflows is a catalog of blocks the host styles and certifies. ui121 can consume MCP tools (the data and actions) and render its own blocks, and can treat MCP-UI iframes as an embed option rather than the product. Apache-2.0 and the Apps SDK adapter also show that “one widget, many hosts” is a selling point — ui121’s version of that sentence is “one JSON payload, many native renderers,” which is A2UI’s sentence and a better brand fit than iframes.
