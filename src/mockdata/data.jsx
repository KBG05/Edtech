const data = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    description: "Fundamentals of AI and machine learning",
    topics: [
      {
        id: 1,
        name: "Introduction to AI",
        chapters: [
          { id: "ai-1-1", name: "What is AI?" },
          { id: "ai-1-2", name: "History of AI" },
          { id: "ai-1-3", name: "Types of AI" }
        ]
      },
      {
        id: 2,
        name: "Machine Learning",
        chapters: [
          { id: "ai-2-1", name: "Supervised Learning" },
          { id: "ai-2-2", name: "Unsupervised Learning" },
          { id: "ai-2-3", name: "Reinforcement Learning" }
        ]
      },
      {
        id: 3,
        name: "Neural Networks",
        chapters: [
          { id: "ai-3-1", name: "Perceptrons" },
          { id: "ai-3-2", name: "Deep Networks" },
          { id: "ai-3-3", name: "Backpropagation" }
        ]
      }
    ]
  },
  {
    id: "ml",
    name: "Machine Learning",
    description: "Deep dive into ML algorithms and techniques",
    topics: [
      {
        id: 1,
        name: "Linear Regression",
        chapters: [
          { id: "ml-1-1", name: "Simple Linear Regression" },
          { id: "ml-1-2", name: "Multiple Regression" },
          { id: "ml-1-3", name: "Polynomial Regression" }
        ]
      },
      {
        id: 2,
        name: "Classification",
        chapters: [
          { id: "ml-2-1", name: "Logistic Regression" },
          { id: "ml-2-2", name: "Decision Trees" },
          { id: "ml-2-3", name: "SVM" }
        ]
      },
      {
        id: 3,
        name: "Clustering",
        chapters: [
          { id: "ml-3-1", name: "K-Means" },
          { id: "ml-3-2", name: "Hierarchical Clustering" },
          { id: "ml-3-3", name: "DBSCAN" }
        ]
      }
    ]
  },
  {
    id: "dl",
    name: "Deep Learning",
    description: "Advanced neural networks and deep learning",
    topics: [
      {
        id: 1,
        name: "CNN",
        chapters: [
          { id: "dl-1-1", name: "Convolution" },
          { id: "dl-1-2", name: "Pooling" },
          { id: "dl-1-3", name: "Architecture" }
        ]
      },
      {
        id: 2,
        name: "RNN",
        chapters: [
          { id: "dl-2-1", name: "LSTM" },
          { id: "dl-2-2", name: "GRU" },
          { id: "dl-2-3", name: "Time Series" }
        ]
      },
      {
        id: 3,
        name: "Transformers",
        chapters: [
          { id: "dl-3-1", name: "Attention" },
          { id: "dl-3-2", name: "BERT" },
          { id: "dl-3-3", name: "GPT" }
        ]
      }
    ]
  }
];

export default data;
