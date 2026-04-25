---
title: 'Linux Kernel Releases Official Guidelines for AI Coding Assistants'
excerpt: 'Linux kernel establishes first formal AI-assisted programming policy: AI cannot add Signed-off-by, humans bear full responsibility.'
date: "2026-04-11"
tags: ["Open-Source", "Linux", "AI-Agents", "Developer-Tools", "Policy"]
source: "Linux Kernel"
---

The Linux kernel official documentation now includes a "Coding Assistants" guide, providing standards for developers using AI tools to contribute to kernel development. This marks the first formal policy from a major open-source project regarding AI-assisted programming.

### Core Requirements

AI tools participating in Linux kernel development must follow standard processes:

- Follow kernel development process documentation (development-process.rst)
- Follow coding style guidelines (coding-style.rst)
- Follow patch submission standards (submitting-patches.rst)

### License Compliance

All contributions must comply with kernel licensing requirements:

- All code must be compatible with GPL-2.0-only
- Use appropriate SPDX license identifiers

### Key Restrictions

**AI agents MUST NOT add Signed-off-by tags** — only humans can legally certify the Developer Certificate of Origin (DCO). The human submitter is responsible for:

- Reviewing all AI-generated code
- Ensuring compliance with licensing requirements
- Adding their own Signed-off-by tag
- Taking full responsibility for the contribution

### AI Contribution Attribution

To track AI's role in the development process, contributions should include an Assisted-by tag:

Assisted-by: AGENT_NAME:MODEL_VERSION [TOOL1] [TOOL2]
Example: `Assisted-by: Claude:claude-3-opus coccinelle sparse`

Read the full document at [https://github.com/torvalds/linux/blob/master/Documentation/process/coding-assistants.rst](https://github.com/torvalds/linux/blob/master/Documentation/process/coding-assistants.rst)
