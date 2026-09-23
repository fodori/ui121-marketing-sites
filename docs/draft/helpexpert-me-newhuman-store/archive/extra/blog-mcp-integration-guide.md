# How to connect an agent via MCP (blog)

- **Source:** https://rentahuman.ai/blog/mcp-integration-guide
- **Fetched:** 2026-09-23
- **Status:** partial
- **Collection:** RentAHuman blog (sibling of source 8)

## Summary

This tutorial (Alexander, 3 February 2026, updated 5 February, about six minutes) explains MCP as a universal adapter and says Claude-class agents can connect in minutes. The configuration it shows points at a remote URL (`https://rentahuman.ai/mcp`) rather than the local `npx` command the September docs and for-agents page use. Tools it names include `browse_humans`, `get_human`, `create_booking`, `list_bounties`, and `create_bounty`. The canonical catalog fetched the same day uses `search_humans`, treats direct booking differently (`rent_human`, services, bounties), and says `start_conversation` is retired. Browsing is described as unauthenticated; creating bookings and bounties needs a key. An example prompt finds people in San Francisco for a package pickup.

The page loaded fully. Status is partial because the integration steps disagree with the current reference and should not be followed as setup instructions.

## Key facts

- Blog config: URL transport to `/mcp`. Current docs: stdio npm package for the full catalog, plus a smaller remote JSON-RPC endpoint.
- Tool names in the post (`browse_humans`, `create_booking`) do not match the September catalog’s primary names.
- Claim that still matches: search/browse can be done before authenticated writes.

## How it works

As written: add a URL, call browse, then book. As the product works now: install the npm server, search, and post a bounty. Prefer the docs note (source 5) over this tutorial.

## Implications for helpexpert.me / newhuman.store

Their own blog drifts. If a help product publishes agent tutorials, date them and point at one canonical page or agents will integrate a retired flow. The strategic content that survives is the promise: an MCP-compatible agent should reach humans without a custom SDK per model. Deliver that, and do not copy this post’s tool names.
