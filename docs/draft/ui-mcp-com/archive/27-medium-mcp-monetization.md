# MCP adoption and monetization models

- **Source:** https://medium.com/mcp-server/the-rise-of-mcp-protocol-adoption-in-2026-and-emerging-monetization-models-cb03438e985c
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Gary Weiss, 22 February 2026, writes as a founder of MCP-Hive and says so. The piece retells MCP’s origin (open-sourced 25 November 2024), early platform support from OpenAI, Google DeepMind, Microsoft Copilot Studio, Cursor, Replit, and Zed, the 97 million monthly SDK downloads by November 2025, and the December 2025 move to the AAIF. He lists AAIF backers as AWS, Google, Microsoft, Salesforce, and Snowflake in addition to the co-founders; that roster is his account and should be checked against Anthropic’s own donor post before it is reused.

He splits servers into three classes. Internal organizational servers are the largest by volume and invisible in public directories. Vendor servers (GitHub, Stripe, Atlassian, Salesforce) are maintained and authenticated. Community general-purpose servers are the most visible and the least consistently funded. Frameworks he says adopted MCP as the tool layer: LangChain, LlamaIndex, AutoGen, and CrewAI.

Two January 2026 expansions: MCP Apps (interactive dashboards, forms, and charts in the conversation; Claude first, then VS Code, Microsoft 365 Copilot, and OpenAI), and Google’s Universal Commerce Protocol announced by Sundar Pichai at NRF with Shopify, Walmart, Target, and payment networks. UCP is not an MCP sub-protocol. It is a commerce standard that can travel over MCP. Merchants stay merchant of record.

Quality is the structural tension behind server-count headlines. Class A vendor servers get updates and auth. Class B community servers, via Astrix 2025 as he cites it, often use static keys (53%). He also says more than 1,800 servers were on the public internet without authentication — a higher exposure count than Trend Micro’s 492, so keep the source attached. The September 2025 unofficial Postmark MCP incident (about 1,500 weekly downloads, a silent change that copied outbound mail) is his illustration that registries are trusted more than they verify.

Monetization models: bring-your-own-key (the Massive.com market-data server is free, the useful API is not; a popular AccuWeather server is community-built and easy to mistake for official); paid gateways and aggregators (MCP-Hive’s own directory-plus-billing, Kong exposing MCP on an API gateway, Moesif doing per-call, hybrid, and outcome-based pricing); and agentic commerce via UCP, where an agent discovers and checks out and MCP Apps supply the human-visible step.

## Key facts

- Date: 22 February 2026. Author: Gary Weiss (discloses MCP-Hive).
- Three server classes: internal, vendor, community.
- MCP Apps called out as the break from text-only interaction.
- UCP: Google-led commerce protocol; MCP is one transport; Shopify is the lead partner he names.
- BYOK does not pay the server author or widen access.
- Postmark incident: unofficial server, silent mail copy, September 2025.

## How it works

A community server is usually a thin adapter in front of someone else’s API, and the user brings a key. A gateway sits in front of many servers, meters calls, and can charge per success. UCP adds discovery, negotiation, and checkout so an agent can buy; MCP Apps are how a person still sees and confirms the interface. None of these require a new MCP primitive beyond tools, resources, and the UI extension.

## Implications for ui-mcp.com / ui121

Server counts hide a quality split ui121 can speak to: internal and vendor servers are where budget is, and they still need interfaces. MCP Apps plus commerce is the shopping story, but ui-mcp.com should not pretend to be UCP. The honest product is the visible layer — variant pickers, confirmations, dashboards — that makes a paid or internal tool usable in chat. Disclose-style trust (official versus community) belongs in any directory ui121 might publish. Outcome-based pricing is a note for later packaging, attributed to this author’s survey of Moesif and gateways, not as a ui121 commitment.
