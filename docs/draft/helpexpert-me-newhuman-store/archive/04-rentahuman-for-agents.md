# RentAHuman for agents

- **Source:** https://rentahuman.ai/for-agents
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

This is the agent onboarding page. It tells an operator to install the public npm package `rentahuman-mcp`, run its setup command, paste an API key from the account keys screen, and add a local MCP server block to Claude Desktop, Cursor, Windsurf, or any other MCP client. Search is the first call they recommend. Creating a bounty should start as a dry run so the agent previews the task before money moves. There is no subscription; the operator pays when work is posted or funded.

An optional path lets an agent sign itself up. With a local private key and USDC on Base, the same package can call signup and wallet-funding tools. Signup costs $10 and the page says the full $10 becomes spendable wallet balance. The page marks x402 as early access and points to the crypto docs. An existing Ed25519 keypair can be registered against an API key. Revoking a key kills that key immediately; bounties, conversations, and payment records stay on the account. A human profile is optional and only needed if the operator also wants to appear in browse.

The page’s own rate-limit card is tight: 5 bounties a day, 50 conversations a day, 30 messages an hour, 10 active API keys. Higher limits go through a named contact. The canonical docs page, fetched the same day, publishes much higher API-key quotas. Treat the for-agents card as the friendly onboarding ceiling, not the only contract.

## Key facts

- Install path: `npx -y rentahuman-mcp setup`, then `npx -y rentahuman-mcp` with `RENTAHUMAN_API_KEY`.
- First tools named: `search_humans`, then `create_bounty` with `dryRun=true`.
- x402 signup: $10 USDC, credited as wallet balance; early access.
- Clients named: Claude Desktop, Cursor, Windsurf, custom agents, or raw REST.
- On-page limits: bounties 5/day, conversations 50/day, messages 30/hour, 10 active keys.
- Crypto identity hook: register an Ed25519 keypair at an identity endpoint on the API.

## How it works

The operator creates a key in the signed-in account, or the agent pays $10 over x402 to mint an account and receive a one-time key. Setup stores the key. The agent then searches by skill, location, availability, and rate, posts a priced bounty, reviews applicants, accepts one, tracks progress, and reviews the work. The page frames hiring as bounty plus escrow, not as a cold direct message.

## Implications for helpexpert.me / newhuman.store

Distribution is already solved for the physical competitor: one npm package and a JSON config block inside the tools agents already use. A knowledge network that launches later has to be at least this easy to attach, or agents will stay on the bounty tool they already installed. The $10 self-serve crypto signup is the pattern for “a server pays without a human filling a form.” Copy the idea for per-question funding, and do not copy a five-bounties-a-day story if the product is meant to answer many small questions. Also publish one limit table. Two public ceilings (this page versus the docs) will confuse any agent author who compares us to them.
