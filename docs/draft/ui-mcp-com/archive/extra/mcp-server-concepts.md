# Understanding MCP servers

- **Source:** https://modelcontextprotocol.io/docs/2026-07-28/learn/server-concepts
- **Fetched:** 2026-09-23
- **Status:** ok
- **Expanded from:** source 04 (architecture) and the learn series linked from source 03

## Summary

A server is a program that offers capabilities to AI applications through MCP. Familiar examples on the page are filesystem, database, GitHub, Slack, and calendar servers. Everything a server offers is one of three features, and each has a different controller. Tools are functions the model chooses to call, such as searching flights or creating a calendar event, and they may require user consent. Resources are read-only context the application pulls in, such as a document or a knowledge base. Prompts are templates the user invokes, such as “plan a vacation.”

The page teaches with a travel planner. Tools include `searchFlights`, `createCalendarEvent`, and `sendEmail`, each with a JSON Schema. Discovery is `tools/list`; execution is `tools/call`. Hosts can show the tool list, ask approval per call, pre-approve safe operations, and log activity.

Resources have URIs and MIME types. Direct resources are fixed (`calendar://events/2024`). Templates take parameters (`travel://activities/{city}/{category}`) and can offer completions as the user types. Reads use `resources/read`. Change watches go through `subscriptions/listen`. The application, not the model, decides how to browse or attach resources.

Prompts are user-controlled. `prompts/list` and `prompts/get` return a name, description, and arguments. Hosts surface them as slash commands, a command palette, or buttons.

The closing scenario wires three servers — travel, weather, and calendar/email — so one “plan a vacation” prompt reads selected resources and then calls tools across servers, with approval where the action writes data. The claim is that a trip that might take hours of tab switching can be assembled in one flow.

## Key facts

- Tools: model-controlled. Resources: application-controlled. Prompts: user-controlled.
- Tool methods: `tools/list`, `tools/call`.
- Resource methods: list, templates list, read, subscriptions.
- Prompt methods: `prompts/list`, `prompts/get`.
- Worked domain: multi-server travel planning.

## How it works

The host connects the servers, the user may attach resources and pick a prompt, and the model calls tools. Each server stays specialized. The protocol does not prescribe the travel UI; it only standardizes discovery and calls. That is why a later UI extension can sit on the same three primitives.

## Implications for ui-mcp.com / ui121

ui121 interfaces map onto these roles: a form is how a person fills a prompt’s arguments or an elicitation; a dashboard is how they inspect a resource; a button is a consented tool. A ui-mcp.com server should expose a few intent-level tools plus a UI resource, not a copy of every upstream endpoint. The travel story is a ready demo shape — several systems, one conversation, one screen.

Docs outline: three features and who controls each, tools, resources and templates, prompts, multi-server flow.
