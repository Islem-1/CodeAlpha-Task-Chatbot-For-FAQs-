# CodeAlpha_Task2_Chatbot_for_FAQs

This project implements a chatbot for answering frequently asked questions (FAQs) about mental health using a Naive Bayes model. The chatbot is trained on a dataset containing questions and answers related to mental health and leverages natural language processing (NLP) techniques to provide accurate and relevant responses.

## Table of Contents

- [Introduction](#introduction)
- [Dataset](#dataset)
- [Model](#model)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Mental Health FAQ Chatbot is designed to assist users by providing answers to common questions related to mental health. The chatbot uses a Naive Bayes model to understand and generate responses based on the context of the questions.

## Dataset

The dataset used for training the model is `Mental_Health_FAQ.csv`, which contains the following columns:
- `Question_ID`: Unique identifier for each question
- `Questions`: The text of the question
- `Answers`: The text of the corresponding answer

## Model

The chatbot uses a Naive Bayes model, specifically the `MultinomialNB` implementation from the `scikit-learn` library. 
The model is trained on the provided dataset to improve its performance in answering mental health-related questions.

## Installation

Follow these steps to set up the project locally:

   git clone https://github.com/Islem-1/CodeAlpha_Task_Detection_tracking_system.git
   cd mental-health-faq-chatbot
   
