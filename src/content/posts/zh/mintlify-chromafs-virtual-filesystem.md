---
title: 'Mintlify 构建虚拟文件系统 ChromaFs：让 AI Agent 秒开文档会话'
excerpt: '将文档助手会话启动时间从 46 秒降至 100 毫秒，边际成本从 $0.0137 降至 $0。基于 just-bash 和 Chroma DB 的虚拟文件系统。'
date: "2026-04-04"
tags: ["AI-Agents", "Developer-Tools", "AI-Infrastructure", "RAG", "Performance"]
category: "AI Infra"
source: "Mintlify"
---

Mintlify 分享了他们如何为文档助手构建虚拟文件系统 ChromaFs，解决了传统沙盒方案启动慢、成本高的问题。

## 问题背景

传统的文档 RAG 方案只能检索匹配的文本片段，当答案分布在多个页面或需要精确语法时就会失效。Agent 需要像探索代码库一样探索文档。

但使用真实文件系统沙盒存在严重问题：

- P90 会话创建时间：~46 秒
- 每月 85 万次对话的基础设施成本：超过 $70,000/年
- 需要为每个用户维护独立的微虚拟机

## ChromaFs 解决方案

基于 Vercel Labs 的 just-bash，ChromaFs 将 UNIX 命令（grep、cat、ls、find、cd）拦截并翻译成对 Chroma 数据库的查询：

### 性能对比

指标 | 沙盒 | ChromaFs

P90 启动时间 | ~46 秒 | ~100 毫秒

边际计算成本 | ~$0.0137/对话 | $0（复用现有 DB）

搜索机制 | 线性磁盘扫描 | DB 元数据查询

### 核心特性

- **权限控制** — 基于用户会话令牌在构建文件树前进行路径裁剪
- **分块重组** — 从 Chroma 分块中按 chunk_index 排序重组完整页面
- **惰性加载** — 大文件（如 OpenAPI spec）仅在访问时从 S3 获取
- **只读保护** — 所有写操作返回 EROFS 错误，确保无状态、无清理风险
- **智能 grep** — Chroma 粗筛 + Redis 缓存 + 内存精筛，毫秒级完成

ChromaFs 现已支持每天 3 万+ 对话，为数十万用户提供即时文档助手体验。

原文：[https://www.mintlify.com/blog/how-we-built-a-virtual-filesystem-for-our-assistant](https://www.mintlify.com/blog/how-we-built-a-virtual-filesystem-for-our-assistant)
