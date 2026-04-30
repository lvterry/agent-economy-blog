---
title: 'Cloudflare and Stripe Launch Projects Protocol for Agent-Driven Account Creation Domain Purchase and Payments'
excerpt: 'Cloudflare and Stripe jointly launch a new protocol enabling AI agents to autonomously create Cloudflare accounts, start paid subscriptions, register domains, and obtain API tokens — all without human form-filling.'
date: "2026-04-30"
tags: ["AI-Agents", "Agent-Economy"]
category: "AI 智能体"
source: "Cloudflare"
---

This announcement genuinely excites me. Not because the technology is mind-blowing — it's actually quite straightforward — but because of what it enables: **AI agents can now participate in real economic activity**.

Cloudflare and Stripe today launched a new protocol that lets agents, through the Stripe CLI, provision a Cloudflare account from scratch, attach a payment method, register a domain, get an API token, and deploy code to production — all in one shot. The human only needs to approve key steps (terms of service, payment confirmation). No sign-up pages, no copy-pasting tokens, no entering credit card numbers.

For anyone watching the Agent Economy, this is a signal event. Agents could already write code, debug, and deploy — but they were always blocked at the last mile: they had no legal identity, couldn't pay, and couldn't register accounts. What Cloudflare and Stripe have done is essentially build **economic personhood for agents**.

Three design decisions stand out:

**Discovery.** The agent queries `stripe projects catalog` and gets a machine-readable list of available services. It can decide which Cloudflare products it needs based on the user's natural language request, without the human needing to know what Cloudflare even offers.

**Authorization.** Stripe acts as the identity provider, attesting the user's identity to Cloudflare. If the user's email isn't registered yet, Cloudflare automatically provisions a new account and returns credentials to the agent. If they already have one, standard OAuth kicks in. Either way, no human form-filling required.

**Payment.** The agent receives a Stripe-issued payment token, never the user's credit card. Each provider also gets a $100/month default spending cap. The agent can spend money, but it can't run wild.

What makes this even more interesting is the openness: Cloudflare explicitly invites any platform with signed-in users to act as the "Orchestrator" — not just Stripe. Coding agents, developer platforms, even future personal AI assistants could all become gateways for agents to provision real-world services.

The parallel that keeps coming to mind is the early internet: payment gateways and identity systems made e-commerce possible. Today's Cloudflare × Stripe protocol might be laying the same foundational layer for the Agent Economy.

[Read the full article](https://blog.cloudflare.com/agents-stripe-projects/)
