# The generative UI spectrum — Rumeysa Tatli (Medium)

- Source: https://tatlirumeysa.medium.com/the-generative-ui-spectrum-how-to-build-ai-agents-that-actually-feel-like-software-f8b5ae547672
- Fetched: 2026-09-23
- Status: ok

## Summary

Rumeysa Tatli, 5 June 2026, argues that generative UI is a continuum of techniques, not a single method, and that choosing a point on it is an engineering decision. Agents broke the old request-and-response loop: they run long, stream partial work, mix tool calls with prose, and need to be interrupted. A traditional API is the wrong container. The interface layer is where that mismatch shows up. The claim that “almost every interaction will be partly agent-mediated” is offered as a horizon, including mundane ones, while today’s agent UIs are compared to early command lines: usable for enthusiasts, not yet mainstream. Products that feel like software, in this telling, show the agent’s work, allow intervention, and render the right view at the right moment.

The spectrum is ordered by who controls the pixels.

Controlled generative UI: the developer registers finished components. The agent picks one and supplies arguments, as if calling a function. A `useComponent` sketch registers a flight card with a Zod parameter schema and a React render. Brand control is total. The agent cannot invent a widget; the worst miss is the wrong card or bad data. It is fast because there is no second generation step. The cost is linear: every new interaction needs a component. The author’s rule is to use this for the surfaces users hit constantly — an airline’s flight results — and to treat it as the 80/20 solution.

Declarative generative UI: a catalog of primitives (title, text, row, column, card, metric, charts — “maybe fifteen or twenty”). Definitions are what the agent sees; renderers are the design-system components users see. The same JSON can target web, mobile, or Slack if each platform has renderers. Dynamic schema lets the agent invent the layout. Fixed schema freezes the layout and lets the agent only stream data, which the article demonstrates with A2UI operations: create a surface, update components with a frozen flight schema, update the data model with live flights. The author says not to hand-write those schemas; generate them and treat them like build artifacts. Declarative UI is less predictable and less pixel-perfect, and it needs validation, but it covers the long tail (lost-luggage, refunds) and internal tools.

MCP Apps: embed a third-party application, often in a sandboxed iframe, by connecting a server. The article’s example is a whiteboard. Architecture: server (tools and UI resources), host (iframe and broker), view (sandboxed app). Tools and UI are siblings, a change from earlier designs where any tool might optionally return UI. Strategic use is to borrow an app users already know. It is a poor way to build your own core product, because of the iframe boundary and limited styling. The line to keep: use it to borrow, never to build.

Open-ended generative UI: the agent writes HTML, CSS, and JavaScript for one request, behind a flag such as `openGenerativeUI`. The article calls this the picture people have in their heads, and also the slow, non-deterministic, error-prone end. Prompt and model choice dominate quality. Fit: delight and unanticipated moments, not the login screen.

Two further primitives sit outside the chat transcript. Frontend tools run in the browser (open a panel, navigate) and return a result into the agent loop. Shared state lets the UI and the agent read and write one object, with streamed deltas and conflict handling. The rule of thumb: if the user can do it in the UI, they should be able to do it through the agent.

## Key facts

- Published 5 June 2026. Author: Rumeysa Tatli.
- Order: controlled, declarative (dynamic vs fixed schema), MCP Apps, open-ended.
- Controlled called the default for brand-critical, high-traffic surfaces.
- Declarative catalog size suggested: on the order of 15–20 primitives.
- MCP Apps: “borrow, never build” for your own core UI.
- Extra primitives: frontend tool calls and shared state, not only generated views.

## How it works

Each point changes what the model is allowed to emit. Controlled: a tool name and arguments. Declarative: a schema of catalog blocks plus a data model, either composed live or frozen. MCP Apps: a reference to someone else’s sandboxed UI. Open-ended: markup. AG-UI-style plumbing, in the examples, carries the tool calls and the state deltas so the chat is not a side panel bolted on afterwards.

Section outline: why agents break request/response; controlled; declarative and the fixed/dynamic fork; MCP Apps; open-ended; a decision table; frontend tools and shared state.

## Implications for generatedui / ui121

This spectrum should be the information architecture of a generatedui explainer. ui121’s home is controlled blocks for the main product surfaces and declarative composition for the long tail, with MCP as the way tools and borrowed apps connect, and with open-ended HTML kept off by default. The “borrow, never build” line is the sharpest way to explain why an MCP App iframe is not the ui121 runtime. Shared state and frontend tools are the part to add so the story is not only “the agent draws a card” but “the agent and the operator edit the same task.” Fifteen to twenty primitives matches the codelab’s basic catalog and is a credible scope for a first ui121 block set.
