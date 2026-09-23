# Typeform MCP server

Source: https://www.typeform.com/developers/mcp/
Fetched: 2026-09-23
Status: ok

Parent: source 28, https://developer.typeform.com/

## Summary

Typeform’s MCP server lets an LLM client work with a Typeform account over the Model Context Protocol instead of hand-written REST calls. Capabilities are grouped by tool prefix: `forms-*` to create and edit fields, logic, and publishing; `automations-*` for email, webhook, delay, and integration steps; `contacts-*` for lists, bulk upsert, and mapping form fields onto contacts; `insights-*` for raw submissions, aggregates, rankings, and time series. A “not yet supported” page is promised for gaps that still need REST. People who only want Claude or ChatGPT are told to use the product’s own connect flow, not these builder docs.

The endpoint is `https://api.typeform.com/mcp`. Transport is streamable HTTP only; SSE clients fail immediately. Auth is OAuth 2.0 on first connect. A local trial is `npx @modelcontextprotocol/inspector`. Almost every tool needs an `account_id` from `accounts-list_accounts` first. EU-hosted accounts use other endpoints. A hosted connector must have its redirect domain allowlisted. Further docs linked but not fetched as separate extras: core concepts, supported tools, plans and feature access, testing, feedback, and building a connector.

This MCP server operates the form vendor’s account. It is not MCP elicitation (a server asking the end user for a schema-shaped answer).

## Key facts

- Endpoint: `https://api.typeform.com/mcp`. Streamable HTTP only, no SSE.
- OAuth 2.0. First call: `accounts-list_accounts`.
- Tool families: forms, automations, contacts, insights.
- Local inspector: `npx @modelcontextprotocol/inspector`.
- EU endpoints and connector allowlists are documented as follow-ons.
- Distinct from MCP elicitation in the 2025-06-18 spec.

## How it works

An MCP client connects, the user grants OAuth, the client lists accounts, then calls tools to build forms, automations, contacts, or to read analytics. Plan limits are enforced when the tool runs. Publishing a form is a separate step from editing a draft (called out in Typeform’s tool docs, not fully copied here).

## Implications for askmeapi.com / ui121

Typeform MCP is an agent editing surveys. AskMeAPI’s MCP story, if it has one, should be the opposite direction: the agent calls a tool that asks a human and blocks on a structured result. ui121 does not need to manage a form account; it renders the one question that tool just created. Mentioning both MCP uses on a landing page will confuse buyers unless the page says “we ask the human,” not “we edit your Typeform.”
