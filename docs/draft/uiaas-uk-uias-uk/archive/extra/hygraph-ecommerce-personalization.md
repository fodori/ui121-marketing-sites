# eCommerce personalization (Hygraph)

- Source: https://www.hygraph.com/blog/ecommerce-personalization
- Fetched: 2026-09-23
- Status: ok

## Summary

Ritika’s guide (updated 23 June 2026) says stores have a relevance problem, not only a traffic problem. Personalisation means the same homepage can show different banners, languages, and offers from behaviour and referral source. The machinery is content variants plus segments plus a customer profile, not a separate site per audience.

The post stacks industry statistics and then lands on a stack: structured content, a product taxonomy, variants of components, a CDP, and recommendation engines. Hygraph’s role is the structured store and the API that picks a variant.

## Key facts

- Claims on the page, attributed outward: personalising companies drive 40% more revenue; 66% bounce when content feels generic; McKinsey, 5–15% revenue lift from personalisation across digital and physical; up to 8% higher conversion and 12% higher average order value from tailored recommendations; 76% say personalised messages affect consideration; 78% more likely to repurchase; 88% more likely to return for a cohesive cross-channel experience; omnichannel shoppers spend about 30% more with about 30% higher lifetime value; 40% never buy from a site in another language; 65% prefer their own language even if the translation is imperfect.
- Tools named beside the CMS: Dynamic Yield, Segment, Nosto, Salesforce Marketing Cloud CDP, plus A/B testing.
- Method: map the journey, segment on live behaviour, unify profiles, personalise whole blocks rather than whole cloned pages.

## How it works

Editors create variants of a banner or call to action. The storefront asks the API with segment or locale context and renders the matching block. Product data stays in a taxonomy so recommendations and filters share one structure. The CMS does not decide the offer by itself; a CDP or engine supplies the signal.

## Implications for uiaas.uk / ui121

Personalisation of a task UI is the same mechanism as a content variant: one screen model, several presentations, chosen at request time. ui121 can describe experiments without a redeploy in those words. Do not adopt the third-party percentages as ui121 proof.
