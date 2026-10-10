---
title: '微软发布 MXC 1.0 用操作系统给 agent 划定权限边界'
excerpt: 'MXC 把智能体的权限交给操作系统执行：开发者声明需要哪些文件和网络，容器在运行时拦截越界操作，agent 自己改不了这份策略。'
date: "2026-10-11"
tags: ["AI-Safety", "Security", "Microsoft", "AI-Agents"]
category: "安全与隐私"
source: "Microsoft"
---

微软把 MXC（Microsoft Execution Containers）推到了 1.0 正式版。这是一层策略驱动的执行边界，用来关住模型生成的代码、插件、工具，乃至整个 agent。

官方给出的判断只有一句：agent 不能自己当自己的安全权威。策略写在负载之外，由操作系统强制执行，agent 无法给自己扩权。它举的例子是一个改网站的编码 agent——需要读写源码仓库，需要读生产环境配置，但不该能改配置。没有边界时，agent 可能把改配置当成最快路径。

边界分四档。进程容器跑在 Windows 11、macOS、Linux 上，分别落到 AppContainer、Seatbelt、Bubblewrap；会话容器只有 Windows 有，用独立账户和独立桌面把 agent 与用户隔开，剪贴板、输入、UI 全部分离；WSL 容器照顾 Linux 工具链；MicroVM 还是实验阶段，靠硬件隔离接高风险负载。

策略管五件事：容器类型、启动进程、文件系统读写、网络出入、桌面与 UI 访问。开发者用统一的 JSON schema 和多语言 SDK 声明需求，平台负责映射。运行模式有三种——Enforcement 直接拦截；Learning 拦截并把越界尝试写进 JSON 活动报告；Permissive 放行但记录，适合先摸清权限再收紧。

配套的身份和管理也在铺：Entra 用来把 agent 活动和人的活动分开，Intune 即将管控 Windows 11 上的 MXC 进程容器，Agent 365 的控制延伸到本机 agent；云电脑 Windows 365 已经支持 MXC。

HN 上的质疑落在权限治理本身。有评论说只读访问解决不了问题，一旦接上 JIRA 这类系统，身份模型和资源模型各成一套，复杂度照旧。也有人怀疑这轮文档的严谨度。

[阅读原文](https://blogs.windows.com/windowsdeveloper/2026/10/07/microsoft-execution-containers-policy-driven-containment-for-ai-agents/)
