---
title: "OpenAI 详解低延迟语音 AI 规模化架构"
excerpt: "OpenAI 工程师团队发表深度技术文章，详解如何重构 WebRTC 协议栈，以 Relay + Transceiver 分层架构支撑 9 亿用户的实时语音 AI 交互。"
date: "2026-05-05"
tags: ["OpenAI", "AI-Infrastructure", "WebRTC", "Voice-AI"]
category: "AI Infra"
source: "OpenAI"
---

OpenAI 工程团队发表了一篇极具深度的技术文章，详细介绍了他们如何重构实时语音 AI 的基础设施架构，以支撑全球超过 9 亿周活跃用户的低延迟语音交互。

文章的核心挑战在于：传统的 WebRTC 协议设计假设每个会话独占一个 UDP 端口，这种模型在 Kubernetes 环境下难以扩展——大规模端口暴露在安全性和运维上都是沉重的负担。OpenAI 的基础设施场景下，还需要解决 ICE/DTLS 有状态会话的稳定归属问题，以及全球路由的首跳延迟优化。

解决方案是一套称为 **Relay + Transceiver** 的分层架构。Relay 是位于边缘的轻量级 UDP 转发层，用 Go 语言实现，只解析 STUN 报头中的 ICE ufrag 字段来获取路由信息，然后将数据包转发给后端的 Transceiver。Transceiver 才是真正拥有完整 WebRTC 会话状态的服务——它负责 ICE 连通性检测、DTLS 握手、SRTP 加密解密以及会话生命周期管理。

这种设计的精妙之处在于：Relay 只做一件事——根据协议原生携带的 ufrag 路由提示进行首包路由，之后的 DTLS、RTP、RTCP 数据包在已建立的会话流中直接转发。Relay 的状态是临时的、可丢失的（如果重启，下一个 STUN 包就能重建会话），因此可以水平扩展且运维负担极低。

OpenAI 还部署了 **Global Relay** 舰队，在全球多个地理位置布设 Relay 入口点，配合 Cloudflare 的地理与邻近度路由策略，缩短用户到 OpenAI 网络的第一跳距离。所有 Global Relay 入口实现相同的数据包转发行为，客户端只需连接一个固定的虚拟 IP 和端口。

在实现层面，Relay 通过 `SO_REUSEPORT` 实现单机多工作者共享同一 UDP 端口，用 `runtime.LockOSThread` 将 goroutine 固定到 CPU 核心以提升缓存局部性，预分配缓冲区减少 GC 压力。这些优化使得 Relay 在承载全球实时媒体流量时只需要相对较小的部署规模，无需使用内核旁路框架。

这篇文章的作者包括 WebRTC 原始架构师 Justin Uberti 和 Pion 项目创建者 Sean DuBois（两人现在均为 OpenAI 同事），因此兼具协议设计深度和工程落地经验。对于任何构建实时 AI 语音产品的团队来说，这篇架构解析都是必读的参考资料。

[阅读原文](https://openai.com/index/delivering-low-latency-voice-ai-at-scale/)
