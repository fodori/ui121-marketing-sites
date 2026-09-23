# madewithlove — AI code review tools: what works, what doesn’t

- Source: https://madewithlove.com/blog/ai-code-review-tools/
- Fetched: 2026-09-23
- Status: ok
- Yannick De Pauw, 5 January 2026

## Summary

The consultancy’s guide is the complementarity argument in plain language. AI review is reliable at security signatures, style, missing tests for a new path, long functions, and copy-paste. Humans are reliable at whether the change sits in the right layer, whether it matches domain rules, whether a working solution is the wrong strategy, and which trade-off the team actually wants. The overlap is small, so the combination beats either alone.

They sort tools into five buckets: inline suggestions (Copilot, zero setup, weak architecture), automated PR bots (Cursor Bugbot, low setup), a scripted LLM such as Claude for a 500-line refactor, dedicated platforms (CodeRabbit, Ellipsis, custom rules), and a self-hosted model (Ollama) when source cannot leave the network. Advice is to start with one bot, not two, and to adopt review before adopting generation because the signal is higher and the risk is lower.

Three shared blind spots: architectural fit (a feature implemented in the controller that should be middleware), business context (a German rounding rule, a deliberate slow registration), and “correct but wrong” (it passes tests and makes the next change harder). Setup is choose by data-residency, tune for two or three weeks, then lock the order AI-first, human-second. Pattern accuracy is put at 80–90% genuine when the issue is security or style; contextual accuracy drops. A healthy dismiss rate is under 20%; above 30% the tool creates work. They expect a 15–30% drop in security and pattern bugs escaping in the first three months if the tool is working. Typical bot latency is 1–3 minutes, 3–5 on a 500-line multi-file change.

IP is three tiers: cloud plus a DPA (most SaaS), self-hosted open models (fintech, health), air-gapped inference (defence and classified). Juniors who let the bot catch every mistake stop learning review instinct.

## Key facts

- AI catches: SQL injection, XSS, hardcoded secrets, insecure dependencies, naming, import order, untested paths, complexity, duplication.
- Humans catch: place in the architecture, domain rules, strategic direction, implicit contracts, performance-versus-readability.
- False-positive target: under 20% of comments dismissed. Out of the box, expect more noise.
- Metrics: defect escape, review cycle time, dismiss rate, reviewer satisfaction. If cycle time rises, the bot is noisy.
- Decision table: small GitHub team → CodeRabbit or Bugbot; enterprise with a DPA → Copilot plus CodeRabbit; deep refactors → Claude; regulated → Ollama; already on Copilot and budget zero → Copilot review.
- Linter versus AI: a linter flags a missing semicolon; the model flags a query inside a loop.
- Monorepos: tools review the diff, so size is not the performance problem; cross-package context is the quality problem.

## How it works

Ask whether source may leave the building. If yes, install one GitHub app and have comments on the next pull request within about 15 minutes. Turn on security, coverage gaps, stack anti-patterns, and naming. Turn off format nits the linter owns and subjective refactors. Add project rules (“no raw SQL in controllers,” “migrations must reverse”). For two or three weeks, watch what people dismiss. Humans should not re-check what the bot already cleared; they should verify a claimed null dereference and spend the rest of the pass on design. If source may not leave, budget about a week to stand up a local model and accept weaker quality.

## Implications for codereview.uk / ui121

This is the tier chart for the site. Bots own the mechanical layer; the paid task is architectural fit, domain rules, and “correct but wrong,” done by a person looking at the change in an IDE-like surface. Offer a regulated tier that never implies the reviewer pastes the client repo into a public model — ui121 can keep the diff inside the customer’s tenancy. The junior-learning warning is a services line: review as apprenticeship, not only as a gate. Measure the engagement the way they measure a bot: escape rate and whether reviewers trust the queue, not comment volume.
