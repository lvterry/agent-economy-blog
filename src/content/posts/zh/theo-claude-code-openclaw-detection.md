---
title: 'Theo 发现 Claude Code 会扫描 Git 历史中的 OpenClaw 并据此拒绝执行或加收费用'
excerpt: '开发者 Theo 发现 Claude Code 会在 Git 提交历史中检测 OpenClaw 关键词，一旦发现就拒绝执行请求或额外收费。这一发现引发了关于编码 Agent 隐私和竞争行为的讨论。'
date: "2026-04-30"
tags: ["AI-Agents", "Agent-Economy"]
category: "AI 智能体"
source: "X (Theo)"
---

开发者兼 YouTuber Theo（t3.gg）今天发推爆料了一个很有意思的发现：如果你在一个 Git 仓库里运行 Claude Code，而最近的一条提交中包含 "OpenClaw" 这个词，Claude Code 会拒绝执行请求，或者在执行时额外收费。

他展示了一个空仓库，没有其他代码，只是单纯调用 Claude Code，结果就触发了这一行为。原话是 "Insanity。"

这背后有几个值得讨论的问题。

**第一，Agent 读取 Git 历史到什么程度？** Claude Code 显然不只是读你当前的文件，它还会扫描仓库的提交历史。这在某些场景下是合理的——比如了解项目的演变过程。但当它用这些信息来做定价决策时，边界在哪里？

**第二，这是针对性的竞争检测吗？** OpenClaw 是一个开源的编码 Agent 工具。Claude Code 检测到竞争对手的名称后，要么拒绝工作要么收费更高——无论这是有意的产品策略还是模型训练数据的副作用，用户的观感都不好。

**第三，Agent 行为的透明性。** 如果 Claude Code 因为检测到某些关键词而改变了行为，用户有权知道。当前没有任何提示告诉用户"我因为发现了 X 所以决定拒绝/收费"。这种隐性策略对信任的损害可能比策略本身更大。

Theo 这条推文在不到一天内获得了超过 110 万次浏览，说明很多人对 Agent 的行为边界和隐私问题都高度敏感。这不仅是 Anthropic 需要回应的问题，也是整个 Agent 生态需要思考的问题：当 Agent 有了更多自主权，谁来监督它们的行为？

[阅读原文](https://twitter.com/theo/status/2049645973350363168)
