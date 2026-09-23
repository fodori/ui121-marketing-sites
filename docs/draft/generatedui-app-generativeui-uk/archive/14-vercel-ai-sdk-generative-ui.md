# Generative user interfaces — Vercel AI SDK

- Source: https://ai-sdk.dev/docs/ai-sdk-ui/generative-user-interfaces
- Fetched: 2026-09-23
- Status: ok

## Summary

Vercel’s AI SDK documentation defines generative UI as letting a model go beyond text and produce interface, on the grounds that the result is more engaging and more native to an AI product. The mechanical definition, which is the one that matters, is narrower: generative UI is connecting a tool result to a React component.

The page walks a chat built with `useChat`. The model is given tools. If the conversation warrants it, the model calls a tool. The tool runs and returns data. The UI maps that data onto a component. The worked example is weather: a Zod input schema with a location string, a simulated execute function that returns condition, temperature, and location, and a Weather component. A second tool, stock price, shows the pattern scales by adding tools, not by letting the model write JSX.

In the version of the SDK this page documents, tool parts are typed as `tool-${toolName}` rather than a generic tool part. The client switches on part state: input available (show a loading state), output available (render the component with the tool output), output error (show the error text). The server side uses `streamText` with the tools object and streams UI messages back. The page’s sample model string is incidental; the pattern does not depend on a particular provider.

There is no catalog protocol on this page. The set of components is whatever the application switches on. The model chooses among tools the developer registered. That is the controlled end of the spectrum CopilotKit describes, expressed as mainstream SDK documentation rather than a research spec.

## Key facts

- Definition used in the docs: tool-call results connected to React components.
- Client hook: `useChat`. Server helper: `streamText`.
- Tool definition helper: `tool` from the `ai` package, with Zod `inputSchema` and `execute`.
- Part type pattern: `tool-${toolName}`. States: input-available, output-available, output-error.
- Examples: weather card, stock price card.

## How it works

The developer writes the component and the tool schema. The model only decides whether to call the tool and with what arguments. Streaming means the UI can show a loading state before `execute` finishes. Adding a capability means adding a tool and a branch in the message-part renderer. Nothing in the flow parses arbitrary HTML from the model.

Section outline: definition; basic chat; create a tool; pass tools to the API route; render on tool part state; add a second tool.

## Implications for generatedui / ui121

This is the pattern product teams already know, which makes it the on-ramp. ui121 can say: you are already mapping tools to components in the AI SDK; a shared block catalog is that map made explicit, portable, and safe to expose to more than one host. The limitation to mention honestly: every new layout is a new tool and a new React branch, so the long tail of one-off forms still wants a declarative catalog (A2UI-style) on top of the same tool loop. generatedui should show the weather-card pattern first, then the “compose a form from blocks” step, so buyers see both ends of control.
