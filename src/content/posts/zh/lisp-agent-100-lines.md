---
title: '100 行 Lisp 写一个 AI Agent：递归函数就是智能体循环'
excerpt: '开发者用不到 100 行 Common Lisp 实现了一个完整的 AI Agent，证明智能体核心逻辑本质上只是一个递归函数，而 Lisp 的 homoiconic 特性让语言本身成为最强大的工具集。'
date: "2026-07-12"
tags: ["Agent", "AI-Agents", "Agent-Tooling", "Coding"]
category: "AI 智能体"
source: "The Beach (Jamie Beach)"
---

开发者 Jamie Beach 发布了一篇引人深思的文章：他用不到 100 行 Common Lisp 实现了一个完整的 AI Agent。核心论点直截了当——去掉框架和抽象层，一个 Agent 就是一个递归函数：把消息列表发给模型，如果模型返回文字就结束，如果模型要求调用工具就执行工具、追加结果、然后递归调用自身。

更进一步，Lisp 的 homoiconic 特性（代码即数据）让开发者可以直接把 eval 作为 Agent 的工具暴露给模型——模型不仅能调用预定义函数，还能现场生成并执行任意 Lisp 代码。这本质上给了 Agent 访问整个语言的能力，而非一个有限的工具目录。作者承认这在生产环境中需要沙箱隔离，但作为概念验证极具启发性。

文章还实现了一个 20 行的向量记忆系统（基于 pgvector），Agent 会递归调用自身来压缩历史记录以管理上下文窗口。这个「Agent 对自己的历史递归」的设计，在哲学上与 Lisp 的递归传统一脉相承。

对于 Agent Economy 的读者，这篇文章的价值不在于建议你用 Lisp 写 Agent，而在于提醒：当 MCP 协议、框架抽象和工具编排越来越复杂时，Agent 的核心仍然是一个简单、优雅的循环。理解这个本质，有助于在构建实际系统时做出更清晰的设计取舍。

[阅读原文](https://thebeach.dev/posts/lisp-agent/)
