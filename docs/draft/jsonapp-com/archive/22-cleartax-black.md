# ClearTax BLACK — JSON-driven UI in React Native

- Title: A brief introduction to BLACK app's JSON-driven UI in React Native
- Source URL: https://medium.com/cleartax-engineering/a-brief-introduction-to-black-apps-json-driven-ui-in-react-native-5fd4903d97ac
- Fetched: 2026-09-23
- Status: ok

## Summary

Praveena Poojary, 15 December 2021, describes how ClearTax’s mutual-fund app, Black, renders some React Native screens from JSON so people who are not the engineers on the app can change layout. The team already ships many front ends in React, and they use CodePush, so JS changes can be instant, but those changes still need an engineer. The screens that affect conversion were the ones they wanted anyone on the team to edit.

The example is part of the home screen: horizontal cards of top funds by category (equity, flexi cap, large cap), each group with a title and a "view all" call to action. The JSON is rows. A row has a title, a CTA, and cards. Each card has an id that maps to a React component in a dictionary (they show ids "1" and "2" bound to a vertical list block and a title-and-thumbnail card). A CTA carries a react-navigation screen name and an `args` object of params. Before navigating they check the screen exists. If the user is on an old build that does not have the screen (native dependencies are the case CodePush cannot always solve), they show a message asking the user to update. Themes do not put hex colours in the JSON. The JSON names a token such as primary, error, or text1, and React context resolves it for light or dark. Version gates sit on each block: a min and max app version, so a block can be skipped on builds that cannot render it. They edit the JSON in a self-hosted Retool instance and already consider that a weak editor, because a typo in a key is easy. Improvements they want: fetch only when the JSON changed, and fetch a diff rather than the whole document. A further step they sketch is putting view type and position in the JSON so layout itself is data, not only which predefined card appears. They note that for most design-system changes, predefined cards plus an app release are enough.

## Key facts

- Product: Black by ClearTax, React Native, mutual funds. Date: 15 December 2021.
- Goal: non-engineers change high-conversion screens without an engineer.
- JSON shape: rows with title, CTA, and cards. Card id maps to a component.
- Navigation: screen name plus args; missing screen prompts an update.
- Theme: colour tokens, not hex, resolved from context.
- Versioning: `app_version` with min and max per component.
- Editor: self-hosted Retool, described as not good enough. Desired: conditional fetch and diffs.
- Delivery context: CodePush for JS, with a residual native-dependency problem.

## How it works

The app downloads a document of rows. For each card id it looks up a compiled component. CTAs call react-navigation if the route exists. Colour names are looked up in the current theme. Blocks outside the running version range are not rendered. The catalog of cards is still in the binary; the JSON chooses which cards, in which order, with which copy and which destination. That is partial SDUI, not a free layout language. The author says the next level would be interpreting layout props, and that they have not needed it for ordinary design-system work.

## Implications for jsonapp.com / ui121

A production finance app used JSON so operators could rearrange a home screen, and they still kept a closed component map, theme tokens, and version ranges. That is the responsible version of jsonapp.com’s pitch. ui121 can say the same: the document selects and configures known components; a new visual primitive is a release; a new arrangement is data.

The Retool detail is a competitive aside: they used a low-code tool as a JSON editor and found it unsafe. A schema-aware editor (or an AI that only emits schema-valid JSON) is the fix they are asking for. ui121’s validation story is that fix.

> "Anyone in the team can change the layout of the screen."
