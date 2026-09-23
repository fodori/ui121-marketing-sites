# rentahuman-mcp on npm

- **Source:** https://www.npmjs.com/package/rentahuman-mcp
- **Fetched:** 2026-09-23
- **Status:** ok
- **License:** MIT (npm registry listing). Author: RentAHuman. Body below is a paraphrase, not the README.

## Summary

The public package is the distribution proof that “agents hire humans” is a product, not a landing page. On this fetch the registry showed version 3.7.0, created 4 February 2026, last updated 18 September 2026, about 1,416 weekly downloads, and zero dependents. Keywords include `human-in-the-loop`, `marketplace`, `mcp`, and `model-context-protocol`. The homepage link points at rentahuman.ai. The license is MIT, so the client code can be inspected and reused under that license; the marketplace itself is a hosted service, not an MIT product.

The README describes a local MCP server that lets an agent browse people, post bounties, manage allowed conversations, and hire for physical tasks. Setup is install, run setup, paste a key created by an account owner, and add the server to an MCP config. Claude Code has a one-line add command. The package depends on the official MCP SDK, the Effect stack, and x402 libraries (`@x402/core`, `@x402/evm`, `@x402/fetch`) plus `viem`, which matches the crypto-payment story.

Feature groups in the README go well past search. Identity tools create and switch local cryptographic agent identities. Discovery covers search, a curated “taste” talent browse, profiles (including wallet addresses), reviews, block and prefer lists, and bookable services. Taste runs pay 1–100 respondents to compare 2–6 artifacts. QA run templates can be one-time or recurring, with evidence modes, wallet budget, and optional screening (live video, LinkedIn, resume). Direct messaging as a first contact is gone; `start_conversation` is deprecated and hidden. `rent_human` and personal bounties fund a specific person through Stripe checkout before the job goes live. Wallet tools, direct sends (up to 100 recipients), cake ordering, x402 signup and funding, and customer checkouts are all named. Bounty pools cannot exceed $10,000. A four-day review window is described for ordinary evidence, with at most three redo cycles, and payment release is separate from approval.

## Key facts

- Version 3.7.0; MIT; ~1,416 weekly downloads; updated 2026-09-18.
- Runtime deps include `@modelcontextprotocol/sdk` and `@x402/*` 2.23.0.
- x402 signup tool: $10 USDC on Base, gasless for the payer (EIP-3009), key stays local.
- Taste run: 1–100 people, 2–6 artifacts, idempotency key to avoid double charge.
- QA: cadence from 1–30 days, video runs with transcript timestamps, stop-run guardrail 20 calls/minute in the client plus API burst limits.
- `create_bounty` escrow pool cap: $10,000.
- Idempotent writes replay for 24 hours.

## How it works

The process runs on the operator’s machine, holds the API key and optional x402 private key, and exposes tools to the agent. Search can happen before a key is useful for writes. Paid actions hit the hosted API, move wallet or Stripe money, and return status objects the agent is expected to follow (`funded`, `requires_payment`, `insufficient_funds`). Evidence review does not itself release money.

## Implications for helpexpert.me / newhuman.store

Publish an MCP package early, even if the product is deferred, only when there is a real tool to call — an empty package would train agents on the wrong brand. The MIT client is a distribution tactic worth copying; the moat is the network and the transaction object, not the wrapper. Their tool list shows judgment products (taste, QA, humanization) arriving as extra tools on a labor server. A help brand should lead with an `ask` tool and keep errand, cake, and bulk-payout tools out of the first release so the package name matches the promise.
