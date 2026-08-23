---
title: 'agent.md 让 AI 编码接近手工质量，Fabien Sanglard 的实践'
excerpt: '游戏引擎传奇 Fabien Sanglard 把对代码风格的唠叨全部写进 agent.md，让编码智能体每次开工自带规范。配合对抗上下文稀释的工程技巧，他把 LLM 编码从「能编译」推进到「接近手工质量」。'
date: "2026-08-24"
tags: ["Agent-Tooling", "Claude-Code", "AI-Coding"]
category: "AI 智能体"
source: "Fabien Sanglard"
---

《Game Engine Black Book》作者 Fabien Sanglard 记录了自己驯服 LLM 编码的完整路径。2025 年年中首次尝试时代码根本无法编译；2026 年 1 月重试，模型能写复杂数据结构、能定位晦涩的内核 bug，但产出是毫无注释与结构的意大利面。

改用 Antigravity、Claude Code 等智能体 IDE 后，他陷入「无限耐心的初级程序员」评审循环——每轮都要重复「别用魔法数字」「加个注释」之类的建议，疲惫且低效。

他的解法是 agent.md：编码 harness 会在会话开始时把这个文件注入提示词。函数名短于 30 字符、用枚举替代布尔参数、禁止箭头反模式、提交信息遵循 7 条规则、修 bug 先写失败测试……所有风格偏好一次写清，agent 从第一行代码就按规范执行。

他还总结出对抗上下文稀释的实战技巧：模型在长上下文里会忽略中段指令，因此每个功能开新会话保持上下文短，质量下滑时一句「reload agent.md」即可让 harness 重新注入规范。

他坦承这不是魔法——模型依然会幻觉，代码依然要人读，只是评审重心从风格转向了架构与设计。当模型能力趋于同质，决定产出上限的往往是这些外围工程细节。

[阅读原文](https://fabiensanglard.net/agent.md/index.html)
