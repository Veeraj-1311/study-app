const questions = [
  {
    "question": "Democracy literally means:",
    "options": [
      "Rule by the rich",
      "Rule by the people",
      "Rule by the military",
      "Rule by religious leaders"
    ],
    "correct": 1,
    "explanation": "Democracy comes from Greek words 'demos' (people) and 'kratos' (rule), literally meaning 'rule by the people'."
  },
  {
    "question": "Which of the following is a key feature of democracy?",
    "options": [
      "Rule by a single person",
      "Free and fair elections",
      "No opposition allowed",
      "Hereditary succession"
    ],
    "correct": 1,
    "explanation": "Free and fair elections are a key feature of democracy, allowing citizens to choose their representatives through a transparent voting process."
  },
  {
    "question": "In a direct democracy, citizens:",
    "options": [
      "Elect representatives to make laws",
      "Directly participate in decision-making",
      "Have no say in governance",
      "Are ruled by a king"
    ],
    "correct": 1,
    "explanation": "In a direct democracy, citizens directly participate in decision-making and law-making without intermediaries or elected representatives."
  },
  {
    "question": "In an indirect (representative) democracy, citizens:",
    "options": [
      "Make all decisions themselves",
      "Elect representatives to make decisions on their behalf",
      "Have no voting rights",
      "Are governed by hereditary rulers"
    ],
    "correct": 1,
    "explanation": "In an indirect or representative democracy, citizens elect representatives who make laws and decisions on their behalf in a legislature."
  },
  {
    "question": "India is an example of:",
    "options": [
      "Direct democracy",
      "Monarchy",
      "Representative democracy",
      "Military dictatorship"
    ],
    "correct": 2,
    "explanation": "India is a representative (indirect) democracy where citizens elect representatives to the Parliament and State Legislatures to govern on their behalf."
  },
  {
    "question": "Universal adult suffrage means:",
    "options": [
      "Only educated people can vote",
      "Only men can vote",
      "All adult citizens have the right to vote regardless of caste, creed, or gender",
      "Only property owners can vote"
    ],
    "correct": 2,
    "explanation": "Universal adult suffrage means all adult citizens have the right to vote without discrimination based on caste, religion, gender, wealth, or education."
  },
  {
    "question": "Which of the following is NOT a merit of democracy?",
    "options": [
      "Protects individual rights",
      "Promotes equality",
      "Decision-making can be slow",
      "Ensures accountability of leaders"
    ],
    "correct": 2,
    "explanation": "Slow decision-making is considered a limitation of democracy, not a merit. Merits include protection of rights, equality, and accountability."
  },
  {
    "question": "The rule of law in a democracy means:",
    "options": [
      "The ruler is above the law",
      "Everyone, including leaders, must follow the law",
      "Laws apply only to ordinary citizens",
      "There are no laws"
    ],
    "correct": 1,
    "explanation": "The rule of law means that everyone, including government officials and leaders, is subject to and must abide by the law of the land."
  },
  {
    "question": "Which ancient Greek city-state is considered the birthplace of democracy?",
    "options": [
      "Sparta",
      "Athens",
      "Rome",
      "Corinth"
    ],
    "correct": 1,
    "explanation": "Athens is considered the birthplace of democracy, where a form of direct democracy was practised around the 5th century BCE."
  },
  {
    "question": "Opposition parties in a democracy are important because they:",
    "options": [
      "Create chaos",
      "Hold the ruling party accountable and provide alternative policies",
      "Support everything the ruling party does",
      "Have no role"
    ],
    "correct": 1,
    "explanation": "Opposition parties play a vital role in democracy by scrutinising government actions, holding the ruling party accountable, and offering alternative policies."
  },
  {
    "question": "Fundamental rights in a democracy:",
    "options": [
      "Can be taken away by the government at any time",
      "Protect citizens against the misuse of state power",
      "Apply only to government officials",
      "Are not important"
    ],
    "correct": 1,
    "explanation": "Fundamental rights protect citizens against the arbitrary use of state power and guarantee basic freedoms essential for a dignified life."
  },
  {
    "question": "A dictatorship differs from a democracy in that:",
    "options": [
      "Power is shared among the people",
      "One person or a small group holds absolute power",
      "Free elections are held regularly",
      "Citizens have freedom of speech"
    ],
    "correct": 1,
    "explanation": "In a dictatorship, one person or a small group holds absolute power without the consent of the people, unlike in a democracy."
  },
  {
    "question": "Freedom of expression in a democracy means citizens can:",
    "options": [
      "Say anything without any responsibility",
      "Express their views freely within legal limits",
      "Only praise the government",
      "Not express any opinion"
    ],
    "correct": 1,
    "explanation": "Freedom of expression allows citizens to express their opinions and ideas freely, though this right comes with reasonable legal restrictions."
  },
  {
    "question": "Which of the following is a demerit of democracy?",
    "options": [
      "It promotes equality",
      "It ensures representation",
      "It may lead to corruption and inefficiency",
      "It protects fundamental rights"
    ],
    "correct": 2,
    "explanation": "Democracy can sometimes lead to corruption, inefficiency, and delays in decision-making due to lengthy debates and political rivalries."
  },
  {
    "question": "Secularism in a democracy means:",
    "options": [
      "The state has an official religion",
      "The state treats all religions equally and does not favour any",
      "Religion controls the government",
      "Only one religion is allowed"
    ],
    "correct": 1,
    "explanation": "Secularism means the state treats all religions equally, does not favour or discriminate against any religion, and separates religion from governance."
  },
  {
    "question": "The head of state in the Indian democracy is:",
    "options": [
      "The Prime Minister",
      "The President",
      "The Chief Justice",
      "The Governor"
    ],
    "correct": 1,
    "explanation": "The President of India is the constitutional head of state, while the Prime Minister is the head of government who exercises executive powers."
  },
  {
    "question": "Which document is considered the supreme law of India?",
    "options": [
      "The Vedas",
      "The Constitution of India",
      "The Arthashastra",
      "The Panchayati Raj Act"
    ],
    "correct": 1,
    "explanation": "The Constitution of India, adopted on 26 January 1950, is the supreme law of the country, defining the framework of government and citizens' rights."
  },
  {
    "question": "Transparency in a democracy means:",
    "options": [
      "Government operations are kept secret",
      "Government decisions and processes are open for public scrutiny",
      "Only ministers know about government actions",
      "Media is not allowed to report on governance"
    ],
    "correct": 1,
    "explanation": "Transparency means government decisions, processes, and information are open and accessible to the public, enabling citizens to hold the government accountable."
  },
  {
    "question": "Which of the following is essential for a healthy democracy?",
    "options": [
      "One-party system",
      "Informed and active citizenry",
      "Military rule",
      "Censorship of media"
    ],
    "correct": 1,
    "explanation": "An informed and active citizenry is essential for a healthy democracy, as engaged citizens can make better electoral choices and hold leaders accountable."
  },
  {
    "question": "The right to vote is also known as:",
    "options": [
      "Franchise or suffrage",
      "Habeas corpus",
      "Mandate",
      "Referendum"
    ],
    "correct": 0,
    "explanation": "The right to vote is also known as franchise or suffrage. Universal adult franchise means every adult citizen has the right to vote."
  },
  {
    "question": "In a constitutional democracy:",
    "options": [
      "The ruler has unlimited power",
      "The powers of the government are limited by a constitution",
      "There is no written law",
      "The military makes all decisions"
    ],
    "correct": 1,
    "explanation": "In a constitutional democracy, the powers of the government are defined and limited by a constitution, which protects citizens' rights."
  },
  {
    "question": "Which of the following countries is NOT a democracy?",
    "options": [
      "India",
      "France",
      "North Korea",
      "Japan"
    ],
    "correct": 2,
    "explanation": "North Korea is a totalitarian state ruled by a single party under a hereditary dictatorship, not a democracy."
  },
  {
    "question": "Public opinion in a democracy is expressed through:",
    "options": [
      "Only elections",
      "Elections, media, protests, and public debates",
      "Only the government",
      "Only through courts"
    ],
    "correct": 1,
    "explanation": "In a democracy, public opinion is expressed through multiple channels including elections, media, peaceful protests, public debates, and civil society."
  },
  {
    "question": "Equality before the law means:",
    "options": [
      "Rich people get special treatment",
      "All persons are treated equally by the law regardless of their status",
      "Laws apply differently to different people",
      "Only citizens are protected by law"
    ],
    "correct": 1,
    "explanation": "Equality before the law means every person is treated equally by the legal system, regardless of their social status, wealth, religion, or position."
  },
  {
    "question": "The term 'sovereign' in the Indian Constitution means:",
    "options": [
      "India is controlled by another country",
      "India is an independent nation that makes its own decisions",
      "India follows orders from the UN",
      "India has no government"
    ],
    "correct": 1,
    "explanation": "Sovereign means India is an independent nation, free from external control, and has the supreme power to govern itself and make its own decisions."
  }
]

export default questions
