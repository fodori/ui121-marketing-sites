# Guide to Gemini Enterprise and A2UI integration — Google Cloud Blog

- Source: https://cloud.google.com/blog/topics/developers-practitioners/guide-to-gemini-enterprise-and-a2ui-integration
- Fetched: 2026-09-23
- Status: partial

## Summary

The Cloud Blog URL timed out on a direct fetch. The note below is reconstructed from search snippets of that same article (dated 29 May 2026 in the indexed copy) plus the official Gemini Enterprise A2UI docs the article points at. It is not a full read of the post. Treat numbers and steps as directional until the page is opened in a browser.

The indexed article walks through an A2UI-enabled agent inside Gemini Enterprise so the agent renders interactive UI natively in the enterprise chat, and optionally in a custom frontend. The reference is a restaurant-finder agent built with the Agent Development Kit, A2A, and Gemini, with source on GitHub and a short demo video. A2UI is described as an open protocol introduced by Google and co-developed with the Flutter team and Gemini Enterprise product teams. Instead of text or HTML, the agent returns JSON: a tree of components such as Card, Text, Button, ChoicePicker, and Image, plus a separate data model for the values.

Gemini Enterprise ships a built-in renderer, so the integration is: build an A2A agent that emits A2UI; register it. The turn, as indexed: the user types in the GE chat; GE calls the agent’s A2A endpoint and sends GE’s catalog (the components GE knows how to draw); the agent either emits A2UI JSON (for example a ChoicePicker of restaurants) or falls back to text, and both can appear in one response; GE validates the JSON against the catalog and paints it in GE’s own design language; when the user selects options or a date, GE sends that interaction back as JSON for the next turn. The agent then sees structured input rather than a sentence.

Related docs confirm registration: an administrator registers an A2A agent whose agent card declares the A2UI extension and supported catalog IDs. Standard A2UI components render with GE styling. A Cloud Run tutorial shows an agent card advertising A2UI v0.9 and a Gemini Enterprise composite catalog. A component gallery documents Material-styled pieces (MaterialCard, MaterialText, MaterialButton, MaterialSelect, and others) with accessibility fields such as aria labels.

## Key facts

- Indexed date: 29 May 2026. Direct fetch timed out on 2026-09-23.
- Payload: JSON component tree plus a separate data model, not HTML.
- Components named in the indexed lede: Card, Text, Button, ChoicePicker, Image.
- Transport in the guide: A2A into Gemini Enterprise, which has its own renderer and catalog.
- Reference sample: ADK restaurant finder.
- Official companion docs: Gemini Enterprise “register and manage an A2UI agent,” component gallery, Cloud Run host tutorial.

## How it works

The host advertises a catalog. The agent may only describe components from that catalog. The host validates and renders, so the visual language stays Gemini Enterprise’s. User actions are serialised back as structured context. Text remains available when a widget is the wrong answer. That is the production version of “pre-built blocks,” operated by Google’s enterprise chat rather than by an open-source demo shell.

## Implications for generatedui / ui121

Gemini Enterprise is the existence proof that a catalog renderer belongs in a business chat, not only in a developer sample. ui121’s pitch to the same buyer: your catalog, your brand, your blocks, with MCP tools behind them, including hosts that are not Gemini. ChoicePicker and approval-style controls are the demo to copy. Do not claim parity with GE’s Material catalog; claim the same contract (JSON in, native widgets out) under the customer’s design system. Because this source was only partly fetched, do not lift detailed setup commands from secondary indexes into customer-facing copy without re-reading the post.
