# MCP-UI TypeScript server walkthrough

- **Source:** https://mcpui.dev/guide/server/typescript/walkthrough
- **Fetched:** 2026-09-23
- **Status:** ok
- **Expanded from:** source 30 and the walkthrough links on the MCP-UI README (source 10)

## Summary

The walkthrough adds `@mcp-ui/server` to an Express server. It is the legacy embedded-resource style: a tool’s result contains a UI resource, which older hosts and the ui-inspector render directly. It is still the practical “hello UI” for the community SDK.

Steps, paraphrased: create an Express app with CORS and JSON; install `@modelcontextprotocol/sdk` and `@mcp-ui/server`; on `POST /mcp`, reuse a `StreamableHTTPServerTransport` when the client sends a session id, or create one when the body is an initialize request. Sessions live in a map and are removed when the transport closes. Each new session gets its own `McpServer`. The sample tool `greet` calls `createUIResource` with a `ui://` URI. The interesting variant in the sample is `externalUrl`: the SDK fetches the page HTML and injects a base tag, rather than only inlining a string. `GET /mcp` is the server-to-client stream. `DELETE /mcp` ends the session. Missing session returns 404; a post without a session that is not initialize returns 400.

Test with ui-inspector on its usual local port, transport set to Streamable HTTP, URL `http://localhost:3000/mcp`. Calling greet shows the UI in the tool result panel.

The sample code is not reproduced here. Apache-2.0 applies to the MCP-UI project (source 10); this page did not repeat the license text.

## Key facts

- Stack: Express, Streamable HTTP, `@mcp-ui/server`.
- Session header handling is part of the transport, not the UI helper.
- UI-specific call: `createUIResource`.
- External URL mode: SDK pulls HTML and sets a base URL.
- Inspector: Streamable HTTP against `/mcp`.

## How it works

The HTTP endpoint speaks MCP. The only UI step is returning a resource from the tool. The host or inspector sees the `ui://` payload and iframes it. Session lifecycle is ordinary streamable HTTP: create on initialize, resume with the session header, delete when done.

## Implications for ui-mcp.com / ui121

Use this as the “add a screen to a server you already run” path for teams on Node. For new multi-host work, prefer `registerAppTool` and `_meta.ui.resourceUri` (homepage and official build guide) over embedding the resource only in the tool result. ui121 can still ship the HTML string; the registration style is what decides whether Claude’s MCP Apps host sees it. External URL mode is how an existing ui121 web app could appear in chat without rewriting it as a single file, with the sandbox still in front.
