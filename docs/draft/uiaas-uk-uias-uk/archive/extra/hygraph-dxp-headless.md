# DXPs and headless CMS

- Source: https://www.hygraph.com/blog/dxp-and-headless-cms
- Fetched: 2026-09-23
- Status: ok

## Summary

Emily’s January 2020 explainer, updated 12 June 2026, defines a digital experience platform as either one vendor’s suite (Salesforce, SAP Commerce) or a set of specialist products wired together. The goal is customer experience across sites, apps, and other touchpoints. A CMS sits in the middle. A headless CMS is preferred over a web CMS because every channel can call an API.

Listed building blocks include DAM, CRM, CDP, AI, BI, commerce, experience management, and conversion optimisation. Benefits claimed are more touchpoints, microservice swap-ability, personalisation from pooled data, channel-native messages, and a single analytical picture.

## Key facts

- Two shapes: suite or best-of-breed. Example best-of-breed mix: Hygraph, Segment, Mixpanel, Airship, VWO.
- Personalisation is described as using aggregated behaviour, sometimes with AI, to choose content per person and moment.
- The post points readers at a separate “build your DXP” path.

## How it works

Each capability is a service. The CMS publishes structured content. Engagement tools contribute events. The experience layer, whichever channel it is, assembles a response. Replacing one service does not require replacing the suite.

## Implications for uiaas.uk / ui121

A DXP still assumes someone assembles the experience. ui121 can be the experience runtime inside that picture: the piece that turns content, task state, and rules into a screen. Do not claim to be the CDP or the commerce engine. Claim the last mile those systems still leave to a frontend team.
