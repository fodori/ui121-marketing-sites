# Build an MCP client (official tutorial)

- **Source:** https://modelcontextprotocol.io/docs/2026-07-28/develop/build-client
- **Fetched:** 2026-09-23
- **Status:** ok
- **Expanded from:** source 03 (“Build clients”)

## Summary

This tutorial builds an LLM-powered chatbot client that connects to MCP servers. It assumes the reader has seen the server tutorial. The Python track wants a recent Python, `uv`, and the Python MCP SDK 2.0.0 or higher, plus the Anthropic SDK and python-dotenv in the setup commands. The page is a long walkthrough; this note records the product shape rather than the sample client.

The point of a client is that it is not tied to one server. Once the chatbot speaks MCP, every compliant server — weather, files, or a UI-bearing app server — can be added without a new integration style. The host the person sees can be this small tutorial client or a product such as Claude or VS Code. The protocol object is the same idea: one connection, discovery, tool calls, results back into the model loop.

The fetched document continues for thousands of lines across setup, the query loop, and other languages. Those listings were not copied.

## Key facts

- Goal: a chatbot that can attach to MCP servers.
- Python SDK 2.0.0+ and `uv` are the documented baseline.
- Depends conceptually on the server tutorial.
- Anthropic’s SDK is used in the Python setup so the client has a model to drive tool choice.

## How it works

The client starts a model conversation, discovers tools from connected servers, lets the model request a call, executes it, and feeds the result back until the model answers the user. A host product does this for many servers at once. MCP Apps add a rendering step when a tool declares a UI resource; this introductory client tutorial is about the tool loop, not iframes.

## Implications for ui-mcp.com / ui121

ui121 does not need every customer to build a client. The tutorial exists to show that clients are replaceable: if a small Python chatbot can use any server, Claude, ChatGPT, and Copilot can use a ui121 server too. Marketing should say “we implement the server and the interface; their AI is already the client.” Teams evaluating a private agent can still follow this page and point it at a ui121 endpoint.
