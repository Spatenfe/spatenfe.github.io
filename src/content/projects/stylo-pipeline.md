---
title: "STYLO-Pipeline: Semantic Outfit Transformation"
description: "Vision-foundation-model pipeline for virtual try-on and semantic outfit editing — swap backgrounds, generate garments from text, and fit them onto a person with StableVITON."
date: 2025-07-09
featured: true
category: project
tags: ["Computer Vision", "Generative AI", "Virtual Try-On", "Diffusion Models", "Image Editing"]
image: "/images/projects/stylo-pipeline-demo.gif"
bannerImage: "/images/projects/stylo-pipeline-demo.gif"
imageFit: "contain"
links:
  github: "https://github.com/weber-andreas/stylo-pipeline"
---

A TUM practical-course project with Andreas Weber, chaining together six public vision foundation models into a single pipeline for virtual try-on and semantic outfit editing: swap out the background and lighting of a photo, select the person to dress, generate a new garment from a text prompt, and fit it onto them — end to end, no manual masking or compositing. The animation above shows the pipeline's inputs — a source garment, a new background, and a person photo — combining into the fitted result.

<img src="/images/projects/stylo-pipeline-overview.png" alt="Step-by-step pipeline overview: start from a photo of a person, source or generate a garment, find the person, reset the scene, match the light, fit the garment, and get the result" class="float-right ml-6 mb-4 w-full max-w-[320px] rounded-lg border border-border sm:max-w-[400px]" />

## Highlights

- Orchestrated background generation, person segmentation and pose estimation, lighting harmonization, garment sourcing, and virtual fitting into one pipeline built from six independently maintained foundation-model repos, each forked and pulled in as a git submodule.
- Built and owned the backend serving layer: a single-client WebSocket server exposing the pipeline as seven request types (upload, background, design, fit, search_garment, choose_garment, rating), with request validation and session handling per connection.
- Added SLURM cluster support so the pipeline runs on TUM's GPU cluster — allocation scripts and an SSH-forwarding startup script (`run_server.sh`) that let a client connect to a pipeline running on an allocated compute node.
- Worked around integration friction across independently developed foundation models — differing tensor dtypes (a BF16 fix in the background remover), skippable stages, and moving StableVITON's fitting step to run standalone from its own fork.

---

### How the pipeline fits together

Six independently maintained foundation-model repos, each forked and wired in as a git submodule, are chained through a shared image/mask interface. [Yahoo's diffusion background generator](https://github.com/yahoo/photo-background-generation) repaints the scene behind the subject from a text prompt, and [Harmonizer](https://github.com/ZHKKKe/Harmonizer/) corrects the resulting lighting mismatch. The person is located with text-prompted segmentation ([lang-segment-anything](https://github.com/luca-medeiros/lang-segment-anything), i.e. SAM2 grounded by prompts like "person." and "pants.") and posed with [DensePose](https://github.com/facebookresearch/detectron2/tree/main/projects/DensePose). On the garment side, a catalog is searched with CLIP embeddings — captioned offline by [LLaVA](https://huggingface.co/llava-hf/llava-1.5-7b-hf) — or a new garment is generated from a text prompt with [Stable Diffusion 3.5](https://github.com/Stability-AI/sd3.5); either way, [StableVITON](https://github.com/rlawjdghek/StableVITON) then warps and fits it onto the person, guided by the DensePose result.

<div class="clear-both"></div>

### Results

![Result grid: eight source garments fitted onto eight base photos with swapped backgrounds](/images/projects/stylo-pipeline-results.jpg)

Background swaps across the top row, garment try-ons filling the grid below, generated on the [VitonHD dataset](https://drive.google.com/file/d/1tLx8LRp-sxDp0EcYmYoV_vXdSc-jJ79w/view), the standard benchmark for high-resolution virtual try-on.
