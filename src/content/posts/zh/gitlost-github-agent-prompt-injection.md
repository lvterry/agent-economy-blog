---
title: 'GitHub Agentic Workflows 遭提示注入攻击，私有仓库文件被窃取'
excerpt: 'Noma Labs 发现 GitHub 新推出的 Agentic Workflows 存在严重提示注入漏洞（GitLost），攻击者无需任何凭据，仅需在公开仓库提交 Issue 即可诱使 AI 代理泄露同组织内的私有仓库数据。'
date: '2026-07-08'
tags: ['Prompt-Injection', 'Security', 'GitHub', 'AI-Agents']
category: '安全与隐私'
source: 'Noma Security'
---

Noma Labs 的研究人员发现了一个名为 GitLost 的严重漏洞，直指 GitHub 新推出的 Agentic Workflows 功能。该漏洞属于经典的提示注入（Prompt Injection）攻击：攻击者可以在公开仓库中创建一个看似无害的 Issue，但在 Issue 正文中嵌入隐藏指令。当 GitHub 的 AI 代理（由 Claude 或 Copilot 驱动）读取该 Issue 并执行工作流时，代理会误将攻击者的指令当作可信系统指令执行。

利用这一漏洞，攻击者无需任何编码能力或凭据，只需提交一个 Issue 即可。受影响的 Agentic Workflow 通常配置为在 Issue 被分配时触发，代理拥有同组织内其他仓库（包括私有仓库）的读取权限。攻击者通过隐藏指令让代理读取目标私有仓库的文件，并将内容以公开评论的形式发布到 Issue 中——任何互联网用户都可查看。

有趣的是，GitHub 本身设有防护措施，但研究人员发现通过加入「Additionally」等关键词可以诱导模型重构输出绕过限制。这意味着即使有安全护栏，模型的行为依然可以被巧妙操纵。

这是 AI 代理安全领域又一个教科书式的案例。随着平台（GitHub、Slack、Notion 等）纷纷推出 AI 代理功能，代理所绑定的跨应用权限正在迅速扩大攻击面。提示注入不再只是聊天机器人的趣味实验，而是真实世界中可以造成数据泄露的安全威胁。

[阅读原文](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/)
