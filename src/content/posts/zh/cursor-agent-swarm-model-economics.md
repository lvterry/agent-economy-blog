---
title: 'Cursor 智能体集群 Planner-Worker 架构与模型经济学发现'
excerpt: 'Cursor 发布新一代智能体集群系统，采用 Planner-Worker 分层架构成功从零构建 SQLite Rust 实现，并揭示不同模型组合在产出质量相近但成本差异巨大的关键发现。'
date: "2026-07-21"
tags: ["Agent", "AI-Agents", "Cursor", "Agent-Tooling"]
category: "AI 智能体"
source: "Cursor"
---

Cursor 发布了一项重要的智能体集群研究。他们的新系统采用 Planner-Worker 分层架构：前沿模型担任 Planner，负责将目标分解为子任务并分发；廉价模型担任 Worker，专注执行具体工作。这种设计的核心洞见是上下文效率——Planner 不被实现细节淹没，Worker 不被全局目标分散注意力，这是单智能体长时运行中常见的退化问题。

为了验证新架构，Cursor 团队挑战了一个旧系统未能完成的任务：仅凭文档从零构建 SQLite 的 Rust 实现。新系统在四小时内达到 80% 的测试通过率（使用 Grok 4.5），而旧系统在第二小时前就已崩溃。更关键的发现来自模型组合实验：Grok 4.5、Claude 4 Opus、GPT-5.6、DeepSeek V4 等不同模型组合产出的代码质量相近，但成本差异高达 19 倍。前沿模型做规划、廉价模型做执行的组合性价比最优。

团队还自建了版本控制系统以应对每秒 1000 次提交的吞吐量需求——远超 Git 的粗粒度锁设计上限。这暗示着智能体集群的基础设施层正在经历从「为人类设计」到「为智能体设计」的范式转换。

[阅读原文](https://cursor.com/blog/agent-swarm-model-economics)
