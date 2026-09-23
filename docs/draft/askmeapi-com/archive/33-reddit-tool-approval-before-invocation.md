# Reddit r/LangChain — approval before tool invocation

Source: https://www.reddit.com/r/LangChain/comments/1ci3m0k/toolcalling_agents_human_approval_before_tool/
Fetched: 2026-09-23
Status: partial

The live Reddit page could not be fetched (HTTP 403 on the thread URL). The self-post below is from the PullPush archive of post id `1ci3m0k`. The archive lists 0 comments and a score of 1.

## Summary

In May 2024, user transwarpconduit1 asked how to confirm with a person before a LangChain agent executor runs a specific tool, using `send_email` as the example. They wanted a lifecycle hook that runs before invocation, receives the tool name and arguments, and returns true, false, or an exception. They had already decided callback handlers were the wrong place: those are for logging and metrics, not for changing control flow.

Two workarounds are described as things that function but feel wrong. Put the confirmation inside the tool function and read stdin there. Or wrap the tool with something like `add_human_approval(tool_func)` that asks first and only then calls the original function. Both sit at the tool, not in the agent lifecycle. The post asks the community whether the framework should own that hook. No archived comments are available, so there is no visible answer on this snapshot.

The post is early evidence of the same gap later products filled: builders inventing an approval wrapper because the agent runtime would not pause between “model chose this call” and “runtime executed it.”

## Key facts

- Post id `1ci3m0k`. Author: transwarpconduit1. `created_utc` 1714614231 (May 2024).
- Score 1, 0 comments in the archive snapshot.
- Desired hook: before invocation, with tool name and arguments, boolean or exception.
- Callbacks rejected by the author as introspection-only.
- Homemade helper name in the post: `add_human_approval`.
- Live thread blocked with HTTP 403.

## How it works

There is no working design in the post, only the wish. The wrapper version asks a human, and on yes calls the wrapped function, otherwise returns without side effects. The author wants that check outside the tool body.

## Implications for askmeapi.com / ui121

This thread is the “before” picture for the category. AskMeAPI is the hosted form of the wrapper they did not want to keep maintaining, with the ask delivered somewhere other than stdout. ui121 matters once the confirmation is not a terminal yes/no: showing the email arguments and collecting an edit is the UI the wrapper never had. The date (2024) lets marketing say the pain predates the 2025–2026 framework features, without claiming those features do not exist now.
