---
title: 'Anthropic 称 Claude 用 11 天完成费马大定理的形式化证明'
excerpt: 'Anthropic 公布费马大定理的首个端到端机器可验证证明：Claude 在 11 天内写出 1300 万行 Lean 代码、证明约 3 万条中间定理，把数学界预计多年的形式化工程压缩成一场多智能体协作。'
date: "2026-09-06"
tags: ["Claude", "Reasoning", "AI-Agents", "Anthropic"]
category: "AI 模型"
source: "Anthropic"
---

9 月 4 日，Anthropic 宣布 Claude 完成费马大定理的首个端到端机器可验证证明：在 11 天内基本自主地写出 1300 万行 Lean 代码、证明约 3 万条中间定理，最终证明规模是社区数学库 Mathlib 的五倍以上，也是迄今最大的 Lean 证明。人类输入只是偶尔的高层指令，而数学界此前估计这项工作需要数年——帝国理工牵头的社区项目 2024 年就已启动，光蓝图就有 86 页。

与之前 AI 在黎曼猜想上做出新数学不同，这次的贡献在于验证：Claude 严格沿 Wiles 证明的 Darmon-Diamond-Taylor 简化版本推进，Lean 仅用三条标准公理即可校验。真正的难点是协调——早期尝试中智能体会丢失项目状态、协作失灵；切换到开源平台 Prove2Me 后，定理依赖图让数十个智能体得以并行分工，Anthropic 还演示了三个 Claude Max 个人订阅账户用三天合作完成另一条数论定理的形式化。

形式化正在成为 AI 时代数学信任的基础设施：当模型批量产出未经人工评审的结果时，机器验证把审稿数年的负担变成可自动执行的检查。这才是这场演示对智能体经济最实质的信号。

[阅读原文](https://www.anthropic.com/research/formalizing-fermats-last-theorem)
