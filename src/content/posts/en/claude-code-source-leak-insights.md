---
title: 'Claude Code Source Leak: Community Analysis & Insights'
excerpt: 'npm source map leak exposed 512K lines of code, revealing fake tools, frustration regexes, BUDDY virtual pet, KAIROS/ULTRAPLAN modes, and more.'
date: "2026-04-01"
tags: ["AI-Agents", "Security", "Claude", "Developer-Tools"]
category: "AI 智能体"
source: "Community / nblintao"
---

On March 31, 2026, security researcher Chaofan Shou discovered that Anthropic accidentally included a source map file in the Claude Code npm package, exposing approximately 1,900 files and 512,000 lines of TypeScript source code.

## Notable Leaked Content

- **Fake Tools** — Internal tools for specific scenarios
- **Frustration Regexes** — Using regex instead of models to detect user sentiment
- **Undercover Mode** — Internal development mode
- **BUDDY System** — Upcoming Tamagotchi-style virtual companion (April Fools easter egg)
- **KAIROS Mode** — "Always-on" proactive assistant
- **ULTRAPLAN Mode** — 30-minute remote orchestration mode
- **Model Codenames** — Internal variants: Tengu, Fennec, Capybara

## Technical Architecture Insights

- Bun + React + Ink for terminal UI
- Zod v4 for type safety
- Three-layer context compression pipeline (MicroCompact → AutoCompact → Full Compact)
- AutoDream four-phase memory consolidation flow
- Custom Bun runtime and Zig-compiled token generation

## Root Cause

Likely a bug in the Bun build tool that caused source map files to be included in the published npm package.

Community analysis collection: [https://github.com/nblintao/awesome-claude-code-postleak-insights](https://github.com/nblintao/awesome-claude-code-postleak-insights)
