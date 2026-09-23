# Video SDK: ask a human through Discord

- **Source:** https://docs.videosdk.live/ai_agents/core-components/agent
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Video SDK’s agent documentation describes an Agent class for voice and tool-using assistants. Tools are split into external and internal function tools. MCP servers can be attached over stdio. Lifecycle hooks run when the agent enters and exits. The human-in-the-loop section uses a Discord MCP server whose `ask_human` tool opens a public thread, mentions a configured user, and waits up to 600 seconds for a reply.

The documented reasons to call it are discounts, complex support, policy questions, and low model confidence. Configuration is environment variables: a Discord token, a user id to mention, a channel id, plus the usual speech and model keys (Deepgram, Anthropic, Google, and Video SDK itself appear in the setup). The page was last updated on 3 June 2026 by Deep Bhupatkar, according to the docs chrome.

This is a notification-path example. The human interface is a Discord thread, not a form with a schema, and the wait is bounded at ten minutes inside the tool. It shows how agent platforms are wiring “ask a human” to whatever chat the operator already watches.

## Key facts

- Product: Video SDK AI agents. Page owner in the footer: Deep Bhupatkar. Last updated 3 June 2026.
- HITL mechanism: Discord MCP `ask_human` creates a public thread, mentions a user, waits up to 600 seconds.
- Triggers suggested: discounts, hard support cases, policy, low confidence.
- Required Discord settings: token, user id, channel id.
- Agent features around it: function tools, MCP stdio servers, enter and exit hooks.

## How it works

The agent hits a case it should not decide alone and calls the Discord tool. The MCP server posts a thread and blocks until a mentioned person replies or 600 seconds pass. The reply text comes back as the tool result. The agent continues the call or the task with that text. If nobody answers in time, the tool returns control without a decision, and the agent’s prompt has to define the fallback. The thread is public to the channel, so the question and answer are as visible as any other Discord message there.

## Implications for ai2ui.uk / ui121

Chat pings are the default human interface, with a hard timeout and no structured fields. ai2ui.uk can replace or sit behind that Discord tool: the mention still fires, the link opens a page that validates the answer, and the wait can outlive 600 seconds because the agent runtime is not the one blocked. For voice agents, the product requirement is a result that can be spoken back, plus a record that is not only a chat log. Marketing contrast: a thread is a notification; a gateway is the decision object. Do not imply Video SDK lacks HITL. They shipped the chat version.
