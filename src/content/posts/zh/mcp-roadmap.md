---
title: 'MCP 公布新路线图，智能体身份与消息原语成下一阶段重点'
excerpt: 'MCP 官方发布新路线图，把智能体身份授权、HTTP 原生传输统一、任务类消息原语列为优先方向，协议正从「人来审批」走向「智能体即一等身份」。'
date: '2026-08-23'
tags: ['MCP', 'AI-Standards', 'Agent-Interoperability']
category: 'AI Infra'
source: 'Model Context Protocol Blog'
---

Model Context Protocol 官方发布下一阶段路线图，明确五个优先方向，其中三项对智能体生态影响最大。

首先是智能体消息原语。长时运行的智能体任务不再适配一问一答模式，路线图计划把 Tasks 扩展（SEP-2663）正式纳入规范，并通过 webhook、订阅等服务器主动事件机制，让客户端无需轮询即可接收流式结果，中途也能干预任务走向。

其次是 HTTP 原生传输统一。自 7 月 28 日发布以来，远程 MCP 服务器已与普通 HTTP 负载无异，可在任何现有基础设施上托管。下一步是把本地服务器也统一到 Streamable HTTP 上，让服务端与客户端开发进一步简化。

最具战略意义的是智能体身份与授权。当前 MCP 授权建立在「人在浏览器里点批准」之上，但越来越多的调用方是云上运行、拥有自身身份的智能体——它们代表不在场的用户工作，还会向子智能体委派更小的权限。路线图计划基于 DPoP、Workload Identity Federation 和标准令牌交换，建立识别与信任智能体身份的统一路径，并推动 IETF OAuth 等标准组织演进。

对企业而言，这意味着智能体接入内部系统的授权瓶颈有了开放标准答案；对开发者而言，工具调用结果的契约将被收拢为单一清晰格式，数百工具的服务器也能通过渐进式发现降低上下文负担。

[阅读原文](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/)
