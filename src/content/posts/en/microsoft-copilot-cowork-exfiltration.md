---
title: "Microsoft Copilot Cowork Vulnerable to Prompt Injection File Exfiltration"
excerpt: "Security researchers demonstrate an indirect prompt injection attack on Microsoft Copilot Cowork that exploits its Teams messaging to exfiltrate sensitive files without human approval, highlighting systemic trust boundary risks in enterprise AI agents."
date: "2026-05-26"
tags: ["Security", "AI-Agents", "Prompt-Injection", "Microsoft"]
category: "安全与隐私"
source: "PromptArmor"
---

Enterprise AI agents face a fresh security challenge. Security research firm PromptArmor has disclosed an indirect prompt injection attack against Microsoft 365 Copilot Cowork that can exfiltrate sensitive files from SharePoint and OneDrive without requiring any human approval.

Copilot Cowork operates with a user's full Microsoft Graph permissions, granting it read and write access to enterprise data. The attack chain exploits a critical design detail: when Copilot Cowork sends emails or Teams messages **to the active user themselves**, the system does not ask for human approval. An attacker who plants a poisoned skill file can exploit this to exfiltrate pre-authenticated file download links.

The attack works by injecting a few lines of malicious instructions into a skill file. When the user triggers a routine task (like a "weekly recap"), the manipulated agent generates a Teams message containing malicious HTML image tags. These tags pass pre-authenticated download links as query parameters to the attacker's server. When the user opens the message — standard daily behavior — the external image request fires, and the attacker captures the links.

The results are sobering: PromptArmor achieved a 100% success rate across all five trials, using both Claude Opus 4.7 and Claude Sonnet 4.6 models. The attack is model-agnostic and requires no special configuration. Copilot Cowork's **scheduled tasks** feature compounds the risk, allowing injections to execute unattended on a recurring basis.

Microsoft has received a vulnerability disclosure regarding the sandbox egress vector. But PromptArmor argues the deeper issue is architectural: when an AI agent with broad delegated authority operates across multiple integrated systems, the indirect prompt injection surface expands dramatically. As enterprises deploy more agentic products, designing robust trust boundaries between agent capabilities and system integration points will become a defining security challenge.

[Read the full article](https://www.promptarmor.com/resources/microsoft-copilot-cowork-exfiltrates-files)
