const questions = [
  {
    "question": "Which of the following is NOT a branch of social science?",
    "options": [
      "Sociology",
      "Economics",
      "Botany",
      "Political Science"
    ],
    "correct": 2,
    "explanation": "Botany is a branch of natural science that deals with plants. Sociology, Economics, and Political Science are all branches of social science."
  },
  {
    "question": "Social science primarily deals with the study of:",
    "options": [
      "Natural phenomena",
      "Human society and relationships",
      "Chemical reactions",
      "Mathematical equations"
    ],
    "correct": 1,
    "explanation": "Social science is the study of human society, social relationships, and how people interact within communities and institutions."
  },
  {
    "question": "Which branch of social science studies the production, distribution, and consumption of goods and services?",
    "options": [
      "History",
      "Geography",
      "Economics",
      "Sociology"
    ],
    "correct": 2,
    "explanation": "Economics is the branch of social science that studies how societies produce, distribute, and consume goods and services."
  },
  {
    "question": "The study of past events, cultures, and civilisations is known as:",
    "options": [
      "Sociology",
      "History",
      "Anthropology",
      "Psychology"
    ],
    "correct": 1,
    "explanation": "History is the study of past events, civilisations, cultures, and how they shaped the present world."
  },
  {
    "question": "Which social science discipline focuses on the relationship between humans and their environment?",
    "options": [
      "Political Science",
      "Geography",
      "Psychology",
      "Economics"
    ],
    "correct": 1,
    "explanation": "Geography studies the relationship between humans and their physical environment, including landscapes, climates, and natural resources."
  },
  {
    "question": "Sociology is the study of:",
    "options": [
      "Individual behaviour",
      "Society and social interactions",
      "Government systems",
      "Earth's physical features"
    ],
    "correct": 1,
    "explanation": "Sociology is the study of society, social institutions, and social relationships, examining how people interact in groups."
  },
  {
    "question": "Political Science mainly deals with:",
    "options": [
      "Market forces",
      "Government, politics, and power",
      "Human evolution",
      "Weather patterns"
    ],
    "correct": 1,
    "explanation": "Political Science studies government systems, political activities, political behaviour, and the distribution of power in society."
  },
  {
    "question": "Why is the study of social science important?",
    "options": [
      "It helps us build machines",
      "It helps us understand society and solve social problems",
      "It helps us study stars",
      "It helps us create new medicines"
    ],
    "correct": 1,
    "explanation": "Social science helps us understand how societies function, why people behave the way they do, and how to address social issues effectively."
  },
  {
    "question": "Which of the following is an example of a social science research method?",
    "options": [
      "Laboratory experiment with chemicals",
      "Survey and questionnaire",
      "Dissection of organisms",
      "Telescope observation"
    ],
    "correct": 1,
    "explanation": "Surveys and questionnaires are common research methods in social science used to collect data about people's opinions, behaviours, and experiences."
  },
  {
    "question": "Anthropology is the study of:",
    "options": [
      "Animals",
      "Human cultures and societies across time",
      "Ocean currents",
      "Plant species"
    ],
    "correct": 1,
    "explanation": "Anthropology studies human cultures, societies, and their development across time, including both past and present communities."
  },
  {
    "question": "Which of the following best describes an interdisciplinary approach in social science?",
    "options": [
      "Studying only one subject",
      "Combining knowledge from multiple social science branches",
      "Ignoring other subjects",
      "Studying only natural sciences"
    ],
    "correct": 1,
    "explanation": "An interdisciplinary approach involves combining insights and methods from multiple branches of social science to gain a comprehensive understanding of issues."
  },
  {
    "question": "Psychology is the scientific study of:",
    "options": [
      "Rocks and minerals",
      "Mind and behaviour",
      "Political systems",
      "Economic markets"
    ],
    "correct": 1,
    "explanation": "Psychology is the scientific study of the human mind and behaviour, exploring how people think, feel, and act."
  },
  {
    "question": "Which social science discipline would study the impact of poverty on education?",
    "options": [
      "Only Economics",
      "Only Sociology",
      "Multiple disciplines like Economics, Sociology, and Education",
      "Only Geography"
    ],
    "correct": 2,
    "explanation": "The impact of poverty on education is a complex issue that requires insights from multiple social science disciplines including Economics, Sociology, and Education studies."
  },
  {
    "question": "Census data collection is an example of a method used in:",
    "options": [
      "Physics",
      "Chemistry",
      "Social Science",
      "Biology"
    ],
    "correct": 2,
    "explanation": "Census data collection is a social science method used to gather demographic information about populations for sociological, economic, and political analysis."
  },
  {
    "question": "Which of the following is a qualitative research method in social science?",
    "options": [
      "Statistical analysis",
      "In-depth interviews",
      "Mathematical modelling",
      "Numerical data collection"
    ],
    "correct": 1,
    "explanation": "In-depth interviews are a qualitative research method that gathers detailed, non-numerical data about people's experiences, perspectives, and feelings."
  },
  {
    "question": "The term 'society' in social science refers to:",
    "options": [
      "A group of animals",
      "A group of people sharing common culture, institutions, and territory",
      "A science laboratory",
      "A political party"
    ],
    "correct": 1,
    "explanation": "In social science, society refers to a group of people who share a common culture, institutions, territory, and social relationships."
  },
  {
    "question": "Which of these is a social institution?",
    "options": [
      "A rock formation",
      "Family",
      "A chemical compound",
      "A planet"
    ],
    "correct": 1,
    "explanation": "Family is a social institution — an established pattern of social behaviour that serves important functions in society, such as socialisation and support."
  },
  {
    "question": "Human Geography is concerned with:",
    "options": [
      "Only physical features of Earth",
      "The relationship between people and places",
      "Only climate patterns",
      "Only ocean currents"
    ],
    "correct": 1,
    "explanation": "Human Geography studies the relationship between people and their environments, including how humans shape and are shaped by the places they live."
  },
  {
    "question": "Which of the following questions would a social scientist most likely ask?",
    "options": [
      "What is the boiling point of water?",
      "Why do some societies have more inequality than others?",
      "How do cells divide?",
      "What causes volcanic eruptions?"
    ],
    "correct": 1,
    "explanation": "Social scientists study human societies and relationships, so a question about inequality across societies is most relevant to their field."
  },
  {
    "question": "The concept of 'culture' in social science includes:",
    "options": [
      "Only language",
      "Beliefs, customs, art, language, and way of life of a group",
      "Only food habits",
      "Only religious practices"
    ],
    "correct": 1,
    "explanation": "Culture in social science encompasses the entire way of life of a group, including beliefs, customs, art, language, food habits, and social practices."
  },
  {
    "question": "Which branch of social science would primarily study elections and voting patterns?",
    "options": [
      "Economics",
      "Political Science",
      "Anthropology",
      "Geography"
    ],
    "correct": 1,
    "explanation": "Political Science is the branch that studies government, politics, elections, voting behaviour, and the exercise of power in society."
  },
  {
    "question": "A social scientist studying how festivals bring communities together is practising:",
    "options": [
      "Physics",
      "Sociology",
      "Chemistry",
      "Astronomy"
    ],
    "correct": 1,
    "explanation": "Studying how festivals foster community bonds is a sociological inquiry, as Sociology examines social interactions and group dynamics."
  },
  {
    "question": "Which of the following is NOT a characteristic of social science?",
    "options": [
      "It studies human behaviour",
      "It uses systematic methods",
      "It produces universal laws like physics",
      "It examines social institutions"
    ],
    "correct": 2,
    "explanation": "Unlike physical sciences, social science does not produce universal, unchanging laws because human behaviour is complex and influenced by many variable factors."
  },
  {
    "question": "Demography is the study of:",
    "options": [
      "Democracy",
      "Human population statistics",
      "Earth's crust",
      "Animal behaviour"
    ],
    "correct": 1,
    "explanation": "Demography is a branch of social science that studies human population statistics including size, structure, distribution, and changes over time."
  },
  {
    "question": "Which of the following best describes the scope of social science?",
    "options": [
      "It is limited to studying ancient history only",
      "It covers all aspects of human life in society",
      "It only studies economic activities",
      "It only studies political systems"
    ],
    "correct": 1,
    "explanation": "Social science has a broad scope covering all aspects of human life in society, including history, economics, politics, culture, geography, and social relationships."
  }
]

export default questions
