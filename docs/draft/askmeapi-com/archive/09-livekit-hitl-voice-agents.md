# LiveKit — the HITL pattern for voice agents

Source: https://livekit.com/blog/human-in-the-loop-voice-agents
Fetched: 2026-09-23
Status: ok

## Summary

Jesse Hall’s 23 March 2026 post argues that voice agents become enterprise-ready when they know when to stop. HITL here is gated execution: the agent proposes an action, pauses, and a person approves, rejects, or edits before anything irreversible happens. The post contrasts that with handoff between agents. It claims the agent can do about 90 percent of the work and people handle the 10 percent that needs judgment, empathy, or a legal sign-off.

Escalation is multi-signal, not a single confidence score. The list is financial or health or legal risk (a $50 billing question can be automatic; a $5,000 refund should not), low model confidence, multi-step ambiguity, regulatory mandates (KYC, GDPR, HIPAA, payments), sentiment and an explicit request for a person, and drift outside the agent’s domain. Two architectures sit side by side: blocking approval inside a live call, and non-blocking park-and-notify via Slack, email, or a dashboard. Voice usually needs the blocking kind because the caller is waiting.

Five reusable sub-patterns are named: interrupt and resume, human-as-a-tool, an approval gate before side effects, sampled review of 5–20 percent of low-risk actions while 100 percent of high-risk actions are gated, and exception-only review once validators are strong. The main UX failure is context loss (“I already explained this”). The fix is an evidence pack: summary, transcript with timestamps, intent and confidence, entities, sentiment, policy flags, and customer history. With that pack, the post says decisions take 10–30 seconds instead of minutes.

LiveKit’s concrete primitive is `WarmTransferTask`: hold music, a private consultation room, an outbound SIP call to a supervisor, a briefing from `chat_ctx`, then `MoveParticipant` into the caller’s room. The escalation tool’s description encodes the policy (explicit request, billing disputes over $500, compliance, frustration). Humans can hand back to the agent after the hard part. Operational warnings: filler speech during transfer, timeouts (5 minutes customer-facing, 60 minutes internal), idempotency so a retry does not execute twice, and a spoken summary before transfer. A flywheel claims escalation might fall from 30 percent of calls in month one to 15 percent in month three and 5 percent in month six, because every correction is training data.

## Key facts

- Author Jesse Hall, 23 March 2026.
- Propose-then-commit is the core rule. Approval happens before side effects.
- Dollar examples: $50 autonomous, $5,000 human, and in the sample tool, billing disputes over $500.
- Sampled review: 5–20 percent of low-risk actions.
- Evidence-pack decision time claimed at 10–30 seconds.
- APIs: `WarmTransferTask`, `TransferSIPParticipant` (cold SIP REFER), `CreateSIPParticipant`, `MoveParticipant` (LiveKit Cloud), agent dispatch into the same room.
- Skip HITL for high-volume reversible work, when latency dominates, when no reviewer is actually available, or when people rubber-stamp.

## How it works

1. Voice agent receives the caller and evaluates risk, confidence, and policy.
2. If needed, it proposes an action or an escalation with an evidence pack.
3. Blocking path: caller on hold, supervisor briefed in a side room, then connected.
4. Non-blocking path: task parked until Slack, email, or a dashboard answers.
5. Agent executes only after approval, with idempotency keys.
6. Corrections are logged so the escalation rate can shrink.

## Implications for askmeapi.com / ui121

Voice makes the “human as a tool” pattern obvious: the agent calls escalate, a person gets context, the answer unblocks the run. AskMeAPI is the non-blocking half LiveKit describes (Slack, email, dashboard) for agents that are not on a phone call. ui121 can render the evidence pack as a one-screen review — amount, intent, transcript summary, approve or edit — so the 10–30 second decision is a form, not a raw chat log. The idempotency warning belongs in the API: one approval must not fire the action twice.
