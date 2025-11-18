# GastroVision Class Challenge – Final Project (CSC-722-UT1)

Welcome to the **GastroVision Class Challenge**, the final project for  
**Machine Learning Fundamentals (CSC-722-UT1), University of South Dakota**.

In this challenge, you will build and evaluate deep learning models for **endoscopic image classification** using the **GastroVision** dataset. The goal is to design a robust and well-documented solution that can generalize to clinical-like data.

> 🎯 **Deliverables (for grading):**
> 1. **Working note paper** (max 2 pages, PDF)
> 2. **Model weights** (e.g., `model_best.pth` or `model_best.h5`)
> 3. **Predictions file** on the test set (e.g., `predictions.csv`)
> 4. Clean, reproducible **code** in this repository (or your fork)

---

## 1. Challenge Overview

The task is **multi-class classification** of endoscopic images into clinically meaningful categories (example configuration):

- **Colon polyp**
- **Ulcer**
- **Normal mucosa & bowel**
- **Colorectal cancer**

You are free to:
- Use **any deep learning architecture** (CNNs, Transformers, Mamba, etc.).
- Apply **data augmentation**, **transfer learning**, or **regularization techniques**.
- Experiment with **class balancing**, **loss functions**, and **optimization strategies**.

You will be evaluated on:
- **Quantitative performance** (accuracy, F1-score, etc.).
- **Reproducibility & code quality**.
- **Scientific reasoning** (clarity of your working note).
- **Critical analysis** (error analysis, limitations, and future work).

---

## 2. Dataset

We use the **GastroVision** dataset (endoscopic images). For this course project:

- The dataset and splits are provided via the course / challenge website:  
  🔗 **Dataset link:**  
  `https://perceptionintelligencelab.github.io/GastroVision-Challenge/#dataset`
- Training and validation sets are labeled.
- The test set is **label-hidden**; you must generate predictions and submit them.

> ⚠️ **Do not share the raw dataset publicly** outside the class or in public forks if the instructor has restricted redistribution.

### 2.1. Recommended Folder Structure

```bash
gastrovision-class-challenge/
├── data/
│   ├── train/
│   │   ├── colon_polyp/
│   │   ├── ulcer/
│   │   ├── normal_mucosa_bowel/
│   │   └── colorectal_cancer/
│   ├── val/
│   │   ├── colon_polyp/
│   │   ├── ulcer/
│   │   ├── normal_mucosa_bowel/
│   │   └── colorectal_cancer/
│   └── test/
│       ├── img_0001.jpg
│       ├── img_0002.jpg
│       └── ...
├── src/
│   ├── dataset.py
│   ├── models.py
│   ├── train.py
│   ├── evaluate.py
│   └── predict.py
├── experiments/
│   ├── logs/
│   └── runs/
├── submissions/
│   └── your_team_name_predictions.csv
├── weights/
│   └── model_best.pth
├── working_note/
│   └── your_team_name_working_note.pdf
├── environment.yml  # or requirements.txt
└── README.md
