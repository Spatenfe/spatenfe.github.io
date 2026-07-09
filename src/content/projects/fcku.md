---
title: "Playing Card Object Detection"
description: "Flutter companion app for the drinking card game that recognizes drawn cards on-device with a fine-tuned YOLO model and computes win-probability recommendations via Monte Carlo simulation of the remaining deck."
date: 2024-07-08
featured: true
category: project
tags: ["Computer Vision", "Deep Learning", "On-Device ML"]
image: "/images/projects/fcku-banner.png"
bannerImage: "/images/projects/fcku-banner.png"
imageFit: "contain"
links:
  github: "https://github.com/Spatenfe/fcku"
---

A Flutter companion app for **"Fuck You"** (a.k.a. Ring of Fire), the drinking card game where players guess properties of the next card drawn from a shrinking deck — color, higher/lower, inside/outside a range, suit, then new/old. `fcku` tracks the deck as cards are drawn and tells you the odds before you guess, so the two interesting problems are: figuring out *what card just got drawn* without typing it in, and figuring out *what to guess next* given everything drawn so far.

## Highlights

- **On-device card detection** — an `int8`-quantized YOLO model trained to detect and classify all 52 playing cards runs entirely on-device, fed by the phone camera, with no server round-trip.
- Detection runs in the background so inference never blocks the camera preview or the rest of the UI, and a light debouncing layer turns noisy, flickering per-frame detections into a single stable card read — a card sitting in frame for a few seconds only counts once, and cards already known to be out of the deck are ignored.
- **Monte Carlo statistics engine** — rather than a fixed lookup table, the odds for each round are estimated by simulating thousands of full randomized playouts of the remaining deck, tracking a virtual copy of the real game state through all five rounds until it wins or busts.
- Those rollouts are run under three different strategies — full frequency-optimal recommendations, a simple heuristic baseline, and blind/uninformed guessing — and the statistics view plots per-draw and cumulative win-probability curves for each, turning "how good is this odds engine, really?" into a chart instead of a claim.

---

<div class="not-prose mx-auto grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
  <img src="/images/projects/fcku-camera.jpg" alt="On-device camera card detection screen" class="rounded-lg border border-border" />
  <img src="/images/projects/fcku-calculator.jpeg" alt="Odds calculator screen showing per-round recommendations" class="rounded-lg border border-border" />
  <img src="/images/projects/fcku-statistics.jpeg" alt="Statistics screen showing win-probability curves across strategies" class="rounded-lg border border-border" />
</div>

### How the detection pipeline works

The odds engine treats detection as a black box that turns a camera frame into a set of candidate cards with confidences. To make that usable in practice, the app runs inference off the UI thread, throttles how often it re-checks the camera, and adds a small amount of state to smooth over the raw per-frame noise: it locks onto the first confident, still-valid candidate, ignores anything already ruled out by the current deck, and waits before accepting the next new card — giving stable detections without needing a dedicated object-tracking model on top of the detector.

### How the Monte Carlo engine works

The current game state — which cards are gone, whose turn it is, how far into the five-round sequence the group is — is enough to compute some odds directly (e.g. color odds are just the remaining red vs. black count), but the general case is handled by simulation instead of a formula. For each of thousands of runs, the engine plays out a full randomized game from the current deck state, checks whether a given strategy's recommendation would have won each round, and advances or resets through the round sequence exactly as a real game would. Aggregating outcomes across all runs — separately for the optimal, heuristic, and blind strategies — produces the win-probability curves shown in the statistics view, so the chart itself shows the size of the edge the app's recommendations actually provide.
