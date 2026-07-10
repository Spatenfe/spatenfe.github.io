---
title: "Speeding Up pixelNeRF by Upsampling Low-Resolution Images"
description: "Cutting pixelNeRF's inference time ~19x by rendering downsampled images and recovering detail with a learned CNN upsampler, evaluated on SRN-Cars and CO3D-Apple."
date: 2025-02-01
featured: true
category: project
authors:
  - name: "Felix Förster*"
  - name: "Lars Schneider*"
    url: "https://www.linkedin.com/in/lars-schneider-4a6871247/"
  - name: "Tobias Neumeier*"
  - name: "Adrian Struzek*"
tags: ["Computer Vision", "Deep Learning", "3D Geometry"]
image: "/images/projects/pixelnerf-upsampling-banner.png"
bannerImage: "/images/projects/pixelnerf-upsampling-banner.png"
imageFit: "contain"
links:
  writeup: "/pixelnerf-upsampling-report.pdf"
---

A TUM course project with Lars Schneider, Tobias Neumeier, and Adrian Struzek on accelerating [pixelNeRF](https://arxiv.org/abs/2012.02190) — a feed-forward Neural Radiance Field that predicts a scene from as little as one input image — by rendering at a lower resolution and recovering detail with a learned upsampler, rather than paying pixelNeRF's per-ray cost at full resolution.

## Highlights

- Reformulated pixelNeRF training and inference to run on full downsampled images (32×32 instead of the original 128×128) rather than randomly sampled ray batches, so the model can be trained end-to-end on every pixel.
- Recovered detail with a lightweight sub-pixel-convolution CNN upsampler (~200K parameters), trained with a combined MSE + VGG-16 perceptual loss on Flickr30k in the YCbCr domain.
- Cut pixelNeRF's inference time on SRN-Cars by roughly 19x (2.44s → 0.13s) while retaining reasonable rendering quality (SSIM 0.76 vs. 0.88 for the original), with similar gains on CO3D-Apple.
- Benchmarked the trained upsampler alone against bicubic interpolation on Set5 (4x rescaling): the VGG-loss variant reached PSNR 28.41 / SSIM 0.823, beating bicubic's 26.85 / 0.781.

---

### Abstract

In recent years, Neural Radiance Fields (NeRF) has advanced the field of novel view synthesis by enabling high-quality 3D scene reconstruction from sparse input images. However, the computational cost of traditional NeRF models remains a limitation which inhibits its usage in fields with high performance or real-time requirements, such as augmented and virtual reality.

pixelNeRF addresses some of these challenges by learning a scene prior, eliminating the need for per-scene optimization. We speed up pixelNeRF by training on full images instead of randomly sampled rays. To achieve this, we first render at a lower resolution, significantly reducing computational requirements. Afterward, a convolutional upsampler recovers high-resolution details, reducing inference times while maintaining as many details as possible.

We evaluate our approach on the SRN-Cars and CO3D-Apple datasets. Our results demonstrate substantial improvements in inference speed without losing output quality.

### Method

<img src="/images/projects/pixelnerf-upsampling-architecture.png" alt="pixelNeRF architecture: a CNN encoder builds a pixel-aligned feature grid from the input view, sample points along each target-view ray are projected back into that grid, and the resulting features feed an MLP predicting color and density for volume rendering against a rendering loss" class="mx-auto w-full" />

Instead of processing randomly sampled rays, the model is trained on full but downsampled images — 32×32 in place of the original 128×128 — reducing computational load during both training and inference. At test time, pixelNeRF renders a low-resolution image which is then scaled back up to the original resolution by a neural upsampler based on a sub-pixel convolutional architecture. The pixelNeRF network and the upsampler are trained separately rather than end-to-end, and a VGG-16 perceptual loss is added alongside MSE during upsampler training to push for sharper, more detailed output.

### Results

**Upsampler alone.** Evaluated on the Set5 benchmark at a 4x rescaling ratio, the upsampler's larger (~200K-parameter) variant trained with the VGG perceptual loss reached PSNR 28.41 / SSIM 0.823, outperforming both its MSE-only counterpart and bicubic interpolation (26.85 / 0.781) — confirming the perceptual loss meaningfully improves reconstruction quality:

<img src="/images/projects/pixelnerf-upsampling-upsampler-grid.png" alt="Upsampler comparison on a Set5 image: ground truth and downsampled model input alongside the large upsampler trained with MSE vs. MSE+VGG loss" class="mx-auto w-full max-w-md" />

**pixelNeRF + upsampling.** Combining the downsampled pixelNeRF with the trained upsampler cut SRN-Cars inference time from 2.44s to 0.13s per view — roughly a 19x speedup — while keeping SSIM at 0.76 versus 0.88 for the original full-resolution model. CO3D-Apple showed a comparable trade-off. The remaining quality gap comes mostly from the extreme 16x downsampling factor and the upsampler's relatively simple architecture, both flagged as the clearest directions for future work.

---

F. Förster, L. Schneider, T. Neumeier, and A. Struzek, "Speeding Up pixelNeRF by Upsampling Low-Resolution Images," Technical University of Munich, 2025. [Paper PDF](/pixelnerf-upsampling-report.pdf).
