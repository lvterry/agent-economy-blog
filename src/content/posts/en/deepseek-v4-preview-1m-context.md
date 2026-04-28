---
title: 'DeepSeek V4 preview brings 1M context into open model competition'
excerpt: 'DeepSeek has released and open-sourced the V4 preview, with Pro and Flash variants and 1M context as the default across official services. The release matters less as a benchmark update than as a push to make long-context agent workflows cheaper and more deployable.'
date: "2026-04-24"
tags: ["DeepSeek", "AI-Model", "Agentic AI", "Coding", "Long-Context"]
category: "AI 智能体"
source: "DeepSeek"
---

DeepSeek has released the preview version of DeepSeek-V4 and open-sourced the weights. The most important signal is not simply another round of model scores. It is the combination of default 1M context length and explicit optimization for agent workflows.

DeepSeek-V4-Pro is the flagship variant, with 1.6T total parameters and 49B active parameters. DeepSeek says it reaches open-source state of the art on Agentic Coding benchmarks, leads open models in world knowledge, and rivals top closed-source systems across math, STEM, and coding evaluations. More importantly, the company says V4 is already being used internally as its agentic coding model, which suggests the release is being tested inside real engineering workflows rather than only benchmark demos.

DeepSeek-V4-Flash is the efficiency-oriented variant, with 284B total parameters and 13B active parameters. It reportedly comes close to V4-Pro on reasoning and matches it on simpler agent tasks, while still trailing on harder tasks. That split matters because agent products are not won by the strongest model alone. They depend on a practical mix of latency, context length, reasoning quality, and API cost.

The infrastructure story is the 1M context default. DeepSeek attributes this to token-wise compression and DSA, or DeepSeek Sparse Attention, which are meant to reduce compute and memory costs for long-context workloads. For agents, long context is not just about pasting more documents into a prompt. It changes what a model can carry across project history, codebases, documents, and longer-running task state.

DeepSeek also says V4 has been optimized for mainstream agent products including Claude Code, OpenClaw, OpenCode, and CodeBuddy. That points to a broader shift: model companies are starting to treat agent frameworks as primary distribution surfaces, not just downstream experiments. More model evaluation will happen inside real toolchains rather than isolated chat sessions.

The API is available now. Developers can keep the same base_url and switch the model parameter to `deepseek-v4-pro` or `deepseek-v4-flash`. Both models support OpenAI ChatCompletions and Anthropic APIs, as well as thinking and non-thinking modes. The older `deepseek-chat` and `deepseek-reasoner` model names will be retired on July 24, 2026, and currently route to V4-Flash non-thinking and thinking modes respectively.

If V4 performs close to DeepSeek’s claims in real use, it could move open models further into the default path for agent applications. Closed models may still lead on the hardest reasoning tasks, but open weights, long context, and lower-cost deployment together change the calculation for many teams deciding what model should sit underneath their workflows.

[Read the full article](https://api-docs.deepseek.com/news/news260424)
