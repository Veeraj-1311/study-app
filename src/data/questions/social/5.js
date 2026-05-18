const questions = [
  {
    "question": "The Mauryan Empire was founded by:",
    "options": [
      "Ashoka",
      "Bindusara",
      "Chandragupta Maurya",
      "Samudragupta"
    ],
    "correct": 2,
    "explanation": "The Mauryan Empire was founded by Chandragupta Maurya around 321 BCE with the help of his advisor Chanakya (Kautilya)."
  },
  {
    "question": "Ashoka embraced Buddhism after the battle of:",
    "options": [
      "Panipat",
      "Kalinga",
      "Tarain",
      "Plassey"
    ],
    "correct": 1,
    "explanation": "Emperor Ashoka embraced Buddhism after witnessing the massive death and destruction caused by the Kalinga War (261 BCE)."
  },
  {
    "question": "The Arthashastra was written by:",
    "options": [
      "Ashoka",
      "Kautilya (Chanakya)",
      "Kalidasa",
      "Aryabhata"
    ],
    "correct": 1,
    "explanation": "The Arthashastra, an ancient Indian treatise on statecraft, politics, and economics, was written by Kautilya, also known as Chanakya."
  },
  {
    "question": "The Gupta period is often referred to as the:",
    "options": [
      "Iron Age of India",
      "Dark Age of India",
      "Golden Age of India",
      "Stone Age of India"
    ],
    "correct": 2,
    "explanation": "The Gupta period (320-550 CE) is called the Golden Age of India due to significant achievements in science, mathematics, art, literature, and philosophy."
  },
  {
    "question": "Aryabhata, the great mathematician and astronomer, lived during the:",
    "options": [
      "Mauryan period",
      "Gupta period",
      "Mughal period",
      "British period"
    ],
    "correct": 1,
    "explanation": "Aryabhata (476-550 CE) was a renowned mathematician and astronomer who lived during the Gupta period and contributed concepts like zero and the value of pi."
  },
  {
    "question": "The Varna system in ancient India divided society into:",
    "options": [
      "Two groups",
      "Three groups",
      "Four groups",
      "Six groups"
    ],
    "correct": 2,
    "explanation": "The Varna system divided society into four groups: Brahmins (priests/scholars), Kshatriyas (warriors/rulers), Vaishyas (traders/farmers), and Shudras (labourers/servants)."
  },
  {
    "question": "Which dynasty built the famous Ajanta and Ellora caves?",
    "options": [
      "Mauryas",
      "Guptas",
      "Vakatakas and Rashtrakutas",
      "Cholas"
    ],
    "correct": 2,
    "explanation": "The Ajanta caves were primarily patronised by the Vakatakas, while the Ellora caves were built under the patronage of the Rashtrakutas and other dynasties."
  },
  {
    "question": "The concept of 'Dhamma' was propagated by:",
    "options": [
      "Chandragupta Maurya",
      "Emperor Ashoka",
      "Harsha",
      "Samudragupta"
    ],
    "correct": 1,
    "explanation": "Emperor Ashoka propagated the concept of Dhamma (righteousness), which included tolerance, respect for elders, compassion, and non-violence."
  },
  {
    "question": "The Sangam literature belongs to which region of India?",
    "options": [
      "North India",
      "East India",
      "South India (Tamil Nadu)",
      "West India"
    ],
    "correct": 2,
    "explanation": "Sangam literature is a collection of ancient Tamil literary works from South India (Tamil Nadu), composed during the Sangam period (300 BCE - 300 CE)."
  },
  {
    "question": "King Harsha ruled from which city?",
    "options": [
      "Pataliputra",
      "Kannauj",
      "Delhi",
      "Ujjain"
    ],
    "correct": 1,
    "explanation": "King Harshavardhana (606-647 CE) ruled from Kannauj and was one of the last great rulers of ancient North India before the medieval period."
  },
  {
    "question": "The Chola dynasty was famous for its:",
    "options": [
      "Land army only",
      "Naval power and administration",
      "Desert warfare",
      "Mountain fortresses"
    ],
    "correct": 1,
    "explanation": "The Chola dynasty was renowned for its powerful navy, efficient local self-government system, and maritime trade across Southeast Asia."
  },
  {
    "question": "Buddhism was founded by:",
    "options": [
      "Mahavira",
      "Siddhartha Gautama",
      "Ashoka",
      "Chanakya"
    ],
    "correct": 1,
    "explanation": "Buddhism was founded by Siddhartha Gautama (the Buddha) in the 6th century BCE in ancient India."
  },
  {
    "question": "Jainism was propagated by:",
    "options": [
      "Buddha",
      "Ashoka",
      "Mahavira",
      "Chandragupta II"
    ],
    "correct": 2,
    "explanation": "Jainism was propagated by Vardhamana Mahavira (599-527 BCE), the 24th Tirthankara, who preached non-violence, truth, and asceticism."
  },
  {
    "question": "The Pallava dynasty is known for building:",
    "options": [
      "Taj Mahal",
      "Shore Temple at Mahabalipuram",
      "Red Fort",
      "Qutub Minar"
    ],
    "correct": 1,
    "explanation": "The Pallava dynasty is known for building magnificent temples, including the Shore Temple and the rock-cut monuments at Mahabalipuram (Mamallapuram)."
  },
  {
    "question": "The Gupta Empire was founded by:",
    "options": [
      "Chandragupta I",
      "Samudragupta",
      "Chandragupta II",
      "Kumaragupta"
    ],
    "correct": 0,
    "explanation": "The Gupta Empire was founded by Chandragupta I around 320 CE. He adopted the title Maharajadhiraja (King of Kings)."
  },
  {
    "question": "Samudragupta is often compared to:",
    "options": [
      "Julius Caesar",
      "Napoleon",
      "Alexander the Great",
      "Genghis Khan"
    ],
    "correct": 2,
    "explanation": "Samudragupta is often compared to Alexander the Great due to his extensive military conquests and is sometimes called the 'Napoleon of India' by historian V.A. Smith."
  },
  {
    "question": "The decimal number system was developed in ancient:",
    "options": [
      "Greece",
      "Rome",
      "India",
      "China"
    ],
    "correct": 2,
    "explanation": "The decimal number system, including the concept of zero, was developed in ancient India by mathematicians during the Gupta period."
  },
  {
    "question": "Which Chinese pilgrim visited India during the reign of Harsha?",
    "options": [
      "Fa-Hien",
      "Hiuen Tsang",
      "I-Tsing",
      "Marco Polo"
    ],
    "correct": 1,
    "explanation": "Hiuen Tsang (Xuanzang) visited India during the reign of Harshavardhana (630-645 CE) and left detailed accounts of Indian society and culture."
  },
  {
    "question": "The Panchayat system in ancient India refers to:",
    "options": [
      "Military organisation",
      "Local self-governance",
      "Religious council",
      "Trade guild"
    ],
    "correct": 1,
    "explanation": "The Panchayat system was a form of local self-governance in ancient India where a council of five (panch) elected members managed village affairs."
  },
  {
    "question": "The Rashtrakutas ruled from:",
    "options": [
      "Delhi",
      "Manyakheta (Malkhed)",
      "Pataliputra",
      "Madurai"
    ],
    "correct": 1,
    "explanation": "The Rashtrakutas ruled from their capital Manyakheta (modern Malkhed in Karnataka) and were a powerful dynasty in the Deccan region."
  },
  {
    "question": "The Nalanda University was a famous centre of learning during the:",
    "options": [
      "Vedic period",
      "Gupta and post-Gupta period",
      "British period",
      "Indus Valley period"
    ],
    "correct": 1,
    "explanation": "Nalanda University, located in present-day Bihar, was a renowned centre of learning during the Gupta and post-Gupta period, attracting scholars from across Asia."
  },
  {
    "question": "Kalidasa, the famous Sanskrit poet, lived during the:",
    "options": [
      "Mauryan period",
      "Gupta period",
      "Mughal period",
      "Vedic period"
    ],
    "correct": 1,
    "explanation": "Kalidasa, author of works like Shakuntala and Meghadutam, is believed to have lived during the Gupta period, in the court of Chandragupta II."
  },
  {
    "question": "The rock edicts of Ashoka were written in:",
    "options": [
      "Sanskrit",
      "Prakrit and Brahmi script",
      "English",
      "Tamil"
    ],
    "correct": 1,
    "explanation": "Ashoka's rock edicts were primarily written in Prakrit language using the Brahmi script, though some were also in Kharosthi and Greek."
  },
  {
    "question": "The Satavahana dynasty was prominent in:",
    "options": [
      "North India",
      "The Deccan region",
      "Northeast India",
      "Northwest India"
    ],
    "correct": 1,
    "explanation": "The Satavahana dynasty was prominent in the Deccan region of India, ruling from around the 2nd century BCE to the 3rd century CE."
  },
  {
    "question": "Trade guilds (shrenis) in ancient India were:",
    "options": [
      "Military units",
      "Organisations of craftsmen and merchants",
      "Religious sects",
      "Political parties"
    ],
    "correct": 1,
    "explanation": "Shrenis (trade guilds) were organisations of craftsmen and merchants in ancient India that regulated trade, set quality standards, and protected the interests of their members."
  }
]

export default questions
