---
title: '英伟达推进 CUDA 支持 RISC-V 服务器芯片'
excerpt: '英伟达在 Hot Chips 2026 公布将 CUDA 支持扩展到 RISC-V 服务器 CPU，并提出严格的平台要求；RISC-V 得到的是生态兼容，而非摆脱英伟达的钥匙。'
date: "2026-08-25"
tags: ["AI-Infrastructure", "Hardware", "GPU", "RISC-V", "CUDA"]
category: "AI Infra"
source: "Chips and Cheese"
---

在 Hot Chips 2026 上，英伟达介绍了将 CUDA 扩展到 RISC-V CPU 的计划。目前 CUDA 只支持 x86-64 和 aarch64，新增 RISC-V 意味着服务器级 RISC-V 芯片可以成为 GPU 计算的"喂料"主机，为数据中心 CPU 市场引入新的竞争格局。

英伟达开出的条件相当严格：RISC-V CPU 必须达到 RVA23 规范，满足服务器 SoC 与平台规范（包括 RAS、专用安全处理器），支持 ACPI——2025 年 UEFI 论坛才为 RISC-V 补齐这一项，以及 PCIe 缓存一致性和设备间直连。Chips and Cheese 判断，现有绝大多数 RISC-V 硬件短期内都无法满足这些要求，这更多是一个面向服务器市场的长期信号。

更值得玩味的是 NVLink Fusion 的布局：英伟达允许第三方芯片集成其 NVLink IP，用自定义 CPU（可以是 RISC-V）与 GPU 高速互联，类似 GB10 中与联发科的合作模式。对 AI 基础设施而言，这意味着 CUDA 生态在主动扩张而非收缩——RISC-V 得到的是 CUDA 的兼容性，而不是摆脱英伟达的钥匙；对追求多元化的云厂商来说，这仍是在 x86 与 ARM 之外多了一个可选的服务器 CPU 路线。

[阅读原文](https://chipsandcheese.com/p/hot-chips-2026-cuda-targets-risc)
