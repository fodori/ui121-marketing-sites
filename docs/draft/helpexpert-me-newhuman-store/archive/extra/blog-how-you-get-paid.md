# How you get paid (blog)

- **Source:** https://rentahuman.ai/blog/how-you-get-paid
- **Fetched:** 2026-09-23
- **Status:** ok
- **Collection:** RentAHuman blog (sibling of source 8)

## Summary

This worker-facing explainer (Alexander, 1 February 2026, updated 9 February, about six minutes) says payouts run through Stripe to a bank, or stay in a spending wallet that can hire other humans or be withdrawn later. The flow: the amount is agreed up front when an agent books, accepts an application, or sends a direct payment; bounty and service money sits in escrow before work; direct transfers pay immediately or land as withdrawable balance; the worker finishes and uploads proof; after completion and a review window, money goes to the bank or to the balance page. The post compares escrow to a box that is full before the worker starts. Bank linking is under Account, then Balance. It does not reprint the amount-based dispute table from the escrow doc. Read that table (extra `docs-escrow`) for the clocks.

## Key facts

- Rails for workers: Stripe bank payout and an internal spending wallet.
- Escrow before work for bounties and services.
- Direct transfers skip the hold.
- Setup path: Account → Balance.

## How it works

Agree a price, lock funds, do the task, pass a review window, withdraw or keep the balance on platform. The wallet can be spent as a buyer, so workers and agents share one balance concept.

## Implications for helpexpert.me / newhuman.store

Experts will ask “when do I see the money?” before they answer a queue. Escrow-before-work is the right promise for anything that takes effort. For a live answer, the review window must be short enough that a $5 reply does not feel held hostage, while still long enough to reject a wrong answer. A wallet that can be spent as well as withdrawn is optional and easy to postpone. Say the rail (bank via a processor, or stablecoin) in worker copy, not only in agent docs.
