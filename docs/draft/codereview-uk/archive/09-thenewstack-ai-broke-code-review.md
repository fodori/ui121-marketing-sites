# The New Stack — AI broke code review

- Source: https://thenewstack.io/ai-code-review-pipelines/
- Fetched: 2026-09-23
- Status: ok

The URL returned the 8 September 2026 piece “AI broke code review. Two experts disagree on what replaces it.” (TNS Staff), surrounded by a large set of unrelated headlines from the same site. This note covers that article only. It is an event promo, not a methods paper.

## Summary

The article says AI-generated code has overwhelmed human review, and two engineers disagree on the replacement. John Bristowe (principal developer advocate, Octopus Deploy) and Viktor Farcic (DevOps Toolkit) were booked for a 29 September live conversation, “Human Review vs. Verified Pipelines.”

The facts it stacks: the 2026 DORA report has 90% of developers using AI at work, and developers are merging 98% more pull requests than before AI. Bugs per developer are up 54%. An analysis of 10,000 developers found incidents per pull request up 243%. Octopus Deploy’s AI Pulse report is paraphrased as faster creation that can degrade overall performance, because agents write large updates people cannot fully understand. Teams adopted generation faster than automated review, so the bottleneck moved down the chain. Using another model to review the first model does not close the gap: same training data, same blind spots.

Bristowe’s view is that review of a 40,000-line agent pull request is theatre. The author was not in the reasoning, so they cannot audit the package. He wants the quality gate in the delivery pipeline as policy-as-code: flag only what breaks a written rule, and let humans handle exceptions. Farcic is expected to ask whether that just creates another place where nobody is accountable, and what happens to juniors who no longer learn by reviewing human code with other humans.

## Key facts

- DORA 2026, as cited: 90% of developers use AI at work; 98% more pull requests merged versus the pre-AI era.
- Bugs per developer +54%; incidents per pull request +243% in a 10,000-developer analysis (source not named in the piece).
- Octopus AI Pulse: agents emit large diffs humans struggle to understand; faster coding can worsen delivery.
- Bristowe’s example scale: a 40,000-line agent pull request cannot be honestly reviewed by a person who did not share the reasoning.
- Proposed replacement: policy-as-code in the deploy path, humans on exceptions only.
- Open question from the other side: pipelines do not absorb judgement, and juniors lose the apprenticeship of review.
- Event: 29 September, 14:30 US Eastern, free, with an AI Pulse companion for live attendees.

## How it works

The old assumption was that a human could read a human-sized diff and mean the approval. Agent diffs break that. One camp moves trust into rules evaluated on every deployment, regardless of who wrote the code. The other camp worries the rules only catch what was written down, and that “someone approved the exception” becomes a rubber stamp. The piece does not pick a winner. It says more review is not the fix, and more AI review of AI code is not the fix either.

## Implications for codereview.uk / ui121

Do not market “we will read your 40,000-line agent PR.” That is the theatre Bristowe names. Market a bounded task: break the change into reviewable slices, or review the exception the pipeline flagged, inside an IDE-like surface where the reviewer can see the policy hit and the surrounding code. The junior-engineer worry is a second offer — guided review as training, not only as a merge button. Use the DORA and incident figures as problem-severity, and label them as reported by The New Stack’s sources.
