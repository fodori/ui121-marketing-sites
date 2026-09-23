# Adaptive Cards designer SDK

- Title: Adaptive Cards Designer SDK
- Source URL: https://learn.microsoft.com/en-us/adaptive-cards/sdk/designer
- Fetched: 2026-09-23
- Status: ok
- Parent: source 17

## Summary

The designer SDK page is short. It says the Adaptive Card Designer is an interactive authoring experience, tryable at the public designer site, and that the SDK exists so you can embed that experience in your own product. Install is `npm install adaptivecards-designer`, or a script tag from unpkg. Full documentation is deferred to the npm page. The Learn article does not describe the editor panes; the Windows widget article (source 18) is the one that explains card payload, sample data, and host data.

## Key facts

- Public designer: https://adaptivecards.microsoft.com/designer
- Package: `adaptivecards-designer` on npm, also published on unpkg.
- Purpose: embed the designer, not only use the hosted one.
- This page does not document the JSON schema. It is an integration pointer.

## How it works

Host apps load the designer package and host its UI. Authors edit a card in that UI instead of being sent to Microsoft’s website. The page does not specify the configuration API; the overview said a configuration API exists so the designer can match a host’s container and capabilities.

## Implications for jsonapp.com / ui121

A JSON UI product needs an embeddable editor, not only a renderer. Adaptive Cards split "try it on our site" from "put the designer in your toolchain." ui121’s form editor is that second path. Marketing can say the format is editable in a tool that speaks the same JSON the runtime renders.
