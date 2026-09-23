# Building an AI agent with TypeScript and MCP

- Source: https://www.hygraph.com/blog/build-ai-agent-with-typescript-and-mcp
- Fetched: 2026-09-23
- Status: ok

## Summary

A write-up of a livestream by Dino, staff engineer and AI Labs lead at Hygraph. The lesson is how to give a model tools through the Model Context Protocol instead of hardcoding functions into a prompt. A small server advertises tools; a Node client talks to Claude on AWS Bedrock, executes tool calls, and sends results back.

The closing move is pointing that client at Hygraph’s own MCP server so the agent can query content and change schema.

## Key facts

- Demo tools include weather via Open-Meteo (location to coordinates to forecast) and a mocked search used to show errors.
- Transport in the demo is stdin and stdout; HTTP is noted as the alternative.
- A thin Express app keeps conversations in memory. The tip on the page is to keep the full message history on the server so the browser cannot inject into it.
- One config line is described as enough to attach Hygraph’s MCP server.

## How it works

The server lists tool schemas. The model emits a tool call. The client runs it and returns the result for a final answer. The host must translate schemas into the shape the model provider expects, allow several tools in one thread, and label messages by role. Hygraph then becomes one more tool catalogue: models, queries, and schema edits.

## Implications for uiaas.uk / ui121

An agent that can change a content model can change a UI model if ui121 exposes the same kind of tool list. The security note matters: the conversation and the tool permissions stay on the server. That is how a UI service should let an agent draft a form without giving the browser the master prompt.
