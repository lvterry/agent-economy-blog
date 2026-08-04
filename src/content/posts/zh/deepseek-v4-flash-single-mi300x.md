---
title: 'DeepSeek V4 Flash 单张 MI300X 满血部署，AMD 推理性价比再获验证'
excerpt: '开源开发者公开单张 AMD MI300X 满血运行 DeepSeek V4 Flash 的生产方案，304B 参数不量化不卸载，解码 168 tok/s。HBM 容量为 H100 两倍、价格约一半，AMD 正成为推理成本叙事里的现实选项。'
date: "2026-08-05"
tags: ["AI-Infrastructure", "Hardware", "GPU", "vLLM"]
category: "AI Infra"
source: "GitHub"
---

一位开发者公开了在生产环境用单张 AMD MI300X 运行 DeepSeek V4 Flash（304B 参数，0731 版 checkpoint）的完整方案：不量化、不卸载权重，156.67 GiB 权重全部放入 192GB HBM3。实测单流解码 168.6 tok/s，预填充约 8.5K tok/s，256K 上下文验证通过，64 路并发无 OOM——与 DeepSeek 官方在 H800 上的表现仍有差距，但已完全可用。

方案的核心价值在于补上了官方路线的空白：vLLM 的官方配方只覆盖 NVIDIA 与更新的 AMD 硬件（MI325X、MI355X）。要在 MI300X 上跑通，需要修复 AMD 特有的 FP8 格式差异、高并发下的 MoE 路由、稀疏 MLA 解码的 HIP-graph 竞态等一揽子问题。作者把这些修复打包成 digest 固定的 Docker 栈，并公开了全部补丁与调优表，任何持有该卡的人都可以复现。

对推理经济学而言，这则实践的意义在于：MI300X 的 HBM 容量是 H100 SXM5 的 2.4 倍，列表价约为其一半。当 304B 级模型可以单卡满血部署，自托管大型模型的硬件门槛与单 token 成本同步下移，AMD 路线正在成为 NVIDIA 之外一个现实且可验证的选择。

[阅读原文](https://github.com/ryanzhou/deepseek-v4-flash-mi300x)
