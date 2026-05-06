---
title: "Anthropic 发布金融行业智能体模板"
excerpt: "Anthropic 推出十款面向金融服务的智能体模板，涵盖路演书制作、KYC 审核与月终结账等场景，并打通 Excel、PowerPoint 与 Outlook，让 AI 智能体真正进入核心金融工作流。"
date: "2026-05-06"
tags: ["Agent", "AI-Agents", "Anthropic", "Agent-Economy"]
category: "AI 智能体"
source: "Anthropic"
---

Anthropic 本周发布了十款面向金融服务行业的智能体模板，配合同步上线的 Microsoft 365 插件生态，试图将 AI 智能体从辅助工具推入银行、保险和资产管理公司的核心业务流程。

这十款模板覆盖了金融从业者最耗时的工作类型，分为两大类别。研究和客户覆盖类包括：路演书制作器（Pitch Builder），可自动生成目标公司列表、可比公司分析并起草路演演示稿；会议准备助理，在客户通话前整理完整简报；财报审阅器，读取财报和电话会议记录并更新模型；模型构建器，从文档和数据源自动搭建财务模型；市场研究员，持续跟踪行业和发行人动态。财务运营类包括：估值复核工具、总账对账工具、月终结账工具、报表审计工具，以及 KYC（了解你的客户）审查工具。

每个模板其实是一套参考架构，打包了三层能力：技能（任务指令和领域知识）、连接器（对数据的受控访问）和子智能体（由主智能体调用的专用模型）。模板既可以作为 Claude Cowork 和 Claude Code 的插件运行，与分析师同机协作；也可以在 Claude Platform 上作为托管智能体（Managed Agent）部署，实现整个流程的自动化调度。

与此同时，Anthropic 还推出了 Microsoft 365 插件，让 Claude 直接嵌入 Excel、PowerPoint、Word 和 Outlook（即将上线）。在 Excel 中，它可以根据文档和数据源构建财务模型，跨工作簿审计公式；在 PowerPoint 中，起草的演示稿会在底层数据变化时自动更新；在 Outlook 中，它可以作为参谋长整理收件箱、安排会议。Claude 在四个应用之间携带上下文，Excel 中开始的模型工作无需在 PowerPoint 中重新解释。

这些更新与 Claude Opus 4.7 配合使用效果最佳——后者在 Vals AI 的金融智能体基准测试中以 64.37% 的成绩位居行业第一。

[阅读原文](https://www.anthropic.com/news/finance-agents)
