const questions = [
  {
    "question": "The equation 2x + 3y = 12 is a:",
    "options": [
      "Linear equation in one variable",
      "Linear equation in two variables",
      "Quadratic equation",
      "Cubic equation"
    ],
    "correct": 1,
    "explanation": "It has two variables x and y, each of degree 1."
  },
  {
    "question": "How many solutions does a linear equation in two variables have?",
    "options": [
      "One",
      "Two",
      "No solution",
      "Infinitely many"
    ],
    "correct": 3,
    "explanation": "A linear equation in two variables has infinitely many solutions."
  },
  {
    "question": "The graph of a linear equation in two variables is a:",
    "options": [
      "Point",
      "Curve",
      "Straight line",
      "Circle"
    ],
    "correct": 2,
    "explanation": "The graph of a linear equation in two variables is always a straight line."
  },
  {
    "question": "Which point lies on the line x + y = 5?",
    "options": [
      "(1, 3)",
      "(2, 3)",
      "(3, 3)",
      "(4, 3)"
    ],
    "correct": 1,
    "explanation": "Substituting (2, 3): 2 + 3 = 5, which satisfies the equation."
  },
  {
    "question": "The equation y = 3 represents a line parallel to:",
    "options": [
      "y-axis",
      "x-axis",
      "Both axes",
      "Neither axis"
    ],
    "correct": 1,
    "explanation": "y = constant is a horizontal line parallel to the x-axis."
  },
  {
    "question": "The equation x = -2 represents a line parallel to:",
    "options": [
      "x-axis",
      "y-axis",
      "y = x line",
      "Origin"
    ],
    "correct": 1,
    "explanation": "x = constant is a vertical line parallel to the y-axis."
  },
  {
    "question": "Which is a solution of 3x + 2y = 12?",
    "options": [
      "(1, 1)",
      "(2, 3)",
      "(4, 0)",
      "(3, 2)"
    ],
    "correct": 2,
    "explanation": "Substituting (4, 0): 3(4) + 2(0) = 12, which is correct."
  },
  {
    "question": "The line y = 2x passes through:",
    "options": [
      "(1, 1)",
      "(0, 0)",
      "(2, 2)",
      "(3, 3)"
    ],
    "correct": 1,
    "explanation": "Substituting x = 0: y = 0, so (0, 0) lies on the line."
  },
  {
    "question": "The general form of a linear equation in two variables is:",
    "options": [
      "ax + b = 0",
      "ax² + bx + c = 0",
      "ax + by + c = 0",
      "ax³ = 0"
    ],
    "correct": 2,
    "explanation": "The standard form is ax + by + c = 0, where a and b are not both zero."
  },
  {
    "question": "The x-intercept of the line 2x + 4y = 8 is:",
    "options": [
      "2",
      "4",
      "8",
      "1"
    ],
    "correct": 1,
    "explanation": "Setting y = 0: 2x = 8, so x = 4."
  },
  {
    "question": "The y-intercept of the line 3x + 2y = 6 is:",
    "options": [
      "2",
      "3",
      "6",
      "1"
    ],
    "correct": 1,
    "explanation": "Setting x = 0: 2y = 6, so y = 3. The y-intercept is 3."
  },
  {
    "question": "The equation x = 0 represents:",
    "options": [
      "The x-axis",
      "The y-axis",
      "A point",
      "No line"
    ],
    "correct": 1,
    "explanation": "x = 0 is the equation of the y-axis."
  },
  {
    "question": "Which of the following is NOT a linear equation in two variables?",
    "options": [
      "2x + 3y = 7",
      "x − y = 0",
      "x² + y = 5",
      "y = 4x"
    ],
    "correct": 2,
    "explanation": "x² + y = 5 has x raised to power 2, so it is not linear."
  },
  {
    "question": "The graph of y = x passes through:",
    "options": [
      "(1, 2)",
      "(2, 2)",
      "(3, 3)",
      "(4, 3)"
    ],
    "correct": 2,
    "explanation": "For y = x, when x = 3, y = 3. So (3, 3) lies on the line."
  },
  {
    "question": "How many solutions does the equation x + y = 0 have?",
    "options": [
      "None",
      "Exactly one",
      "Exactly two",
      "Infinitely many"
    ],
    "correct": 3,
    "explanation": "A linear equation in two variables always has infinitely many solutions, e.g. (1, −1), (2, −2), etc."
  },
  {
    "question": "The equation 2x + 3y = 12 has how many solutions?",
    "options": [
      "Exactly one",
      "Exactly two",
      "Exactly three",
      "Infinitely many"
    ],
    "correct": 3,
    "explanation": "A linear equation in two variables has infinitely many solutions because for every value of x, there is a corresponding value of y satisfying the equation."
  },
  {
    "question": "Which of the following is a solution of x - 2y = 4?",
    "options": [
      "(0, 2)",
      "(2, 0)",
      "(4, 0)",
      "(1, 1)"
    ],
    "correct": 2,
    "explanation": "Substituting (4, 0): 4 - 2(0) = 4 = RHS. So (4, 0) is a solution."
  },
  {
    "question": "The graph of y = 3 is a line:",
    "options": [
      "Passing through the origin",
      "Parallel to the x-axis",
      "Parallel to the y-axis",
      "At 45 degrees to the x-axis"
    ],
    "correct": 1,
    "explanation": "y = 3 means y is always 3 regardless of x. This is a horizontal line parallel to the x-axis, passing through (0, 3)."
  },
  {
    "question": "The graph of the equation 3x + 4y = 0 passes through:",
    "options": [
      "(0, 4)",
      "(4, 3)",
      "(0, 0)",
      "(3, 4)"
    ],
    "correct": 2,
    "explanation": "Substituting (0, 0): 3(0) + 4(0) = 0 = RHS. So the line passes through the origin."
  },
  {
    "question": "If (k, 7) is a solution of 2x - y = 5, then k equals:",
    "options": [
      "6",
      "1",
      "-1",
      "5"
    ],
    "correct": 0,
    "explanation": "Substituting y = 7: 2k - 7 = 5, so 2k = 12, giving k = 6."
  },
  {
    "question": "The equation x = -4 represents a line:",
    "options": [
      "Parallel to the x-axis",
      "Parallel to the y-axis",
      "Passing through the origin",
      "In the first quadrant only"
    ],
    "correct": 1,
    "explanation": "x = -4 means x is always -4 for all values of y. This is a vertical line parallel to the y-axis."
  },
  {
    "question": "How many linear equations in two variables can be satisfied by x = 2, y = 3?",
    "options": [
      "Only one",
      "Only two",
      "Only three",
      "Infinitely many"
    ],
    "correct": 3,
    "explanation": "Infinitely many lines pass through the point (2, 3). Each such line corresponds to a linear equation satisfied by x = 2, y = 3."
  },
  {
    "question": "The cost of 5 pencils and 3 erasers is Rs 34. This can be written as:",
    "options": [
      "5x + 3y = 34",
      "5x - 3y = 34",
      "3x + 5y = 34",
      "5x + 3y + 34 = 0"
    ],
    "correct": 0,
    "explanation": "Let the cost of one pencil be x and one eraser be y. Then 5 pencils and 3 erasers cost 5x + 3y = 34."
  },
  {
    "question": "The graph of 2x + y = 6 intersects the y-axis at:",
    "options": [
      "(0, 6)",
      "(3, 0)",
      "(6, 0)",
      "(0, 3)"
    ],
    "correct": 0,
    "explanation": "At the y-axis, x = 0. Substituting: 2(0) + y = 6, so y = 6. The y-intercept is (0, 6)."
  },
  {
    "question": "Which of the following is NOT a linear equation in two variables?",
    "options": [
      "3x + 2y = 7",
      "x = 5y - 3",
      "x^2 + y = 9",
      "4x - y + 1 = 0"
    ],
    "correct": 2,
    "explanation": "x^2 + y = 9 contains x^2, which makes it non-linear. A linear equation has variables only to the first power."
  }
]

export default questions
