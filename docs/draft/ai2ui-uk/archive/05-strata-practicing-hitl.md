# Strata: practicing human-in-the-loop (2026)

- **Source:** https://www.strata.io/blog/agentic-identity/practicing-the-human-in-the-loop/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Eric Olden’s 11 May 2026 guide argues that putting a person “in the loop” is not oversight unless that person has timely context, authority to intervene, and a rationale that can be defended later. Agentic systems book travel, move money, and change infrastructure, so a missed checkpoint has an immediate consequence. Strata’s frame is identity: if nothing binds an agent action to an authentication and authorisation policy, the checkpoint is a diagram.

The piece borrows aviation. After accidents in the 1970s and 1980s, airlines built Crew Resource Management: briefings, standard phraseology, challenge-and-response, and no-blame debriefs. The claim is that enterprise AI needs the same practiced skill, not a policy slide. Two failure modes are named. Automation complacency: people stop questioning a system that usually looks right. Unpracticed teamwork: handoffs and escalation language stay ambiguous until an incident lines the gaps up.

A worked example is airline rebooking. Ordinary passengers are rebooked with no human. A complex international first-class itinerary pauses for a senior agent. A supervisor watches the whole flow for cost anomalies. Human-out-of-the-loop, human-in-the-loop, and human-on-the-loop coexist in one workflow because the oversight level belongs to the decision, not to the model.

## Key facts

- Author Eric Olden; updated 11 May 2026.
- HITL: human authorises before execution. HOTL: agent acts, human can intervene after. Appropriate for high-risk versus medium-risk reversible work.
- Regulators named: EU AI Act Article 14 and NIST AI RMF, both requiring oversight that is trained, measurable, and provable.
- Suggested decision lanes: about 15 seconds for low risk, 2 minutes for access to personal data, 15 minutes for a financial disbursement. Timeout fails closed to denied.
- Product tie-in: an “Agentic Identity Sandbox” for rehearsing escalations and logging interventions as audit evidence.
- Five practices: structured briefings, challenge-and-response checklists (intent, lineage, permissions, blast radius, rollback), two-factor judgment on critical actions, time-boxed lanes, no-blame debriefs.

## How it works

An identity-aware layer pauses the agent, routes the request to someone who is allowed to decide, enforces a time box, and logs the intervention. The approver should positively acknowledge a checklist rather than click a bare approve. Critical actions can require a second human or a counter-check. If the window expires, the action is denied and partial context is kept. Practice happens before production, the way a simulator is used before a storm landing.

## Implications for ai2ui.uk / ui121

Copy should talk about practiced judgment, not a checkbox. ai2ui.uk can be the challenge-and-response screen: intent, data used, permissions, blast radius, rollback, with the decision bound to an identity and a clock. Default deny on timeout matches Strata and is a trust line. The sandbox idea is a later enterprise story (rehearse approvals); the first product is the live gate with enough context that complacency is harder.
