---
title: "Claude 网页端已经内置了一套应用部署平台"
excerpt: "第三方逆向分析显示，Claude 网页端使用 Firecracker 微型虚拟机运行编码任务，并包含未公开的 Antspace 部署协议、应用生成器和企业自带云环境支持。"
date: "2026-09-14"
tags: ["AI-Infrastructure", "Claude-Code", "MCP"]
category: "AI Infra"
source: "AprilNEA"
---

开发者 AprilNEA 对自己使用的 Claude Code Web 环境进行逆向分析，发现它并非简单的远程终端，而是一套从隔离运行、代码生成到应用部署的完整基础设施。分析使用的是虚拟机内可用的 Linux 工具，没有利用漏洞或提权；相关二进制分析和协议记录也已公开。不过这些结论来自第三方观察，Anthropic 尚未公开说明其中的内部产品名称与规划。

运行层采用 Firecracker 微型虚拟机，单个会话配置为 4 个虚拟 CPU、16GB 内存和 252GB 磁盘。环境通过冻结快照恢复，而不是每次完整启动；一个精简的自定义进程充当 PID 1，负责 WebSocket 连接、进程生命周期、资源限制和文件系统挂载。内存清零、随机数重新播种、JWT 验证和令牌清理等措施则用于隔离不同会话。

更值得注意的是，一份未去除调试符号的 Go 二进制暴露了内部组件结构。研究者从中识别出名为 Baku 的网页应用生成环境、Supabase 的 MCP 工具、自带云环境支持，以及未公开的 Antspace 部署客户端。其流程会在本地构建应用、上传压缩产物，再以流式状态返回打包、构建和部署进度；Baku 的默认部署目标是 Antspace，Vercel 作为另一种选择存在。

这意味着 Claude 网页端正在把编码智能体所需的沙箱、后端服务和托管能力收进同一条工作流，让用户从自然语言描述直接走到可运行应用。对智能体基础设施市场而言，竞争边界可能从“谁能更好地写代码”扩展到“谁控制执行与部署”。但二进制带有 staging 标识，分析记录也只对应 2026 年 3 月的一次环境快照；它能证明当时已有可工作的内部架构，不能证明 Anthropic 必然会把 Antspace 作为独立公共产品推出。

阅读完整文章：[https://aprilnea.me/en/blog/reverse-engineering-claude-code-antspace](https://aprilnea.me/en/blog/reverse-engineering-claude-code-antspace)
