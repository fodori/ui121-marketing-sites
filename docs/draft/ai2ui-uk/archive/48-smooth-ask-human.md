# Smooth: a custom tool that asks a human

- **Source:** https://docs.smooth.sh/methods/custom-tools
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Smooth’s custom-tools docs show how to register tools on their Python client, in the style of an MCP tool without standing up an MCP server. The documented example that matters here is `ask_human`: the description tells the agent to ask a human operator when it needs clarification, the input is a question string, and the output is a string. The implementation in the docs is a terminal prompt: print the question and read a line from stdin. Other tools on the same page cover browser JavaScript, one-time passwords, databases, and HTTP APIs, so asking a human is just another tool beside side effects.

Error behaviour is specified. A tool-call error is non-fatal: the message goes back to the agent so it can adapt. Other exceptions abort the task. Best practice on the page: one job per tool, descriptive names, and validate inputs before acting. The live production shape of `ask_human` in this document is a person sitting at the same terminal as the agent. That is the gap a hosted page fills when the operator is not attached to that process.

## Key facts

- Product docs: Smooth custom tools via a client decorator, analogous to MCP tools.
- `ask_human` contract: question in, string out, described as operator clarification.
- Reference implementation: print plus blocking input on the server process.
- `ToolCallError` returns to the agent. Other exceptions fail the task.
- Neighbouring tools: browser script execution, OTP, database, external APIs.

## How it works

The agent decides it lacks information and calls `ask_human` with a question. The tool blocks on standard input. A person types an answer. The string returns as the tool result and the agent continues. If the tool raises the non-fatal error type, the agent sees the failure and can try another approach. If the process has no terminal, or the person is away, the wait is just a blocked worker. There is no queue, no mobile notification, and no record beyond whatever the host logs.

## Implications for ai2ui.uk / ui121

This is the before picture. Developers already name the tool `ask_human` and then implement it as `input()`. ai2ui.uk can be the hosted body of that function: post the question, return a URL or wait for a webhook, collect a validated answer, hand the string back. Marketing line: the tool interface is settled; the terminal is not a product. Docs should show a drop-in that preserves the same input and output so agents written against Smooth-style tools do not change their prompts. Do not paste Smooth’s decorator sample; describe the contract.
