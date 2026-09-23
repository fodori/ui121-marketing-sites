# Generative UI — the future of human–AI interaction (DEV)

- Source: https://dev.to/ipt/generative-ui-the-future-of-human-ai-interaction-5eol
- Fetched: 2026-09-23
- Status: ok

## Summary

A DEV Community post dated 28 May (year not printed on the fetched page; the piece discusses CopilotKit patterns that match 2026 writing) walks through three generative UI patterns and two demos. It was co-authored; the page does not put a byline in the fetched header. The thesis: text forces a conversation even when a graphical control would be faster, and generative UI lets the agent produce the controls the task needs. The agent should read UI state and act through it, including human confirmation before a side effect.

The three patterns match the CopilotKit survey. Static means the agent calls a predefined frontend tool whose UI already exists. Declarative (A2UI, Open-JSON-UI) means the agent emits structured data the frontend interprets. Open-ended (MCP Apps, and in their demo raw HTML) means custom markup with extra security care. The patterns can be combined. Frameworks named: CopilotKit, a headless router called Pillar, and the Vercel AI SDK as streaming and model runtime, including for CopilotKit’s built-in agent.

CopilotKit is described as MIT-licensed, with 30k+ GitHub stars, and as the company behind AG-UI. Core ideas they used: readables (expose state), actions (let the agent act in the UI), and a chat sidebar with streaming and tool rendering. Stack in the demos: React/Next.js and Angular support claimed; backends LangGraph or Microsoft Agent Framework; partnership mentions for Microsoft and Google on AG-UI and A2UI.

Demo one is tic-tac-toe. A `proposeNextMove` tool renders an accept/reject dialog (`renderAndWaitForResponse`) before the move. `analyzeBoard` returns data drawn as overlays on the existing board. `renderCoachCard` returns custom HTML sanitised with DOMPurify before `dangerouslySetInnerHTML`. `useAgentContext` publishes board, player, and winner. The Next.js route `/api/copilotkit` hosts the built-in agent on Azure OpenAI `gpt-5-mini` via `@ai-sdk/azure`.

Demo two is a 2D RPG. A LangGraph NPC sees positions, inventories, and distance, pathfinds with A*, gives quests from what is actually on the map, and can accept an off-script item. The agent never touches the DOM; it reads state and calls named functions. The narrative is three beats: a crystal quest, a banana offered instead, a coin reward. Nothing is a scripted quest table.

Lessons: readables and actions colocated with components worked; the chat chrome saved time; LangGraph wiring was straightforward. Pitfalls: with a custom LangGraph agent, readables arrive on `state.copilotkit.context` and must be copied into the system message yourself, whereas the built-in agent injects them; the sidebar `instructions` prop was ignored for custom agents (known issue; put instructions on the agent); rapid tool calls saw stale React state until refs were updated immediately rather than in an effect. Their judgement: rolling your own is fine for a prototype; a protocol and a chat framework pay off once there are multiple agents, generative UI, and shared state.

## Key facts

- Three patterns: static AG-UI tools, declarative A2UI / Open-JSON-UI, open-ended including MCP Apps.
- CopilotKit described as MIT, 30k+ stars, origin of AG-UI.
- Demos: tic-tac-toe coach; LangGraph NPC in a 2D RPG.
- Model in demo one: Azure OpenAI gpt-5-mini.
- HTML path in the tic-tac-toe demo: DOMPurify, not a catalog.
- Custom-agent footgun: readables are not auto-injected; instructions prop can be dropped.

## How it works

The browser registers what the agent may see and do. The agent calls those actions over CopilotKit’s runtime. Some actions render a waiting dialog (human in the loop). Some return data the existing components already know how to draw. One action returns HTML that is sanitised and injected. Shared game state is published every render so the model is not guessing the board. The RPG shows the same loop with a custom graph: state in, named actions out, pathfinding and inventory staying in ordinary game code.

## Implications for generatedui / ui121

The tic-tac-toe split is a teaching diagram for generatedui. Overlays on a real board are controlled blocks (ui121’s default). The coach card as raw HTML is the exception that needs a sanitiser and still looks like a foreign snippet — the case to avoid for branded workflows. The RPG lesson for MCP: the agent should call allowlisted actions on live state, not receive a license to rewrite the interface. The stale-state bug is a product warning: if ui121 lets an agent fire several block actions in one turn, the runtime has to apply them against current state, not against a render that has not committed. The 30k-star figure is the author’s CopilotKit claim, not a fresh count from this research pass.
