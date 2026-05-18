const questions = [
  {
    "question": "Authority refers to:",
    "options": [
      "Physical force only",
      "The legitimate right to give orders and make decisions",
      "Wealth and money",
      "Popularity among people"
    ],
    "correct": 1,
    "explanation": "Authority is the legitimate right or power to give orders, make decisions, and enforce obedience, derived from a recognised position or role."
  },
  {
    "question": "The difference between power and authority is:",
    "options": [
      "There is no difference",
      "Power is the ability to influence, while authority is the legitimate right to exercise power",
      "Authority is illegal, power is legal",
      "Power is always democratic"
    ],
    "correct": 1,
    "explanation": "Power is the ability to influence others, while authority is the legitimate, recognised right to exercise that power within an institutional framework."
  },
  {
    "question": "According to Max Weber, which type of authority is based on customs and traditions?",
    "options": [
      "Legal-rational authority",
      "Charismatic authority",
      "Traditional authority",
      "Democratic authority"
    ],
    "correct": 2,
    "explanation": "Traditional authority, as described by Max Weber, is based on long-established customs, traditions, and hereditary rights, such as monarchy."
  },
  {
    "question": "Charismatic authority is based on:",
    "options": [
      "Laws and rules",
      "The exceptional personal qualities of a leader",
      "Hereditary succession",
      "Military power"
    ],
    "correct": 1,
    "explanation": "Charismatic authority is based on the exceptional personal qualities, charm, and appeal of a leader who inspires devotion and loyalty among followers."
  },
  {
    "question": "Legal-rational authority is based on:",
    "options": [
      "Personal charm of the leader",
      "Established laws, rules, and procedures",
      "Family traditions",
      "Religious texts"
    ],
    "correct": 1,
    "explanation": "Legal-rational authority derives from established laws, rules, and procedures. Modern democratic governments are based on this type of authority."
  },
  {
    "question": "The legislature in India is responsible for:",
    "options": [
      "Implementing laws",
      "Making and passing laws",
      "Interpreting laws",
      "Enforcing law and order"
    ],
    "correct": 1,
    "explanation": "The legislature (Parliament at the central level, State Legislatures at the state level) is responsible for making, debating, and passing laws."
  },
  {
    "question": "The executive branch of government is responsible for:",
    "options": [
      "Making laws",
      "Implementing and enforcing laws",
      "Interpreting laws",
      "Electing representatives"
    ],
    "correct": 1,
    "explanation": "The executive branch is responsible for implementing and enforcing the laws passed by the legislature. It includes the President, Prime Minister, and the bureaucracy."
  },
  {
    "question": "The judiciary is responsible for:",
    "options": [
      "Making laws",
      "Implementing laws",
      "Interpreting laws and delivering justice",
      "Collecting taxes"
    ],
    "correct": 2,
    "explanation": "The judiciary interprets laws, settles disputes, and ensures justice. It also protects fundamental rights and checks the powers of the other branches."
  },
  {
    "question": "The separation of powers means:",
    "options": [
      "One branch controls all government functions",
      "Government powers are divided among the legislature, executive, and judiciary",
      "Only the military has power",
      "Powers are shared between countries"
    ],
    "correct": 1,
    "explanation": "Separation of powers divides government functions among three branches — legislature, executive, and judiciary — to prevent concentration of power and ensure checks and balances."
  },
  {
    "question": "In India, the Prime Minister is the head of:",
    "options": [
      "The state",
      "The government (executive)",
      "The judiciary",
      "The military only"
    ],
    "correct": 1,
    "explanation": "The Prime Minister is the head of the government (executive branch) in India, leading the Council of Ministers and making key policy decisions."
  },
  {
    "question": "The President of India is elected by:",
    "options": [
      "Direct vote of the people",
      "An electoral college of elected members of Parliament and State Legislatures",
      "The Prime Minister",
      "The Supreme Court"
    ],
    "correct": 1,
    "explanation": "The President of India is elected by an electoral college consisting of elected members of both houses of Parliament and State Legislative Assemblies."
  },
  {
    "question": "A federal system of government divides power between:",
    "options": [
      "The army and police",
      "The central government and state/regional governments",
      "Only local bodies",
      "Only the judiciary"
    ],
    "correct": 1,
    "explanation": "A federal system divides governmental power between a central (national) government and state or regional governments, each with defined areas of authority."
  },
  {
    "question": "A unitary system of government has:",
    "options": [
      "Power divided between centre and states",
      "All power concentrated in the central government",
      "No government at all",
      "Power only with local bodies"
    ],
    "correct": 1,
    "explanation": "In a unitary system, all governmental power is concentrated in the central government, which may delegate powers to local units but retains ultimate authority."
  },
  {
    "question": "Accountability in government means:",
    "options": [
      "Government officials are not answerable to anyone",
      "Government officials must explain and justify their actions to the people",
      "Only the military is accountable",
      "Accountability is not important in democracy"
    ],
    "correct": 1,
    "explanation": "Accountability means government officials must explain and justify their actions and decisions to the people, the legislature, and other institutions."
  },
  {
    "question": "The Supreme Court of India is the:",
    "options": [
      "Lowest court in the country",
      "Highest court and guardian of the Constitution",
      "Only a civil court",
      "Part of the executive branch"
    ],
    "correct": 1,
    "explanation": "The Supreme Court of India is the highest court in the country and serves as the guardian of the Constitution, with the power of judicial review."
  },
  {
    "question": "Judicial review means:",
    "options": [
      "Judges reviewing their own decisions",
      "The power of courts to examine whether laws and actions of government are constitutional",
      "The legislature reviewing court decisions",
      "Annual review of judges"
    ],
    "correct": 1,
    "explanation": "Judicial review is the power of the judiciary to examine laws and government actions to determine whether they conform to the Constitution."
  },
  {
    "question": "Local self-government bodies include:",
    "options": [
      "Only Parliament",
      "Panchayats and Municipalities",
      "Only the Supreme Court",
      "Only the military"
    ],
    "correct": 1,
    "explanation": "Local self-government bodies include Panchayati Raj institutions (rural areas) and Municipalities/Municipal Corporations (urban areas) that govern at the local level."
  },
  {
    "question": "The 73rd and 74th Constitutional Amendments strengthened:",
    "options": [
      "The military",
      "Panchayati Raj and urban local bodies respectively",
      "The Supreme Court",
      "The President's power"
    ],
    "correct": 1,
    "explanation": "The 73rd Amendment (1992) strengthened Panchayati Raj institutions, and the 74th Amendment (1992) strengthened urban local bodies (municipalities)."
  },
  {
    "question": "A constitution is important because it:",
    "options": [
      "Has no real purpose",
      "Defines the structure of government, rights of citizens, and limits of governmental power",
      "Only lists punishments",
      "Is just a symbolic document"
    ],
    "correct": 1,
    "explanation": "A constitution defines the structure and powers of government, establishes the rights of citizens, and sets limits on governmental authority."
  },
  {
    "question": "Checks and balances in government ensure that:",
    "options": [
      "One branch can dominate others",
      "Each branch can limit the powers of the other branches to prevent misuse of power",
      "Only the executive has power",
      "There are no limits on power"
    ],
    "correct": 1,
    "explanation": "Checks and balances allow each branch of government to limit and review the actions of the others, preventing the concentration or misuse of power."
  },
  {
    "question": "A monarchy is a form of government where:",
    "options": [
      "People elect their leaders",
      "A king or queen rules, often through hereditary succession",
      "Military controls the government",
      "There is no ruler"
    ],
    "correct": 1,
    "explanation": "A monarchy is a form of government where a king or queen serves as head of state, with the position usually passed down through hereditary succession."
  },
  {
    "question": "Legitimacy of a government comes from:",
    "options": [
      "Military force only",
      "The consent and acceptance of the governed",
      "Wealth of rulers",
      "Fear of punishment"
    ],
    "correct": 1,
    "explanation": "In a democracy, the legitimacy of government comes from the consent of the people, expressed through free and fair elections."
  },
  {
    "question": "The Right to Information (RTI) Act empowers citizens to:",
    "options": [
      "Become government officials",
      "Access information about government activities and decisions",
      "Change laws themselves",
      "Vote in elections"
    ],
    "correct": 1,
    "explanation": "The RTI Act (2005) empowers citizens to seek information from public authorities, promoting transparency and accountability in governance."
  },
  {
    "question": "Decentralisation of power means:",
    "options": [
      "Concentrating all power at the centre",
      "Distributing power to lower levels of government closer to the people",
      "Giving all power to the military",
      "Removing all authority"
    ],
    "correct": 1,
    "explanation": "Decentralisation means distributing governmental authority and decision-making power to lower levels of government, bringing governance closer to the people."
  },
  {
    "question": "The role of the state includes:",
    "options": [
      "Only collecting taxes",
      "Maintaining law and order, providing public services, and protecting citizens' rights",
      "Only fighting wars",
      "Only conducting elections"
    ],
    "correct": 1,
    "explanation": "The state's role includes maintaining law and order, providing public services (education, healthcare), protecting rights, managing the economy, and ensuring national security."
  }
]

export default questions
