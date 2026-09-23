# LinkedIn (Stephen Schmidt) — Why “HITL” is agentic governance theatre

- Source: https://www.linkedin.com/pulse/why-human-loop-agentic-governance-theater-stephen-schmidt-8dcde
- Fetched: 2026-09-23
- Status: ok
- Stephen Schmidt, 2 July 2026. Public pulse; comments included only as paraphrase of the sceptic’s point.

## Summary

Schmidt writes to CISOs and boards who want governance for agents that are non-deterministic, goal-seeking, and faster than a person can watch. The stock answer — put a human in the loop — fails at volume. Ask someone to approve on the order of 100 agent actions an hour, which he thinks is still far below real rates, and they rubber-stamp. Repeated exposure normalises the risk. He compares it to high-frequency approval queues in security operations. Presence in the workflow is not judgement.

His five moves: add behavioural evaluation, adversarial tests, and continuous monitoring on top of ordinary code review, dependency scanning, and threat modelling, and repeat them when the model or the tools change, because an agent may not behave the same twice. Lock known doors (least privilege, supply chain, injection). A human with too much access hesitates; an agent with the same access does not, and he says it can act on the order of a thousand times faster, so a manageable risk compounds before anyone recovers. Put boundaries outside the agent. Prompts can be overridden. Every hop to the outside world should hit a deterministic control the agent cannot talk its way past, plus a judge model that is not the primary model. If the control lives inside the prompt, it is a hope. Let autonomy be earned: shadow mode, evidence, then a wider leash. His screening example: 2.5 billion transactions a day across 160 businesses; agents now cover more than 60% of screening volume at 96% accuracy, after starting supervised. Keep a named human accountable for every outcome even when they do not click each action. He cites more than 26,000 internal Amazon agents and more than 360,000 authentications in a single week, each traced to an owner and an immutable log. If you cannot see agents on servers, endpoints, and third parties, you have no plan. If the secure tool is hard to get, people will bring their own and you will have no visibility.

A commenter (Glenn Broder) sharpens the test: did the person understand the decision, have evidence to challenge it, have real authority to change it, and can you show what happened when they did? If not, “human in the loop” is a label.

## Key facts

- Rubber-stamp threshold he names: ~100 approvals an hour already too many.
- Screening system: 2.5B transactions/day, 160 businesses, >60% of volume automated, 96% accuracy, after shadow mode.
- Scale anecdote: >26,000 internal agents, >360,000 authentications in one week, each with a named owner.
- Controls that count: least privilege, supply-chain integrity, injection defence, external deterministic gates, a separate judge model, earned autonomy, end-to-end human accountability, live inventory.
- Controls that do not: a prompt that says “be safe,” a human click with no time or evidence.

## How it works

Start the agent where it cannot affect the outcome (shadow). Compare it to the human process. Expand only the slice it gets right. Every side effect passes a gate the model does not own. Logs bind the action to a person who is accountable for the class of outcome, not necessarily present for each event. Review the agent again when the model or a new tool changes.

## Implications for codereview.uk / ui121

This is the objection the site must answer. A checkbox after an agent is theatre if the reviewer has no time, no diff, and no power to block. Design the ui121 task so Schmidt’s four comment-test questions pass: the person sees the change in an IDE-like surface (evidence), is the assigned approver (authority), must leave a reason when they reject (you can show the effect), and is not given 100 actions an hour. Market “real review” against decorative HITL. Do not claim a human sees every agent tool call; claim a named owner reviews the code consequence, which is the accountability he says still matters. Shadow-mode language is useful for a pilot: we review in parallel before we are allowed to be the merge gate.
