---
title: 'OpenTPU 把 AI 加速器做成开源项目 由智能体参与设计'
excerpt: '一个从硬件设计到编译器的完整开源加速器，能在 FPGA 上跑通十款现代模型，也逼人重新确认智能体自主性的真实边界。'
date: "2026-10-07"
tags: ["Hardware", "AI-Infrastructure", "TPU"]
category: "AI Infra"
source: "openTPU"
---

**Category is set manually based on editorial judgment, not derived from tags.**

openTPU 想回答两个问题：AI 智能体在硬件设计上能走多远，以及它们能不能造出跑自己推理的芯片。整个加速器放在一个可以完整读完的 monorepo 里——SystemVerilog 硬件设计、指令集、逐位对齐的模拟器、内核语言与编译器，以及驱动真实 PCIe 卡的主机软件。

结果是实的。项目在一块 Inspur YPCB-00338 FPGA 卡（Xilinx Kintex-7）上跑通了十款现代模型，卡上产出的 token 与模拟器逐位一致。最小的 LFM2.5-230M 用 4-bit 量化能跑到 85 tok/s，Qwen3.5-4B 只有 5.9 tok/s，DDR3 带宽利用率普遍在 91% 到 94% 之间。作者说，早期每个模型每秒只能吐几个 token，是靠一轮轮自动迭代优化堆到现在的水平。

HN 上的讨论比项目本身清醒。最高赞的质疑是：这不算 AI 自己造硬件，而是有人让模型搭出硬件仿真环境，再让模型在约束下做优化，循环里始终站着人的提示词。这个区分值得记住，因为它划出了当下智能体自主性的真实位置。

另一个被反复提起的问题是：既然 FPGA 上都能跑，前沿实验室为什么不直接把模型烧进芯片？答案通常落在经济学和物理约束上，而不是能力不足。openTPU 的价值也许不在性能，而在于把从 Python 矩阵乘到硬件走线之间的整条链路摊开给人看。

[阅读原文](https://github.com/FeSens/openTPU)
