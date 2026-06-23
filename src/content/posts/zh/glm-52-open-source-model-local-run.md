---
title: 'GLM-5.2 开源 744B 参数模型本地运行'
excerpt: 'Z.ai 发布 GLM-5.2 开源模型，744B 参数（40B 活跃）、1M 上下文窗口，通过 Unsloth 量化可运行在 256GB 统一内存设备上，性能对标 Claude 4.8 Opus 和 GPT-5.5。'
date: "2026-06-23"
tags: ["GLM", "Z.ai", "Open-Source", "AI-Model", "Reasoning", "Local-LLM"]
category: "AI 模型"
source: "Unsloth"
---

Z.ai（智谱 AI）正式发布 GLM-5.2，一款拥有 744B 总参数（40B 活跃参数）和 1M 上下文窗口的开源大语言模型。在 Artificial Analysis 等多项基准测试中，GLM-5.2 的表现与 Claude 4.8 Opus、GPT-5.5 和 Gemini 3.1 Pro 不相上下，成为迄今性能最强的开源模型。

对于智能体开发者而言，GLM-5.2 的本地化部署能力尤其值得关注。通过 Unsloth 动态 GGUF 量化，2-bit 量化版本仅需 239GB 存储空间，可在 256GB 统一内存的 Mac 或 1×24GB GPU + 256GB RAM（配合 MoE 卸载）上运行。模型支持无思考、高思考和最大思考三种推理模式，默认上下文窗口达 1,048,576 tokens。

GLM-5.2 的 MoE 架构将 744B 参数压缩为仅 40B 活跃参数，使其在推理成本上远低于同等能力的密集模型。这一方向对于依赖自托管推理的智能体团队意义重大——本地部署意味着更低延迟、数据零外泄和可预测的推理成本，为生产级 AI 智能体系统提供了更可控的基础设施选择。

[阅读原文](https://unsloth.ai/docs/models/glm-5.2)
