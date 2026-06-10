---
title: Anthropic 发布 Claude Fable 5 和 Mythos 5，Mythos 级模型首次向公众开放
excerpt: Anthropic 推出 Mythos 级模型 Claude Fable 5（公众）和 Mythos 5（安全合作伙伴），Stripe 仅用一天完成 5000 万行代码库迁移，定价仅为 Mythos Preview 的一半
date: "2026-06-10"
tags: ["Claude", "LLM", "Anthropic"]
category: "AI 模型"
source: "Anthropic"
---

Anthropic 今日正式发布 **Claude Fable 5**——首个面向公众开放的 Mythos 级模型。同时为安全合作伙伴推出 **Claude Mythos 5**（与 Fable 5 同源但解除网安限制）。

Fable 5 在软件工程、知识工作、视觉、科研等几乎所有基准测试上达到 SOTA。Stripe 在内部测试中使用 Fable 5 一天内完成了 Ruby 代码库的全量迁移——5000 万行代码，按人工估算原本需要整个团队两个多月。在 Cognition 的 FrontierCode 评测中，Fable 5 以中等 effort 即可达到最高分。

视觉能力方面，Fable 5 无需额外辅助工具，仅凭原始游戏截图就通关了 Pokémon FireRed——此前 Claude 模型需要复杂的辅助工具才能做到。在记忆和长上下文方面，Fable 5 能在数百万 token 的持续任务中保持专注，利用持久化笔记改进输出。

在科学领域，Mythos 5 将内部蛋白质设计流程加速约 10 倍，首个能持续输出新颖、有说服力的分子生物学假说的模型，其新颖的 E. coli 蛋白机制假设已被独立实验室的研究所佐证。在基因组学研究中，Mythos 5 以近乎自主的方式运行超过一周，跨 138 个动物物种、数百万个细胞整合单细胞数据，训练的 ML 模型比《Science》上发表的同类模型小 100 倍但表现更优。

为确保安全，Fable 5 配备新的分类器系统，在检测到网络安全、生物化学或模型蒸馏相关请求时自动回退到 Claude Opus 4.8。Anthropic 表示超过 95% 的会话不会触发回退。内部红队测试和外部漏洞悬赏（超 1000 小时）暂未发现通用的越狱方法。模型还将启用 30 天数据留存策略用于安全防御。

定价为输入每百万 token 10 美元、输出 50 美元，仅为 Mythos Preview 的一半。即日起通过 Claude API 和企业套餐全面可用；订阅套餐 Pro/Max/Team 在 6 月 22 日前免费包含 Fable 5。

[阅读原文](https://www.anthropic.com/news/claude-fable-5-mythos-5)
