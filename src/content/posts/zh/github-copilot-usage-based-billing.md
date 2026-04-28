---
title: GitHub Copilot 转向用量计费：AI Credits 取代固定订阅
excerpt: GitHub 宣布 Copilot 将于 6 月 1 日起全面转向用量计费，用 GitHub AI Credits 取代原有的 premium request 机制。基础价格不变，但 agent 模式的推理成本终于被计价了。
date: "2026-04-27"
tags: ["GitHub", "Copilot", "Pricing", "Usage-Based"]
category: "商业 & 经济"
source: "GitHub"
---

GitHub 今天宣布了一项影响深远的定价改革：从 2026 年 6 月 1 日起，所有 GitHub Copilot 计划将全面转向用量计费（usage-based billing）。

核心变化是，原有的 premium request units（PRU）将被 **GitHub AI Credits** 取代。Credits 按 token 消耗计算，包括输入、输出和缓存 token，不同模型对应不同的费率。

**基础价格不变**，这点值得先强调一下：
- Copilot Pro：$10/月，内含 $10 AI Credits
- Copilot Pro+：$39/月，内含 $39 AI Credits
- Copilot Business：$19/用户/月，内含 $19 AI Credits
- Copilot Enterprise：$39/用户/月，内含 $39 AI Credits

但这与以前有本质区别——以前的订阅费是一口价，用得多少都一样。现在用量超过内含 Credits 后需要额外购买。

**什么不受影响？** 代码补全（code completions）和 Next Edit Suggestions 仍然免费，不消耗 Credits。这意味着日常的快速补全体验没有变化，受影响的主要是 Chat 和 Agent 模式的深度对话。

**为什么做这个调整？** GitHub CPO Mario Rodriguez 的解释很坦诚：Copilot 已经从一个编辑器内助手进化为一个 agentic 平台，能够运行长周期多步骤的编码会话。以前一个快速问答和一个持续数小时的自主编码会话成本相同，GitHub 一直在消化推理成本，但这不可持续。

**对企业和组织的影响：**
- 现有 Business 和 Enterprise 客户在 6-8 月获得促销额度（Business $30、Enterprise $70）
- 支持组织内 Credits 池化，消除"每人有额度但用不完"的浪费
- 管理员可以按企业、成本中心、个人三级设置预算控制
- Copilot code review 还将额外消耗 GitHub Actions 分钟数

**需要注意的坑：** "降级回退"（fallback）机制将不再存在。以前用完额度后会自动降到低成本模型，新模式下超额后由 Credits 和预算控制决定。

这一政策从 6 月 1 日生效，5 月初将推出预览账单功能，让用户提前看到预估费用。

[阅读原文](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)
