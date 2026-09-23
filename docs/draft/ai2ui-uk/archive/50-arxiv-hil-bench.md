# HiL-Bench paper

- **Source:** https://arxiv.org/html/2604.09408v4
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

HiL-Bench is a Scale AI paper, with Tu Trinh, Mohamed Elfeki, and colleagues, on progressive discovery: agents that must notice missing, ambiguous, or contradictory requirements and ask, rather than receiving a complete spec. The headline contrast in the figures is stark. With complete information, pass@3 sits roughly in the mid-seventies to high-eighties. When the same models must judge when to ask, pass@3 falls to roughly 4–24%. Without an ask tool at all, scores are near zero, which is how the authors show the tasks really do depend on the hidden facts.

Blockers are mixed: about 42% missing information, 36% ambiguous, 22% contradictory. A spec-only ablation on SQL shows environment access matters for knowing what to ask. For Claude Opus 4.6, blocker recall is about 61% with the environment and about 11% without it. Ask-F1 is shaped to punish spam. The paper’s example: 80% recall bought with 50 questions at 8% precision scores about 14.5%, so volume is not a strategy. The authors report that reinforcement learning against a shaped Ask-F1 reward improves a 32B model, and that the judgment transfers, meaning “when to ask” is trainable rather than a fixed property of scale. They cite the public line, associated with Karpathy and Andrew Ng, that agents do not ask. An enterprise-pilot failure rate above 90% is attributed to other literature (Huang and colleagues), not presented as Scale’s own measurement of a customer.

The design distinction versus older clarification benchmarks is progressive discovery inside a working environment, not a single upfront questionnaire. Software and SQL are the domains because both have a checkable end state and realistic hidden constraints.

## Key facts

- Version fetched: arXiv HTML 2604.09408v4. Authors affiliated with Scale.AI.
- Pass@3: about 75–89% with complete information; about 4–24% when the model must decide to ask; near zero with no ask tool.
- Blocker mix: missing about 42%, ambiguous about 36%, contradictory about 22%.
- Spec-only SQL ablation: Opus 4.6 blocker recall about 61% with environment, about 11% without.
- Ask-F1 example: 80% recall via 50 questions at 8% precision scores about 14.5%.
- RLVR on shaped Ask-F1 improves a 32B model; the paper says the skill transfers.
- The “over 90% enterprise pilot failure” line is cited literature, not a Scale field study in this paper.

## How it works

Tasks ship with a partial specification and an environment that contains the missing facts only if the agent asks the right question. A judge model labels each question. Metrics separate “did you ask the necessary questions” from “did you solve the task.” The complete-information condition is the control that the task is possible. Training experiments add a reward for well-targeted questions so a smaller model can learn the judgment.

## Implications for ai2ui.uk / ui121

The paper is the evidence slide. People already say agents barrel ahead; HiL-Bench measures it. ai2ui.uk’s product assumption — that a question will be asked — is the scarce event. A gateway still matters because when the question is asked it must be answerable by the right human, with the blocker type visible (missing versus contradictory), and the answer must re-enter the agent as data rather than as another vague chat turn. Do not claim ui121 trains Ask-F1. Claim that the human side of progressive discovery has nowhere to live. If citing the 90% pilot figure, attribute it to the paper’s citation, not to Scale’s benchmark. One sentence of the authors’ own contrast is enough if a quote is needed; the percentages above are already a paraphrase of the reported ranges.
