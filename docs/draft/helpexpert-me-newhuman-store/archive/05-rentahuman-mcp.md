# RentAHuman MCP and REST reference

- **Source:** https://rentahuman.ai/mcp
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

`/mcp` and `/docs` are one consolidated reference. The page says older `/mcp` and `/api-docs` URLs now route into this same document. It is the canonical catalog: how to install the npm MCP server, which tools exist, which HTTP routes mirror them, and how errors and rate limits behave.

The product thesis on the page is still physical hire: agents search people, post bounties, manage the thread that hangs off a bounty, and pay. Direct conversation creation is retired. Messaging is for bounty threads, service bookings, feedback, disputes, and support. A cached `start_conversation` tool is documented only so old clients get an error that points them at `create_bounty`.

There are two transports. The local npm process exposes the full tool list. A remote JSON-RPC endpoint at `/api/mcp` is a smaller compatibility set. Remote clients such as ChatGPT and Claude can use OAuth 2.0 with PKCE; direct agents keep using an API key. REST accepts the key as `X-API-Key` or `Authorization: Bearer`. Identity for writes comes from the key or a Firebase session, never from an ID in the body. Search and browse are free; messaging, bounties, bookings, payments, keys, and webhooks need auth.

The catalog is much wider than “post an errand.” Named groups include discovery, conversations, bounties, humanization (a human rewrites private text and the platform scores how machine-written the result looks), taste runs (a paid panel compares a few creative artifacts), QA runs (humans test a URL, including recurring and video evidence), services and bookings, escrow and wallet, x402 signup and funding, webhooks, support, and even a cake-delivery integration. That last item shows the platform will wrap a vertical errand as first-class tools, not only generic bounties.

Happy paths the docs push: search then inspect profile and reviews, dry-run a bounty before the live post, accept an applicant, review evidence, and only then release payment with an explicit acknowledgement. Humanization and QA/taste runs are the closest things to “ask a human for judgment,” but they are batch jobs with templates, budgets, and reports — not a live expert chat.

## Key facts

- Section outline: Agent setup; Auth and accounts; Common workflows; MCP transports; Tool catalog; REST basics; Webhooks; Errors and rate limits; Legacy URLs.
- Tool groups: Discovery, Conversations, Bounties, Crypto (x402), Escrow and wallet, Cake delivery, Services, Identity, Webhooks, Support. REST also documents humans, humanizations, QA runs, and agents/keys.
- Discovery tools include `search_humans`, `get_human`, `get_reviews`, block and prefer lists, taste-run and QA-run tools.
- Bounty tools include create (with dry run), applications, accept/reject, submissions, review, outreach boost, cancel.
- Payment tools include `rent_human`, escrow checkout, confirm delivery, release, dispute, wallet, direct send, agent checkout.
- Ordinary bounty pool cap called out in the tool notes: escrow-funded total cannot exceed $10,000.
- Evidence review: up to 3 redo cycles; automated findings are advisory; release needs `acknowledgeRelease`.
- Idempotency keys on major writes replay the original result for 24 hours.
- Webhooks: up to 5 HTTPS endpoints, HMAC-SHA256 signature header, exponential backoff, delivery log.
- Published limits (honor response headers; defaults can change): public browse 100/min per IP; authenticated browse and general reads 600/min; general writes 300/min; API-key bounty writes 10,000 per 24h; API-key conversations 50,000 per 24h; login 10/min; signup 20/hour. An admin-only “automated” tier is about 5× the API-key quotas and is not self-serve.
- Status codes documented: 200, 400, 401, 403, 404, 409, 429, 500.

## How it works

An agent installs the npm server, stores an API key, and calls tools. Search is free. A bounty is drafted, optionally previewed, then funded from a wallet or a hosted checkout. Humans apply; the agent accepts; the worker submits evidence; the agent reviews files and either approves, asks for a redo, or rejects. Payment release is a separate, explicit step. Wallet-funded taste and QA runs are the structured-judgment products: define artifacts or a URL, pay a panel or testers, poll or wait for a `run.report_ready` style webhook.

## Implications for helpexpert.me / newhuman.store

The “no Q&A primitive” reading is only half right. There is still no ask-an-expert tool that returns a short answer in minutes. There is, however, a growing judgment layer: humanization, taste panels, and human QA with video, transcripts, and GitHub status checks. A knowledge network that waits will find those batch products filling the “human opinion” slot. Differentiate on latency and shape: one question, one available expert, one structured answer object, settled per question — not a multi-hour panel or a bounty seat. Also copy their discipline: dry-run before spend, idempotency, evidence separate from payment, and webhooks instead of polling. Do not copy cake delivery or street-errand tools into a help brand.
