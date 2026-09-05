---
title: 'EEBench 给 AI 设计电路板打分，Claude Opus 5 暂居第一'
excerpt: 'GPT-6 Astra 演示画电路板后，其背后团队 atopile 推出 EEBench 基准：用真实元器件与 SPICE 仿真客观评测 AI 电路设计，Claude Opus 5 以 61.6% 领跑，GPT 系模型明显落后。'
date: "2026-09-06"
tags: ["AI-Design", "Hardware", "AI-Agents"]
category: "AI 应用"
source: "EEBench"
---

9 月 4 日，电路描述语言 atopile 团队发布 EEBench V1——一个给 AI 电路设计能力打分的公开基准。起因是 OpenAI 在 GPT-6 Astra 发布中演示了模型在 KiCad 里操作电路板，但演示回答不了画出来的板子能不能用的问题。

EEBench 的思路是把电路写进声明式代码而非让智能体操作 GUI：模型直接修改元器件、连接与电气约束，构建、仿真、检查失败都在同一环境内完成，评测因此完全确定。13 个任务混合模拟与数字设计，使用真实厂商器件、按规格书建模，由 SPICE 仿真在参数最坏角落下验证，再结合成本评分。一个典型陷阱是陶瓷电容的直流偏压降容——某提交标称 22µF，实测工作点只剩 11.4µF，电路 0.85 毫秒即跌破阈值，远撑不过断电后保存数据所需的 20 毫秒。

9 月 1 日首批榜单上，Claude Opus 5 以 61.6% 居首，Grok 4.6 以 57.1% 紧随，Claude Fable 5.1 为 56.4%；OpenAI 阵营明显落后，GPT-5.5 仅 42.3%，GPT-5.6 Sol 39.4%，Astra 尚未参测。xAI 已把 EEBench 写进 Grok 4.6 模型卡的工程加速评估栏，说明它正成为衡量智能体工程能力的新品类。同一套仿真管线还能充当 RL 奖励信号用于模型后训练——电子设计可能继代码之后，成为下一个被仿真器客观打分、进而被智能体攻克的工程领域。

[阅读原文](https://eebench.org/blog/can-ai-design-circuit-boards-yet/)
