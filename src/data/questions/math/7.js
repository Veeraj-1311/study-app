const questions = [
  {
    "question": "The common difference of the AP 3, 7, 11, 15, ... is:",
    "options": [
      "3",
      "4",
      "7",
      "11"
    ],
    "correct": 1,
    "explanation": "Common difference d = 7 - 3 = 4. Each term increases by 4."
  },
  {
    "question": "The nth term of an AP with first term a and common difference d is:",
    "options": [
      "a + nd",
      "a + (n-1)d",
      "a - (n-1)d",
      "nd + a"
    ],
    "correct": 1,
    "explanation": "The nth term of an AP is given by a_n = a + (n-1)d, where a is the first term and d is the common difference."
  },
  {
    "question": "The 10th term of the AP 2, 5, 8, 11, ... is:",
    "options": [
      "29",
      "32",
      "26",
      "30"
    ],
    "correct": 0,
    "explanation": "a = 2, d = 3. a_10 = 2 + (10-1)(3) = 2 + 27 = 29."
  },
  {
    "question": "The sum of the first n terms of an AP is given by:",
    "options": [
      "n/2 [a + l]",
      "n/2 [2a + (n-1)d]",
      "Both of the above",
      "n(a + d)"
    ],
    "correct": 2,
    "explanation": "The sum of first n terms can be written as S_n = n/2 [a + l] where l is the last term, or equivalently S_n = n/2 [2a + (n-1)d]."
  },
  {
    "question": "The sum of the first 10 natural numbers is:",
    "options": [
      "45",
      "55",
      "50",
      "100"
    ],
    "correct": 1,
    "explanation": "S = n(n+1)/2 = 10(11)/2 = 55. This is also the sum of the AP 1, 2, 3, ..., 10."
  },
  {
    "question": "If the 3rd term of an AP is 7 and the 7th term is 15, the common difference is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "explanation": "a_3 = a + 2d = 7 and a_7 = a + 6d = 15. Subtracting: 4d = 8, so d = 2."
  },
  {
    "question": "Which of the following is an arithmetic progression?",
    "options": [
      "1, 2, 4, 8, 16",
      "3, 6, 9, 12, 15",
      "1, 1, 2, 3, 5",
      "2, 4, 8, 16, 32"
    ],
    "correct": 1,
    "explanation": "3, 6, 9, 12, 15 has a constant common difference of 3, making it an AP. The others do not have a constant difference between consecutive terms."
  },
  {
    "question": "The common ratio of the GP 2, 6, 18, 54, ... is:",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "correct": 1,
    "explanation": "Common ratio r = 6/2 = 3. Each term is multiplied by 3 to get the next term."
  },
  {
    "question": "The nth term of a GP with first term a and common ratio r is:",
    "options": [
      "a*r^n",
      "a*r^(n-1)",
      "a + r^n",
      "a*(n-1)*r"
    ],
    "correct": 1,
    "explanation": "The nth term of a GP is a_n = a * r^(n-1)."
  },
  {
    "question": "The 5th term of the GP 3, 6, 12, 24, ... is:",
    "options": [
      "36",
      "48",
      "96",
      "192"
    ],
    "correct": 1,
    "explanation": "a = 3, r = 2. a_5 = 3 * 2^(5-1) = 3 * 16 = 48."
  },
  {
    "question": "The sum of first n terms of a GP (when r is not equal to 1) is:",
    "options": [
      "a(r^n - 1)/(r - 1)",
      "a(1 - r^n)/(1 - r)",
      "Both of the above",
      "a*n*r"
    ],
    "correct": 2,
    "explanation": "S_n = a(r^n - 1)/(r - 1) for r > 1, or equivalently S_n = a(1 - r^n)/(1 - r) for r < 1. Both formulas give the same result."
  },
  {
    "question": "If the first term of an AP is 5 and the common difference is -3, the 4th term is:",
    "options": [
      "-4",
      "-1",
      "2",
      "14"
    ],
    "correct": 0,
    "explanation": "a_4 = a + 3d = 5 + 3(-3) = 5 - 9 = -4."
  },
  {
    "question": "The sum of the first 20 terms of the AP 1, 4, 7, 10, ... is:",
    "options": [
      "590",
      "610",
      "570",
      "550"
    ],
    "correct": 0,
    "explanation": "a = 1, d = 3, n = 20. S_20 = 20/2 [2(1) + (20-1)(3)] = 10[2 + 57] = 10 * 59 = 590."
  },
  {
    "question": "Which of the following is a geometric progression?",
    "options": [
      "2, 4, 6, 8, 10",
      "1, 3, 9, 27, 81",
      "5, 10, 15, 20, 25",
      "1, 2, 3, 4, 5"
    ],
    "correct": 1,
    "explanation": "1, 3, 9, 27, 81 has a constant ratio of 3 between consecutive terms, making it a GP."
  },
  {
    "question": "If three numbers a, b, c are in AP, then:",
    "options": [
      "b = ac",
      "2b = a + c",
      "b^2 = ac",
      "a + b = c"
    ],
    "correct": 1,
    "explanation": "In an AP, the middle term is the average of the surrounding terms. So b - a = c - b, which gives 2b = a + c."
  },
  {
    "question": "If three numbers a, b, c are in GP, then:",
    "options": [
      "2b = a + c",
      "b = a + c",
      "b^2 = ac",
      "a^2 = bc"
    ],
    "correct": 2,
    "explanation": "In a GP, b/a = c/b, which gives b^2 = ac. The square of the middle term equals the product of the other two."
  },
  {
    "question": "The 15th term of the AP 10, 7, 4, 1, ... is:",
    "options": [
      "-32",
      "-35",
      "-28",
      "-30"
    ],
    "correct": 0,
    "explanation": "a = 10, d = 7 - 10 = -3. a_15 = 10 + (15-1)(-3) = 10 - 42 = -32."
  },
  {
    "question": "How many terms of the AP 5, 9, 13, ... must be taken so that the sum is 140?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "explanation": "a = 5, d = 4. S_n = n/2[2(5) + (n-1)(4)] = n/2[10 + 4n - 4] = n/2[6 + 4n] = n(3 + 2n). Setting n(3 + 2n) = 140: 2n^2 + 3n - 140 = 0. Solving: n = 7."
  },
  {
    "question": "The sum of the first 5 terms of the GP 1, 2, 4, 8, ... is:",
    "options": [
      "15",
      "31",
      "16",
      "32"
    ],
    "correct": 1,
    "explanation": "a = 1, r = 2, n = 5. S_5 = 1(2^5 - 1)/(2 - 1) = (32 - 1)/1 = 31."
  },
  {
    "question": "The arithmetic mean of two numbers a and b is:",
    "options": [
      "a*b",
      "(a + b)/2",
      "sqrt(a*b)",
      "a/b"
    ],
    "correct": 1,
    "explanation": "The arithmetic mean (AM) of two numbers a and b is (a + b)/2."
  },
  {
    "question": "The geometric mean of two positive numbers a and b is:",
    "options": [
      "(a + b)/2",
      "a*b",
      "sqrt(a*b)",
      "(a - b)/2"
    ],
    "correct": 2,
    "explanation": "The geometric mean (GM) of two positive numbers a and b is sqrt(a*b)."
  },
  {
    "question": "If the sum of n terms of an AP is 3n^2 + 5n, the common difference is:",
    "options": [
      "3",
      "5",
      "6",
      "8"
    ],
    "correct": 2,
    "explanation": "S_n = 3n^2 + 5n. S_1 = 8 (first term). S_2 = 22, so a_2 = S_2 - S_1 = 14. d = a_2 - a_1 = 14 - 8 = 6."
  },
  {
    "question": "The sequence 1, 1, 2, 3, 5, 8, 13, ... is called:",
    "options": [
      "Arithmetic progression",
      "Geometric progression",
      "Fibonacci sequence",
      "Harmonic sequence"
    ],
    "correct": 2,
    "explanation": "This is the Fibonacci sequence where each term is the sum of the two preceding terms: 1+1=2, 1+2=3, 2+3=5, etc."
  },
  {
    "question": "In an AP, if a = 2 and d = 0, then all terms are:",
    "options": [
      "0",
      "2",
      "Increasing",
      "Decreasing"
    ],
    "correct": 1,
    "explanation": "When d = 0, every term equals the first term. So all terms are 2. This is a constant sequence."
  },
  {
    "question": "The 8th term of the GP 5, 10, 20, 40, ... is:",
    "options": [
      "320",
      "640",
      "1280",
      "160"
    ],
    "correct": 1,
    "explanation": "a = 5, r = 2. a_8 = 5 * 2^(8-1) = 5 * 128 = 640."
  }
]

export default questions
