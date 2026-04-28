---
title: 'All your agents are going async'
excerpt: 'AI agents are shifting from synchronous chat to async background execution, breaking traditional HTTP transport design and requiring new durable transport and durable state solutions.'
date: "2026-04-22"
tags: ["AI-Agents", "Async", "Transport", "Ably", "Architecture"]
category: "AI 智能体"
source: "zknill.io"
---

Traditionally, interacting with AI agents meant opening a chat window, typing a prompt, and waiting for tokens to stream back. This is how ChatGPT, Claude.ai, and Claude Code work—it's the demo mode for virtually every AI SDK.

But now, agents are going async. They're getting cron jobs, webhook support, WhatsApp integrations, phone remote control, scheduled tasks, and workflows. Agents are no longer synchronous chat tools requiring human supervision, but autonomous systems running continuously in the background.

**The Core Challenge**: Traditional HTTP request-response models can't support this async architecture:

- Agents may outlive their callers (cron triggers, long-running tasks, nowhere to push results)
- Agents need to push proactively (completion notifications, human approval steps)
- Callers may switch devices (start on desktop, continue on phone)
- Multi-user scenarios (teams sharing one agent session)

**Industry Response**: Anthropic launched Channels, /loop, /schedule, Routines, and Remote Control; ChatGPT added scheduled tasks; Cursor introduced background agents; Cloudflare launched the Agents platform and Email for Agents. But they mainly solve durable state, not durable transport—still relying on HTTP GET or polling.

Ably is building a durable transport on top of their realtime messaging platform, treating sessions as first-class citizens where humans and agents can connect and disconnect freely without caring about connection state. This may be the complete solution for async agent architecture.

[Read the full article](https://zknill.io/posts/all-your-agents-are-going-async/)
