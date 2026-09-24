---
title: First Predictive Model
order: 1
phase: foundations
summary: Train and score a regression model end to end, and submit it to a real Kaggle competition.
whatYouWillBuild: >-
  A model that predicts a number from a table of data, entered into a real
  Kaggle competition. You pick a beginner-friendly regression competition
  that fits the domain you're interested in, build the full workflow
  properly, and submit your predictions to see where you land on the
  leaderboard.
whatItTeaches:
  - >-
    The tools every data scientist uses: Python, an editor, the terminal,
    Git and GitHub
  - >-
    What machine learning actually is, and what regression means
  - >-
    Exploring a dataset before modelling it
  - >-
    Why you hold data back to check your model honestly
  - >-
    Data leakage, the most common way a model looks great and is actually
    useless
  - >-
    Baselines, cross-validation, and reading error metrics
  - >-
    How Kaggle works, and why chasing the public leaderboard can mislead you
  - >-
    Writing a README that makes your work easy to understand and run
stack: >-
  Python, VS Code, Git and GitHub, pandas, NumPy, scikit-learn, matplotlib,
  Jupyter. The AI prompt below explains each one from scratch before you use
  it.
prerequisites: >-
  None. This project assumes you have never written code or used GitHub.
choosingYourDataHeading: Choosing your competition
choosingYourData: >-
  A tabular regression competition on Kaggle: the target is a number, and
  the data is a table. Pick one that accepts late submissions, so you can
  still get a score and compare it against the final leaderboard to see
  where you would have placed. Kaggle's beginner and Playground
  competitions are the right level. The prompt below asks what domain
  interests you and suggests competitions that match.
deliverable:
  - >-
    A public GitHub repo with an exploration notebook, a `train.py` that
    runs from raw data to a submission file, and a README
  - >-
    A scored submission on Kaggle
  - >-
    A README with a results table (naive baseline, linear model,
    tree-based model, with validation scores and your leaderboard score),
    a few screenshots or charts, and clear steps to reproduce your results
  - >-
    A short limitations section: where the model is weakest, and how your
    validation score compared to your leaderboard score
howLongItTakes: >-
  The prompt splits the project into 11 blocks (0 to 10). It gives you a
  time estimate for each one, then adjusts the estimates to your real pace
  after the first block, so you can plan it across days.
learnWithAIPrompt: |-
  You are my teacher for my first data science project. Assume I know
  nothing: not how to code, not what an IDE or a terminal is, not what
  Git or GitHub are, not how machine learning works. Teach me everything
  from zero.

  === HOW TO TEACH ME ===
  - Split the whole project into numbered blocks (listed below). Work
    through one block at a time.
  - At the start of each block, tell me: the block's goal, what I will
    learn, and roughly how long it should take.
  - Before every step, explain the idea in plain English with a
    real-world analogy, and why it matters.
  - Before I use any new tool or library for the first time, tell me what
    it is, what problem it solves, and why data scientists use it. Do not
    just show me commands.
  - Write the code for me. I do not need to type it from memory, but I
    must understand it. Point out the most important lines and explain
    exactly what they do.
  - At the end of each block:
    1. Give me short notes summarizing the key points, written so I can
       copy them into my own notes.
    2. Ask me 2 or 3 questions to check I understood (explain something
       back in my own words, or predict what a line of code will do).
    3. Do not start the next block until I answer them correctly. If I am
       wrong, explain again differently and ask again.
    4. Tell me what to commit and push to GitHub, and write the commit
       message with me.
  - Never give me the whole project at once.
  - At the end of each session, give me a short summary of where we are
    that I can paste into a new chat to continue.

  === BLOCK 0: PLAN THE PROJECT WITH ME ===
  Ask me:
  - Which domain interests me (for example finance, health, sports,
    retail, tech) and why.
  - What computer and operating system I use.
  - How many hours per week I can spend on this.
  Then suggest 2 or 3 beginner-friendly tabular regression competitions
  on Kaggle that fit my interest and still accept late submissions. For
  each, explain in plain English what the data is, what we would be
  predicting, and what I would learn from it. Let me choose. Then suggest
  a clear name for my GitHub repo.

  Then show me the full block plan below with an estimated time for each
  block and a total. After Block 1, ask me how long it actually took me,
  adjust the estimates for the remaining blocks to match my pace, and
  suggest how to split the rest across days based on my weekly hours.
  Check in on my pace again if a block takes much longer than expected.

  === BLOCK 1: SET UP MY TOOLS FROM ZERO ===
  One at a time: what Python is and how to install it; what an IDE is and
  how to install VS Code; what the terminal is and a few basic commands;
  what Git is versus what GitHub is; creating a GitHub account and a
  repo; what cloning means and how to clone my repo; what a commit and a
  push are; what a virtual environment is and why I need one; what
  requirements.txt is and why it matters for reproducibility. Help me
  create a Kaggle account and download the competition data. Teach me to
  add the data folder to .gitignore, because competition data usually
  cannot be re-uploaded publicly, and to write download steps in the
  README instead.

  === BLOCK 2: THE THEORY ===
  Before any modelling, teach me: what machine learning is, what features
  and a target are, what regression is, what training a model means, what
  overfitting is, why we hold back data to check our model, what a
  baseline is, what cross-validation is, and what RMSE and MAE measure
  and how they differ. Explain the competition's own scoring metric.
  Explain how Kaggle scoring works: the test file has no answers, Kaggle
  scores it for me, and the public leaderboard uses only part of the test
  data while the private leaderboard uses the rest.

  === BLOCK 3: LOAD AND INSPECT THE DATA ===
  Explain what pandas and NumPy are before using them. Load the data and
  inspect it: size, column types, missing values, and the target's
  distribution.

  === BLOCK 4: HOLD BACK DATA, THEN EXPLORE ===
  Split off a validation set with a fixed random seed. Explain why this
  happens before exploring further. Explain what matplotlib is, then
  explore the training data only, with charts.

  === BLOCK 5: BASELINE AND PREPROCESSING ===
  Build a naive baseline and score it. Explain what scikit-learn is. Build
  a preprocessing pipeline (handling missing values, encoding text
  categories, scaling) that learns from training data only, and explain
  why a pipeline prevents leakage.

  === BLOCK 6: TRAIN AND COMPARE MODELS ===
  Train a linear model and a tree-based model, both with cross-validation.
  Compare them using training and validation data only, and pick one.
  Explain why I should not pick based on the leaderboard.

  === BLOCK 7: ERRORS AND SUBMISSION ===
  Plot and interpret the errors (residuals) and explain where the model
  does worst. Train the final model, predict on Kaggle's test file, and
  submit it as a late submission. Then compare my score with the final
  leaderboard and help me work out roughly where I would have placed.

  === BLOCK 8: CLEAN IT UP AND PUBLISH ===
  Turn the work into a train.py that runs from raw data to a submission
  file. Teach me GitHub good practice: a clean folder structure, a
  .gitignore, requirements.txt, clear commit history, and no data or
  secrets in the repo. Then help me write a strong README: what the
  project does, the competition and what is predicted, how to reproduce
  it step by step, the results table (baseline, linear model, tree
  model, validation scores, leaderboard score), 2 or 3 screenshots or
  charts, and a limitations section. Show me how to add images to a
  README and how to check it looks right on GitHub.

  Throughout the project, warn me when I am about to make these mistakes:
  fitting anything on the full dataset, using a feature that would not be
  available at prediction time, skipping the baseline, reporting only the
  best-looking number, and tuning my model to climb the public
  leaderboard.

  === BLOCK 9: AUDIT MY WORK ===
  Go through this checklist with me one item at a time. For each, ask me
  to show you the evidence in my code or explain it in my own words. Do
  not mark an item done until I can.
  - The validation set was split off before any exploration that shaped
    my decisions.
  - Every preprocessing step is inside a pipeline and learns from
    training data only.
  - For every feature, I can explain why it would be available when
    making a real prediction.
  - A naive baseline is in my results table, and I say plainly whether my
    models beat it.
  - I report validation scores, cross-validation mean and spread, and my
    leaderboard score.
  - The random seed is fixed, and running train.py twice gives identical
    results.
  - A fresh clone, following only my README, reproduces my submission.
  - No competition data or secrets are committed to the repo.
  - I can say how many values were missing and what I did about them.
  - I looked at the residuals and can describe where the model does
    worst.
  - I can explain the gap between my validation score and my leaderboard
    score.
  - Without notes, I can explain why RMSE punishes large errors more than
    MAE, and which matters more for this problem.

  === BLOCK 10: SHARE IT ===
  Remind me that a finished project is worth sharing, because it shows
  employers what I can actually do. Check the competition's rules on
  sharing code first. Then help me write an honest LinkedIn post: what I
  built, the competition, my result with real numbers, one thing I
  learned, and the link to my repo. Keep it plain and truthful: it is a
  learning project, so do not exaggerate what the model does or claim
  more than the numbers show.
auditChecklist:
  - >-
    The validation set was split off before any exploration that shaped
    your modelling decisions.
  - >-
    Every preprocessing step (imputation, encoding, scaling) sits inside
    a pipeline and learns from training data only.
  - >-
    For every feature, you can explain why it would be available at the
    moment you make a real prediction.
  - >-
    A naive baseline is in your results table, and you say plainly
    whether your models beat it.
  - >-
    You report validation scores, the cross-validation mean and spread,
    and your leaderboard score.
  - >-
    The random seed is fixed, and running the script twice gives
    identical results.
  - >-
    A fresh clone, following only the README, reproduces your submission
    file.
  - >-
    No competition data or secrets are committed to the repo.
  - >-
    You can say how many values were missing and exactly what you did
    about them.
  - >-
    You looked at the residuals and can describe where the model does
    worst.
  - >-
    You can explain the gap between your validation score and your
    leaderboard score.
  - >-
    Without notes, you can explain why RMSE punishes large errors more
    than MAE, and which one matters more for your problem.
shareYourWork: >-
  A finished project is worth showing. Once your repo is public and your
  README is clean, post about it on LinkedIn: what you built, your result
  with real numbers, one thing you learned, and the link. Keep it honest.
  A learning project with real numbers is more convincing than an
  exaggerated claim, and recruiters do open the repo.
doneRightLooksLike: >-
  A stranger clones your repo, follows the README, and produces the same
  submission you did. Your Kaggle submission beats the baseline, and you
  know roughly where it would have placed. And in an interview, you can
  defend every step: why you held data back, why each preprocessing
  choice was made, and why you didn't trust the leaderboard blindly.
---
