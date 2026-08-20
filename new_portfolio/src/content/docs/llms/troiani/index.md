---
title: Troiani
description: Open sub-billion LLM family built from scratch
---

[Troiani](https://github.com/eZWALT/Troiani) is a from-scratch language model family: tokenizer, architecture, data pipeline, trainer, and eval harness, all public.

v1 is a **Mamba-3-dominant hybrid** with sparse GQA, SwiGLU, RoPE + YaRN, and tied embeddings. Target is Troiani-base at ~921M parameters, with headroom for multimodal adapters under 1B.

| Choice | Why |
|---|---|
| Mamba-3 backbone | Selective SSM, linear in sequence length |
| GQA every 6th layer | Sharp retrieval without paying full attention cost |
| SwiGLU 8/3 | LLaMA-style gated MLP, capacity-efficient |
| RoPE + YaRN | Context extension without retraining the stack |

Notes and design logs will live here. Source of truth for the code is the [repo](https://github.com/eZWALT/Troiani).
