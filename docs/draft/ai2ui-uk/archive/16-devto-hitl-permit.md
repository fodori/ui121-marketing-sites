# DEV: what human-in-the-loop means for agents

- **Source:** https://dev.to/anilmurty/what-is-human-in-the-loop-hitl-13ed
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Anil Murty’s 25 May post, originally on tokenjam.dev, defines HITL for agents as a checkpoint where a person approves, reviews, or rejects before or after a real-world action: email, deletes, money. A support agent that is right 99% of the time can still send the rude 1%. He sorts the patterns into pre-execution approval (high friction, lowest risk, good for rare high-value decisions), post-execution review (faster, sampled, damage already done), and exception escalation (automation by default, human only on low confidence, sensitive categories, or policy hits). A hiring example pauses when confidence sits between 40% and 60%, or when the candidate is internal, and escalates if nobody answers in 48 hours.

Channels are compared as products. Slack is fast and familiar but easy to miss and tied to Slack’s retention. Email works across time zones and can carry a signed link, with phishing risk if links are sloppy. SMS is for on-call binary decisions and cannot carry much context. Telegram or a custom dashboard can show timelines, at the cost of another place to watch. Advice: start where the team already is, add SMS only for urgency, add email when the audit bar is high, and do not multiply surfaces.

The async problem is the engineering core. An action proposed at 2pm and approved at 4pm must survive process death. The agent stores the pending action and a request id, yields, and resumes from a callback. Tools named: HumanLayer’s approval decorator and multi-channel routing plus an Agent Control Plane; OpenAI Agents SDK `needs_approval` with resumable run state; Permit.io as a policy engine in front of tools, with human approval in a dashboard and an audit of policy changes. HITL is framed as the wedge into governance: under 5,000 auto-approves, 5,000 to 25,000 goes to a director, above 25,000 to a CFO, as an illustration of policy the agent must not guess.

## Key facts

- Posted 25 May; byline Anil Murty; first published on tokenjam.dev.
- Three modes: pre-execution, post-execution sample review, exception escalation.
- Example thresholds in the text: borderline resume confidence 40–60%; unanswered hiring escalation at 48 hours; expense bands at 5,000 and 25,000 (currency not specified beyond the dollar examples).
- Fatigue levers: raise the threshold if about 90% of requests pass unchanged; batch into a digest; tier reviewers. The post mentions teams drowning in on the order of 80 pings a day.
- Timeout must be chosen when the gate is added: escalate, then a safe default, or fail into a human queue. Undefined timeouts either hang a durable slot or lose state on restart.

## How it works

The agent calls something like request-approval with an action id and context. A store keeps the request. A channel notifies a person. The worker can exit. A webhook or button posts the decision. A handler checks the request is still valid and resumes the agent, which executes or logs the rejection. Policy routing picks the approver. Low-risk tiers skip the person or only sample afterwards.

## Implications for ai2ui.uk / ui121

Permit.io is the closest “policy can require a human in a dashboard” neighbour. HumanLayer is the multi-channel decorator neighbour. ai2ui.uk should be described as the durable ask plus the UI, able to sit behind either a policy engine or a framework interrupt. Copy should steal the operational questions: timeout, default deny, batching, and the 90% unchanged-approval signal. Do not claim to be an authorisation product unless policy evaluation is actually in scope; the page’s point is that approval is where policy becomes enforceable.
