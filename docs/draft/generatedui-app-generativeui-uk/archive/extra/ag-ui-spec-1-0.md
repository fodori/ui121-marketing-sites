# AG-UI specification 1.0

- Source: https://docs.ag-ui.com/spec/1.0
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 06 (AG-UI docs)

## Summary

The 1.0 specification is the behavioural contract, separate from the JSON Schema. The schema wins on structure (fields, types, discriminators). This document wins on order, lifecycle, what to do with unrecognised material, and when a warning is required. If they disagree about shape, the schema is right and the prose has a bug. Roles: a producer emits the stream (agent, proxy, bridge, test double); a consumer reads it (SDK, UI, recorder, another proxy). A hop that does both obeys both directions. Conformance is per stream: one malformed run fails conformance. MUST and MUST NOT bind; SHOULD is a reasoned default.

The shape of a session is one request in and one ordered stream out, carrying text, tool calls, reasoning, shared state, and progress. The spec decomposes into an event model, run input (the single application-to-agent message), metadata merge rules, patterns (streaming open-content-close, snapshot versus delta, interrupt and resume), transports (HTTP plus SSE as the default, HTTP plus protobuf as the binary binding), a processing model (middleware runs before enforcement; unknown material survives; malformed known values are fatal), versioning (how to talk to an older peer and when dropping content requires a warning), and eight event families.

Security principles are written as implementor duties, not wire checks. The application decides what runs and should get explicit consent before side-effectful tool calls. It must not present an action as user-approved if it was not. Model output is untrusted: tool arguments, results, state, and passthrough payloads are validated, and streamed content must not be rendered as executable markup. State and messages round-trip, so producers should not put secrets in them. The protocol does not say how a particular UI paints an event. First-party SDKs named: TypeScript, Python, and .NET. Other languages conform if they claim to, but the rules are not derived from them.

## Key facts

- 1.0 splits authority: schema for structure, this document for behaviour.
- One run input, one ordered event stream.
- Default transport: HTTP POST plus SSE. Binary: HTTP plus protobuf.
- Security: consent for side effects; never render model output as executable markup; no secrets in round-tripped state.
- Eight event families are specified under the events section.
- SDKs of record: TypeScript, Python, .NET.

## How it works

The application posts run input. The producer streams events. The consumer enforces ordering and lifecycle, keeps unknown extensions, and rejects broken known events. Interrupts pause for an outside answer; the next run resumes. Snapshots reset a value; deltas patch it. Custom and raw events are escape hatches with limits so they do not become a second protocol. Rendering policy — sandbox, catalog, or component map — is the application’s, constrained by the “no executable markup” rule.

## Implications for generatedui / ui121

The security section is almost a requirements list for ui121: consent on consequential actions, validate tool payloads, do not innerHTML the model, keep secrets out of shared state. A block catalog satisfies “do not render streamed content as executable markup” more cleanly than a sanitiser on free HTML. 1.0 is the version to target for a client. The changelog page exists for the 0.x delta; this note is the overview only.
