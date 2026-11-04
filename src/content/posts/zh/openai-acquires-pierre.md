---
title: 'OpenAI 收购 Pierre 给 Codex 装源控'
excerpt: 'OpenAI 宣布收购 Pierre，把已嵌进 Codex 的 Trees、Diffs 与 Code Storage 并入自家源控栈，目标是让 Git 工作流能跟 coding agent 并行协作。'
date: "2026-11-05"
tags: ["OpenAI", "Coding", "AI-Agents", "Codex"]
entities: ["OpenAI"]
category: "AI 智能体"
source: "OpenAI"
---

OpenAI 11 月 4 日宣布，将收购 Pierre Computer Company, Inc.（Pierre）。公告写得很直：这家公司做 Code Storage，还有一批开源开发者工具；你在 Codex 应用里浏览文件、审 diff，用到的 Trees 和 Diffs，已经是 Pierre 的库。收购的目标，不是再堆一个聊天框，而是把开发者已经习惯的 Git 工作流，改造成能跟 coding agent 并行协作的样子——从 agent 拉出第一个分支，到代码真正上线。

同一周早些时候，OpenAI 刚公开过自家给工程师和 agent 用的源控后端 Pando，说的是 Git 在规模化时怎么撑得住。Pierre 补的是另一半手感：怎么读、怎么审、怎么在变更里直接改。Diffs 的 Edit mode 让评审者在发现问题的那一行就改；新近放出的 Highlights 是极快的语法高亮，人在打字、agent 在流式吐代码时都能跟上。同一小队还设计了 Code Storage 的 API——用 Git 语义存代码、追历史，给应用当存储层。公告把两边拧在一起：Pando 扛规模，Pierre 扛审阅与存储体验，落点都在 Codex。

条款上能确定的也不多，但边界写清楚了。Pierre 的开源项目会继续开源，OpenAI 说还会继续贡献；交割后客户仍可使用 Code Storage，同时功能会往 Codex 里收。交割前双方保持独立，还需监管批准等惯常条件。对价、团队规模、并入时间表，公告都没给——这些目前只能算未知，不宜脑补成「GitHub 替代品已上线」。

对 agent 经济，这件事点的是协作层，不是模型层。当多个 coding agent 同时改同一棵树，瓶颈很快从「谁写得更快」变成分支、评审、合并和历史谁说了算。OpenAI 选择买下已经嵌进 Codex 的那一层 UI 与存储，而不是只发一篇「我们支持 Git」的说明。agent 越并行，源控就越像调度系统；谁把分支与 diff 做成默认工作台，谁就更靠近「代码从意图走到上线」的那条管道。至于开源库会不会慢慢失速、Code Storage 最终剩多少独立形态——要看交割之后的提交记录，而不是新闻稿里的承诺。

[阅读原文](https://openai.com/index/openai-to-acquire-pierre/)
