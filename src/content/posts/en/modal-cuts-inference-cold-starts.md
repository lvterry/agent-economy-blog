---
title: Modal cuts inference cold start times by 40x, pushing serverless GPU limits
excerpt: Modal details its engineering approach combining cloud buffers, custom filesystems, process checkpointing, and CUDA checkpointing to slash inference cold starts from minutes to tens of seconds.
date: "2026-05-19"
tags: ["AI-Infrastructure", "GPU", "Inference", "Serverless", "Infrastructure"]
category: "AI Infra"
source: "Modal"
---
GPU cloud platform Modal has published a detailed technical breakdown of how it reduced AI inference cold start times by 40x — from minutes or even hours down to tens of seconds.

Inference workloads are more variable and less predictable than training, making them a natural fit for serverless computing. But serverless only works when new replicas can spin up as fast as demand changes. Naively launching an SGLang instance serving a billion-parameter LLM on a B200 GPU could take tens of minutes, or stall for hours on GPU availability.

Modal's solution combines four components:

- **Cloud buffers**: maintain a small pool of healthy idle GPUs ready to take on new load
- **Custom filesystem**: lazily serve container images from a content-addressed, multi-tier cloud-native cache
- **Process checkpoint/restore**: skip CPU-side initialization by directly restoring process state into memory
- **CUDA checkpoint/restore**: skip GPU-side initialization by directly restoring CUDA contexts into GPU memory

Together, these techniques shrink inference replica scaling from kiloseconds to tens of seconds, making on-demand GPU compute feel genuinely instant.

For the agent economy, this matters a lot. Agent workloads — from code generation to real-time analysis — frequently require cold-start inference. When startup costs drop to seconds, developers can scale aggressively and slash idle costs. It's a meaningful step toward making AI infrastructure universally accessible rather than reserved for deep-pocketed players.

[Read the full article](https://modal.com/blog/truly-serverless-gpus)
