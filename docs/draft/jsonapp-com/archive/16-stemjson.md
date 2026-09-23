# StemJSON — mobile apps that build themselves

- Title: StemJSON
- Source URL: https://stemjson.com/
- Fetched: 2026-09-23
- Status: ok

## Summary

StemJSON, by Vasyl Krychun, presents a declarative JSON language for native apps. The homepage line is that descriptions become native apps, written by an AI, pushed by a backend, or shaped by end users. Traits it highlights: declarative, AI-readable, native, and open. The format is meant to be dropped into AI tools, prototyping environments, IDE extensions, or next to hand-written code.

The sharpest product is "Stem AI Area": a sandbox inside an existing app where a user describes a feature in their own words. An LLM emits StemJSON, the runtime validates it, and a native module appears on device. The page says this needs no new binary and no backend round trip for the UI. It is marked patent pending. The pipeline on the page is user prompt, LLM, StemJSON, native module.

Three other modes: server-driven UI, where the backend pushes a full module (state, actions, expressions, navigation, validation) to the device; prototyping, where a prompt or a Figma export becomes a runnable native prototype with no glue code; and mixed apps, where settings, onboarding, and feeds are StemJSON and the rest stays hand-written. The site points at a single specification covering components, actions, expressions, state, navigation, and conformance rules enforced by both runtimes. SDKs are Swift and Kotlin for rendering inside an app you already ship. A free tier is advertised with no time limit. Example apps are open source: clone one and drop in a `.stem` file. Spec issues go to GitHub.

The homepage is a product page with those outbound doors (spec, SDKs, examples). It is not a blog index, so those links were not expanded as a collection.

## Key facts

- Creator named on the page: Vasyl Krychun.
- Positioning: open declarative JSON for AI-generated, server-driven, end-user-customizable native apps.
- Stem AI Area: on-device LLM to StemJSON to native UI, inside a sandbox. Patent pending.
- Module contents claimed: state, actions, expressions, navigation, validation.
- Runtimes: iOS (Swift) and Android (Kotlin). File extension mentioned: `.stem`.
- Free tier, no time limit, as stated on the page.
- Conformance: both runtimes enforce the same rules.

## How it works

Someone or something writes a StemJSON module. A native SDK inside a host app validates it and renders it with platform UI. In the AI area the model runs in the sandbox the host defined, so the generated UI cannot escape that area. In the server-driven mode the module arrives from the backend like any other SDUI payload, but the page stresses that logic (expressions, validation, navigation) travels with the layout. Hand-written screens stay in the host binary.

## Implications for jsonapp.com / ui121

This is the closest competitive sentence to an AI-native JSON app runtime. jsonapp.com (the 2010s-style viewer) does not say AI. StemJSON does, and it says the user can ask for a feature and see a native module without a release. ui121 should not ignore that claim. The differentiation available from this page alone: StemJSON is mobile SDKs you embed, with a patent pending on the in-app AI area; ui121 is a hosted task product whose UI definition is already JSON. A fair line is that both bet on "the model writes the UI language, a runtime renders it, a sandbox or schema bounds it."

Do not copy "patent pending" into ui121 claims. Do copy the three doors — AI author, server push, user customization — as the outline of a jsonapp.com page, and be explicit about validation before render.

> "StemJSON is a declarative language based on JSON, well-suited for AI to generate comprehensive, performant native app UI and logic."
