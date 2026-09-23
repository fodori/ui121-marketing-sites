# MCP — Understanding servers

- Source: https://modelcontextprotocol.io/docs/2026-07-28/learn/server-concepts
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

An MCP server is a program that exposes capabilities to AI applications through one protocol. Examples on the page: filesystem, database, GitHub, Slack, and calendar servers. Three building blocks differ by who is in control. Tools are functions the model chooses to call, including writes (search flights, send messages, create events). Resources are read-only context the application pulls (documents, schemas, calendars). Prompts are templates the user picks (plan a vacation, summarise meetings, draft an email).

Tools are JSON Schema operations with a single job, listed by `tools/list` and run by `tools/call`. The page says tools may require user consent before they run. A travel scenario chains flight search, a calendar block, and an out-of-office email. The point of the walkthrough is that one server, or several, can cover a whole task if each primitive stays narrow and typed.

## Key facts

- Tools: model-controlled, can change state, JSON Schema inputs. Methods: `tools/list`, `tools/call`.
- Resources: application-controlled, read-only context.
- Prompts: user-controlled templates.
- Consent before tool execution is part of the interaction model they describe.
- Illustrative servers: files, databases, GitHub, Slack, calendars.

## How it works

The host discovers tools, resources, and prompts. The model proposes a tool call when the user’s request matches a description. The server validates inputs against the schema, runs one operation, and returns a result. Resources are fetched for context rather than chosen by the model as actions. Prompts are explicit user shortcuts into a known workflow. Multi-server planning means the host can combine a calendar server and a mail server without those vendors integrating with each other.

## Implications for ui1to1.com / ui121

Consent on tools is human-in-the-loop at the protocol layer, usually a thin confirm. ui1to1.com can argue the confirm should be a one-to-one canvas: the flight, the dates, and the email the model is about to send, editable, not a generic allow button. JSONUI is a resource-like description of UI plus a tool-like action when the person submits. Slack and calendar as separate servers are the tool-sprawl problem; one human surface can sit in front of many servers.
