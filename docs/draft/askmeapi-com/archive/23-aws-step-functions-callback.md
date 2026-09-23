# AWS Step Functions — service integration patterns and waitForTaskToken

Source: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html
Fetched: 2026-09-23
Status: ok

## Summary

Step Functions offers three ways for a task state to call another AWS service. Request Response moves on as soon as the HTTP API returns, and it is the only pattern Express Workflows support. Run a Job (`.sync`) waits until a batch or container job finishes; Step Functions polls and, for same-account calls, also listens to EventBridge. Wait for Callback (`.waitForTaskToken`) pauses until some external system calls `SendTaskSuccess` or `SendTaskFailure` with the token and a payload. The page says this is how you wait on a person, a third party, or a legacy system. A callback task can sit until the execution hits the one-year service quota. Tokens must be returned by a principal in the same AWS account. If the task times out, a new token is generated. HeartbeatSeconds fails the state if no success, failure, or heartbeat arrives in time; the sample uses 600 seconds and a `States.Timeout` error.

The token is not an API parameter you invent. With `.waitForTaskToken` on the resource ARN, the state reads `$$.Task.Token` from the context object and passes it in the outbound call. The SQS example publishes a message whose body includes that token; a worker later completes the task. The same pattern is supported on a subset of optimized integrations, including Lambda, SNS, SQS, API Gateway, EventBridge, ECS/Fargate, EKS, and Bedrock (Bedrock has both `.sync` and callback; many analytics services have `.sync` only). AWS SDK integrations support callback on Standard workflows across “over two hundred services,” and `.sync` is not supported there. Aborting a `.sync` task tries to cancel the remote job and can still leave charges if IAM or an outage blocks the cancel. Cross-account `.sync` is poll-only.

The context object also exposes execution id, input, start time, state name, retry count, and state machine id. Path parameters use a `.$` suffix.

## Key facts

- Three patterns: Request Response, `.sync`, `.waitForTaskToken`.
- Express workflows: Request Response only.
- Callback completion APIs: `SendTaskSuccess`, `SendTaskFailure`, `SendTaskHeartbeat`.
- Same-account principals only for tokens.
- Upper bound cited: one-year execution quota. Heartbeat example: 600 seconds.
- SQS is the worked example for handing the token to an external system.
- `.sync` and callback need extra IAM. `.sync` uses polling quota; same-account also uses EventBridge.

## How it works

1. Task resource ARN ends in `.waitForTaskToken`.
2. Parameters include `TaskToken.$: $$.Task.Token` inside an SQS (or SNS, Lambda, HTTPS) message.
3. The state machine pauses.
4. An external worker does the human or third-party step.
5. It calls SendTaskSuccess with the token and a result payload, or SendTaskFailure, or SendTaskHeartbeat to extend the wait.
6. The payload becomes the task output and the state machine continues.

## Implications for askmeapi.com / ui121

This is the AWS-native “pause the server until a structured reply comes back.” AskMeAPI can document a Step Functions recipe: the token rides along with the question, the human answers on a page, and the API calls SendTaskSuccess with a JSON body. ui121 is that page, and the answer schema is the task output, so the next state does not parse free text. Heartbeat and same-account limits are integration constraints to mention, not to hide. Teams on Express workflows cannot use this pattern, which is a reason a standalone ask API still matters.
