---
title: "Microsoft 开源 pg_durable，将持久化执行引擎嵌入 PostgreSQL"
excerpt: "Microsoft 发布开源 PostgreSQL 扩展 pg_durable，将持久化执行模式直接引入数据库内部，无需外部编排系统即可实现容错工作流——这对智能体状态管理意义重大。"
date: "2026-06-06"
tags: ["Infrastructure", "Durable-Execution", "PostgreSQL", "Microsoft"]
category: "AI Infra"
source: "GitHub/Microsoft"
---

Microsoft 今日开源了 pg_durable，一个将持久化执行（Durable Execution）能力直接嵌入 PostgreSQL 的数据库扩展。

持久化执行是一种正在快速成为标准范式的工作流模式：将业务流程定义为可恢复的函数，每个步骤完成后 checkpoint 状态，即使数据库崩溃、重启或某一步失败，执行也能从最近的可恢复断点继续，而不需要人工重建状态。

pg_durable 的核心创新在于，它把这一能力直接放进了 PostgreSQL 内部，而不是依赖 Temporal、Airflow、Step Functions 这样的外部编排服务。团队可以用纯 SQL 定义容错工作流，包括分支、并行扇出、API 调用、条件判断等模式，而 checkpoint、重试、补偿等机制由扩展自动处理。

从智能体经济的角度看，这解决了一个长期存在的架构难题：智能体工作流的状态管理。当前大多数 AI agent 应用的状态要么跑在应用层的内存中（崩溃即丢失），要么依赖外部状态数据库加轮询 worker 拼凑。pg_durable 提供了一个更优雅的方案——工作流逻辑与数据共存于数据库，用 PostgreSQL 的事务保证作为可靠性基石。

Microsoft 将 pg_durable 定位为零额外基础设施的解决方案：它作为 PostgreSQL 扩展运行，不需要 Redis、不需要额外的 worker 集群、不需要独立的状态存储。这降低了构建可靠 agent 工作流的入门门槛，尤其适合已经将数据放在 Postgres 中的团队。

该扩展已集成进 Azure HorizonDB（Microsoft 的新一代 PostgreSQL 云服务），源码以开源形式发布在 GitHub。

[阅读原文](https://github.com/microsoft/pg_durable)
