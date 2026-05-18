const questions = [
  {
    "question": "The probability of an event always lies between:",
    "options": [
      "-1 and 1",
      "0 and 1",
      "0 and 100",
      "1 and 10"
    ],
    "correct": 1,
    "explanation": "Probability of any event is always between 0 and 1 inclusive."
  },
  {
    "question": "The probability of a sure event is:",
    "options": [
      "0",
      "0.5",
      "1",
      "2"
    ],
    "correct": 2,
    "explanation": "A sure (certain) event has a probability of 1."
  },
  {
    "question": "The probability of an impossible event is:",
    "options": [
      "0",
      "0.5",
      "1",
      "-1"
    ],
    "correct": 0,
    "explanation": "An impossible event has a probability of 0."
  },
  {
    "question": "When a coin is tossed, the probability of getting heads is:",
    "options": [
      "0",
      "1/4",
      "1/2",
      "1"
    ],
    "correct": 2,
    "explanation": "There are 2 equally likely outcomes, so P(heads) = 1/2."
  },
  {
    "question": "If P(E) = 0.3, then P(not E) is:",
    "options": [
      "0.3",
      "0.5",
      "0.7",
      "1.3"
    ],
    "correct": 2,
    "explanation": "P(not E) = 1 - P(E) = 1 - 0.3 = 0.7."
  },
  {
    "question": "In a single throw of a die, the probability of getting a number greater than 4 is:",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correct": 1,
    "explanation": "Numbers greater than 4 are {5, 6}, so P = 2/6 = 1/3."
  },
  {
    "question": "An experiment is called random if:",
    "options": [
      "The outcome is known",
      "The outcome cannot be predicted",
      "There is only one outcome",
      "It has no outcomes"
    ],
    "correct": 1,
    "explanation": "A random experiment is one whose outcome cannot be predicted in advance."
  },
  {
    "question": "The sum of probabilities of all outcomes of an experiment is:",
    "options": [
      "0",
      "0.5",
      "1",
      "Depends on the experiment"
    ],
    "correct": 2,
    "explanation": "The total probability of all possible outcomes always equals 1."
  },
  {
    "question": "Experimental probability is based on:",
    "options": [
      "Theoretical calculations",
      "Actual observations",
      "Assumptions",
      "Formulas"
    ],
    "correct": 1,
    "explanation": "Experimental probability is calculated from the results of actual experiments."
  },
  {
    "question": "A bag contains 3 red and 2 blue balls. The probability of drawing a red ball is:",
    "options": [
      "2/5",
      "3/5",
      "1/2",
      "1/3"
    ],
    "correct": 1,
    "explanation": "P(red) = number of red balls / total balls = 3/5."
  },
  {
    "question": "In a single throw of a die, the probability of getting an even number is:",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correct": 2,
    "explanation": "Even numbers on a die are {2, 4, 6}, so P(even) = 3/6 = 1/2."
  },
  {
    "question": "If a coin is tossed twice, the total number of outcomes is:",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "correct": 2,
    "explanation": "Outcomes: {HH, HT, TH, TT} = 4 total outcomes."
  },
  {
    "question": "The probability of drawing a king from a standard deck of 52 cards is:",
    "options": [
      "1/52",
      "1/26",
      "1/13",
      "4/13"
    ],
    "correct": 2,
    "explanation": "There are 4 kings in a deck of 52 cards, so P(king) = 4/52 = 1/13."
  },
  {
    "question": "If a die is thrown, the probability of getting a number less than 3 is:",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correct": 1,
    "explanation": "Numbers less than 3 are {1, 2}, so P = 2/6 = 1/3."
  },
  {
    "question": "Experimental probability of an event approaches the theoretical probability when the number of trials is:",
    "options": [
      "Very small",
      "Zero",
      "Very large",
      "Exactly 10"
    ],
    "correct": 2,
    "explanation": "As the number of trials increases, experimental probability approaches theoretical probability (Law of Large Numbers)."
  },
  {
    "question": "A coin is tossed 200 times and heads appear 118 times. The experimental probability of getting a head is:",
    "options": [
      "118/200",
      "82/200",
      "118/82",
      "200/118"
    ],
    "correct": 0,
    "explanation": "Experimental probability = Number of times event occurs / Total number of trials = 118/200 = 0.59."
  },
  {
    "question": "The probability of an event always lies between:",
    "options": [
      "-1 and 1",
      "0 and 1",
      "0 and infinity",
      "-infinity and infinity"
    ],
    "correct": 1,
    "explanation": "Probability of any event is always between 0 and 1 inclusive. P = 0 means impossible, P = 1 means certain."
  },
  {
    "question": "A die is thrown 500 times and the frequency of outcome '3' is 90. The experimental probability of getting a '3' is:",
    "options": [
      "1/6",
      "9/50",
      "3/500",
      "90/100"
    ],
    "correct": 1,
    "explanation": "Experimental probability = 90/500 = 9/50."
  },
  {
    "question": "If the probability of an event occurring is 0.35, the probability of it NOT occurring is:",
    "options": [
      "0.35",
      "0.65",
      "1.35",
      "0"
    ],
    "correct": 1,
    "explanation": "P(not E) = 1 - P(E) = 1 - 0.35 = 0.65."
  },
  {
    "question": "In 50 tosses of a coin, tails appeared 28 times. The experimental probability of getting heads is:",
    "options": [
      "28/50",
      "22/50",
      "28/22",
      "50/22"
    ],
    "correct": 1,
    "explanation": "Heads appeared 50 - 28 = 22 times. P(heads) = 22/50 = 11/25."
  },
  {
    "question": "An event that cannot possibly occur has probability:",
    "options": [
      "-1",
      "0",
      "1",
      "0.5"
    ],
    "correct": 1,
    "explanation": "An impossible event has probability 0. For example, rolling a 7 on a standard die."
  },
  {
    "question": "A bag has 5 red, 3 blue, and 2 green balls. One ball is drawn at random 100 times (with replacement) and red appears 58 times. The experimental probability of drawing red is:",
    "options": [
      "5/10",
      "58/100",
      "3/10",
      "42/100"
    ],
    "correct": 1,
    "explanation": "Experimental probability is based on actual outcomes, not theoretical. P(red) = 58/100 = 0.58."
  },
  {
    "question": "A factory produces 1000 bulbs. 50 are found defective. A bulb is chosen at random. The probability that it is NOT defective is:",
    "options": [
      "1/20",
      "19/20",
      "50/1000",
      "1"
    ],
    "correct": 1,
    "explanation": "Non-defective bulbs = 1000 - 50 = 950. P(not defective) = 950/1000 = 19/20."
  },
  {
    "question": "The sum of probabilities of all possible outcomes of an experiment is:",
    "options": [
      "0",
      "Less than 1",
      "1",
      "Greater than 1"
    ],
    "correct": 2,
    "explanation": "The sum of probabilities of all possible outcomes of any experiment is always exactly 1."
  },
  {
    "question": "In a cricket match, a batsman hits 4 boundaries out of 30 balls. The probability that he does NOT hit a boundary on a given ball is:",
    "options": [
      "4/30",
      "26/30",
      "1/30",
      "30/4"
    ],
    "correct": 1,
    "explanation": "P(boundary) = 4/30. P(not boundary) = 1 - 4/30 = 26/30 = 13/15."
  }
]

export default questions
