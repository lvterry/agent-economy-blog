---
title: 'DeepSeek 开源了自家生产环境的推理框架 DeepInfer，支持的硬件只有英伟达 Blackwell 和华为昇腾 950'
excerpt: 'DeepSeek 以 Apache 2.0 协议开源推理框架 DeepInfer，目前支持 DeepSeek-V4.1-Flash，硬件清单只列了英伟达 SM100 GPU 和华为昇腾 950 NPU，组成完整推理服务所需的 KV cache 系统、预填充/解码分离和负载均衡没有放出来。'
date: "2026-10-21"
tags: ["AI-Infrastructure", "Open-Source", "GPU", "Hardware"]
category: "AI Infra"
source: "GitHub"
---

DeepSeek 在 GitHub 上开源了 DeepInfer，按官方说法，这就是支撑 DeepSeek 大规模线上服务的高性能推理框架。这次放出的是离线推理版本，采用 Apache 2.0 协议，目前只支持一个模型：DeepSeek-V4.1-Flash。

功能清单基本是 DeepSeek 自家技术栈的合集。内核层用的是 FlashMLA、DeepGEMM、DeepEP、TileKernels、DeepSelect 等自研库，外加自定义的 TileLang 内核；并行方面支持注意力数据并行、均衡的上下文并行，以及 MoE 专家并行加 EPLB 负载均衡。解码加速靠 DSpark，用草稿 token 做投机解码，再根据置信度安排验证。此外还有零开销的异步批调度、结构化输出，以及批次无关推理和确定性采样：同样的输入和采样参数，无论和哪些请求拼在一个批次里，都能得到完全相同的结果。后两项目前只在英伟达平台上可用。

最值得注意的是硬件清单：只有英伟达 SM100 GPU（Blackwell）和华为昇腾 950 NPU 两种，Hopper 不在列表里。昇腾与英伟达最新一代并列出现在一家头部模型厂商的生产框架里，说明 DeepSeek 已经把国产算力当成正式的部署目标，而不只是适配。

不过这次开源并不是一套拿来就能上线的服务。README 写明，组成完整推理服务还需要三样东西，这次都没有放出来：KV cache 系统、VE/预填充/解码分离（官方称大部分引擎功能已经实现），以及预填充和解码两侧数据并行副本之间的负载均衡。DeepInfer 最初主要基于 vLLM 构建，也借鉴了 SGLang 和 TensorRT-LLM。

[阅读原文](https://github.com/deepseek-ai/DeepInfer)
