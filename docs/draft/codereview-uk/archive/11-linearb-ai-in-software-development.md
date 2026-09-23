# LinearB — AI in software development: what the 2026 data shows

- Source: https://linearb.io/library/ai-in-software-development
- Fetched: 2026-09-23
- Status: ok

This URL is one report article, not the library index. Figures are LinearB’s, correlational, from their 2026 benchmarks.

## Summary

LinearB’s claim is that AI raised code output without raising delivery. The 2026 Software Engineering Benchmarks Report covers more than 8.1 million pull requests from 4,800 teams and 163,820 contributors in 42 countries. AI pull requests merge within 30 days 32.7% of the time; unassisted pull requests merge 84.4% of the time. Elite teams clear about 95% acceptance on manual work and only just above 71% on AI work. Crossing 60% AI acceptance is described as hard. Adoption is nearly universal: 88.3% of surveyed organisations use AI-assisted tools daily or weekly, up from 71.6% in early 2024 (64.9% daily, 23.4% a few times a week). 44.7% do not formally measure impact, yet 76.1% of leaders report productivity gains from adoption signals rather than delivery data.

The page splits three kinds of pull request, and says blending them hides the effect. Agentic (Devin, Copilot coding agent, Codex) median size 89 lines, 75th percentile 293 lines, pickup at the 75th percentile 17.6 hours, review 6.4 hours. AI-assisted (a human still owns it): median 96 lines, P75 408, pickup 8.3 hours, review 3.2 hours. Unassisted: median 26, P75 157, pickup 3.4 hours, review 4.2 hours. So the largest changes get the shortest review once someone starts, and agent work waits about 5.25× longer to be picked up. Refactor rate at P75 is 0.37 unassisted, 0.22 assisted, 0.17 agentic — humans touch existing code more than 1.5× as often. AI commits are tidier (4.2 files versus 7.51) at a similar 65–66 lines per file. The mess is volume and missing ownership, not sloppy commits.

Leadership confidence is thin: 39.4% somewhat confident in AI code quality, 33% neutral, 19.1% somewhat unconfident, 6.4% extremely confident. Tool choice moves acceptance (Devin improving from April in their series, Copilot declining from May) while manual acceptance sits around 80–82%. Data readiness is the top “not ready” signal (15.6% strongly disagree their data is usable for AI, and with somewhat-disagree plus neutral the page sums 64.5%). Policy is split: 30.5% strongly agree they have a clear AI policy, 21.1% strongly disagree.

## Key facts

- 8.1M PRs, 4,800 teams, 163,820 contributors, 42 countries.
- 30-day merge: AI 32.7% vs unassisted 84.4%. Elite bar ~95% manual vs ~71% AI.
- Pickup P75: agentic 17.6h, assisted 8.3h, unassisted 3.4h. Review P75 inverts: assisted 3.2h, unassisted 4.2h, agentic 6.4h.
- Size P75: assisted 408 lines, agentic 293, unassisted 157.
- 88.3% weekly-or-daily AI use vs 71.6% in early 2024.
- 44.7% do not measure; 76.1% of leaders still claim gains.
- One high-Devin outlier reached near-parity acceptance; framed as possible, not typical.
- APEX measurement steps: baseline cycle time, size, acceptance, rework; segment by contribution type; compare delivery, not suggestion-accept clicks; govern with routing, AI review, and merge rules for agent work.

## How it works

An agent or an assistant produces a pull request that is larger and less clearly owned than a human’s. It waits. When a reviewer finally opens it, assisted work is cleared faster than unassisted work, which the page reads as less scrutiny on the biggest diffs. Acceptance stays low because ownership is fuzzy, agents are aimed at low-priority backlog, and reviewers hesitate. The operating fix they prescribe is tagging every pull request as agentic, assisted, or unassisted, assigning a named owner to agent work, and running an automated pass for security, bugs, performance, and spec mismatch before a human starts.

## Implications for codereview.uk / ui121

This is the data backbone for “review is the bottleneck.” The offer writes itself: agent pull requests sit 17.6 hours for an owner. codereview.uk is that owner, on a clock, working the diff in an IDE-like ui121 task, with the three-way label visible so the reviewer knows they are looking at agent output. Price against pickup time and acceptance, not against lines typed. Warn buyers that a blended “AI velocity” dashboard will flatter them; the service should report acceptance of the slices it touched. Low leadership confidence (only 6.4% extremely confident) is the emotional hook for a named human sign-off.
