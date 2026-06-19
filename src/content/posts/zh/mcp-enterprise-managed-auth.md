---
title: 'MCP 推出企业托管授权，零配置连接 AI 智能体'
excerpt: 'Model Context Protocol 正式发布企业托管授权扩展，允许企业通过身份提供商集中管控 MCP 服务器访问权限，员工首次登录即可自动连接所有已授权的智能体工具。'
date: '2026-06-19'
tags: ['MCP', 'Enterprise', 'Authorization', 'Security']
category: 'AI Infra'
source: 'Model Context Protocol Blog'
---

Model Context Protocol (MCP) 团队正式发布了企业托管授权扩展。该扩展允许企业通过身份提供商（IdP）集中管理 MCP 服务器的访问权限，员工只需一次登录即可自动连接所有已授权的 AI 智能体工具。

此前，MCP 的标准授权模型要求每个用户单独授权每一台服务器——员工入职时需要逐个连接服务，安全团队无法执行统一策略，个人账号与工作账号混用的风险也难以控制。新扩展通过 Identity Assertion JWT 授权流程，让用户从 IdP 完成单点登录后，自动获取已授权 MCP 服务器的访问令牌，无需逐台确认授权。

该扩展已被 Anthropic、Microsoft 和 Okta 采纳，并得到 Asana、Atlassian、Canva、Figma、Linear 和 Supabase 等服务端的支持。在 Claude、Claude Code、Cowork 和 VS Code 中，管理员可以一次性为整个组织配置 MCP 服务器访问权限，而每位用户登录时即可无缝使用所有已授权的工具。

对于 Agent Economy 的读者而言，这是 AI 智能体从个人玩具走向企业级部署的关键一步。当越来越多的智能体需要访问企业内部工具和数据时，授权管理将是决定其能否规模化落地的核心瓶颈。MCP 的 EMA 扩展通过将身份治理与智能体通信协议深度整合，为这一挑战提供了一个开放标准方案。

[阅读原文](https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/)
