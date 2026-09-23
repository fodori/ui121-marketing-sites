# Medium (Nuno Roberto) — Your Claude Code reviewer has multiple personalities

- Source: https://medium.com/@nuno.roberto/your-claude-code-reviewer-has-multiple-personalities-985bb6e99dfe
- Fetched: 2026-09-23
- Status: ok

## Summary

Roberto, a chief AI and data architect, uses a pull request that sat for six days: about 1,400 lines across eleven files, mixing authentication middleware, schema migrations, and API endpoints. Each reviewer looked at a different slice, commented, and left. The security issue in the middleware depended on the schema change, and nobody held both at once. He treats that stall as normal once AI writes faster than organisations review. The piece, dated 24 June 2026 and marked member-only on Medium, explains Anthropic’s March 2026 research preview, Code Review for Claude Code, as a team of parallel agents rather than one reviewer personality.

His account of the mechanism: a PR event does not send the whole diff to a single model. Separate agents run at once, aimed at different failure types — security, logic, maintainability, and style or repo conventions. They then try to knock down their own findings before anything is posted. A coordinator merges overlaps and ranks severity. Output is one overview comment plus inline notes. Humans still approve merges. The system does not approve or block. He says a typical run is on the order of twenty minutes, against hours or days for a first human comment.

He repeats Anthropic’s internal figures and says they match what he has seen: large PRs (over about 1,000 lines) get substantive findings in about 84% of reviews, averaging about 7.5 issues; small PRs (under about 50 lines) about 31% with roughly 0.5 issues. Human reviewers mark fewer than 1% of surviving findings as wrong. Substantive review comments at Anthropic moved from about 16% of PRs to about 54%. He cites an IBM Research / AAAI 2026 result that a single model judging itself catches about 45% of code errors, while several independent assessors reach about 94%, and uses that to justify the split personalities. He also claims that by February 2026 roughly 4% of public GitHub commits, on the order of 135,000 a day, were authored by Claude Code, and that Anthropic engineers’ own code output grew about 200% in a year while review capacity did not.

He contrasts three layers. The open-source Claude Code GitHub Action is one model, one pass, good for a workflow you define. Code Review is the managed multi-agent service. Linters and static analysers (ESLint, SonarQube, Semgrep) stay the cheap pattern matchers and cannot see that a migration in one file breaks an auth check in another. Configuration is split: CLAUDE.md describes the system; REVIEW.md says what review should prioritise (auth regressions, webhook idempotency, billing transactions, double-sends) and what to ignore (format, import order, style already linted). Pricing in his telling is token-based, about $15–25 per review. A team of 200 PRs a week at $20 is about $16,000 a month. Setup is an org admin installing a GitHub App and choosing repos. GitLab, Bitbucket, and Azure DevOps are not supported in the preview he describes. Locally, `/simplify` runs three agents aimed at reuse, quality, and efficiency and then edits; `/review` hunts bugs and can take a PR number. He uses both on a platform he calls Kairos. He notes Claude Code’s run-rate above $2.5 billion and names large customers as the buyers who asked for this because PR volume outran reviewers.

## Key facts

- Author: Nuno Roberto. 24 June 2026. About an 18-minute read. Member-only on Medium.
- Anecdote: 1,400 lines, 11 files, six days, cross-cutting auth and schema miss.
- Product: Code Review for Claude Code, research preview from 9 March 2026, Teams and Enterprise. Does not approve merges.
- Anthropic-attributed metrics he highlights: 16% → 54% substantive comments; 84% finding rate and ~7.5 issues on large PRs; ~31% and ~0.5 issues on small PRs; under 1% human disagreement; ~20 minutes to comment.
- Cost he states: $15–25 per review; example ~$16k/month at 200 PRs/week.
- GitHub only in this preview. Custom files: CLAUDE.md vs REVIEW.md. CLI: `/review` and `/simplify`.

## How it works

Open PR, or push, or trigger by hand. The app fans out specialist agents on the same diff plus nearby code. Each agent argues against its own hits. A coordinator dedupes and ranks (security and secrets first, then logic and races, then maintainability, then style). Comments land as one summary and inline notes, with thumbs that feed later tuning. Static analysis still runs first for cheap rules. The human merge decision stays outside the tool. Locally, `/simplify` is a hygiene pass that may edit; `/review` is the bug pass and can target a PR URL.

## Implications for codereview.uk / ui121

This is the closest “AI already reviews” story in the archive, and it still ends where a human task begins. Anthropic’s own design refuses to approve the merge. The six-day PR fails because no person saw middleware and schema together. A ui121 review task should put those interacting files on one IDE-like surface and record a named accept, fix, or escalate. Parallel personas are the first pass he describes, at a price ($15–25) that already assumes a later human. codereview.uk should not compete as another comment bot. It should be the accountable reading of the interaction the agents are not allowed to sign.
