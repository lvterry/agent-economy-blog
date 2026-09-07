---
title: '智能体记忆可以写进 Git，不必再挂一套向量库'
excerpt: '开源项目 OKF Agent Memory 把 Google OKF v0.2 知识格式落到仓库里的 Markdown，本地 BM25 检索亚毫秒级，内置 MCP，宣称可砍掉约 80% 记忆相关 token。'
date: "2026-09-06"
tags: ["AI-Agents", "Agent-Tooling", "MCP", "Memory"]
category: "AI 智能体"
source: "GitHub"
---

AI 编码智能体一换会话，上下文窗口一关，架构决策和领域事实就容易丢。OKF Agent Memory 想用「仓库里的纯文本」解决这件事：在项目的 `knowledge/` 目录里，用符合 Google Open Knowledge Format v0.2 的 Markdown + YAML frontmatter 存记忆，而不是再挂一套外部向量库。

它用纯 Go 实现，零外部依赖，内置内存 BM25 检索（宣称概念搜索低于 300 微秒）和 MCP 服务（`okf mcp`）。设计上强调渐进披露（层级 `index.md` 与链接图），以及「先搜再写」以避免重复概念。仓库还提供 `bootstrap`，可一键脚手架 `knowledge/`、agent skill 与 `AGENTS.md`。

对智能体经济来说，这是在压记忆检索的边际成本：本地词法检索不产生 embedding API 费用，记忆又可走普通 `git diff` / code review。它介于随意丢进 `AGENTS.md` 的便签，和沉重的黑盒向量数据库之间。

阅读完整文章：[https://github.com/okf-memory/okf-agent-memory](https://github.com/okf-memory/okf-agent-memory)
