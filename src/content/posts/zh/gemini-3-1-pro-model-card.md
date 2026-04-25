---
title: 'Google 发布 Gemini 3.1 Pro：新一代多模态推理模型'
excerpt: 'Figma 推出 Claude Code to Figma 功能，让开发者可以直接将代码转换为可编辑的设计稿。在 AI 时代，设计的核心工作是在无限可能性中找到最佳解决方案。'
date: "2026-02-18"
tags: ["Figma", "AI-Design", "Claude", "MCP", "Product-Design"]
source: "Figma Blog"
---

Google DeepMind 发布 **Gemini 3.1 Pro** 模型卡，这是 Gemini 3 系列的最新迭代，也是 Google 目前最先进的复杂任务处理模型。作为原生多模态推理模型，Gemini 3.1 Pro 能够处理来自文本、音频、图像、视频和完整代码库的大规模多模态信息。

## 核心规格

- **上下文窗口**：100 万 tokens
- **输出长度**：64K tokens
- **输入类型**：文本、图像、音频、视频
- **基础模型**：基于 Gemini 3 Pro 架构

## 性能表现

Gemini 3.1 Pro 在多个关键基准测试中显著超越 Gemini 3 Pro 和竞争对手：

### 学术推理

- **Humanity's Last Exam**：44.4%（无工具）/ 51.4%（搜索+代码）- 业界领先
- **ARC-AGI-2**：77.1% - 抽象推理难题
- **GPQA Diamond**：94.3% - 科学知识问答

### 编程能力

- **SWE-Bench Verified**：80.6% - 智能体编程
- **Terminal-Bench 2.0**：68.5% - 终端代码代理
- **LiveCodeBench Pro**：Elo 2887 - 竞争性编程

### 多模态与长上下文

- **MMMU-Pro**：80.5% - 多模态理解
- **MRCR v2 (128k)**：84.9% - 长上下文检索
- **MMMLU**：92.6% - 多语言问答

### 智能体能力

- **APEX-Agents**：33.5% - 长周期专业任务
- **BrowseComp**：85.9% - 智能体搜索
- **MCP Atlas**：69.2% - 多步工作流

## 应用场景

Gemini 3.1 Pro 特别适合以下应用：

- 智能体性能任务
- 高级编程和代码生成
- 长上下文和多模态理解
- 算法开发
- 复杂问题求解和战略规划

阅读完整模型卡：[https://deepmind.google/models/model-cards/gemini-3-1-pro/](https://deepmind.google/models/model-cards/gemini-3-1-pro/)
