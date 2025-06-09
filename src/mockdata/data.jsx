export const courses = [
    {
      id: "ai",
      name: "Artificial Intelligence",
      description: "Fundamentals of AI and machine learning",
      completedTopics: ["Introduction to AI", "Machine Learning"], // This is still an array for display purposes, will be a Set in state
      // Existing fields for category remain
      duration: "45 minutes",
      questions: 8,
      totalDuration: "12h 30m",
      progress: 65,
      topics: [
        {
          id: 1,
          name: "Introduction to AI",
          // Added fields for topic
          duration: "45 minutes",
          questions: 8,
          progress: 75,
          description: "Explore the core concepts and historical milestones of Artificial Intelligence.",
          chapters: [
            { id: "ai-1-1", name: "What is AI?" },
            { id: "ai-1-2", name: "History of AI" },
            { id: "ai-1-3", name: "Types of AI" }
          ]
        },
        {
          id: 2,
          name: "Machine Learning",
          // Added fields for topic
          duration: "60 minutes",
          questions: 10,
          progress: 50,
          description: "Dive into foundational machine learning algorithms and their applications.",
          chapters: [
            { id: "ai-2-1", name: "Supervised Learning" },
            { id: "ai-2-2", name: "Unsupervised Learning" },
            { id: "ai-2-3", name: "Reinforcement Learning" }
          ]
        },
        {
          id: 3,
          name: "Neural Networks",
          // Added fields for topic
          duration: "75 minutes",
          questions: 12,
          progress: 20,
          description: "Understand the basics of neural networks, from perceptrons to deep architectures.",
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
      completedTopics: ["Linear Regression"], // This is still an array for display purposes, will be a Set in state
      // Existing fields for category remain
      duration: "120 minutes",
      questions: 6,
      totalDuration: "18h 45m",
      progress: 42,
      topics: [
        {
          id: 1,
          name: "Linear Regression",
          // Added fields for topic
          duration: "50 minutes",
          questions: 9,
          progress: 80,
          description: "Learn about linear regression, a fundamental algorithm for predictive modeling.",
          chapters: [
            { id: "ml-1-1", name: "Simple Linear Regression" },
            { id: "ml-1-2", name: "Multiple Regression" },
            { id: "ml-1-3", name: "Polynomial Regression" }
          ]
        },
        {
          id: 2,
          name: "Classification",
          // Added fields for topic
          duration: "70 minutes",
          questions: 11,
          progress: 40,
          description: "Explore various classification algorithms like Logistic Regression and SVM.",
          chapters: [
            { id: "ml-2-1", name: "Logistic Regression" },
            { id: "ml-2-2", name: "Decision Trees" },
            { id: "ml-2-3", name: "SVM" }
          ]
        },
        {
          id: 3,
          name: "Clustering",
          // Added fields for topic
          duration: "65 minutes",
          questions: 10,
          progress: 10,
          description: "Discover unsupervised learning techniques for grouping data points.",
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
      completedTopics: ["CNN", "RNN"], // This is still an array for display purposes, will be a Set in state
      // Existing fields for category remain
      duration: "80 minutes",
      questions: 6,
      totalDuration: "15h 20m",
      progress: 28,
      topics: [
        {
          id: 1,
          name: "CNN",
          // Added fields for topic
          duration: "80 minutes",
          questions: 13,
          progress: 90,
          description: "Master Convolutional Neural Networks for image recognition tasks.",
          chapters: [
            { id: "dl-1-1", name: "Convolution" },
            { id: "dl-1-2", name: "Pooling" },
            { id: "dl-1-3", name: "Architecture" }
          ]
        },
        {
          id: 2,
          name: "RNN",
          // Added fields for topic
          duration: "70 minutes",
          questions: 12,
          progress: 60,
          description: "Understand Recurrent Neural Networks for sequential data processing.",
          chapters: [
            { id: "dl-2-1", name: "LSTM" },
            { id: "dl-2-2", name: "GRU" },
            { id: "dl-2-3", name: "Time Series" }
          ]
        },
        {
          id: 3,
          name: "Transformers",
          // Added fields for topic
          duration: "90 minutes",
          questions: 15,
          progress: 30,
          description: "Explore the revolutionary Transformer architecture for natural language processing.",
          chapters: [
            { id: "dl-3-1", name: "Attention" },
            { id: "dl-3-2", name: "BERT" },
            { id: "dl-3-3", name: "GPT" }
          ]
        }
      ]
    }
  ]



