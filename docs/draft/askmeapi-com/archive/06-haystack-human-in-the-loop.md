# Haystack — human in the loop

Source: https://docs.haystack.deepset.ai/docs/human-in-the-loop
Fetched: 2026-09-23
Status: ok

## Summary

Haystack intercepts an agent’s tool calls before they run, using the general hooks system. A `ConfirmationHook` registered on `before_tool` applies confirmation strategies, rewrites the agent’s conversation state, and lets a person confirm, reject, or modify parameters. The stated use is high-stakes work: sending email, changing a database, calling an API.

The design is four layers. The hook maps a tool name, a tuple of names, or the wildcard `*` to a strategy. The built-in `BlockingConfirmationStrategy` pauses and asks. A policy decides whether to ask: always, never, or once per unique tool-name-plus-parameters pair. A UI collects the answer. Built-in UIs are a styled terminal (`RichConsoleUI`, needs the `rich` package) and a plain stdlib prompt. The human sees tool name, description, and parameters, then answers y, n, or m. Rejection and modification send templated feedback to the model, with optional free-text from the person. Custom policies subclass `ConfirmationPolicy`. Custom UIs subclass `ConfirmationUI`, and the docs sketch a webhook UI that sends an approval request and waits.

An important caveat: strategies only see arguments the model produced. Values injected from agent state at execution time are not shown in the confirmation. A production sketch uses Hayhooks, Redis `BLPOP`/`LPUSH`, and Open WebUI: the strategy emits a server-sent event, blocks on Redis, and a pipe function shows a dialog and pushes approved or rejected. The docs say the console UIs are the wrong tool for a web or server process.

## Key facts

- Package: `haystack-ai`. Import path: `haystack.hooks.human_in_the_loop`.
- Classes: `ConfirmationHook`, `BlockingConfirmationStrategy`, `AlwaysAskPolicy`, `AskOncePolicy`, `NeverAskPolicy`, `RichConsoleUI`, `SimpleConsoleUI`.
- Human actions: confirm, reject, modify. Result type carries action, optional feedback, and replacement parameters.
- Strategy output is a `ToolExecutionDecision`: whether to execute, feedback for the model, and final parameters.
- `AskOncePolicy` remembers confirmed `(tool_name, parameters)` pairs.
- GitHub: `deepset-ai/haystack` under `haystack/hooks/human_in_the_loop/`.
- Reference deployment pattern: Redis blocking pop plus an SSE dialog, not a console prompt.

## How it works

1. Model requests a tool.
2. `before_tool` hook runs the matching strategy.
3. Policy returns whether to ask.
4. UI collects confirm, reject, or modify.
5. Agent continues with the decision written back into state. Rejected calls do not run; the model receives the feedback template.

## Implications for askmeapi.com / ui121

Haystack already names the missing piece: a non-console confirmation UI that can wait. Their webhook sketch is exactly an ask-a-human API. AskMeAPI can be that strategy’s backend. ui121 can replace both the terminal prompt and a bespoke Open WebUI dialog, rendering tool name, description, and parameters as a form whose submit posts confirm, reject, or edited fields. The state-injection caveat is a product warning: the review form must show the real arguments that will execute, not only what the model typed.
