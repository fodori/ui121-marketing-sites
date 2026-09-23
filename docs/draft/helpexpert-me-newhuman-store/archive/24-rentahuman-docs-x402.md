# RentAHuman x402 docs

- **Source:** https://rentahuman.ai/docs/x402
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

This guide explains how an agent pays RentAHuman in USDC on Base using the x402 protocol, without a card or a checkout page. Two routes matter. A deposit endpoint tops up an existing wallet and requires an API key. A signup endpoint creates a brand-new account and does not: the payment itself is the authentication. Signup is a fixed $10. The docs say that $10 is not a fee; the whole amount becomes spendable balance. After the wallet is funded, bounties, hires, and escrow behave as they do for card deposits.

The protocol details they publish: x402 version 2, “exact” scheme, USDC on Base (chain id in EIP-155 form, 8453). The agent POSTs the amount, receives HTTP 402 with payment requirements, signs a gasless transfer authorization (EIP-3009, so the wallet needs USDC and not ETH), and retries. Credit is tied to the transaction hash so a replay cannot double-credit. The client SDK’s default spend cap is $1; they tell integrators to raise it on purpose. Deposit amounts are integer cents from $1 to $10,000. A plain transfer to the payment address, outside the signed challenge, is not auto-credited.

Response codes they document include 200 when credited, 402 when the challenge is unpaid or settlement fails, 202 when the outcome is ambiguous (do not pay again; it will be credited or refunded after review), 409 for a duplicate authorization, 400 for a bad amount, 401 for a bad key, and 429 when rate limited. Signup can include an optional recovery email that is not a login. The feature is early access; a 404 on a valid key means the account is not enrolled. The npm tools `x402_signup` and `x402_fund_wallet` perform the handshake locally if a private key is set, and the key is not sent to the server. Card deposits remain available.

## Key facts

- Networks: USDC on Base only, x402 v2, exact scheme.
- Signup: $10 prepaid balance, one-time API key, no captcha.
- Deposits: $1–$10,000 per call, exactly-once by transaction hash.
- Gasless for the payer via EIP-3009.
- Ambiguous 202 must not be retried with a new payment.
- Early access; MCP tools wrap the same flow.

## How it works

No account: call signup, pay the 402, store the key. Has an account: call deposit with the key, pay the 402, spend the wallet on escrow like any other balance. Refunds of unused balance follow their wallet policy; crypto deposits themselves are final (no card-style chargeback).

## Implications for helpexpert.me / newhuman.store

This is the concrete “server pays without a human” design to study before building. A per-question product can copy the shape — 402 challenge, stablecoin, prepaid balance, idempotent credit — and change the thing the balance buys from a bounty seat to an answer. The $10 signup is a clever anti-bot (payment replaces captcha) and a poor price for a single question; keep signup and per-answer price separate. Publish the same failure rules they did (especially “do not pay twice on an ambiguous response”) or agents will double-charge users. The product is still research: do not turn this note into an implementation.
