const questions = [
  {
    "question": "What is Generative AI?",
    "options": [
      "AI that only classifies data",
      "AI that can create new content such as text, images, music, and code",
      "AI that only deletes data",
      "AI that only stores data"
    ],
    "correct": 1,
    "explanation": "Generative AI refers to AI systems that can create new content — including text, images, audio, video, and code — based on patterns learned from training data."
  },
  {
    "question": "What does LLM stand for in the context of AI?",
    "options": [
      "Low Level Memory",
      "Large Language Model",
      "Linear Logic Machine",
      "Local Learning Module"
    ],
    "correct": 1,
    "explanation": "LLM stands for Large Language Model — a type of AI model trained on vast amounts of text data that can understand and generate human-like text."
  },
  {
    "question": "ChatGPT is an example of:",
    "options": [
      "A computer virus",
      "A generative AI chatbot powered by a large language model",
      "A search engine",
      "A programming language"
    ],
    "correct": 1,
    "explanation": "ChatGPT is a generative AI chatbot developed by OpenAI, powered by a large language model (GPT), that can generate human-like text responses."
  },
  {
    "question": "What is a 'prompt' in the context of generative AI?",
    "options": [
      "A type of computer hardware",
      "The input text or instruction given to an AI model to generate a response",
      "A programming error",
      "A type of database"
    ],
    "correct": 1,
    "explanation": "A prompt is the text input, question, or instruction that a user provides to a generative AI model. The quality of the prompt greatly affects the quality of the output."
  },
  {
    "question": "What is 'prompt engineering'?",
    "options": [
      "Building computer hardware",
      "The skill of crafting effective prompts to get better and more accurate responses from AI",
      "A type of software engineering",
      "Building robots"
    ],
    "correct": 1,
    "explanation": "Prompt engineering is the practice of designing and refining input prompts to get the most useful, accurate, and relevant outputs from generative AI models."
  },
  {
    "question": "Which of the following can generative AI create?",
    "options": [
      "Only text",
      "Text, images, music, video, and code",
      "Only images",
      "Only music"
    ],
    "correct": 1,
    "explanation": "Generative AI can create many types of content including text, images, music, video, code, and even 3D models, depending on the model used."
  },
  {
    "question": "What is a limitation of generative AI models like ChatGPT?",
    "options": [
      "They are always 100% accurate",
      "They can produce incorrect information confidently, known as 'hallucination'",
      "They have no limitations",
      "They can access live internet data at all times"
    ],
    "correct": 1,
    "explanation": "AI hallucination occurs when generative AI produces information that sounds convincing but is factually incorrect. Users must verify AI outputs for accuracy."
  },
  {
    "question": "What is AI 'hallucination'?",
    "options": [
      "AI having dreams",
      "When an AI model generates false or made-up information that appears convincing",
      "AI seeing optical illusions",
      "A type of AI model"
    ],
    "correct": 1,
    "explanation": "AI hallucination refers to when a generative AI model produces information that is fabricated, inaccurate, or nonsensical, but presents it as if it were true."
  },
  {
    "question": "DALL-E and Midjourney are examples of AI tools that:",
    "options": [
      "Write computer code",
      "Generate images from text descriptions",
      "Translate languages",
      "Create spreadsheets"
    ],
    "correct": 1,
    "explanation": "DALL-E (by OpenAI) and Midjourney are generative AI tools that create images based on text prompts (descriptions) provided by users."
  },
  {
    "question": "How do large language models learn?",
    "options": [
      "By memorizing the entire internet",
      "By training on large amounts of text data to learn patterns in language",
      "By being programmed with every possible answer",
      "By copying other AI models"
    ],
    "correct": 1,
    "explanation": "LLMs are trained on vast datasets of text, learning statistical patterns in language — such as which words and phrases commonly appear together — to generate coherent text."
  },
  {
    "question": "What is a good practice when using generative AI for schoolwork?",
    "options": [
      "Copy everything directly without checking",
      "Use it as a learning aid but verify the information and cite it properly",
      "Never use AI for any purpose",
      "Let AI do all your work without understanding it"
    ],
    "correct": 1,
    "explanation": "Generative AI should be used as a learning tool. Students should verify AI-generated information, understand the content, and properly acknowledge AI assistance."
  },
  {
    "question": "What is the difference between generative AI and traditional AI?",
    "options": [
      "There is no difference",
      "Traditional AI classifies or predicts, while generative AI creates new content",
      "Generative AI is older",
      "Traditional AI is more creative"
    ],
    "correct": 1,
    "explanation": "Traditional AI focuses on tasks like classification and prediction (e.g., spam detection), while generative AI can create new content like text, images, and music."
  },
  {
    "question": "Why should you not share personal information with AI chatbots?",
    "options": [
      "AI chatbots do not understand personal information",
      "Your data could be stored, used for training, or potentially accessed by others",
      "AI chatbots always delete your data",
      "Personal information makes AI work better"
    ],
    "correct": 1,
    "explanation": "Data entered into AI chatbots may be stored, used to improve models, or potentially accessed by the company or others. Protect your privacy by not sharing sensitive information."
  },
  {
    "question": "What is a 'token' in the context of large language models?",
    "options": [
      "A type of coin",
      "A unit of text (word, part of a word, or character) that the model processes",
      "A login credential",
      "A type of computer memory"
    ],
    "correct": 1,
    "explanation": "In LLMs, text is broken into tokens — small pieces like words, subwords, or characters. The model processes these tokens to understand and generate text."
  },
  {
    "question": "What is 'training data' for a generative AI model?",
    "options": [
      "Data used only for testing",
      "The large collection of text, images, or other data the model learns from",
      "Data created by the AI itself",
      "Data stored on USB drives"
    ],
    "correct": 1,
    "explanation": "Training data is the large collection of examples (text, images, etc.) that a generative AI model learns patterns from during its training process."
  },
  {
    "question": "Which of the following is an ethical concern about generative AI art?",
    "options": [
      "AI art is always ugly",
      "AI may generate art based on copyrighted works without permission from original artists",
      "AI art uses too much paint",
      "There are no ethical concerns"
    ],
    "correct": 1,
    "explanation": "A major ethical concern is that AI image generators are trained on images by human artists, often without consent or credit, raising copyright and intellectual property issues."
  },
  {
    "question": "What makes a good prompt for generative AI?",
    "options": [
      "A single word with no context",
      "A clear, specific, and detailed instruction with relevant context",
      "Random letters and numbers",
      "A very short and vague request"
    ],
    "correct": 1,
    "explanation": "Good prompts are clear, specific, and provide enough context and detail so the AI can understand exactly what you want and produce a relevant, high-quality response."
  },
  {
    "question": "What is the role of 'temperature' in a generative AI model?",
    "options": [
      "It measures the computer's heat",
      "It controls how random or creative the AI's output is — higher means more creative, lower means more predictable",
      "It has nothing to do with AI",
      "It sets the room temperature"
    ],
    "correct": 1,
    "explanation": "Temperature is a parameter that controls randomness in AI output. A low temperature makes responses more focused and deterministic, while a high temperature makes them more creative and varied."
  },
  {
    "question": "Can generative AI replace human creativity entirely?",
    "options": [
      "Yes, AI is always more creative than humans",
      "No, AI generates based on learned patterns and lacks true understanding, emotions, and original thought",
      "AI has already replaced all artists",
      "Creativity is not real"
    ],
    "correct": 1,
    "explanation": "Generative AI creates content based on patterns learned from data, but it does not truly understand, feel emotions, or have original thoughts. Human creativity remains unique and irreplaceable."
  },
  {
    "question": "What is a 'text-to-image' model?",
    "options": [
      "A scanner that converts images to text",
      "An AI model that generates images based on written text descriptions",
      "A printer that prints text",
      "A camera that takes photos of text"
    ],
    "correct": 1,
    "explanation": "Text-to-image models (like DALL-E and Stable Diffusion) are generative AI systems that create images from text descriptions provided as prompts."
  },
  {
    "question": "What is the concern about generative AI and misinformation?",
    "options": [
      "AI always tells the truth",
      "Generative AI can create convincing fake text, images, and videos that spread false information",
      "There is no concern",
      "AI cannot create fake content"
    ],
    "correct": 1,
    "explanation": "Generative AI can create highly convincing but false content — such as fake news articles, deepfake videos, and manipulated images — which can be used to spread misinformation."
  },
  {
    "question": "What is 'fine-tuning' in the context of generative AI?",
    "options": [
      "Adjusting audio settings",
      "Further training a pre-trained model on specific data to specialize it for a particular task",
      "Tuning a musical instrument",
      "Fixing broken code"
    ],
    "correct": 1,
    "explanation": "Fine-tuning involves taking a pre-trained model and training it further on a smaller, specific dataset so it performs better for a particular task or domain."
  },
  {
    "question": "Why might two people get different responses from the same AI model using the same prompt?",
    "options": [
      "AI is broken",
      "Generative AI uses randomness in its outputs, and conversation history may differ",
      "AI always gives the same response",
      "The computer speed affects the answer"
    ],
    "correct": 1,
    "explanation": "Generative AI uses probabilistic methods (randomness) when choosing words, so responses can vary. Additionally, different conversation contexts and model versions can produce different results."
  },
  {
    "question": "What is the environmental concern about training large AI models?",
    "options": [
      "AI models pollute rivers",
      "Training large models requires enormous computing power and energy, contributing to carbon emissions",
      "AI creates physical waste",
      "There are no environmental concerns"
    ],
    "correct": 1,
    "explanation": "Training large AI models requires massive computational resources and electricity, which contributes to significant carbon emissions and environmental impact."
  },
  {
    "question": "What should you always do when using information from generative AI?",
    "options": [
      "Trust it completely without checking",
      "Verify and fact-check the information from reliable sources before using it",
      "Share it immediately on social media",
      "Assume it is always wrong"
    ],
    "correct": 1,
    "explanation": "Generative AI can produce inaccurate or fabricated information. Always verify AI-generated content against reliable sources before using or sharing it."
  }
]

export default questions
