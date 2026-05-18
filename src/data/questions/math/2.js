const questions = [
  {
    "question": "The degree of the polynomial 4x³ + 2x² + 7 is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "explanation": "The highest power of the variable x is 3, so the degree is 3."
  },
  {
    "question": "A polynomial of degree one is called:",
    "options": [
      "Quadratic",
      "Cubic",
      "Linear",
      "Constant"
    ],
    "correct": 2,
    "explanation": "A polynomial with degree 1 is a linear polynomial."
  },
  {
    "question": "The zero of the polynomial p(x) = 2x + 3 is:",
    "options": [
      "3/2",
      "-3/2",
      "2/3",
      "-2/3"
    ],
    "correct": 1,
    "explanation": "Setting 2x + 3 = 0 gives x = -3/2."
  },
  {
    "question": "Which of the following is a polynomial?",
    "options": [
      "x² + 1/x",
      "√x + 2",
      "x³ + x + 1",
      "x^(-1) + 5"
    ],
    "correct": 2,
    "explanation": "x³ + x + 1 has all non-negative integer exponents, making it a polynomial."
  },
  {
    "question": "The factorisation of x² - 9 is:",
    "options": [
      "(x - 3)²",
      "(x + 3)²",
      "(x - 3)(x + 3)",
      "(x - 9)(x + 1)"
    ],
    "correct": 2,
    "explanation": "x² - 9 is a difference of squares: (x - 3)(x + 3)."
  },
  {
    "question": "If p(x) = x² - 5x + 6, then p(2) is:",
    "options": [
      "0",
      "2",
      "4",
      "-2"
    ],
    "correct": 0,
    "explanation": "p(2) = 4 - 10 + 6 = 0, so 2 is a zero of the polynomial."
  },
  {
    "question": "The remainder when x³ + 3x² + 3x + 1 is divided by x + 1 is:",
    "options": [
      "0",
      "1",
      "2",
      "-1"
    ],
    "correct": 0,
    "explanation": "By the Remainder Theorem, p(-1) = -1 + 3 - 3 + 1 = 0."
  },
  {
    "question": "How many zeroes can a quadratic polynomial have at most?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correct": 1,
    "explanation": "A quadratic polynomial can have at most 2 zeroes."
  },
  {
    "question": "Which identity is used to expand (a + b)³?",
    "options": [
      "a³ + b³",
      "a³ + 3a²b + 3ab² + b³",
      "a³ + b³ + 3ab",
      "a² + 2ab + b²"
    ],
    "correct": 1,
    "explanation": "(a + b)³ = a³ + 3a²b + 3ab² + b³ is the standard binomial expansion."
  },
  {
    "question": "A constant polynomial has degree:",
    "options": [
      "0",
      "1",
      "2",
      "Undefined"
    ],
    "correct": 0,
    "explanation": "A non-zero constant polynomial has degree 0."
  },
  {
    "question": "The value of (x + y + z)² when x = 1, y = 2, z = 3 is:",
    "options": [
      "12",
      "36",
      "14",
      "6"
    ],
    "correct": 1,
    "explanation": "(1 + 2 + 3)² = 6² = 36."
  },
  {
    "question": "If x + 1/x = 5, then x² + 1/x² equals:",
    "options": [
      "23",
      "25",
      "27",
      "10"
    ],
    "correct": 0,
    "explanation": "Squaring both sides: (x + 1/x)² = x² + 2 + 1/x² = 25, so x² + 1/x² = 23."
  },
  {
    "question": "The zeroes of the polynomial p(x) = x² - x - 6 are:",
    "options": [
      "2 and -3",
      "3 and -2",
      "-3 and -2",
      "6 and -1"
    ],
    "correct": 1,
    "explanation": "x² - x - 6 = (x - 3)(x + 2), so zeroes are x = 3 and x = -2."
  },
  {
    "question": "Which algebraic identity is a³ - b³ equal to?",
    "options": [
      "(a - b)(a² + ab + b²)",
      "(a + b)(a² - ab + b²)",
      "(a - b)³",
      "(a - b)(a + b)"
    ],
    "correct": 0,
    "explanation": "a³ - b³ = (a - b)(a² + ab + b²) is a standard algebraic identity."
  },
  {
    "question": "The coefficient of x² in the polynomial 3x³ - 7x² + 5x - 1 is:",
    "options": [
      "3",
      "-7",
      "5",
      "-1"
    ],
    "correct": 1,
    "explanation": "The coefficient of x² is the number multiplying x², which is -7."
  },
  {
    "question": "If p(x) = x^3 - 3x^2 + 2x - 1, then p(1) equals:",
    "options": [
      "0",
      "-1",
      "1",
      "-3"
    ],
    "correct": 1,
    "explanation": "p(1) = 1 - 3 + 2 - 1 = -1. Substituting x = 1 into the polynomial and simplifying gives -1."
  },
  {
    "question": "The degree of the polynomial 4x^3 + 0x^5 + 7x - 9 is:",
    "options": [
      "5",
      "3",
      "1",
      "0"
    ],
    "correct": 1,
    "explanation": "The term 0x^5 has coefficient 0, so it vanishes. The highest power with a non-zero coefficient is x^3, making the degree 3."
  },
  {
    "question": "If (x - 2) is a factor of x^3 - kx^2 + 11x - 6, what is the value of k?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 3,
    "explanation": "By the Factor Theorem, p(2) = 0. So 8 - 4k + 22 - 6 = 0, giving 24 - 4k = 0, hence k = 6."
  },
  {
    "question": "Using the identity (a+b)^2 = a^2 + 2ab + b^2, the expansion of (2x + 3)^2 is:",
    "options": [
      "4x^2 + 9",
      "4x^2 + 6x + 9",
      "4x^2 + 12x + 9",
      "2x^2 + 12x + 9"
    ],
    "correct": 2,
    "explanation": "(2x+3)^2 = (2x)^2 + 2(2x)(3) + 3^2 = 4x^2 + 12x + 9."
  },
  {
    "question": "When x^4 + x^3 - 2x^2 + x + 1 is divided by (x - 1), the remainder is:",
    "options": [
      "0",
      "2",
      "1",
      "-1"
    ],
    "correct": 1,
    "explanation": "By the Remainder Theorem, the remainder is p(1) = 1 + 1 - 2 + 1 + 1 = 2."
  },
  {
    "question": "How many zeroes does the polynomial p(x) = x^2 - 5x + 6 have?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correct": 2,
    "explanation": "A quadratic polynomial has at most 2 zeroes. Here x^2 - 5x + 6 = (x-2)(x-3), so the zeroes are x = 2 and x = 3. Hence there are exactly 2 zeroes."
  },
  {
    "question": "The factorisation of 27x^3 + 8 is:",
    "options": [
      "(3x + 2)(9x^2 - 6x + 4)",
      "(3x + 2)(9x^2 + 6x + 4)",
      "(3x - 2)(9x^2 + 6x + 4)",
      "(3x + 2)(3x^2 - 6x + 4)"
    ],
    "correct": 0,
    "explanation": "Using the identity a^3 + b^3 = (a+b)(a^2 - ab + b^2) with a = 3x and b = 2: (3x+2)(9x^2 - 6x + 4)."
  },
  {
    "question": "A polynomial of degree zero is called a:",
    "options": [
      "Linear polynomial",
      "Quadratic polynomial",
      "Constant polynomial",
      "Zero polynomial"
    ],
    "correct": 2,
    "explanation": "A polynomial of degree zero has no variable term with a positive power; it is simply a non-zero constant like p(x) = 7. This is called a constant polynomial."
  },
  {
    "question": "If x + 1/x = 5, then x^2 + 1/x^2 equals:",
    "options": [
      "23",
      "25",
      "27",
      "10"
    ],
    "correct": 0,
    "explanation": "Squaring both sides: (x + 1/x)^2 = 25, so x^2 + 2 + 1/x^2 = 25, giving x^2 + 1/x^2 = 23."
  },
  {
    "question": "The coefficient of x^2 in (x + 3)(x - 4)(x + 1) is:",
    "options": [
      "0",
      "1",
      "-1",
      "3"
    ],
    "correct": 0,
    "explanation": "Expanding: (x+3)(x-4) = x^2 - x - 12. Then (x^2 - x - 12)(x+1) = x^3 + x^2 - x^2 - x - 12x - 12 = x^3 + 0x^2 - 13x - 12. The coefficient of x^2 is 0."
  }
]

export default questions
