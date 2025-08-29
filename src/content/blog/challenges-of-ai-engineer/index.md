---
title: "Frustrations of an \"AI hype era\" AI engineer (Part 1)"
description: "MLEs vs. software engineers: the fight over AI leadership"
date: 2025-08-29
draft: false
---

We, software engineers, are lucky to live in the after-ChatGPT era. Software engineering is on steroids: we've got the Copilot/Cursor/Windsurf tools of the world, and the Lovable/Replit/Bolt tools of the world. It's easier than ever to prototype and resurrect those old side projects.

However, there's an aspect of our new lives that's being overlooked amid all this: the frustrations and challenges we face at work, especially in mid- to large-size companies. So I thought I'd share some of those frustrations in a series of posts for anyone who shares them—to say: you are not alone.

### MLEs vs. software engineers: the fight over AI leadership

#### Why does everyone want to work on AI projects now?

- An enormous amount of money is being poured into companies, pushing them to do anything with AI. This opens opportunities for more resources and influence that are up for grabs. Every manager, director, software engineer, and product manager wants a piece of it.

- The implementation of "intelligent software" has seen a paradigm shift after the introduction of ChatGPT, thanks to the self-supervised training behind these models that enabled *generally smart* general-purpose conversational systems. As a result, spinning up an AI project or adding an intelligent feature has never been easier.

- We've witnessed rapid progress in the past two years like never before. Some AI leaders warn that many jobs (including software engineering) could be automated; others suggest traditional programming may become less essential. We've also seen AGI timelines shift and demos like Devin. This made many people (especially those following AI news) fear for their jobs and worry about becoming irrelevant. As a result, employees are in panic mode, trying to board the AI bus as soon as possible because they keep hearing: "AI will not replace you; someone using AI will."

- AI projects are cool and trendy!

#### Competing instead of collaborating

Traditionally, there were clear boundaries between the job of a software engineer and a machine learning engineer. The latter worked on dataset management, data labeling, ETL systems, collecting behavioral signals, training models, and deploying them. The former focused on developing deterministic software, testing it with unit/component/E2E tests, integrating it with ML models (if any), and deploying it.

In the new era of intelligent software development, the two realms bleed into each other. This requires collaboration between machine learning engineers and software engineers to bridge the gap between the disciplines. This is where the new AI engineering role should form. Instead, because both groups are competing to pursue AI projects, as discussed above, plus a bit of ego and survival mode, the two groups often collide.

On one side you've got the machine learning/data science folks claiming they are the AI OGs, relying on a legacy of training NLP/vision/recsys/time-series forecasting/clustering/classification models and on the data literacy the new job requires.

On the other side you've got software engineers claiming that they, "unlike MLEs", can write reliable, scalable, fault-tolerant distributed systems; that using LLMs is "just one extra API call"; blaming the other party for incompetence when it comes to writing high-quality, production-ready software; and asking them to stick to their scientific/experimental-only ecosystem of notebooks and a wild west of dependency management, type checking, virtual environments, and linting (if any).

The reality is, we need to collaborate by sharing the skills from both parties to adapt to the new role of AI engineers:
    - Write reliable, production-ready code
    - Evaluate LLM systems
    - Trace LLM systems and build a habit of looking at our data
    - Experiment and adopt the new paradigm: measure and improve, rather than build, test, and ship

AI engineering isn’t a turf war—it’s a handshake. Teams that combine those disciplines will ship the systems that last.

Stay tuned for the continuation of this series! And feel free to reach out and share any frustration of yours!
