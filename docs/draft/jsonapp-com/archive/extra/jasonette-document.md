# Jasonette document model

- Title: Jasonette view document
- Source URL: https://jasonelle-archive.github.io/docs/legacy/document/
- Fetched: 2026-09-23
- Status: ok
- Parent: source 05 (Jasonette getting started)

## Summary

The document reference says every Jasonette file starts at `$jason` and splits into `head` and `body`. Head is metadata and behaviour that is not itself a widget. Title is required. Optional head fields are description, icon, offline, styles, actions, templates, data, and agents. Description is explicitly for humans reading the JSON: what the app does, readable in the file. Offline is a flag on the document. Styles are a class map in the head so items can share a look. Actions, templates, data, and agents are registries the body refers to by name.

Body is the view: header, sections, layers, footer, and style. The page walks those regions as the structure of one screen, with the same idea as HTML’s split between head and body. This is the grammar the getting-started page pointed at before components and layout.

## Key facts

- Root key: `$jason`. Children: `head`, `body`.
- Required: `head.title`.
- Head slots: description, icon, offline, styles, actions, templates, data, agents.
- Description is documentation inside the file, not a hidden comment syntax.
- Styles live in the head and are referenced from components (class names appear in the layout docs).

## How it works

The runtime reads one JSON object. It registers head declarations (styles, actions, templates, data, agents) and then paints the body. Later chapters attach behaviour to those names. A single screen is one document; navigation loads another document rather than nesting a second `$jason` in the same file.

## Implications for jsonapp.com / ui121

A JSON app needs this split even if the keys differ: metadata and registries in one place, the tree the user sees in another. Putting description in the document is a review feature: a diff shows intent, not only widgets. ui121 models can mirror it with a head for actions, theme tokens, and copy, and a body for the component tree.
