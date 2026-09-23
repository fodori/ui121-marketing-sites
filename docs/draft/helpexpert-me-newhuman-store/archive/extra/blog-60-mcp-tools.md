# 60+ MCP tools (blog overview)

- **Source:** https://rentahuman.ai/blog/60-plus-mcp-tools-complete-agent-toolkit
- **Fetched:** 2026-09-23
- **Status:** partial
- **Collection:** RentAHuman blog (sibling of source 8)

## Summary

A 25 April 2026 tour (about eight minutes) says the 60+ tools are distinct operations, typed with JSON Schema, covering hire, manage, and pay — not 60 aliases of search. Discovery tools it names: `search_humans` (skills, place, availability, rate, rating, verification, ranked results), `browse_services`, `get_human` (bio, skills, portfolio, reviews, verification, calendar), `get_service_availability`, and `get_reviews`. It cites 787,000+ humans in 50+ countries. Bounty tools it names include create, personal bounty, update, get, list, applications, accept, and reject. Payment tools it names include escrow checkout, release, and get escrow, backed by Stripe. The extract ends mid-catalog. Some descriptions are looser than the September reference (for example, release is not quite as “immediate” as the post sounds; docs require an acknowledgement and a review). Status is partial: useful as a map of intent, not as the schema.

## Key facts

- Date: 25 April 2026.
- Groups started: discovery, bounties, escrow.
- Headcount repeated: 787,000+ in 50+ countries.
- Full catalog and stricter release rules live on `/docs` (source 5).

## How it works

The agent is expected to chain tools: find, post or book, fund, message, confirm, pay. The post’s point is completeness — one server for the whole loop — rather than any single call.

## Implications for helpexpert.me / newhuman.store

Tool count is being used as a moat. A help server should not answer with 60 tools on day one. A small set with a strict answer object will be easier to trust: ask, accept, answer, clarify, release. Their catalog shows where scope creep goes (services, personal bounties, wallets). Resist matching the number. Match the discipline of typed tools and a published catalog, and keep the catalog short until the product is real.
