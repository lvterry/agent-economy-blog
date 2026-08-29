---
title: '腾讯开源混元 Hy4 预览版，剑指开源模型第一梯队'
excerpt: '腾讯开源混元 Hy4 预览版：770B 总参数、49B 激活的 MoE 模型，盲测小幅领先 GLM-5.3 与 Kimi K3，以接近 5% 的缓存成本上线 OpenRouter，两天处理 token 量已超 GLM-5.3 一周。'
date: "2026-08-30"
tags: ["LLM", "Open-Source", "Foundation Model"]
category: "AI 模型"
source: "腾讯"
---

腾讯开源混元 Hy4 预览版：770B 总参数、49B 激活参数的 MoE 架构，上下文窗口超过 100 万 token，主打真实生产力场景——编程、办公、金融分析、科研推理，甚至能根据一句自然语言生成可玩的游戏原型。

在腾讯内部 163 位专家、203 个工程任务的盲测中，Hy4 以 2.99/4.00 小幅领先 GLM-5.3（2.92）与 Kimi K3（2.94）。价格同样激进：每百万输入 token 0.834 美元、输出 2.501 美元，缓存命中仅 0.042 美元，约等于 5% 的缓存成本，明显低于多数厂商的 10%–20%。据 HN 社区观察，它上线 OpenRouter 两天处理的 token 量已超过 GLM-5.3 一周的量级。

更有意思的是工程信号：Hy4 首次参与自身研发，自动分析推理系统瓶颈，完成算子融合与通信优化，把端到端吞吐提升 31.8%——一个初步的递归自改进闭环。WorkBuddy、CodeBuddy 将免费提供两周。

GLM-5.3、DeepSeek 之后，腾讯的入场意味着中国开源模型第一梯队已全线压上，低价与开源正在成为事实标准。

[阅读原文](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/)
