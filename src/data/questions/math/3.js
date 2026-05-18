const questions = [
  {
    "question": "Which of the following is an irrational number?",
    "options": [
      "2/3",
      "√2",
      "0.5",
      "7"
    ],
    "correct": 1,
    "explanation": "√2 cannot be expressed as a ratio of two integers, making it irrational."
  },
  {
    "question": "Every rational number is a:",
    "options": [
      "Natural number",
      "Whole number",
      "Integer",
      "Real number"
    ],
    "correct": 3,
    "explanation": "All rational numbers belong to the set of real numbers."
  },
  {
    "question": "The decimal expansion of √2 is:",
    "options": [
      "Terminating",
      "Non-terminating repeating",
      "Non-terminating non-repeating",
      "None of these"
    ],
    "correct": 2,
    "explanation": "Irrational numbers have non-terminating, non-repeating decimal expansions."
  },
  {
    "question": "Between two rational numbers there exist:",
    "options": [
      "Exactly one rational number",
      "No rational number",
      "Infinitely many rational numbers",
      "Only two rational numbers"
    ],
    "correct": 2,
    "explanation": "Between any two rational numbers, infinitely many rational numbers can be found."
  },
  {
    "question": "Which of the following is a rational number?",
    "options": [
      "√3",
      "√5",
      "√4",
      "√7"
    ],
    "correct": 2,
    "explanation": "√4 = 2, which is a rational number."
  },
  {
    "question": "The value of 1/√2 after rationalising the denominator is:",
    "options": [
      "√2",
      "√2/2",
      "2√2",
      "1/2"
    ],
    "correct": 1,
    "explanation": "Multiplying numerator and denominator by √2 gives √2/2."
  },
  {
    "question": "0.999... (repeating) is equal to:",
    "options": [
      "Less than 1",
      "Greater than 1",
      "Equal to 1",
      "None of these"
    ],
    "correct": 2,
    "explanation": "0.999... repeating is mathematically proven to equal 1."
  },
  {
    "question": "Which of the following is NOT a real number?",
    "options": [
      "√-1",
      "√2",
      "0",
      "-5"
    ],
    "correct": 0,
    "explanation": "√-1 is an imaginary number, not a real number."
  },
  {
    "question": "If p/q is a rational number in lowest terms with a terminating decimal, then q has factors of:",
    "options": [
      "2 or 5 only",
      "3 or 7 only",
      "Any prime",
      "2 or 3 only"
    ],
    "correct": 0,
    "explanation": "A rational number has a terminating decimal only if the denominator has no prime factors other than 2 and 5."
  },
  {
    "question": "The number π is:",
    "options": [
      "Rational",
      "Irrational",
      "An integer",
      "A whole number"
    ],
    "correct": 1,
    "explanation": "π is irrational because its decimal expansion is non-terminating and non-repeating."
  },
  {
    "question": "The decimal expansion of 1/7 is:",
    "options": [
      "Terminating",
      "Non-terminating repeating",
      "Non-terminating non-repeating",
      "None of these"
    ],
    "correct": 1,
    "explanation": "1/7 = 0.142857142857... which is a non-terminating repeating decimal since 7 has prime factors other than 2 and 5."
  },
  {
    "question": "Which of the following represents a rational number between 1 and 2?",
    "options": [
      "√2",
      "5/3",
      "π/2",
      "√3"
    ],
    "correct": 1,
    "explanation": "5/3 ≈ 1.67 is a rational number between 1 and 2. The others are irrational."
  },
  {
    "question": "The value of 2^(1/3) is:",
    "options": [
      "A rational number",
      "An irrational number",
      "An integer",
      "A whole number"
    ],
    "correct": 1,
    "explanation": "The cube root of 2 is an irrational number as it cannot be expressed as p/q."
  },
  {
    "question": "If x = 3 + 2√2, then x + 1/x equals:",
    "options": [
      "6",
      "3",
      "2√2",
      "4√2"
    ],
    "correct": 0,
    "explanation": "1/x = 1/(3+2√2) = 3−2√2 (after rationalising). So x + 1/x = 3+2√2 + 3−2√2 = 6."
  },
  {
    "question": "The number 0 is:",
    "options": [
      "Only a whole number",
      "A rational number but not an integer",
      "A rational number, integer, and whole number",
      "An irrational number"
    ],
    "correct": 2,
    "explanation": "0 is a whole number, an integer (neither positive nor negative), and a rational number (0/1)."
  },
  {
    "question": "Which of the following is an irrational number?",
    "options": [
      "22/7",
      "0.3333...",
      "sqrt(5)",
      "0.25"
    ],
    "correct": 2,
    "explanation": "sqrt(5) cannot be expressed as p/q where p and q are integers and q != 0, so it is irrational. 22/7 and 0.25 are rationals, and 0.3333... = 1/3 is also rational."
  },
  {
    "question": "The decimal expansion of 1/11 is:",
    "options": [
      "Non-terminating non-repeating",
      "Terminating",
      "Non-terminating repeating",
      "None of these"
    ],
    "correct": 2,
    "explanation": "1/11 = 0.090909... which is a non-terminating repeating decimal. Every rational number has either a terminating or repeating decimal expansion."
  },
  {
    "question": "Between two rational numbers, there exist:",
    "options": [
      "Exactly one rational number",
      "Exactly two rational numbers",
      "Finitely many rational numbers",
      "Infinitely many rational numbers"
    ],
    "correct": 3,
    "explanation": "Between any two rational numbers, there are infinitely many rational numbers. This is known as the density property of rational numbers."
  },
  {
    "question": "If x = 3 + 2*sqrt(2), then x + 1/x equals:",
    "options": [
      "6",
      "4*sqrt(2)",
      "6 + 4*sqrt(2)",
      "3"
    ],
    "correct": 0,
    "explanation": "1/x = 1/(3+2*sqrt(2)). Rationalising: (3-2*sqrt(2))/((3+2*sqrt(2))(3-2*sqrt(2))) = (3-2*sqrt(2))/(9-8) = 3-2*sqrt(2). So x + 1/x = (3+2*sqrt(2)) + (3-2*sqrt(2)) = 6."
  },
  {
    "question": "Which statement is TRUE about the number sqrt(2) on the number line?",
    "options": [
      "It cannot be represented on the number line",
      "It lies between 1 and 2",
      "It lies between 2 and 3",
      "It lies exactly at 1.5"
    ],
    "correct": 1,
    "explanation": "sqrt(2) is approximately 1.414, so it lies between 1 and 2 on the number line. Every real number, including irrationals, can be represented on the number line."
  },
  {
    "question": "The value of (sqrt(5) + sqrt(3))(sqrt(5) - sqrt(3)) is:",
    "options": [
      "2",
      "8",
      "sqrt(15)",
      "sqrt(2)"
    ],
    "correct": 0,
    "explanation": "Using the identity (a+b)(a-b) = a^2 - b^2, we get (sqrt(5))^2 - (sqrt(3))^2 = 5 - 3 = 2."
  },
  {
    "question": "After rationalising the denominator of 1/(sqrt(7) - sqrt(6)), the result is:",
    "options": [
      "sqrt(7) - sqrt(6)",
      "sqrt(7) + sqrt(6)",
      "(sqrt(7) + sqrt(6))/13",
      "sqrt(42)"
    ],
    "correct": 1,
    "explanation": "Multiply numerator and denominator by (sqrt(7)+sqrt(6)): (sqrt(7)+sqrt(6))/((sqrt(7))^2-(sqrt(6))^2) = (sqrt(7)+sqrt(6))/(7-6) = sqrt(7)+sqrt(6)."
  },
  {
    "question": "The number 0.101001000100001... (with increasing zeros) is:",
    "options": [
      "Rational",
      "Irrational",
      "An integer",
      "A natural number"
    ],
    "correct": 1,
    "explanation": "The decimal 0.101001000100001... is non-terminating and non-repeating (the pattern of zeros keeps growing, so there is no fixed repeating block). Therefore it is irrational."
  },
  {
    "question": "If 2^(x+3) = 32, what is the value of x?",
    "options": [
      "2",
      "3",
      "5",
      "29"
    ],
    "correct": 0,
    "explanation": "32 = 2^5. So 2^(x+3) = 2^5, which gives x+3 = 5, hence x = 2."
  },
  {
    "question": "The product of a non-zero rational number and an irrational number is always:",
    "options": [
      "Rational",
      "Irrational",
      "An integer",
      "Zero"
    ],
    "correct": 1,
    "explanation": "The product of a non-zero rational and an irrational number is always irrational. For example, 2 * sqrt(3) = 2*sqrt(3), which is irrational."
  }
]

export default questions
