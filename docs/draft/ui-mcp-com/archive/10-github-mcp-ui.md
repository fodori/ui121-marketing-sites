# MCP-UI project (GitHub)

- **Source:** https://github.com/MCP-UI-Org/mcp-ui
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

MCP-UI pioneered interactive UI over MCP. The patterns, together with the OpenAI Apps SDK, fed the official MCP Apps specification. The `@mcp-ui/*` packages now implement that spec. The GitHub page listed about 5,176 stars; the scrape did not return a trustworthy fork count (an earlier research pass recorded roughly 398 forks). License on the README: Apache License 2.0, © The MCP-UI Authors. Body text below is paraphrased; the license is recorded so structure can stay a little closer to the source.

Packages: `@mcp-ui/server` and `@mcp-ui/client` (TypeScript), `mcp_ui_server` (Ruby), `mcp-ui-server` (Python). The recommended pattern links a tool to a UI with `_meta.ui.resourceUri`. Hosts read the resource and render it with `AppRenderer`. Legacy hosts that still expect a UI resource embedded in the tool result use `UIResourceRenderer`, also available as a web component. The MIME type called out for MCP Apps HTML is `text/html;profile=mcp-app`. Content may be inline text or base64.

Security claim: remote code runs in a sandboxed iframe. An Apps SDK adapter translates MCP-UI postMessage calls into ChatGPT’s `window.openai` bridge so an existing widget can run there. The README says adapters should fade as hosts speak the open spec directly.

MCP Apps hosts listed: Claude, VS Code, Postman, Goose, MCPJam, LibreChat, mcp-use, Smithery. Legacy hosts include Nanobot, MCPJam, Postman, Goose, LibreChat, Smithery, and fast-agent, with uneven support for UI actions. ChatGPT is in the adapter column, with a guide on mcpui.dev. Core team: Ido Salomon and Liad Yosef.

Roadmap items still open: component libraries, more languages, more frontend frameworks, a possible UI SDK, a declarative UI content type, and generative UI. Done: playground, a wider UI action API, web components, remote DOM.

## Key facts

- License: Apache-2.0. Attribution: The MCP-UI Authors.
- Stars observed: about 5,176.
- SDKs: TypeScript client and server, Ruby server, Python server.
- Site: https://mcpui.dev
- ChatGPT path: Apps SDK adapter, documented at mcpui.dev/guide/apps-sdk.
- Open roadmap: declarative UI and generative UI.

## How it works

Server code builds a UI resource with `createUIResource`, registers it, and points a tool at the `ui://` URI. The host fetches that resource when the tool is relevant and mounts it in a sandbox. User gestures become structured actions (tool, prompt, link, notify, intent on the legacy renderer) that the host, not the iframe, decides how to run.

## Implications for ui-mcp.com / ui121

MCP-UI is the community proof that interactive UI was wanted before it was standardized, and the SDK many hosts already embed. ui121 can ship components that target MCP Apps and still reach ChatGPT through the adapter while hosts converge. The unfinished declarative and generative UI items are the product opening: a design system an agent can assemble, which is ui121’s own thesis, sitting on an Apache-2.0 playground rather than a closed widget format.

> “mcp-ui pioneered the concept of interactive UI over MCP.” — MCP-UI README (paraphrased claim; Apache-2.0)
