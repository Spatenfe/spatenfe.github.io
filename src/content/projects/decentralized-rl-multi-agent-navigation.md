---
title: "Decentralized RL for Multi-Agent Navigation"
description: "Published research on decentralized reinforcement learning for multi-agent vehicle navigation in unconstrained environments."
date: 2025-03-01
featured: true
category: research
venue: "IEEE IV 2025"
tags: ["Reinforcement Learning", "Deep Learning", "Multi-Agent Systems"]
image: "/images/projects/decentralized-rl-preview.png"
imageFit: "contain"
imagePadding: true
bannerImage: "/images/projects/decentralized-rl-banner.png"
links:
  github: "https://github.com/Spatenfe/Decentralized_Reinforcement_Learning_for_Multi-Agent-Navigation_in_Unconstrained_Environments"
  writeup: "https://spatenfe.github.io/Decentralized_Reinforcement_Learning_for_Multi-Agent-Navigation_in_Unconstrained_Environments/"
---

Research at the Computer Vision Group, TUM, on decentralized reinforcement learning for multi-agent vehicle navigation in unconstrained environments — published at IEEE IV 2025. The gif above shows the trained agent driving 10 vehicles around 8 static obstacles simultaneously, each vehicle acting on nothing but its own local view of the scene.

## Highlights

- Proposed a decentralized, kinematics-aware Deep RL agent built on two cooperating Proximal Policy Optimization (PPO) models: a long-range agent that drives each vehicle toward its target, and a short-range agent that takes over for precise parking once it's close.
- Each vehicle acts independently using only its own state, target, and the nearest obstacle/agent — no central coordinator — so the same policy scales from a couple of vehicles to a full intersection.
- Validated across scenarios with up to 20 vehicles and 12 static obstacles, consistently outperforming an attention-based GNN baseline on success-to-goal rate as the scene gets more crowded.
- Conducted an extensive literature review and built the evaluation/visualization pipeline used to compare against the baseline.
- Published at the IEEE Intelligent Vehicles Symposium (IV) 2025, including review of third-party submissions.

---

### Abstract

Supervised learning has demonstrated to be an effective strategy in training neural networks for vehicle navigation. However, it requires labeled data, which may not be available when a large number of vehicles need to be controlled simultaneously. In contrast, Deep Reinforcement Learning (DRL) circumvents the necessity for ground truth labels through environmental exploration. However, most concurrent DRL approaches either tend to operate in the discrete action/state space or do not consider the vehicle kinematics. In this paper, we use DRL to control multiple vehicles while also considering their kinematics. The task is for all the vehicles to reach their desired destination/target while avoiding collisions with each other or static obstacles in an unconstrained environment. For this, we propose a decentralized Proximal Policy Optimization (PPO) based DRL agent that independently provides control commands to each vehicle. The agent is based on two separate PPO models. The first is used to drive each vehicle to the proximity of its target. Once within the target's proximity, the second model is used to park that vehicle at the correct position and orientation. The decentralized nature of the algorithm allows each agent to rely only on information about its current state and target, along with details regarding the closest obstacle/agent. By scaling this approach to all vehicles, simultaneous navigation of multiple vehicles can be achieved. Experimental results show a collective strategy that allows consistent results across a wide range of scenarios while scaling to situations with up to 20 vehicles and 12 stationary obstacles.

### Method

![Overview of the environment and the two-stage PPO agent, from initial scenario to driven trajectories](/images/projects/decentralized-rl-method-overview.png)

Each vehicle observes the scene from its own first-person, translated view of the global state — its own kinematics, its target, and the closest obstacle or agent — and reacts with acceleration and steering commands. Handing off between a long-range PPO agent (coarse navigation toward the target) and a short-range PPO agent (precise final positioning) let the model stay accurate close to the goal without sacrificing the efficiency of the long-range policy.

### Results

For comparison, here is the baseline A-GNN agent on the same 10-vehicle, 8-obstacle scenario shown at the top of the page:

![Baseline A-GNN agent on a 10-vehicle, 8-obstacle scenario](/images/projects/decentralized-rl-baseline-gnn.gif)

Evaluated on 4,062 held-out scenarios spanning 1–20 vehicles and 0–12 obstacles, our agent vs. the baseline:

![Success-to-goal rate and collision rate vs. baseline A-GNN across vehicle/obstacle counts](/images/projects/decentralized-rl-results-table.png)

The agent's advantage grows with scene density: it holds a substantially higher success-to-goal rate than the baseline as vehicle and obstacle counts increase, while keeping a comparably low collision rate.

---

F. Förster, Q. Khan and D. Cremers, "Decentralized Reinforcement Learning for Multi-Agent Navigation in Unconstrained Environments," 2025 IEEE Intelligent Vehicles Symposium (IV), Cluj-Napoca, Romania, 2025, pp. 2067-2073, doi: [10.1109/IV64158.2025.11097389](https://doi.org/10.1109/IV64158.2025.11097389). [Paper PDF](https://cvg.cit.tum.de/_media/spezial/bib/decentralizedrl2025.pdf).
