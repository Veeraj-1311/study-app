const questions = [
  {
    "question": "The Election Commission of India is responsible for:",
    "options": [
      "Making laws",
      "Conducting free and fair elections",
      "Appointing judges",
      "Collecting taxes"
    ],
    "correct": 1,
    "explanation": "The Election Commission of India is an autonomous constitutional body responsible for administering and conducting free and fair elections in India."
  },
  {
    "question": "The minimum voting age in India is:",
    "options": [
      "16 years",
      "18 years",
      "21 years",
      "25 years"
    ],
    "correct": 1,
    "explanation": "The minimum voting age in India is 18 years. The 61st Constitutional Amendment Act of 1988 lowered it from 21 to 18 years."
  },
  {
    "question": "Lok Sabha elections are an example of:",
    "options": [
      "Local elections",
      "State elections",
      "General elections",
      "By-elections"
    ],
    "correct": 2,
    "explanation": "Lok Sabha elections are general elections where the entire country votes to elect members of the lower house of Parliament."
  },
  {
    "question": "A by-election is held when:",
    "options": [
      "A general election takes place",
      "A seat becomes vacant before the term ends",
      "All seats are contested",
      "The government changes"
    ],
    "correct": 1,
    "explanation": "A by-election is held when a seat in the legislature becomes vacant before the end of the term, due to resignation, death, or disqualification of a member."
  },
  {
    "question": "EVM stands for:",
    "options": [
      "Electronic Voting Machine",
      "Election Verification Method",
      "Electoral Vote Management",
      "Electronic Vote Manager"
    ],
    "correct": 0,
    "explanation": "EVM stands for Electronic Voting Machine, which is used in Indian elections to record votes electronically instead of using paper ballots."
  },
  {
    "question": "NOTA on a ballot means:",
    "options": [
      "Not On The Agenda",
      "None Of The Above",
      "National Organisation for Transparent Administration",
      "New Option for Total Access"
    ],
    "correct": 1,
    "explanation": "NOTA stands for 'None Of The Above,' an option that allows voters to reject all candidates contesting in an election."
  },
  {
    "question": "A constituency is:",
    "options": [
      "A political party",
      "A geographical area whose voters elect a representative",
      "A government office",
      "A type of election"
    ],
    "correct": 1,
    "explanation": "A constituency is a defined geographical area whose eligible voters elect a representative to a legislative body."
  },
  {
    "question": "In India, the head of the Election Commission is called:",
    "options": [
      "Chief Electoral Officer",
      "Chief Election Commissioner",
      "Election Minister",
      "Electoral Chairman"
    ],
    "correct": 1,
    "explanation": "The head of the Election Commission of India is called the Chief Election Commissioner, who leads the multi-member commission."
  },
  {
    "question": "Which of the following is essential for free and fair elections?",
    "options": [
      "Only one party contesting",
      "Secret ballot",
      "Open voting",
      "Government control of media"
    ],
    "correct": 1,
    "explanation": "Secret ballot is essential for free and fair elections as it ensures voters can make their choice without fear of intimidation or retaliation."
  },
  {
    "question": "The Model Code of Conduct is:",
    "options": [
      "A law passed by Parliament",
      "A set of guidelines for political parties and candidates during elections",
      "A military code",
      "A school rulebook"
    ],
    "correct": 1,
    "explanation": "The Model Code of Conduct is a set of guidelines issued by the Election Commission for political parties and candidates to follow during elections."
  },
  {
    "question": "Universal adult franchise means:",
    "options": [
      "Only adults above 25 can vote",
      "Every citizen above 18 has the right to vote",
      "Only taxpayers can vote",
      "Only literate adults can vote"
    ],
    "correct": 1,
    "explanation": "Universal adult franchise means every citizen who has attained the age of 18 has the right to vote, without discrimination based on caste, religion, gender, or education."
  },
  {
    "question": "How many members are there in the Lok Sabha (maximum)?",
    "options": [
      "245",
      "545",
      "552",
      "500"
    ],
    "correct": 2,
    "explanation": "The maximum strength of Lok Sabha is 552 members — 530 from states, 20 from Union Territories, and 2 nominated Anglo-Indian members (though this provision was discontinued in 2020)."
  },
  {
    "question": "Rajya Sabha members are:",
    "options": [
      "Directly elected by the people",
      "Elected by elected members of State Legislative Assemblies",
      "Appointed by the Prime Minister",
      "Selected by the Supreme Court"
    ],
    "correct": 1,
    "explanation": "Rajya Sabha members are elected by the elected members of State Legislative Assemblies through the system of proportional representation."
  },
  {
    "question": "The tenure of Lok Sabha is normally:",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "3 years"
    ],
    "correct": 1,
    "explanation": "The normal tenure of Lok Sabha is 5 years from the date of its first meeting, unless dissolved earlier."
  },
  {
    "question": "An election manifesto is:",
    "options": [
      "A government document",
      "A statement of policies and promises made by a political party before elections",
      "A legal document",
      "A court order"
    ],
    "correct": 1,
    "explanation": "An election manifesto is a document published by a political party before elections, outlining its policies, plans, and promises to voters."
  },
  {
    "question": "The first general elections in independent India were held in:",
    "options": [
      "1947",
      "1950",
      "1951-52",
      "1955"
    ],
    "correct": 2,
    "explanation": "The first general elections in independent India were held in 1951-52, making India the largest democracy in the world to hold universal adult franchise elections."
  },
  {
    "question": "A political party must win how many seats to form a majority in Lok Sabha?",
    "options": [
      "200",
      "272",
      "300",
      "250"
    ],
    "correct": 1,
    "explanation": "A political party or coalition must win at least 272 seats (more than half of the total 543 elected seats) in the Lok Sabha to form a majority government."
  },
  {
    "question": "Which symbol is associated with the Election Commission of India?",
    "options": [
      "Lotus",
      "Ashoka Pillar",
      "A voter's hand with ink mark",
      "National flag"
    ],
    "correct": 2,
    "explanation": "The Election Commission uses the image of a voter showing an inked finger as its awareness symbol, representing the act of voting."
  },
  {
    "question": "Voter ID card is also known as:",
    "options": [
      "Aadhaar Card",
      "EPIC (Electors Photo Identity Card)",
      "PAN Card",
      "Ration Card"
    ],
    "correct": 1,
    "explanation": "The Voter ID card is officially known as EPIC (Electors Photo Identity Card), issued by the Election Commission as proof of identity for voting."
  },
  {
    "question": "Delimitation refers to:",
    "options": [
      "Counting votes",
      "Fixing the boundaries of constituencies",
      "Announcing election results",
      "Forming the government"
    ],
    "correct": 1,
    "explanation": "Delimitation is the process of fixing or redrawing the boundaries of electoral constituencies based on population changes as per census data."
  },
  {
    "question": "Which of the following would make an election unfair?",
    "options": [
      "Multiple parties contesting",
      "Use of secret ballot",
      "Intimidation of voters",
      "Independent Election Commission"
    ],
    "correct": 2,
    "explanation": "Voter intimidation makes an election unfair by preventing people from voting freely. Free and fair elections require voters to make choices without fear."
  },
  {
    "question": "Coalition government is formed when:",
    "options": [
      "One party wins all seats",
      "No single party wins a majority and multiple parties join together",
      "The military takes over",
      "The President appoints the government"
    ],
    "correct": 1,
    "explanation": "A coalition government is formed when no single party wins a majority, so multiple parties come together to form a government with a combined majority."
  },
  {
    "question": "The purpose of the electoral roll is to:",
    "options": [
      "List all candidates",
      "List all eligible voters in a constituency",
      "Count the votes",
      "Announce results"
    ],
    "correct": 1,
    "explanation": "The electoral roll (voters' list) is a comprehensive list of all eligible voters in a constituency who are entitled to vote in an election."
  },
  {
    "question": "In India, elections are held on the principle of:",
    "options": [
      "One person, one vote",
      "One family, one vote",
      "Weighted voting based on education",
      "Only taxpayers vote"
    ],
    "correct": 0,
    "explanation": "Indian elections follow the principle of 'one person, one vote,' meaning every eligible voter has exactly one vote, ensuring political equality."
  },
  {
    "question": "A candidate who contests an election without belonging to any political party is called:",
    "options": [
      "A rebel candidate",
      "An independent candidate",
      "A nominated member",
      "A proxy candidate"
    ],
    "correct": 1,
    "explanation": "An independent candidate is one who contests elections without the support or affiliation of any political party, using an independent election symbol."
  }
]

export default questions
