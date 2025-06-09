export const testData={
    "ai": {
            1: [
            {
                id: 1,
                question: "What does AI stand for?",
                options: ["Artificial Intelligence", "Automated Intelligence", "Advanced Intelligence", "Applied Intelligence"],
                correct: 0
            },
            {
                id: 2,
                question: "Which of the following is a type of machine learning?",
                options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "All of the above"],
                correct: 3
            },
            {
                id: 3,
                question: "What does AI stand for?",
                options: ["Artificial Intelligence", "Automated Intelligence", "Advanced Intelligence", "Applied Intelligence"],
                correct: 0
            },
            {
                id: 4,
                question: "What does AI stand for?",
                options: ["Artificial Intelligence", "Automated Intelligence", "Advanced Intelligence", "Applied Intelligence"],
                correct: 0
            },
            {
                id: 5,
                question: "What does AI stand for?",
                options: ["Artificial Intelligence", "Automated Intelligence", "Advanced Intelligence", "Applied Intelligence"],
                correct: 0
            },
            ],
            2: [
            {
                id: 1,
                question: "What is supervised learning?",
                options: ["Learning with labeled data", "Learning without labels", "Learning through trial and error", "Learning from rewards"],
                correct: 0
            },
            {
                id: 2,
                question: "Which algorithm is used for classification?",
                options: ["K-means", "Linear Regression", "Decision Tree", "PCA"],
                correct: 2
            }
            ],
            3: [
            {
                id: 1,
                question: "What is a neural network?",
                options: ["A computer network", "A biological network", "A computational model inspired by biological neural networks", "A social network"],
                correct: 2
            },
            {
                id: 2,
                question: "What is backpropagation?",
                options: ["Forward pass algorithm", "Backward pass algorithm for training", "Data preprocessing", "Model evaluation"],
                correct: 1
            }
            ]
        },
        "ml": {
            1: [
            {
                id: 1,
                question: "What is linear regression used for?",
                options: ["Classification", "Clustering", "Prediction of continuous values", "Dimensionality reduction"],
                correct: 2
            }
            ],
            2: [
            {
                id: 1,
                question: "What is classification?",
                options: ["Predicting continuous values", "Grouping similar data", "Predicting discrete categories", "Reducing dimensions"],
                correct: 2
            }
            ],
            3: [
            {
                id: 1,
                question: "What is clustering?",
                options: ["Supervised learning", "Grouping similar data points", "Predicting labels", "Feature selection"],
                correct: 1
            }
            ]
        },
        "dl": {
            1: [
            {
                id: 1,
                question: "What does CNN stand for?",
                options: ["Computer Neural Network", "Convolutional Neural Network", "Complex Neural Network", "Connected Neural Network"],
                correct: 1
            }
            ],
            2: [
            {
                id: 1,
                question: "What does RNN stand for?",
                options: ["Recursive Neural Network", "Recurrent Neural Network", "Regular Neural Network", "Random Neural Network"],
                correct: 1
            }
            ],
            3: [
            {
                id: 1,
                question: "What are Transformers in deep learning?",
                options: ["Robot transformers", "Data transformers", "A type of neural network architecture", "Image processors"],
                correct: 2
            }
            ]
        }
    }



export const topics={
    "ai": [
        {
            "id": 1,
            "name": "Introduction to AI",
            "duration": "45m",
            "questions": 8,
            "progress": 75,
            "description": "Explore the core concepts and historical milestones of Artificial Intelligence.",
            "chapters": [
                { "id": "ai-1-1", "name": "What is AI?" },
                { "id": "ai-1-2", "name": "History of AI" },
                { "id": "ai-1-3", "name": "Types of AI" }
            ]
        },
        {
            "id": 2,
            "name": "Machine Learning",
            "duration": "60m",
            "questions": 10,
            "progress": 50,
            "description": "Dive into foundational machine learning algorithms and their applications.",
            "chapters": [
                { "id": "ai-2-1", "name": "Supervised Learning" },
                { "id": "ai-2-2", "name": "Unsupervised Learning" },
                { "id": "ai-2-3", "name": "Reinforcement Learning" }
            ]
        },
        {
            "id": 3,
            "name": "Neural Networks",
            "duration": "75m",
            "questions": 12,
            "progress": 20,
            "description": "Understand the basics of neural networks, from perceptrons to deep architectures.",
            "chapters": [
                { "id": "ai-3-1", "name": "Perceptrons" },
                { "id": "ai-3-2", "name": "Deep Networks" },
                { "id": "ai-3-3", "name": "Backpropagation" }
            ]
        }
    ],
    "ml": [
        {
            "id": 1,
            "name": "Linear Regression",
            "duration": "50m",
            "questions": 9,
            "progress": 80,
            "description": "Learn about linear regression, a fundamental algorithm for predictive modeling.",
            "chapters": [
                { "id": "ml-1-1", "name": "Simple Linear Regression" },
                { "id": "ml-1-2", "name": "Multiple Regression" },
                { "id": "ml-1-3", "name": "Polynomial Regression" }
            ]
        },
        {
            "id": 2,
            "name": "Classification",
            "duration": "70m",
            "questions": 11,
            "progress": 40,
            "description": "Explore various classification algorithms like Logistic Regression and SVM.",
            "chapters": [
                { "id": "ml-2-1", "name": "Logistic Regression" },
                { "id": "ml-2-2", "name": "Decision Trees" },
                { "id": "ml-2-3", "name": "SVM" }
            ]
        },
        {
            "id": 3,
            "name": "Clustering",
            "duration": "65m",
            "questions": 10,
            "progress": 10,
            "description": "Discover unsupervised learning techniques for grouping data points.",
            "chapters": [
                { "id": "ml-3-1", "name": "K-Means" },
                { "id": "ml-3-2", "name": "Hierarchical Clustering" },
                { "id": "ml-3-3", "name": "DBSCAN" }
            ]
        }
    ],
    "dl": [
        {
            "id": 1,
            "name": "CNN",
            "duration": "80m",
            "questions": 13,
            "progress": 90,
            "description": "Master Convolutional Neural Networks for image recognition tasks.",
            "chapters": [
                { "id": "dl-1-1", "name": "Convolution" },
                { "id": "dl-1-2", "name": "Pooling" },
                { "id": "dl-1-3", "name": "Architecture" }
            ]
        },
        {
            "id": 2,
            "name": "RNN",
            "duration": "70m",
            "questions": 12,
            "progress": 60,
            "description": "Understand Recurrent Neural Networks for sequential data processing.",
            "chapters": [
                { "id": "dl-2-1", "name": "LSTM" },
                { "id": "dl-2-2", "name": "GRU" },
                { "id": "dl-2-3", "name": "Time Series" }
            ]
        },
        {
            "id": 3,
            "name": "Transformers",
            "duration": "90m",
            "questions": 15,
            "progress": 30,
            "description": "Explore the revolutionary Transformer architecture for natural language processing.",
            "chapters": [
                { "id": "dl-3-1", "name": "Attention" },
                { "id": "dl-3-2", "name": "BERT" },
                { "id": "dl-3-3", "name": "GPT" }
            ]
        }
    ]
}
