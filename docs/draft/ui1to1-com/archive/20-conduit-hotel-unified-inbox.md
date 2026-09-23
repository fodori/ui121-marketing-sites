# Conduit — Unified inbox for hotels

- Source: https://www.conduit.ai/blog/unified-inbox-for-hotels-why-multi-channel-guest-messaging-matters
- Fetched: 2026-09-23
- Status: ok

## Summary

Mathias at Conduit (14 January 2026, hospitality) uses a single guest to show fragmented messaging. An early check-in arrives on Airbnb, parking arrives by email an hour later, and a dietary note arrives that evening by phone. Three channels, one guest, no shared thread. Staff reconstruct context, messages get missed, and the guest repeats themselves. The article’s claim is that a hotel unified inbox is the base for consistent, personal service, not a convenience feature.

Guests do not think in channels. A family books on an online travel agency and then texts. A business traveller starts in email and switches to WhatsApp en route. Urgent or complex requests still become phone calls. Forcing one channel adds friction. Without consolidation, night-time WhatsApp sits unread, voicemail lives in another system, and an agency follow-up is buried. Personalisation collapses to using the guest’s name in a template because the real story is split.

Benefits he lists: faster replies from one interface, including calls; a history that includes previous stays; handoffs where the next staffer sees the whole thread; manager visibility of speed and bottlenecks; and a foundation for AI, which needs the full context or it answers from a fragment. Buying criteria are specific to hospitality: email, SMS, and WhatsApp at minimum; native Airbnb, VRBO, and Booking.com connections rather than email forwarding; voice in the same inbox, with transcripts beside messages; a guest profile of preferences and notes; live two-way sync with the property system and CRM; AI for common questions with escalation; and a mobile app for staff on property.

Implementation is an audit of every path including DMs and web chat, a platform matched to property count and volume, migration that keeps history, and a role shift. With AI in the inbox, staff move from answering everything to configuring workflows, checking quality, and taking the cases that need judgment — he calls that a conversation-engineer role, conductors rather than performers. Automation should start with simple replies and expand under review.

Scenarios: chat, then email, then a late-checkout call appear as one thread; a returning guest’s room and restaurant preference are visible on an Airbnb message; an 11 p.m. maintenance call is handled by an AI voice agent that creates a task, and the morning team sees the transcript. The product close is Conduit’s own inbox across those channels plus PMS connections.

## Key facts

- Author: Mathias; 14 January 2026; Conduit blog.
- Channels: email, SMS, WhatsApp, voice, Airbnb, VRBO, Booking.com, plus social and web chat in the audit list.
- Direct connections preferred over forwarding or manual import, including PMS and OTA.
- Voice is in scope: inbound and outbound calls, transcripts, and summaries in the same thread.
- AI pattern: routine answers and after-hours voice, escalation to humans, staff as supervisors.
- No independent benchmark statistics; the evidence is scenarios and product criteria.

## How it works

Every inbound message and call attaches to one guest thread and profile. Reservation data arrives from the property system in real time, not as a nightly file. Staff or an AI agent replies from that thread. Assignment and history make handoff possible. AI is only as good as the thread it can see, so unification comes before automation. Humans keep complex and quality-sensitive cases. Mobile exists because the team is not at a desk.

## Implications for ui1to1.com / ui121

Hospitality is a vivid one-to-one story: one guest, one history, many channels. ui1to1.com can generalise it. The guest should not repeat themselves, and neither should an employee, a reviewer, or a customer in any other workflow. The interface that holds the history is also the interface where someone acts — late checkout, maintenance task, approval — which is human-in-the-loop, not a notification.

Conduit still describes one shared workspace. ui121’s extra claim is that the night agent, the morning manager, and the guest-facing moment can each be a tailored live canvas on the same facts. JSONUI is how that canvas is generated per role without a separate hotel app per channel. Use the three-channel anecdote as a pattern. Do not borrow unpublished conversion numbers; this page does not provide them.
