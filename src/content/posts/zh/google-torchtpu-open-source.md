---
title: '谷歌和 Meta 开源 TorchTPU，让 PyTorch 代码改一行就能跑在 TPU 上'
excerpt: 'TorchTPU 是谷歌与 Meta PyTorch 团队合作开发的原生 PyTorch TPU 后端，把 .to("cuda") 改成 .to("tpu") 就能运行，支持 eager 模式和 torch.compile，并已在下载量最高的 5,000 个 Hugging Face 模型上验证开箱即用。'
date: "2026-10-21"
tags: ["TPU", "AI-Infrastructure", "Google", "Open-Source"]
category: "AI Infra"
source: "PyTorch Blog"
---

谷歌和 Meta 的 PyTorch 团队合作开发的 TorchTPU 已经开源。这是一个原生的 PyTorch TPU 后端，项目 2025 年年中在谷歌启动，目标是让 PyTorch 直接跑在 TPU 上。按官方说法，迁移现有代码只需要很小的改动，比如把 `.to("cuda")` 改成 `.to("tpu")`。官方也提醒，这样改只能保证模型跑起来，要拿到 TPU 的峰值性能，还得针对形状、切分和算子做优化。

此前的方案是 2020 年推出的 PyTorch/XLA。谷歌在文章里列了它的几个问题：需要侵入式地改源码来标出可编译区域，编译延迟严重，不支持 PyTorch 原生的 eager 模式，对新的分布式原语也跟得很慢。TorchTPU 反过来把 eager 执行放在首位，运行时不依赖 JAX，torch.compile 基于 TorchDynamo，分布式方面支持 DDP、FSDP、DTensor 等常用写法。它还新增了一种叫 DeferAndFuse 的 eager 模式，把多个算子延迟合并后执行，官方称可比逐个执行的默认模式快 50% 以上。

模型覆盖方面，谷歌称已在下载量最高的 5,000 个 Hugging Face 模型上验证了开箱即用，涵盖 Qwen、DeepSeek、Gemma、Llama、Whisper、BERT、ViT 等。文中给出的数据是：测试的 4,917 个模型中 98% 能跑通不崩溃，657 个代表性架构里 97% 与 GPU 数值一致。TorchTPU 已经在一些最大的 Google Cloud 客户那里用于生产环境的推理和训练，也接入了 vLLM、SGLang、TorchTitan、Ray 和 TorchRec。

这件事的意义在于迁移成本。TPU 过去主要服务 TensorFlow 和 JAX 生态，而大部分模型代码是用 PyTorch 写的。如果改一行代码就能跑、再按需优化，PyTorch 用户转向 TPU 的门槛会低很多，谷歌也就多了一张和英伟达 CUDA 生态竞争的牌。

[阅读原文](https://pytorch.org/blog/introducing-torchtpu/)
