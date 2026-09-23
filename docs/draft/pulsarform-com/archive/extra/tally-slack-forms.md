# Tally forms into Slack

Source: https://tally.so/help/best-form-builder-for-slack
Fetched: 2026-09-23
Status: ok
Parent collection: https://tally.so/help/compare

## Summary

Tally argues that Slack is where work is discussed and where structured requests go to die. Feature asks, bugs, access requests, feedback, and approvals turn into forgotten threads and DMs with missing fields. A form collects a complete payload and posts it to a channel, so the team acts on a message instead of interviewing the requester again. No bot to host, no ticketing suite. The differentiator versus other builders is that the form features and the Slack connection are not paywalled. The page does not describe threading those Slack messages back to the respondent, assigning an owner, or closing the loop inside Slack.

## Key facts

- Target jobs: internal requests, feedback, bugs, access, approvals.
- Delivery: a Slack channel message per submission.
- Claim: no extra bot and no heavy desk tool.
- Sold against builders that gate Slack or logic on a paid plan.

## How it works

Share a link, the person fills the form, Slack receives a structured post. Follow-up, if any, is another Slack conversation that can drift away from the original fields. The form’s job ended at submit.

## Implications for pulsarform.com / ui121

This is the notification model again, with a good diagnosis: chat is a bad system of record. Pulsarform should agree, then avoid becoming another ping. The inbox can notify Slack and remain the place where status (pending, handled, blocked) actually lives. Tally names that gap (“no single place to see what is pending”) and does not fill it.

> “Slack was built for conversations, not for collecting information.” — Tally, https://tally.so/help/best-form-builder-for-slack
