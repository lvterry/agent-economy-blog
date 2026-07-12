---
title: 'Mesh LLM 发布：用 P2P 网络聚合分散 GPU，实现分布式 AI 推理'
excerpt: '开源项目 Mesh LLM 通过 iroh P2P 网络将用户分散的 GPU 整合为统一推理平台，支持模型拆分跨节点运行，兼容 OpenAI API 和 MCP 协议。'
date: "2026-07-12"
tags: ["AI-Infrastructure", "GPU", "Distributed-Computing", "MCP"]
category: "AI Infra"
source: "Iroh Blog"
---

Iroh 团队上周发布了 Mesh LLM，一个基于 iroh P2P 网络的开源分布式 AI 推理平台。它可以把用户手中分散的 GPU——笔记本电脑、工作站、小型服务器甚至云端实例——聚合为一个统一的推理网格，暴露为兼容 OpenAI API 的单一端点。

核心思路很简单：不再依赖中心化 API 和大型数据中心，而是让用户自己拥有的硬件协同工作。Mesh LLM 支持三种运行模式：在本地 GPU 上运行；路由到已有模型加载的 peer；或者将一个超大模型按层拆分，流水线式地在多台机器上并行推理。这个分片模式（内部代号 "Skippy"）让几台中低端设备也能运行单个设备无法承载的大模型。

架构上，Mesh LLM 完全运行在 iroh 协议之上。每个节点就是一个 iroh 端点，通过 QUIC 连接进行 NAT 穿透和中继回退，无需中心服务器。节点间通过 ALPN 协商区分流量类型——gossip 协议用于 peer 发现和路由，专用通道用于推理请求和分片激活传输。

Mesh LLM 还支持 MCP 协议和插件系统，意味着它可以被 AI Agent 作为工具调用。内置 40 多个模型预配置，从 5 亿参数的小模型到 235B MoE 巨兽均可部署。

对于 Agent Economy 的读者来说，Mesh LLM 的意义在于：它提供了一条从中心化 API 依赖走向自有基础设施的可行路径。当 AI Agent 的推理成本成为规模化瓶颈，能够利用闲置 GPU 组建私有推理网络的能力，将直接改变 Agent 应用的部署和经济模型。

[阅读原文](https://www.iroh.computer/blog/mesh-llm)
