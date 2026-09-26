# codereview.uk — Research Summary

**Angle:** TASK = REVIEW CODE — a shared code review service where AI (or a human) writes code and a shared expert reviewer vets it, with a human-in-the-loop approval step.

**Domain idea under evaluation:** codereview.uk — a shared "expert reviewer on tap" for the AI-coding era. You (or your coding agent) ship code; the service — an AI reviewer plus a human expert — reviews it, comments, and a human approves before merge.

---

## 1. Main goal

Become the trusted review gate for AI-generated code. Every PR (whether written by Cursor, Claude Code, Copilot, or a human) passes through codereview.uk: automated AI analysis first pass, then a senior human reviewer for the things AI misses (architecture, intent, security), and an explicit human approval that serves as the merge gate — audit-logged, governance-friendly.

## 2. The problem today

- **Review is the new bottleneck.** AI lifted writing throughput, not delivery: LinearB's analysis of 8.1M PRs shows code output rose without delivery rising, and review wait times grew. The bottleneck has "moved from writing code to deciding whether code is safe to merge" (Codacy).
- **AI-written code is riskier and slower to review.** Sonar's State of Code: 38% of developers say reviewing AI-generated code requires _more_ effort. New Relic: 74% say ≥25% of AI-generated code needs significant post-deployment rework. Bug rates per developer up 54% (The New Stack).
- **Safety holes slip through.** 53% of developers have found security vulnerabilities in AI-written code (DevToolLab). Most AI review tools analyze PRs _without a human in the loop_ (Sourcegraph) — they catch lint, miss logic and intent.
- **Small teams have no reviewer.** Solo founders, agencies, and vibe-coders have no senior second pair of eyes; review-as-a-service exists (PullRequest, Cloudester) but is priced and packaged for enterprise.
- **Governance pressure.** GitLab and CodeRabbit guidance both call for explicit human-in-the-loop checkpoints at code review, but most teams have no practical mechanism for it.

## 3. How codereview.uk helps

- **Two-pass review:** fast AI pass on every PR (bugs, security, style), then human senior review of the 20% that matters (logic, architecture, security, intent).
- **Review-as-a-subscription, not enterprise contracting:** flat monthly plans for solo devs, startups, agencies; a shared pool of vetted expert reviewers means no hiring.
- **Human approval as the merge gate:** reviewer signs off in-product; approval feeds back as a required status check — turning "human in the loop" from governance theater into a real gate.
- **Works with agent workflows:** reviews PRs from Claude Code, Codex, Cursor regardless of who/what wrote them.

## 4. Cutting edge

- Anthropic's own Code Review deployment took Anthropic's substantive-review rate from 16% → far higher, showing AI-assisted review demand at the frontier.
- Cloudflare runs AI code review "at scale" across tens of thousands of MRs — approval automation is now table stakes; _human judgment on the flagged subset_ is the differentiator.
- The market: AI code review category ≈ $420M ARR in 2026, 44% of teams using an AI reviewer on some PRs (IdeaPlan) — but nearly all of it is AI-only, no human tier. That gap is the wedge.

## 5. Why brilliant

- **The AI tailwind is structural:** AI generates more code every quarter; someone _must_ review it. Verification, not generation, is where trust is earned (Pagano: "we're speeding up the wrong part of the pipeline").
- **Human-in-the-loop is the compliance story** enterprises and even agent vendors say they need — codereview.uk sells the checkpoint itself as the product.
- **Reviewer supply-side is labor-market-proof:** expert reviewers work async per-PR, no meetings, perfect for a shared pool — high margins, clear unit economics (minutes per PR × PR volume).
- **Natural upsell ladder:** AI review (free/cheap) → human review (paid) → audit/compliance reporting (enterprise).
- **Domain bonus:** codereview.uk is a memorable, category-naming .uk for a UK/global service.

## 6. ui121 fit

ui121's human-in-the-loop UX is the core product surface here:

- **Review queue UI** — PRs pending review with diff viewer, inline comment threads, AI findings pre-annotated for the human reviewer to confirm/reject (classic HITL verification UX).
- **Approval flow** — one-click approve / request-changes with structured reason codes; approval events become merge-gate status checks and audit-log entries.
- **Reviewer-side triage** — the shared reviewer sees prioritized queues (risk-scored by AI), with evidence attached per proposal.
- **Two-sided marketplace UX:** writer side (submit PR, watch review status) and reviewer side (pick up queue items, inline annotate). ui121's pattern of "AI does the pass, human does the confirm" maps one-to-one.

## 7. Competitive landscape (quick map)

| Player                                           | Model                                | Gap codereview.uk attacks                              |
| ------------------------------------------------ | ------------------------------------ | ------------------------------------------------------ |
| CodeRabbit, Copilot Code Review, Ellipsis, devlo | AI-only PR review                    | No human judgment; false positives; no accountability  |
| PullRequest                                      | Human + AI, enterprise-priced        | Not accessible to small teams/solo founders            |
| Cloudester and consultancies                     | Manual services                      | Not productized, no AI pre-pass                        |
| Git AutoReview                                   | AI multi-model + human approval gate | Approval is the org's own human, not a provided expert |
| Sonar, Codacy, Graphite                          | Static analysis / quality gates      | Not judgment; doesn't read intent                      |
