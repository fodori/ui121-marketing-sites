# AWS: HITL constructs for healthcare and life sciences

- **Source:** https://aws.amazon.com/blogs/machine-learning/human-in-the-loop-constructs-for-agentic-workflows-in-healthcare-and-life-sciences/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Pierre de Malliard’s 8 April 2026 AWS post shows four ways to put a person in front of an agent in healthcare and life sciences, where GxP, patient safety, audit, and protected health information make unsupervised tool calls unacceptable. The stack is Strands Agents, Amazon Bedrock AgentCore Runtime, Step Functions, Amazon SNS, and MCP. Low-risk lookups can run freely. Reading conditions or vitals needs a person. Discharging a patient needs an external supervisor who may not be the person who started the chat.

The four patterns differ by where the pause lives. A hook on the agent loop can gate a list of sensitive tools without changing the tools. Approval logic inside a tool can also check role, so a non-physician is denied and a physician is asked. An asynchronous Step Functions workflow emails an approver and lets the agent session continue, with a later status check, because some approvals take hours or days. MCP elicitation asks through the client while the tool is running, so the agent does not have to know which tools are sensitive.

A small trust shortcut appears in the samples: the user can approve once, or trust that tool for the rest of the session. That is a product decision with a fatigue benefit and an audit cost.

## Key facts

- Published 8 April 2026. Level marked Advanced (300). Services: Bedrock, AgentCore, Step Functions, SNS, MCP, Strands.
- Example sensitive tools: patient condition and vitals. Example external approval: patient discharge.
- Replies in the local samples: approve once, deny, or trust for the session.
- Method 3 is non-blocking: the tool starts a state machine and returns an execution identifier; a separate tool can poll status.
- Method 4 keeps approval inside the MCP server via an elicit call. The agent registers a callback. Locally that is a terminal prompt; on AgentCore the post uses a WebSocket to reach a remote user.
- Code is described as public on GitHub. This note does not reproduce it.

## How it works

Method 1 registers a before-tool-call hook. If the tool is sensitive and not already trusted, the hook interrupts with the tool name and arguments. Method 2 does the same from inside the tool after a role check. Method 3 starts Step Functions, notifies via SNS, and does not hold the agent process for the whole wait. Method 4 pauses inside the MCP tool, sends the question through the client, and resumes only if the user accepts. The conclusion tells builders to pick centralised, tool-specific, asynchronous, or real-time elicitation based on who must approve and how long they may take.

## Implications for ai2ui.uk / ui121

Regulated demand is concrete: documented authorisation before PHI access or a clinical state change. ai2ui.uk maps cleanly onto methods 3 and 4: a durable ask that can be answered by a supervisor who is not in the chat, and a richer form than a yes/no terminal prompt. The “trust for this session” control is a fatigue feature to design carefully and log. Do not market this as a clinical device; market it as the human checkpoint AWS still expects the builder to wire.
