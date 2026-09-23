# Truto: approvals for consequential SaaS API calls

- **Source:** https://truto.one/blog/implementing-human-in-the-loop-approval-workflows-for-consequential-saas-api-actions/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Truto’s essay argues that an agent which can call SaaS APIs is a demo until consequential actions wait for a person. The phrase worth keeping, paraphrased, is that human approval is what separates a demo from a production deployment. Confirmation fatigue is the design constraint: after enough “are you sure” dialogs, people approve the destructive one too. The fix they describe is risk tiers. Read-only API calls should not interrupt. Writes, deletes, and money movement should.

Two statistics are used as urgency, both needing attribution when repeated. Gartner, as cited here: 74% of IT application leaders believe agents are a new attack vector, and only 13% strongly agree they have the right governance. The adoption line, also widely repeated and cited via Gartner in this genre of posts: under 5% of enterprise applications had task-specific agents in 2025, and 40% were projected to by the end of 2026. Confirm the original Gartner notes before putting either pair on a homepage.

The architecture warning is the one ai2ui.uk should steal as a problem statement. A synchronous HTTP handler that waits for approval dies when the pod restarts. The human clicks three hours later and nothing is listening. The approval has to be a durable pause with a stored case, not a blocked request. Truto’s context is SaaS connectors, so the actions are things like “update the CRM” or “issue the refund” rather than shell commands. The mechanism is the same.

## Key facts

- Thesis: consequential SaaS API actions need a human gate before production use.
- Fatigue: repeated confirmations train people to approve the dangerous call.
- Risk tiers: do not interrupt reads; gate writes and irreversible calls.
- Cited Gartner-style figures: 74% see agents as an attack vector; 13% strongly agree governance is in place; adoption from under 5% of enterprise apps in 2025 toward 40% by the end of 2026.
- Failure mode: in-process HTTP wait. A restart loses the waiter; a click hours later has no receiver.

## How it works

The agent selects an API action. Policy classifies it. Reads proceed. Consequential calls create an approval record and return control to a durable workflow. A person sees the target system, the payload, and the blast radius, then approves or rejects. The connector executes only after approval, with an idempotency key so a retry does not double-post. Timeout and escalation are part of the policy, because a paused SaaS write cannot sit forever. The article’s implementation detail is Truto’s; the transferable part is the tiering and the durable record.

## Implications for ai2ui.uk / ui121

Truto is a neighbour in the connector market. ai2ui.uk can be the approval surface those connectors call, especially when the agent is not Truto’s. The synchronous-wait failure is the clearest one-sentence problem on the homepage, paraphrased: if the human is slower than the process, the process must not be the thing waiting. Risk tiers stop the product from becoming the fatigue machine the article warns about. Use the Gartner figures only with a citation, and only after checking the primary note. Docs outline: classify the API call, persist the case, notify, resume on decision, idempotent execute.
