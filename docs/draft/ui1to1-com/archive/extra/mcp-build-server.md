# MCP — Build a server

- Source: https://modelcontextprotocol.io/docs/2026-07-28/develop/build-server
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

The server tutorial’s stated goal is a small weather MCP server connected to Claude Desktop. It exposes two tools, one for alerts and one for a forecast, then shows the host calling them. The page is a long, code-heavy quickstart (the fetched document is on the order of 97,000 characters). This note records the intent and the shape only.

The tutorial walks core concepts (a server that lists tools and executes them), a local run the developer can hit with commands, what the SDK is doing under the host connection, common failures, and next steps toward a fuller server. The teaching point is that a useful server is a few typed tools plus a host configuration, not a new chat product.

## Key facts

- Demo: weather server, tools named in the guide as alerts and forecast.
- Host used in the tutorial: Claude Desktop.
- Document type: step-by-step quickstart with substantial code samples (not copied here).
- Includes a troubleshooting section and pointers onward.

## How it works

The developer defines tools with schemas, runs the server on a local transport, and registers it with the desktop host. The model in that host discovers the tools and calls them when the user asks about weather. Results return as tool output the host displays. Failures the guide prepares for are the usual local ones: process start, working directory, and the host not seeing the server. The SDK hides JSON-RPC framing so the example can stay on tool definitions.

## Implications for ui1to1.com / ui121

The official on-ramp still ends in a chat host. ui1to1.com can describe the same weather-style tool as data that arrives on a person’s canvas — a forecast card or an alert that needs a human decision — without making Claude the interface. JSONUI is the view layer the tutorial leaves to the host. For human-in-the-loop products, the “two tools and a host” story is the integration cost; the differentiated cost is the one interface where many such tools become one workflow.
