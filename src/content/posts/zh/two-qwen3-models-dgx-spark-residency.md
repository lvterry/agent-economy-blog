---
title: '在同一台 DGX Spark 上运行两个 Qwen3 模型：本地 LLM 的内存分配实战'
excerpt: '开发者 Devashish Meena 分享了他将 Qwen3-80B 和 Qwen3-4B 两个模型同时部署到一台 DGX Spark 的实际经验，揭示了 gpu_memory_utilization 的常见陷阱和 vLLM 多模型共存的配置方法论。'
date: "2026-06-21"
tags: ["Local-LLM", "GPU", "Infrastructure", "Qwen", "vLLM"]
category: "AI Infra"
source: "Devashish Meena"
---

开发者 Devashish Meena 将其 Hermes 智能体工作站的推理后端改为单台 DGX Spark 后，发现随着智能体数量增长，单模型部署已无法满足并发需求。他的目标是让 Qwen3-80B-Instruct（FP8）承担重推理、Qwen3-4B 处理轻量快速响应，两个模型共存于 119 GiB 统一内存的 NVIDIA GB10 芯片上。

实现过程暴露了几个关键教训。首先是 **gpu_memory_utilization 的常见陷阱**：这个参数是 vLLM 进程启动时对**总 GPU 内存**的百分比，而非空闲内存。两个共存进程的分配比例之和必须低于约 0.95，才能为 CUDA 框架开销留出空间——实际驻留与目标分配之间可能相差 8 GiB 以上。其次是**推理与指令模型的选择**：Qwen3-Next-80B-Thinking 不支持 tool_choice:auto（只输出思考过程而非工具调用），换成 Instruct 版本后才正确响应 Hermes 的智能体工作流。最终配置为 80B（0.80/32k/2 序列）加 4B（0.10/16k/8 序列），两个模型经过反复重启验证后稳定运行。

Meena 建议的核心方法论：先加载大模型，用 `nvidia-smi` 读取实际驻留，再根据空闲池减去约 5 GiB 框架开销来配置小模型的 `gpu_memory_utilization`。目标分配只是规划输入，实际驻留才是真值。

[阅读原文](https://www.devashish.me/p/two-qwen3-models-on-one-dgx-spark)
