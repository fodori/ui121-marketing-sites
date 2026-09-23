# Medium — interruptible tool calling with LangGraph

Source: https://sangeethasaravanan.medium.com/human-in-the-loop-tool-calling-with-langgraph-building-interruptible-ai-agents-fd0275ce4523
Fetched: 2026-09-23
Status: ok

## Summary

Sangeethasaravanan’s 12 July 2025 tutorial builds a small email agent in LangGraph that must pause before send. The motivation is high-stakes domains (healthcare, finance, real estate, legal): the model can misread intent, pass risky arguments, or cause side effects such as a payment or an email. The use case is an assistant that drafts recipient, subject, and body, then waits for approve, edit, or reject. Named settings: customer support tone, sales personalization, internal mail, and compliance.

The graph is three nodes. A planner node pattern-matches the query and fills a hard-coded email payload (the sample does not call an LLM to draft). A human node prints the draft and reads stdin: yes, no, or edit. Edit re-prompts for recipient, subject, and body, keeping the old value if the line is empty. An execution node calls a mock `send_email` tool only on approved or edited status. Reject ends the graph. State is a typed dict: query, next tool, result, and status. The sample output changes john@example.com / “Meeting Reminder” into jane@example.com / “Project Kickoff” after an edit. Bonus ideas listed but not built: a real provider (Gmail or SendGrid), LLM extraction from unstructured text, auto-send above a confidence threshold, and an audit log.

The tutorial is a teaching graph, not LangGraph’s built-in `interrupt()` flow. The pause is a blocking `input()` inside the node, so it only works in a local terminal and dies if the process stops.

## Key facts

- Published 12 July 2025. Author: Sangeethasaravanan.
- Nodes: planner, human_check, email_execution. Statuses: approved, rejected, edited.
- Human UI: stdin. Tool: mock send_email.
- Packages named: `langgraph`, `langchain`.
- Suggested later: confidence threshold for auto-send, audit log, real email API.

## How it works

1. Query enters the planner, which writes a proposed tool call into state.
2. Human node prints To, Subject, and Body and waits for yes, no, or edit.
3. Conditional edges send approved and edited states to execution and rejected to the end.
4. Execution invokes the tool and stores the result string.

## Implications for askmeapi.com / ui121

This is the homemade pattern AskMeAPI replaces: a print and an `input()` that cannot be emailed to a reviewer. The three statuses are the right product vocabulary. ui121 can render the same three fields the terminal prints, on a phone, and return approved or edited arguments as the tool call. The hard-coded planner is a reminder that demos often fake the model; the valuable half is the pause, which should not live inside the graph process.
