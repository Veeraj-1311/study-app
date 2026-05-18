const questions = [
  {
    "question": "The point (3, -4) lies in which quadrant?",
    "options": [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    "correct": 3,
    "explanation": "Positive x and negative y coordinates place the point in the fourth quadrant."
  },
  {
    "question": "The coordinates of the origin are:",
    "options": [
      "(1, 1)",
      "(0, 1)",
      "(1, 0)",
      "(0, 0)"
    ],
    "correct": 3,
    "explanation": "The origin is the point where both axes meet, at (0, 0)."
  },
  {
    "question": "A point on the y-axis has its x-coordinate equal to:",
    "options": [
      "1",
      "-1",
      "0",
      "Any value"
    ],
    "correct": 2,
    "explanation": "Any point on the y-axis has x-coordinate 0."
  },
  {
    "question": "The point (-5, -3) lies in which quadrant?",
    "options": [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    "correct": 2,
    "explanation": "Both coordinates are negative, placing the point in the third quadrant."
  },
  {
    "question": "The horizontal axis in the Cartesian plane is called:",
    "options": [
      "y-axis",
      "Origin",
      "x-axis",
      "Quadrant"
    ],
    "correct": 2,
    "explanation": "The horizontal axis is called the x-axis."
  },
  {
    "question": "What is the abscissa of the point (7, -2)?",
    "options": [
      "-2",
      "7",
      "5",
      "9"
    ],
    "correct": 1,
    "explanation": "The abscissa is the x-coordinate of a point, which is 7."
  },
  {
    "question": "The point (0, -5) lies on the:",
    "options": [
      "x-axis",
      "y-axis",
      "Origin",
      "First quadrant"
    ],
    "correct": 1,
    "explanation": "When x = 0, the point lies on the y-axis."
  },
  {
    "question": "Mirror image of the point (3, 4) in the x-axis is:",
    "options": [
      "(-3, 4)",
      "(3, -4)",
      "(-3, -4)",
      "(4, 3)"
    ],
    "correct": 1,
    "explanation": "Reflecting in the x-axis changes the sign of the y-coordinate."
  },
  {
    "question": "In which quadrant does (-2, 5) lie?",
    "options": [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    "correct": 1,
    "explanation": "Negative x and positive y place the point in the second quadrant."
  },
  {
    "question": "The ordinate of the point (4, 9) is:",
    "options": [
      "4",
      "9",
      "13",
      "5"
    ],
    "correct": 1,
    "explanation": "The ordinate is the y-coordinate of a point, which is 9."
  },
  {
    "question": "The distance of the point (3, 4) from the x-axis is:",
    "options": [
      "3 units",
      "4 units",
      "5 units",
      "7 units"
    ],
    "correct": 1,
    "explanation": "The distance of a point from the x-axis equals the absolute value of its y-coordinate, which is 4."
  },
  {
    "question": "A point whose abscissa and ordinate are both negative lies in the:",
    "options": [
      "First quadrant",
      "Second quadrant",
      "Third quadrant",
      "Fourth quadrant"
    ],
    "correct": 2,
    "explanation": "When both x and y coordinates are negative, the point lies in the third quadrant."
  },
  {
    "question": "The point (0, 0) lies on:",
    "options": [
      "Only the x-axis",
      "Only the y-axis",
      "Both the x-axis and the y-axis",
      "Neither axis"
    ],
    "correct": 2,
    "explanation": "The origin (0, 0) is the intersection point of both axes, so it lies on both."
  },
  {
    "question": "The mirror image of the point (5, -3) in the y-axis is:",
    "options": [
      "(-5, -3)",
      "(5, 3)",
      "(-5, 3)",
      "(3, -5)"
    ],
    "correct": 0,
    "explanation": "Reflecting in the y-axis changes the sign of the x-coordinate: (5, -3) becomes (-5, -3)."
  },
  {
    "question": "Which of the following points lies on the x-axis?",
    "options": [
      "(0, 5)",
      "(3, 0)",
      "(2, 2)",
      "(-1, -1)"
    ],
    "correct": 1,
    "explanation": "A point lies on the x-axis when its y-coordinate is 0. The point (3, 0) satisfies this."
  },
  {
    "question": "The point (-3, 4) lies in which quadrant?",
    "options": [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    "correct": 1,
    "explanation": "In the second quadrant, x is negative and y is positive. Since -3 < 0 and 4 > 0, the point (-3, 4) lies in the second quadrant."
  },
  {
    "question": "The distance of the point (5, -12) from the origin is:",
    "options": [
      "13",
      "17",
      "7",
      "sqrt(119)"
    ],
    "correct": 0,
    "explanation": "Distance from origin = sqrt(5^2 + (-12)^2) = sqrt(25 + 144) = sqrt(169) = 13."
  },
  {
    "question": "A point lies on the x-axis. Which of the following must be true about its coordinates?",
    "options": [
      "x = 0",
      "y = 0",
      "x = y",
      "x > 0"
    ],
    "correct": 1,
    "explanation": "Any point on the x-axis has y-coordinate equal to 0. The x-coordinate can be any real number."
  },
  {
    "question": "The mirror image of the point (2, -7) in the x-axis is:",
    "options": [
      "(-2, -7)",
      "(2, 7)",
      "(-2, 7)",
      "(7, -2)"
    ],
    "correct": 1,
    "explanation": "Reflecting a point in the x-axis changes the sign of the y-coordinate while keeping x unchanged. So (2, -7) becomes (2, 7)."
  },
  {
    "question": "Which of the following points is equidistant from the x-axis and the y-axis?",
    "options": [
      "(3, 5)",
      "(4, -4)",
      "(2, -3)",
      "(0, 6)"
    ],
    "correct": 1,
    "explanation": "The distance from the x-axis is |y| and from the y-axis is |x|. For (4, -4): |x| = 4 and |y| = 4, so the point is equidistant from both axes."
  },
  {
    "question": "The point (0, 0) is called the:",
    "options": [
      "Abscissa",
      "Ordinate",
      "Origin",
      "Quadrant point"
    ],
    "correct": 2,
    "explanation": "The point where the x-axis and y-axis intersect is (0, 0), called the origin of the Cartesian plane."
  },
  {
    "question": "If the ordinate of a point is twice its abscissa and the abscissa is 3, the point is:",
    "options": [
      "(6, 3)",
      "(3, 6)",
      "(3, 3)",
      "(2, 3)"
    ],
    "correct": 1,
    "explanation": "Abscissa (x) = 3 and ordinate (y) = 2 * abscissa = 6. So the point is (3, 6)."
  },
  {
    "question": "In which quadrant does the point (-5, -9) lie?",
    "options": [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    "correct": 2,
    "explanation": "In the third quadrant, both x and y are negative. Since -5 < 0 and -9 < 0, the point (-5, -9) lies in the third quadrant."
  },
  {
    "question": "The perpendicular distance of the point (4, 3) from the y-axis is:",
    "options": [
      "3",
      "4",
      "5",
      "7"
    ],
    "correct": 1,
    "explanation": "The perpendicular distance from the y-axis is the absolute value of the x-coordinate. |4| = 4."
  },
  {
    "question": "If a point P has coordinates (a, -a) where a > 0, then P lies in the:",
    "options": [
      "First quadrant",
      "Second quadrant",
      "Third quadrant",
      "Fourth quadrant"
    ],
    "correct": 3,
    "explanation": "When a > 0, the x-coordinate is positive and the y-coordinate (-a) is negative. A point with positive x and negative y lies in the fourth quadrant."
  }
]

export default questions
