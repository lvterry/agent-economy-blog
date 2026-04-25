---
title: 'Coasts: Localhost Service Isolation for Git Worktrees'
excerpt: 'CLI tool with local UI to run multiple isolated dev environments on one machine. Docker Compose support, AI-agnostic, offline-first.'
date: "2026-03-31"
tags: ["AI-Development", "Developer-Tools", "Git", "Docker"]
source: "Coast Guard"
---

Coasts (Containerized Hosts) is a CLI tool with a local observability UI for running multiple isolated instances of a full development environment on a single machine. It works out of the box with your current setup: no changes to existing application code, just a small Coastfile at your repo root.

## Key Features

- **Build once, run N instances**: Support any number of instances with configurable volume and networking topology
- **Native Git Worktree support**: Check out one coast at a time to bind canonical ports to your host, use dynamic ports to peek into any worktree
- **Docker Compose compatible**: Can boot directly from existing docker-compose.yml
- **AI tool agnostic**: No binding to specific AI providers or agent frameworks, supports Claude Code, Codex, Cursor, etc.
- **Offline-first**: No hosted service dependency, no vendor lock-in risk

## Use Cases

Particularly suitable for AI-assisted development:

- Run multiple agent workspaces simultaneously without interference
- Each worktree has an independent development environment
- Monitor all running services through local UI
- Support HTTPS local development (automatic Caddy certificate management)

## Quick Start

`eval "$(curl -fsSL https://coasts.dev/install)"`
Visit [coasts.dev](https://coasts.dev) for full documentation and installation instructions.

GitHub: [https://github.com/coast-guard/coasts](https://github.com/coast-guard/coasts)
