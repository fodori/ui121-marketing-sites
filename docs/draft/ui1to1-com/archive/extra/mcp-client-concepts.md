# MCP — Understanding clients

- Source: https://modelcontextprotocol.io/docs/2026-07-28/learn/client-concepts
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

The client page separates the host (the application a person uses, such as Claude or an IDE) from the client (the protocol object that talks to one server). Hosts coordinate many clients. Clients can also offer features back to servers so a server can build richer interactions than “return some text.”

Elicitation is the feature that matters for human-in-the-loop. A server asks the user for specific information mid-flow. The holiday example: a Barcelona package is chosen, the server sends a structured confirm with the summary (flights 15–22 June, beachfront hotel, a stated total of $3,000) and fields for seat, room type, or insurance, then later asks for traveller details. The client must show which server is asking, why, and how the data will be used. The person can fill the schema, decline, or cancel. The client validates before answering the server. URL mode shows the full URL and asks consent; the client does not fetch it, and secrets such as passwords, API keys, and card data must not be collected in a form that passes through the model — those stay on the target site. Roots, covered later on the page, bound which workspace a server may see. The interaction model is autonomy: clear context, a real choice to refuse, and a warning on suspicious requests.

## Key facts

- Host = product UX. Client = one server connection.
- Elicitation: server-initiated structured questions during a task.
- User options: answer, decline, or cancel the operation.
- Secrets (passwords, tokens, payment data) are forbidden in form-mode elicitation; URL mode keeps them off the model path.
- Example domain: travel booking confirmation with a stated $3,000 package.

## How it works

The server decides it cannot continue without a fact or a confirmation. It sends a schema and a purpose. The host renders controls, checks the response, and returns it. Decline is a valid protocol outcome, not an error to hide. URL elicitation is a handoff to a browser the user trusts, with consent recorded and the payload staying out of band. That split is how the protocol tries to keep the model from seeing credentials.

## Implications for ui1to1.com / ui121

Elicitation is the protocol’s admission that agents must stop and ask a person, with a form, not a paragraph. ui121’s canvas is that form as a product: one interface for this booking, this approver, this moment, connected back into the workflow. The ban on collecting secrets inside the model context is a privacy line the brand should share. One-to-one UI should show the case and collect the decision; payment and credentials stay in a dedicated step the model does not read. JSONUI maps cleanly onto “schema in, controls out, validated response back.”
