---
title: '推测解码让部分模型在 AMD GPU 上快了近三倍'
excerpt: 'vLLM 在 AMD MI300X 与 MI355X 上测试五种推测解码方法，部分 Gemma、Kimi 和 MiniMax 模型的输出吞吐达到常规解码的两倍以上，但收益高度依赖模型、任务与候选长度。'
date: "2026-09-08"
tags: ["vLLM", "AI-Infrastructure", "GPU", "LLM"]
category: "AI Infra"
source: "vLLM"
---

vLLM 发布了一组在 AMD Instinct MI300X 与 MI355X GPU 上运行推测解码的实测结果，覆盖原生 MTP、Gemma 4 MTP、EAGLE-3、DFlash 和 DSpark 五种方法，以及 Gemma、Qwen、Kimi 与 MiniMax 等模型。它要解决的是自回归生成的串行瓶颈：先由较轻的草稿组件预测多个后续 token，再让目标模型一次验证；只有通过验证的候选才会写入输出，最终决定权仍在目标模型。

部分组合的提升很明显。Gemma 4 26B 使用 DFlash 时，在 MATH500 与 HumanEval 上的最高输出吞吐分别达到常规解码的 2.87 倍和 2.79 倍；使用 Gemma 4 MTP，在 GSM8K 与 MBPP 上也达到 2.74 倍和 2.62 倍。Kimi K2.5 使用 EAGLE-3 最高达到 2.33 倍，DFlash 最高达到 2.68 倍；MiniMax M3 使用 EAGLE-3 在 HumanEval 上达到 2.09 倍。

这些数字不能直接推广到所有部署。Qwen3 8B 的 DFlash 提升只有 1.08 至 1.27 倍，EAGLE-3 在 MATH500 上甚至仍低于基线。同一家族内，Qwen3.6 27B 与 35B-A3B 的最佳方法也不同。推测长度同样没有统一答案：DFlash 和 DSpark 在候选长度为 7 时经常表现较好，继续增加候选却不一定提高吞吐；除原生 MTP 外，多数方法还要额外加载草稿权重，占用 GPU 显存。

对智能体产品而言，推理优化正在从「换一块更快的卡」变成模型、草稿器、任务负载与运行时的联合调参。代码生成、工具调用和多语言任务会产生不同的候选接受率，因此生产环境需要用真实请求测量吞吐、平均接受长度和各位置接受率。最高的理论候选长度或接受率，都未必对应最低的单位任务成本；真正有价值的是缩短智能体完成整项工作的时间。

阅读完整文章：[https://vllm.ai/blog/2026-08-23-speculative-decoding-amd-gpus](https://vllm.ai/blog/2026-08-23-speculative-decoding-amd-gpus)
