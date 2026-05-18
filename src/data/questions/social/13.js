const questions = [
  {
    "question": "The Indus Valley Civilisation flourished around:",
    "options": [
      "5000 BCE",
      "2600-1900 BCE",
      "500 BCE",
      "100 CE"
    ],
    "correct": 1,
    "explanation": "The Indus Valley (Harappan) Civilisation flourished approximately between 2600-1900 BCE, making it one of the oldest urban civilisations."
  },
  {
    "question": "Harappa and Mohenjo-daro are located in present-day:",
    "options": [
      "India",
      "Pakistan",
      "Afghanistan",
      "Bangladesh"
    ],
    "correct": 1,
    "explanation": "Harappa (in Punjab) and Mohenjo-daro (in Sindh) are both located in present-day Pakistan, though many Indus Valley sites are also in India."
  },
  {
    "question": "The Indus Valley Civilisation was known for its:",
    "options": [
      "Lack of planning",
      "Advanced urban planning, drainage systems, and standardised weights",
      "Only agricultural practices",
      "Military conquests"
    ],
    "correct": 1,
    "explanation": "The Indus Valley Civilisation was remarkable for its advanced urban planning, grid-pattern streets, sophisticated drainage systems, and standardised weights and measures."
  },
  {
    "question": "The Great Bath of Mohenjo-daro was likely used for:",
    "options": [
      "Swimming competitions",
      "Ritual bathing and purification",
      "Water storage only",
      "Fish farming"
    ],
    "correct": 1,
    "explanation": "The Great Bath at Mohenjo-daro is believed to have been used for ritual bathing and purification ceremonies, suggesting the importance of cleanliness in their culture."
  },
  {
    "question": "The script of the Indus Valley Civilisation:",
    "options": [
      "Has been fully deciphered",
      "Has not been deciphered yet",
      "Was written in Sanskrit",
      "Was similar to Egyptian hieroglyphics"
    ],
    "correct": 1,
    "explanation": "The Indus Valley script has not been deciphered yet. It remains one of the great mysteries of ancient history."
  },
  {
    "question": "The Vedic period is associated with:",
    "options": [
      "The Indus Valley people",
      "The Aryan migration and composition of the Vedas",
      "The Mughal Empire",
      "The British period"
    ],
    "correct": 1,
    "explanation": "The Vedic period (1500-500 BCE) is associated with the composition of the Vedas and the development of early Hindu religious and social traditions."
  },
  {
    "question": "The Rigveda is:",
    "options": [
      "A book on mathematics",
      "The oldest of the four Vedas, containing hymns to gods",
      "A historical chronicle",
      "A book on medicine"
    ],
    "correct": 1,
    "explanation": "The Rigveda is the oldest of the four Vedas, containing 1,028 hymns (suktas) dedicated to various deities, composed in early Sanskrit."
  },
  {
    "question": "The four Vedas are:",
    "options": [
      "Rigveda, Yajurveda, Samaveda, and Atharvaveda",
      "Ramayana, Mahabharata, Bhagavad Gita, and Puranas",
      "Arthashastra, Manusmriti, Dharmashastra, and Kamasutra",
      "Jataka, Tripitaka, Dhammapada, and Anguttara"
    ],
    "correct": 0,
    "explanation": "The four Vedas are Rigveda (hymns), Yajurveda (rituals), Samaveda (melodies), and Atharvaveda (spells and charms)."
  },
  {
    "question": "The Mauryan Empire was significant in India's interaction with the world because:",
    "options": [
      "It had no foreign contacts",
      "Ashoka spread Buddhism to other countries and had diplomatic relations with Greek kingdoms",
      "It was isolated from the world",
      "It only traded with China"
    ],
    "correct": 1,
    "explanation": "The Mauryan Empire had extensive foreign contacts. Ashoka sent Buddhist missionaries to Sri Lanka, Central Asia, and Southeast Asia and maintained diplomatic relations with Greek kingdoms."
  },
  {
    "question": "The Silk Road connected:",
    "options": [
      "Only India and China",
      "Asia, the Middle East, and Europe for trade and cultural exchange",
      "Only Rome and Greece",
      "Only India and Africa"
    ],
    "correct": 1,
    "explanation": "The Silk Road was a network of trade routes connecting Asia, the Middle East, and Europe, facilitating the exchange of goods, ideas, religions, and cultures."
  },
  {
    "question": "Indian traders had extensive maritime trade with:",
    "options": [
      "Only China",
      "Southeast Asia, Rome, Arabia, and East Africa",
      "Only Britain",
      "Only Australia"
    ],
    "correct": 1,
    "explanation": "Indian traders had extensive maritime trade with Southeast Asia, the Roman Empire, Arabia, and East Africa, exporting spices, textiles, and precious stones."
  },
  {
    "question": "Buddhism spread from India to which regions?",
    "options": [
      "Only Europe",
      "Southeast Asia, Central Asia, China, Japan, and Sri Lanka",
      "Only America",
      "Only Africa"
    ],
    "correct": 1,
    "explanation": "Buddhism spread from India to Sri Lanka, Southeast Asia, Central Asia, China, Korea, and Japan, becoming a major world religion."
  },
  {
    "question": "The Gupta period saw significant advances in:",
    "options": [
      "Only warfare",
      "Mathematics, astronomy, literature, and art",
      "Only agriculture",
      "Only trade"
    ],
    "correct": 1,
    "explanation": "The Gupta period witnessed remarkable achievements in mathematics (zero, decimal system), astronomy (Aryabhata), literature (Kalidasa), and art (Ajanta paintings)."
  },
  {
    "question": "Indian numerals (including zero) were transmitted to the world through:",
    "options": [
      "The British",
      "Arab traders and scholars",
      "Chinese merchants",
      "Greek philosophers"
    ],
    "correct": 1,
    "explanation": "Indian numerals, including the concept of zero, were transmitted to the Arab world by scholars and traders, and then to Europe, which is why they are sometimes called 'Arabic numerals'."
  },
  {
    "question": "The Chola dynasty had significant trade and cultural links with:",
    "options": [
      "Only North India",
      "Southeast Asian countries",
      "Only Europe",
      "Only Africa"
    ],
    "correct": 1,
    "explanation": "The Chola dynasty had significant maritime trade and cultural links with Southeast Asian countries, spreading Indian culture, art, and Hindu-Buddhist traditions."
  },
  {
    "question": "Fa-Hien visited India during the reign of:",
    "options": [
      "Ashoka",
      "Chandragupta II (Vikramaditya)",
      "Harsha",
      "Akbar"
    ],
    "correct": 1,
    "explanation": "Fa-Hien (Faxian), a Chinese Buddhist pilgrim, visited India during the reign of Chandragupta II (Vikramaditya) of the Gupta dynasty, around 399-414 CE."
  },
  {
    "question": "The Indus Valley people traded with:",
    "options": [
      "No other civilisation",
      "Mesopotamia, Egypt, and Persia",
      "Only China",
      "Only Greece"
    ],
    "correct": 1,
    "explanation": "Archaeological evidence shows the Indus Valley people had extensive trade links with Mesopotamia, Egypt, and Persia, exchanging goods like beads, metals, and textiles."
  },
  {
    "question": "The concept of zero was formalised by the Indian mathematician:",
    "options": [
      "Pythagoras",
      "Brahmagupta",
      "Euclid",
      "Archimedes"
    ],
    "correct": 1,
    "explanation": "Brahmagupta, an Indian mathematician of the 7th century CE, was one of the first to formalise the rules for using zero in mathematical operations."
  },
  {
    "question": "Taxila (Takshashila) was an ancient centre of learning located in present-day:",
    "options": [
      "India",
      "Pakistan",
      "Nepal",
      "Sri Lanka"
    ],
    "correct": 1,
    "explanation": "Taxila was a renowned ancient centre of learning located in present-day Pakistan, where students from across the ancient world came to study various subjects."
  },
  {
    "question": "The Gandhara school of art was influenced by:",
    "options": [
      "Chinese art",
      "Greek and Roman art styles",
      "Egyptian art",
      "Persian art only"
    ],
    "correct": 1,
    "explanation": "The Gandhara school of art, which flourished in northwest India, was heavily influenced by Greek and Roman artistic traditions, creating Indo-Greek Buddhist sculptures."
  },
  {
    "question": "Angkor Wat in Cambodia shows the influence of:",
    "options": [
      "Chinese culture",
      "Indian culture and Hindu-Buddhist architecture",
      "European culture",
      "African culture"
    ],
    "correct": 1,
    "explanation": "Angkor Wat, the largest religious monument in the world, reflects strong Indian cultural influence with its Hindu-Buddhist architectural styles and Sanskrit inscriptions."
  },
  {
    "question": "Indian spices were in high demand in:",
    "options": [
      "Only neighbouring countries",
      "The Roman Empire and later European nations",
      "Only China",
      "Only Africa"
    ],
    "correct": 1,
    "explanation": "Indian spices like pepper, cardamom, and cinnamon were highly valued in the Roman Empire and later European nations, driving extensive maritime trade."
  },
  {
    "question": "The Kushana dynasty, which ruled parts of India, facilitated trade on:",
    "options": [
      "Only river routes",
      "The Silk Road",
      "Only sea routes",
      "Only overland routes within India"
    ],
    "correct": 1,
    "explanation": "The Kushana dynasty, particularly under Kanishka, controlled key areas along the Silk Road, facilitating trade between India, Central Asia, China, and Rome."
  },
  {
    "question": "Sanskrit literature like the Panchatantra influenced:",
    "options": [
      "Only Indian culture",
      "Literature in many world languages through translations",
      "Only Chinese literature",
      "No other culture"
    ],
    "correct": 1,
    "explanation": "The Panchatantra and other Sanskrit works were translated into Persian, Arabic, and later European languages, influencing storytelling traditions worldwide."
  },
  {
    "question": "Dholavira, an important Indus Valley site, is located in:",
    "options": [
      "Punjab",
      "Gujarat (India)",
      "Sindh",
      "Rajasthan"
    ],
    "correct": 1,
    "explanation": "Dholavira is an important Indus Valley Civilisation site located in the Kutch district of Gujarat, India, known for its sophisticated water management system."
  }
]

export default questions
