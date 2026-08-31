---
title: 'ChatGPT Work 的 232 个工具与 44 个技能清单曝光'
excerpt: 'Simon Willison 用一个 prompt 让 ChatGPT Work 会话自曝全部 232 个工具接口与 44 个技能定义并公开成站，生产级智能体的完整工具面第一次清晰可见。'
date: "2026-09-01"
tags: ["ChatGPT", "OpenAI", "AI-Agents", "Agent-Tooling"]
category: "AI 智能体"
source: "Simon Willison"
---

Simon Willison 在最新博客中公开了一个特殊站点——他用一句话让一个全新的 ChatGPT Work 会话「列出你所有的工具」，结果得到 232 个工具接口与 44 个技能定义的完整快照，技能源码合计约 61.5 万字符。这大概是外界第一次完整看到生产级智能体的工具面。

清单揭示了 Work 的运转方式：GitHub 相关工具多达 89 个，Gmail 21 个、Google 日历 15 个、Sites 23 个，另有子代理协调、MCP 资源、定时自动化、JavaScript REPL 与图像生成等能力。配合 Willison 的实测，Work 的杀手锏是带完整互联网访问的代码执行环境、可接管登录的 headless Chrome，以及跨会话持久化文件系统——这些正是 Chat 模式没有的能力。

社区讨论则点出硬币的另一面：一个同时握有私人数据、可访问不受信内容、又能把信息传出去的 agent，构成安全上的「致命三重奏」；也有人担忧这是 OpenAI 借工具绑定加深平台锁定。

工具清单正在成为平台新战场——谁暴露更多可编程接口，谁就掌握 agent 生态的入口。这份参考站让开发者第一次能照着清单评估：这个 agent 到底能替你做什么。

[阅读原文](https://codex-tool-reference.simonw.chatgpt.site/)
