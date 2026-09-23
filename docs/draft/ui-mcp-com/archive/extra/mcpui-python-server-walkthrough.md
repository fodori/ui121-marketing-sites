# MCP-UI Python server walkthrough

- **Source:** https://mcpui.dev/guide/server/python/walkthrough
- **Fetched:** 2026-09-23
- **Status:** ok
- **Expanded from:** source 30 and the MCP-UI README walkthrough list (source 10)

## Summary

The Python guide builds a FastMCP server that returns UI resources from `mcp-ui-server`. Install is `uv add mcp mcp-ui-server` (or pip). A tool function returns a list containing `create_ui_resource`. The first example is inline HTML (`rawHtml`, encoding text) at a `ui://` URI. Further examples on the page: a dashboard of metric cards, an external site via `externalUrl`, and an interactive panel whose buttons `postMessage` an intent or a tool call to the parent.

Run modes: stdio by default (`python server.py`) or HTTP SSE (`--http --port 3000`). The inspector uses SSE and `http://localhost:3000/sse` for HTTP mode, or stdio for the local process. Tips on the page: text encoding for small HTML, blob encoding for larger or binary payloads, always use the `ui://` scheme, and test both transports.

This is a tutorial. The HTML samples were not copied. The MCP-UI project license is Apache-2.0 (recorded on source 10); this page did not restate it.

## Key facts

- Libraries: FastMCP (`mcp`) and `mcp-ui-server`.
- Content types shown: raw HTML, external URL, interactive postMessage.
- Transports: stdio and SSE.
- Inspector SSE URL shape: `http://localhost:3000/sse`.
- Action messages illustrated: `intent` and `tool`.

## How it works

Decorate a function as a tool. Inside it, build a UI resource and return it as the tool result. A host that understands MCP-UI iframes the HTML. Buttons in the page message the parent; they do not call the network themselves. Stdio suits desktop hosts; SSE suits a small web inspector.

## Implications for ui-mcp.com / ui121

Python teams can ship a ui121 view without adopting the TypeScript SDK, which matters if the agent backend is already Python. The interactive demo is the product pattern: the screen collects a choice and emits an intent the agent confirms. Prefer the official MCP Apps registration when the target host is Claude or ChatGPT’s open bridge; use this walkthrough to explain the resource shape those hosts still render. External URL mode is the shortest path from an existing ui121 page to an embedded preview.
