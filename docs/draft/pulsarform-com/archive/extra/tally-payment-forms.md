# Tally payment forms

Source: https://tally.so/help/payment-forms
Fetched: 2026-09-23
Status: ok
Parent collection: https://tally.so/help/compare

## Summary

Tally’s payment guide is a Stripe Connect tutorial. You type an amount, or bind the price to a calculated variable, pick a currency, and connect a Stripe account. Respondents see a card form inside the published form. Stripe’s own processing and conversion fees apply. Tally says it adds none. Card numbers are not stored in Tally. The payment also appears in Stripe, with the form title in the description. Receipts go to the email the respondent gives. Invoices are not generated automatically. Stripe’s test cards were not supported yet. The page invites an upvote for that. Changing a hardcoded price means deleting the block. A calculated field avoids reconnecting Stripe when the number changes. If the person moves back a page after paying, the status shows as already paid. A signed agreement can be combined with the charge, but the signing detail lives on another help page.

## Key facts

- Stripe only, via Stripe Connect.
- No Tally surcharge on top of Stripe fees, as stated here.
- Card data stays at Stripe, not in Tally.
- Receipt email is automatic. Invoices are not.
- Price can be a calculated field that updates live.
- Stripe test cards not available at the time of the page.
- Payment status survives a back-navigation.

## How it works

The form calculates or displays a price, the respondent pays, Stripe charges, both dashboards show the payment, and a receipt email leaves. The form submission and the charge are one moment. There is no described dispute thread or failed-payment inbox inside Tally.

## Implications for pulsarform.com / ui121

Payments are expected inside modern forms. The live-inbox angle is what happens when the charge fails, the receipt is wrong, or the buyer replies. That follow-up should be the same thread as the submission, not a hunt through Stripe. Calculated prices are the mechanism to mention, not the Stripe click-path.

> “Tally does not store credit card details.” — Tally payment help, https://tally.so/help/payment-forms
