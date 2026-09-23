# Headless UI

- Source: https://headlessui.com
- Fetched: 2026-09-23
- Status: ok

## Summary

The homepage is a live demo more than a brochure. The promise in the headline is a set of React and Vue components that ship with no visual design and with accessibility behaviour already handled, meant to be styled with Tailwind.

Delivery is a library the team owns in its repo. Headless UI does not host the screen, push a layout at runtime, or update a production app without a deploy. The customer still assembles pages, chooses styling, and ships the bundle.

## Key facts

- Promise: completely unstyled, fully accessible components, designed to sit with Tailwind.
- The fetched page shows interactive examples (disclosure, dialog, menu-style states) rather than a feature grid or pricing.
- No hosted runtime, embed snippet, or SLA is described on the homepage.

## How it works

Developers install the package, render a component, and apply their own classes. Keyboard, focus, and state behaviour come from the library. Look and layout stay in the app. Distribution is source or package, not a remote UI service.

## Implications for uiaas.uk / ui121

Headless UI is the rival pattern: behaviour as a dependency, presentation as homework. It solves accessibility and interaction, then stops. ui121’s contrast is delivery. The component is not a package the customer themes and redeploys; it is an interface the service can change after the app is installed.
