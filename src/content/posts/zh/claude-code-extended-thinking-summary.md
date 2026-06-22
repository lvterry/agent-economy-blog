---
title: 'Claude Code 的推理摘要背后：加密签名替代真实思考链'
excerpt: 'Anthropic 的 AI 编码智能体 Claude Code 在本地日志中仅保存推理摘要而非完整思考过程，真实推理被加密签名保护，完整内容仅向企业客户开放。'
date: "2026-06-22"
tags: ["AI-Agents", "Anthropic", "Security", "Privacy"]
category: "安全与隐私"
source: "Patrick McCanna"
---

开发者 patrickmccanna 在检查 Claude Code 本地日志时发现，所谓的"推理块"（thinking blocks）并非模型的真实思考过程。日志中只有一个约 600 字符的加密签名，而实际推理内容由 Anthropic 持有密钥加密，用户设备无法访问。官方文档同样确认：API 返回的是推理的摘要（summary），而非推理本身。

完整推理输出仅面向企业级客户提供。这意味着日常用户即便拥有完整的本地会话日志，也无法追溯智能体在某个决策背后的真实逻辑路径。Matt Green 对签名机制做了更详细的技术分析，确认这一设计并非偶然。

这种做法并非 Anthropic 独有——OpenAI 和 Google 同样以保护竞争力和防止蒸馏为由，对模型的推理过程采取封闭策略。对于依赖 AI 编码智能体进行合规审计的团队而言，这一限制意味着：你无法向监管方或利益相关者证明智能体做出某个代码变更的"真实逻辑"，只能依赖一份经过摘要化处理的文本。

[阅读原文](https://patrickmccanna.net/the-text-in-claude-codes-extended-thinking-output-is-not-authentic/)
