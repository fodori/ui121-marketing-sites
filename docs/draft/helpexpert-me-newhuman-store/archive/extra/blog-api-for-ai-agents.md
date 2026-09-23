# REST API overview (blog)

- **Source:** https://rentahuman.ai/blog/api-for-ai-agents
- **Fetched:** 2026-09-23
- **Status:** partial
- **Collection:** RentAHuman blog (sibling of source 8)

## Summary

Alexander’s 1 February 2026 developer post (updated 5 February, about seven minutes) sketches a REST pipeline: base URL `https://rentahuman.ai/api`, public reads for humans and bounties, bearer API keys for bookings and bounty creation. Examples filter humans by a location string and a search query, create a booking with a human id, a task sentence, a duration, and a budget, and post a photography bounty for $20. Rate limits in the visible portion say public endpoints allow 100 requests per minute, which matches the docs’ unauthenticated browse bucket and omits the much higher authenticated and API-key ceilings. The booking resource in the sample is not how the September reference tells agents to hire (bounty, rent, or service booking). The page loaded; the contract is stale. Use source 5 for endpoints.

## Key facts

- Base URL still cited: `https://rentahuman.ai/api`.
- Auth example: `Authorization: Bearer` with an `rah_` key.
- Public limit mentioned: 100 requests per minute.
- Sample booking payload should not be treated as current.

## How it works

As advertised in February: list humans, book one, or post a bounty. As documented in September: search, bounty, escrow, webhooks, with bearer or `X-API-Key`.

## Implications for helpexpert.me / newhuman.store

Publish one API reference and make the blog point at it. A help API should look boring and stable: ask, status, answer, pay. RentAHuman’s early posts show how fast a narrative API rots. Partial status is the warning label for anyone skimming the blog as if it were docs.
