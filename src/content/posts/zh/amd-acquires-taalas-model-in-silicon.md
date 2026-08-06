---
title: 'AMD 收购 Taalas 把模型权重蚀刻进芯片'
excerpt: 'AMD 收购了将模型权重直接蚀刻进硅片的 AI 芯片公司 Taalas，早期测试芯片推理速度达每秒 1.7 万 token，为智能体推理开辟了一条新路线。'
date: "2026-08-07"
tags: ["Hardware", "GPU", "AI-Infrastructure"]
category: "AI Infra"
source: "The Register"
---

AMD 宣布收购多伦多 AI 芯片公司 Taalas，交易金额未披露，但据信是完整收购而非人才收购。Taalas 的思路与主流 GPU 截然不同：模型权重不存放在 HBM 显存中，而是直接蚀刻进硅片，形成所谓的模型专用集成电路（MSIC）。其第一代测试芯片 HC1 基于台积电 6nm 工艺，运行 Llama 3.1 8B 时达到每秒 16,960 token——发布时相当于英伟达 GPU 的 48 倍、Cerebras 的 8.5 倍。第二代 HC2 计划今年夏天推出，单芯片支持 200 亿参数，万亿参数模型只需 50 颗加速器。

这笔收购的背景值得玩味：它与英伟达去年 12 月以 200 亿美元许可 Groq 技术的交易同属一个逻辑——为 AI 智能体（如代码助手）提供更快更便宜的高性能推理服务。AMD 计划把 Taalas 芯片与自家的 Instinct 机架组合：GPU 负责计算密集的提示处理，Taalas 加速器专职 token 生成。代价也很明确：一旦部署就被锁死在某个模型上，模型迭代需要重制芯片，不过据称只需更换两层金属层，成本远低于重新流片。

模型蚀刻进硅片是一条与"通用 GPU + 开源模型"路线相反的赌注。它赌的是某些工作负载（尤其是企业私有化推理）会固化在少数模型上，此时专用芯片的性价比优势将远超通用硬件。

[阅读原文](https://www.theregister.com/systems/2026/08/06/amd-acquires-ai-chip-startup-taalas-to-boost-inference-performance-by-etching-models-into-silicon/5284344)
