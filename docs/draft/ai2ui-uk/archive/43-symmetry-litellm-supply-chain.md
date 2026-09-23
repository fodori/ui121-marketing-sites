# Symmetry Systems: lessons from the LiteLLM compromise

- **Source:** https://www.symmetry-systems.com/blog/lessons-from-litellm/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Symmetry Systems’ 13 May 2026 post treats the March 2026 LiteLLM PyPI compromise as proof that an AI gateway is a high-value attack point because it holds every provider key. Two malicious versions, 1.82.7 and 1.82.8, were live for about three hours on 24 March 2026. At a download rate the page puts near 3.4 million per day, the authors estimate that window reached about 500,000 machines and more than 1,000 enterprise cloud environments. One named victim is Mercor, described as a $10 billion recruiting company, later facing a Lapsus$ extortion claim, a class action, and a pause of work from Meta.

The campaign, attributed to TeamPCP, did not start at LiteLLM. Days earlier, a misconfigured pull-request workflow at Aqua’s Trivy project leaked a token. Credential rotation was not atomic. On 19 March the attackers force-pushed dozens of release tags, including a widely used tag, so pipelines that trusted tags ran a backdoored action. The malicious entry script was much larger than the legitimate one (the page gives 17,592 bytes versus 2,855). CrowdStrike is cited for that size check. On 23 March a similar play hit Checkmarx KICS. LiteLLM used Trivy by mutable tag. The poisoned action stole the PyPI publish token from the runner environment, including a typosquat domain in the exfiltration path, then the real scan still looked clean. The attacker published wheels that were not in GitHub history. One version ran on import of the proxy module. The next dropped a `.pth` file that runs on every Python start. The payload hunted SSH keys, env files, cloud credentials, Kubernetes tokens, and wallets, queried AWS secret stores via the instance metadata service, posted an encrypted bundle to a lookalike domain registered the day before, and persisted with a user systemd service polling another suspicious host. On Kubernetes it tried to plant a privileged pod. A developer noticed because the `.pth` behaviour exhausted memory. Bot comments flooded the GitHub issue. PyPI quarantined the files around 13:38 UTC. A clean 1.83.0 followed on 30 March on a new pipeline. The official proxy container image is described as unaffected.

Downstream claims on the page: Lapsus$ working with TeamPCP, a claimed 4TB Mercor theft including passport scans for more than 30,000 contractors, possible Cisco and European Commission incidents attributed in reports to the same campaign, and copycat npm use of the `.pth` trick. The FBI is paraphrased as expecting more disclosures. The strategic point is concentration. A handful of AI libraries became load-bearing without the scrutiny given to databases or identity providers. Security scanners were targeted because CI trusts them. Mutable tags are not a cryptographic pin. Hash checks do not catch a package published with a stolen but valid credential. Stolen credentials move to other crews.

Immediate checks listed: installed version, a sysmon persistence path, suspicious `.pth` files, outbound indicators, unexpected kube-system pods, and rotation of every secret the payload might have read. Safe versions: 1.83.0 or pin at or below 1.82.6. Longer term: pin actions by commit SHA, monitor CI like production, split publish tokens from cloud credentials, and inspect what wheels execute at install time.

## Key facts

- Article date 13 May 2026. Incident date 24 March 2026. Malicious versions 1.82.7 and 1.82.8. Clean release 1.83.0 on 30 March.
- Exposure: about three hours. Download rate cited: about 3.4 million per day. Estimated reach: about 500,000 machines, 1,000+ enterprise environments.
- Discovery credited to Callum McMahon at FutureSearch via a transitive Cursor MCP dependency.
- Quarantine about 13:38 UTC. GitHub issue number mentioned: 24512, closed by a compromised maintainer flow and flooded with bot comments (88 comments, 73 accounts, in a 102-second window, as stated).
- Mercor figures as stated: $10 billion company; claimed 4TB including passport images for 30,000+ contractors; Meta paused work; class action filed 1 April.
- Persistence can survive package removal. Docker image `ghcr.io/berriai/litellm` described as not affected.

## How it works

Trust flowed from a CI token, to mutable tags on a security action, to a publish token, to a wheel that runs on import or interpreter start. The gateway’s privilege — stored provider keys and adjacency to cloud secrets — made the blast radius larger than the package’s own feature set. Detection was behavioural (memory blow-up, community), not a hash mismatch. Remediation is rotate and hunt persistence, not only upgrade.

## Implications for ai2ui.uk / ui121

A human gateway will also sit on a privileged path: it sees proposed actions, maybe diffs, maybe customer data, and it can authorise side effects. The LiteLLM story is the security urgency at any choke point, model proxy or approval service. Marketing should not ambulance-chase Mercor. Product consequences: pin dependencies, treat the approval service as production identity infrastructure, do not store long-lived provider keys in the ask path, and assume a compromised dependency’s credentials will be resold. A short public incident-response note will matter more than a feature grid once ai2ui.uk holds real approvals. The concentration lesson supports a small, auditable service rather than an ever-growing proxy that also approves humans.
