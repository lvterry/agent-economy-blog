---
title: '推理 API 的供应商锁定正在侵蚀 AI 会话所有权'
excerpt: 'Earendil 发文指出，推理 API 正通过加密推理、隐藏搜索与服务器端状态，把用户的会话从可移植的文本记录变成供应商锁定的黑盒，并提出检查、导出、重放、审计、删除五项可移植性测试。'
date: "2026-07-31"
tags: ["AI-Infrastructure", "Agent-Interoperability", "Privacy"]
category: "AI Infra"
source: "Earendil"
---

Earendil 工程团队发文指出，推理 API 正在系统性剥夺用户对会话的所有权。如今 API 返回的不再只是文本：推理 token 以加密 blob 形式返回，服务端搜索只回传引用而非完整证据，上下文压缩只有原供应商能解密，子代理指令被加密隐藏，会话状态完全由供应商服务器上的 ID 索引。用户本地的 transcript 只是会话的残缺视图，换一个模型根本无法接手。

文章提出五项测试检验会话是否真正属于用户：能否检查模型看到了什么，能否导出完整上下文，能否在别的实现上重放，能否事后审计决策依据，能否删除所有服务器端副本。对照之下，OpenAI Responses API 默认存储会话 30 天，Gemini Interactions API 付费档保留 55 天，previous_response_id 只是指向供应商数据库的外键。加密推理与"密封状态"看似保护隐私，实则把用户锁进单一生态。

HN 社区认为这是被低估的关键问题：模型切换与成本路由会越来越常见，若会话状态无法迁移，用户与供应商之间的权力关系将彻底改变。对 Agent 经济而言，会话可移植性不是便利问题，而是市场结构问题。

[阅读原文](https://earendil.com/posts/session-portability/)
