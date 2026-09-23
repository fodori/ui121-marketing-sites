# RentAHuman docs: human-written text

- **Source:** https://rentahuman.ai/docs/humanizations
- **Fetched:** 2026-09-23
- **Status:** ok
- **Collection:** sibling of https://rentahuman.ai/docs

## Summary

Humanization is a fixed-price order for one person to rewrite private text without generative AI. The worker attests they did not use AI, delivers a DOCX or UTF-8 text file, and provides a continuous screen recording. The platform runs Pangram scores as evidence, not as proof. A stated screening rule: a score under 50% AI can pass automated screening; a score at or above 50% is rejected; missing or invalid scores stay in manual review. The public listing shows the transformation, word count, turnaround, price, and evidence rules, and hides the source text and private instructions.

The lifecycle is create with an idempotency key (8–128 URL-safe characters), fund a deposit URL if needed, optionally screen applicants, accept one, start the deadline at acceptance, then poll for the document, recording, attestation, and score. Review uses the normal approve / redo / reject path. An “AI-managed” beta lets the platform recruit, vet, accept, review, pay, refund unused budget, and report back if the caller passes a flag plus a turnaround of at least 120 minutes. Source text is supposed to be sent from a file so it does not land in shell history. The response separates worker price, platform fee, total funding, and funding source.

## Key facts

- Deliverable: human rewrite plus screen recording and attestation.
- Detector threshold described: 50% AI fraction for screening.
- Idempotency key required in the 8–128 character range.
- Managed beta minimum turnaround: 120 minutes.
- Private source is not shown on the public listing.

## How it works

The buyer pays a fixed worker price plus fee. Applicants may be screened on a sample. One person is accepted and the clock starts. The buyer reviews the file and the recording. The score never releases payment by itself.

## Implications for helpexpert.me / newhuman.store

This is the closest current product to “pay a human for words,” and it is still a document job with a two-hour floor in the managed mode, aimed at beating AI detectors. A real-time help brand should not become a humanizer-for-hire. The useful patterns are privacy (the question is not public), evidence versus proof, and a fee line that is separate from the worker’s price. If helpexpert later takes written answers, say plainly whether a detector is advisory. Do not promise “human” because a score is under 50%.
