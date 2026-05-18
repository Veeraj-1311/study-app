const questions = [
  {
    "question": "Economics is primarily the study of:",
    "options": [
      "Only money",
      "How societies allocate scarce resources to satisfy unlimited wants",
      "Only banking",
      "Only government budgets"
    ],
    "correct": 1,
    "explanation": "Economics studies how individuals, businesses, and societies allocate scarce resources to satisfy unlimited wants and needs."
  },
  {
    "question": "The difference between needs and wants is:",
    "options": [
      "There is no difference",
      "Needs are essential for survival, wants are desires that are not essential",
      "Wants are more important than needs",
      "Needs are unlimited, wants are limited"
    ],
    "correct": 1,
    "explanation": "Needs are basic essentials required for survival (food, shelter, clothing), while wants are desires for things that are not essential but improve quality of life."
  },
  {
    "question": "Which of the following is a 'need'?",
    "options": [
      "A luxury car",
      "Designer clothes",
      "Clean drinking water",
      "A video game console"
    ],
    "correct": 2,
    "explanation": "Clean drinking water is a basic need essential for survival. Luxury cars, designer clothes, and gaming consoles are wants."
  },
  {
    "question": "Goods are:",
    "options": [
      "Only intangible items",
      "Tangible physical items that satisfy human wants",
      "Only services",
      "Only natural resources"
    ],
    "correct": 1,
    "explanation": "Goods are tangible (physical) items like food, clothes, books, and machines that can be seen, touched, and used to satisfy human wants."
  },
  {
    "question": "Services are:",
    "options": [
      "Tangible products",
      "Intangible activities that satisfy human wants",
      "Only government functions",
      "Only banking activities"
    ],
    "correct": 1,
    "explanation": "Services are intangible activities like teaching, healthcare, banking, and transportation that satisfy human wants but cannot be physically touched."
  },
  {
    "question": "The four factors of production are:",
    "options": [
      "Buying, selling, trading, saving",
      "Land, labour, capital, and entrepreneurship",
      "Money, gold, silver, and diamonds",
      "Import, export, production, consumption"
    ],
    "correct": 1,
    "explanation": "The four factors of production are land (natural resources), labour (human effort), capital (machinery, tools, money), and entrepreneurship (organising other factors)."
  },
  {
    "question": "In economics, 'land' as a factor of production includes:",
    "options": [
      "Only agricultural land",
      "All natural resources including water, minerals, forests, and soil",
      "Only buildings",
      "Only urban property"
    ],
    "correct": 1,
    "explanation": "In economics, land refers to all natural resources used in production, including soil, water, forests, minerals, sunlight, and air."
  },
  {
    "question": "Labour refers to:",
    "options": [
      "Only physical work",
      "All human effort, both physical and mental, used in production",
      "Only factory work",
      "Only farm work"
    ],
    "correct": 1,
    "explanation": "Labour includes all human effort, both physical and mental, used in the production of goods and services, from farm work to professional services."
  },
  {
    "question": "Capital in economics refers to:",
    "options": [
      "Only money",
      "Man-made resources used in production like machinery, tools, and buildings",
      "Only gold and silver",
      "Only bank deposits"
    ],
    "correct": 1,
    "explanation": "Capital refers to man-made resources used in further production, including machinery, tools, buildings, technology, and equipment."
  },
  {
    "question": "An entrepreneur is someone who:",
    "options": [
      "Only works in a factory",
      "Organises factors of production and takes risks to start a business",
      "Only lends money",
      "Only buys goods"
    ],
    "correct": 1,
    "explanation": "An entrepreneur organises the other factors of production (land, labour, capital), takes business risks, and innovates to create goods and services."
  },
  {
    "question": "Scarcity in economics means:",
    "options": [
      "There is nothing available",
      "Resources are limited compared to unlimited human wants",
      "Everything is expensive",
      "Only poor people face shortages"
    ],
    "correct": 1,
    "explanation": "Scarcity means that available resources are limited while human wants are unlimited, forcing individuals and societies to make choices."
  },
  {
    "question": "Opportunity cost is:",
    "options": [
      "The price of a product",
      "The value of the next best alternative given up when making a choice",
      "The cost of raw materials",
      "The profit earned"
    ],
    "correct": 1,
    "explanation": "Opportunity cost is the value of the next best alternative that must be given up when making a choice between different uses of resources."
  },
  {
    "question": "Consumer goods are:",
    "options": [
      "Goods used to make other goods",
      "Goods bought by consumers for direct use",
      "Only food items",
      "Only luxury items"
    ],
    "correct": 1,
    "explanation": "Consumer goods are finished products bought by consumers for direct use or consumption, such as food, clothing, electronics, and furniture."
  },
  {
    "question": "Producer goods (capital goods) are:",
    "options": [
      "Goods sold directly to consumers",
      "Goods used to produce other goods and services",
      "Only agricultural products",
      "Only imported goods"
    ],
    "correct": 1,
    "explanation": "Producer goods (capital goods) are goods used in the production of other goods and services, such as machinery, raw materials, and tools."
  },
  {
    "question": "In a market economy, economic decisions are mainly made by:",
    "options": [
      "The government alone",
      "Individuals and businesses through market forces",
      "The military",
      "Religious leaders"
    ],
    "correct": 1,
    "explanation": "In a market economy, economic decisions about production, distribution, and pricing are made by individuals and businesses through supply and demand."
  },
  {
    "question": "In a command (planned) economy, economic decisions are made by:",
    "options": [
      "Private businesses",
      "The central government",
      "Individual consumers",
      "Foreign companies"
    ],
    "correct": 1,
    "explanation": "In a command economy, the central government makes all major economic decisions about what to produce, how to produce, and for whom to produce."
  },
  {
    "question": "India has a:",
    "options": [
      "Purely market economy",
      "Purely command economy",
      "Mixed economy",
      "Traditional economy"
    ],
    "correct": 2,
    "explanation": "India has a mixed economy that combines features of both market and command economies, with both private enterprise and government planning playing roles."
  },
  {
    "question": "The primary sector of the economy includes:",
    "options": [
      "Manufacturing and industry",
      "Services like banking and education",
      "Agriculture, fishing, mining, and forestry",
      "Information technology"
    ],
    "correct": 2,
    "explanation": "The primary sector includes activities that directly extract or harvest natural resources, such as agriculture, fishing, mining, and forestry."
  },
  {
    "question": "The secondary sector of the economy includes:",
    "options": [
      "Agriculture and fishing",
      "Manufacturing and industry",
      "Banking and education",
      "Government services"
    ],
    "correct": 1,
    "explanation": "The secondary sector involves manufacturing and industry, where raw materials from the primary sector are transformed into finished products."
  },
  {
    "question": "The tertiary sector of the economy includes:",
    "options": [
      "Farming",
      "Manufacturing",
      "Services like transport, communication, and trade",
      "Mining"
    ],
    "correct": 2,
    "explanation": "The tertiary sector includes service activities like transportation, communication, banking, education, healthcare, and trade."
  },
  {
    "question": "GDP stands for:",
    "options": [
      "Gross Domestic Product",
      "General Development Plan",
      "Government Domestic Policy",
      "Global Distribution Price"
    ],
    "correct": 0,
    "explanation": "GDP stands for Gross Domestic Product, which is the total value of all goods and services produced within a country in a given period."
  },
  {
    "question": "Which of the following is a free good?",
    "options": [
      "Bottled water",
      "Sunlight",
      "Electricity",
      "Petrol"
    ],
    "correct": 1,
    "explanation": "Sunlight is a free good because it is naturally available in unlimited quantity and does not require payment. Bottled water, electricity, and petrol are economic goods."
  },
  {
    "question": "Division of labour means:",
    "options": [
      "Everyone does the same work",
      "Breaking down production into specialised tasks performed by different workers",
      "Only managers work",
      "Machines replace all workers"
    ],
    "correct": 1,
    "explanation": "Division of labour means breaking down the production process into specialised tasks, each performed by different workers, increasing efficiency and productivity."
  },
  {
    "question": "Barter system is:",
    "options": [
      "Exchange of goods for money",
      "Direct exchange of goods and services without using money",
      "Online shopping",
      "Credit-based transactions"
    ],
    "correct": 1,
    "explanation": "The barter system is the direct exchange of goods and services without using money. It was the earliest form of trade before money was invented."
  },
  {
    "question": "The main problem with the barter system was:",
    "options": [
      "It was too easy",
      "The double coincidence of wants was difficult to achieve",
      "It used too much money",
      "It required banks"
    ],
    "correct": 1,
    "explanation": "The main problem with barter was the 'double coincidence of wants' — both parties had to want what the other offered at the same time, which was difficult."
  }
]

export default questions
