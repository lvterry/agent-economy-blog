---
title: "Project Glasswing Update: AI Has Found Over 10,000 Critical Vulnerabilities"
excerpt: "Anthropic releases the first results from Project Glasswing: the Mythos Preview model has already found over 10,000 high-severity vulnerabilities, shifting the bottleneck from finding bugs to patching them."
date: "2026-05-23"
tags: ["Security", "AI-Safety", "Anthropic", "Cyber-Security", "AI-Agents"]
category: "安全与隐私"
source: "Anthropic"
---

Anthropic published the first results update for Project Glasswing, its initiative to use frontier AI to secure the world's most critical software. In just one month, the Mythos Preview model has uncovered **over 10,000 high- and critical-severity vulnerabilities** across partners and open-source projects.

The numbers are striking. Cloudflare found 2,000 bugs (400 high/critical) across its critical-path systems, with a false positive rate their team considers better than human testers. Mozilla discovered 271 vulnerabilities in Firefox — more than ten times what they found with Claude Opus 4.6 in the previous release cycle. Palo Alto Networks shipped over five times its normal patch volume. Microsoft warned that patch counts will "continue trending larger for some time."

One vivid illustration: Mythos Preview constructed a working exploit against wolfSSL, an open-source cryptography library used by billions of devices, that would have allowed an attacker to forge TLS certificates for a fake bank website (CVE-2026-5194). This vulnerability had gone undetected through years of human scrutiny.

**The bottleneck has shifted.**

Anthropic reports that finding vulnerabilities is no longer the hard part — fixing them is. A typical high-severity bug takes two weeks to patch. Some open-source maintainers have asked Anthropic to slow down because they cannot keep up. Across 1,000 scanned open-source projects, 6,200 high/critical vulnerabilities were flagged, with a 90.6% true-positive rate confirmed by independent security firms.

This marks a structural shift in cybersecurity. Mythos-class models dramatically reduce the cost and time required to discover and exploit vulnerabilities. The only viable defense is to compress patch cycles, shorten deployment windows, and harden basic security postures — advice Anthropic lays out plainly.

Anthropic has also released Claude Security (for enterprise codebase scanning), a public tracking dashboard for open-source disclosures, and plans to expand Glasswing partnerships with allied governments. The message is clear: the era where AI finds more bugs than humans can fix has already arrived.

[Read the full article](https://www.anthropic.com/research/glasswing-initial-update)
