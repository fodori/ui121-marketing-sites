Full research notes: [archive/INDEX.md](archive/INDEX.md).

# SOURCES.md — codereview.uk research

All URLs were returned by live web search (2026-09-22). Notes summarize what each source contributes.

## AI code review market & tools

1. **IdeaPlan — AI Code Review Tools Market Share 2026** — https://www.ideaplan.io/blog/ai-code-review-tools-market-share-2026
   Market sizing: ~$420M ARR across AI code review vendors in 2026; 44% of teams use an AI reviewer on at least some PRs. Core TAM evidence.

2. **Kunal Ganglani — 2026 AI Code Review Tools Benchmark (CodeRabbit etc.)** — https://www.kunalganglani.com/blog/ai-code-review-tools-2026-compared
   Independent benchmark; reality vs marketing of AI reviewers.

3. **QA.tech — 10 Best AI PR Code Review Tools 2026** — https://qa.tech/blog/top-5-ai-pr-code-reviewers-2025
   Hands-on testing of CodeRabbit, devlo, Copilot, Ellipsis — competitive landscape.

4. **Sourcegraph — 13 Best Automated Code Review Tools 2026** — https://sourcegraph.com/blog/automated-code-review-tools
   Key framing: most automated tools analyze PRs _without a human in the loop_ — the exact gap a human-review service attacks.

5. **DevToolLab — Best AI Code Review Tools 2026** — https://devtoollab.com/blog/ai-code-review-tools
   Stat: 53% of developers have found security vulnerabilities in AI-written code; teams using Cursor/Claude/Copilot write 80% of code with AI.

6. **Git AutoReview — AI Code Review Complete Guide 2026** — https://gitautoreview.com/guides/ai-code-review
   Competitor combining human-in-the-loop approval + multi-model AI; closest analog.

7. **madewithlove — AI code review tools: what works, what doesn't** — https://madewithlove.com/blog/ai-code-review-tools/
   "AI review catches what humans miss and misses what humans catch" — the complementarity argument for AI + human tiers.

8. **Medium (lewis\_) — Best AI Code Review Tools 2026** — https://medium.com/@lewis_75321/the-best-ai-code-review-tools-in-2026-599c7dd1b305
   Logic errors/security gaps emerge from AI changes interacting with existing codebase — why review depth matters.

## The bottleneck problem

9. **The New Stack — AI broke code review** — https://thenewstack.io/ai-code-review-pipelines/
   Bugs per developer up 54%; incidents up; two expert views on what replaces classic review. Problem-severity anchor.

10. **Sonar — State of Code Developer Survey (PDF)** — https://www.sonarsource.com/state-of-code-developer-survey-report.pdf
    38% of developers say reviewing AI-generated code requires more effort; 59% rate review effort moderate/substantial.

11. **LinearB — AI in software development: what the 2026 data shows** — https://linearb.io/library/ai-in-software-development
    8.1M PRs analyzed: AI raised code output without raising delivery; review wait grew. Data backbone for "review is the bottleneck."

12. **Antonio Pagano — The AI Verification Bottleneck** — https://antoniopagano.com/blog/ai-verification-bottleneck/
    Thesis: AI sped up generation; review/verification is now the bottleneck — "we're speeding up the wrong part of the pipeline."

13. **Codacy — AI Is Breaking Code Review: surviving the PR bottleneck** — https://blog.codacy.com/ai-breaking-code-review-how-engineering-teams-survive-pr-bottleneck
    "The bottleneck has moved from writing code to deciding whether code is safe to merge."

14. **New Relic — State of AI Coding 2026** — https://newrelic.com/blog/ai/state-of-ai-coding-2026
    74% say ≥25% of AI-generated code needs significant post-deployment rework.

15. **Stack Overflow Blog — Coding agents and decision fatigue** — https://stackoverflow.blog/2026/05/21/coding-agents-are-giving-everyone-decision-fatigue/
    80% of AI-generated content is edited before finalization (Smartsheet) — humans stay in the loop whether or not it's productized.

16. **Reddit r/ExperiencedDevs — 2025/2026 study on dev speed with AI** — https://www.reddit.com/r/ExperiencedDevs/comments/1tlqzld/update_study_2025_study_shows_experienced_devs/
    Devs think they're faster with AI but ~20% slower (2025 study) — verification, not typing, is the real cost.

## Human-in-the-loop governance

17. **GitLab — How to govern agentic AI, MCPs, and AI code assistants** — https://about.gitlab.com/blog/govern-agentic-ai-mcps-code-assistants/
    Explicit recommendation: document human-in-the-loop checkpoints for code review, testing, deployment approval. Validates the product premise.

18. **CodeRabbit — AI governance for coding agents** — https://www.coderabbit.ai/guides/ai-governance-coding-agents
    Control set: RBAC, human-in-the-loop approvals for high-impact actions, immutable audit logs — feature checklist for the compliance tier.

19. **IBM — What Is Human In The Loop (HITL)?** — https://www.ibm.com/think/topics/human-in-the-loop
    Canonical HITL definition/benefits — useful for positioning language.

20. **LinkedIn (Stephen Schmidt) — Why "HITL" is agentic governance theater** — https://www.linkedin.com/pulse/why-human-loop-agentic-governance-theater-stephen-schmidt-8dcde
    Skeptic view: HITL checkpoints are often decorative — a service selling _real_ human review counters this critique.

21. **Airtable — AI agent platforms with HITL controls** — https://www.airtable.com/articles/human-in-the-loop-ai-agents
    Cross-platform comparison of approval gates; patterns for review-queue UX.

22. **CodeDTX — Human-in-the-Loop AI Agents for Enterprise** — https://codedtx.com/human-in-the-loop-ai-agents
    Risk-tiered approval gates with evidence attached per proposal — maps to reviewer triage UI.

## AI review at scale / evidence

23. **Cloudflare Blog — Orchestrating AI Code Review at scale** — https://blog.cloudflare.com/ai-code-review/
    Tens of thousands of MRs; approves clean code, flags real bugs — proof of production viability.

24. **Medium (nuno.roberto) — Your Claude Code Reviewer has multiple personalities** — https://medium.com/@nuno.roberto/your-claude-code-reviewer-has-multiple-personalities-985bb6e99dfe
    Anthropic: only 16% of PRs got substantive review before Claude Code Review — quantifies the review-starvation problem.

25. **LinkedIn — Introducing Code Review by Claude** — https://www.linkedin.com/posts/claude_code-review-for-claude-code-activity-7436855228861136897-H9v7
    Governance question: who owns the decision when an agent flags something — a human reviewer-of-record is the answer being bought.

## Review-as-a-service & competitors

26. **Startup Intros — PullRequest: funding, team & investors** — https://startupintros.com/orgs/pullrequest
    PullRequest = code review as a service, automation + network of professional senior engineers — the direct precedent for codereview.uk.

27. **Panto AI — GitLab Duo alternatives for code review** — https://www.getpanto.ai/blog/gitlab-duo-alternatives
    Comparison table placing PullRequest ("Human + AI reviews") vs AI-only tools; pricing-gap evidence.

28. **Cloudester — Code Review Services** — https://cloudester.com/code-review-services/
    On-demand expert eyes for PR/architecture reviews — shows demand for human review services at consultancy pricing.

29. **Fintech Weekly — Why every dev team needs a code review strategy** — https://www.fintechweekly.com/magazine/articles/why-every-development-team-needs-a-code-review-strategy
    Baseline: PR review workflow as standard practice; regulated-finance angle for compliance upsell.
