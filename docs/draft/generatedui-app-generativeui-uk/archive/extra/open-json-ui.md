# Open-JSON-UI — reachable description, no standalone site

- Source: https://docs.copilotkit.ai/learn/generative-ui/specs/open-json-ui
- Also indexed at: https://docs.copilotkit.ai/agent-spec/generative-ui/open-json-ui
- Fetched: 2026-09-23
- Status: partial
- Expanded from: source 09 and source 10, which cite Open-JSON-UI; SOURCES.md noted the project’s own site was blocked

## Summary

SOURCES.md recorded that Open-JSON-UI’s own site could not be fetched. A follow-up search on 23 September 2026 did not find a standalone homepage (no openjsonui.org, no independent spec site in the results). The URLs CopilotKit publishes as the Open-JSON-UI spec — including `/learn/generative-ui/specs/open-json-ui`, `/agent-spec/generative-ui/open-json-ui`, and a pydantic-ai variant — returned CopilotKit’s A2UI setup documentation when fetched live. The pages are titled A2UI and describe Google’s protocol. They are not a distinct Open-JSON-UI specification.

What remains is the description those same URLs had in search indexes, plus AG-UI’s concept table and the CopilotKit generative-ui README, which still name the spec.

Indexed description: Open-JSON-UI is an open standardisation of an internal OpenAI declarative schema for generative UI. It is JSON component definitions with a version, a component list, types, properties, children, and optional style. The point of the standardisation is type safety and a shape models already tend to emit, with a path into OpenAI’s own tools. AG-UI’s docs table lists the maintainer as OpenAI and the purpose as that open standardisation. A comparison table in the indexed CopilotKit page contrasted it with A2UI and MCP Apps: JSON rather than JSONL or HTML; streaming described as limited rather than native; type safety described as strong; platform described as agnostic. An illustrative agent payload uses `type: "open-json-ui"` and a spec of components such as a card. A sketched component interface has optional id, a type, properties, children, and style.

OpenAI’s public generative-ui sample in `openai/openai-structured-outputs-samples` is related but not the same artifact. It shows a `generate_ui` tool whose component definitions map onto React components, using structured outputs. It does not title itself Open-JSON-UI. It is the closest official OpenAI demo of “schema in, components out.”

No permissive license for a standalone Open-JSON-UI text was found, because the text itself was not available as a stable page. This note paraphrases the indexed summary only.

## Key facts

- No canonical standalone site found on 2026-09-23.
- CopilotKit’s published Open-JSON-UI URLs currently serve A2UI docs. Live fetch does not match the indexed Open-JSON-UI page.
- Maintainer attribution in AG-UI docs: OpenAI. Role: declarative JSON schema, open version of an internal format.
- Indexed contrast with A2UI: less streaming-native, stronger typing, JSON document rather than JSONL.
- Illustrative envelope: type `open-json-ui`, spec.components[].
- Nearby OpenAI sample: structured-outputs generative-ui demo with a generate_ui tool. Not labelled Open-JSON-UI.

## How it works

From the indexed description only: the agent returns a JSON document that lists components in a tree (type, properties, children, style). The client maps each type onto an approved component. CopilotKit’s README says its renderer accepts that payload the same way it accepts A2UI, as a declarative card the frontend paints. The live product docs no longer show the setup steps for that payload; they show A2UI middleware instead. Until a stable spec page returns, implementers should not treat the indexed JSON sketch as a normative schema.

## Implications for generatedui / ui121

Keep Open-JSON-UI in the landscape sentence — Google’s A2UI, OpenAI’s declarative JSON, MCP’s iframe apps — and do not link customers to the CopilotKit path as if it still documented Open-JSON-UI. ui121’s catalog is compatible with the idea (typed components, no free HTML) without claiming conformance to a spec that does not have a stable public document. If a real Open-JSON-UI site appears later, replace this partial note. Prefer A2UI v0.9.1 as the wire format to implement, because that document can actually be read.
