# Digi — Single pane of glass: why it matters

- **Source:** https://www.digi.com/blog/post/single-pane-of-glass
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Josh Flinn’s Digi post (9 December 2022) defines a single pane of glass as one dashboard that aggregates device and operational data so teams can see a fleet, get alerts, and manage it remotely. The audience is IT and OT: people running hundreds or thousands of connected devices who cannot visit each site to patch firmware or reboot a router. The business claim is that reliable operations are no longer only a cost centre; they are how digital use cases (smart cities, industrial IoT, 5G vehicles, hybrid work, edge AI) stay up.

Two uses are separated. System-level analytics answer whether to add capacity or change a security policy. Remote device management opens a device’s interface through the central console, including out-of-band access when the device is offline. Required capabilities listed: threshold alerts, root-cause and remote debug, health reporting, and multi-vendor data. Risks: not everyone should see every control, so views must be role-shaped.

The product half is Digi Remote Manager and TrustFence: group firmware updates, drag-and-drop configuration, software-defined policies, certificate authentication, and two-factor checks for API-connected devices. The concrete deployment story is New York City DOT rolling Digi transportation routers to more than 14,000 intersections, with zero-touch provisioning and a traffic-centre view of each device coming online. Out-of-band management is justified by truck-roll cost.

Section outline: definition; two kinds of view; why IoT scale forces the pattern; benefits and risks; Digi Remote Manager; city, private-network, and out-of-band examples.

## Key facts

- Pattern: one console for uptime, breaches, stale software, and failed links across large device fleets.
- Must-have features named: alerts, remote debug, reporting, multi-vendor integration.
- NYC DOT example: 14,000+ intersections, zero-touch configuration, central uptime view.
- Security stack named: Digi TrustFence, certificate provisioning, two-factor authentication for third-party APIs.
- Author and date: Josh Flinn, 9 December 2022.
- Contexts: smart-city lighting and traffic, industrial and utility networks, vehicle connectivity, VPN-dependent hybrid work.

## How it works

Devices report into a cloud manager. Policies push configuration and patches to groups. Alerts fire on breach or outage. An operator can open one device or an offline serial device through a secure tunnel instead of travelling. Automation covers the repetitive security work so human error is not the control plane. The pane is both visibility and action.

## Implications for the one-UI domains / ui121

Digi proves consolidation where the “apps” are device consoles, not SaaS tabs. The lesson for only1ui.com is the same shape at human scale: hundreds of interfaces become one operational surface, with role-limited views. ui121 is not an IoT manager. It is the generalisation that any remote system — a router console, a ticket, a form — can present as a rendered task. The NYC number is a scale anecdote for “one view over thousands of endpoints,” useful beside Cognizant’s 350,000 employees as a different kind of one-surface proof.
