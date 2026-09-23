# AG-UI draft — generative user interfaces

- Source: https://docs.ag-ui.com/drafts/generative-ui
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 06 (AG-UI docs) and source 09 (guide links into AG-UI’s generative UI design)

## Summary

This page is a draft, not a shipped spec. Author: Markus Ecker. Status line: Draft. The problem it states: custom UI for agents currently means a programmer writes a tool renderer for each case, which does not adapt. The proposal uses a client-side tool so every AG-UI framework gets the feature without a new server integration.

The design is two steps, because provider limits get in the way. OpenAI tool descriptions are capped at 1024 characters; Gemini and Anthropic are not. JSON Schema features such as classes, deep nesting, `$ref`, and `oneOf` are unreliable across providers. A large UI grammar inside the main agent also crowds the context window. So step one is a small tool, `generateUserInterface`, with three arguments: a high-level description, pre-filled data, and an output schema describing what the user must send back. Step two is a secondary model or agent whose only job is to turn those three into a concrete UI. The generator is pluggable: JSON Schema plus a UI schema (the example looks like JSON Forms, with VerticalLayout and controls), or even generated React. The main agent stays in control of what is needed; the specialist decides how it looks. The user’s validated submission returns as the tool result.

The draft asks SDKs to add a tool type, a generator registry, schema validation, and a response handler. Existing integrations would emit a normal tool call. Use cases listed: dynamic forms, charts, multi-step wizards, layouts that change with device or preference. Tests proposed include single-step versus two-step performance and cross-provider checks.

## Key facts

- Status: draft. Author: Markus Ecker.
- Tool name: generateUserInterface. Arguments: description, data, output schema.
- Motivation for two steps: 1024-character tool descriptions on OpenAI; weak cross-provider JSON Schema; context cost.
- Example generators: JSON Forms-style uiSchema; React Hook Form plus Zod.
- Backward compatible with ordinary tool rendering.

## How it works

The primary agent calls one stable tool when it needs a form or a view. A second, UI-only model expands that into a schema the client already knows how to render. The user submits data that matches the output schema. That data is the tool result. The primary agent never has to speak a fat component grammar, and the client never has to trust raw HTML from the first model.

## Implications for generatedui / ui121

This draft is the “fixed catalog, specialist composer” pattern ui121 can productise: the task agent says what it needs and what it must get back; a composer fills a block tree; the runtime validates. It is a better fit than letting the task model emit markup. Because it is still a draft, do not claim AG-UI requires this tool. Claim that ui121 already separates “what the task needs” from “which approved blocks appear,” which is the same split. The 1024-character limit is a practical reason a fat A2UI schema should be injected by a side path, not stuffed into every tool description.
