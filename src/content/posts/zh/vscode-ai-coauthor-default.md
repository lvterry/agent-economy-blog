---
title: "VS Code 默认启用 AI 共同作者提交标注"
excerpt: "微软在一项仅改动两行的合并请求中，将 git 提交自动添加 AI 共同作者的功能默认开启，引发大规模社区不满。"
date: "2026-04-16"
tags: ["VSCode", "Microsoft", "Coding", "AI-Attribution"]
category: "行业动态"
source: "GitHub"
---

微软在 VS Code 中合并了一个看似微不足道、却引发了激烈争议的改动。

PR #310226 仅修改了两行代码，将 `git.addAICoAuthor` 配置项从默认值 `off` 改为 `all`。这意味着，使用 VS Code 内 Git 功能提交代码时，若编辑过程中有 GitHub Copilot 参与，提交信息中会自动追加一条 `Co-authored-by: GitHub Copilot` 的署名。

该配置提供三个选项：`off`（不添加）、`chatAndAgent`（仅对话和 Agent 场景添加）和 `all`（所有 AI 辅助编辑均添加）。改动生效后，用户若想关闭此行为，需手动在设置中将其改回。

社区反应极为激烈。截至合并时，该 PR 收获仅 2 个 👍 和 372 个 👎，负面反应是正面的一百八十多倍。反对者的核心论据在于：将 AI 协作署名默认为开启，实质上是替用户做了一道关于"什么构成值得署名的贡献"的判断。许多人认为 Copilot 自动补全代码与人类合作者的贡献不可等同视之，默认署名反而稀释了"Co-authored-by"标签的实际意义，甚至可能影响团队 commit 历史的可读性与专业性。

也有用户指出，this 改动在一篇未描述改动动机的 PR 中悄然推进，没有任何设计说明、RFC 或社区讨论，这种"just because we can"的工程决策方式令人不安。

从产品角度看，微软显然希望提高 Copilot 的品牌可见度，并在 AI 辅助编程的学术引用和统计维度上积累数据。但在用户自主权和默认设置哲学之间，这次改动选错了平衡点。

[阅读原文](https://github.com/microsoft/vscode/pull/310226)
