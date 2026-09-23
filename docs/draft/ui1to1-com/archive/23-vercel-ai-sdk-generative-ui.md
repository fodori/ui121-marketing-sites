# Vercel AI SDK — Generative user interfaces

- Source: https://ai-sdk.dev/docs/ai-sdk-ui/generative-user-interfaces
- Fetched: 2026-09-23
- Status: ok

## Summary

Vercel’s AI SDK UI docs define generative UI as letting a large language model go beyond text and cause a user interface to be rendered, so the experience feels native to the conversation. The worked example is weather: the user asks about San Francisco, the model calls a weather tool, and the reply is a forecast card rather than a paragraph.

The mechanism is tools. The application gives the model functions for specialised jobs. The model decides whether to call one from the conversation. The tool runs and returns data. That data is passed into a React component. Generative UI, in this document, is the wiring of tool results to components, not the model inventing arbitrary markup.

The tutorial builds a chat with the `useChat` hook: local input state, `sendMessage`, and a render loop over `message.parts`. Text parts print as text. An API route uses `streamText`, converts UI messages to model messages, and streams a UI message response back, with a step limit. A tool is declared with a description, a Zod input schema, and an `execute` function (the sample fakes a two-second weather lookup). The route receives the tools map. On the client, AI SDK 5 names tool parts `tool-${toolName}` and exposes states: inputs ready (show a loading state), output ready (render the component), and output error. A second tool, stock price, is added the same way to show the pattern repeats.

The page is one document in a docs set. SOURCES also points at a related RSC page (`https://ai-sdk.dev/docs/ai-sdk-rsc/generative-ui-state`). This note stays on the AI SDK UI pattern above, which the page presents as the current way to connect streamed tool output to components. The page is a single guide, not a blog index, so it was not expanded into a collection.

## Key facts

- Generative UI here = tool call results rendered as React components inside chat.
- Client hook: `useChat`. Server: `streamText` plus a UI message stream.
- Tools: description, Zod `inputSchema`, `execute`.
- Tool part type in AI SDK 5: `tool-${toolName}`, with states `input-available`, `output-available`, `output-error`.
- Sample tools: `displayWeather` and `getStockPrice`.
- Related, not summarised as a second article: AI SDK RSC generative UI state.

## How it works

The person types. The model either answers in text or selects a tool whose description matches the need. The server runs the tool and streams partial message parts. The client switches on part type and state, so the UI can show “loading” before the payload exists and a real component when it does. Adding a capability means adding a tool and a component, not a new page flow. The model chooses when the component appears; the developer chooses what components exist.

## Implications for ui1to1.com / ui121

This is the industry-standard version of server-driven, conversation-aware UI, and it matches JSONUI’s shape: something on the server decides which interface to show, and the client renders a known component from structured data. ui1to1.com can say one-to-one UI is that decision made for a person, not only for a chat turn. The weather card is a mini canvas. A universal canvas is the same contract for a whole workflow — the tool result is the task the human completes.

The loading/error states are a product lesson: a live interface must show that work is in flight and when it failed, or the single surface feels broken. Human-in-the-loop is the missing half of the tutorial. The sample displays data; it does not ask the person to approve, edit, and resume a process. That resume step is ui121’s story. Keep the citation on AI SDK UI and tools, and do not paste the sample code into marketing.
