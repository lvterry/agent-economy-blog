---
title: "Google 发布 Gemma 4 QAT 模型，边缘推理内存降至 1GB"
excerpt: "Google 推出量化感知训练优化版 Gemma 4 模型，E2B 移动版仅需 1GB 内存，为智能体在手机和笔记本上本地运行扫清了关键障碍。"
date: "2026-06-06"
tags: ["AI-Infrastructure", "Google", "Model-Compression", "Edge-Computing"]
category: "AI 模型"
source: "Google"
---

Google 今日发布了 Gemma 4 系列的量化感知训练（QAT）优化版 checkpoint，重点瞄准移动端和消费级 GPU 上的本地推理。

核心数字很直接：E2B 模型移动量化版的内存占用降至 1GB。这意味着在手机上运行中等参数量的开放权重模型，已经从实验室可能性变成了可落地的现实。

QAT 的关键优势在于"在训练中模拟量化"。传统做法是先训练完整精度模型，再后训练量化（PTQ）压缩——压缩过程总会损失质量。QAT 让模型在学习过程中就适应低精度表示，量化后的质量损失显著低于 PTQ。Google 此次提供了面向 Q4_0 格式的通用 QAT checkpoint，以及面向移动设备定制的专有量化方案。

移动量化方案有几项值得注意的工程选择：静态激活（预计算缩放参数，减少运行时算力消耗）、通道级量化（适配移动加速器原生计算）、针对 token 生成层采用 2-bit 极致压缩同时保留推理层高精度、以及针对 Embedding 和 KV Cache 的专门优化。

对智能体经济而言，这一进展打开了一个重要方向：本地 agent 推理。如果中小模型可以在用户设备上运行，隐私敏感型的个人 agent、离线场景的自动化工具、以及延迟敏感的实时辅助 agent 将不再完全依赖云端 API。Gemma 4 QAT 配合 LLM.cpp、Ollama、MLX、LiteRT-LM 等工具链，已经形成了从模型权重下载到本地部署的完整路径。

[阅读原文](https://blog.google/innovation-and-ai/technology/developers-tools/quantization-aware-training-gemma-4/)
