# Glama MCP server directory

- **Source:** https://glama.ai/mcp/servers
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Glama’s open-source MCP server directory reported 91,014 servers on the page title when fetched. It is a registry, not an article, so individual listings were not saved as notes. Each card shows a quality grade, a license grade, a maintenance grade, a short description, an update time, tool counts, and often an npm or license badge. Many popular cards were marked official and MIT or Apache-2.0.

The first screen is a popularity list, not a taxonomy page. Themes visible there, which are enough to describe the directory’s breadth:

- UI and front-end helpers (React and Next.js animation catalogs).
- Agent orchestration and sub-agents.
- Knowledge bases and multilingual engineering content.
- Markets and crypto paper trading.
- Trust and approval gates for consequential actions.
- Local SEO and Google Business Profile data.
- Maps, routing, and weather.
- Object storage (Backblaze B2).
- Notarization and proof-of-existence.
- Browser automation (a Cloudflare Playwright server with millions of npm downloads and a weak maintenance grade).
- 3D generation.
- Static-site hosting.
- MCP gateways that put many upstream servers behind one HTTP endpoint with per-tool keys, guardrails, and rate limits.
- News.
- AI-generated marketing video.
- Persistent agent memory.
- Network diagramming.
- Local document tools (PDF, office files) that claim nothing is uploaded.

Other registries named in the source list as neighbors, not crawled here: Smithery, PulseMCP, mcp.so, and the official MCP registry.

## Key facts

- Directory size on the page: 91,014 servers.
- Cards graded on license, quality, and maintenance.
- Licenses frequently shown: MIT and Apache-2.0.
- One browser-automation server showed on the order of 5.4 million npm downloads and a failing maintenance grade, which is a useful caution about popularity versus upkeep.
- Not a single article; no per-server archive files.

## How it works

A publisher lists an MCP server. Glama scores it and shows how recently it changed and how many tools it exposes. A developer copies the server into a host that speaks MCP. The directory itself does not run the tools. Gateways in the list are a second pattern: one endpoint in front of many servers, with access control the individual repos do not provide.

## Implications for ui-mcp.com / ui121

The directory proves supply is huge and uneven. ui-mcp.com should not try to be another 90,000-row catalog. It should be the interface layer people find when a text-only server is not enough — or a curated set of UI-bearing servers with maintenance and security called out, which Glama’s own grades show the market already wants. Categories above are the verticals where a designed widget (maps, memory, documents, commerce, SEO) would replace a wall of tool descriptions.
