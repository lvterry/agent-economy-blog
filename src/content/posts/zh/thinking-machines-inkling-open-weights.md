---
title: 'Thinking Machines Lab 发布 Inkling：975B 开源多模态 MoE 模型'
excerpt: '由前 OpenAI 研究员创立的 Thinking Machines Lab 正式发布 Inkling，一款 975B 总参数（41B 活跃）的开源 MoE 模型，原生支持文本、图像和音频推理，上下文窗口达 100 万 token。'
date: "2026-07-16"
tags: ["Open-Source", "Multimodal", "Foundation Model", "LLM"]
category: "AI 模型"
source: "Thinking Machines Lab"
---

由前 OpenAI 研究员创立的新实验室 Thinking Machines Lab 今日发布其首个开源模型 Inkling。这是一款混合专家（MoE）Transformer 模型，总参数 975B，每次推理仅激活 41B 参数，经过 45 万亿 token 的多模态数据（文本、图像、音频、视频）预训练。

Inkling 的定位并非"最强模型"，而是"最适合定制的开源基座"——它在多项基准上表现均衡，在 AI 智能体编程、工具调用和 Design Arena 网页生成评测中位列开源模型前列。模型支持可控推理深度（controllable thinking effort），开发者可根据任务复杂度灵活调节计算预算。

更值得关注的是 Thinking Machines Lab 同步推出的 Tinker 平台，允许开发者在浏览器中对 Inkling 进行微调。官方演示中，Inkling 甚至使用 Tinker 完成了自我微调——自己编写训练目标、生成合成数据、启动训练并加载新权重，全程无需人工干预。这种"模型自我优化"的能力为开源 AI 的持续迭代开辟了新范式。

Inkling 权重已在 Hugging Face 开放下载，同时提供轻量版本 Inkling-Small（12B 活跃参数）。随着又一个顶级团队加入开源生态，AI 基础设施层的竞争正在加速。

[阅读原文](https://thinkingmachines.ai/news/introducing-inkling/)
