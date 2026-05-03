---
title: "VS Code enables AI co-author attribution in git commits by default"
excerpt: "Microsoft merged a two-line PR that flips git.addAICoAuthor from off to all, quietly defaulting Copilot attribution on in every git commit — and users are furious."
date: "2026-04-16"
tags: ["VSCode", "Microsoft", "Coding", "AI-Attribution"]
category: "行业动态"
source: "GitHub"
---

Microsoft merged a small but incendiary change into VS Code this week.

PR #310226 modifies just two lines across two files, changing the default of `git.addAICoAuthor` from `"off"` to `"all"`. The effect: whenever you commit code through VS Code's built-in Git integration, the commit message will automatically include a `Co-authored-by: GitHub Copilot` line if Copilot assisted in the session.

The setting has three tiers: `off` (no attribution), `chatAndAgent` (only for copilot chat and agent interactions), and `all` (all AI-assisted edits). Users who want to opt out must now manually toggle it off.

The reaction was swift and brutal. At the time of merge, the PR had collected 2 👍 and 372 👎 — a 186-to-1 negative ratio. The core complaint is straightforward: defaulting AI attribution on is a judgment call about what constitutes a meaningful contribution, and many developers reject the premise outright. Copilot autocomplete suggestions, they argue, are not equivalent to human co-authorship, and littering commit logs with bot signatures dilutes the "Co-authored-by" convention.

Compounding the frustration, the PR was submitted with no description explaining the rationale — no RFC, no design doc, no community discussion. Just a silent default flip.

From Microsoft's perspective, the move makes product sense: it raises Copilot's visibility and builds an audit trail of AI-assisted contributions. But as a default-setting decision, it fundamentally misunderstands the relationship between trust and consent in developer tooling.

[Read the full article](https://github.com/microsoft/vscode/pull/310226)
