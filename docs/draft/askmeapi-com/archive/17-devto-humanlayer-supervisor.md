# DEV.to — introducing humanlayer as a human supervisor

Source: https://dev.to/mysterious_xuanwu_5a00815/give-your-ai-agents-a-human-supervisor-introducing-humanlayer-3adi
Fetched: 2026-09-23
Status: ok

## Summary

A 4 September 2025 DEV.to post by Mysterious Xuanwu, noted as originally published at yourblog.com, pitches humanlayer as an open-source JavaScript SDK that puts a human supervisor in front of high-risk agent tools. The fear it names is an agent emailing the whole company or deleting production files. The proposed shift is from complete trust to “verifiable trust”: mark tools such as `send_email` or `delete_file` as requiring approval, intercept the call, send the proposed action to a person, and continue only after they approve.

The code sample constructs `HumanLayer` and an `Assistant` from `humanlayer-sdk`, then runs a Chinese prompt asking the agent to email a weekly report to the boss, with `send_email` flagged `human_approval: true`. Install is `npm install humanlayer-sdk`. The post says the library works with major models and frameworks, points at https://github.com/humanlayer/humanlayer, and ends by asking readers which actions agents should never take alone.

The piece is a developer-blog restatement of the approval-as-a-simple-API pitch. It does not document channels, schemas, timeouts, or the later IDE pivot. The import names (`humanlayer-sdk`, `Assistant`, `human_approval`) do not match the Python decorator API on PyPI, so a marketer should treat the snippet as illustrative rather than as the canonical SDK.

## Key facts

- Published 4 September 2025 on DEV.to. Author display name: Mysterious Xuanwu.
- Frames the product as an open-source JavaScript SDK and a “brake pedal.”
- Dangerous-tool examples: `send_email`, `delete_file`.
- Install command shown: `npm install humanlayer-sdk`.
- GitHub link: humanlayer/humanlayer.
- Sample API shape (`Assistant`, `human_approval: true`) differs from the Python `@require_approval` docs.

## How it works

As the post tells it: initialize the SDK with an API key, mark selected tool functions as needing a person, run the agent. The SDK intercepts those calls, describes the proposed action to an approver, and only then runs the function.

## Implications for askmeapi.com / ui121

This is the word-of-mouth version of the category: one scary story, one flag on a tool, one approve click. AskMeAPI’s landing page can use that same brevity and then go further than the post does — typed answers, more than one approver, a page instead of an implied button. ui121 is how “the content is as follows, do you approve?” becomes a readable preview with editable fields, which the post asserts but does not design.
