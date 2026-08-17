---
title: 'Wiz 自主红队智能体借 Copilot Autofix 漏洞入侵 Snowflake 内部 Jira'
excerpt: 'Wiz 的自主 AI 安全智能体在 Snowflake 公开仓库中发现并利用了一个由 GitHub Copilot Autofix 引入的注入漏洞，成功读取其内部 Jira 敏感数据——AI 生成代码与 AI 审查的双重失灵成为焦点。'
date: "2026-08-18"
tags: ["Security", "AI-Agents", "AI-Safety"]
category: "安全与隐私"
source: "Wiz"
---

Wiz 研究团队披露，其自主 AI 安全智能体"Red Agent"在 Snowflake 的 HackerOne 漏洞赏金项目中，独立发现并利用了 snowflake-connector-net 仓库中的一个 GitHub Actions 脚本注入漏洞。该漏洞于 6 月 18 日随 PR #1218 合入生效，而这次改动正是由"Copilot Autofix powered by AI"共同署名提交——它把原本经环境变量和 jq 安全处理的输入模式，替换成了直接拼接 issue 标题的写法，GitHub 的 AI 辅助安全审查没有发现任何问题。

Red Agent 随后展示了完整的自主攻击链：构造恶意 issue 标题逃逸 shell 字符串，通过 out-of-band 回调窃取 Jira API 凭据。首次载荷因语法错误失败后，它自行分析报错并调整 payload 重试，最终以 qa@snowflake.net 身份获得 Snowflake 内部 Jira 的读取权限。Snowflake 在披露当日完成修复并轮换凭据，审计日志确认 Wiz 是唯一访问方。

这件事的意义远超单一漏洞。AI 让代码变更的成本急剧下降，但审查成本没有同步降低——瓶颈正在从"代码生成"转向"代码验证"。而安全侧同样在自动化：红队智能体已经能自主发现、利用并复盘攻击。攻防两端都被 AI 加速，企业安全流程需要重新校准。

[阅读原文](https://www.wiz.io/blog/red-agent-snowflake-copilot-cicd-bug)
