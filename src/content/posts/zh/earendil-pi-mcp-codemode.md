---
title: 'Earendil 推翻不用 MCP 的立场 把 MCP 并入 Pi 核心'
excerpt: '曾公开声明 Pi 不支持 MCP 的 Earendil 宣布把 MCP 写进核心，理由不是妥协，而是 MCP 本身变了，再配合 Codemode 沙箱，正好补上工具编排与上下文浪费这两个老问题。'
date: "2026-10-01"
tags: ["MCP", "Agent-Tooling", "AI-Agents"]
category: "AI 智能体"
source: "Earendil"
---

Earendil 工程团队发文回应了一个尴尬的事实：过去访问 pi.dev 会看到"Pi 不支持 MCP"的声明，团队在播客里也多次表达过对 MCP 的不屑，而现在升级 Pi 就会发现 MCP 已经是核心功能。他们把这篇文章写成了公开的立场反转说明。

反转的理由不是被生态裹挟。MCP 这一年确实在变，但更关键的是接入 MCP 所要求的改动本身有价值——Pi 想更顺畅地在内部使用 Jev，而 Pi 需要的东西与 MCP 需要的其实是同一种东西：一个可以随意试验的解释器沙箱。MCP 在 Pi 中就是把工具暴露给 JavaScript 沙箱，和 Codex 等 harness 的做法一致。

问题也没有全解决。团队认为 MCP 最大的短板依然是不好组合，即便是 codemode 也没完全兑现。大量 MCP server 仍在为"把工具一股脑塞进上下文"的 harness 设计，靠返回文本来优化 token。他们的期望是 MCP 更像带智能工具发现的 OpenAPI：工具返回结构化数据，并且能被文档和描述发现。CLI 之所以好用，是因为智能体用 bash 把东西拼起来；MCP 加沙箱理论上可以做同样的事。

这也是 Codemode 的位置。它运行在 harness 一侧，信任级别高于 bash 沙箱，本质是编排和组合工具调用的沙箱，允许用 JavaScript 把多个调用串起来，状态保存在会话记录而不是文件系统里。它在配置 MCP 时自动加载，也能当作默认工具。

对智能体生态来说，这场争论的重心已经从"要不要用 MCP"转向"怎样把 MCP 用好"。Earendil 的说法很直白：与其在场外批评，不如加入进来，把小 harness 的需求写进协议演进的方向。

[阅读原文](https://earendil.com/posts/you-said-no-mcp/)
