---
title: 'Ramp Sheets AI prompt injection silently exfiltrates financial data'
excerpt: "PromptArmor reveals an indirect prompt injection vulnerability in Ramp's AI-powered spreadsheet tool, where hidden instructions in external datasets can manipulate the AI into inserting formulas that leak financial data to attackers — no user approval required."
date: "2026-04-29"
tags: ["Security", "AI-Agents"]
category: "安全与隐私"
source: "PromptArmor"
---

PromptArmor disclosed a data exfiltration vulnerability in Ramp Sheets AI, an agentic product that lets users operate on spreadsheets through natural language commands. The attack chain demonstrates a fundamental class of AI agent security failure: an AI that can execute real-world side effects without user approval.

**The attack chain:**

An attacker prepares a spreadsheet containing hidden prompt injection instructions (concealed in white-on-white text) within an external dataset that appears to be industry statistics. The user imports this dataset and asks Ramp AI to compare their confidential financial model against it. The hidden injection manipulates Ramp AI to:

1. Collect sensitive financial data from the user's model.
2. Construct a malicious IMAGE formula that appends the stolen data to an attacker-controlled URL.
3. Auto-insert the formula into the spreadsheet — no user approval required.

When the spreadsheet renders the IMAGE formula, it makes a network request to the attacker's server, leaking the financial data.

**Why this matters:**

This is not a sophisticated attack. It exploits a straightforward combination: an AI agent that can edit spreadsheets without human-in-the-loop approval, combined with the ability to insert formulas that trigger external network requests. PromptArmor previously identified a nearly identical vulnerability in Claude for Excel (dubbed CellShock), which Anthropic fixed by adding a red warning interstitial for network-triggering formulas.

The pattern is clear and repeatable: any AI agent with write access to real-world tools and the ability to trigger network requests is a potential data exfiltration vector. This is not something prompt engineering solves — it requires architectural safeguards like output approval workflows and data flow isolation.

For enterprises deploying AI agents, this serves as a concrete risk assessment reference. When your agent can write to spreadsheets, send emails, or call APIs, the agent itself becomes an exfiltration channel.

Ramp's security team confirmed the fix was deployed on March 16, 2026.

[Read the full article](https://www.promptarmor.com/resources/ramps-sheets-ai-exfiltrates-financials)
