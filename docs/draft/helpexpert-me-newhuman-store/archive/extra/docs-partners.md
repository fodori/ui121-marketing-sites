# RentAHuman docs: partner API

- **Source:** https://rentahuman.ai/docs/partners
- **Fetched:** 2026-09-23
- **Status:** ok
- **Collection:** sibling of https://rentahuman.ai/docs

## Summary

The partner API is a concierge layer for companies that already run an iMessage or SMS agent. The customer stays in the text thread. The partner’s agent POSTs a task with deadline, location, and budget. RentAHuman’s operations team sources a person from the marketplace. Quotes, questions, and status return as signed webhooks. The partner’s agent decides what to relay. RentAHuman does not message the end customer. When the work is priced, the webhook includes a short Stripe link the customer can pay without a RentAHuman account. The sequence they describe is request, ops, webhook, payment link, human does the work.

It is not self-serve. Access starts with an email to their support address, subject “Partner API,” describing the agent and expected volume. They then issue a key and a webhook. A self-serve booking page is described as coming later. Onboarded agents are pointed at a markdown guide at `/docs/partners/agent-guide.md`. That guide was not fetched; the extra-page cap was already full with the main docs siblings and foundational posts.

## Key facts

- Buyer surface: the partner’s own chat (iMessage, SMS, vertical agents).
- Fulfillment: human ops desk plus marketplace supply.
- Payment: Stripe link, no end-customer account.
- Access: manual onboarding, not an open signup.
- Further doc linked: `/docs/partners/agent-guide.md` (not archived).

## How it works

Structured request in, human-operated reply out, customer pays a link, a person performs a physical task. The partner owns the relationship and the last mile of language.

## Implications for helpexpert.me / newhuman.store

This is a white-label pattern: another agent product rents their humans without sending users to rentahuman.ai. A help network will be asked for the same embed (“my support bot needs a person”). The ops desk is the part that does not scale to real-time Q&A; it inserts a human dispatcher before the expert. If the deferred product wants partner distribution, automate the match and keep the webhook-and-payment-link idea. Do not require an email to alex@ to get the first key if the promise is self-serve agents.
