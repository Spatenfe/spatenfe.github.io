---
title: "ML Benchmark for VBF Higgs-Pair Events"
description: "Benchmarking 12+ ML methods, including DeepSets, to classify vector-boson-fusion Higgs-pair events by coupling strength from particle physics simulations."
date: 2026-02-01
featured: true
category: project
authors:
  - name: "Felix Förster*"
  - name: "Lars Schneider*"
  - name: "Johannes Mesner*"
  - name: "Lars Linden"
  - name: "Celine Stauch"
tags: ["Machine Learning", "Deep Learning", "Particle Physics"]
image: "/images/projects/vbf-event-classifier-banner.png"
bannerImage: "/images/projects/vbf-event-classifier-banner.png"
imageFit: "contain"
links:
  github: "https://github.com/Spatenfe/vbf_event_classifier"
  projectPage: "https://spatenfe.github.io/vbf_event_classifier/"
---

A machine-learning benchmark for non-resonant vector-boson-fusion (VBF) Higgs-pair production in the semileptonic decay channel, built with Lars Schneider and Johannes Mesner (TUM), advised by Lars Linden and Celine Stauch (LMU Munich). A modular experimentation framework runs 12 classical ML methods plus a PyTorch MLP and a set-based DeepSets model across a full ablation grid of scaling, sampling, and feature-selection strategies.

## Highlights

- Built a config-driven ML framework with a modular registry system, cartesian-product ablation sweeps, parallel multi-method execution, and VAE-based synthetic minority-class generation for handling severe class imbalance.
- Benchmarked on ~1,044,000 simulated events (52 kinematic features, truth-level Monte Carlo without detector effects) to separate the Standard Model coupling point (cvv = 1) from five anomalous coupling values — a class that makes up just 0.4% of matched events.
- Best single-event accuracy of 78.6% (PyTorch MLP, 3× oversampling, standard scaling); a DeepSets model classifying sets of 10 events jointly reached 99.1% accuracy, showing the coupling signal becomes statistically clear once integrated across multiple events.
- Automated the full reporting pipeline: summary CSVs, confusion matrices, and accuracy/F1 comparison plots across every scaling, normalization, feature-set, and sampling ablation.

---

### Abstract

We present a machine-learning benchmark for non-resonant vector-boson-fusion Higgs-pair production in the semileptonic channel HH → bbWW → bbqqℓν. From truth-level Monte Carlo samples, we build a selected and matched event-level dataset and represent each event with kinematic features for the main physics objects and their combinations. We then study whether this representation can distinguish different values of the coupling scan parameter cvv, with focus on the binary separation of the Standard Model reference point cvv = 1 from the remaining sampled classes. We find that this task is learnable with the available feature set. The full representation performs best overall, while several nonlinear models reach similar accuracy. In contrast, scaling and oversampling show mixed effects, and ensemble methods do not clearly improve on the best individual models. These results show that the matched event representation retains useful information for coupling classification in semileptonic VBF Higgs-pair events.

### Physics Context

![VBF HH semileptonic decay topology: bb WW* → bb qq ℓν with two VBF tagging jets](/images/projects/vbf-event-classifier-topology.png)

VBF Higgs-pair production is a rare Standard Model process whose rate is highly sensitive to the quartic coupling constant κ₂V (the `cvv` parameter). Since VBF HH production hasn't yet been observed, constraining κ₂V requires ML-assisted discrimination of events at the SM point (cvv = 1) from events at anomalous coupling values — here scanned over cvv ∈ {0.0, 0.5, 1.0, 1.5, 2.0, 3.0}. Because the non-SM classes are nearly indistinguishable from each other (5-class accuracy ≈ 20%, equal to random guessing), the task reduces to a binary problem: C₁ vs. C-not-1.

### Dataset & Features

![Top 20 feature correlations with the binary target (cvv=1 vs. other)](/images/projects/vbf-event-classifier-correlations.png)

Each event is described by kinematic four-vector observables of the reconstructed physics objects — 52 features in total after dropping azimuthal angles and non-discriminating jet-level duplicates. Individual feature correlations with the target are weak (the strongest around 0.15), consistent with the coupling signal being a small shape distortion rather than a clean separation — the clearest single-variable separation shows up in the pseudorapidity of the VBF tagging jets. The ~1M-event dataset is [publicly available](https://drive.google.com/file/d/1ByGk8RFu7tXIhCG3FrDvHyXiSnXDaGj9/view?usp=drive_link).

### Results

![Best validation accuracy per method across all ablation configurations](/images/projects/vbf-event-classifier-results.png)

Standard scaling with 3× minority oversampling forms a robust preprocessing baseline across most methods; no ensemble combination beats the best individual model, suggesting they all exploit the same feature correlations. All results are from truth-level simulation without detector effects, using the validation split (no held-out test set) — future work could extend the framework to detector-level data and test whether the DeepSets result holds under more realistic conditions.

---

F. Förster, L. Schneider, J. Mesner, L. Linden, and C. Stauch, "A Machine-Learning Benchmark for Semileptonic VBF Higgs-Pair Events in a Coupling Scan," Technical University of Munich / LMU Munich, 2025. [Paper PDF](https://spatenfe.github.io/vbf_event_classifier/A_Machine_Learning_Benchmark_for_Semileptonic_VBF_Higgs_Pair_Events_in_a_Coupling_Scan.pdf). The DeepSets model builds on a companion [set-based framework](https://github.com/0xReself/particle-physics).
