# CopilotKit docs — MCP Apps

- Source: https://docs.copilotkit.ai/generative-ui/specs/mcp-apps
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 09 (developer guide’s MCP Apps pattern)

## Summary

CopilotKit’s MCP Apps page is the integration guide for rendering UI that an MCP server serves, inside the chat, with no extra frontend component. When the agent calls a tool that has an associated UI resource, the runtime fetches and renders it. Benefits claimed: no frontend code for that view, full HTML/CSS/JS interactivity, an isolated iframe, and persistence of the app in thread history so it restores on reconnect.

Setup: install `@ag-ui/mcp-apps-middleware`, attach `MCPAppsMiddleware` to a BuiltInAgent with `.use()`, and list servers. Each server has a type, a URL, and a serverId. The page stresses serverId. If you omit it, CopilotKit hashes the URL, and a URL change (staging versus production) breaks apps already stored in the conversation. The runtime is CopilotRuntime v2 with an in-memory runner and a catch-all route handler. Transports shown: HTTP and SSE, the latter with headers for a bearer token. The example gallery points at the official modelcontextprotocol/ext-apps repository.

The page does not redefine the MCP Apps wire format. It assumes the server already speaks it. Rendering is automatic once middleware is attached.

## Key facts

- Package: `@ag-ui/mcp-apps-middleware`.
- Attachment: `BuiltInAgent.use(new MCPAppsMiddleware({ mcpServers }))`.
- serverId is required for stable history if URLs change.
- Transports: http and sse.
- Sandbox: iframe. History: apps restored on reconnect.
- Upstream examples: github.com/modelcontextprotocol/ext-apps.

## How it works

The middleware connects to the MCP server, exposes its tools to the agent, and when a tool call implies a UI resource, loads that resource into a sandboxed frame in the transcript. The frame can be interactive. The host keeps the conversation record so the same frame can be reconstructed later. The developer does not write a React card for that tool.

## Implications for generatedui / ui121

This is the “borrow a UI” integration, not the block catalog. ui121 can offer the same middleware path for third-party MCP Apps and keep first-party workflows on pre-built blocks. The serverId warning is a real product detail: persisted generative UI must key off a stable id, not a deploy URL. generatedui should not promise that an MCP App will match the brand; the docs themselves isolate it in an iframe.
