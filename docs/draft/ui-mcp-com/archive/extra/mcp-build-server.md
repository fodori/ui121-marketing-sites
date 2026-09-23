# Build an MCP server (official tutorial)

- **Source:** https://modelcontextprotocol.io/docs/2026-07-28/develop/build-server
- **Fetched:** 2026-09-23
- **Status:** ok
- **Expanded from:** source 03 (“Build servers”)

## Summary

The current quickstart builds a weather server with two tools, `get_alerts` and `get_forecast`, and connects it to Claude Desktop. The same server can attach to any client; Desktop is only the simple host. The page repeats the three capabilities — resources, tools, prompts — and then stays on tools.

The Python track requires Python 3.10+ and the Python MCP SDK 2.0.0 or higher, with `uv` as the installer. The operational warning is the one marketers should not lose: a stdio server must not write to stdout, because that stream is the JSON-RPC channel. `print` will break the server. Log with the standard library to stderr. HTTP servers may log to stdout because it is not the protocol pipe.

The fetched page is a long multi-language tutorial (thousands of lines). This note keeps the intent and the constraints, not the sample implementation. Later sections of the same URL continue the weather server in other languages and show how to register it in the desktop app’s config. A sibling page, build a client, is the other half of the intro’s “start building” row.

## Key facts

- Tutorial outcome: two weather tools in Claude Desktop.
- Python SDK floor: 2.0.0. Python floor: 3.10.
- Stdio rule: logs go to stderr, never stdout.
- Scope of the lesson: tools first; resources and prompts are named only.
- Host used in the lesson: Claude Desktop, not a special runtime.

## How it works

The developer defines tools with schemas, runs the server on stdio or HTTP, and points a host at it. The host lists the tools and the model calls them with user approval. Nothing in this tutorial returns HTML. UI is a separate build path (`extra/mcp-apps-build.md`).

## Implications for ui-mcp.com / ui121

The official first server is a text tool. ui-mcp.com’s differentiation starts the moment that tutorial feels insufficient — when the forecast should be a map or a chart, not a paragraph. Teach teams the stdout rule anyway: a UI server that still uses stdio for local dev will fail in confusing ways if the widget code logs to the wrong stream. Point “build an interface” at the Apps guide, and keep this page as the proof that any host that can load a weather server can load a ui121 server.
