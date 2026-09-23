# Stack Overflow Blog — Coding agents and decision fatigue

- Source: https://stackoverflow.blog/2026/05/21/coding-agents-are-giving-everyone-decision-fatigue/
- Fetched: 2026-09-23
- Status: ok
- Ryan Donovan, 21 May 2026, interview with Smartsheet CPTO Pratima Arora, plus Carol Lee and Fitz Nowlan (SmartBear).

## Summary

Donovan’s argument is that coding agents moved engineer time from typing to prompting and judging, and the day got denser rather than shorter. Smartsheet’s research, as he reports it: automation intensity for their enterprise users +55% year over year, overall activity +46%, and 80% of AI-generated content is edited before it is final. The hours did not grow. The number of decisions did. Later stages — review, SRE, security, infrastructure — absorb the strain.

Arora’s illustration: one engineer produced 7× the code of her teammates, and the quality of what landed was high, but the other six spent most of their time reviewing her instead of writing. Review needs a picture of the whole system. Carol Lee (then described as now at Intuit) is paraphrased on the weight of being the gatekeeper: if the review is wrong, the fault feels personal. Arora’s other observation is the legacy-code reflex: teams would rather rewrite than judge code they did not write, and AI output is that situation on every pull request.

Senior behaviour in her org: more context loaded, smaller changes, the hardest slice, so the scarce skill is knowing what to put in the prompt, not lines produced. Decision fatigue makes later judgements sloppier. She points at a public comment from Cat Wu (Claude Code / Cowork) about a source leak that was human error, as evidence that people in the loop still slip. Smartsheet’s designers can prototype in Claude or Cursor against the real design system, and engineers still must review before check-in. Arora does not think designers should merge alone yet.

Fitz Nowlan’s line, paraphrased: specify intent, behaviour, and requirements; if coding velocity goes 10×, QA has to go 10×, and the practical answer is more automation of the checks, not more manual inspection of every call. Donovan ends by asking whether teams will accept an agent that builds from a spec, and review of the outcome instead of every commit. He does not claim they should. He claims the fatigue is already here.

## Key facts

- Smartsheet: automation intensity +55% YoY; activity +46%; 80% of AI-generated content edited before final.
- One “superstar” at 7× output consumed the rest of the team’s review capacity.
- Seniors: heavier context, smaller diffs, complex work.
- Designers build front ends with Claude and Cursor; engineering review is still mandatory before check-in.
- Old input metrics (hours, lines, commits, token counts) are returning and, under Goodhart, stop measuring the outcome.
- DORA-style outcome metrics (change fail rate, deploy frequency) already forced teams to look at the whole pipeline; judgement needs the same shift from spot checks to end-to-end intent.

## How it works

An agent emits a change. Nobody holds the author’s memory of why it looks that way, so the reviewer gathers prompts, specs, and system context, then decides. That decision is the job. Organisations that treated productivity as lines are now ranking people by tokens, while the real queue is review. Arora’s remedy is to align tools across product, design, and engineering so handoffs are designed, and to move human judgement up to requirements at the start and to success, security, and dependability at the end. Unit-level review of every prompt does not survive the volume. Sampling outcomes might.

## Implications for codereview.uk / ui121

The 80% edit rate is the “humans stay in the loop whether or not you productise it” proof. codereview.uk productises it: the six teammates are not the review team; a booked reviewer is, working the diff in an IDE-like task so the author can keep building. The 7× anecdote is the sales story for overflow review. Decision fatigue is why the task must be small and evidenced — a person clicking approve all afternoon is the failure mode Donovan describes. A premium tier can be “outcome review” of a shipped slice (intent versus behaviour) rather than a line-by-line nit on every commit, which matches where he thinks judgement is moving.
