# YouTube: LangGraph “ask question” tool

- **Source:** https://www.youtube.com/watch?v=QS2NjzAQGUY
- **Fetched:** 2026-09-23
- **Status:** partial

## Summary

The page returned a spoken walkthrough, not an official transcript. This note paraphrases that narration and does not invent missing lines. The speaker, who introduces himself as Evani, is in a LangGraph advanced series. The lesson contrasts an earlier pattern with a more flexible one. Previously, a post-model hook paused the graph when the agent tried to call tools marked risky, and the user had to approve those calls. The new lesson argues that hardcoding the pause points fights the way a reasoning agent works. The agent should decide when it lacks a fact and ask.

The demo is a small financial agent with tools to look up a ticker, fetch a price, and place an order. A fully specified request (“buy 1,000 dollars of Tesla”) can complete without a question. A vague request (“buy some Tesla”) makes the model stop in prose and say it does not know the quantity. That is not a real interrupt: the graph has ended instead of waiting. The fix is another tool, described to the model as asking a human and waiting. The tool calls LangGraph’s interrupt with the question, then returns the person’s answer as a tool message so the agent continues. A checkpointer and a stable thread id are required so the resume hits the same run. In the narration, the tool asks how many shares to buy at a price around 435, the person says they want to invest at most 1,000, and the agent places an order for two shares with spend described as 871.

The speaker’s closing point is that the question is dynamic. The model chooses when to call the tool. A later lesson is teased about wrapping other functions in a similar loop. Sponsorship chatter at the start is irrelevant to the mechanism.

## Key facts

- Series framing from the narration: LangGraph advanced, tools, dynamic human-in-the-loop.
- Speaker name given in the narration: Evani.
- Prior pattern: post-model hook on risky tools. New pattern: an ask-question tool the model calls itself.
- Demo tools: symbol lookup, stock fetch, place order, plus ask question.
- Resume requires a checkpointer and the same thread configuration.
- Example figures spoken in the demo: Tesla price about 435, budget 1,000, two shares, spend about 871. These are tutorial numbers, not market data.

## How it works

The agent stays a normal tool-calling loop. The new tool’s description tells the model to use it when a required fact is missing, and to ask a specific question. Inside the tool, interrupt surfaces the question to the caller and receives the reply on resume. Returning that reply as the tool result lets the model plan the order. Side effects such as placing the order happen only after the answer is in context.

## Implications for ai2ui.uk / ui121

This is the DIY “ask a human” tool in miniature, stuck to one graph and one thread. ai2ui.uk is that tool’s implementation when the human is not in the notebook: a hosted question, a typed answer, resume by thread id. Marketing can contrast hardcoded approval hooks (safe but rigid) with the agent deciding when to ask (flexible, and easy to forget). The gateway should support both: policy-forced approvals and model-initiated questions. Status stays partial because this is a video page, not a verified transcript.
