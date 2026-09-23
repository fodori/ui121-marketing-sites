# CopilotKit generative-ui examples repository

- Source: https://github.com/CopilotKit/generative-ui
- Fetched: 2026-09-23
- Status: ok

## Summary

This repository is CopilotKit’s map of generative UI examples across AG-UI, A2UI, Open-JSON-UI, and MCP Apps. Generative UI is defined here as interface that an agent generates, selects, or controls at runtime, rather than a screen that is fully static.

The README lines the three patterns up with specs:

- Controlled, high control and low freedom, points at the AG-UI protocol repository.
- Declarative, shared control, points at A2UI and Open-JSON-UI docs on CopilotKit’s site.
- Open-ended, low control and high freedom, points at MCP Apps and custom UIs.

Open-JSON-UI is described as an open standardisation of OpenAI’s internal declarative schema. The illustrative payload is a typed object whose type is `open-json-ui` and whose spec lists components (a card with properties is the sketch). The README says the frontend renders that JSON the same way it renders an A2UI payload: the agent describes a card, the client paints it. Links from the repo include the live demo (go.copilotkit.ai/gen-ui-demo), docs.copilotkit.ai/generative-ui, the Open-JSON-UI and A2UI spec pages, an A2UI plus Agent Spec example (CopilotKit/with-agent-spec), the ecosystem page copilotkit.ai/generative-ui, and a page on how AG-UI and A2UI fit together (copilotkit.ai/ag-ui-and-a2ui).

The repo is an index of examples and pointers, not a long essay. The 2026 developer guide (source 09) is the narrative version of the same split.

## Key facts

- Scope stated in the repo: examples for AG-UI, A2UI / Open-JSON-UI, and MCP Apps.
- Open-JSON-UI attribution: open form of an internal OpenAI declarative schema.
- Demo URL: go.copilotkit.ai/gen-ui-demo.
- Related example repo named: CopilotKit/with-agent-spec.

## How it works

An agent response can include a declarative document. The client has a renderer registered for that document type. For the controlled pattern, the agent calls a tool and the app already knows the component. For the declarative pattern, the document lists components and properties and the renderer walks them. For MCP Apps, the response references an embedded app. The repository’s job is to show those three side by side so a developer can see the control trade-off rather than pick a brand name.

## Implications for generatedui / ui121

Treat this README as a competitive taxonomy, not as a product. ui121 should publish its own one-row version: controlled blocks for the product’s main surfaces, declarative JSON when the agent must compose an unfamiliar but still catalog-bound layout, and a deliberate refusal of free-form HTML as the default. If Open-JSON-UI and A2UI both render “a card from JSON,” a marketer can say ui121 speaks that class of payload — data in, approved components out — without pretending to be a second spec body.
