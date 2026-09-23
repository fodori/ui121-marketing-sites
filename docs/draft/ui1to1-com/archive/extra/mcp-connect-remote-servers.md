# MCP — Connect to remote servers

- Source: https://modelcontextprotocol.io/docs/2026-07-28/develop/connect-remote-servers
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

Remote MCP servers extend an assistant past the laptop to internet-hosted tools, services, and data. The guide’s claim is that this turns a helpful chatbot into something that can run multi-step work with live external resources. Claude is the example, via Custom Connectors; other hosts that speak MCP are in scope.

A remote server exposes the same kinds of tools, prompts, and resources as a local one, but it is hosted. The page cites project tools, documentation, code hosts, and any API-backed service. The advantage over local install is reach: no per-device setup, usable from a web client, and able to hold server-side processing and authentication. The guide then covers what custom connectors are, how to connect, and best practices. This note does not copy connector clicks.

## Key facts

- Remote servers are internet-hosted MCP endpoints, not a different protocol.
- Example client UX: Claude custom connectors.
- Use cases named: project management, docs, repositories, other APIs.
- Benefits claimed: no local install, web access, server-side auth and compute.
- Same primitive types as local servers: tools, prompts, resources.

## How it works

The user adds a connector that points at a remote MCP endpoint. The host authenticates, discovers capabilities, and calls tools as the conversation requires. Because the server is shared infrastructure, many clients can use it, and secrets can stay server-side instead of in a desktop config. Best practices on the page are about choosing trustworthy servers and understanding what actions they can take. The model still proposes calls; the host and the server’s auth decide what is allowed.

## Implications for ui1to1.com / ui121

Remote MCP is how an agent reaches ui121 without a local install: the human canvas can be a server the assistant connects to, and the person still works in one interface. That split — agent on the connector, human on the canvas — is the company story. One-to-one UI matters more here than on a filesystem demo, because a remote tool can act on shared business data. Human-in-the-loop is the control that should sit in ui121 even when the host is Claude: the connector may start the task, the person finishes it on their surface. Authentication in this guide is the reminder not to expose that surface anonymously.
