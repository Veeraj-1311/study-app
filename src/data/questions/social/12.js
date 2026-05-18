const questions = [
  {
    "question": "The Delhi Sultanate was established in:",
    "options": [
      "1006 CE",
      "1206 CE",
      "1306 CE",
      "1406 CE"
    ],
    "correct": 1,
    "explanation": "The Delhi Sultanate was established in 1206 CE when Qutb-ud-din Aibak, a former slave of Muhammad of Ghor, became the first Sultan of Delhi."
  },
  {
    "question": "Which of the following dynasties ruled during the Delhi Sultanate period?",
    "options": [
      "Maurya and Gupta",
      "Slave, Khalji, Tughlaq, Sayyid, and Lodi",
      "Chola and Pallava",
      "Maratha and Sikh"
    ],
    "correct": 1,
    "explanation": "The Delhi Sultanate comprised five dynasties: Slave (Mamluk), Khalji, Tughlaq, Sayyid, and Lodi, ruling from 1206 to 1526 CE."
  },
  {
    "question": "The Qutub Minar was begun by:",
    "options": [
      "Akbar",
      "Qutb-ud-din Aibak",
      "Alauddin Khalji",
      "Muhammad bin Tughlaq"
    ],
    "correct": 1,
    "explanation": "The construction of Qutub Minar in Delhi was begun by Qutb-ud-din Aibak in 1193 CE and completed by his successor Iltutmish."
  },
  {
    "question": "Alauddin Khalji is known for his:",
    "options": [
      "Religious tolerance",
      "Market control policies and military conquests",
      "Building the Taj Mahal",
      "Naval expeditions"
    ],
    "correct": 1,
    "explanation": "Alauddin Khalji is known for his strict market control policies to keep prices low and his successful military campaigns, including repelling Mongol invasions."
  },
  {
    "question": "Muhammad bin Tughlaq shifted his capital from Delhi to:",
    "options": [
      "Agra",
      "Daulatabad",
      "Lahore",
      "Jaunpur"
    ],
    "correct": 1,
    "explanation": "Muhammad bin Tughlaq shifted his capital from Delhi to Daulatabad (Devagiri) in the Deccan, which proved disastrous and was eventually reversed."
  },
  {
    "question": "The Mughal Empire in India was founded by:",
    "options": [
      "Akbar",
      "Babur",
      "Humayun",
      "Shah Jahan"
    ],
    "correct": 1,
    "explanation": "The Mughal Empire was founded by Babur after his victory in the First Battle of Panipat in 1526 CE, defeating Ibrahim Lodi."
  },
  {
    "question": "The Battle of Panipat (1526) was fought between:",
    "options": [
      "Akbar and Hemu",
      "Babur and Ibrahim Lodi",
      "Humayun and Sher Shah",
      "Aurangzeb and Shivaji"
    ],
    "correct": 1,
    "explanation": "The First Battle of Panipat (1526) was fought between Babur and Ibrahim Lodi, the last Sultan of Delhi. Babur's victory established the Mughal Empire."
  },
  {
    "question": "Akbar's policy of 'Sulh-i-Kul' means:",
    "options": [
      "Divide and rule",
      "Universal peace and tolerance",
      "Military aggression",
      "Religious conversion"
    ],
    "correct": 1,
    "explanation": "Akbar's policy of Sulh-i-Kul meant universal peace and tolerance, promoting harmony among different religious communities in his empire."
  },
  {
    "question": "The Mansabdari system was introduced by:",
    "options": [
      "Babur",
      "Humayun",
      "Akbar",
      "Shah Jahan"
    ],
    "correct": 2,
    "explanation": "The Mansabdari system was introduced by Akbar to organise military and civil administration. It was a grading system that determined a person's rank and salary."
  },
  {
    "question": "The Taj Mahal was built by:",
    "options": [
      "Akbar",
      "Jahangir",
      "Shah Jahan",
      "Aurangzeb"
    ],
    "correct": 2,
    "explanation": "The Taj Mahal in Agra was built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It was completed around 1653 CE."
  },
  {
    "question": "The Bhakti movement emphasised:",
    "options": [
      "Rituals and ceremonies",
      "Personal devotion to God and equality of all humans",
      "Military conquest",
      "Trade and commerce"
    ],
    "correct": 1,
    "explanation": "The Bhakti movement emphasised personal devotion to God, rejected caste discrimination, and promoted the idea that all people are equal before God."
  },
  {
    "question": "Which of the following was a prominent Bhakti saint?",
    "options": [
      "Chanakya",
      "Kabir",
      "Ashoka",
      "Chandragupta"
    ],
    "correct": 1,
    "explanation": "Kabir was a prominent Bhakti saint who preached unity of God, rejected religious discrimination, and composed devotional poetry in simple language."
  },
  {
    "question": "The Sufi movement in India promoted:",
    "options": [
      "Military conquest",
      "Mystical love of God, tolerance, and spiritual purification",
      "Rigid orthodoxy",
      "Political power"
    ],
    "correct": 1,
    "explanation": "The Sufi movement promoted mystical love of God, religious tolerance, spiritual purification through meditation, and service to humanity."
  },
  {
    "question": "Guru Nanak Dev, the founder of Sikhism, preached:",
    "options": [
      "Idol worship",
      "Caste discrimination",
      "One God, equality, and honest living",
      "Military conquest"
    ],
    "correct": 2,
    "explanation": "Guru Nanak Dev preached the worship of one God, equality of all human beings, honest living, and service to the community."
  },
  {
    "question": "The Vijayanagara Empire was located in:",
    "options": [
      "North India",
      "South India",
      "East India",
      "West India"
    ],
    "correct": 1,
    "explanation": "The Vijayanagara Empire was a powerful South Indian kingdom with its capital at Hampi (in present-day Karnataka), flourishing from 1336 to 1646 CE."
  },
  {
    "question": "Krishnadevaraya was a famous ruler of the:",
    "options": [
      "Delhi Sultanate",
      "Mughal Empire",
      "Vijayanagara Empire",
      "Bahmani Sultanate"
    ],
    "correct": 2,
    "explanation": "Krishnadevaraya was the greatest ruler of the Vijayanagara Empire, known for his military prowess, patronage of art and literature, and efficient administration."
  },
  {
    "question": "The Bahmani Sultanate was established in the:",
    "options": [
      "North India",
      "Deccan region",
      "Northeast India",
      "Northwest India"
    ],
    "correct": 1,
    "explanation": "The Bahmani Sultanate was established in 1347 CE in the Deccan region, covering parts of present-day Karnataka, Maharashtra, and Andhra Pradesh."
  },
  {
    "question": "Shivaji Maharaj founded the:",
    "options": [
      "Mughal Empire",
      "Delhi Sultanate",
      "Maratha Empire",
      "Sikh Empire"
    ],
    "correct": 2,
    "explanation": "Shivaji Maharaj founded the Maratha Empire in the 17th century, establishing an independent kingdom that challenged Mughal dominance."
  },
  {
    "question": "Shivaji's system of administration was known for its:",
    "options": [
      "Foreign influence",
      "Efficient revenue system, strong navy, and guerrilla warfare",
      "Lack of organisation",
      "Complete dependence on Mughals"
    ],
    "correct": 1,
    "explanation": "Shivaji's administration featured an efficient revenue system, a council of eight ministers (Ashtapradhan), a strong navy, and innovative guerrilla warfare tactics."
  },
  {
    "question": "Mirabai was a Bhakti saint devoted to:",
    "options": [
      "Lord Shiva",
      "Lord Krishna",
      "Goddess Durga",
      "Lord Rama"
    ],
    "correct": 1,
    "explanation": "Mirabai was a Rajput princess and Bhakti saint who was deeply devoted to Lord Krishna and composed many devotional songs (bhajans) in his praise."
  },
  {
    "question": "The Din-i-Ilahi was a new faith founded by:",
    "options": [
      "Babur",
      "Akbar",
      "Aurangzeb",
      "Shah Jahan"
    ],
    "correct": 1,
    "explanation": "Din-i-Ilahi (Religion of God) was founded by Emperor Akbar in 1582 CE, combining elements from various religions to promote harmony and tolerance."
  },
  {
    "question": "Aurangzeb was the last great Mughal emperor. His reign saw:",
    "options": [
      "Expansion of the empire but also its eventual decline",
      "Only prosperity",
      "Only peace",
      "Only artistic development"
    ],
    "correct": 0,
    "explanation": "Aurangzeb expanded the Mughal Empire to its greatest extent but his long wars and religious policies also sowed seeds for its eventual decline."
  },
  {
    "question": "The Rajput kingdoms were known for:",
    "options": [
      "Naval power",
      "Their bravery, honour, and resistance against invaders",
      "Lack of military tradition",
      "Only trade activities"
    ],
    "correct": 1,
    "explanation": "The Rajput kingdoms were known for their warrior tradition, bravery, honour (Rajput code of conduct), and fierce resistance against foreign invaders."
  },
  {
    "question": "Amir Khusrau was a famous:",
    "options": [
      "Military commander only",
      "Poet, musician, and scholar of the Sultanate period",
      "Mughal emperor",
      "British officer"
    ],
    "correct": 1,
    "explanation": "Amir Khusrau was a renowned Sufi poet, musician, and scholar who lived during the Delhi Sultanate period and is considered the father of Qawwali."
  },
  {
    "question": "The decline of the Mughal Empire after Aurangzeb led to:",
    "options": [
      "A period of unity",
      "The rise of regional kingdoms and eventual European colonisation",
      "Immediate British rule",
      "Return of the Delhi Sultanate"
    ],
    "correct": 1,
    "explanation": "After Aurangzeb's death in 1707, the Mughal Empire weakened rapidly, leading to the rise of regional kingdoms and eventually European colonial expansion in India."
  }
]

export default questions
