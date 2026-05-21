---
title: "Qwen3.7-Max Built for the Agent Frontier"
excerpt: "Alibaba's Qwen3.7-Max achieves breakthroughs in coding agents, MCP integration, and long-horizon autonomous execution, including a 35-hour fully autonomous GPU kernel optimization achieving 10x speedup."
date: "2026-05-21"
tags: ["Agent", "AI-Agents", "MCP", "Coding", "Qwen"]
category: "AI 智能体"
source: "Qwen"
---

Alibaba Cloud has released Qwen3.7-Max, its latest flagship model purpose-built for the agent era. Unlike most models optimized for chat or single-turn reasoning, Qwen3.7-Max was designed from the ground up as an "agent foundation" — equally capable of writing and debugging code, automating office workflows through MCP integration, and sustaining autonomous execution across hundreds or thousands of steps.

On benchmarks, Qwen3.7-Max delivers standout results: 69.7 on Terminal Bench 2.0 (beating DeepSeek V4 Pro Max at 67.9), 60.6 on SWE-Pro, and 78.3 on SWE-Multilingual. More notably, it achieves top scores on agent-specific benchmarks like MCP-Mark (60.8) and MCP-Atlas (76.4), demonstrating robust tool-use and workflow orchestration capabilities.

The most striking demonstration is a fully autonomous GPU kernel optimization. Running continuously for ~35 hours, Qwen3.7-Max performed 1,158 tool calls and 432 kernel evaluations to optimize the SGLang Extend Attention kernel on an Alibaba PPU architecture it had never encountered before — achieving a 10x geometric mean speedup. Throughout the process, the model diagnosed compilation errors, fixed correctness bugs, identified performance bottlenecks through runtime profiling, and redesigned the kernel architecture multiple times.

Qwen3.7-Max also shows strong cross-framework generalization, performing consistently whether deployed through Claude Code, OpenClaw, or Qwen Code. This cross-harness robustness is critical for the emerging agent ecosystem.

The model is available via Alibaba Cloud Model Studio's API, supporting both OpenAI-compatible and Anthropic-compatible protocols for direct integration with existing agent frameworks.

[Read the full article](https://qwen.ai/blog?id=qwen3.7)
