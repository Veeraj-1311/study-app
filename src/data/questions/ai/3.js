const questions = [
  {
    "question": "What is AI ethics?",
    "options": [
      "Rules for programming speed",
      "A set of principles guiding the responsible design, development, and use of AI",
      "A type of AI algorithm",
      "Laws about computer hardware"
    ],
    "correct": 1,
    "explanation": "AI ethics is a set of moral principles and guidelines that help ensure AI systems are developed and used responsibly, fairly, and without causing harm."
  },
  {
    "question": "What is bias in AI?",
    "options": [
      "A feature that makes AI faster",
      "A systematic error that causes unfair outcomes for certain groups",
      "A type of programming language",
      "An advantage of AI systems"
    ],
    "correct": 1,
    "explanation": "Bias in AI is a systematic error in data or algorithms that produces unfair results, often disadvantaging certain groups based on race, gender, age, or other factors."
  },
  {
    "question": "How can bias enter an AI system?",
    "options": [
      "Through the power supply",
      "Through biased training data that reflects historical prejudices",
      "Through the computer screen",
      "Through the keyboard"
    ],
    "correct": 1,
    "explanation": "AI systems learn from training data. If that data reflects historical biases, stereotypes, or under-represents certain groups, the AI will learn and reproduce those biases."
  },
  {
    "question": "A facial recognition system that works well for light-skinned people but poorly for dark-skinned people is an example of:",
    "options": [
      "Good AI design",
      "Algorithmic bias due to unrepresentative training data",
      "A hardware problem",
      "Normal AI behaviour"
    ],
    "correct": 1,
    "explanation": "This is a well-documented example of AI bias where training datasets contained mostly light-skinned faces, causing the system to perform poorly on dark-skinned faces."
  },
  {
    "question": "What does 'fairness' mean in the context of AI?",
    "options": [
      "AI should be expensive",
      "AI systems should treat all individuals and groups equitably without discrimination",
      "AI should run quickly",
      "AI should use the latest hardware"
    ],
    "correct": 1,
    "explanation": "Fairness in AI means that the system's decisions should not unfairly advantage or disadvantage any particular individual or group based on protected characteristics."
  },
  {
    "question": "What is accountability in AI?",
    "options": [
      "Counting AI systems",
      "Being responsible for the outcomes and decisions of AI systems",
      "Keeping accounts of AI sales",
      "Making AI count numbers"
    ],
    "correct": 1,
    "explanation": "Accountability means that developers, organizations, and users of AI are responsible for the outcomes of AI systems and must answer for any harm caused."
  },
  {
    "question": "What is transparency in AI?",
    "options": [
      "Making AI invisible",
      "Being open about how an AI system works and makes decisions",
      "Using transparent computer screens",
      "Hiding AI algorithms"
    ],
    "correct": 1,
    "explanation": "Transparency means making AI systems understandable by explaining how they work, what data they use, and how they make decisions."
  },
  {
    "question": "An AI hiring tool that rejects candidates based on their gender is an example of:",
    "options": [
      "Efficient hiring",
      "Discriminatory and unethical AI",
      "Good automation",
      "Normal AI function"
    ],
    "correct": 1,
    "explanation": "An AI system that discriminates based on gender violates ethical principles of fairness. This happened with a real hiring tool that was biased against women because historical hiring data favoured men."
  },
  {
    "question": "What is data privacy in the context of AI?",
    "options": [
      "Deleting all data",
      "Protecting personal information from unauthorized access and misuse by AI systems",
      "Making data public",
      "Ignoring user consent"
    ],
    "correct": 1,
    "explanation": "Data privacy means protecting individuals' personal information and ensuring AI systems collect, store, and use data only with proper consent and safeguards."
  },
  {
    "question": "Why is informed consent important when collecting data for AI?",
    "options": [
      "It is not important",
      "People should know and agree to how their data will be used",
      "It slows down AI development",
      "Only companies need consent"
    ],
    "correct": 1,
    "explanation": "Informed consent ensures that individuals understand and agree to how their data will be collected, stored, and used, which is a fundamental ethical and legal requirement."
  },
  {
    "question": "What is the social impact of AI on employment?",
    "options": [
      "AI has no effect on jobs",
      "AI can automate tasks, potentially displacing some jobs while creating new ones",
      "AI will eliminate all jobs",
      "AI only creates jobs"
    ],
    "correct": 1,
    "explanation": "AI automation can replace repetitive tasks and some jobs, but it also creates new roles in AI development, maintenance, and supervision. The net effect requires careful management."
  },
  {
    "question": "What is an 'algorithmic bias'?",
    "options": [
      "A bias in computer hardware",
      "A systematic and repeatable error in an algorithm that creates unfair outcomes",
      "A type of computer virus",
      "A programming shortcut"
    ],
    "correct": 1,
    "explanation": "Algorithmic bias occurs when the logic or design of an algorithm systematically produces unfair results, often amplifying existing societal inequalities."
  },
  {
    "question": "What is the 'black box' problem in AI?",
    "options": [
      "AI systems are stored in black boxes",
      "Some AI models make decisions that are difficult for humans to understand or explain",
      "AI only works in dark rooms",
      "AI boxes are painted black"
    ],
    "correct": 1,
    "explanation": "The black box problem refers to complex AI models (like deep neural networks) whose internal decision-making process is opaque and hard for humans to interpret or explain."
  },
  {
    "question": "Which of the following is an example of responsible AI development?",
    "options": [
      "Ignoring bias in training data",
      "Testing AI systems for fairness across different demographic groups before deployment",
      "Deploying AI without testing",
      "Collecting data without user consent"
    ],
    "correct": 1,
    "explanation": "Responsible AI development includes testing for fairness, identifying biases, ensuring transparency, and getting proper consent before deploying AI systems."
  },
  {
    "question": "What is 'deepfake' technology and why is it an ethical concern?",
    "options": [
      "A type of deep-sea camera",
      "AI-generated fake videos or images that can spread misinformation and harm people",
      "A deep cleaning product",
      "A type of backup storage"
    ],
    "correct": 1,
    "explanation": "Deepfakes use AI to create realistic but fake videos or images of people, raising serious ethical concerns about misinformation, fraud, identity theft, and harm to individuals."
  },
  {
    "question": "What does 'explainability' mean in AI?",
    "options": [
      "AI explaining jokes",
      "The ability to understand and describe how an AI system reaches its decisions",
      "AI writing explanations for homework",
      "Explaining how to use a computer"
    ],
    "correct": 1,
    "explanation": "Explainability means that the reasoning behind an AI system's decisions can be understood and described in human terms, which is crucial for trust and accountability."
  },
  {
    "question": "An AI system trained only on English text data may not work well for Hindi speakers. This is an example of:",
    "options": [
      "Good AI design",
      "Representation bias due to lack of diverse data",
      "Normal AI behaviour",
      "A hardware limitation"
    ],
    "correct": 1,
    "explanation": "When training data does not represent all user groups equally, the AI performs poorly for underrepresented groups. This is representation bias."
  },
  {
    "question": "Why should AI decisions in healthcare be carefully monitored?",
    "options": [
      "Healthcare is not important",
      "Wrong AI decisions can directly affect patients' health and lives",
      "Doctors do not use technology",
      "AI is always correct in healthcare"
    ],
    "correct": 1,
    "explanation": "AI errors in healthcare — such as misdiagnosis or incorrect treatment recommendations — can have serious, even life-threatening, consequences for patients."
  },
  {
    "question": "What is 'surveillance bias' in AI?",
    "options": [
      "Bias in security camera quality",
      "When AI surveillance disproportionately targets certain communities or groups",
      "A camera manufacturing defect",
      "A type of AI model"
    ],
    "correct": 1,
    "explanation": "Surveillance bias occurs when AI-powered surveillance systems disproportionately monitor or target certain communities, often based on race or socioeconomic status."
  },
  {
    "question": "What role do diverse teams play in reducing AI bias?",
    "options": [
      "No role at all",
      "Diverse teams bring varied perspectives that help identify and address biases others might miss",
      "They slow down development",
      "Diversity is unrelated to AI"
    ],
    "correct": 1,
    "explanation": "Diverse teams include people from different backgrounds who can spot potential biases, consider impacts on various groups, and design more inclusive AI systems."
  },
  {
    "question": "What is the ethical concern with AI collecting personal data from children?",
    "options": [
      "There is no concern",
      "Children may not understand data privacy, and their data requires special protection",
      "Children do not use AI",
      "Only adults use the internet"
    ],
    "correct": 1,
    "explanation": "Children are especially vulnerable because they may not understand how their data is being collected and used. Laws like COPPA provide special protections for children's data."
  },
  {
    "question": "What is 'confirmation bias' in AI?",
    "options": [
      "AI confirming your email address",
      "When an AI system reinforces existing beliefs or stereotypes in its results",
      "A way to verify AI accuracy",
      "A type of user login"
    ],
    "correct": 1,
    "explanation": "Confirmation bias in AI occurs when the system reinforces existing beliefs or stereotypes, such as a search engine showing only one perspective on a topic."
  },
  {
    "question": "What is 'inclusive AI'?",
    "options": [
      "AI that includes all code",
      "AI designed to work fairly and effectively for people of all backgrounds, abilities, and demographics",
      "AI that includes many features",
      "AI that runs on all devices"
    ],
    "correct": 1,
    "explanation": "Inclusive AI is designed and developed to serve all users fairly, regardless of their gender, race, age, ability, language, or socioeconomic background."
  },
  {
    "question": "Why is it important to have regulations and guidelines for AI?",
    "options": [
      "To make AI more expensive",
      "To prevent misuse, protect people's rights, and ensure AI is developed responsibly",
      "To slow down innovation",
      "Regulations are not needed"
    ],
    "correct": 1,
    "explanation": "Regulations and guidelines help prevent AI misuse, protect individual rights and privacy, ensure safety, and promote responsible and ethical AI development."
  },
  {
    "question": "If an AI-powered loan system denies loans mostly to people from a certain neighbourhood, this is an example of:",
    "options": [
      "Efficient banking",
      "Discriminatory outcomes and potential redlining bias",
      "Good risk assessment",
      "Normal banking practice"
    ],
    "correct": 1,
    "explanation": "Systematically denying loans based on neighbourhood (which may correlate with race or income) is discriminatory. This is a form of redlining bias that violates fairness principles."
  }
]

export default questions
