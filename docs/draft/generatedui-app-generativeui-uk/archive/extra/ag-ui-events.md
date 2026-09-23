# AG-UI events

- Source: https://docs.ag-ui.com/concepts/events
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 06 (AG-UI docs)

## Summary

Events are the unit of communication. The concept page groups them as lifecycle (run and step progress), text messages (streamed content, including a chunk form), tool calls (start, args, end, result, chunk), state (snapshot, delta, messages snapshot), activity (snapshot and delta for progress the UI can render as its own widget), subagent attribution, special events (raw and custom), and draft events still in proposal. Every event has a type, an optional timestamp, an optional rawEvent if it was translated, and optional metadata. Metadata merges onto the message being built, last write wins, which is how token usage can arrive on the final chunk. An optional subagentRunId marks which nested agent produced the event; absent means the parent.

Lifecycle names include run started, finished, and error, plus step started and finished. Text is start, content deltas, end, or a single chunk. Tools stream argument fragments, then a result that becomes a tool message. State snapshot replaces the document; state delta is a patch. Activity events are the hook for “something is happening” that is richer than a spinner and is kept in the message sequence. Custom events are the escape hatch for payloads the core types do not cover, which is how a UI spec such as A2UI rides along without a new protocol. Reasoning events exist so a UI can show that the model is working, with a path for encrypted reasoning that must not be revealed.

The 1.0 spec later organises the same ideas into eight families and adds stricter behavioural rules. This concept page is the readable catalog.

## Key facts

- Categories: lifecycle, text, tools, state, activity, subagents, raw/custom, reasoning, drafts.
- Common fields: type, timestamp, rawEvent, metadata, optional subagentRunId.
- Custom events are the extension point for foreign payloads.
- Activity events are structured progress, not plain text.
- Metadata merges per message; tool-call metadata stays on the call.

## How it works

A producer emits a stream. A consumer switches on type and updates chat, tools, or state. Deltas assume the consumer kept the previous snapshot. Custom events let a renderer see A2UI operations or similar without those operations being hard-coded as AG-UI event names. The tools concept page (source 06) is the detailed tool lifecycle; this page is the index of all families.

## Implications for generatedui / ui121

ui121 should render from this stream: text in the transcript, tool calls as blocks, activity as progress on the block, custom events as declarative surfaces when the payload is a known catalog format. That is how one client stays compatible with many agent frameworks. Do not invent a parallel event vocabulary for the same jobs.
