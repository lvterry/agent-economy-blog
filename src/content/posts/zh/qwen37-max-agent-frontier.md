---
title: "Qwen3.7-Max：专为智能体时代打造的前沿模型"
excerpt: "阿里的 Qwen3.7-Max 在代码智能体、MCP 集成和超长自主执行上实现突破，并在 35 小时的连续运行中独立完成了 GPU 内核优化，达到 10 倍加速。"
date: "2026-05-21"
tags: ["Agent", "AI-Agents", "MCP", "Coding", "Qwen"]
category: "AI 智能体"
source: "Qwen"
---

阿里云正式发布 Qwen3.7-Max，这是其最新的旗舰模型，专门为智能体（Agent）时代设计。与市面上多数侧重对话或推理的模型不同，Qwen3.7-Max 从头构建为"智能体基座"——能编写和调试代码、通过 MCP 协议自动化办公工作流，并支持数百乃至数千步的自主执行。

在各项基准测试中，Qwen3.7-Max 的表现令人瞩目：在 Terminal Bench 2.0 上以 69.7 分超越 DeepSeek V4 Pro Max（67.9 分），在 SWE-Pro（60.6）和 SWE 多语言（78.3）上也领先同类模型。更值得注意的是，它在 MCP-Mark（60.8）和 MCP-Atlas（76.4）等智能体框架基准上均取得最佳成绩，表明其对工具调用和工作流编排有扎实的支持。

最令人印象深刻的案例是一次全自主的 GPU 内核优化任务。Qwen3.7-Max 在阿里云 PPU 硬件上连续运行约 35 小时，自主进行 1,158 次工具调用和 432 次内核评估，将 SGLang 中的注意力算子加速了 10 倍。这个过程中，模型从零开始诊断编译错误、修复正确性问题、分析性能瓶颈，并多次重构内核架构——展现了真正持久的自主推理能力。

Qwen3.7-Max 还具备跨框架泛化能力：无论部署在 Claude Code、OpenClaw 还是 Qwen Code 上，其表现保持稳定。这种"一次训练，到处运行"的特性对于构建健壮的智能体生态至关重要。

该模型已通过阿里云 Model Studio 提供 API 接入，支持 OpenAI 兼容协议和 Anthropic 兼容协议，可直接在 Claude Code 和 OpenClaw 中使用。

[阅读原文](https://qwen.ai/blog?id=qwen3.7)
