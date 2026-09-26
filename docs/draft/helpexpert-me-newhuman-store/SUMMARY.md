# helpexpert.me + newhuman.store — Concept Research

**Angle: Real-time "Rent a Human" — a network where AI agents, servers, and clients ask skilled humans questions and get help in real time. Human-on-demand, with a sophisticated structured UI around the human ask/answer loop.**

Researched: 2026-09-22. Note: both target domains (`helpexpert.me`, `newhuman.store`) currently show Squarespace "Coming Soon" parking pages — they are undeveloped name/concept plays, not live products. This document researches the _concept_ and the surrounding market.

---

## 1. Main goal

Create a **real-time human knowledge network**: a place where an AI agent, a server, a script, or a person can ask a skilled human a question and get an answer in minutes — text answers, judgment calls, verification, eyes-on-the-ground, expert opinions — via a clean, structured ask/answer UI (task spec, offer, accept, answer, proof, payment). In effect: **the "meatspace knowledge layer" for AI agents and humans alike** — not just hiring hands for physical tasks, but renting _judgment, expertise, and local knowledge_ on demand, machine-to-human and human-to-human.

## 2. The problem today

- **AI agents are being given bodies, but not brains-with-context.** The new "AI-to-human labor" market (exemplified by RentAHuman.ai — 750k+ registered humans, 100+ countries, MCP server + API, escrowed bounties) is dominated by **physical tasks**: inspect a storefront, collect a package, take a photo. There is no comparable polished network for **asking a skilled human a question in real time** — clarifying facts, verifying claims, local knowledge, niche expertise, a second opinion on what an agent just found.
- **Human-in-the-loop at scale is enterprise-only.** Scale AI, Surge AI, and Prolific provide human feedback, evals, and labeling for frontier model builders — but as bulk, contractual, enterprise pipelines with weeks of onboarding. They are not "ask a question now, pay $5, get an answer in 3 minutes."
- **Expert networks are human-speed and human-priced.** Clarity.fm, Intro.co, JustAnswer (Pearl.com), GLG-style expert networks connect humans to experts by phone/consult — $200–$500 per session, no API, no machine clients, no real-time structured answer objects.
- **Skill marketplaces are agent-hostile.** Fiverr, Upwork, TaskRabbit explicitly block scraping and have no agent APIs; RentAHuman's own blog makes this a selling point ("scraping job boards is fragile and against ToS").
- **No structured UI for the human ask/answer.** Even RentAHuman's UI is bounty-listing oriented. Nothing today offers a _question-first_ experience: type/paste a question, get routed to a ranked pool of available humans, chat in real time, receive a structured answer (text, photo, verification, sources) with escrow settlement.

## 3. How it helps

- **One endpoint for human intelligence**: MCP server / REST API so any AI agent can `ask_human(question, budget, deadline)` and get back a structured answer; humans get a real-time queue of paid micro-questions.
- **Escrow + proof built in** (like RentAHuman's Prompt → Match → Proof → Payment loop) applied to questions: proof is the answer itself, optionally verified by a second human.
- **Machine-native payments**: x402 / stablecoin rails (HTTP 402 payments are now a Linux Foundation standard with 75M+ transactions in 30 days) let autonomous agents pay per question with no card, no captcha.
- **Real-time, not gigs**: availability state, per-minute or per-question pricing, SLA timers — the difference between "post a bounty and wait" and "get an answer in the next 5 minutes."

## 4. What's cutting-edge

- **AI-agents-hire-humans as a category is brand new (2025–2026)** and already Y Combinator-backed (RentAHuman), press-covered (WIRED, Forbes, Nature badges on its site), with an npm MCP package and autonomous x402 signup — but focused on _physical_ tasks.
- **Agentic payments (x402 on USDC/Base)** make per-question micro-settlement between autonomous software and humans technically trivial for the first time.
- **MCP as the universal socket**: any MCP-compatible client (Claude, Cursor, custom agents) can plug into a human network with one config block — distribution that gig marketplaces never had.
- **Human-in-the-loop as a product surface** rather than an enterprise data pipeline: UIs designed around the ask/answer conversation, availability, verification badges, and structured answer objects.

## 5. ui121 fit

This is a near-perfect showcase for ui121's thesis: **the human ask/answer transaction is a structured-data problem wearing a chat costume.** ui121's structured-UI layer can render:

- Question intake as a structured form (category, deadline, budget, proof-required, location) instead of free-text chat.
- A live answer card: claim, evidence, confidence, expert badges, reviewable attachments.
- Agent-facing machine views of the same transaction (JSON/API surface) and human-facing rich views, from one underlying object model.
- Escrow/dispute status as visual state machines.

Competitors (RentAHuman included) ship chat-first, bounty-list UIs; a sophisticated structured ask/answer UI is the visible differentiator ui121 can own.

## 6. Why brilliant

- **Timing**: the AI-to-human labor market just proved demand (750k+ humans, $2.1M+ paid, YC backing) but only for physical errands — the _knowledge/help_ slice of the same wave is open.
- **Both clients at once**: humans ask humans (Clarity/JustAnswer demand, modernized real-time), and machines ask humans (a brand-new, exploding demand curve with no dominant player for Q&A-style help).
- **Structural moat via UX + protocol**: MCP/x402 rails are commoditized; the moat is the structured transaction model and the trust/verification UI around human answers — exactly ui121's strength.
- **Small-ticket economics work**: per-question micro-payments (x402) beat $300 consulting calls for the agent economy, where agents need thousands of cheap judgments, not one expensive meeting.
- **The domain names are already parked** — cheap to acquire, and the concept has a named, validated competitor to learn from and differentiate against (real-time knowledge vs. physical tasks).

**Key caveat / differentiation**: RentAHuman.ai is real, live, YC-backed, and owns the "hire a human" brand. helpexpert.me/newhuman.store must position as _real-time human intelligence-on-demand (Q&A, judgment, expertise)_ — not physical-task bounty posting — and must out-UI it.
