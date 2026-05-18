const questions = [
  {
    "question": "The earliest humans are believed to have originated in:",
    "options": [
      "Europe",
      "Asia",
      "Africa",
      "Australia"
    ],
    "correct": 2,
    "explanation": "Scientific evidence, including fossil records, suggests that the earliest humans originated in Africa millions of years ago."
  },
  {
    "question": "The Stone Age is divided into which three periods?",
    "options": [
      "Bronze, Iron, and Steel Ages",
      "Palaeolithic, Mesolithic, and Neolithic",
      "Ancient, Medieval, and Modern",
      "Primary, Secondary, and Tertiary"
    ],
    "correct": 1,
    "explanation": "The Stone Age is divided into the Palaeolithic (Old Stone Age), Mesolithic (Middle Stone Age), and Neolithic (New Stone Age) periods."
  },
  {
    "question": "During the Palaeolithic Age, humans primarily lived as:",
    "options": [
      "Farmers",
      "Traders",
      "Hunter-gatherers",
      "Industrialists"
    ],
    "correct": 2,
    "explanation": "During the Palaeolithic Age, humans lived as hunter-gatherers, relying on hunting animals and gathering wild plants for food."
  },
  {
    "question": "The discovery of fire was significant because it:",
    "options": [
      "Only provided light",
      "Helped in cooking food, providing warmth, and protection from wild animals",
      "Was used only for religious purposes",
      "Had no real importance"
    ],
    "correct": 1,
    "explanation": "Fire was a crucial discovery that helped early humans cook food, stay warm, protect themselves from predators, and later clear land for farming."
  },
  {
    "question": "The Neolithic Revolution refers to the shift from:",
    "options": [
      "Stone tools to metal tools",
      "Hunting-gathering to farming and settled life",
      "Monarchy to democracy",
      "Oral to written communication"
    ],
    "correct": 1,
    "explanation": "The Neolithic Revolution was the transition from nomadic hunting-gathering to settled agricultural life, which fundamentally changed human civilisation."
  },
  {
    "question": "Which of the following was the first animal to be domesticated by humans?",
    "options": [
      "Horse",
      "Cow",
      "Dog",
      "Sheep"
    ],
    "correct": 2,
    "explanation": "The dog is believed to be the first animal domesticated by humans, likely from wolves, helping with hunting and protection."
  },
  {
    "question": "Early humans made their tools primarily from:",
    "options": [
      "Metal",
      "Plastic",
      "Stone",
      "Wood only"
    ],
    "correct": 2,
    "explanation": "Early humans primarily made tools from stone, which is why this period is called the Stone Age. They used stones for cutting, scraping, and hunting."
  },
  {
    "question": "Cave paintings by early humans have been found in:",
    "options": [
      "Only India",
      "Only France",
      "Various places including Bhimbetka (India), Altamira (Spain), and Lascaux (France)",
      "Only Egypt"
    ],
    "correct": 2,
    "explanation": "Cave paintings have been discovered in many places worldwide, including Bhimbetka in India, Altamira in Spain, and Lascaux in France."
  },
  {
    "question": "The practice of agriculture began approximately:",
    "options": [
      "1,000 years ago",
      "5,000 years ago",
      "10,000 years ago",
      "1 million years ago"
    ],
    "correct": 2,
    "explanation": "Agriculture began approximately 10,000 years ago during the Neolithic period, marking one of the most important developments in human history."
  },
  {
    "question": "Which of the following crops were among the first to be cultivated?",
    "options": [
      "Potatoes and tomatoes",
      "Wheat and barley",
      "Sugarcane and coffee",
      "Rubber and cotton"
    ],
    "correct": 1,
    "explanation": "Wheat and barley were among the first crops cultivated by early humans in the Fertile Crescent region of Mesopotamia."
  },
  {
    "question": "Early civilisations typically developed near:",
    "options": [
      "Mountain tops",
      "River valleys",
      "Deserts",
      "Dense forests"
    ],
    "correct": 1,
    "explanation": "Early civilisations developed near river valleys because rivers provided water for drinking, irrigation, transportation, and fertile soil for farming."
  },
  {
    "question": "The invention of the wheel was important because it:",
    "options": [
      "Was used only for decoration",
      "Revolutionised transportation and pottery making",
      "Had no practical use initially",
      "Was only used in warfare"
    ],
    "correct": 1,
    "explanation": "The wheel revolutionised human life by enabling easier transportation of goods and people, and was also used in pottery making."
  },
  {
    "question": "Microliths are characteristic tools of which period?",
    "options": [
      "Palaeolithic Age",
      "Mesolithic Age",
      "Neolithic Age",
      "Iron Age"
    ],
    "correct": 1,
    "explanation": "Microliths (small, fine stone tools) are characteristic of the Mesolithic Age. They were used for making composite tools like arrows and sickles."
  },
  {
    "question": "Which of the following is considered one of the earliest civilisations?",
    "options": [
      "Roman civilisation",
      "Greek civilisation",
      "Mesopotamian civilisation",
      "Aztec civilisation"
    ],
    "correct": 2,
    "explanation": "The Mesopotamian civilisation (in modern-day Iraq) is one of the earliest known civilisations, developing around 3500 BCE in the Tigris-Euphrates river valley."
  },
  {
    "question": "The transition from nomadic to settled life was mainly due to:",
    "options": [
      "Climate becoming colder everywhere",
      "Development of agriculture",
      "Discovery of metals",
      "Invention of writing"
    ],
    "correct": 1,
    "explanation": "The development of agriculture allowed humans to grow their own food and settle in one place instead of constantly moving in search of food."
  },
  {
    "question": "Pottery was first developed during the:",
    "options": [
      "Palaeolithic Age",
      "Mesolithic Age",
      "Neolithic Age",
      "Bronze Age"
    ],
    "correct": 2,
    "explanation": "Pottery was first developed during the Neolithic Age when settled communities needed containers for storing grains, water, and cooking food."
  },
  {
    "question": "The term 'Palaeolithic' literally means:",
    "options": [
      "New Stone",
      "Middle Stone",
      "Old Stone",
      "No Stone"
    ],
    "correct": 2,
    "explanation": "The term Palaeolithic comes from Greek words 'palaeo' meaning old and 'lithos' meaning stone, so it literally means 'Old Stone' Age."
  },
  {
    "question": "Early humans lived in caves primarily for:",
    "options": [
      "Artistic expression only",
      "Shelter and protection from weather and wild animals",
      "Storing food only",
      "Religious ceremonies only"
    ],
    "correct": 1,
    "explanation": "Early humans used caves primarily as shelter to protect themselves from harsh weather conditions and dangerous wild animals."
  },
  {
    "question": "Writing was first developed in:",
    "options": [
      "India",
      "China",
      "Mesopotamia",
      "Egypt"
    ],
    "correct": 2,
    "explanation": "Writing was first developed in Mesopotamia around 3400-3200 BCE. The Sumerians developed cuneiform, one of the earliest known writing systems."
  },
  {
    "question": "The Bronze Age is characterised by:",
    "options": [
      "Use of stone tools only",
      "Use of iron tools",
      "Use of bronze for making tools and weapons",
      "Use of copper only"
    ],
    "correct": 2,
    "explanation": "The Bronze Age is characterised by the widespread use of bronze (an alloy of copper and tin) for making tools, weapons, and ornaments."
  },
  {
    "question": "Which of the following was a result of settled agricultural life?",
    "options": [
      "Decrease in population",
      "Development of villages and towns",
      "Return to hunting and gathering",
      "Decline in tool making"
    ],
    "correct": 1,
    "explanation": "Settled agricultural life led to the development of permanent villages and towns as people no longer needed to move in search of food."
  },
  {
    "question": "The earliest evidence of human habitation in the Indian subcontinent dates to approximately:",
    "options": [
      "5,000 years ago",
      "50,000 years ago",
      "2 million years ago",
      "500 years ago"
    ],
    "correct": 2,
    "explanation": "The earliest evidence of human habitation in the Indian subcontinent dates back approximately 2 million years, with stone tools found in places like the Soan Valley."
  },
  {
    "question": "Mehrgarh, one of the earliest Neolithic sites, is located in present-day:",
    "options": [
      "India",
      "Pakistan",
      "Afghanistan",
      "Iran"
    ],
    "correct": 1,
    "explanation": "Mehrgarh is one of the earliest known Neolithic sites in South Asia, located in present-day Balochistan, Pakistan, dating to around 7000 BCE."
  },
  {
    "question": "Which of these was NOT a feature of Neolithic settlements?",
    "options": [
      "Permanent houses",
      "Agriculture",
      "Domestication of animals",
      "Use of only natural caves for shelter"
    ],
    "correct": 3,
    "explanation": "Neolithic people built permanent houses rather than relying on natural caves. They practised agriculture, domesticated animals, and lived in settled communities."
  },
  {
    "question": "The discovery of metals marked the end of the:",
    "options": [
      "Iron Age",
      "Bronze Age",
      "Stone Age",
      "Modern Age"
    ],
    "correct": 2,
    "explanation": "The discovery and use of metals (first copper, then bronze) marked the end of the Stone Age and the beginning of the Metal Ages."
  }
]

export default questions
