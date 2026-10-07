---
title: 'Docker 发布 Agent 构建器与运行时 智能体可以像镜像一样打包分发'
excerpt: 'Docker 工程团队开源了 docker-agent，用声明式 YAML 定义智能体与多智能体协作，并支持把智能体推送到任意 OCI 仓库像容器镜像一样拉取运行。'
date: "2026-10-08"
tags: ["Agent", "Agent-Tooling", "AI-Agents", "MCP"]
category: "AI 智能体"
source: "Docker"
---

容器生态里最基础的那套分发抽象，正在被搬到智能体身上。Docker 工程团队开源的 docker-agent 已经攒下 3.4k star，它的核心主张很直接：用一份声明式 YAML 描述智能体、工具与协作关系，然后把整套配置当作可版本化、可分发的产物。

配置写起来像这样：指定模型、写一段 instruction、挂上工具集（可以是内置工具，也可以是本地、远程或容器化的任意 MCP 服务器），再用 `docker agent run agent.yaml` 跑起来。它作为 Docker CLI 插件安装，Docker Desktop 4.63+ 已预装。

真正值得关注的是分发层。docker-agent 允许把智能体推送到任何 OCI 仓库，别人用 `docker agent run myorg/agent:tag` 就能拉下来运行。这意味着智能体第一次有了和容器镜像同构的供应链——同一套鉴权、镜像扫描、版本标签和私有仓库体系都能复用。对已经在用容器治理基础设施的团队来说，这比再造一套专有的智能体托管平台要顺手得多。

功能面上它并不单薄：多智能体架构支持自动委派任务，内置 think、todo、memory 等推理工具，RAG 支持 BM25、embedding、混合检索与重排，模型侧不绑定厂商，OpenAI、Anthropic、Gemini、Bedrock、Mistral、xAI 乃至本地 Docker Model Runner 都能接。多智能体编排加 MCP 工具生态，基本覆盖了当前智能体框架的标配。

值得留意的是，Docker 在这个时间点切入，卖的不是模型能力而是运行时与分发标准。当模型能力逐渐商品化，谁掌握智能体的打包、运行与调度抽象，谁就更接近下一层基础设施的定价权。开源加 OCI 复用是它最省力的入场姿势。

[阅读原文](https://github.com/docker/docker-agent)
