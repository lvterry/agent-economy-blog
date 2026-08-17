---
title: 'OpenAI 携手 Cerebras 推出 Ultrafast 模式 前沿推理提速 11 倍'
excerpt: 'Cerebras 为 OpenAI API 提供 Ultrafast 推理档位，GPT-5.6 Sol 输出速度达每秒 750 token 且无质量妥协，实测完赛 Humanity Last Exam 比 Anthropic 旗舰快约 7 倍。'
date: "2026-08-14"
tags: ["OpenAI", "GPT", "AI-Infrastructure", "Hardware"]
category: "AI Infra"
source: "Cerebras"
---

Cerebras 与 OpenAI 今日公布合作成果：GPT-5.6 Sol 的 Ultrafast 模式在 OpenAI API 上线，由 Cerebras 晶圆级芯片驱动，输出速度最高每秒 750 token，据称推理质量无损。该档位先向部分客户开放，具体定价未公开。

六月底我们报道 Sol 预览时曾提到，Sol 将在七月登陆 Cerebras 平台跑出 750 token/秒——如今这一能力正式以产品档位落定。Cerebras 的实测把「快」翻译成了可量化的价值：在 Humanity's Last Exam 上，Ultrafast 用 11 小时 11 分答完全部 2500 题，Claude Fable 5 耗时 78 小时 27 分；在衡量经济价值任务的 GDP-Val 基准上端到端提速 5.6 倍且质量不降。相比 Anthropic 旗舰，同为前沿模型速度相差近一个数量级——这正是 Cerebras 把推理硬件直接嵌进 OpenAI API 的逻辑：速度本身正在成为模型产品的分层与定价依据。

社区的质疑同样成立：官方未公布 Ultrafast 与标准 Sol 的逐项质量对比，且测试、构建等外部瓶颈不会因 token 变快而消失。对开发者经济而言，这场速度军备竞赛正在重新定义哪些任务值得为快买单。

[阅读原文](https://www.cerebras.ai/blog/accelerating-gpt-5-6-sol-ultrafast-with-openai)