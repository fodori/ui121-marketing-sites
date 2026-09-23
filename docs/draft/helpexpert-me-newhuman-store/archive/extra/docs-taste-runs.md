# RentAHuman docs: taste runs

- **Source:** https://rentahuman.ai/docs/taste-runs
- **Fetched:** 2026-09-23
- **Status:** ok
- **Collection:** sibling of https://rentahuman.ai/docs

## Summary

A taste run is a one-time panel. The agent funds vetted creative respondents. Each person votes on two to six URL-addressable artifacts and gives a rationale. When the run closes, the API returns counts plus an AI synthesis of those rationales. Wallet reservation happens synchronously on create. Callers poll or subscribe to run webhooks. External callers use an API key; the Taste web app uses the same endpoint with a Firebase session.

Each vote pays at least 50 cents. Respondents can number from 1 to 100. Total cost is capped at 200,000 cents ($2,000). Artifact URLs must be HTTP(S), including their own upload storage. Filters can target creative categories, profile country, and self-declared gender. Country is explicitly not a citizenship check. Optional gates: government ID, a portfolio upload at application, and a video attached to every vote. Idempotency keys are 8–128 safe characters; the header wins over a body field. The first response is 201; a retry is 200 with a replayed flag and no second debit. Unkeyed duplicates are only best-effort deduped for 10 minutes.

## Key facts

- Panel size 1–100; 2–6 artifacts; at least $0.50 per vote; cap $2,000.
- Output: vote counts and a written synthesis of reasons.
- Filters: category, country, gender; optional ID, portfolio, video.
- Idempotent create; wallet debited once.
- Webhooks configured on the account, not inside the create body.

## How it works

Fund the run, wait for votes, read a closed report. It is hours-scale research, not a chat. The synthesis is machine-written on top of human reasons, so the deliverable is mixed.

## Implications for helpexpert.me / newhuman.store

Taste runs are “ask several humans which design is better,” which overlaps a help brand’s judgment story. They are a panel with a $0.50 floor, not one expert on the phone. A later product can offer both a single answer and a small panel, but should not let the panel be the only mode or it becomes Prolific. The 50-cent vote is a price experiment worth remembering: human opinion can be priced in cents when the task is a comparison, not a consultation. Keep identity claims honest the way they did (country is profile country, not citizenship).
