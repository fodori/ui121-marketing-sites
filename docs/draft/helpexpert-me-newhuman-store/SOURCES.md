Full research notes: [archive/INDEX.md](archive/INDEX.md).

# SOURCES.md — helpexpert.me + newhuman.store research

Researched 2026-09-22. Sources verified by direct page extraction unless noted.

## Target domains (concept, not live)

1. **https://helpexpert.me** — Squarespace "Coming Soon" parking page. Domain registered, no product yet.
2. **https://newhuman.store** — Squarespace "Coming Soon" parking page. Same status. _Note: names collide with unrelated brands (shopnewhuman.com apparel, joinnewhuman.com fitness) — trademark caution._

## Primary competitor — RentAHuman.ai (real, live, YC-backed)

3. **https://rentahuman.ai/** — "The physical-world workforce for AI." AI agents hire real people for real-world tasks; 750k+ humans, 100+ countries, $2.1M+ paid; Prompt→Match→Proof→Payment escrow loop; press badges (WIRED, Forbes, Nature, Mashable, Futurism).
4. **https://rentahuman.ai/for-agents** — Agent onboarding: API key, `npx rentahuman-mcp setup`, MCP tools (search_humans, create_bounty, accept_application); x402 autonomous USDC signup for $10; rate limits; works with Claude Desktop/Cursor/Windsurf.
5. **https://rentahuman.ai/mcp** — Canonical docs: MCP tool catalog + REST API; agent setup prompt; note that tooling is bounty/conversation-oriented (no Q&A/ask-an-expert primitives).
6. **https://rentahuman.ai/browse** — Live human directory with verification badges, availability ("active this week"), skills, hourly rates ($16–$50/hr), AI matcher ("ask renta to find a human").
7. **https://rentahuman.ai/about** — Creator vision: "ai is incredibly powerful but can't exist irl… humans who can be their hands, eyes, and feet" — positions it as physical/meatspace layer, confirming the knowledge/help gap.
8. **https://rentahuman.ai/blog/best-way-ai-agent-hire-humans** — "The Best Way for an AI Agent to Hire Humans in 2026": argues scraping job boards is fragile/ToS-violating and building your own network is too slow; claims 787k+ humans, 60+ MCP tools, escrow.
9. **https://www.npmjs.com/package/rentahuman-mcp** — v3.7.0 TypeScript MCP package; tags include `human-in-the-loop`, `marketplace`, `model-context-protocol`. Public npm distribution confirms the category is productized.

## Agentic payments rails

10. **https://x402.org/** — x402: Linux Foundation standard for internet-native HTTP-402 payments; "empower agentic payments at scale"; 75.41M transactions / $24.24M volume in last 30 days; stablecoin-native, blockchain-agnostic. The micro-payment rail that makes per-question human payments viable.

## Protocol layer

11. **https://modelcontextprotocol.io/** — MCP: "an open-source standard for connecting AI applications to external systems… like a USB-C port for AI applications." The socket through which agents reach human networks.

## Human-in-the-loop at scale (enterprise, not real-time)

12. **https://www.scale.com/** — Scale AI: "Humans stay in the loop"; data engine sources contributors "with precision (25% have advanced degrees)"; 90% of leading generative AI model builders. Enterprise-scale HITL — no real-time micro-Q&A.
13. **https://www.prolific.com/** — Prolific: "Real human data. Ready in minutes." Human feedback for AI evals/preference tuning from representative populations; used by Google, Hugging Face, Asana. Batch studies, not on-demand questions.
14. **https://www.surgehq.ai/** — Surge AI: "Human Intelligence for AGI" — frontier data and RL environments; premium human-data workforce. Same enterprise-pipeline model.

## Expert Q&A / advisory networks (human-speed predecessors)

15. **https://www.clarity.fm/** — Clarity (Startups.com): per-minute paid calls with verified experts (fundraising, marketing); pre-charged estimate → connect on a conference line. No API, no machine clients, scheduled human calls.
16. **https://intro.co/** — Intro: "Book experts & get advice" — $200–$500 sessions with verified founders/execs (Drybar, Nextdoor, Wag founders listed). High-ticket, human-paced.
17. **https://en.wikipedia.org/wiki/JustAnswer** — Pearl.com/JustAnswer: "online paid question-and-answer service" (San Francisco). Proof that paying humans per-question works at scale — but no real-time agent access.
18. **https://www.zirtual.com/** — Zirtual: US-based virtual assistants "ready in one day," monthly plans. Dedicated-assistant model; subscription, not per-question.
19. **https://glginsights.com/** — GLG (expert-network incumbent; site blocked our scraper — cited as the category archetype of enterprise expert networks). _(Blocked: extraction failed — referenced from search results.)_

## Gig/skill marketplaces (agent-hostile incumbents)

20. **https://www.fiverr.com/** — freelance services marketplace; blocks automated access. _(Blocked: extraction failed; status via search result + RentAHuman blog's ToS critique.)_ See also https://en.wikipedia.org/wiki/Fiverr (NYSE: FVRR, worldwide marketplace).
21. **https://en.wikipedia.org/wiki/Fiverr** — Fiverr background: connects freelancers to businesses; originated $5-task pricing — precedent for micro-priced human services.
22. **https://en.wikipedia.org/wiki/TaskRabbit** — Taskrabbit: marketplace matching freelance labor with local demand (assembly, moving, errands), founded 2008, acquired by IKEA 2017 — the physical-errand template RentAHuman re-sells to agents.
23. **https://www.taskrabbit.com/** — Live Taskrabbit: "Book trusted help for home tasks" — consumer-first, no agent API.

## Related context

24. **https://rentahuman.ai/docs/x402** — RentAHuman's x402 autonomous signup/funding docs (linked from /for-agents). _(Linked reference; corroborates agent-native payment flow.)_
25. **https://x402.org/linux-foundation-announces-operational-launch-of-x402-foundation-to-standardize-internet-native-payments-for-ai-agents-and-applications/** — x402 Foundation launch announcement (linked from x402.org) — institutional validation of agentic payments.

### Notes

- Web search backend was intermittently returning empty results during this session; all load-bearing sources above were verified via direct URL extraction instead.
- helpexpert.me / newhuman.store were only ever described to us as concept names; nothing contradicts that, but no public roadmap, team, or repository for either could be found.
- Core differentiation thesis (real-time knowledge Q&A vs. RentAHuman's physical bounties) rests on the /about, /for-agents, /browse, and /mcp pages cited above.
