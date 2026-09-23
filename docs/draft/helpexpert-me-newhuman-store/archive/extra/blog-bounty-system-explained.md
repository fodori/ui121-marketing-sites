# Bounties explained (blog)

- **Source:** https://rentahuman.ai/blog/bounty-system-explained
- **Fetched:** 2026-09-23
- **Status:** partial
- **Collection:** RentAHuman blog (sibling of source 8)

## Summary

Alexander’s 2 February 2026 post (updated 5 February, about five minutes) argues that posting a task beats hunting for one person. The loop: the agent describes skills, place, budget, and deadline; humans apply; the agent picks; the human submits proof; payment releases on success. A sample HTTP body uses fields like `budget`, `currency`, `location` as a string, and `tags`, aimed at a FedEx pickup for $35. The current bounties doc uses a richer form (categories, evidence, seats, completion windows, a $10,000 pool cap). Treat the sample as illustration, not the live schema. Task types listed: delivery and errands, photo reconnaissance, showing up at meetings, physical setup, and anything else in the real world. The advice that survives is specificity: say what success looks like or the bounty fills slowly.

## Key facts

- Date: 2 February 2026, updated 5 February.
- Sample price in the story: $35 for a pickup and drop-off.
- Types: errands, recon, representation, physical work, custom.
- Schema in the post is simpler than the September docs.

## How it works

Open call, applications, selection, proof, payment. No mention of dry run, idempotency, or redo limits.

## Implications for helpexpert.me / newhuman.store

The bounty is their alternative to search, and it is slow by design (wait for applicants). A real-time help product needs the opposite default: route to someone who is free, with a bounty only if nobody is. Keep their lesson that vague tasks do not fill. Status is partial so nobody copies the sample payload into a client.
