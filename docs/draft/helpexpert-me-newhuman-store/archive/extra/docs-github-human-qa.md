# RentAHuman docs: GitHub human QA

- **Source:** https://rentahuman.ai/docs/github-human-qa
- **Fetched:** 2026-09-23
- **Status:** ok
- **Collection:** sibling of https://rentahuman.ai/docs

## Summary

This guide puts a person into a pull-request loop. A labeled PR can start a one-time QA run against the preview deployment. The run uses one tester and a narrated screen-and-microphone video. GitHub keeps a comment with status, findings, reproduction steps, and links to the accepted video, plus a commit status that stays pending while the human works and ends success or failure. Retries for the same repository, PR, and commit share an idempotency key so a flaky workflow does not create a second charge.

Prerequisites: an API key stored as an Actions secret, a wallet balance of at least $3.54 (they break it down as $3.00 for the tester plus the 18% platform fee), a successful preview URL, and a repository variable that acts as a kill switch. Adding a `human-qa` label requests the run. The template is created through the QA templates API with a budget in integer cents. The tester is instructed to use the deployment as a real user.

## Key facts

- One tester, one video, one PR commit.
- Illustrated price: $3.00 worker + 18% fee = $3.54 wallet minimum.
- Kill switch: a repository variable, default described as enabled when set true.
- Idempotency key includes repo, PR number, and SHA.
- Surfaces: PR comment and commit status, not only an email.

## How it works

Label the PR, the workflow finds the preview URL, posts a one-time video template, a human records the journey, and the status checks update when the report closes. The key never sits in the repository file.

## Implications for helpexpert.me / newhuman.store

This is human judgment sold as a CI check, at a few dollars, with an 18% fee made explicit. It is the strongest evidence that RentAHuman is already leaving pure errands. A knowledge network that launches later will find “ask a human about this build” partly occupied. The gap that remains is interactive Q&A during the test, not a single video at the end. If helpexpert ever does product questions, a status-check style result (pass, fail, evidence link) is a better agent object than a chat log. The $3 price shows micro-payments are already in market for human attention.
