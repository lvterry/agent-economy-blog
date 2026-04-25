---
title: 'RynnBrain：阿里巴巴开源具身智能基础模型'
excerpt: 'Entire 正在超越代码仓库，构建一个开发者平台，让智能体和人类能够协作、互动和成长。一个新星系的诞生即将到来。'
date: "2026-02-11"
tags: ["AI-Agents", "Agent-Economy", "Future-of-Work"]
source: "Entire"
---

阿里巴巴达摩院近日发布了 **RynnBrain**，一个基于物理现实的具身基础模型（Embodied Foundation Model）。该模型在物理世界理解、空间推理和机器人任务规划方面展现了强大的能力。

## 模型规格

RynnBrain 提供三种模型规格：

- **RynnBrain-2B**：轻量级密集模型
- **RynnBrain-8B**：标准密集模型
- **RynnBrain-30B-A3B**：MoE（混合专家）模型，激活参数 3B

## 核心能力

### 1. 全面的自我中心理解

在细粒度视频理解和自我中心认知方面表现出色，涵盖具身问答、计数和 OCR 等任务。

### 2. 多样化时空定位

具备强大的跨时间记忆定位能力，可精确识别物体、目标区域和运动轨迹。

### 3. 物理空间推理

采用文本和空间定位交替进行的交错推理策略，确保推理过程根植于物理环境。

### 4. 物理感知精确规划

将定位出的可供性和物体信息整合到规划中，使下游 VLA（视觉-语言-动作）模型能够执行具有细粒度指令的复杂任务。

## 专项模型

除基础模型外，达摩院还发布了三个后训练专项模型：

- **RynnBrain-Plan**：机器人任务规划
- **RynnBrain-Nav**：视觉语言导航
- **RynnBrain-CoP**：链式点推理（Chain-of-Point）

## 技术报告与资源

达摩院同时发布了详细的技术报告，并在 Hugging Face 和 ModelScope 上开源了模型权重和代码。

**相关链接：**

- 项目主页：[https://alibaba-damo-academy.github.io/RynnBrain.github.io/](https://alibaba-damo-academy.github.io/RynnBrain.github.io/)
- GitHub 仓库：[https://github.com/alibaba-damo-academy/RynnBrain](https://github.com/alibaba-damo-academy/RynnBrain)
- 在线 Demo：[Hugging Face Spaces](https://huggingface.co/spaces/Alibaba-DAMO-Academy/RynnBrain)
- 技术报告：[PDF 下载](https://alibaba-damo-academy.github.io/RynnBrain.github.io/assets/RynnBrain_Report.pdf)
