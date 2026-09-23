# Frontend experiences with ADK and A2UI — Google Codelab

- Source: https://codelabs.developers.google.com/next26/adk-a2ui
- Fetched: 2026-09-23
- Status: ok

## Summary

This codelab, aimed at intermediate Python developers with a Google Cloud project, shows the data-versus-renderer split in one sitting. Most agents return plain text. A2UI is presented as a protocol of 18 declarative primitives the agent composes, which the client renders natively, so a new layout does not require new frontend code. The lab uses the Agent Development Kit and the `a2ui-agent-sdk` package. It takes about 15–20 minutes and estimates under $5 of cloud cost. Model used in the sample agent: gemini-3-flash-preview. Python 3.12+ is required.

The build is a mock cloud dashboard in three stages. First, an ADK agent with a `get_resources` tool returns three fake services (Cloud Run auth-service healthy, Cloud SQL events-db warning at 92% storage, Cloud Run analytics-pipeline in error) as a prose summary. The lab’s point is that the text is accurate and still a poor experience. Second, `A2uiSchemaManager` with the basic catalog for version `"0.8"` generates the system prompt: role, workflow, UI hints (cards, rows, columns, icons, buttons; no markdown inside text values; usageHint for headings), plus schema and examples. The same prompts then return A2UI JSON. Third, an after-model callback extracts that JSON and wraps each message so `adk web`’s built-in renderer paints cards, status, and buttons. A further prompt (“deploy a new service”) produces a different layout from the same primitives.

The lab teaches the v0.8 trio explicitly. beginRendering names the surface and the root. surfaceUpdate sends a flat list of components with ID references, not a nested tree. dataModelUpdate sends values separately; components bind with a path, so data can change without resending structure. The 18 primitives are grouped as layout (Card, Column, Row, List, Tabs, Divider, Modal), display (Text, Image, Icon, Video, AudioPlayer), and input (TextField, DateTimeInput, MultipleChoice, CheckBox, Slider). The lab says a browse view, a priority dashboard, and a configuration form all use that same set.

Production renderers listed at the end: `@a2ui/react`, `@a2ui/lit`, `@a2ui/angular`, and the Flutter GenUI SDK. The lab itself only renders inside `adk web`.

## Key facts

- 18 primitives, 3 message types, flat component model (v0.8 in this lab).
- SDK: `a2ui-agent-sdk`, `A2uiSchemaManager`, `BasicCatalog`.
- Message types demonstrated: beginRendering, surfaceUpdate, dataModelUpdate.
- Binding: `{"path": "key"}` so data and structure are independent.
- Duration about 15–20 minutes; cost estimate under $5.
- Production packages named: `@a2ui/react`, `@a2ui/lit`, `@a2ui/angular`, Flutter GenUI SDK.

## How it works

The schema manager writes the prompt that teaches the model the catalog. The model calls the data tool, then emits JSON messages. A small callback strips fences and conversational prefixes and hands each message to the dev UI renderer. The agent, the tool, and the primitive list stay constant; the intent in the prompt changes the composition. That is the demonstration that UI is data.

Section outline: overview; cloud setup; text agent; test the wall of text; swap in the A2UI prompt; inspect JSON; explain the three messages and 18 primitives; callback that renders; try three prompts; cleanup; production renderer table.

## Implications for generatedui / ui121

This is the cleanest teaching story for a marketing site: same data, text versus blocks, then a third prompt that rearranges the blocks without a new screen in the codebase. ui121 already lives in that third stage if its catalog is fixed and the agent only composes. The codelab’s v0.8 message names are older than v0.9.1’s createSurface / updateComponents / updateDataModel; marketing should use the current names and treat this lab as the idea, not the wire format. Eighteen primitives is a concrete “pre-built blocks” number to paraphrase carefully (“the basic catalog is a small fixed set of layout, display, and input widgets”).
