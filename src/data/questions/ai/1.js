const questions = [
  {
    "question": "Artificial Intelligence (AI) refers to:",
    "options": [
      "Human intelligence",
      "Machine simulation of human intelligence",
      "Natural intelligence",
      "Animal intelligence"
    ],
    "correct": 1,
    "explanation": "AI is the simulation of human intelligence processes by machines, especially computers."
  },
  {
    "question": "Who is known as the father of Artificial Intelligence?",
    "options": [
      "Alan Turing",
      "John McCarthy",
      "Bill Gates",
      "Steve Jobs"
    ],
    "correct": 1,
    "explanation": "John McCarthy coined the term 'Artificial Intelligence' in 1956."
  },
  {
    "question": "Which of the following is an example of AI in daily life?",
    "options": [
      "A simple calculator",
      "Voice assistants like Alexa and Siri",
      "A light switch",
      "A pencil"
    ],
    "correct": 1,
    "explanation": "Voice assistants use AI for speech recognition, NLP, and intelligent responses."
  },
  {
    "question": "AI that can perform only specific tasks is called:",
    "options": [
      "Strong AI",
      "General AI",
      "Narrow AI",
      "Super AI"
    ],
    "correct": 2,
    "explanation": "Narrow (Weak) AI is designed to perform specific tasks like image recognition or language translation."
  },
  {
    "question": "The Turing Test is used to:",
    "options": [
      "Measure speed",
      "Determine if a machine can exhibit intelligent behaviour",
      "Test hardware",
      "Measure memory"
    ],
    "correct": 1,
    "explanation": "The Turing Test evaluates whether a machine can exhibit intelligent behaviour indistinguishable from a human."
  },
  {
    "question": "Which domain does AI NOT typically belong to?",
    "options": [
      "Computer Science",
      "Linguistics",
      "Astrology",
      "Mathematics"
    ],
    "correct": 2,
    "explanation": "AI is an interdisciplinary field involving computer science, mathematics, and linguistics, but not astrology."
  },
  {
    "question": "AI systems learn from:",
    "options": [
      "Magic",
      "Data and experience",
      "Random guesses",
      "Nothing"
    ],
    "correct": 1,
    "explanation": "AI systems learn from data and experience to improve their performance over time."
  },
  {
    "question": "An intelligent chatbot is an example of:",
    "options": [
      "Robotics only",
      "AI application",
      "Simple programming",
      "Hardware design"
    ],
    "correct": 1,
    "explanation": "Chatbots use AI technologies like NLP to understand and respond to human queries."
  },
  {
    "question": "AI can be biased because:",
    "options": [
      "It is always neutral",
      "It learns from data that may contain human biases",
      "It creates its own opinions",
      "It ignores data"
    ],
    "correct": 1,
    "explanation": "AI can inherit biases present in the training data, leading to unfair outcomes."
  },
  {
    "question": "Ethics in AI is important because:",
    "options": [
      "AI is always perfect",
      "AI decisions can impact people's lives and must be fair",
      "AI does not need ethics",
      "Ethics slow down AI"
    ],
    "correct": 1,
    "explanation": "AI ethics ensures that AI systems are fair, transparent, and do not harm people."
  },
  {
    "question": "Machine Learning is a subset of AI where machines learn from:",
    "options": [
      "Pre-written rules only",
      "Data without being explicitly programmed",
      "Human commands each time",
      "Random guessing"
    ],
    "correct": 1,
    "explanation": "Machine Learning allows computers to learn and improve from data and experience without explicit programming."
  },
  {
    "question": "General AI (Strong AI) refers to:",
    "options": [
      "AI that can perform one specific task",
      "AI that can perform any intellectual task a human can",
      "AI that is physically strong",
      "AI that only plays games"
    ],
    "correct": 1,
    "explanation": "General AI would be able to understand, learn, and apply intelligence across any domain, like a human mind."
  },
  {
    "question": "Which of the following is NOT an application of AI?",
    "options": [
      "Self-driving cars",
      "Email spam filtering",
      "A simple light bulb",
      "Recommendation systems on Netflix"
    ],
    "correct": 2,
    "explanation": "A simple light bulb has no intelligence or decision-making capability and is not an AI application."
  },
  {
    "question": "AI can be found in everyday devices such as:",
    "options": [
      "Only supercomputers",
      "Smartphones, smart speakers, and navigation apps",
      "Only in laboratories",
      "Only in robots"
    ],
    "correct": 1,
    "explanation": "AI is present in smartphones (assistants, cameras), smart speakers, navigation apps, and many daily-use devices."
  },
  {
    "question": "The three domains of AI include:",
    "options": [
      "Data, Computer Vision, and NLP",
      "Physics, Chemistry, and Biology",
      "Hardware, Software, and Networking",
      "Only robotics"
    ],
    "correct": 0,
    "explanation": "The three major domains of AI studied are Data Science, Computer Vision, and Natural Language Processing."
  },
  {
    "question": "What does AI stand for?",
    "options": [
      "Automated Intelligence",
      "Artificial Intelligence",
      "Advanced Integration",
      "Algorithmic Interface"
    ],
    "correct": 1,
    "explanation": "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence by machines."
  },
  {
    "question": "Which type of AI is designed to perform a single specific task?",
    "options": [
      "AGI",
      "ASI",
      "ANI",
      "General AI"
    ],
    "correct": 2,
    "explanation": "ANI (Artificial Narrow Intelligence) is designed to perform a single specific task, like playing chess or voice recognition."
  },
  {
    "question": "What is AGI?",
    "options": [
      "Artificial General Intelligence — AI with human-level reasoning across all domains",
      "Automated General Interface",
      "Advanced Graphical Intelligence",
      "Artificial Gaming Intelligence"
    ],
    "correct": 0,
    "explanation": "AGI (Artificial General Intelligence) refers to AI that can understand, learn, and apply knowledge across all domains like a human."
  },
  {
    "question": "Which of the following is an example of ANI?",
    "options": [
      "A robot that can do everything a human can",
      "A self-aware machine",
      "A spam filter in email",
      "A machine smarter than all humans combined"
    ],
    "correct": 2,
    "explanation": "A spam filter is an example of ANI as it is designed to perform one specific task — filtering spam emails."
  },
  {
    "question": "What is ASI?",
    "options": [
      "Artificial Specific Intelligence",
      "Artificial Super Intelligence — AI surpassing human intelligence",
      "Automated System Integration",
      "Advanced Software Intelligence"
    ],
    "correct": 1,
    "explanation": "ASI (Artificial Super Intelligence) refers to AI that surpasses human intelligence in all aspects including creativity and problem-solving."
  },
  {
    "question": "Which of the following is a domain of AI?",
    "options": [
      "Cooking recipes",
      "Computer Vision",
      "Carpentry",
      "Gardening"
    ],
    "correct": 1,
    "explanation": "Computer Vision is a major domain of AI that deals with enabling machines to interpret and understand visual information."
  },
  {
    "question": "Which of the following is NOT a domain of AI?",
    "options": [
      "Natural Language Processing",
      "Computer Vision",
      "Data Science",
      "Manual Accounting"
    ],
    "correct": 3,
    "explanation": "Manual Accounting is not an AI domain. NLP, Computer Vision, and Data Science are all recognized AI domains."
  },
  {
    "question": "What is the Turing Test?",
    "options": [
      "A test to check computer speed",
      "A test to determine if a machine can exhibit intelligent behavior indistinguishable from a human",
      "A test for software bugs",
      "A test for hardware quality"
    ],
    "correct": 1,
    "explanation": "The Turing Test, proposed by Alan Turing, evaluates whether a machine can exhibit intelligent behavior indistinguishable from a human."
  },
  {
    "question": "Who is known as the father of Artificial Intelligence?",
    "options": [
      "Alan Turing",
      "John McCarthy",
      "Elon Musk",
      "Bill Gates"
    ],
    "correct": 1,
    "explanation": "John McCarthy is known as the father of AI. He coined the term 'Artificial Intelligence' in 1956."
  },
  {
    "question": "Which of the following best describes the current state of AI?",
    "options": [
      "We have achieved ASI",
      "We have achieved AGI",
      "Most AI today is ANI",
      "AI does not exist yet"
    ],
    "correct": 2,
    "explanation": "Most AI systems today are ANI (Narrow AI), designed for specific tasks. AGI and ASI have not been achieved yet."
  }
]

export default questions
