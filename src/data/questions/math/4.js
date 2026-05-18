const questions = [
  {
    "question": "The expansion of (a + b)^2 is:",
    "options": [
      "a^2 + b^2",
      "a^2 + 2ab + b^2",
      "a^2 - 2ab + b^2",
      "a^2 + ab + b^2"
    ],
    "correct": 1,
    "explanation": "(a + b)^2 = a^2 + 2ab + b^2 is one of the most fundamental algebraic identities."
  },
  {
    "question": "The expansion of (a - b)^2 is:",
    "options": [
      "a^2 + 2ab + b^2",
      "a^2 - 2ab - b^2",
      "a^2 - 2ab + b^2",
      "a^2 - b^2"
    ],
    "correct": 2,
    "explanation": "(a - b)^2 = a^2 - 2ab + b^2. The middle term is negative but the last term is positive."
  },
  {
    "question": "The factorisation of a^2 - b^2 is:",
    "options": [
      "(a - b)^2",
      "(a + b)^2",
      "(a + b)(a - b)",
      "(a - b)(a - b)"
    ],
    "correct": 2,
    "explanation": "a^2 - b^2 = (a + b)(a - b) is the difference of two squares identity."
  },
  {
    "question": "The value of 105^2 using the identity (a + b)^2 is (taking a = 100, b = 5):",
    "options": [
      "11025",
      "11000",
      "10025",
      "10525"
    ],
    "correct": 0,
    "explanation": "105^2 = (100 + 5)^2 = 100^2 + 2(100)(5) + 5^2 = 10000 + 1000 + 25 = 11025."
  },
  {
    "question": "The value of 98^2 using the identity (a - b)^2 is (taking a = 100, b = 2):",
    "options": [
      "9600",
      "9604",
      "9404",
      "9804"
    ],
    "correct": 1,
    "explanation": "98^2 = (100 - 2)^2 = 100^2 - 2(100)(2) + 2^2 = 10000 - 400 + 4 = 9604."
  },
  {
    "question": "The value of 103 x 97 using the identity a^2 - b^2 = (a+b)(a-b) is:",
    "options": [
      "9991",
      "10000",
      "9991",
      "9909"
    ],
    "correct": 0,
    "explanation": "103 x 97 = (100 + 3)(100 - 3) = 100^2 - 3^2 = 10000 - 9 = 9991."
  },
  {
    "question": "If a + b = 10 and ab = 21, then a^2 + b^2 equals:",
    "options": [
      "58",
      "100",
      "79",
      "42"
    ],
    "correct": 0,
    "explanation": "(a + b)^2 = a^2 + 2ab + b^2. So 100 = a^2 + b^2 + 42, giving a^2 + b^2 = 58."
  },
  {
    "question": "The expansion of (a + b)^3 is:",
    "options": [
      "a^3 + b^3",
      "a^3 + 3a^2b + 3ab^2 + b^3",
      "a^3 + 3ab + b^3",
      "a^3 - 3a^2b + 3ab^2 - b^3"
    ],
    "correct": 1,
    "explanation": "(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3, which can also be written as a^3 + b^3 + 3ab(a + b)."
  },
  {
    "question": "The expansion of (a - b)^3 is:",
    "options": [
      "a^3 - 3a^2b + 3ab^2 - b^3",
      "a^3 + 3a^2b - 3ab^2 + b^3",
      "a^3 - b^3",
      "a^3 - 3ab + b^3"
    ],
    "correct": 0,
    "explanation": "(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3, which can also be written as a^3 - b^3 - 3ab(a - b)."
  },
  {
    "question": "The factorisation of a^3 + b^3 is:",
    "options": [
      "(a + b)(a^2 + ab + b^2)",
      "(a + b)(a^2 - ab + b^2)",
      "(a - b)(a^2 + ab + b^2)",
      "(a + b)^3"
    ],
    "correct": 1,
    "explanation": "a^3 + b^3 = (a + b)(a^2 - ab + b^2) is a standard algebraic identity."
  },
  {
    "question": "The factorisation of a^3 - b^3 is:",
    "options": [
      "(a - b)(a^2 - ab + b^2)",
      "(a + b)(a^2 + ab + b^2)",
      "(a - b)(a^2 + ab + b^2)",
      "(a - b)^3"
    ],
    "correct": 2,
    "explanation": "a^3 - b^3 = (a - b)(a^2 + ab + b^2) is a standard algebraic identity."
  },
  {
    "question": "The expansion of (x + y + z)^2 is:",
    "options": [
      "x^2 + y^2 + z^2",
      "x^2 + y^2 + z^2 + 2xy + 2yz + 2zx",
      "x^2 + y^2 + z^2 + xy + yz + zx",
      "(x + y)^2 + z^2"
    ],
    "correct": 1,
    "explanation": "(x + y + z)^2 = x^2 + y^2 + z^2 + 2xy + 2yz + 2zx."
  },
  {
    "question": "If x + y + z = 10 and x^2 + y^2 + z^2 = 40, then xy + yz + zx equals:",
    "options": [
      "30",
      "60",
      "50",
      "20"
    ],
    "correct": 0,
    "explanation": "(x + y + z)^2 = x^2 + y^2 + z^2 + 2(xy + yz + zx). So 100 = 40 + 2(xy + yz + zx), giving xy + yz + zx = 30."
  },
  {
    "question": "The identity x^3 + y^3 + z^3 - 3xyz equals:",
    "options": [
      "(x + y + z)(x^2 + y^2 + z^2 + xy + yz + zx)",
      "(x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx)",
      "(x - y - z)(x^2 + y^2 + z^2)",
      "x^3 + y^3 + z^3"
    ],
    "correct": 1,
    "explanation": "x^3 + y^3 + z^3 - 3xyz = (x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx)."
  },
  {
    "question": "If x + y + z = 0, then x^3 + y^3 + z^3 equals:",
    "options": [
      "0",
      "3xyz",
      "-3xyz",
      "xyz"
    ],
    "correct": 1,
    "explanation": "Since x^3 + y^3 + z^3 - 3xyz = (x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx), and x + y + z = 0, we get x^3 + y^3 + z^3 = 3xyz."
  },
  {
    "question": "The value of (2x + 3y)^2 is:",
    "options": [
      "4x^2 + 9y^2",
      "4x^2 + 6xy + 9y^2",
      "4x^2 + 12xy + 9y^2",
      "2x^2 + 12xy + 3y^2"
    ],
    "correct": 2,
    "explanation": "(2x + 3y)^2 = (2x)^2 + 2(2x)(3y) + (3y)^2 = 4x^2 + 12xy + 9y^2."
  },
  {
    "question": "The value of (5a - 3b)^2 is:",
    "options": [
      "25a^2 - 9b^2",
      "25a^2 + 30ab + 9b^2",
      "25a^2 - 30ab + 9b^2",
      "25a^2 - 15ab + 9b^2"
    ],
    "correct": 2,
    "explanation": "(5a - 3b)^2 = (5a)^2 - 2(5a)(3b) + (3b)^2 = 25a^2 - 30ab + 9b^2."
  },
  {
    "question": "Using a suitable identity, 8x^3 + 27y^3 can be factorised as:",
    "options": [
      "(2x + 3y)(4x^2 + 6xy + 9y^2)",
      "(2x + 3y)(4x^2 - 6xy + 9y^2)",
      "(2x - 3y)(4x^2 + 6xy + 9y^2)",
      "(2x + 3y)(2x^2 - 3xy + 9y^2)"
    ],
    "correct": 1,
    "explanation": "8x^3 + 27y^3 = (2x)^3 + (3y)^3 = (2x + 3y)((2x)^2 - (2x)(3y) + (3y)^2) = (2x + 3y)(4x^2 - 6xy + 9y^2)."
  },
  {
    "question": "The value of 52^2 - 48^2 using the identity a^2 - b^2 is:",
    "options": [
      "400",
      "16",
      "200",
      "2704"
    ],
    "correct": 0,
    "explanation": "52^2 - 48^2 = (52 + 48)(52 - 48) = 100 x 4 = 400."
  },
  {
    "question": "If a - b = 4 and ab = 12, then a^2 + b^2 equals:",
    "options": [
      "28",
      "40",
      "8",
      "64"
    ],
    "correct": 1,
    "explanation": "(a - b)^2 = a^2 - 2ab + b^2. So 16 = a^2 + b^2 - 24, giving a^2 + b^2 = 40."
  },
  {
    "question": "The value of (x + 2)(x + 3) using the identity (x + a)(x + b) = x^2 + (a+b)x + ab is:",
    "options": [
      "x^2 + 5x + 5",
      "x^2 + 6x + 5",
      "x^2 + 5x + 6",
      "x^2 + 6x + 6"
    ],
    "correct": 2,
    "explanation": "(x + 2)(x + 3) = x^2 + (2+3)x + (2)(3) = x^2 + 5x + 6."
  },
  {
    "question": "If a + b = 6 and a - b = 2, then a^2 - b^2 equals:",
    "options": [
      "8",
      "12",
      "32",
      "36"
    ],
    "correct": 1,
    "explanation": "a^2 - b^2 = (a + b)(a - b) = 6 x 2 = 12."
  },
  {
    "question": "The value of (1 + 2 + 3)^2 - (1^2 + 2^2 + 3^2) equals:",
    "options": [
      "22",
      "36",
      "14",
      "22"
    ],
    "correct": 0,
    "explanation": "(1+2+3)^2 = 36 and 1^2+2^2+3^2 = 14. So the answer is 36 - 14 = 22. By the identity, this equals 2(xy+yz+zx) = 2(2+6+3) = 22."
  },
  {
    "question": "If x + y + z = 0 and x^2 + y^2 + z^2 = 50, then xy + yz + zx equals:",
    "options": [
      "-25",
      "25",
      "-50",
      "50"
    ],
    "correct": 0,
    "explanation": "(x+y+z)^2 = x^2+y^2+z^2+2(xy+yz+zx). So 0 = 50 + 2(xy+yz+zx), giving xy+yz+zx = -25."
  },
  {
    "question": "The value of (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) when a = 1, b = -1, c = 0 is:",
    "options": [
      "0",
      "2",
      "-2",
      "1"
    ],
    "correct": 0,
    "explanation": "This expression equals a^3 + b^3 + c^3 - 3abc = 1 + (-1) + 0 - 3(1)(-1)(0) = 0."
  }
]

export default questions
