# Jasonette layout

- Title: Jasonette layout
- Source URL: https://jasonelle-archive.github.io/docs/legacy/layout/
- Fetched: 2026-09-23
- Status: ok
- Parent: source 05

## Summary

Layout in Jasonette is two directions plus nesting. A vertical layout stacks components top to bottom. A horizontal layout places them left to right. A layout may contain another layout, which is how a row with an avatar and a two-line text column is built. The page’s examples are ordinary profile rows, not a separate layout language.

Style on a layout: padding (default 10 pixels if omitted), spacing between immediate children, background colour, z-index (default 0), and opacity from 0 to 1. `align` is the cross axis: left, center, or right for a vertical stack; top, center, bottom, or fill for a horizontal row. `distribution` is fill (default, children stretch) or equalsize (children share the main axis even if you did not set each height or width). A worked example shows three vertical stacks: default padding, padding 50, and padding 50 plus spacing 10, using a shared label class from the head.

## Key facts

- Layout types: vertical, horizontal, and nested combinations.
- Default padding: 10. Spacing is opt-in.
- Cross-axis align and main-axis distribution are separate (`align` vs `distribution`).
- `equalsize` avoids setting every child dimension.
- Classes defined in head styles can be applied with `class` on a component.

## How it works

Items in a section are often a layout node whose `components` array is the children. Nesting is just another component whose type is vertical or horizontal. The runtime maps that tree to stack views. Authors do not set absolute coordinates except in the layers feature described elsewhere.

## Implications for jsonapp.com / ui121

A JSON app layout can stay this small: row, column, gap, align, and nest. That is enough for the screens Jasonette used in marketing (feeds, profiles) and it is close to how ui121 already composes form rows. Document defaults (their padding-10 surprise) so generated JSON from an AI matches what the renderer does.
