# Pushary — human-in-the-loop API

Source: https://pushary.com/human-in-the-loop
Fetched: 2026-09-23
Status: ok

## Summary

Pushary sells a single call, `authorize()`, that sits in front of a consequential action. Rules run first and return allow, deny, or ask-a-person. If no rule names the action, it asks, so an empty policy fails safe. If nobody answers inside the caller’s window, the call returns denied. The page’s running example is refunds: under $100 allow, at or over $1,000 require a person, at or over $10,000 deny. A $42 refund proceeds with `resolvedBy: "policy"`. A $4,200 refund waits for a tap. The strictest matching rule wins, so rule order does not matter. The caller chooses who is asked via `externalId`; the rule only chooses whether to ask.

Enrollment is one tap with the caller’s own user id. The person does not get a Pushary account. Approve and Deny land on a lock screen. PWA push covers desktop and Android; the page says iPhone push needs the app. Question types a person can answer are confirm (yes/no), select (it says 2 to 6 options elsewhere on the marketing site; this page says multiple-choice select or free-text input), and free text. Every outcome is stored in a decisions ledger, including actions a rule allowed with no human. Adapters named: Vercel AI SDK, Eve, LangGraph, Mastra, OpenAI Agents SDK, CrewAI, plus a hosted MCP server for Claude and other MCP clients. LangChain, Hermes, and OpenClaw are told to call the core server SDK. Packages: `@pushary/server` and `pip install pushary`.

The page’s oversight ladder has four levels: notify after the fact, approve in the moment, policy before the moment, and audit afterward. It argues notify is now table stakes because coding agents already ship notifications, and a message that cannot stop the action is not approval. Partner plan: $99 a month, 25,000 connected end users, 100,000 decisions a month, 10 team members, 365 days of history, 3-day trial. Address on the page: Narva mnt 7-652, Tallinn, Estonia. The wait is described as a durable ledger so a process restart does not drop the request. There is no webhook to catch later; `authorize()` returns the decision.

## Key facts

- Call: `px.authorize({ toolName, toolTarget, externalId, parameters, question })`.
- Outcomes: `{ approved, resolvedBy: "policy" | "human", reason }`.
- Fail closed on timeout and on unnamed actions.
- Threshold story: $100 allow, $1,000 ask, $10,000 deny. Illustrative amounts also include $42, $4,200, and $40,000.
- Enroll once per person. No end-user account.
- Partner plan $99/month: 25k end users, 100k decisions, 10 seats, 365-day history.
- Framework adapters listed above. MCP is configuration, not a separate install.
- `decisions.ask()` is the “always ask a person” variant.

## How it works

1. Install the server SDK and enroll the person who answers.
2. Write rules: action, condition on parameters, effect allow / require_approval / deny.
3. Call `authorize()` immediately before the side effect.
4. Policy answers, or the phone does, or the window expires as a deny.
5. The agent branches on `approved` and a plain-text reason. The ledger keeps rule id or person.

## Implications for askmeapi.com / ui121

Pushary is the closest live competitor to an ask-a-human API, but it leads with policy-plus-phone-yes, not with a schema-shaped question to a group. AskMeAPI can differentiate on structured replies (beyond confirm/select/text) and on answer pages that are not Pushary’s app. ui121 is the select and input UI when a lock-screen tap is too thin — a refund reason, an edited amount, a choice that needs a label. Their fail-closed timeout and “strictest rule wins” are worth copying as product behavior, not as copy.
