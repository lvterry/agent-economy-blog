---
title: OpenCode 安全隐患与 AI 编程智能体的权限困境
excerpt: 一篇详尽的技术批评揭露了 OpenAI 开源编程助手 OpenCode 的多项安全隐患，包括远程优先架构带来的数据泄露风险、bash 权限绕过、以及设计上存在的 RCE 漏洞，引发了对 AI 编程智能体安全模型的深度反思。
date: "2026-07-20"
tags: ["OpenCode", "OpenAI", "Security", "Agent-Tooling"]
category: "安全与隐私"
source: "wren.wtf"
---

OpenCode 是 OpenAI 于近期开源的一款 AI 编程助手，与 Claude Code、Cursor 等产品竞争。一篇来自 wren.wtf 的深度批评分析了 OpenCode 的若干问题：

远程优先架构意味着所有代码上下文都经过远端服务器，带来数据泄露风险。权限系统存在设计缺陷——bash 命令的权限规则可被绕过，即使设置了全局 deny，特定路径下的脚本仍能执行。文件权限管理更令人担忧：AI 模型曾意外将内容写入 `~/.ssh` 目录。

更严重的是，代码中存在通过 `curl | bash` 模式远程下载并执行任意命令的功能设计。文章还指出，OpenCode 的文档质量低下，明显是为 AI 模型而非人类阅读而编写。批评者认为，Docker 隔离并不足以解决这些问题——工具层面的安全设计才是根本。

这一讨论对理解 AI 编程智能体的权限模型和安全边界有重要价值。

[阅读原文](https://wren.wtf/shower-thoughts/stop-using-opencode/)
