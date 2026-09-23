# Introducing AG-UI — CopilotKit announcement

- Source: https://www.copilotkit.ai/blog/introducing-ag-ui-the-protocol-where-agents-meet-users
- Fetched: 2026-09-23
- Status: ok

## Summary

Nathan Tarbert’s announcement is dated 12 May 2025. It introduces AG-UI as a bridge from agent backends to real applications. The protocol streams one sequence of JSON events over ordinary HTTP, with an optional binary channel. Event examples named in the post: text message content, tool-call start, and state delta. The claim is real-time sync between backend and front end without a custom socket format per product.

The argument splits the market into backend automation (migrations, research summaries, form filling, “80% is good enough”) and user-interactive agents. Coding tools are the analogy: Devin as the fully autonomous promise, Cursor as the agent that works in the same workspace as the user. The post says the important use cases need the second kind — the user can see the work, co-edit the output, and iterate.

Six engineering problems are listed as the reason a protocol exists: token streaming without blocking on a full reply; tool orchestration with progress, approval, and resume; shared mutable state via diffs instead of resending whole blobs; concurrency and cancellation (thread IDs, run IDs, orderly shutdown); enterprise security (CORS, auth, audit) once you leave casual WebSockets; and framework sprawl (LangChain, CrewAI, Mastra, AG2, homegrown scripts) that otherwise forces every UI to write its own adapter.

The solution sketch: one POST, then a unified event stream. Each event has a type and a small payload. The UI paints partial text, renders a visualisation when a tool finishes, or updates when state changes. Standard HTTP fits existing infrastructure; a binary serializer is optional for performance. Outcomes claimed: CopilotKit React components can sit on any AG-UI source; models can be swapped without a UI rewrite; several specialised agents can share one interface; no vendor lock-in.

SDKs mentioned: TypeScript and Python, with backends such as OpenAI, Ollama, LangGraph, or custom code. Docs and a playground are pointed at docs.ag-ui.com. A Discord is the feedback channel.

## Key facts

- Date: 12 May 2025. Author: Nathan Tarbert.
- Transport: HTTP event stream, optional binary channel.
- Example event types: TEXT_MESSAGE_CONTENT, TOOL_CALL_START, STATE_DELTA.
- SDKs at announcement: TypeScript and Python.
- Contrast used in the post: Cursor-style collaboration versus Devin-style autonomy.

## How it works

Client posts run input. Agent emits events as they occur. UI subscribes and maps event types to interface updates. State changes travel as patches when a full snapshot would be wasteful. Tool calls are visible, can pause for a person, and then resume with context intact. Cancellation is a first-class part of the run, not an abandoned request.

Section outline: what AG-UI is; backend-automation versus user-interactive agents; six challenges; the POST-plus-stream solution; what interchangeability enables; community invite.

## Implications for generatedui / ui121

The announcement’s “shared workspace” line is better marketing than “chat with tools.” ui121’s blocks are how that workspace shows tables, forms, and approvals instead of a transcript. The six challenges are a checklist for a product page: streaming, tool progress, state diffs, cancel, audit, and one adapter for many agent frameworks. generatedui.uk can speak to UK enterprise buyers in those operational terms rather than in model-benchmark terms.
