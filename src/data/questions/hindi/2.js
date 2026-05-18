const questions = [
  {
    "question": "Who wrote 'Lhasa Ki Or'?",
    "options": [
      "Premchand",
      "Rahul Sankrityayan",
      "Hazari Prasad Dwivedi",
      "Mahadevi Verma"
    ],
    "correct": 1,
    "explanation": "Rahul Sankrityayan, known as the father of Hindi travel writing, wrote this travelogue."
  },
  {
    "question": "Lhasa is the capital of:",
    "options": [
      "Nepal",
      "Bhutan",
      "Tibet",
      "Mongolia"
    ],
    "correct": 2,
    "explanation": "Lhasa is the capital city of Tibet."
  },
  {
    "question": "The literary genre of this text is:",
    "options": [
      "Short story",
      "Poetry",
      "Travelogue",
      "Drama"
    ],
    "correct": 2,
    "explanation": "Lhasa Ki Or is a travelogue (yatra-vritant) describing the author's journey."
  },
  {
    "question": "Why did the author travel disguised?",
    "options": [
      "For fun",
      "Because foreigners were not allowed in Tibet",
      "To avoid paying taxes",
      "For a movie role"
    ],
    "correct": 1,
    "explanation": "Foreigners were forbidden from entering Tibet, so the author had to travel in disguise."
  },
  {
    "question": "Rahul Sankrityayan is known as:",
    "options": [
      "Father of Hindi poetry",
      "Father of Hindi travelogue",
      "Father of Hindi drama",
      "Father of Hindi novel"
    ],
    "correct": 1,
    "explanation": "Rahul Sankrityayan is regarded as the father of Hindi travel literature."
  },
  {
    "question": "The journey described in the text was primarily through:",
    "options": [
      "Deserts",
      "Mountains and difficult terrain",
      "Oceans",
      "Forests"
    ],
    "correct": 1,
    "explanation": "The journey to Lhasa involved crossing difficult mountainous terrain."
  },
  {
    "question": "The author's companion during the journey was:",
    "options": [
      "A soldier",
      "A Tibetan friend named Sumati",
      "A British officer",
      "He travelled alone"
    ],
    "correct": 1,
    "explanation": "Sumati was the author's Tibetan companion during the journey."
  },
  {
    "question": "The text highlights the value of:",
    "options": [
      "Wealth",
      "Adventure, curiosity, and cultural exploration",
      "Military power",
      "Political authority"
    ],
    "correct": 1,
    "explanation": "The text celebrates the spirit of adventure, cultural curiosity, and exploration."
  },
  {
    "question": "What danger did the author face during the journey?",
    "options": [
      "Wild animals",
      "Being caught as an illegal traveller",
      "Earthquake",
      "Floods"
    ],
    "correct": 1,
    "explanation": "The author risked being caught since foreigners were banned from entering Tibet."
  },
  {
    "question": "The narrative style of the text is:",
    "options": [
      "Third person",
      "First person autobiographical",
      "Dramatic dialogue",
      "Stream of consciousness"
    ],
    "correct": 1,
    "explanation": "The travelogue is written in first person, narrating the author's personal experiences."
  },
  {
    "question": "The author visited Tibet to study:",
    "options": [
      "Modern technology",
      "Buddhist manuscripts and scriptures",
      "Western philosophy",
      "English literature"
    ],
    "correct": 1,
    "explanation": "Rahul Sankrityayan visited Tibet to study ancient Buddhist texts and manuscripts."
  },
  {
    "question": "The hospitality the author received in Tibet was:",
    "options": [
      "Hostile",
      "Warm and generous from common Tibetans",
      "Only from officials",
      "Non-existent"
    ],
    "correct": 1,
    "explanation": "Despite being an illegal traveller, the author received warm hospitality from ordinary Tibetan people."
  },
  {
    "question": "The Tibetan society described by the author was:",
    "options": [
      "Highly industrialised",
      "Simple, deeply religious, and bound by traditions",
      "Very westernised",
      "Chaotic and violent"
    ],
    "correct": 1,
    "explanation": "The text describes Tibetan society as simple, deeply religious, and governed by age-old traditions."
  },
  {
    "question": "The author crossed dangerous mountain passes which shows his:",
    "options": [
      "Recklessness",
      "Spirit of adventure and dedication to knowledge",
      "Wealth",
      "Military training"
    ],
    "correct": 1,
    "explanation": "The perilous journey highlights the author's extraordinary courage and passion for acquiring knowledge."
  },
  {
    "question": "Rahul Sankrityayan is called 'Mahapandit' because of his:",
    "options": [
      "Political career",
      "Vast knowledge spanning many languages and subjects",
      "Wealth",
      "Military service"
    ],
    "correct": 1,
    "explanation": "He was called Mahapandit (great scholar) for his mastery of multiple languages and wide-ranging scholarship."
  },
  {
    "question": "'ल्हासा की ओर' पाठ के लेखक कौन हैं?",
    "options": [
      "प्रेमचंद",
      "राहुल सांकृत्यायन",
      "जाबिर हुसैन",
      "हज़ारी प्रसाद द्विवेदी"
    ],
    "correct": 1,
    "explanation": "ल्हासा की ओर राहुल सांकृत्यायन द्वारा लिखित यात्रा वृत्तांत है।"
  },
  {
    "question": "ल्हासा कहाँ स्थित है?",
    "options": [
      "नेपाल",
      "चीन (तिब्बत)",
      "भूटान",
      "म्यांमार"
    ],
    "correct": 1,
    "explanation": "ल्हासा तिब्बत (चीन) की राजधानी है।"
  },
  {
    "question": "लेखक ने यात्रा किस वर्ष की थी?",
    "options": [
      "1929",
      "1930",
      "1935",
      "1940"
    ],
    "correct": 0,
    "explanation": "लेखक ने 1929 में नेपाल से तिब्बत की यात्रा की थी।"
  },
  {
    "question": "लेखक के साथ यात्रा में कौन था?",
    "options": [
      "सुमति",
      "रामचंद्र",
      "प्रेमचंद",
      "विनोद"
    ],
    "correct": 0,
    "explanation": "लेखक के साथ सुमति नामक बौद्ध भिक्षु यात्रा में था।"
  },
  {
    "question": "तिब्बत में भिखारी को क्या कहा जाता है?",
    "options": [
      "फकीर",
      "संन्यासी",
      "भिक्षु",
      "कुसंग-कुसुंग"
    ],
    "correct": 3,
    "explanation": "तिब्बत में भिखारियों को कुसंग-कुसुंग कहा जाता है।"
  },
  {
    "question": "तिब्बत में स्त्रियों की क्या स्थिति बताई गई है?",
    "options": [
      "बहुत दयनीय",
      "बहुत स्वतंत्र",
      "पूर्णतः निर्भर",
      "शिक्षा से वंचित"
    ],
    "correct": 1,
    "explanation": "तिब्बत में स्त्रियाँ बहुत स्वतंत्र थीं और अजनबियों से भी खुलकर बात करती थीं।"
  },
  {
    "question": "लेखक को डाकुओं से बचने के लिए क्या करना पड़ा?",
    "options": [
      "भागना पड़ा",
      "भिक्षु का वेश बनाना पड़ा",
      "छिपना पड़ा",
      "लड़ना पड़ा"
    ],
    "correct": 2,
    "explanation": "लेखक को डाकुओं से बचने के लिए छिपकर यात्रा करनी पड़ी।"
  },
  {
    "question": "ल्हासा की ओर पाठ किस विधा में है?",
    "options": [
      "कहानी",
      "निबंध",
      "यात्रा वृत्तांत",
      "कविता"
    ],
    "correct": 2,
    "explanation": "ल्हासा की ओर एक यात्रा वृत्तांत है।"
  },
  {
    "question": "तिब्बत में जाति-पाँति के बारे में क्या कहा गया है?",
    "options": [
      "बहुत कठोर है",
      "कोई भेदभाव नहीं है",
      "केवल ऊँची जाति को महत्व",
      "जाति प्रथा सख्त है"
    ],
    "correct": 1,
    "explanation": "तिब्बत में जाति-पाँति का कोई भेदभाव नहीं था।"
  },
  {
    "question": "लंकोर में लेखक ने क्या देखा?",
    "options": [
      "एक मंदिर",
      "एक सुंदर झील",
      "चीनी सैनिक",
      "हरे-भरे मैदान"
    ],
    "correct": 1,
    "explanation": "लंकोर में लेखक ने एक सुंदर झील देखी जिसका वर्णन उन्होंने किया।"
  }
]

export default questions
