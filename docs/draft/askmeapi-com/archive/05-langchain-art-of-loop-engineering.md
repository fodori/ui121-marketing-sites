# LangChain blog — The Art of Loop Engineering

Source: https://www.langchain.com/blog/the-art-of-loop-engineering
Fetched: 2026-09-23
Status: ok

## Summary

Sydney Runkle’s 16 June 2026 essay argues that a good model is not enough. Reliable agents need a harness of stacked loops. The innermost loop is the familiar one: a model calls tools until the task is done (`create_agent`). Around it, a verification loop grades the output against a rubric and sends failures back (`RubricMiddleware` or an `after_agent` hook). An event-driven loop starts the agent from cron, webhooks, or a Slack channel instead of a person typing. The outer hill-climbing loop reads production traces and rewrites prompts, tools, or graders (`LangSmith Engine`). The running example is an internal docs agent triggered from a `#docs-plz` Slack channel, graded on links, CI, and diff scope.

Human oversight is placed at every level rather than treated as a separate product. In the agent loop, a person is required before sensitive tool calls such as payments or database writes. In the verification loop, a person can be the grader when taste matters and an automated check cannot tell that the framing is wrong. In the application loop, a person approves outputs before they reach the end user. In the hill-climbing loop, harness changes pass through human review before they ship. The essay says all of LangChain’s open-source frameworks treat “human in the loop” as a first-class primitive.

The strategic claim is that loops 1 and 2 are already understood, and the compounding value is in loops 3 and 4: agents embedded in the surrounding system, improving against the team’s own criteria. Verification adds latency and cost and is worth it when quality beats speed. A short attribution to Satya frames companies that combine human judgment with token spend as hard to copy.

## Key facts

- Published 16 June 2026 by Sydney Runkle.
- Four loops: agent, verification, event-driven, hill-climbing.
- Named primitives: `create_agent`, `RubricMiddleware`, LangSmith Deployment cron/webhooks, Fleet channels, LangSmith Engine.
- Human touch points are listed explicitly at all four levels, with sensitive actions called out as live review rather than prompt text.
- Credits Swyx’s “loopcraft” idea and names Steipete, Boris, and Andrej as having reached a similar conclusion.

## How it works

The stack is outside-in. An event starts a run. The agent loop does the work. A grader may reject it and retry. Traces from many runs feed an analysis agent that proposes harness changes. People interrupt sensitive actions, grade what rubrics miss, approve what users will see, and sign off on harness edits before deployment.

## Implications for askmeapi.com / ui121

The essay is a map of where an ask-a-human API gets called: before a tool, as a grader, before an output ships, and before a prompt change deploys. AskMeAPI should not be only an approve/deny gate. The verification and application loops need structured review of a draft, which is a form. ui121 can render those review tasks (rubric fields, edited output, approve-to-ship) while the agent framework keeps the loop.
