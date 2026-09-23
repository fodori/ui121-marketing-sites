# MCP — Debugging

- Source: https://modelcontextprotocol.io/docs/2026-07-28/tools/debugging
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

The debugging guide treats broken MCP connections as a normal part of building servers and host integrations. It points at the Inspector as the interactive, transport-agnostic tool, and it covers logging, especially server-side logs. Common failures it names: the process working directory, environment variables, server startup, and connection problems. A Claude Desktop section explains how to see whether a server is up and where that host writes logs.

The page is operational. It does not redefine the protocol. The pattern is: observe the process, observe the host, then observe the messages. This note does not copy log paths or commands.

## Key facts

- Primary interactive tool: MCP Inspector.
- Failure classes named: working directory, environment, startup, connection.
- Server-side logging is a recommended implementation practice.
- Claude Desktop has its own status and log locations in the guide.
- Audience: people developing servers or wiring them into an application.

## How it works

When a host shows no tools, the cause is often outside the model: the server never started, started in the wrong directory, or lacked an API key in its environment. Logs on the server record its own view. Host logs record whether the client launched the process or completed the HTTP handshake. The Inspector sits between them and shows the actual protocol traffic once a connection exists. Fixing the environment comes before changing tool schemas.

## Implications for ui1to1.com / ui121

A one-to-one canvas that depends on agents will be debugged at this layer by customers’ developers. ui121 should expect “the human UI never appeared” to mean a failed MCP session as often as a product bug. The brand implication is reliability of the connected surface: if the link drops, the person’s task should still be visible and recoverable, which is the same offline/always-connected promise as the company story. Human-in-the-loop cannot be a silent failure. Surface the pending request even when the agent connection is the thing that broke.
