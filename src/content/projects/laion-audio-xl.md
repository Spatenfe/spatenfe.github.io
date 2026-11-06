---
title: "LAION-Audio-XL: A Web-Scale Corpus and Scaling Studies for Contrastive Language-Audio Pretraining"
description: "A web-scale corpus of 365M audio clips with 707M captions, compute scaling laws for contrastive language-audio pretraining, and the CLAP2 model family."
date: 2026-11-01
featured: true
category: research
venue: "Preprint"
authors:
  - name: "Gijs Wijngaard*"
  - name: "Felix Förster*"
  - name: "Ross Wightman"
  - name: "Marianna Nezhurina"
  - name: "Christoph Schuhmann"
  - name: "Jenia Jitsev"
  - name: "A. Sophia Koepke"
    url: "https://akoepke.github.io/"
bibtex: |
  @misc{wijngaard2026laionaudioxl,
    title     = {{LAION-Audio-XL}: A Web-Scale Corpus and Scaling Studies for Contrastive Language-Audio Pretraining},
    author    = {Wijngaard, Gijs and F{\"o}rster, Felix and Wightman, Ross and Nezhurina, Marianna
                 and Schuhmann, Christoph and Jitsev, Jenia and Koepke, A. Sophia},
    year      = {2026},
    note      = {Preprint},
  }
tags: ["Audio-Language Models", "Contrastive Learning", "Scaling Laws", "Datasets"]
image: "/images/projects/laion-audio-xl-logo.png"
imageFit: "contain"
imagePadding: false
links:
  github: "https://github.com/LAION-AI/clap2"
  projectPage: "https://projects.laion.ai/clap2/"
---

Joint work with LAION, the Jülich Supercomputing Center and the MuMoL group at TUM on scaling contrastive language-audio pretraining (CLAP).

## Highlights

- Collected 1.48B audio clips from academic datasets, internet datasets, web collections, Common Crawl and YouTube, and curated them into LAION-Audio-XL: 365M clips, 707M captions and 1.39M hours of audio, with short and long captions generated for clips that lacked them.
- Derived compute scaling laws for CLAP: compute-optimal training data grows about 1.4× faster than model size, so extra compute should go mostly to more data.
- Released CLAP2, a family of five models (27M to 340M parameters) with a NaFlex audio encoder. CLAP2-L reaches 53.6% on MAEB-30, the best score of any model trained from scratch on the MAEB leaderboard, and even the smallest CLAP2-XXS beats every earlier CLAP-style model.
- Dataset, captions, checkpoints and code are public: [code](https://github.com/LAION-AI/clap2), [dataset](https://huggingface.co/datasets/laion/laion-audio-xl), [models](https://huggingface.co/collections/laion/laion-audio-xl-and-clap2).

---

\* Equal contribution.
