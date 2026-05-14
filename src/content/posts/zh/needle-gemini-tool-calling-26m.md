---
title: "团队将 Gemini 工具调用能力蒸馏进 26M 参数的小模型"
excerpt: "Cactus Compute 团队发布 Needle，一个仅 26M 参数的纯工具调用模型，可在手机、手表等小型设备上运行，为 AI 智能体的边缘部署开辟新路径。"
date: "2026-05-13"
tags: ["Agent", "AI-Agents", "Tool-Calling", "Model-Distillation"]
category: "AI 模型"
source: "Cactus Compute"
---

Cactus Compute 团队发布了一个名为 Needle 的开源项目，成功将 Gemini 3.1 的工具调用（function calling）能力蒸馏到一个仅有 2600 万（26M）参数的模型中。这是目前已知规模最小但可用的纯工具调用模型。

Needle 采用了团队自研的"简单注意力网络"（Simple Attention Network）架构，由 12 层编码器和 8 层解码器组成。模型在 16 块 TPU v6e 上预训练了 2000 亿 token（耗时 27 小时），随后在 20 亿 token 的单次工具调用数据集上进行了后训练（45 分钟）。

在性能方面，Needle 在单次工具调用任务上超越了 FunctionGemma-270M、Qwen-0.6B、Granite-350M 和 LFM2.5-350M 等参数量大得多的模型。在 Cactus 推理平台上，它的预填充速度可达每秒 6000 token，解码速度达每秒 1200 token。

更重要的是，Needle 的权重已在 Hugging Face 上完全开源，训练数据集的生成流程也一并公开。用户可以在自己的 Mac 或 PC 上对模型进行微调，使其适配特定工具集。项目内置了网页 UI 和 CLI 工具，方便开发者快速上手。

这一成果的意义在于：工具调用能力不再依赖于云端大模型，而是可以在手机、手表、眼镜等消费级设备上本地运行。对于 AI 智能体的边缘化部署和隐私保护而言，这是一个重要的技术突破。

[阅读原文](https://github.com/cactus-compute/needle)
