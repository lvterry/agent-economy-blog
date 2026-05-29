---
title: '智能体还是逃不过验证码：行为模式暴露 AI 身份'
excerpt: 'Roundtable Research 的最新研究发现，虽然 AI 能解出 CAPTCHA 图片，但它们的点击模式、方向变化和过度选择行为与人类有统计学显著差异。这为智能体时代的身份验证提供了全新思路。'
date: "2026-05-29"
tags: ["Security", "AI-Agents"]
category: "安全与隐私"
source: "Roundtable Research"
---

传统观点认为 CAPTCHA 已经被 AI 破解——视觉语言模型能轻易识别交通信号灯或消防栓。但最新研究表明，解出答案不等于像人类一样解题。

Roundtable Research 团队的论文发现，AI 和人类在 CAPTCHA 上的任务表现相近，但在过程特征上存在显著差异：顺序点击模式、方向变化频率、过度选择行为——这些"如何完成"的维度才是区分关键。

他们由此提出了"过程图灵测试"（Process Turing Test）：不再仅仅比较输出是否与人类不可区分，而是比较过程是否与人类不可区分。通过包含 30 项认知任务的 CogCAPTCHA30 测试组，他们发现前沿模型（Claude、GPT、Gemini）反而比小型开源模型更像 AI、不像人——能力增长并不等于人性化。

更重要的是，当 AI 不知道评估标准时，过程差异依然稳健。这意味着行为验证可能成为智能体时代的长期解决方案：模拟人类认知心理学，是一个远比破解图片分类更难的挑战。

[阅读原文](https://research.roundtable.ai/captchas-detect-ai/)
