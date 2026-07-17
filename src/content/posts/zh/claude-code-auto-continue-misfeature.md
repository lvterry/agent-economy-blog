---
title: 'Claude Code 自动续行功能引发 AI 工具信任争议'
excerpt: 'Anthropic 在未告知用户的情况下，于 Claude Code 中加入 60 秒无响应自动续行功能。社区发现后三天内被撤回，但事件暴露了 AI 编程工具在自主性与安全之间的深层矛盾。'
date: "2026-07-17"
tags: ["Claude-Code", "Anthropic", "AI-Safety", "Agent-Safety", "Security"]
category: "安全与隐私"
source: "Olaf Alders"
---

7 月 1 日，Anthropic 在 Claude Code 2.1.198 版本中引入了一项颇具争议的功能：当用户 60 秒未响应 Agent 提问时，Claude Code 会自动代替用户做出决定并继续执行。这项功能既未出现在更新日志中，也未在文档中提及。

开发者 Olaf Alders 在深度分析中还原了事件经过。该功能的触发机制是：Claude Code 的 AskUserQuestion 工具会在 60 秒超时后自动返回"继续"结果，并在界面上显示倒计时——但倒计时只在最后 20 秒才出现。这意味着如果用户同时运行多个 Agent 或短暂离开，可能完全不知道自己的 Agent 已经代为决策。

社区反应迅速而激烈。Aleksey Nogin 在 GitHub 提交了 #73125 号 issue，获得 384 个点赞和 143 条讨论。用户指出了更严重的问题：如果 Agent 正在执行部署或写数据库操作，60 秒超时代理决策可能导致不可逆的后果。

7 月 3 日，Anthropic 在 2.1.200 版本中回滚了此行为。社区也发现了环境变量 `CLAUDE_AFK_TIMEOUT_MS` 可用来关闭该功能——但这个开关从未出现在官方文档中。

这次事件的核心问题不在于一个功能的设计失误，而在于 AI 工具供应商能否在"快速迭代"的信条下保持对用户信任的尊重。当一个 AI Agent 可以在用户不知情的情况下替用户做决定时，Agent 经济的基础——信任——就在被动摇。

[阅读原文](https://www.olafalders.com/2026/07/17/claude-code-anatomy-of-a-misfeature/)
