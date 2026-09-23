# Codacy — AI is breaking code review (part 1)

- Source: https://blog.codacy.com/ai-breaking-code-review-how-engineering-teams-survive-pr-bottleneck
- Fetched: 2026-09-23
- Status: ok
- Codacy, 8 June 2026. Part 1 of “The Future of Code Review.” Part 2 is an extra note.

## Summary

Codacy’s opening claim is that AI made code easier to produce and no easier to ship safely. The bottleneck moved from writing to deciding whether a change is safe to merge. CircleCI’s 2026 State of Software Delivery, on more than 28 million workflow runs and 22,000-plus organisations, shows feature-branch throughput up, while median main-branch throughput fell. The page’s headline figures: overall throughput +59% year over year; median feature-branch throughput +15%; main-branch throughput nearly −7%; main-branch success 70.8%. A minority of teams grew main-branch throughput 26% while feature-branch activity rose 85%, which Codacy credits to stronger automated checks, cleaner review signal, and clearer merge policy.

Faros is cited for 31% more pull requests merging with no review at all. LinearB’s 2026 benchmarks, as quoted here: agentic pull requests have pickup 5.3× unassisted; AI-assisted wait 2.47× longer. Stack Overflow 2025: trust in AI accuracy down to 29%. Three pressures: more branches per engineer, a diff with no implementation diary, and code that looks finished so a casual read fails.

The recommended stack is three layers. Deterministic checks (lint, types, SAST, dependencies, secrets, coverage, complexity, pass/fail policy) run before a human is pinged, and a failure never enters the review queue. An AI reviewer then summarises and ranks risk so the human does not start from a blank diff. The human keeps architecture, business logic, maintainability, cross-team impact, and whether a simpler internal API was ignored. Generic bots miss local facts: v1 middleware when v2 is canonical, a dropdown the design system already has, a controller that skips the service layer. They also invent dependency versions and ignore repo instructions, while still catching real bugs (dedupe, encoding, missing workflow triggers).

Compliance (SOC 2, ISO 27001, ISO 42001, HIPAA) can keep a required human approval without making the whole review manual, if the approval sits on exportable evidence of which checks ran. Probabilistic AI review cannot be the only enforcement. The ceiling: agent volume will not scale with human reconstruction of context. Some teams are already splitting validation, approval, and deploy risk, including merge-first for changes with strong tests and rollback.

## Key facts

- CircleCI 2026: 28M+ runs, 22k+ orgs; +59% throughput; median main-branch throughput down ~7%; success 70.8%; outlier cohort +26% main / +85% feature.
- Faros: +31% PRs merged with no review.
- LinearB via Codacy: 5.3× pickup for agentic PRs; 2.47× wait for AI-assisted.
- Trust: 29% (Stack Overflow 2025).
- Human questions that stay: right layer, right business rule, future maintenance, other teams, simplest use of existing code.
- Audit artefact: which checks ran, which findings are new, which policies fired — a dashboard export instead of a scramble.

## How it works

Connect the repo. On open, scanners decorate the pull request with complexity, duplication, coverage, security, and completeness. If those fail, reviewers are not asked to look. If they pass, an AI summary points at severity. A required non-author approval, where policy demands one, is a judgement on the remainder, recorded next to the machine evidence. Repository rules have to be executable; a markdown wish list is not context.

## Implications for codereview.uk / ui121

Use their sentence in paraphrase: the bottleneck is deciding whether code is safe to merge. codereview.uk is that decision, staffed, on a diff opened in an IDE-like task, with scanner evidence already in the brief so the reviewer does not redo lint. The compliance tier is “named human plus exported checks,” which matches SOC 2 buyers in UK fintech. Do not promise to replace the gate. Promise the judgement the gate cannot encode, and a record of who decided. Part 2 of their series pushes further toward automated verification; keep human review for the high-risk list rather than fighting that essay head-on.
