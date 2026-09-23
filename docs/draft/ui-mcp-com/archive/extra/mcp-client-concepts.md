# Understanding MCP clients

- **Source:** https://modelcontextprotocol.io/docs/2026-07-28/learn/client-concepts
- **Fetched:** 2026-09-23
- **Status:** ok
- **Expanded from:** source 04 (architecture)

## Summary

The host is the product a person uses. The client is the protocol object the host creates for one server. This page covers what clients offer back to servers, not what they consume.

Elicitation lets a server pause and ask the user for something specific. Form mode sends a schema and the client builds inputs. URL mode sends the person to an external page for secrets, payment, or OAuth; that data must not pass through the client or the model. The 2026-07-28 flow is multi-round-trip: the server returns an input-required result, the client collects answers, and the original tool call is retried with those responses. Users can answer, decline, or cancel. Clients should show which server is asking. Passwords and card numbers are forbidden in form mode.

Roots and sampling are deprecated in this protocol version and scheduled for removal. Roots were filesystem boundaries (`file://` directories) that servers were asked to respect but that were not a security enforcement. Sampling let a server request a model completion through the client, with human review of the prompt and the answer, so the server did not embed its own model SDK. New work should pass files as tool arguments or resource URIs, and should call model providers directly.

The travel examples continue: a booking server elicits seat, room type, and insurance, then contact details; a deprecated sampling tool ranked 47 flights. Those stories still explain the product idea even where the mechanism is deprecated.

## Key facts

- One client instance per server connection.
- Elicitation modes: form and URL.
- Sensitive data belongs in URL mode, outside the model context.
- Roots and sampling: deprecated as of 2026-07-28.
- Pattern name: multi-round-trip requests.

## How it works

A tool call that needs a missing fact does not fail closed or invent the fact. The server asks, the host shows a form or a consent URL, and the call resumes. The host remains the security boundary. URL mode exists so credentials never sit in the transcript.

## Implications for ui-mcp.com / ui121

Elicitation is the protocol’s own “show a form” feature, and MCP Apps are the richer version of the same idea. ui121 should use Apps for designed multi-field UI and elicitation for a short confirm the host can render natively. Never collect secrets in an iframe form if URL mode is the intended path. Deprecation of sampling means a ui121 server should not depend on asking the host’s model to think on its behalf; put model calls in the product if they are required, and keep the interface honest about what the person is approving.
