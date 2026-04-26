---
title: 'Feldera says AI agents should be embedded in software instead of acting like coworkers'
excerpt: 'Feldera argues that AI agents should become less conversational and more embedded in software systems, using CLIs, declarative specs, reconciliation loops, and CDC streams to reduce cognitive load. The point shifts agent design away from chat interfaces and toward machine-friendly system interfaces.'
date: "2026-04-26"
tags: ["Agentic AI", "AI-Agents", "Infrastructure", "Coding", "Software-Design"]
source: "Feldera"
---

Feldera’s post makes a useful contrarian point: AI agents should not keep trying to act like digital coworkers. They should be embedded deeper inside software itself. Many current agent products mimic human collaboration. They explain, summarize, ask follow-up questions, generate long messages, misunderstand intent, and require supervision. The result is that much of the cognitive load is pushed back onto the user.

The article frames this through Mark Weiser’s idea of calm technology. The most profound technologies disappear into the fabric of everyday life. For agents, that means they should not always stand in front of users and talk. They should run in the background, observe state, react to change, and make progress with less noise. Better prompts are not the root fix. Better software interfaces are.

Feldera points to a few agentic software patterns that already work. A good CLI gives an agent a stable, low-token way to operate a system. Declarative specs, schemas, and manifests describe the desired outcome instead of the step-by-step conversation. Reconciliation loops, popularized by Kubernetes, let systems continuously converge toward a target state and detect drift.

This is an important shift in agent product design. The usual question is how to make agents collaborate more like people. A better question may be how software can become easier for agents to operate. When interfaces, state, and feedback loops are designed well, agents need less conversation and can rely more on events and desired-state convergence.

Feldera then applies the idea to databases and data streams. Most systems expose tables, dashboards, or CSV exports. Agents then have to poll, diff, and infer what changed. With change data capture, the system emits precise streams of inserts, updates, and deletes. Instead of repeatedly asking what the state is now, the agent receives the fact that something changed.

That matters in scenarios like real-time fraud detection. An agent can read news, identify a new fraud pattern, and update the detection logic. The database engine then continuously applies that logic to live data and emits changes when suspicious transactions appear. The agent interprets new information and adapts the logic; the engine handles continuous, low-cost evaluation.

This division of labor is more deployable than asking agents to scan more tables, write more SQL, and produce more summaries. The valuable agent may not be the one that behaves most like a coworker. It may be the one supported by software that gives machines operable interfaces, observable state, and convergent control loops. Agent commercialization will not only happen in new chat entry points. It will also happen when existing software is redesigned for machine use.

[Read the full article](https://www.feldera.com/blog/ai-agents-arent-coworkers-embed-them-in-your-software)
