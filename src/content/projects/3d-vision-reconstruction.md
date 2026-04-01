---
title: "3D Vision Reconstruction"
description: "Improving SfM-free 3D Gaussian Splatting for large-surface rendering with blended visibility and error signals."
date: 2026-02-23
featured: true
tags: ["Vision", "Reconstruction", "Deep Learning"]
image: "/images/projects/3d_gaussian_splatting.jpg"
links:
  #writeup: "https://github.com/oscarbreiner"
  github: "https://github.com/oscarbreiner/3dgs-mcmc-boosted.git"
---

Research project at the 3D AI Lab of Prof. Angela Dai on improving Markov Chain Monte Carlo 3D Gaussian Splatting (3DGS-MCMC) for more robust SfM-free reconstruction and stronger large-surface rendering.

## Highlights

- Replaced opacity-only "faithfulness" scoring with a hybrid signal that combines opacity and rendering error contribution, making it easier to remove high-error artifacts.
- Added a visibility-based relocation heuristic that better identifies dominating Gaussians and improves reconstruction of walls and other large planar surfaces.
- Evaluated the method on Mip-NeRF360 and ScanNet++, outperforming the 3DGS-MCMC baseline on most ScanNet++ scenes.

---

Standard 3D Gaussian Splatting delivers fast, high-quality novel view synthesis, but it depends heavily on heuristic density control and strong initialization. 3DGS-MCMC removes several of these constraints by framing optimization as an MCMC process, allowing Gaussians to explore the scene more freely and enabling reconstruction without SfM. However, the baseline uses opacity alone as a proxy for whether a Gaussian is "faithful", which often misses high-opacity artifacts and struggles on broad surfaces such as walls.

This project improves that baseline in two ways. First, it introduces a hybrid noise term based on both opacity and error contribution, which more reliably suppresses harmful artifacts. Second, it uses visibility-aware relocation to target problematic Gaussians more precisely, leading to stronger surface coverage and better planar reconstruction. In practice, these changes are especially helpful on failure cases where the original 3DGS-MCMC method breaks down.
