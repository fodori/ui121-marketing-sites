# Guild.ai: human-in-the-loop glossary

- **Source:** https://www.guild.ai/glossary/human-in-the-loop
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Guild.ai’s glossary entry, by the Guild.ai team on 23 February 2026 and marked as about a five-minute read, defines human-in-the-loop as a person inside the decision path, and contrasts it with human-on-the-loop, where a person supervises and intervenes by exception. The accuracy claim on the page is that organisations report document extraction up to 99.9% with a human in the loop versus about 92% for AI alone. That is Guild’s attribution to organisations, not a study reproduced here. They also cite a clinical arXiv study in which about 81% of AI tasks were approved with no modifications and none were fully rejected as dangerously incorrect. The 81% figure is easy to misuse: it says reviewers often accept the draft, not that the system was safe without them.

Frameworks named: LangGraph interrupts, CrewAI human input or a human tool, and signals in Semantic Kernel and Temporal. Examples: a gate before a kubectl rollback, a code-review escalation to Slack, and content operations where a tool they call ContentMonk automates 70–80% and a person still owns the brief and the draft. The bottleneck warning is standard and correct: gating every step stalls the system. They mention automation complacency, with a nod to the Carnegie Council, and an expense policy that auto-approves under $500 and requires a person over $5,000. The loop should be asynchronous so the agent is not blocked on a live connection. The sharp question in the entry is where the loop sits. Approval before the action is a different control from a review after the file is already committed.

Guild’s close is a control-plane pitch. EU AI Act article 14 appears again as the oversight hook. The glossary is a survey, useful for language, not for implementation steps.

## Key facts

- Published 23 February 2026. Guild.ai team. About 5 minutes.
- HITL: person in the decision. HOTL: person supervises and intervenes by exception.
- Extraction claim, attributed to organisations: up to 99.9% with HITL versus about 92% AI-only.
- Cited clinical study: about 81% of AI tasks approved unchanged; 0% fully rejected as dangerously incorrect.
- Threshold example: auto under $500, human over $5,000.
- Content example: 70–80% automated, human on brief and draft.
- Frameworks: LangGraph interrupt, CrewAI human input, Semantic Kernel and Temporal signals.

## How it works

A policy decides which steps require a person. The agent pauses asynchronously, a reviewer sees the proposed action, and the system records whether they edited it or accepted it. Supervision mode watches a stream and steps in on exceptions instead of approving each item. If the pause happens after commit, the human is auditing, not authorising. Thresholds keep low-value items off the queue. The glossary does not specify storage, identity, or timeout; those live in the frameworks it names.

## Implications for ai2ui.uk / ui121

Use the glossary for vocabulary on the marketing site: in the loop versus on the loop, and before versus after the side effect. The before/after distinction is the product rule. ai2ui.uk is an authorisation gate, not a log you read after kubectl already ran. Do not adopt 99.9% as ui121’s metric. The 81% unchanged-approval figure is a warning about rubber-stamping, which pairs with confirmation fatigue in the Truto note: if almost every card is accepted untouched, the gate may be too sensitive or the reviewer may be complacent. Guild’s control plane is another bundle. Stay the ask-and-approve endpoint those planes can call. Article 14 is the recurring legal citation across this archive; one shared footnote is enough, not a new claim on every page.
