---
title: "fcku — Odds Calculator for \"Fuck You\" / Ring of Fire"
description: "Flutter companion app for the drinking card game that recognizes drawn cards on-device with a YOLO model and computes win-probability recommendations via Monte Carlo simulation of the remaining deck."
date: 2026-07-08
featured: true
category: project
tags: ["Computer Vision", "Object Detection", "Monte Carlo Simulation", "On-Device ML", "Mobile"]
image: "/images/projects/fcku-banner.png"
links:
  github: "https://github.com/Spatenfe/fcku"
---

A Flutter companion app for **"Fuck You"** (a.k.a. Ring of Fire), the drinking card game where players guess properties of the next card drawn from a shrinking deck — color, higher/lower, inside/outside a range, suit, then new/old. `fcku` tracks the deck as cards are drawn and tells you the odds before you guess, so the two interesting problems are: figuring out *what card just got drawn* without typing it in, and figuring out *what to guess next* given everything drawn so far.

## Highlights

- **On-device card detection** — an `int8`-quantized YOLO model (via `ultralytics_yolo`/TFLite) trained to detect and classify all 52 playing cards runs entirely on-device, fed by the phone camera.
- Detection runs on a dedicated background isolate (`model_thread.dart`) so inference never blocks the UI or camera preview: frames are captured roughly every 250 ms (backing off to every 3 s after 10 s without a new card), shipped across an isolate `SendPort`, and returned as a ranked list of detected class indices.
- A small state machine (`CardDetector`) deduplicates noisy per-frame detections — it locks onto a candidate class, blocks it from re-firing, and rejects classes that match a card already known to be out of the deck, so a card sitting in frame for a few seconds only counts once.
- **Monte Carlo statistics engine** — rather than a lookup table, the odds for each round are estimated by simulating thousands of full playouts of the remaining deck (`Simulator.runSim`, off the main isolate via `compute()`), tracking a `SimulationDeck` clone of the real deck state through all five rounds until it wins or busts.
- The simulator can play out those rollouts under three different strategies — full frequency-optimal recommendations, a simple heuristic baseline, and blind/uninformed guessing — and the Statistics tab plots per-draw and cumulative win-probability curves for each, turning "how good is this odds engine, really?" into a chart instead of a claim.

---

### How the detection pipeline works

The camera screen keeps a `CameraController` paused until active, and a separate long-lived isolate owns the loaded TFLite model so a still-running inference never stalls the capture loop. Each captured frame's detections come back as an ordered map of class index → summed confidence; `CardDetector.updateDetectionCard` walks that list, skips classes it has already committed to or that the current `PlayDeck` says are already out of play, and only surfaces a new prediction once a class survives that filter — a cheap way to get temporal stability out of a per-frame detector without any extra tracking model.

### How the Monte Carlo engine works

`BaseDeck` tracks which of the 52 cards remain as a 4×13 boolean grid plus running per-suit and per-rank counts, which is enough to compute each round's recommendation analytically (e.g. color odds are just remaining red vs. black counts). The Monte Carlo layer sits on top of that: for each of thousands of runs, `SimulationDeck` clones the current deck state and plays a full randomized game against it — drawing cards, checking whether the chosen strategy's recommendation would have won each round, and advancing or resetting the five-stage sequence (color → higher/lower → inside/outside → suit → new/old) exactly like a real game would. Aggregating win/loss outcomes across all runs, per draw and cumulatively, produces the win-probability curves shown in the Statistics tab — separately for the optimal, heuristic, and blind strategies, so the chart itself shows the size of the edge the app is giving you.
