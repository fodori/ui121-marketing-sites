# Extension support matrix

- **Source:** https://modelcontextprotocol.io/extensions/client-matrix
- **Fetched:** 2026-09-23
- **Status:** partial
- **Expanded from:** the MCP Apps overview, which links here for host support

## Summary

The matrix is a community-maintained table of which clients implement which official extensions. Support is opt-in: both client and server must declare the extension. Columns are MCP Apps (`io.modelcontextprotocol/ui`), OAuth client credentials, enterprise-managed authorization, and skills (`io.modelcontextprotocol/skills`).

Clients listed as rows: Claude (web), Claude Desktop, VS Code GitHub Copilot, Microsoft 365 Copilot, Goose, Postman, MCPJam, ChatGPT, Cursor, Archestra.AI, PostHog Code, fast-agent, and MCP Inspector. The fetched table did not preserve checkmarks, so this note does not guess cell by cell. The Apps overview, fetched the same day, states that MCP Apps run in Claude, Claude Desktop, VS Code GitHub Copilot, Microsoft 365 Copilot, Goose, Postman, MCPJam, and Archestra.AI. On this matrix page, ChatGPT, fast-agent, and MCP Inspector are explicitly marked partial for skills in the text extraction; other skill and auth cells were blank in the extract and are not filled in here.

Auth-extension support is called out as separate from core MCP authorization (dynamic client registration and client ID metadata). Updates are pull requests against the docs.

Adding support means reading the extension spec, advertising it in client capabilities, implementing the methods, and updating the matrix.

## Key facts

- Community-maintained; not a guarantee.
- MCP Apps identifier: `io.modelcontextprotocol/ui`.
- Apps overview’s supported-host list is the reliable cite from this research pass.
- Skills partials visible in the extract: ChatGPT, fast-agent, MCP Inspector.
- Status partial because the grid marks did not survive fetch.

## How it works

A host that wants Apps declares the UI extension, renders `ui://` HTML in a sandbox, and proxies tool calls. A host absent from the Apps list can still use the same server’s text tools. The matrix is how a developer checks that claim as it changes.

## Implications for ui-mcp.com / ui121

Publish a host list and date it, and point at this matrix rather than hard-coding a forever claim. Cursor appears as a row, which matters for ui121’s developer audience, but Apps support for Cursor was not confirmed by a surviving checkmark in this fetch — do not claim it from this page. The safe line is the overview’s named hosts, plus “text fallback everywhere else.” Partial skills support on ChatGPT is a reminder that “supports MCP” and “supports every extension” are different sentences.
