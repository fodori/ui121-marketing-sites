# MCP specification (2025-06-18) — elicitation

Source: https://modelcontextprotocol.io/specification/2025-06-18/client/elicitation
Fetched: 2026-09-23
Status: ok

## Summary

The 2025-06-18 MCP spec adds elicitation: a server asks the user, through the client, for more information in the middle of another feature. The server does not render UI. It sends `elicitation/create` with a human-readable message and a `requestedSchema`. The client shows whatever interface it wants, and returns an action plus, on accept, content that should match the schema. The spec says the design may still change in later protocol versions.

The schema is deliberately small so every client can build a form. It is a flat object of primitive properties only: string (with min/max length and formats email, uri, date, date-time), number or integer (minimum and maximum), boolean (optional default), and string enums with optional display names. Nested objects, arrays of objects, and other advanced JSON Schema features are out of scope. Clients are expected to generate inputs, validate before sending, and use titles and descriptions as field guidance.

Three actions keep “no” from being ambiguous. Accept means the user submitted data. Decline means they explicitly refused. Cancel means they dismissed the dialog without choosing. Servers should process data, offer alternatives, or ask again later, respectively. The page does not state a content license.

Trust rules are normative. Servers must not use elicitation to request sensitive information. Clients should show which server is asking, let the user review and edit before send, offer decline and cancel, rate-limit requests, and make the reason for the ask clear. Both sides should validate content against the schema.

## Key facts

- Method: `elicitation/create`. Capability declared at initialize as `elicitation: {}`.
- Schema: flat object, primitive fields only. String formats: email, uri, date, date-time.
- Actions: `accept` (with `content`), `decline`, `cancel`.
- Sensitive data is forbidden. User approval controls are a client responsibility.
- Introduced as new in this protocol version, with an explicit note that the design may evolve.
- No license statement on the fetched page.

## How it works

1. During some other MCP interaction, the server sends `elicitation/create` with a message and schema.
2. The client presents a form and lets the user edit or refuse.
3. The client returns accept, decline, or cancel.
4. The server continues with the content, or handles refusal.

Section outline: user-interaction model, capability, request and response messages, supported schema types, the three actions, security considerations.

## Implications for askmeapi.com / ui121

Elicitation is the standards-shaped version of askmeapi: a server asks, a schema constrains the answer, the human’s reply is data. MCP still assumes the client’s user is present. AskMeAPI is elicitation when the “client” is a phone, a group, or an inbox, and the caller is a backend that may not be an MCP host. ui121 is a natural elicitation renderer: one flat schema becomes one mobile form, with accept, decline, and cancel as first-class buttons. Matching the spec’s primitive types (string, number, boolean, enum) keeps generated forms compatible with MCP clients later.
