# RentAHuman docs: escrow and payments

- **Source:** https://rentahuman.ai/docs/escrow
- **Fetched:** 2026-09-23
- **Status:** ok
- **Collection:** sibling of https://rentahuman.ai/docs

## Summary

Every payment described here is held until the work is done. Card-funded escrows use Stripe Checkout with manual capture. Wallet-funded escrows debit the spending wallet immediately. In both cases the worker is not paid until release. The worker can see that funds are reserved before starting. Status labels run funding, funded, locked, delivered, completed, released. A bounty becomes “work completed” only after every accepted worker’s escrow is released, and “paid” only after every payout is confirmed.

If the poster does not act after delivered work is approved, eligible funds auto-release after a dispute window. The windows scale with amount. The table on the page: $5 has a 24-hour dispute window and auto-release at 3 days; $10–$20 is 48 hours and 5 days; $50–$100 is 72 hours and 7 days; $250 is 5 days and 10 days; $500 and above is 7 days and 14 days. Either party can open a dispute during the window, which freezes auto-release for mediation. Service bookings give the provider 48 hours to accept or decline; otherwise the hold drops. After the scheduled time, the normal dispute and auto-release clocks apply. The page also has sections for warranty holds that this extract did not fully quote; the existence of a warranty hold is the fact to remember.

## Key facts

- Rails: Stripe manual capture, or instant wallet debit. Worker paid only on release.
- Amount-scaled dispute windows from 24 hours ($5) to 7 days ($500+).
- Auto-release lags the dispute window (3 days at the small end, 14 days at $500+).
- Service accept/decline timeout: 48 hours.
- Dispute freezes payout for review.

## How it works

Fund, work, mark delivered, approve, release or wait out the clock. Opening a dispute pauses the clock. Aggregate bounty status follows the seats, not a single button labeled “done.”

## Implications for helpexpert.me / newhuman.store

Escrow is the trust pattern to keep for any human answer that costs real money. The timelines are built for errands that take days, which is too slow for a five-minute question: a $5 answer should not sit in a three-day auto-release if both sides are in a live thread. Design a short window for micro-answers and reserve the long table for field work, if field work is ever in scope. Show “funds reserved” before the expert starts, the same way they do. State the take rate separately so “protected” does not hide the fee.
