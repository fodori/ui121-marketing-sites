# Hygraph MCP connector for Claude

- Source: https://www.hygraph.com/blog/claude-mcp-connector
- Fetched: 2026-09-23
- Status: ok

## Summary

Paul’s 15 September 2026 post says Hygraph’s MCP server is now a one-click connector in the Claude directory. The argument is that headless is happening twice. The first headless move removed the website from the CMS. The second removes the CMS’s own admin UI from the critical path, because marketers want the model inside the assistant they already use.

He calls that a double-headless CMS. The admin does not disappear. It remains for governance, provenance, permissions, and audit, and the job shifts from writing entries to checking them. Schema work is half of what customers do through MCP: inspect models, add fields, manage components, and refactor across environments.

> “I basically want everybody in Marketing to be able to almost… not open Hygraph anymore.” — a customer’s digital lead, as reported in the post

## Key facts

- MCP server described as generally available a few months before this connector.
- Operations listed: multi-locale entries with relations, Confluence migration into models, bulk find-and-update, schema checks, GraphQL query tuning, destination pages filled from tone profiles.
- Example walkthrough: a Google Doc pulled into a structured product listing.
- Connector is scoped and permissioned from the Claude directory.

## How it works

An agent discovers Hygraph tools over MCP and calls them with the user’s permissions. Content and schema changes land in the CMS, where review and audit still apply. The assistant is the work surface; Hygraph is the system of record.

## Implications for uiaas.uk / ui121

If content teams stop opening the CMS, task owners may stop opening a form builder. ui121 should expose the UI model to agents the same way, and keep the approval surface. The phrase to own is not “another admin” but “the interface is a tool call, and a person still publishes it.”
