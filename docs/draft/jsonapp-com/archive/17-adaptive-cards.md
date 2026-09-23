# Microsoft Learn — Adaptive Cards overview

- Title: Adaptive Cards overview
- Source URL: https://learn.microsoft.com/en-us/adaptive-cards/
- Fetched: 2026-09-23
- Status: ok

## Summary

Microsoft’s Adaptive Cards overview describes an open exchange format for UI snippets. Authors write JSON. A host app turns that JSON into native UI that picks up the host’s look. The same payload can feel like Skype in Skype and like Teams in Teams. Platforms listed: Android, iOS, JavaScript, ASP.NET, .NET WPF, Windows, and React Native. A banner on the page points authors who are building Copilot, Teams, or Outlook scenarios at a newer documentation hub, and names newer capabilities including responsive layout, icon, badge, carousel, and charts.

The jobs-to-be-done are integration, not full applications. Cards show up where the user already is: Teams (including conversational agents), Outlook actionable messages, and Windows Timeline. For the host, the promise is third-party content that still looks native, performs like native widgets, and cannot inject script. Interactivity is declarative. Authors get one schema, input controls, and shared tooling (a designer SDK that can be embedded). Templating separates data from layout so a template service can match data to a card. The page frames templating as a direction, and says a release date for that preview was not set in the text that was fetched.

Goals, in the page’s own list: portable across app, device, and UI framework; open libraries and schema; cheap to define and to consume; expressive for the long tail of content; purely declarative (no code allowed); styled by the host. Design principles: semantic values rather than pixel layout (FactSet and ImageSet are the examples); the author owns the content and the host owns the look; stay as simple as Markdown is for documents, and do not become a UI framework; when a feature is debatable, leave it out, because adding a property later is easier than living with a mistake.

This overview is a docs hub. Child notes saved from links on the page: the designer SDK and the templating overview (see archive/INDEX.md). Per-platform getting-started pages were not all saved; the extra-note cap was reserved for the pages that explain the contract rather than install steps.

## Key facts

- Format: JSON UI snippets exchanged between apps. Rendered to native UI per host.
- Hosts called out: Teams, Outlook actionable messages, Windows Timeline. Also a newer Copilot/Teams/Outlook doc hub.
- SDKs: Android, iOS, JavaScript, ASP.NET, WPF, UWP/Windows, React Native, plus a designer SDK.
- Safety model: declarative actions, no custom code, host controls style.
- Principles: semantic not pixel-perfect; author owns content, host owns look; simple like Markdown; omit doubtful features.
- Templating: data separate from layout; a template service is described as a preview.

## How it works

A card author produces a JSON object (or a template plus data). The host’s renderer maps element types onto its own controls and applies its theme. Actions are declared in the card, so the host decides what a submit or an open-url is allowed to do. Because the schema is shared, one card definition lights up in every host that implements that version. Unknown or host-specific richness stays inside the host’s configuration of the designer and renderer.

## Implications for jsonapp.com / ui121

Adaptive Cards are the enterprise proof that JSON UI is normal, and the clearest warning about scope. Microsoft aimed at cards, not apps, on purpose: expressive enough, not a framework. jsonapp.com’s "full application" claim is the step Adaptive Cards refused. ui121 can sit in between: richer than a card (pages, validation, task submit) and stricter than an open-ended app language.

Steal the wording that already tests well: authored in JSON, rendered native, host owns the look, no code in the payload. Steal the governance line for buyers: third-party or AI-written UI is safe because it cannot script the host. The Windows widgets note (source 18) shows the same JSON inside the OS.

> "Adaptive Cards are platform-agnostic snippets of UI, authored in JSON, that apps and services can openly exchange."
