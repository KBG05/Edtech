const questionBank = {
  "ai": [
    {
      id: 1,
      question: "Define artificial intelligence and explain its relationship to machine learning and deep learning. Provide examples of each.",
      points: 12.5
    },
    {
      id: 2,
      question: "Compare and contrast supervised, unsupervised, and reinforcement learning. Include real-world applications for each type.",
      points: 12.5
    },
    {
      id: 3,
      question: "Explain the bias-variance tradeoff in machine learning. How does it relate to overfitting and underfitting?",
      points: 12.5
    },
    {
      id: 4,
      question: "Describe the architecture and training process of a neural network. Include explanations of forward propagation and backpropagation.",
      points: 12.5
    },
    {
      id: 5,
      question: "What are the key differences between traditional programming and machine learning approaches? Provide specific examples.",
      points: 12.5
    },
    {
      id: 6,
      question: "Explain the concept of feature engineering and its importance in machine learning projects.",
      points: 12.5
    },
    {
      id: 7,
      question: "Describe different types of neural network architectures and their specific use cases.",
      points: 12.5
    },
    {
      id: 8,
      question: "Discuss the ethical considerations and potential biases in AI systems. How can they be mitigated?",
      points: 12.5
    }
  ],
  "ml": [
    {
      id: 1,
      question: "Explain linear regression in detail, including assumptions, advantages, and limitations. Provide a real-world example.",
      points: 16.7
    },
    {
      id: 2,
      question: "Compare different classification algorithms (logistic regression, decision trees, SVM, random forest). When would you use each?",
      points: 16.7
    },
    {
      id: 3,
      question: "Describe various clustering algorithms and their applications. Include k-means, hierarchical clustering, and DBSCAN.",
      points: 16.7
    },
    {
      id: 4,
      question: "Explain cross-validation techniques and their importance in model evaluation. Discuss different types of cross-validation.",
      points: 16.7
    },
    {
      id: 5,
      question: "What is regularization in machine learning? Explain L1 and L2 regularization with examples.",
      points: 16.6
    },
    {
      id: 6,
      question: "Discuss ensemble methods in machine learning. Compare bagging, boosting, and stacking approaches.",
      points: 16.6
    }
  ],
  "dl": [
    {
      id: 1,
      question: "Explain Convolutional Neural Networks (CNNs) architecture. Describe convolution, pooling, and their role in image processing.",
      points: 16.7
    },
    {
      id: 2,
      question: "Describe Recurrent Neural Networks (RNNs) and their variants (LSTM, GRU). Explain the vanishing gradient problem.",
      points: 16.7
    },
    {
      id: 3,
      question: "Explain the Transformer architecture and attention mechanism. Discuss its applications in NLP and computer vision.",
      points: 16.7
    },
    {
      id: 4,
      question: "Compare different optimization algorithms used in deep learning (SGD, Adam, RMSprop). When would you use each?",
      points: 16.7
    },
    {
      id: 5,
      question: "Discuss transfer learning and fine-tuning in deep learning. Provide examples of when and how to use these techniques.",
      points: 16.6
    },
    {
      id: 6,
      question: "Explain different regularization techniques in deep learning (dropout, batch normalization, data augmentation).",
      points: 16.6
    }
  ]
};
  const getCertificationQuestions = (courseId) => {

    return questionBank[courseId] || [];
  };

  export default getCertificationQuestions