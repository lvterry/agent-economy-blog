---
title: 'antirez 谈 AI 时代的编程：控制想法，而非代码'
excerpt: 'Redis 作者 antirez 发表长文，认为在 AI 辅助编程时代，程序员应专注于控制软件的设计方向与核心理念，而非逐行审阅 AI 生成的代码。'
date: "2026-07-13"
tags: ["AI-Agents", "Coding", "Future-of-Work"]
category: "AI 应用"
source: "antirez"
---

Redis 作者 Salvatore Sanfilippo（antirez）近日发表长文《Control the Ideas, Not the Code》，阐述他对 AI 时代程序员角色转变的深入见解。

antirez 的核心论点是：随着 AI 代码生成能力的指数级提升，程序员的价值正在从「写代码」转向「控制想法」——即软件的设计方向、架构决策和长期愿景。他直言，逐行审查 AI 生成的 5000 行代码既低效又无意义，因为 LLM 擅长局部最优实现，而人类应把握球场上方的全局视野。

他以自己的本地推理项目 DwarfStar 为例说明：该项目用 AI 自动实现了 DeepSeek v4 和 GLM 5.2 的推理支持，但实现过程中必须深刻理解底层工作原理和性能约束才能给出正确设计。AI 可以加速执行，无法替代人的设计判断。

对于反对声音的「AI 生成代码质量不行」的观点，antirez 反驳说，即使在 AI 之前，行业的代码质量也早已堪忧——从 2000 到 2020 年间积累的「垃圾代码」之多令人难以置信。AI 并非新问题的起源，而是让旧问题有了新解法。

这篇文章出自一位在本地推理工具和数据库领域均有建树的资深开发者，值得每一个在 AI 时代焦虑的工程师认真阅读。

[阅读原文](https://antirez.com/news/169)
