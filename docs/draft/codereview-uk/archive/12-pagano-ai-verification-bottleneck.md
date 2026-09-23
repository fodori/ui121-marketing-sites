# Antonio Pagano — The AI Verification Bottleneck

- Source: https://antoniopagano.com/blog/ai-verification-bottleneck/
- Fetched: 2026-09-23
- Status: ok
- 13 May 2026

## Summary

Pagano’s essay says the industry sped up generation and left verification expensive. The anecdote is a senior engineer spending twenty minutes on an eighty-line Cursor diff, reconstructing why a concurrency pattern exists, and finding a channel edge case that would deadlock under load — code that compiles and passes the first tests.

He compiles 2026 secondary stats. From Sonar’s survey of 1,100-plus developers: 42% of committed code is AI-generated or assisted, expected to reach 65% by 2027; 61% say AI often looks correct but is not reliable; 38% say reviewing it takes more effort than human code; 96% do not fully trust it; only 48% always verify before commit. DORA: 90% adoption, a median of two hours a day with AI tools, and over 80% reporting a productivity gain. Opsera, on 250,000 developers across 60 enterprises: time-to-PR down as much as 58%, AI pull requests waiting 4.6× longer in human review, seniors capturing nearly 5× the productivity gain of juniors, and 15–18% more security vulnerabilities in AI-written code. Digital Applied’s Q1 2026 survey of 2,847 developers: reviewing AI code is the largest time sink, median 11.4 hours a week, up 31% year over year; heavy agent users at 14–16 hours of review with writing hours flat. iBuidl, six months and 14,000 pull requests: AI-assisted code has a 12% lower syntax and logic bug rate and a 23% higher architectural-violation rate; rich `.cursorrules` or Copilot instruction files cut that excess from 23% to 9%. Harness: 45% of frequent AI users deploy daily or faster, versus 32% of occasional users. Sonar: teams on SonarQube with AI-specific quality profiles are 44% less likely to have outages caused by AI-generated code. Perforce 2026: high-maturity orgs are 36% more likely to automate most of the path from commit to production and 66% more likely to handle incidents very effectively.

Developers now rank reviewing and validating AI code as the top skill of the era, in his reading of Sonar. Juniors accept suggestions more often and ship more AI bugs. The tools lower the floor more than they raise the ceiling, so juniors need seniors most when seniors are stuck in review.

## Key facts

- Review load: median 11.4 h/week, +31% YoY; heavy users 14–16 h (Digital Applied, n=2,847).
- Creation vs queue: up to 58% faster to open a PR, 4.6× longer human-review wait (Opsera).
- Defect mix: −12% syntax/logic bugs, +23% architectural violations; context files bring the excess down to +9% (iBuidl, 14k PRs).
- Senior vs junior productivity capture: about 5× (Opsera).
- Suggested AI quality bar from Sonar’s guidance, as he reports it: 90% coverage on new code, under 1% duplication, tighter cognitive-complexity limits than for human code.
- His team’s early practice: same static analysis for AI and human PRs, smaller agent chunks, plan-then-act so the reviewer sees reasoning. Review time fell because missing tests were no longer the human’s job.

## How it works

Reviewing a colleague, you rebuild intent from the ticket, the commits, and the conversation. Reviewing a model, you reverse-engineer intent from output that has none. That is why plausible code is harder, not easier. His fix is not “use less AI.” It is earlier, automated verification: a harder gate on generated code, repo instruction files so the model sees local architecture, security scans before a human opens the diff, and smaller pull requests. A 400-line agent refactor should be split, or the agent should explain the plan before it edits.

## Implications for codereview.uk / ui121

The line “we sped up the wrong end of the pipeline” is the homepage sentence, attributed as Pagano’s thesis in paraphrase. The product is verification capacity: seniors are the scarce reviewers, and a ui121 task lets a codereview.uk reviewer spend the twenty minutes on the deadlock, not on missing tests. Show the plan or the ticket beside the diff so intent is not reverse-engineered from a blank description. The seniority gap is a staffing story — you are renting the experienced eye juniors no longer get inside the team. Keep the stacked citations labelled; several are surveys of surveys.
