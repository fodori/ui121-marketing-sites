# Whatnot — from low-code to vibe code

- Title: From low code to vibe code: bridging the gap for internal tools
- Source URL: https://medium.com/whatnot-engineering/from-low-code-to-vibe-code-how-we-bridged-the-gap-a71bd3b11ddc
- Fetched: 2026-09-23
- Status: ok

## Summary

Ty Giacalone, Seller Growth Engineering at Whatnot, 4 November 2025, describes a team that adopted Retool because internal tools were mostly permissions, auth, and a text field, then felt the ground move after late 2022. ChatGPT, Cursor, and "vibe coding" made greenfield UI faster than the low-code canvas, until deployment. Auth, staging, change management, and not leaking user data came back, and Retool had been quietly doing that work.

The compromise: Retool remains the scaffold (integrations, SSO, publishing), and custom behaviour is a vibe-coded React component embedded in the app. Retool custom components can read and write Retool state, so they sit next to existing queries. The boundary is the feature. A component’s internal state is small enough for an LLM context window, which is why he says models are good at this shape. Their starter renders a counter bound to a Retool number state. The production example is a video-on-demand analyzer: one component that reads multi-hour transcripts from S3, uses Snowflake and OpenAI, chunks the transcript, and writes a JSON analysis. He says that would have been weeks and was days. Time saved came from Cursor or Claude Code plus hot reload, instant publish of the component, data access that already existed in Retool, and SSO distribution to every employee. They open-sourced Whatnot-Inc/retool-custom-react-component-starter (local state sample, hot reload, queries from the component).

He generalizes past Retool to Appsmith, Budibase, and Refine: vibe-code what is unique, and keep identity, policy, and deployment on a platform. He quotes the gap between model speed and the slower evolution of those foundations, and a shift from a "knowledge economy" to an "allocation economy" where the skill is choosing what the machine creates and what guardrails it stands on.

## Key facts

- Date: 4 November 2025. Author: Ty Giacalone. Org: Whatnot.
- Pattern: low-code app shell + AI-written custom React components.
- Example: VOD analyzer over S3, Snowflake, and OpenAI, deployed in days rather than weeks.
- Open source: Whatnot-Inc/retool-custom-react-component-starter.
- Sister platforms named: Appsmith, Budibase, Refine.
- Risk he names: vibe-coded apps fail at auth, permissions, and production deploy even when the UI is fast.

## How it works

The platform owns login, resource credentials, and who can open the app. A custom component is a React bundle that subscribes to platform state and calls platform queries. Engineers generate that bundle with an LLM inside a starter that hot-reloads, then publish it as part of the Retool app. Users never install anything. The JSON the analyzer writes is an output artifact, not the UI definition. The UI definition remains inside Retool plus the component source.

## Implications for jsonapp.com / ui121

This is evidence that low-code did not die in 2025; teams glued AI-written code onto it because the platform still owned the dangerous parts. ui121 can offer a cleaner glue: the AI writes JSON UI, not a React island, and the runtime already has auth and submit. That removes the custom-component sidecar if the catalog is rich enough, and keeps it if it is not. The honest product line is Whatnot’s last rule: let the model create the unique screen, and keep identity and policy in the product.

The VOD tool’s output being JSON is a small echo of the thesis. Analysis results as JSON are easy. The screen itself as JSON is the step they did not take.

> "The fastest path to production: vibe-code what’s unique, leverage platforms for what’s proven."
