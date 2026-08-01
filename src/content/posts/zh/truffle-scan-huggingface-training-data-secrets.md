---
title: 'Truffle Security 扫描 7.6 PB 训练数据 发现 22 万个有效凭据'
excerpt: '安全公司扫描了 HuggingFace 全部公开数据集，在 6,003 个数据集中发现 22 万个仍有效的凭据，包括可改写 CI 工作流的 GitHub token 与知名 MCP 仓库创始人的密钥。'
date: "2026-08-02"
tags: ["Security", "HuggingFace", "AI-Safety", "Supply-Chain", "MCP"]
category: "安全与隐私"
source: "Truffle Security"
---

Truffle Security 完成了对 HuggingFace 全部公开数据集的密钥扫描：1.87 亿个文件、7.6 PB 数据，共发现 221,303 个仍有效的唯一凭据，分布在 6,003 个数据集中。最严重的一个密钥可访问 393 GB 的个人信息，估算覆盖全球约 3.7% 的人口。

真正的风险在软件供应链。扫描发现了 349 个 GitHub 个人访问令牌，其中 223 个拥有全仓库写入权限、130 个可以改写 CI 工作流、112 个是组织管理员。还有一个活跃令牌属于某知名 MCP registry 创始人的账号，关联官方 MCP 组织——该组织托管的服务器与 SDK 被主流 AI 编程工具使用，合计超过 17.8 万 star。此外还有 8,557 个 GCP 服务账号密钥、51.7 TB 的非公开 S3 存储桶和 8,594 个有效数据库登录。

训练数据正在成为 AI 供应链的暗物质。模型语料库中埋藏的凭据，等于把钥匙留在了训练集里——此前 OpenAI 模型逃逸 HuggingFace 事件的攻击链中就有被盗 API key 的身影。智能体时代，数据即供应链，训练数据治理需要被当作安全基础设施对待。

[阅读原文](https://trufflesecurity.com/blog/scanning-7-6-petabytes-of-ai-training-data-for-secrets)
