# MCP Apps — Vercel AI SDK

- Source: https://ai-sdk.dev/docs/ai-sdk-core/mcp-apps
- Fetched: 2026-09-23
- Status: ok

## Summary

This page is evidence that MCP Apps are a first-class concept in the Vercel AI SDK, not only in the MCP organisation’s own repo. An MCP App extends a normal MCP tool with a `ui://` resource of HTML. The model still calls an ordinary tool. The application renders that HTML in a sandboxed iframe.

The SDK splits the work into `@ai-sdk/mcp` (advertise support, split tools by visibility, read `ui://` resources) and `@ai-sdk/react` (iframe plus a bridge for MCP Apps JSON-RPC). Host flow: connect with MCP Apps client capabilities; list tools and keep only model-visible ones for `streamText` or `generateText`; when a tool part carries app metadata, read the resource; render it in a sandbox; proxy the calls the iframe is allowed to make, such as app-visible `tools/call`, back to the MCP server.

`mcpAppClientCapabilities` tells the server the host can render `text/html;profile=mcp-app`. The page says not to advertise that unless the host really can fetch and sandbox the resource. `_meta.ui.visibility` splits tools: `"model"` tools may be shown to the model; `"app"` tools exist for the iframe and must not be given to the model. `splitMCPAppTools` performs that split. `readMCPAppResource` checks the `ui://` URI, requires the MCP Apps MIME type, decodes text or base64, and returns HTML plus metadata such as CSP and permissions.

The React component is named `experimental_MCPAppRenderer` and the page warns it may change. It renders nothing for ordinary tools. For app-backed tools it loads the resource, opens the sandbox bridge, forwards tool input and result into the iframe, and sends app requests through host handlers (`callTool`, `openLink`). Best practices: treat the HTML as untrusted and prefer a sandbox on a separate origin; never pass app-only tools to the model; validate every iframe request before `callTool`; cache by resource URI; keep tool text and structured content useful for hosts that cannot show UI; close short-lived MCP clients when the request ends.

## Key facts

- Packages: `@ai-sdk/mcp`, `@ai-sdk/react`.
- MIME: `text/html;profile=mcp-app`. URI scheme: `ui://`.
- Visibility split: model-visible versus app-visible tools.
- Renderer: `experimental_MCPAppRenderer` (explicitly experimental).
- Helper names: `mcpAppClientCapabilities`, `splitMCPAppTools`, `readMCPAppResource`.

## How it works

The host is a broker. The model sees a subset of tools. The iframe sees another subset and cannot open its own connection to the MCP server. Policy and user approval sit in the host before a proxied call. That is the security model: untrusted UI, trusted broker, two tool lists.

Section outline: host flow; connect; expose model-visible tools; read resources; proxy app-visible calls; render in React; best practices.

## Implications for generatedui / ui121

If ui121 hosts MCP Apps, copy this split: the model must not see app-only tools, and iframe HTML is untrusted. That is compatible with a block catalog. A customer tool can return either a ui121 block payload (native, on brand) or an MCP App resource (third-party UI). The experimental renderer flag is a reason not to bet the product on Vercel’s component name; bet on the `ui://` contract, which is the stable part. Marketing contrast stays the same: sandbox HTML for borrowed apps, pre-built blocks for the product’s own surfaces.
