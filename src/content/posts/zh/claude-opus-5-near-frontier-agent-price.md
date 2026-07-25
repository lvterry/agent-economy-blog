---
title: 'Claude Opus 5 发布，以 Opus 价格实现近前沿智能体性能'
excerpt: 'Anthropic 发布 Claude Opus 5，在智能体基准测试中接近旗舰 Fable 5 水平，价格保持 Opus 4.8 不变。新模型在 ARC-AGI、Zapier AutomationBench 等任务上大幅领先，并支持对话中动态切换工具。'
date: "2026-07-25"
tags: ["Anthropic", "Claude", "AI-Model", "Agent", "AI-Agents"]
category: "AI 模型"
source: "Anthropic"
---

Anthropic 今日发布 Claude Opus 5，这是 Opus 系列的最新旗舰，接近 Fable 5 的前沿智能水平，价格保持 Opus 4.8 不变——每百万输入 Token $5，输出 $25。

在智能体基准测试中，Opus 5 表现尤为突出。Frontier-Bench 上性能相比 Opus 4.8 翻倍以上，CursorBench 最高达到 Fable 5 的 99.5% 且成本减半。Zapier AutomationBench 上，Opus 5 通过率是第二名模型的 1.5 倍；OSWorld 2.0 上以仅 Fable 5 三分之一的成本超越其最佳成绩。在 ARC-AGI 3 上，Opus 5 得分是次优模型的三倍。

Opus 5 展现了更强的自主验证能力。在一项 Frontier-Bench 任务中，模型被要求从一张机械零件图纸重建 3D 模型——在没有直接查看图纸权限的情况下，它自行编写计算机视觉管线提取几何信息并成功完成，其他竞品五次尝试均失败。交易公司使用 Opus 5 在一次对话中完成新交易所的市场数据接入，此前其他模型在有完整计划的情况下也无法完成。

Anthropic 同步推出两项基础设施更新：对话中动态切换工具而不使提示缓存失效，以及 API 端安全分类器自动回退功能。这些改进对智能体开发者具有重要实用价值。

[阅读原文](https://www.anthropic.com/news/claude-opus-5)
