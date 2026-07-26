---
title: 'Anthropic 发布 Claude 5 上下文工程新规则：删除 80% 系统提示词'
excerpt: 'Anthropic 为 Claude Opus 5 和 Fable 5 重构了上下文工程策略，删除了 Claude Code 80% 的系统提示词。核心转变：让模型使用判断力而非硬性规则，用工具设计替代示例，采用渐进式信息揭示。'
date: "2026-07-26"
tags: ["Anthropic", "Claude-Code", "AI-Agents", "Agent-Tooling"]
category: "AI 智能体"
source: "Anthropic"
---

Anthropic 今日发布 Claude 5 系列模型的上下文工程新指南，核心内容是：他们已经将 Claude Code 的系统提示词删除了超过 80%，在新一代模型上未观察到任何可测量的编码评估损失。

这一转变标志着 AI 代理上下文设计思路的根本变化。过去开发者需要给 Claude 列出大量硬性约束——「不要写注释」「不要创建中间文件」——防止旧模型犯错。但 Claude Opus 5 和 Fable 5 的判断力已经足够成熟，Anthropic 发现这些约束反而限制了模型的探索空间。新的方法是用一条原则性指引替代多条禁令：「让你的代码看起来像周围的代码」。

工具使用方面也从「给例子」转向了「设计接口」。Anthropic 发现给 Claude 提供使用示例反而会把它约束到固定的探索空间中。更好的做法是精心设计工具的参数字段和枚举值，让模型自己理解如何使用。另一个关键变化是「渐进式揭示」（progressive disclosure）：不再把所有规则塞进系统提示词，而是将验证规则、代码审查指南等拆分为独立的技能（skills），让 Claude 在需要时才按需加载。

这些教训对任何构建 AI 代理的开发者都有直接意义。Claude Code 的经验表明，新一代模型需要的不是更多的约束，而是更好的工具接口和更灵活的上下文结构。开发者应当审视自己的系统提示词、技能文件和 CLAUDE.md，删除那些「显而易见的」限制，让模型用自己的判断力来完成工作。

Anthropic 同时推出了 `claude doctor` 命令，帮助用户自动优化上下文配置。

[阅读原文](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models)
