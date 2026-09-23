# LinkedIn — Introducing Code Review by Claude

- Source: https://www.linkedin.com/posts/claude_code-review-for-claude-code-activity-7436855228861136897-H9v7
- Fetched: 2026-09-23
- Status: ok

Public post plus visible comments. Not the full blog it links.

## Summary

Claude’s official post announces Code Review for Claude Code. When a pull request opens, Claude sends a team of agents to look for bugs in parallel. Each candidate bug is checked again to cut false positives, then ranked by severity. The author sees one summary comment and inline flags, not a transcript per agent. Anthropic says it has run this on most of its own pull requests for months. Results they publish: the share of pull requests that received substantive review comments rose from 16% to 54%. Engineers mark fewer than 1% of findings incorrect. On large pull requests (1,000 lines or more), 84% surface findings, about 7.5 issues each on average. The feature is tuned for depth and may cost more than their open-source GitHub Action. They say reviews generally run $15–25, billed on tokens, and scale with complexity. It is a research preview in beta for Team and Enterprise.

The comment thread is the governance argument. One reader says the real question is not whether agents find bugs but who owns the decision when an agent flags something a human would have approved — an accountability problem, not a quality problem. Others call $15–25 too high for a solo project, joke that CodeRabbit is finished, or note that several specialist agents beat one general reviewer (a commenter claims 3–4 specialists in their own setup). A builder with a large Claude Code toolchain calls a second pair of eyes the missing merge check.

## Key facts

- Mechanism: parallel bug-hunting agents, a verification pass, severity ranking, one summary plus inline flags.
- Internal before/after: substantive review comments on 16% of PRs → 54%.
- <1% of findings marked incorrect by engineers.
- Large PRs (1,000+ lines): findings on 84%, average 7.5 issues.
- Price guidance: about $15–25 per review on token usage; Team and Enterprise beta.
- Optimises for depth versus a cheaper open-source GitHub Action.
- Blog link is in the post; this fetch did not retrieve that article.

## How it works

Open a pull request. Agents search in parallel. A second step tries to confirm each bug so the thread stays short. Severity orders what a human sees. The human still has the GitHub thread; the post does not say the agents can merge. Cost follows how tangled the diff is, which is why a 1,000-line change is both where it finds the most and where the bill moves.

## Implications for codereview.uk / ui121

16% to 54% is the review-starvation number: even inside Anthropic, most pull requests were not getting a substantive look until they built a machine to comment. That measures comments, not accountable approval. The comment under the post is the offer — when the agent flags something a human would ship, someone has to own the call. codereview.uk is that owner, reading the same diff in an IDE-like ui121 task, with the agent summary as the brief rather than as the verdict. Price positioning: $15–25 is the bot’s cost for a deep pass; a human review sits above that and should say why. Do not claim <1% error; that is their engineers scoring their own bot.
