---
title: 'OpenAI 模型、Codex 和托管智能体登陆 AWS'
excerpt: 'OpenAI 与 AWS 扩大战略合作，通过 Amazon Bedrock 提供 GPT-5.5 等前沿模型、Codex 编程代理以及全新托管智能体服务，让企业客户在现有 AWS 环境中使用 OpenAI 能力。'
date: "2026-04-28"
tags: ["OpenAI", "AI-Agents", "GPT"]
category: "行业动态"
source: "OpenAI"
---

OpenAI 和 AWS 今天宣布扩大战略合作，把 OpenAI 的核心能力直接搬进 AWS 生态系统。这次合作涉及三个方向：OpenAI 模型上架 Amazon Bedrock、Codex 在 AWS 上可用，以及全新推出的 Amazon Bedrock Managed Agents powered by OpenAI。

先说模型层面。OpenAI 包括 GPT-5.5 在内的前沿模型将入驻 Amazon Bedrock，企业客户可以在 AWS 的安全控制、身份系统和采购流程里直接调用。这意味着大客户不用在 AWS 和 OpenAI API 之间做架构取舍，安全合规、账单管理都能走 AWS 现成的路径。对于已经在 AWS 上跑核心业务负载的团队，这是从实验到生产的最短路径。

Codex 这边，超过 400 万周活用户的编程代理产品现在可以把 Bedrock 作为后端 provider。企业只要有 AWS commit 和 Bedrock 访问权限，就能用 AWS 的账单、安全和高可用能力来跑 Codex，符合条件的用量还可以计入 AWS 云承诺。这降低了采购摩擦，也让 Codex 在企业级部署中多了一层合规背书。初期支持 Codex CLI、桌面应用和 VS Code 扩展。

最有意思的是第三项——Amazon Bedrock Managed Agents。OpenAI 驱动的托管智能体服务让企业可以直接在 AWS 环境里构建能维护上下文、执行多步工作流、使用工具并跨业务流程行动的 agent。AWS 处理部署、编排和治理层面的基础设施工作，团队只需要专注于让 agent 解决实际问题。这显著降低了企业从 agent demo 走到生产环境的门槛。

整体来看，这次合作对 OpenAI 来说是一次重要的渠道扩张。AWS 拥有全球最大体量的企业客户群，通过 Bedrock 分发模型和 agent 能力，OpenAI 能触达那些不倾向直接调用 OpenAI API、但有巨额 AWS 采购预算的组织。对 AWS 来说，把 GPT-5.5 和 Codex 放进自家平台也是在加固 Bedrock 作为企业 AI 入口的定位。

值得留意的是，OpenAI 和微软的合作关系在今年早些时候经历了重组（微软获得了一定程度的模型自主权），这次与 AWS 的深度绑定意味着 OpenAI 的多云分发策略已经清晰成形。不把鸡蛋放在一个篮子里，而是让客户选择自己的云环境。

[阅读原文](https://openai.com/index/openai-on-aws/)
