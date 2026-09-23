# MCP — Build a client

- Source: https://modelcontextprotocol.io/docs/2026-07-28/develop/build-client
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

The client tutorial builds an LLM-powered chatbot that connects to MCP servers, and it points readers at the server tutorial first so the two sides of a call are familiar. Completed sample code is linked from the quickstart resources repository under an MCP client Python tree. Like the server guide, the fetched page is long and code-heavy (on the order of 80,000 characters). This note keeps the product idea, not the listing.

A client is the piece inside a host that can speak to any compliant server: discover tools, call them, and fold results into the model’s next turn. Building one is how a product stops being “a chat box” and becomes a host that can use the ecosystem. The page’s next steps send the reader onward once that loop works.

## Key facts

- Goal: an LLM chatbot client that connects to MCP servers.
- Suggested prior reading: the build-a-server tutorial.
- Sample location referenced: `modelcontextprotocol/quickstart-resources`, `mcp-client-python`.
- Tutorial is code-first; this note does not copy it.

## How it works

The client starts a model conversation, attaches one or more server sessions, lists tools, and lets the model request calls. The client executes those calls, returns results, and continues until the model answers the user. The host owns the transcript and the permissions. The tutorial’s Python sample is a minimal host: enough UI to type, enough protocol to use servers written by someone else.

## Implications for ui1to1.com / ui121

ui121 can sit on either side. As a client/host, the canvas is where tool results render for one person. As a server, ui121 is how an external agent requests a human task. The tutorial only teaches the chatbot shape. The one-to-one claim is that the same client loop can render a full working surface — not only append text — and that the human’s answer is a first-class result. JSONUI is that rendering step the sample leaves as chat bubbles.
