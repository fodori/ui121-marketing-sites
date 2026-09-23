# AG-UI core architecture

- Source: https://docs.ag-ui.com/concepts/architecture
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 06 (AG-UI docs)

## Summary

The architecture page says AG-UI is lightly opinionated on purpose. An agent must emit events compatible with the standard set during a run, and it must accept user input so the workflow can be collaborative. Exact byte-for-byte event shapes can be adapted. Transport is not mandated: SSE, webhooks, WebSockets, and others are fine. That is the adoption pitch to framework authors.

The picture is a frontend application plus an AG-UI client, talking to one or more agents. A secure proxy can sit in front of agents the browser should not call directly. The core abstraction is a run function: RunAgentInput in, an observable stream of base events out. HttpAgent is the reference client. It POSTs the run input and reads either SSE or a binary HTTP protocol. The binary path is described as the production option; SSE is the readable one.

Event families listed here are the shorter set: lifecycle (run and step), text, tools, state (snapshot, delta, messages snapshot), and special (raw, custom). State deltas use JSON Patch (RFC 6902). Tool definitions travel on the run parameters. The sequence is start, streamed args, end. Agents can hand off to other agents and keep context. BaseEvent is type, optional timestamp, optional rawEvent.

## Key facts

- Requirements: emit standard events; accept input. Transport is pluggable.
- Reference client: HttpAgent. Transports: HTTP SSE and HTTP binary.
- Run signature: RunAgentInput to a stream of events.
- State delta format: JSON Patch, RFC 6902.
- Proxy pattern: browser talks to a proxy, proxy talks to agents.

## How it works

The client starts a run with thread and run IDs, tools, and context. Events arrive in order. The UI reduces them into messages and state. Middleware can translate a framework’s native events into this stream before the client sees them. A proxy is where auth and allowlists live if the agent is not public.

## Implications for generatedui / ui121

ui121 can be an HttpAgent-style client: one run, one stream, blocks updated from tool and custom events, state kept with patches so a task document does not get resent in full. The secure proxy note matters for enterprise: the browser should not hold agent credentials. Binary versus SSE is an implementation choice, not a marketing claim, unless latency becomes a measured differentiator.
