const quizData = {
  math: {
    name: "Mathematics",
    color: "#6366f1",
    icon: "Calculator",
    chapters: [
      {
        id: 1,
        name: "Coordinate Geometry (The Use of Coordinates)",
        description: "Cartesian plane, plotting points, and quadrant identification",
        questions: [
          {
            question: "The point (3, -4) lies in which quadrant?",
            options: ["First", "Second", "Third", "Fourth"],
            correct: 3,
            explanation: "Positive x and negative y coordinates place the point in the fourth quadrant."
          },
          {
            question: "The coordinates of the origin are:",
            options: ["(1, 1)", "(0, 1)", "(1, 0)", "(0, 0)"],
            correct: 3,
            explanation: "The origin is the point where both axes meet, at (0, 0)."
          },
          {
            question: "A point on the y-axis has its x-coordinate equal to:",
            options: ["1", "-1", "0", "Any value"],
            correct: 2,
            explanation: "Any point on the y-axis has x-coordinate 0."
          },
          {
            question: "The point (-5, -3) lies in which quadrant?",
            options: ["First", "Second", "Third", "Fourth"],
            correct: 2,
            explanation: "Both coordinates are negative, placing the point in the third quadrant."
          },
          {
            question: "The horizontal axis in the Cartesian plane is called:",
            options: ["y-axis", "Origin", "x-axis", "Quadrant"],
            correct: 2,
            explanation: "The horizontal axis is called the x-axis."
          },
          {
            question: "What is the abscissa of the point (7, -2)?",
            options: ["-2", "7", "5", "9"],
            correct: 1,
            explanation: "The abscissa is the x-coordinate of a point, which is 7."
          },
          {
            question: "The point (0, -5) lies on the:",
            options: ["x-axis", "y-axis", "Origin", "First quadrant"],
            correct: 1,
            explanation: "When x = 0, the point lies on the y-axis."
          },
          {
            question: "Mirror image of the point (3, 4) in the x-axis is:",
            options: ["(-3, 4)", "(3, -4)", "(-3, -4)", "(4, 3)"],
            correct: 1,
            explanation: "Reflecting in the x-axis changes the sign of the y-coordinate."
          },
          {
            question: "In which quadrant does (-2, 5) lie?",
            options: ["First", "Second", "Third", "Fourth"],
            correct: 1,
            explanation: "Negative x and positive y place the point in the second quadrant."
          },
          {
            question: "The ordinate of the point (4, 9) is:",
            options: ["4", "9", "13", "5"],
            correct: 1,
            explanation: "The ordinate is the y-coordinate of a point, which is 9."
          },
          {
            question: "The distance of the point (3, 4) from the x-axis is:",
            options: ["3 units", "4 units", "5 units", "7 units"],
            correct: 1,
            explanation: "The distance of a point from the x-axis equals the absolute value of its y-coordinate, which is 4."
          },
          {
            question: "A point whose abscissa and ordinate are both negative lies in the:",
            options: ["First quadrant", "Second quadrant", "Third quadrant", "Fourth quadrant"],
            correct: 2,
            explanation: "When both x and y coordinates are negative, the point lies in the third quadrant."
          },
          {
            question: "The point (0, 0) lies on:",
            options: ["Only the x-axis", "Only the y-axis", "Both the x-axis and the y-axis", "Neither axis"],
            correct: 2,
            explanation: "The origin (0, 0) is the intersection point of both axes, so it lies on both."
          },
          {
            question: "The mirror image of the point (5, -3) in the y-axis is:",
            options: ["(-5, -3)", "(5, 3)", "(-5, 3)", "(3, -5)"],
            correct: 0,
            explanation: "Reflecting in the y-axis changes the sign of the x-coordinate: (5, -3) becomes (-5, -3)."
          },
          {
            question: "Which of the following points lies on the x-axis?",
            options: ["(0, 5)", "(3, 0)", "(2, 2)", "(-1, -1)"],
            correct: 1,
            explanation: "A point lies on the x-axis when its y-coordinate is 0. The point (3, 0) satisfies this."
          },
          {
            question: "The point (-3, 4) lies in which quadrant?",
            options: ["First", "Second", "Third", "Fourth"],
            correct: 1,
            explanation: "In the second quadrant, x is negative and y is positive. Since -3 < 0 and 4 > 0, the point (-3, 4) lies in the second quadrant."
          },
          {
            question: "The distance of the point (5, -12) from the origin is:",
            options: ["13", "17", "7", "sqrt(119)"],
            correct: 0,
            explanation: "Distance from origin = sqrt(5^2 + (-12)^2) = sqrt(25 + 144) = sqrt(169) = 13."
          },
          {
            question: "A point lies on the x-axis. Which of the following must be true about its coordinates?",
            options: ["x = 0", "y = 0", "x = y", "x > 0"],
            correct: 1,
            explanation: "Any point on the x-axis has y-coordinate equal to 0. The x-coordinate can be any real number."
          },
          {
            question: "The mirror image of the point (2, -7) in the x-axis is:",
            options: ["(-2, -7)", "(2, 7)", "(-2, 7)", "(7, -2)"],
            correct: 1,
            explanation: "Reflecting a point in the x-axis changes the sign of the y-coordinate while keeping x unchanged. So (2, -7) becomes (2, 7)."
          },
          {
            question: "Which of the following points is equidistant from the x-axis and the y-axis?",
            options: ["(3, 5)", "(4, -4)", "(2, -3)", "(0, 6)"],
            correct: 1,
            explanation: "The distance from the x-axis is |y| and from the y-axis is |x|. For (4, -4): |x| = 4 and |y| = 4, so the point is equidistant from both axes."
          },
          {
            question: "The point (0, 0) is called the:",
            options: ["Abscissa", "Ordinate", "Origin", "Quadrant point"],
            correct: 2,
            explanation: "The point where the x-axis and y-axis intersect is (0, 0), called the origin of the Cartesian plane."
          },
          {
            question: "If the ordinate of a point is twice its abscissa and the abscissa is 3, the point is:",
            options: ["(6, 3)", "(3, 6)", "(3, 3)", "(2, 3)"],
            correct: 1,
            explanation: "Abscissa (x) = 3 and ordinate (y) = 2 * abscissa = 6. So the point is (3, 6)."
          },
          {
            question: "In which quadrant does the point (-5, -9) lie?",
            options: ["First", "Second", "Third", "Fourth"],
            correct: 2,
            explanation: "In the third quadrant, both x and y are negative. Since -5 < 0 and -9 < 0, the point (-5, -9) lies in the third quadrant."
          },
          {
            question: "The perpendicular distance of the point (4, 3) from the y-axis is:",
            options: ["3", "4", "5", "7"],
            correct: 1,
            explanation: "The perpendicular distance from the y-axis is the absolute value of the x-coordinate. |4| = 4."
          },
          {
            question: "If a point P has coordinates (a, -a) where a > 0, then P lies in the:",
            options: ["First quadrant", "Second quadrant", "Third quadrant", "Fourth quadrant"],
            correct: 3,
            explanation: "When a > 0, the x-coordinate is positive and the y-coordinate (-a) is negative. A point with positive x and negative y lies in the fourth quadrant."
          }
        ]
      },
      {
        id: 2,
        name: "Introduction to Polynomials",
        description: "Polynomials in one variable, zeroes, and factorisation",
        questions: [
          {
            question: "The degree of the polynomial 4x³ + 2x² + 7 is:",
            options: ["1", "2", "3", "4"],
            correct: 2,
            explanation: "The highest power of the variable x is 3, so the degree is 3."
          },
          {
            question: "A polynomial of degree one is called:",
            options: ["Quadratic", "Cubic", "Linear", "Constant"],
            correct: 2,
            explanation: "A polynomial with degree 1 is a linear polynomial."
          },
          {
            question: "The zero of the polynomial p(x) = 2x + 3 is:",
            options: ["3/2", "-3/2", "2/3", "-2/3"],
            correct: 1,
            explanation: "Setting 2x + 3 = 0 gives x = -3/2."
          },
          {
            question: "Which of the following is a polynomial?",
            options: ["x² + 1/x", "√x + 2", "x³ + x + 1", "x^(-1) + 5"],
            correct: 2,
            explanation: "x³ + x + 1 has all non-negative integer exponents, making it a polynomial."
          },
          {
            question: "The factorisation of x² - 9 is:",
            options: ["(x - 3)²", "(x + 3)²", "(x - 3)(x + 3)", "(x - 9)(x + 1)"],
            correct: 2,
            explanation: "x² - 9 is a difference of squares: (x - 3)(x + 3)."
          },
          {
            question: "If p(x) = x² - 5x + 6, then p(2) is:",
            options: ["0", "2", "4", "-2"],
            correct: 0,
            explanation: "p(2) = 4 - 10 + 6 = 0, so 2 is a zero of the polynomial."
          },
          {
            question: "The remainder when x³ + 3x² + 3x + 1 is divided by x + 1 is:",
            options: ["0", "1", "2", "-1"],
            correct: 0,
            explanation: "By the Remainder Theorem, p(-1) = -1 + 3 - 3 + 1 = 0."
          },
          {
            question: "How many zeroes can a quadratic polynomial have at most?",
            options: ["1", "2", "3", "0"],
            correct: 1,
            explanation: "A quadratic polynomial can have at most 2 zeroes."
          },
          {
            question: "Which identity is used to expand (a + b)³?",
            options: ["a³ + b³", "a³ + 3a²b + 3ab² + b³", "a³ + b³ + 3ab", "a² + 2ab + b²"],
            correct: 1,
            explanation: "(a + b)³ = a³ + 3a²b + 3ab² + b³ is the standard binomial expansion."
          },
          {
            question: "A constant polynomial has degree:",
            options: ["0", "1", "2", "Undefined"],
            correct: 0,
            explanation: "A non-zero constant polynomial has degree 0."
          },
          {
            question: "The value of (x + y + z)² when x = 1, y = 2, z = 3 is:",
            options: ["12", "36", "14", "6"],
            correct: 1,
            explanation: "(1 + 2 + 3)² = 6² = 36."
          },
          {
            question: "If x + 1/x = 5, then x² + 1/x² equals:",
            options: ["23", "25", "27", "10"],
            correct: 0,
            explanation: "Squaring both sides: (x + 1/x)² = x² + 2 + 1/x² = 25, so x² + 1/x² = 23."
          },
          {
            question: "The zeroes of the polynomial p(x) = x² - x - 6 are:",
            options: ["2 and -3", "3 and -2", "-3 and -2", "6 and -1"],
            correct: 1,
            explanation: "x² - x - 6 = (x - 3)(x + 2), so zeroes are x = 3 and x = -2."
          },
          {
            question: "Which algebraic identity is a³ - b³ equal to?",
            options: ["(a - b)(a² + ab + b²)", "(a + b)(a² - ab + b²)", "(a - b)³", "(a - b)(a + b)"],
            correct: 0,
            explanation: "a³ - b³ = (a - b)(a² + ab + b²) is a standard algebraic identity."
          },
          {
            question: "The coefficient of x² in the polynomial 3x³ - 7x² + 5x - 1 is:",
            options: ["3", "-7", "5", "-1"],
            correct: 1,
            explanation: "The coefficient of x² is the number multiplying x², which is -7."
          },
          {
            question: "If p(x) = x^3 - 3x^2 + 2x - 1, then p(1) equals:",
            options: ["0", "-1", "1", "-3"],
            correct: 1,
            explanation: "p(1) = 1 - 3 + 2 - 1 = -1. Substituting x = 1 into the polynomial and simplifying gives -1."
          },
          {
            question: "The degree of the polynomial 4x^3 + 0x^5 + 7x - 9 is:",
            options: ["5", "3", "1", "0"],
            correct: 1,
            explanation: "The term 0x^5 has coefficient 0, so it vanishes. The highest power with a non-zero coefficient is x^3, making the degree 3."
          },
          {
            question: "If (x - 2) is a factor of x^3 - kx^2 + 11x - 6, what is the value of k?",
            options: ["3", "4", "5", "6"],
            correct: 3,
            explanation: "By the Factor Theorem, p(2) = 0. So 8 - 4k + 22 - 6 = 0, giving 24 - 4k = 0, hence k = 6."
          },
          {
            question: "Using the identity (a+b)^2 = a^2 + 2ab + b^2, the expansion of (2x + 3)^2 is:",
            options: ["4x^2 + 9", "4x^2 + 6x + 9", "4x^2 + 12x + 9", "2x^2 + 12x + 9"],
            correct: 2,
            explanation: "(2x+3)^2 = (2x)^2 + 2(2x)(3) + 3^2 = 4x^2 + 12x + 9."
          },
          {
            question: "When x^4 + x^3 - 2x^2 + x + 1 is divided by (x - 1), the remainder is:",
            options: ["0", "2", "1", "-1"],
            correct: 1,
            explanation: "By the Remainder Theorem, the remainder is p(1) = 1 + 1 - 2 + 1 + 1 = 2."
          },
          {
            question: "How many zeroes does the polynomial p(x) = x^2 - 5x + 6 have?",
            options: ["0", "1", "2", "3"],
            correct: 2,
            explanation: "A quadratic polynomial has at most 2 zeroes. Here x^2 - 5x + 6 = (x-2)(x-3), so the zeroes are x = 2 and x = 3. Hence there are exactly 2 zeroes."
          },
          {
            question: "The factorisation of 27x^3 + 8 is:",
            options: ["(3x + 2)(9x^2 - 6x + 4)", "(3x + 2)(9x^2 + 6x + 4)", "(3x - 2)(9x^2 + 6x + 4)", "(3x + 2)(3x^2 - 6x + 4)"],
            correct: 0,
            explanation: "Using the identity a^3 + b^3 = (a+b)(a^2 - ab + b^2) with a = 3x and b = 2: (3x+2)(9x^2 - 6x + 4)."
          },
          {
            question: "A polynomial of degree zero is called a:",
            options: ["Linear polynomial", "Quadratic polynomial", "Constant polynomial", "Zero polynomial"],
            correct: 2,
            explanation: "A polynomial of degree zero has no variable term with a positive power; it is simply a non-zero constant like p(x) = 7. This is called a constant polynomial."
          },
          {
            question: "If x + 1/x = 5, then x^2 + 1/x^2 equals:",
            options: ["23", "25", "27", "10"],
            correct: 0,
            explanation: "Squaring both sides: (x + 1/x)^2 = 25, so x^2 + 2 + 1/x^2 = 25, giving x^2 + 1/x^2 = 23."
          },
          {
            question: "The coefficient of x^2 in (x + 3)(x - 4)(x + 1) is:",
            options: ["0", "1", "-1", "3"],
            correct: 0,
            explanation: "Expanding: (x+3)(x-4) = x^2 - x - 12. Then (x^2 - x - 12)(x+1) = x^3 + x^2 - x^2 - x - 12x - 12 = x^3 + 0x^2 - 13x - 12. The coefficient of x^2 is 0."
          }
        ]
      },
      {
        id: 3,
        name: "Number Systems (The World of Numbers)",
        description: "Real numbers, irrational numbers, and number line representations",
        questions: [
          {
            question: "Which of the following is an irrational number?",
            options: ["2/3", "√2", "0.5", "7"],
            correct: 1,
            explanation: "√2 cannot be expressed as a ratio of two integers, making it irrational."
          },
          {
            question: "Every rational number is a:",
            options: ["Natural number", "Whole number", "Integer", "Real number"],
            correct: 3,
            explanation: "All rational numbers belong to the set of real numbers."
          },
          {
            question: "The decimal expansion of √2 is:",
            options: ["Terminating", "Non-terminating repeating", "Non-terminating non-repeating", "None of these"],
            correct: 2,
            explanation: "Irrational numbers have non-terminating, non-repeating decimal expansions."
          },
          {
            question: "Between two rational numbers there exist:",
            options: ["Exactly one rational number", "No rational number", "Infinitely many rational numbers", "Only two rational numbers"],
            correct: 2,
            explanation: "Between any two rational numbers, infinitely many rational numbers can be found."
          },
          {
            question: "Which of the following is a rational number?",
            options: ["√3", "√5", "√4", "√7"],
            correct: 2,
            explanation: "√4 = 2, which is a rational number."
          },
          {
            question: "The value of 1/√2 after rationalising the denominator is:",
            options: ["√2", "√2/2", "2√2", "1/2"],
            correct: 1,
            explanation: "Multiplying numerator and denominator by √2 gives √2/2."
          },
          {
            question: "0.999... (repeating) is equal to:",
            options: ["Less than 1", "Greater than 1", "Equal to 1", "None of these"],
            correct: 2,
            explanation: "0.999... repeating is mathematically proven to equal 1."
          },
          {
            question: "Which of the following is NOT a real number?",
            options: ["√-1", "√2", "0", "-5"],
            correct: 0,
            explanation: "√-1 is an imaginary number, not a real number."
          },
          {
            question: "If p/q is a rational number in lowest terms with a terminating decimal, then q has factors of:",
            options: ["2 or 5 only", "3 or 7 only", "Any prime", "2 or 3 only"],
            correct: 0,
            explanation: "A rational number has a terminating decimal only if the denominator has no prime factors other than 2 and 5."
          },
          {
            question: "The number π is:",
            options: ["Rational", "Irrational", "An integer", "A whole number"],
            correct: 1,
            explanation: "π is irrational because its decimal expansion is non-terminating and non-repeating."
          },
          {
            question: "The decimal expansion of 1/7 is:",
            options: ["Terminating", "Non-terminating repeating", "Non-terminating non-repeating", "None of these"],
            correct: 1,
            explanation: "1/7 = 0.142857142857... which is a non-terminating repeating decimal since 7 has prime factors other than 2 and 5."
          },
          {
            question: "Which of the following represents a rational number between 1 and 2?",
            options: ["√2", "5/3", "π/2", "√3"],
            correct: 1,
            explanation: "5/3 ≈ 1.67 is a rational number between 1 and 2. The others are irrational."
          },
          {
            question: "The value of 2^(1/3) is:",
            options: ["A rational number", "An irrational number", "An integer", "A whole number"],
            correct: 1,
            explanation: "The cube root of 2 is an irrational number as it cannot be expressed as p/q."
          },
          {
            question: "If x = 3 + 2√2, then x + 1/x equals:",
            options: ["6", "3", "2√2", "4√2"],
            correct: 0,
            explanation: "1/x = 1/(3+2√2) = 3−2√2 (after rationalising). So x + 1/x = 3+2√2 + 3−2√2 = 6."
          },
          {
            question: "The number 0 is:",
            options: ["Only a whole number", "A rational number but not an integer", "A rational number, integer, and whole number", "An irrational number"],
            correct: 2,
            explanation: "0 is a whole number, an integer (neither positive nor negative), and a rational number (0/1)."
          },
          {
            question: "Which of the following is an irrational number?",
            options: ["22/7", "0.3333...", "sqrt(5)", "0.25"],
            correct: 2,
            explanation: "sqrt(5) cannot be expressed as p/q where p and q are integers and q != 0, so it is irrational. 22/7 and 0.25 are rationals, and 0.3333... = 1/3 is also rational."
          },
          {
            question: "The decimal expansion of 1/11 is:",
            options: ["Non-terminating non-repeating", "Terminating", "Non-terminating repeating", "None of these"],
            correct: 2,
            explanation: "1/11 = 0.090909... which is a non-terminating repeating decimal. Every rational number has either a terminating or repeating decimal expansion."
          },
          {
            question: "Between two rational numbers, there exist:",
            options: ["Exactly one rational number", "Exactly two rational numbers", "Finitely many rational numbers", "Infinitely many rational numbers"],
            correct: 3,
            explanation: "Between any two rational numbers, there are infinitely many rational numbers. This is known as the density property of rational numbers."
          },
          {
            question: "If x = 3 + 2*sqrt(2), then x + 1/x equals:",
            options: ["6", "4*sqrt(2)", "6 + 4*sqrt(2)", "3"],
            correct: 0,
            explanation: "1/x = 1/(3+2*sqrt(2)). Rationalising: (3-2*sqrt(2))/((3+2*sqrt(2))(3-2*sqrt(2))) = (3-2*sqrt(2))/(9-8) = 3-2*sqrt(2). So x + 1/x = (3+2*sqrt(2)) + (3-2*sqrt(2)) = 6."
          },
          {
            question: "Which statement is TRUE about the number sqrt(2) on the number line?",
            options: ["It cannot be represented on the number line", "It lies between 1 and 2", "It lies between 2 and 3", "It lies exactly at 1.5"],
            correct: 1,
            explanation: "sqrt(2) is approximately 1.414, so it lies between 1 and 2 on the number line. Every real number, including irrationals, can be represented on the number line."
          },
          {
            question: "The value of (sqrt(5) + sqrt(3))(sqrt(5) - sqrt(3)) is:",
            options: ["2", "8", "sqrt(15)", "sqrt(2)"],
            correct: 0,
            explanation: "Using the identity (a+b)(a-b) = a^2 - b^2, we get (sqrt(5))^2 - (sqrt(3))^2 = 5 - 3 = 2."
          },
          {
            question: "After rationalising the denominator of 1/(sqrt(7) - sqrt(6)), the result is:",
            options: ["sqrt(7) - sqrt(6)", "sqrt(7) + sqrt(6)", "(sqrt(7) + sqrt(6))/13", "sqrt(42)"],
            correct: 1,
            explanation: "Multiply numerator and denominator by (sqrt(7)+sqrt(6)): (sqrt(7)+sqrt(6))/((sqrt(7))^2-(sqrt(6))^2) = (sqrt(7)+sqrt(6))/(7-6) = sqrt(7)+sqrt(6)."
          },
          {
            question: "The number 0.101001000100001... (with increasing zeros) is:",
            options: ["Rational", "Irrational", "An integer", "A natural number"],
            correct: 1,
            explanation: "The decimal 0.101001000100001... is non-terminating and non-repeating (the pattern of zeros keeps growing, so there is no fixed repeating block). Therefore it is irrational."
          },
          {
            question: "If 2^(x+3) = 32, what is the value of x?",
            options: ["2", "3", "5", "29"],
            correct: 0,
            explanation: "32 = 2^5. So 2^(x+3) = 2^5, which gives x+3 = 5, hence x = 2."
          },
          {
            question: "The product of a non-zero rational number and an irrational number is always:",
            options: ["Rational", "Irrational", "An integer", "Zero"],
            correct: 1,
            explanation: "The product of a non-zero rational and an irrational number is always irrational. For example, 2 * sqrt(3) = 2*sqrt(3), which is irrational."
          }
        ]
      },
      {
        id: 4,
        name: "Exploring Algebraic Identities",
        description: "Standard algebraic identities including (a+b)^2, (a-b)^2, a^2-b^2, (a+b)^3, (a-b)^3, (x+y+z)^2, a^3+b^3, a^3-b^3, and x^3+y^3+z^3-3xyz",
        questions: [
          {
            question: "The expansion of (a + b)^2 is:",
            options: ["a^2 + b^2", "a^2 + 2ab + b^2", "a^2 - 2ab + b^2", "a^2 + ab + b^2"],
            correct: 1,
            explanation: "(a + b)^2 = a^2 + 2ab + b^2 is one of the most fundamental algebraic identities."
          },
          {
            question: "The expansion of (a - b)^2 is:",
            options: ["a^2 + 2ab + b^2", "a^2 - 2ab - b^2", "a^2 - 2ab + b^2", "a^2 - b^2"],
            correct: 2,
            explanation: "(a - b)^2 = a^2 - 2ab + b^2. The middle term is negative but the last term is positive."
          },
          {
            question: "The factorisation of a^2 - b^2 is:",
            options: ["(a - b)^2", "(a + b)^2", "(a + b)(a - b)", "(a - b)(a - b)"],
            correct: 2,
            explanation: "a^2 - b^2 = (a + b)(a - b) is the difference of two squares identity."
          },
          {
            question: "The value of 105^2 using the identity (a + b)^2 is (taking a = 100, b = 5):",
            options: ["11025", "11000", "10025", "10525"],
            correct: 0,
            explanation: "105^2 = (100 + 5)^2 = 100^2 + 2(100)(5) + 5^2 = 10000 + 1000 + 25 = 11025."
          },
          {
            question: "The value of 98^2 using the identity (a - b)^2 is (taking a = 100, b = 2):",
            options: ["9600", "9604", "9404", "9804"],
            correct: 1,
            explanation: "98^2 = (100 - 2)^2 = 100^2 - 2(100)(2) + 2^2 = 10000 - 400 + 4 = 9604."
          },
          {
            question: "The value of 103 x 97 using the identity a^2 - b^2 = (a+b)(a-b) is:",
            options: ["9991", "10000", "9991", "9909"],
            correct: 0,
            explanation: "103 x 97 = (100 + 3)(100 - 3) = 100^2 - 3^2 = 10000 - 9 = 9991."
          },
          {
            question: "If a + b = 10 and ab = 21, then a^2 + b^2 equals:",
            options: ["58", "100", "79", "42"],
            correct: 0,
            explanation: "(a + b)^2 = a^2 + 2ab + b^2. So 100 = a^2 + b^2 + 42, giving a^2 + b^2 = 58."
          },
          {
            question: "The expansion of (a + b)^3 is:",
            options: ["a^3 + b^3", "a^3 + 3a^2b + 3ab^2 + b^3", "a^3 + 3ab + b^3", "a^3 - 3a^2b + 3ab^2 - b^3"],
            correct: 1,
            explanation: "(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3, which can also be written as a^3 + b^3 + 3ab(a + b)."
          },
          {
            question: "The expansion of (a - b)^3 is:",
            options: ["a^3 - 3a^2b + 3ab^2 - b^3", "a^3 + 3a^2b - 3ab^2 + b^3", "a^3 - b^3", "a^3 - 3ab + b^3"],
            correct: 0,
            explanation: "(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3, which can also be written as a^3 - b^3 - 3ab(a - b)."
          },
          {
            question: "The factorisation of a^3 + b^3 is:",
            options: ["(a + b)(a^2 + ab + b^2)", "(a + b)(a^2 - ab + b^2)", "(a - b)(a^2 + ab + b^2)", "(a + b)^3"],
            correct: 1,
            explanation: "a^3 + b^3 = (a + b)(a^2 - ab + b^2) is a standard algebraic identity."
          },
          {
            question: "The factorisation of a^3 - b^3 is:",
            options: ["(a - b)(a^2 - ab + b^2)", "(a + b)(a^2 + ab + b^2)", "(a - b)(a^2 + ab + b^2)", "(a - b)^3"],
            correct: 2,
            explanation: "a^3 - b^3 = (a - b)(a^2 + ab + b^2) is a standard algebraic identity."
          },
          {
            question: "The expansion of (x + y + z)^2 is:",
            options: ["x^2 + y^2 + z^2", "x^2 + y^2 + z^2 + 2xy + 2yz + 2zx", "x^2 + y^2 + z^2 + xy + yz + zx", "(x + y)^2 + z^2"],
            correct: 1,
            explanation: "(x + y + z)^2 = x^2 + y^2 + z^2 + 2xy + 2yz + 2zx."
          },
          {
            question: "If x + y + z = 10 and x^2 + y^2 + z^2 = 40, then xy + yz + zx equals:",
            options: ["30", "60", "50", "20"],
            correct: 0,
            explanation: "(x + y + z)^2 = x^2 + y^2 + z^2 + 2(xy + yz + zx). So 100 = 40 + 2(xy + yz + zx), giving xy + yz + zx = 30."
          },
          {
            question: "The identity x^3 + y^3 + z^3 - 3xyz equals:",
            options: ["(x + y + z)(x^2 + y^2 + z^2 + xy + yz + zx)", "(x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx)", "(x - y - z)(x^2 + y^2 + z^2)", "x^3 + y^3 + z^3"],
            correct: 1,
            explanation: "x^3 + y^3 + z^3 - 3xyz = (x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx)."
          },
          {
            question: "If x + y + z = 0, then x^3 + y^3 + z^3 equals:",
            options: ["0", "3xyz", "-3xyz", "xyz"],
            correct: 1,
            explanation: "Since x^3 + y^3 + z^3 - 3xyz = (x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx), and x + y + z = 0, we get x^3 + y^3 + z^3 = 3xyz."
          },
          {
            question: "The value of (2x + 3y)^2 is:",
            options: ["4x^2 + 9y^2", "4x^2 + 6xy + 9y^2", "4x^2 + 12xy + 9y^2", "2x^2 + 12xy + 3y^2"],
            correct: 2,
            explanation: "(2x + 3y)^2 = (2x)^2 + 2(2x)(3y) + (3y)^2 = 4x^2 + 12xy + 9y^2."
          },
          {
            question: "The value of (5a - 3b)^2 is:",
            options: ["25a^2 - 9b^2", "25a^2 + 30ab + 9b^2", "25a^2 - 30ab + 9b^2", "25a^2 - 15ab + 9b^2"],
            correct: 2,
            explanation: "(5a - 3b)^2 = (5a)^2 - 2(5a)(3b) + (3b)^2 = 25a^2 - 30ab + 9b^2."
          },
          {
            question: "Using a suitable identity, 8x^3 + 27y^3 can be factorised as:",
            options: ["(2x + 3y)(4x^2 + 6xy + 9y^2)", "(2x + 3y)(4x^2 - 6xy + 9y^2)", "(2x - 3y)(4x^2 + 6xy + 9y^2)", "(2x + 3y)(2x^2 - 3xy + 9y^2)"],
            correct: 1,
            explanation: "8x^3 + 27y^3 = (2x)^3 + (3y)^3 = (2x + 3y)((2x)^2 - (2x)(3y) + (3y)^2) = (2x + 3y)(4x^2 - 6xy + 9y^2)."
          },
          {
            question: "The value of 52^2 - 48^2 using the identity a^2 - b^2 is:",
            options: ["400", "16", "200", "2704"],
            correct: 0,
            explanation: "52^2 - 48^2 = (52 + 48)(52 - 48) = 100 x 4 = 400."
          },
          {
            question: "If a - b = 4 and ab = 12, then a^2 + b^2 equals:",
            options: ["28", "40", "8", "64"],
            correct: 1,
            explanation: "(a - b)^2 = a^2 - 2ab + b^2. So 16 = a^2 + b^2 - 24, giving a^2 + b^2 = 40."
          },
          {
            question: "The value of (x + 2)(x + 3) using the identity (x + a)(x + b) = x^2 + (a+b)x + ab is:",
            options: ["x^2 + 5x + 5", "x^2 + 6x + 5", "x^2 + 5x + 6", "x^2 + 6x + 6"],
            correct: 2,
            explanation: "(x + 2)(x + 3) = x^2 + (2+3)x + (2)(3) = x^2 + 5x + 6."
          },
          {
            question: "If a + b = 6 and a - b = 2, then a^2 - b^2 equals:",
            options: ["8", "12", "32", "36"],
            correct: 1,
            explanation: "a^2 - b^2 = (a + b)(a - b) = 6 x 2 = 12."
          },
          {
            question: "The value of (1 + 2 + 3)^2 - (1^2 + 2^2 + 3^2) equals:",
            options: ["22", "36", "14", "22"],
            correct: 0,
            explanation: "(1+2+3)^2 = 36 and 1^2+2^2+3^2 = 14. So the answer is 36 - 14 = 22. By the identity, this equals 2(xy+yz+zx) = 2(2+6+3) = 22."
          },
          {
            question: "If x + y + z = 0 and x^2 + y^2 + z^2 = 50, then xy + yz + zx equals:",
            options: ["-25", "25", "-50", "50"],
            correct: 0,
            explanation: "(x+y+z)^2 = x^2+y^2+z^2+2(xy+yz+zx). So 0 = 50 + 2(xy+yz+zx), giving xy+yz+zx = -25."
          },
          {
            question: "The value of (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca) when a = 1, b = -1, c = 0 is:",
            options: ["0", "2", "-2", "1"],
            correct: 0,
            explanation: "This expression equals a^3 + b^3 + c^3 - 3abc = 1 + (-1) + 0 - 3(1)(-1)(0) = 0."
          }
        ]
      },
      {
        id: 5,
        name: "Introduction to Euclid's Geometry: Axioms and Postulates",
        description: "Euclid's definitions, axioms, postulates, and theorems",
        questions: [
          {
            question: "Euclid's geometry is also known as:",
            options: ["Analytic geometry", "Coordinate geometry", "Plane geometry", "Solid geometry"],
            correct: 2,
            explanation: "Euclid's geometry deals with plane figures and is called plane geometry."
          },
          {
            question: "A statement that is accepted without proof is called:",
            options: ["Theorem", "Axiom", "Corollary", "Conjecture"],
            correct: 1,
            explanation: "An axiom is a self-evident truth accepted without proof."
          },
          {
            question: "Euclid stated how many postulates?",
            options: ["3", "4", "5", "6"],
            correct: 2,
            explanation: "Euclid stated five postulates as the foundation of his geometry."
          },
          {
            question: "According to Euclid, things equal to the same thing are:",
            options: ["Different from each other", "Equal to one another", "Not comparable", "Greater than each other"],
            correct: 1,
            explanation: "This is Euclid's first axiom: things equal to the same thing are equal to one another."
          },
          {
            question: "The word 'geometry' comes from Greek words meaning:",
            options: ["Earth measuring", "Sky mapping", "Number counting", "Line drawing"],
            correct: 0,
            explanation: "Geometry comes from 'geo' (earth) and 'metron' (measurement)."
          },
          {
            question: "According to Euclid, a surface has:",
            options: ["Length only", "Length and breadth", "Length, breadth, and height", "No dimension"],
            correct: 1,
            explanation: "Euclid defined a surface as that which has length and breadth only."
          },
          {
            question: "Euclid's fifth postulate is related to:",
            options: ["Circles", "Parallel lines", "Triangles", "Squares"],
            correct: 1,
            explanation: "The fifth postulate deals with parallel lines and their intersections."
          },
          {
            question: "A theorem is a statement that:",
            options: ["Needs no proof", "Is always false", "Requires a proof", "Is assumed true"],
            correct: 2,
            explanation: "A theorem is a mathematical statement that has been proven using axioms and logic."
          },
          {
            question: "According to Euclid, a point has:",
            options: ["Length", "Breadth", "Height", "No part"],
            correct: 3,
            explanation: "Euclid defined a point as that which has no part (no dimensions)."
          },
          {
            question: "Euclid's Elements was written around:",
            options: ["100 BCE", "300 BCE", "500 BCE", "700 BCE"],
            correct: 1,
            explanation: "Euclid wrote Elements around 300 BCE in Alexandria."
          },
          {
            question: "Euclid's second postulate states that a terminated line can be:",
            options: ["Bent into a curve", "Produced indefinitely", "Divided into two", "Erased completely"],
            correct: 1,
            explanation: "Euclid's second postulate states that a terminated line (line segment) can be extended indefinitely."
          },
          {
            question: "According to Euclid, a line has:",
            options: ["No dimension", "Length only", "Length and breadth", "Length, breadth, and height"],
            correct: 1,
            explanation: "Euclid defined a line as breadthless length — it has length only."
          },
          {
            question: "Two distinct lines in a plane can have at most how many points in common?",
            options: ["None", "One", "Two", "Infinite"],
            correct: 1,
            explanation: "Two distinct lines can intersect at most at one point. If they share two or more points, they are the same line."
          },
          {
            question: "A corollary is:",
            options: ["An axiom", "A definition", "A statement that follows directly from a theorem", "An unproven assumption"],
            correct: 2,
            explanation: "A corollary is a proposition that follows directly from a theorem that has already been proved."
          },
          {
            question: "Euclid's first postulate states that:",
            options: ["A circle can be drawn with any centre", "A straight line can be drawn from any one point to any other point", "All right angles are equal", "A terminated line can be extended"],
            correct: 1,
            explanation: "Euclid's first postulate states that a straight line may be drawn from any one point to any other point."
          },
          {
            question: "According to Euclid, a surface has:",
            options: ["Length only", "Length and breadth", "Length, breadth and height", "No dimension"],
            correct: 1,
            explanation: "Euclid defined a surface as that which has length and breadth only, i.e., it is two-dimensional."
          },
          {
            question: "Euclid's fifth postulate is equivalent to:",
            options: ["Two distinct points determine a unique line", "A circle can be drawn with any centre and radius", "If two lines are parallel, a transversal makes equal alternate angles", "All right angles are equal"],
            correct: 2,
            explanation: "Euclid's fifth postulate (the parallel postulate) is logically equivalent to the statement that parallel lines cut by a transversal produce equal alternate interior angles. This equivalence was established through Playfair's axiom."
          },
          {
            question: "The number of lines that can pass through two distinct points is:",
            options: ["0", "1", "2", "Infinitely many"],
            correct: 1,
            explanation: "Euclid's first postulate states that a straight line may be drawn from any one point to any other point — and there is a unique such line through two distinct points."
          },
          {
            question: "Which of the following is an axiom rather than a postulate in Euclid's system?",
            options: ["A straight line can be extended indefinitely", "A circle can be drawn with any centre and radius", "Things which are equal to the same thing are equal to one another", "All right angles are equal"],
            correct: 2,
            explanation: "Axioms are general truths not specific to geometry. 'Things equal to the same thing are equal to one another' is Euclid's first axiom, a universal logical principle."
          },
          {
            question: "Euclid stated that the whole is greater than the part. This is Euclid's:",
            options: ["First postulate", "Fifth axiom", "Third postulate", "First axiom"],
            correct: 1,
            explanation: "The statement 'the whole is greater than the part' is Euclid's fifth axiom (or common notion 5)."
          },
          {
            question: "Two distinct lines can have at most how many points in common?",
            options: ["0", "1", "2", "Infinitely many"],
            correct: 1,
            explanation: "If two distinct lines had two common points, then two different lines would pass through those two points, contradicting the postulate that there is a unique line through two distinct points. So at most 1 common point."
          },
          {
            question: "A theorem differs from a postulate because a theorem:",
            options: ["Is always about numbers", "Must be proved using logic", "Is assumed to be true without proof", "Cannot be used in geometry"],
            correct: 1,
            explanation: "A postulate is assumed true without proof. A theorem is a statement that has been proved using definitions, axioms, postulates, and previously proved theorems."
          },
          {
            question: "If A, B and C are three points on a line and B lies between A and C, then which statement is true?",
            options: ["AC + BC = AB", "AB + AC = BC", "AB + BC = AC", "None of the above"],
            correct: 2,
            explanation: "When B lies between A and C on a line, the whole AC equals the sum of its parts AB and BC. So AB + BC = AC."
          },
          {
            question: "A system of axioms is called consistent if:",
            options: ["It has exactly five axioms", "No axiom can be deduced from others", "It is impossible to derive a contradiction from them", "It contains Euclid's parallel postulate"],
            correct: 2,
            explanation: "A set of axioms is consistent if no contradiction can be derived from them. Consistency means the axioms do not lead to conflicting conclusions."
          },
          {
            question: "The edges of a surface are:",
            options: ["Points", "Lines", "Curves", "Planes"],
            correct: 2,
            explanation: "According to Euclid, the edges (or boundaries) of a surface are curves (which include straight lines as a special case)."
          }
        ]
      },
      {
        id: 6,
        name: "Lines and Angles",
        description: "Types of angles, pairs of angles, parallel lines, and transversals",
        questions: [
          {
            question: "If two lines intersect, the vertically opposite angles are:",
            options: ["Supplementary", "Complementary", "Equal", "Unequal"],
            correct: 2,
            explanation: "Vertically opposite angles formed by two intersecting lines are always equal."
          },
          {
            question: "Two supplementary angles add up to:",
            options: ["90°", "180°", "270°", "360°"],
            correct: 1,
            explanation: "Supplementary angles are pairs of angles whose sum is 180°."
          },
          {
            question: "If one angle of a linear pair is 65°, the other angle is:",
            options: ["25°", "65°", "115°", "295°"],
            correct: 2,
            explanation: "Angles in a linear pair add up to 180°, so the other angle is 180° - 65° = 115°."
          },
          {
            question: "Alternate interior angles are equal when lines are:",
            options: ["Perpendicular", "Intersecting", "Parallel", "Skew"],
            correct: 2,
            explanation: "Alternate interior angles are equal only when the lines are parallel."
          },
          {
            question: "Two complementary angles add up to:",
            options: ["45°", "90°", "180°", "360°"],
            correct: 1,
            explanation: "Complementary angles are pairs of angles whose sum is 90°."
          },
          {
            question: "A transversal intersects two parallel lines forming how many angles?",
            options: ["4", "6", "8", "10"],
            correct: 2,
            explanation: "A transversal cutting two lines creates 8 angles in total."
          },
          {
            question: "An angle measuring 90° is called a:",
            options: ["Acute angle", "Obtuse angle", "Right angle", "Straight angle"],
            correct: 2,
            explanation: "An angle of exactly 90° is a right angle."
          },
          {
            question: "Co-interior angles (same-side interior) are:",
            options: ["Equal", "Complementary", "Supplementary", "None of these"],
            correct: 2,
            explanation: "Co-interior angles formed by a transversal with parallel lines are supplementary (add to 180°)."
          },
          {
            question: "If two parallel lines are cut by a transversal, corresponding angles are:",
            options: ["Supplementary", "Complementary", "Equal", "Unequal"],
            correct: 2,
            explanation: "Corresponding angles are equal when the lines are parallel."
          },
          {
            question: "The sum of all angles around a point is:",
            options: ["90°", "180°", "270°", "360°"],
            correct: 3,
            explanation: "All angles around a point always sum to 360°."
          },
          {
            question: "If two angles are supplementary and one is 40° more than the other, the angles are:",
            options: ["60° and 120°", "70° and 110°", "80° and 100°", "50° and 130°"],
            correct: 1,
            explanation: "Let angles be x and x + 40. Then x + x + 40 = 180, so 2x = 140, x = 70. The angles are 70° and 110°."
          },
          {
            question: "An angle measuring between 0° and 90° is called:",
            options: ["Obtuse angle", "Reflex angle", "Acute angle", "Straight angle"],
            correct: 2,
            explanation: "An acute angle measures between 0° and 90°."
          },
          {
            question: "A reflex angle measures between:",
            options: ["0° and 90°", "90° and 180°", "180° and 360°", "Exactly 180°"],
            correct: 2,
            explanation: "A reflex angle measures more than 180° but less than 360°."
          },
          {
            question: "If a transversal intersects two lines and alternate interior angles are NOT equal, then the lines are:",
            options: ["Parallel", "Perpendicular", "Not parallel", "Coincident"],
            correct: 2,
            explanation: "Alternate interior angles are equal only when the lines are parallel. If they are unequal, the lines are not parallel."
          },
          {
            question: "The complement of a 35° angle is:",
            options: ["145°", "55°", "65°", "35°"],
            correct: 1,
            explanation: "Complementary angles add up to 90°, so the complement is 90° − 35° = 55°."
          },
          {
            question: "If two parallel lines are cut by a transversal, and one pair of co-interior angles measures 70 degrees and x degrees, then x equals:",
            options: ["70", "110", "90", "180"],
            correct: 1,
            explanation: "Co-interior (same-side interior) angles are supplementary when lines are parallel. So 70 + x = 180, giving x = 110 degrees."
          },
          {
            question: "The supplement of 47 degrees is:",
            options: ["43 degrees", "133 degrees", "137 degrees", "53 degrees"],
            correct: 1,
            explanation: "Supplementary angles add up to 180 degrees. So the supplement of 47 degrees = 180 - 47 = 133 degrees."
          },
          {
            question: "Two angles are complementary. If one angle is 2/3 of the other, the smaller angle is:",
            options: ["36 degrees", "54 degrees", "30 degrees", "60 degrees"],
            correct: 0,
            explanation: "Let the angles be x and (2/3)x. Then x + (2/3)x = 90, so (5/3)x = 90, giving x = 54. The other angle = 36. The smaller is 36 degrees."
          },
          {
            question: "In a triangle, one exterior angle is 120 degrees. If one of the non-adjacent interior angles is 45 degrees, the other non-adjacent interior angle is:",
            options: ["75 degrees", "60 degrees", "55 degrees", "35 degrees"],
            correct: 0,
            explanation: "An exterior angle of a triangle equals the sum of the two non-adjacent interior angles. So 120 = 45 + x, giving x = 75 degrees."
          },
          {
            question: "When two lines intersect, the vertically opposite angles are:",
            options: ["Supplementary", "Complementary", "Equal", "Adjacent"],
            correct: 2,
            explanation: "Vertically opposite angles (formed at the point of intersection of two lines) are always equal."
          },
          {
            question: "If two parallel lines are cut by a transversal, which pair of angles are equal?",
            options: ["Co-interior angles", "Adjacent angles on the same line", "Alternate interior angles", "Linear pair angles"],
            correct: 2,
            explanation: "When parallel lines are cut by a transversal, alternate interior angles are equal. Co-interior angles are supplementary, not equal."
          },
          {
            question: "The angles of a triangle are in the ratio 2:3:5. The largest angle is:",
            options: ["90 degrees", "36 degrees", "54 degrees", "108 degrees"],
            correct: 0,
            explanation: "Sum of angles = 180. Let the angles be 2k, 3k, 5k. Then 10k = 180, so k = 18. The largest angle = 5 * 18 = 90 degrees."
          },
          {
            question: "If a transversal is perpendicular to one of two parallel lines, it is:",
            options: ["Parallel to the other line", "Perpendicular to the other line as well", "At 45 degrees to the other line", "Not related to the other line"],
            correct: 1,
            explanation: "If a transversal is perpendicular to one parallel line, it makes 90 degrees with it. Corresponding angles with the other parallel line are also 90 degrees, so it is perpendicular to both."
          },
          {
            question: "The sum of all angles formed around a point is:",
            options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            correct: 3,
            explanation: "The angles around a point form a complete revolution, which is 360 degrees."
          },
          {
            question: "In the figure, lines PQ and RS intersect at O. If angle POR = 3x and angle QOS = 5x - 80, find x.",
            options: ["40", "50", "60", "80"],
            correct: 0,
            explanation: "Angle POR and angle QOS are vertically opposite, so they are equal. 3x = 5x - 80, giving 2x = 80, so x = 40."
          }
        ]
      },
      {
        id: 7,
        name: "Sequences and Progressions (New addition)",
        description: "Arithmetic progressions, geometric progressions, nth term, sum of n terms, common difference, common ratio, and basic sequences",
        questions: [
          {
            question: "The common difference of the AP 3, 7, 11, 15, ... is:",
            options: ["3", "4", "7", "11"],
            correct: 1,
            explanation: "Common difference d = 7 - 3 = 4. Each term increases by 4."
          },
          {
            question: "The nth term of an AP with first term a and common difference d is:",
            options: ["a + nd", "a + (n-1)d", "a - (n-1)d", "nd + a"],
            correct: 1,
            explanation: "The nth term of an AP is given by a_n = a + (n-1)d, where a is the first term and d is the common difference."
          },
          {
            question: "The 10th term of the AP 2, 5, 8, 11, ... is:",
            options: ["29", "32", "26", "30"],
            correct: 0,
            explanation: "a = 2, d = 3. a_10 = 2 + (10-1)(3) = 2 + 27 = 29."
          },
          {
            question: "The sum of the first n terms of an AP is given by:",
            options: ["n/2 [a + l]", "n/2 [2a + (n-1)d]", "Both of the above", "n(a + d)"],
            correct: 2,
            explanation: "The sum of first n terms can be written as S_n = n/2 [a + l] where l is the last term, or equivalently S_n = n/2 [2a + (n-1)d]."
          },
          {
            question: "The sum of the first 10 natural numbers is:",
            options: ["45", "55", "50", "100"],
            correct: 1,
            explanation: "S = n(n+1)/2 = 10(11)/2 = 55. This is also the sum of the AP 1, 2, 3, ..., 10."
          },
          {
            question: "If the 3rd term of an AP is 7 and the 7th term is 15, the common difference is:",
            options: ["1", "2", "3", "4"],
            correct: 1,
            explanation: "a_3 = a + 2d = 7 and a_7 = a + 6d = 15. Subtracting: 4d = 8, so d = 2."
          },
          {
            question: "Which of the following is an arithmetic progression?",
            options: ["1, 2, 4, 8, 16", "3, 6, 9, 12, 15", "1, 1, 2, 3, 5", "2, 4, 8, 16, 32"],
            correct: 1,
            explanation: "3, 6, 9, 12, 15 has a constant common difference of 3, making it an AP. The others do not have a constant difference between consecutive terms."
          },
          {
            question: "The common ratio of the GP 2, 6, 18, 54, ... is:",
            options: ["2", "3", "4", "6"],
            correct: 1,
            explanation: "Common ratio r = 6/2 = 3. Each term is multiplied by 3 to get the next term."
          },
          {
            question: "The nth term of a GP with first term a and common ratio r is:",
            options: ["a*r^n", "a*r^(n-1)", "a + r^n", "a*(n-1)*r"],
            correct: 1,
            explanation: "The nth term of a GP is a_n = a * r^(n-1)."
          },
          {
            question: "The 5th term of the GP 3, 6, 12, 24, ... is:",
            options: ["36", "48", "96", "192"],
            correct: 1,
            explanation: "a = 3, r = 2. a_5 = 3 * 2^(5-1) = 3 * 16 = 48."
          },
          {
            question: "The sum of first n terms of a GP (when r is not equal to 1) is:",
            options: ["a(r^n - 1)/(r - 1)", "a(1 - r^n)/(1 - r)", "Both of the above", "a*n*r"],
            correct: 2,
            explanation: "S_n = a(r^n - 1)/(r - 1) for r > 1, or equivalently S_n = a(1 - r^n)/(1 - r) for r < 1. Both formulas give the same result."
          },
          {
            question: "If the first term of an AP is 5 and the common difference is -3, the 4th term is:",
            options: ["-4", "-1", "2", "14"],
            correct: 0,
            explanation: "a_4 = a + 3d = 5 + 3(-3) = 5 - 9 = -4."
          },
          {
            question: "The sum of the first 20 terms of the AP 1, 4, 7, 10, ... is:",
            options: ["590", "610", "570", "550"],
            correct: 0,
            explanation: "a = 1, d = 3, n = 20. S_20 = 20/2 [2(1) + (20-1)(3)] = 10[2 + 57] = 10 * 59 = 590."
          },
          {
            question: "Which of the following is a geometric progression?",
            options: ["2, 4, 6, 8, 10", "1, 3, 9, 27, 81", "5, 10, 15, 20, 25", "1, 2, 3, 4, 5"],
            correct: 1,
            explanation: "1, 3, 9, 27, 81 has a constant ratio of 3 between consecutive terms, making it a GP."
          },
          {
            question: "If three numbers a, b, c are in AP, then:",
            options: ["b = ac", "2b = a + c", "b^2 = ac", "a + b = c"],
            correct: 1,
            explanation: "In an AP, the middle term is the average of the surrounding terms. So b - a = c - b, which gives 2b = a + c."
          },
          {
            question: "If three numbers a, b, c are in GP, then:",
            options: ["2b = a + c", "b = a + c", "b^2 = ac", "a^2 = bc"],
            correct: 2,
            explanation: "In a GP, b/a = c/b, which gives b^2 = ac. The square of the middle term equals the product of the other two."
          },
          {
            question: "The 15th term of the AP 10, 7, 4, 1, ... is:",
            options: ["-32", "-35", "-28", "-30"],
            correct: 0,
            explanation: "a = 10, d = 7 - 10 = -3. a_15 = 10 + (15-1)(-3) = 10 - 42 = -32."
          },
          {
            question: "How many terms of the AP 5, 9, 13, ... must be taken so that the sum is 140?",
            options: ["5", "6", "7", "8"],
            correct: 2,
            explanation: "a = 5, d = 4. S_n = n/2[2(5) + (n-1)(4)] = n/2[10 + 4n - 4] = n/2[6 + 4n] = n(3 + 2n). Setting n(3 + 2n) = 140: 2n^2 + 3n - 140 = 0. Solving: n = 7."
          },
          {
            question: "The sum of the first 5 terms of the GP 1, 2, 4, 8, ... is:",
            options: ["15", "31", "16", "32"],
            correct: 1,
            explanation: "a = 1, r = 2, n = 5. S_5 = 1(2^5 - 1)/(2 - 1) = (32 - 1)/1 = 31."
          },
          {
            question: "The arithmetic mean of two numbers a and b is:",
            options: ["a*b", "(a + b)/2", "sqrt(a*b)", "a/b"],
            correct: 1,
            explanation: "The arithmetic mean (AM) of two numbers a and b is (a + b)/2."
          },
          {
            question: "The geometric mean of two positive numbers a and b is:",
            options: ["(a + b)/2", "a*b", "sqrt(a*b)", "(a - b)/2"],
            correct: 2,
            explanation: "The geometric mean (GM) of two positive numbers a and b is sqrt(a*b)."
          },
          {
            question: "If the sum of n terms of an AP is 3n^2 + 5n, the common difference is:",
            options: ["3", "5", "6", "8"],
            correct: 2,
            explanation: "S_n = 3n^2 + 5n. S_1 = 8 (first term). S_2 = 22, so a_2 = S_2 - S_1 = 14. d = a_2 - a_1 = 14 - 8 = 6."
          },
          {
            question: "The sequence 1, 1, 2, 3, 5, 8, 13, ... is called:",
            options: ["Arithmetic progression", "Geometric progression", "Fibonacci sequence", "Harmonic sequence"],
            correct: 2,
            explanation: "This is the Fibonacci sequence where each term is the sum of the two preceding terms: 1+1=2, 1+2=3, 2+3=5, etc."
          },
          {
            question: "In an AP, if a = 2 and d = 0, then all terms are:",
            options: ["0", "2", "Increasing", "Decreasing"],
            correct: 1,
            explanation: "When d = 0, every term equals the first term. So all terms are 2. This is a constant sequence."
          },
          {
            question: "The 8th term of the GP 5, 10, 20, 40, ... is:",
            options: ["320", "640", "1280", "160"],
            correct: 1,
            explanation: "a = 5, r = 2. a_8 = 5 * 2^(8-1) = 5 * 128 = 640."
          }
        ]
      },
      {
        id: 8,
        name: "Triangles – Congruence Theorems",
        description: "Congruence of triangles, criteria for congruence, and properties",
        questions: [
          {
            question: "The sum of all angles of a triangle is:",
            options: ["90°", "180°", "270°", "360°"],
            correct: 1,
            explanation: "The angle sum property states that angles of a triangle add up to 180°."
          },
          {
            question: "Which congruence criterion uses two sides and the included angle?",
            options: ["SSS", "SAS", "ASA", "RHS"],
            correct: 1,
            explanation: "SAS (Side-Angle-Side) uses two sides and the angle between them."
          },
          {
            question: "In an equilateral triangle, each angle measures:",
            options: ["30°", "45°", "60°", "90°"],
            correct: 2,
            explanation: "All angles in an equilateral triangle are equal and each measures 60°."
          },
          {
            question: "If two triangles are congruent, their corresponding parts are:",
            options: ["Unequal", "Proportional", "Equal", "Supplementary"],
            correct: 2,
            explanation: "CPCT: Corresponding Parts of Congruent Triangles are equal."
          },
          {
            question: "The side opposite to the largest angle is:",
            options: ["The smallest side", "The largest side", "Equal to other sides", "Cannot be determined"],
            correct: 1,
            explanation: "In a triangle, the side opposite the largest angle is the longest side."
          },
          {
            question: "RHS congruence rule is applicable to:",
            options: ["All triangles", "Right triangles only", "Equilateral triangles", "Isosceles triangles"],
            correct: 1,
            explanation: "RHS (Right angle-Hypotenuse-Side) applies only to right-angled triangles."
          },
          {
            question: "An isosceles triangle has:",
            options: ["No equal sides", "Two equal sides", "Three equal sides", "Four equal sides"],
            correct: 1,
            explanation: "An isosceles triangle has exactly two sides of equal length."
          },
          {
            question: "In triangle ABC, if AB = AC, then:",
            options: ["∠B = ∠C", "∠A = ∠B", "∠A = ∠C", "All angles are equal"],
            correct: 0,
            explanation: "Angles opposite to equal sides are equal, so ∠B = ∠C."
          },
          {
            question: "The sum of any two sides of a triangle is always:",
            options: ["Equal to the third side", "Less than the third side", "Greater than the third side", "None of these"],
            correct: 2,
            explanation: "The Triangle Inequality states that the sum of any two sides exceeds the third."
          },
          {
            question: "How many congruence criteria are there for triangles?",
            options: ["2", "3", "4", "5"],
            correct: 2,
            explanation: "There are 4 congruence criteria: SSS, SAS, ASA (or AAS), and RHS."
          },
          {
            question: "An exterior angle of a triangle is equal to:",
            options: ["The sum of all interior angles", "The sum of the two non-adjacent interior angles", "The adjacent interior angle", "Half the sum of all angles"],
            correct: 1,
            explanation: "The Exterior Angle Theorem states that an exterior angle equals the sum of the two non-adjacent interior angles."
          },
          {
            question: "In a triangle, if all three sides are unequal, the triangle is called:",
            options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
            correct: 2,
            explanation: "A scalene triangle has all three sides of different lengths."
          },
          {
            question: "ASA congruence rule means two triangles are congruent if:",
            options: ["All three sides are equal", "Two angles and the included side are equal", "Two sides and the included angle are equal", "All three angles are equal"],
            correct: 1,
            explanation: "ASA (Angle-Side-Angle): Two angles and the side between them are equal in both triangles."
          },
          {
            question: "If ∠A = 50° and ∠B = 60° in triangle ABC, then ∠C is:",
            options: ["50°", "60°", "70°", "80°"],
            correct: 2,
            explanation: "∠C = 180° − 50° − 60° = 70° (angle sum property of a triangle)."
          },
          {
            question: "In a right-angled triangle, the side opposite the right angle is called the:",
            options: ["Base", "Perpendicular", "Hypotenuse", "Median"],
            correct: 2,
            explanation: "The hypotenuse is the longest side of a right triangle, opposite the 90° angle."
          },
          {
            question: "In triangles ABC and DEF, AB = DE, BC = EF, and angle B = angle E. The two triangles are congruent by which criterion?",
            options: ["SSS", "SAS", "ASA", "RHS"],
            correct: 1,
            explanation: "Two sides and the included angle of one triangle are equal to two sides and the included angle of the other. This is the SAS (Side-Angle-Side) congruence criterion."
          },
          {
            question: "In an isosceles triangle PQR with PQ = PR, the angle opposite to PQ is:",
            options: ["angle P", "angle Q", "angle R", "Cannot be determined"],
            correct: 2,
            explanation: "In triangle PQR, the side PQ is opposite to angle R. The angle opposite to a side is the angle at the vertex not on that side."
          },
          {
            question: "If in a triangle, two angles are equal, then the sides opposite to them are:",
            options: ["Unequal", "Equal", "Perpendicular", "Parallel"],
            correct: 1,
            explanation: "This is the converse of the isosceles triangle theorem: if two angles of a triangle are equal, the sides opposite those angles are also equal."
          },
          {
            question: "The three angles of a triangle are 60, 60, and 60 degrees. The triangle is:",
            options: ["Isosceles but not equilateral", "Scalene", "Right-angled", "Equilateral"],
            correct: 3,
            explanation: "All three angles are equal (60 degrees each), so all three sides must be equal. Such a triangle is equilateral."
          },
          {
            question: "In a right triangle with hypotenuse 13 cm and one leg 5 cm, the other leg is:",
            options: ["8 cm", "12 cm", "10 cm", "18 cm"],
            correct: 1,
            explanation: "By Pythagoras theorem: other leg = sqrt(13^2 - 5^2) = sqrt(169 - 25) = sqrt(144) = 12 cm."
          },
          {
            question: "Which congruence criterion is used when the hypotenuse and one side of two right triangles are equal?",
            options: ["SAS", "ASA", "SSS", "RHS"],
            correct: 3,
            explanation: "When the hypotenuse and one leg of two right triangles are equal, the triangles are congruent by the RHS (Right angle-Hypotenuse-Side) criterion."
          },
          {
            question: "In triangle ABC, if AB > AC, then which angle is greater?",
            options: ["angle A > angle B", "angle B > angle C", "angle C > angle B", "angle A > angle C"],
            correct: 2,
            explanation: "The angle opposite the longer side is greater. AB > AC means the angle opposite AB (angle C) is greater than the angle opposite AC (angle B)."
          },
          {
            question: "Two sides of a triangle are 7 cm and 10 cm. The third side must be:",
            options: ["Greater than 17 cm", "Between 3 cm and 17 cm", "Exactly 12 cm", "Less than 3 cm"],
            correct: 1,
            explanation: "By the triangle inequality, the third side must be greater than |10-7| = 3 cm and less than 10+7 = 17 cm."
          },
          {
            question: "The SSA condition (two sides and a non-included angle) is:",
            options: ["A valid congruence criterion", "Not a valid congruence criterion", "Same as SAS", "Same as ASA"],
            correct: 1,
            explanation: "SSA is not a valid congruence criterion because it can lead to two different triangles (the ambiguous case). Only SAS, ASA, AAS, SSS, and RHS are valid."
          },
          {
            question: "In triangle ABC, the bisector of angle A meets BC at D. If AB = AC, then BD is:",
            options: ["Greater than DC", "Less than DC", "Equal to DC", "Twice DC"],
            correct: 2,
            explanation: "In an isosceles triangle, the angle bisector from the vertex angle also bisects the base. Since AB = AC, the bisector of angle A is also the median, so BD = DC."
          }
        ]
      },
      {
        id: 9,
        name: "4-gons (Quadrilaterals)",
        description: "Types of quadrilaterals, angle sum property, and properties of parallelograms",
        questions: [
          {
            question: "The sum of interior angles of a quadrilateral is:",
            options: ["180°", "270°", "360°", "540°"],
            correct: 2,
            explanation: "The sum of interior angles of a quadrilateral is always 360°."
          },
          {
            question: "A quadrilateral with both pairs of opposite sides parallel is called a:",
            options: ["Trapezium", "Rhombus", "Parallelogram", "Kite"],
            correct: 2,
            explanation: "A parallelogram has both pairs of opposite sides parallel."
          },
          {
            question: "In a parallelogram, opposite angles are:",
            options: ["Complementary", "Supplementary", "Equal", "Unequal"],
            correct: 2,
            explanation: "Opposite angles of a parallelogram are always equal."
          },
          {
            question: "The diagonals of a rectangle are:",
            options: ["Unequal", "Equal", "Perpendicular", "None of these"],
            correct: 1,
            explanation: "A rectangle has equal diagonals that bisect each other."
          },
          {
            question: "A rhombus has all sides:",
            options: ["Unequal", "Parallel", "Equal", "Perpendicular"],
            correct: 2,
            explanation: "All four sides of a rhombus are of equal length."
          },
          {
            question: "The diagonals of a rhombus:",
            options: ["Are equal", "Bisect each other at right angles", "Do not bisect each other", "Are parallel"],
            correct: 1,
            explanation: "The diagonals of a rhombus bisect each other at 90°."
          },
          {
            question: "A square is a special case of:",
            options: ["Only a rectangle", "Only a rhombus", "Both rectangle and rhombus", "Trapezium"],
            correct: 2,
            explanation: "A square has all properties of both a rectangle and a rhombus."
          },
          {
            question: "In a parallelogram, consecutive angles are:",
            options: ["Equal", "Complementary", "Supplementary", "None of these"],
            correct: 2,
            explanation: "Consecutive (adjacent) angles of a parallelogram are supplementary (add to 180°)."
          },
          {
            question: "A trapezium has exactly how many pairs of parallel sides?",
            options: ["0", "1", "2", "3"],
            correct: 1,
            explanation: "A trapezium has exactly one pair of parallel sides."
          },
          {
            question: "The line segment joining the midpoints of two sides of a triangle is:",
            options: ["Equal to the third side", "Half of the third side", "Twice the third side", "Perpendicular to the third side"],
            correct: 1,
            explanation: "The Midpoint Theorem states the segment is parallel to and half the length of the third side."
          },
          {
            question: "The diagonals of a parallelogram:",
            options: ["Are always equal", "Are always perpendicular", "Bisect each other", "Do not intersect"],
            correct: 2,
            explanation: "The diagonals of a parallelogram always bisect each other, though they need not be equal or perpendicular."
          },
          {
            question: "A quadrilateral with one pair of equal and parallel opposite sides is a:",
            options: ["Trapezium", "Parallelogram", "Kite", "Rhombus"],
            correct: 1,
            explanation: "If one pair of opposite sides is both equal and parallel, the quadrilateral is a parallelogram."
          },
          {
            question: "In a quadrilateral ABCD, if ∠A = 90°, ∠B = 70°, and ∠C = 110°, then ∠D is:",
            options: ["80°", "90°", "100°", "70°"],
            correct: 1,
            explanation: "Sum of angles = 360°. So ∠D = 360° − 90° − 70° − 110° = 90°."
          },
          {
            question: "A kite has:",
            options: ["All sides equal", "Two pairs of consecutive equal sides", "Opposite sides parallel", "No equal sides"],
            correct: 1,
            explanation: "A kite has two pairs of adjacent (consecutive) sides that are equal."
          },
          {
            question: "The diagonals of a square:",
            options: ["Are unequal", "Bisect each other at right angles and are equal", "Are parallel", "Do not bisect each other"],
            correct: 1,
            explanation: "A square's diagonals are equal in length, bisect each other, and intersect at right angles."
          },
          {
            question: "The sum of the interior angles of a quadrilateral is:",
            options: ["180 degrees", "270 degrees", "360 degrees", "540 degrees"],
            correct: 2,
            explanation: "A quadrilateral can be divided into two triangles, so the sum of its interior angles = 2 * 180 = 360 degrees."
          },
          {
            question: "In a parallelogram ABCD, if angle A = 65 degrees, then angle B equals:",
            options: ["65 degrees", "115 degrees", "130 degrees", "90 degrees"],
            correct: 1,
            explanation: "In a parallelogram, consecutive angles are supplementary. So angle B = 180 - 65 = 115 degrees."
          },
          {
            question: "The diagonals of a rectangle are:",
            options: ["Perpendicular and equal", "Equal but not necessarily perpendicular", "Perpendicular but not equal", "Neither equal nor perpendicular"],
            correct: 1,
            explanation: "The diagonals of a rectangle are always equal in length but they are perpendicular only if the rectangle is a square."
          },
          {
            question: "A quadrilateral whose diagonals bisect each other at right angles is a:",
            options: ["Rectangle", "Parallelogram", "Rhombus", "Trapezium"],
            correct: 2,
            explanation: "In a rhombus, the diagonals bisect each other at right angles. A rectangle's diagonals bisect each other but not at right angles (unless it is a square)."
          },
          {
            question: "In a trapezium ABCD with AB parallel to CD, if AB = 12 cm and CD = 8 cm, the length of the line segment joining the midpoints of AD and BC is:",
            options: ["10 cm", "20 cm", "4 cm", "14 cm"],
            correct: 0,
            explanation: "The line joining the midpoints of the non-parallel sides of a trapezium equals the average of the parallel sides: (12 + 8)/2 = 10 cm."
          },
          {
            question: "Which of the following is NOT always true for a parallelogram?",
            options: ["Opposite sides are equal", "Opposite angles are equal", "Diagonals are equal", "Diagonals bisect each other"],
            correct: 2,
            explanation: "In a general parallelogram, opposite sides are equal, opposite angles are equal, and diagonals bisect each other. However, diagonals are equal only in special cases like a rectangle."
          },
          {
            question: "The mid-point theorem states that the line segment joining the midpoints of two sides of a triangle is:",
            options: ["Equal to the third side", "Parallel to the third side and half its length", "Perpendicular to the third side", "Twice the third side"],
            correct: 1,
            explanation: "The mid-point theorem states that the segment joining midpoints of two sides of a triangle is parallel to the third side and equal to half of it."
          },
          {
            question: "A square is always a:",
            options: ["Rhombus but not a rectangle", "Rectangle but not a rhombus", "Both a rhombus and a rectangle", "Neither a rhombus nor a rectangle"],
            correct: 2,
            explanation: "A square has all properties of a rhombus (all sides equal, diagonals bisect at right angles) and all properties of a rectangle (all angles 90 degrees, diagonals equal). So it is both."
          },
          {
            question: "The angles of a quadrilateral are in the ratio 1:2:3:4. The smallest angle is:",
            options: ["36 degrees", "72 degrees", "108 degrees", "144 degrees"],
            correct: 0,
            explanation: "Let the angles be k, 2k, 3k, 4k. Sum = 10k = 360, so k = 36. The smallest angle is 36 degrees."
          },
          {
            question: "If one angle of a rhombus is 50 degrees, the other three angles are:",
            options: ["50, 130, 130", "130, 50, 130", "50, 50, 210", "130, 130, 50"],
            correct: 1,
            explanation: "A rhombus is a parallelogram, so opposite angles are equal and consecutive angles are supplementary. If one angle is 50, the opposite is 50 and the other two are 180-50 = 130 each. The order is 130, 50, 130."
          }
        ]
      },
      {
        id: 10,
        name: "Circles",
        description: "Properties of circles, chords, arcs, and angles subtended",
        questions: [
          {
            question: "The longest chord of a circle is the:",
            options: ["Radius", "Arc", "Diameter", "Secant"],
            correct: 2,
            explanation: "The diameter is the longest chord, passing through the centre of the circle."
          },
          {
            question: "Equal chords of a circle are:",
            options: ["Equidistant from the centre", "At different distances from the centre", "Parallel", "Perpendicular"],
            correct: 0,
            explanation: "Equal chords are equidistant from the centre of the circle."
          },
          {
            question: "The perpendicular from the centre of a circle to a chord:",
            options: ["Trisects the chord", "Is parallel to the chord", "Bisects the chord", "Does not intersect the chord"],
            correct: 2,
            explanation: "The perpendicular drawn from the centre to a chord bisects the chord."
          },
          {
            question: "The angle subtended by a diameter on any point on the circle is:",
            options: ["45°", "90°", "180°", "60°"],
            correct: 1,
            explanation: "An angle in a semicircle (subtended by a diameter) is always 90°."
          },
          {
            question: "How many circles can pass through three non-collinear points?",
            options: ["None", "One", "Two", "Infinite"],
            correct: 1,
            explanation: "Exactly one unique circle passes through three non-collinear points."
          },
          {
            question: "Angles in the same segment of a circle are:",
            options: ["Supplementary", "Complementary", "Equal", "Unequal"],
            correct: 2,
            explanation: "Angles subtended by the same arc in the same segment are equal."
          },
          {
            question: "A cyclic quadrilateral has all four vertices on a:",
            options: ["Straight line", "Circle", "Parabola", "Triangle"],
            correct: 1,
            explanation: "A cyclic quadrilateral has all its vertices lying on a circle."
          },
          {
            question: "Opposite angles of a cyclic quadrilateral are:",
            options: ["Equal", "Complementary", "Supplementary", "None of these"],
            correct: 2,
            explanation: "Opposite angles of a cyclic quadrilateral add up to 180°."
          },
          {
            question: "The angle subtended by an arc at the centre is how much of the angle at any point on the remaining circle?",
            options: ["Equal", "Half", "Double", "Triple"],
            correct: 2,
            explanation: "The angle at the centre is twice the angle subtended at any point on the remaining part of the circle."
          },
          {
            question: "If two circles are concentric, they have:",
            options: ["Same radius", "Same centre", "Same chord", "Same tangent"],
            correct: 1,
            explanation: "Concentric circles share the same centre but have different radii."
          },
          {
            question: "If the angle subtended by an arc at the centre is 60°, the angle subtended at any point on the remaining circle is:",
            options: ["60°", "30°", "120°", "90°"],
            correct: 1,
            explanation: "The angle at any point on the remaining circle is half the angle at the centre: 60°/2 = 30°."
          },
          {
            question: "A chord that passes through the centre of a circle is called the:",
            options: ["Radius", "Secant", "Diameter", "Tangent"],
            correct: 2,
            explanation: "A chord passing through the centre of a circle is the diameter."
          },
          {
            question: "The sum of opposite angles of a cyclic quadrilateral ABCD is:",
            options: ["90°", "180°", "270°", "360°"],
            correct: 1,
            explanation: "In a cyclic quadrilateral, each pair of opposite angles sums to 180°."
          },
          {
            question: "If two chords of a circle are equal, then their corresponding arcs are:",
            options: ["Unequal", "Equal", "Perpendicular", "Parallel"],
            correct: 1,
            explanation: "Equal chords of a circle subtend equal arcs."
          },
          {
            question: "Three collinear points can have how many circles passing through them?",
            options: ["One", "Two", "Infinite", "None"],
            correct: 3,
            explanation: "No circle can pass through three collinear points because a circle requires non-collinear points."
          },
          {
            question: "The angle subtended by a diameter at any point on the circle is:",
            options: ["45 degrees", "60 degrees", "90 degrees", "180 degrees"],
            correct: 2,
            explanation: "An angle in a semicircle (subtended by a diameter at any point on the circle) is always 90 degrees. This is Thales' theorem."
          },
          {
            question: "Equal chords of a circle subtend ______ angles at the centre.",
            options: ["Supplementary", "Complementary", "Equal", "Unequal"],
            correct: 2,
            explanation: "Equal chords of a circle subtend equal angles at the centre. This can be proved using the SSS congruence of the triangles formed by the radii and the chords."
          },
          {
            question: "The perpendicular from the centre of a circle to a chord:",
            options: ["Trisects the chord", "Bisects the chord", "Is equal to the chord", "Passes through an endpoint of the chord"],
            correct: 1,
            explanation: "The perpendicular drawn from the centre of a circle to a chord always bisects the chord."
          },
          {
            question: "In a cyclic quadrilateral ABCD, if angle A = 80 degrees, then angle C equals:",
            options: ["80 degrees", "100 degrees", "160 degrees", "280 degrees"],
            correct: 1,
            explanation: "In a cyclic quadrilateral, opposite angles are supplementary. So angle C = 180 - 80 = 100 degrees."
          },
          {
            question: "The angle subtended by an arc at the centre is ______ the angle subtended at any point on the remaining circle.",
            options: ["Half", "Equal to", "Twice", "Thrice"],
            correct: 2,
            explanation: "The angle subtended by an arc at the centre is always twice the angle subtended by it at any point on the remaining part of the circle."
          },
          {
            question: "A chord of length 24 cm is at a distance of 5 cm from the centre. The radius of the circle is:",
            options: ["13 cm", "12 cm", "7 cm", "26 cm"],
            correct: 0,
            explanation: "The perpendicular from the centre bisects the chord, so half-chord = 12 cm. By Pythagoras: radius = sqrt(12^2 + 5^2) = sqrt(144 + 25) = sqrt(169) = 13 cm."
          },
          {
            question: "Two circles of radii 5 cm and 3 cm have their centres 4 cm apart. They are:",
            options: ["External to each other", "Intersecting at two points", "Touching externally", "Touching internally"],
            correct: 1,
            explanation: "Distance between centres d = 4. Since r1 - r2 = 2 < d = 4 < r1 + r2 = 8, the two circles intersect at two points."
          },
          {
            question: "Angles in the same segment of a circle are:",
            options: ["Supplementary", "Complementary", "Equal", "At right angles"],
            correct: 2,
            explanation: "All angles subtended by the same arc (or chord) in the same segment of a circle are equal."
          },
          {
            question: "If two chords of a circle are equidistant from the centre, then they are:",
            options: ["Perpendicular", "Parallel", "Equal in length", "Unequal"],
            correct: 2,
            explanation: "Chords equidistant from the centre of a circle are equal in length. This follows from the congruence of the right triangles formed by the perpendiculars from the centre."
          },
          {
            question: "The sum of opposite angles of a cyclic quadrilateral is:",
            options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            correct: 1,
            explanation: "The sum of each pair of opposite angles in a cyclic quadrilateral is 180 degrees (they are supplementary)."
          }
        ]
      },
      {
        id: 11,
        name: "Linear Equations in Two Variables",
        description: "Equations of the form ax + by + c = 0, graphical representation, and solutions",
        questions: [
          {
            question: "The equation 2x + 3y = 12 is a:",
            options: ["Linear equation in one variable", "Linear equation in two variables", "Quadratic equation", "Cubic equation"],
            correct: 1,
            explanation: "It has two variables x and y, each of degree 1."
          },
          {
            question: "How many solutions does a linear equation in two variables have?",
            options: ["One", "Two", "No solution", "Infinitely many"],
            correct: 3,
            explanation: "A linear equation in two variables has infinitely many solutions."
          },
          {
            question: "The graph of a linear equation in two variables is a:",
            options: ["Point", "Curve", "Straight line", "Circle"],
            correct: 2,
            explanation: "The graph of a linear equation in two variables is always a straight line."
          },
          {
            question: "Which point lies on the line x + y = 5?",
            options: ["(1, 3)", "(2, 3)", "(3, 3)", "(4, 3)"],
            correct: 1,
            explanation: "Substituting (2, 3): 2 + 3 = 5, which satisfies the equation."
          },
          {
            question: "The equation y = 3 represents a line parallel to:",
            options: ["y-axis", "x-axis", "Both axes", "Neither axis"],
            correct: 1,
            explanation: "y = constant is a horizontal line parallel to the x-axis."
          },
          {
            question: "The equation x = -2 represents a line parallel to:",
            options: ["x-axis", "y-axis", "y = x line", "Origin"],
            correct: 1,
            explanation: "x = constant is a vertical line parallel to the y-axis."
          },
          {
            question: "Which is a solution of 3x + 2y = 12?",
            options: ["(1, 1)", "(2, 3)", "(4, 0)", "(3, 2)"],
            correct: 2,
            explanation: "Substituting (4, 0): 3(4) + 2(0) = 12, which is correct."
          },
          {
            question: "The line y = 2x passes through:",
            options: ["(1, 1)", "(0, 0)", "(2, 2)", "(3, 3)"],
            correct: 1,
            explanation: "Substituting x = 0: y = 0, so (0, 0) lies on the line."
          },
          {
            question: "The general form of a linear equation in two variables is:",
            options: ["ax + b = 0", "ax² + bx + c = 0", "ax + by + c = 0", "ax³ = 0"],
            correct: 2,
            explanation: "The standard form is ax + by + c = 0, where a and b are not both zero."
          },
          {
            question: "The x-intercept of the line 2x + 4y = 8 is:",
            options: ["2", "4", "8", "1"],
            correct: 1,
            explanation: "Setting y = 0: 2x = 8, so x = 4."
          },
          {
            question: "The y-intercept of the line 3x + 2y = 6 is:",
            options: ["2", "3", "6", "1"],
            correct: 1,
            explanation: "Setting x = 0: 2y = 6, so y = 3. The y-intercept is 3."
          },
          {
            question: "The equation x = 0 represents:",
            options: ["The x-axis", "The y-axis", "A point", "No line"],
            correct: 1,
            explanation: "x = 0 is the equation of the y-axis."
          },
          {
            question: "Which of the following is NOT a linear equation in two variables?",
            options: ["2x + 3y = 7", "x − y = 0", "x² + y = 5", "y = 4x"],
            correct: 2,
            explanation: "x² + y = 5 has x raised to power 2, so it is not linear."
          },
          {
            question: "The graph of y = x passes through:",
            options: ["(1, 2)", "(2, 2)", "(3, 3)", "(4, 3)"],
            correct: 2,
            explanation: "For y = x, when x = 3, y = 3. So (3, 3) lies on the line."
          },
          {
            question: "How many solutions does the equation x + y = 0 have?",
            options: ["None", "Exactly one", "Exactly two", "Infinitely many"],
            correct: 3,
            explanation: "A linear equation in two variables always has infinitely many solutions, e.g. (1, −1), (2, −2), etc."
          },
          {
            question: "The equation 2x + 3y = 12 has how many solutions?",
            options: ["Exactly one", "Exactly two", "Exactly three", "Infinitely many"],
            correct: 3,
            explanation: "A linear equation in two variables has infinitely many solutions because for every value of x, there is a corresponding value of y satisfying the equation."
          },
          {
            question: "Which of the following is a solution of x - 2y = 4?",
            options: ["(0, 2)", "(2, 0)", "(4, 0)", "(1, 1)"],
            correct: 2,
            explanation: "Substituting (4, 0): 4 - 2(0) = 4 = RHS. So (4, 0) is a solution."
          },
          {
            question: "The graph of y = 3 is a line:",
            options: ["Passing through the origin", "Parallel to the x-axis", "Parallel to the y-axis", "At 45 degrees to the x-axis"],
            correct: 1,
            explanation: "y = 3 means y is always 3 regardless of x. This is a horizontal line parallel to the x-axis, passing through (0, 3)."
          },
          {
            question: "The graph of the equation 3x + 4y = 0 passes through:",
            options: ["(0, 4)", "(4, 3)", "(0, 0)", "(3, 4)"],
            correct: 2,
            explanation: "Substituting (0, 0): 3(0) + 4(0) = 0 = RHS. So the line passes through the origin."
          },
          {
            question: "If (k, 7) is a solution of 2x - y = 5, then k equals:",
            options: ["6", "1", "-1", "5"],
            correct: 0,
            explanation: "Substituting y = 7: 2k - 7 = 5, so 2k = 12, giving k = 6."
          },
          {
            question: "The equation x = -4 represents a line:",
            options: ["Parallel to the x-axis", "Parallel to the y-axis", "Passing through the origin", "In the first quadrant only"],
            correct: 1,
            explanation: "x = -4 means x is always -4 for all values of y. This is a vertical line parallel to the y-axis."
          },
          {
            question: "How many linear equations in two variables can be satisfied by x = 2, y = 3?",
            options: ["Only one", "Only two", "Only three", "Infinitely many"],
            correct: 3,
            explanation: "Infinitely many lines pass through the point (2, 3). Each such line corresponds to a linear equation satisfied by x = 2, y = 3."
          },
          {
            question: "The cost of 5 pencils and 3 erasers is Rs 34. This can be written as:",
            options: ["5x + 3y = 34", "5x - 3y = 34", "3x + 5y = 34", "5x + 3y + 34 = 0"],
            correct: 0,
            explanation: "Let the cost of one pencil be x and one eraser be y. Then 5 pencils and 3 erasers cost 5x + 3y = 34."
          },
          {
            question: "The graph of 2x + y = 6 intersects the y-axis at:",
            options: ["(0, 6)", "(3, 0)", "(6, 0)", "(0, 3)"],
            correct: 0,
            explanation: "At the y-axis, x = 0. Substituting: 2(0) + y = 6, so y = 6. The y-intercept is (0, 6)."
          },
          {
            question: "Which of the following is NOT a linear equation in two variables?",
            options: ["3x + 2y = 7", "x = 5y - 3", "x^2 + y = 9", "4x - y + 1 = 0"],
            correct: 2,
            explanation: "x^2 + y = 9 contains x^2, which makes it non-linear. A linear equation has variables only to the first power."
          }
        ]
      },
      {
        id: 12,
        name: "Mensuration: Area and Perimeter",
        description: "Area and perimeter of triangles and quadrilaterals using Heron's formula",
        questions: [
          {
            question: "Heron's formula for the area of a triangle is:",
            options: ["√(s(s-a)(s-b)(s-c))", "s(s-a)(s-b)(s-c)", "½ × base × height", "a × b × c"],
            correct: 0,
            explanation: "Heron's formula: Area = √(s(s-a)(s-b)(s-c)) where s is the semi-perimeter."
          },
          {
            question: "The semi-perimeter of a triangle with sides 3, 4, and 5 is:",
            options: ["5", "6", "7", "12"],
            correct: 1,
            explanation: "Semi-perimeter s = (3 + 4 + 5)/2 = 12/2 = 6."
          },
          {
            question: "The area of a triangle with sides 3, 4, and 5 using Heron's formula is:",
            options: ["4", "5", "6", "7"],
            correct: 2,
            explanation: "s = 6, Area = √(6 × 3 × 2 × 1) = √36 = 6 square units."
          },
          {
            question: "Heron's formula is useful when which measurement is not known?",
            options: ["Sides", "Perimeter", "Height", "Angles"],
            correct: 2,
            explanation: "Heron's formula calculates area using only the three sides, without needing the height."
          },
          {
            question: "The area of an equilateral triangle with side 'a' is:",
            options: ["a²/2", "√3/4 × a²", "√3/2 × a²", "a²"],
            correct: 1,
            explanation: "The area of an equilateral triangle is (√3/4) × a²."
          },
          {
            question: "Can a triangle be formed with sides 1, 2, and 4?",
            options: ["Yes", "No", "Sometimes", "Only if equilateral"],
            correct: 1,
            explanation: "1 + 2 = 3 < 4, violating the triangle inequality, so no triangle can be formed."
          },
          {
            question: "The semi-perimeter of an equilateral triangle with side 6 cm is:",
            options: ["6 cm", "9 cm", "12 cm", "18 cm"],
            correct: 1,
            explanation: "s = (6 + 6 + 6)/2 = 18/2 = 9 cm."
          },
          {
            question: "Heron was a mathematician from:",
            options: ["India", "Greece", "Egypt", "China"],
            correct: 2,
            explanation: "Heron (Hero) of Alexandria was an ancient Egyptian-Greek mathematician."
          },
          {
            question: "To find the area of a quadrilateral using Heron's formula, it is divided into:",
            options: ["Two triangles", "Three triangles", "Four triangles", "It cannot be divided"],
            correct: 0,
            explanation: "A quadrilateral is divided into two triangles by a diagonal, and Heron's formula is applied to each."
          },
          {
            question: "If the sides of a triangle are 5 cm, 12 cm, and 13 cm, the area is:",
            options: ["24 sq cm", "30 sq cm", "36 sq cm", "60 sq cm"],
            correct: 1,
            explanation: "s = 15, Area = √(15 × 10 × 3 × 2) = √900 = 30 sq cm."
          },
          {
            question: "For a triangle with sides 6 cm, 8 cm, and 10 cm, the semi-perimeter is:",
            options: ["10 cm", "12 cm", "14 cm", "24 cm"],
            correct: 1,
            explanation: "s = (6 + 8 + 10)/2 = 24/2 = 12 cm."
          },
          {
            question: "The area of a triangle with sides 6 cm, 8 cm, and 10 cm is:",
            options: ["20 sq cm", "24 sq cm", "30 sq cm", "48 sq cm"],
            correct: 1,
            explanation: "s = 12. Area = √(12 × 6 × 4 × 2) = √576 = 24 sq cm. (This is also a right triangle: ½ × 6 × 8 = 24.)"
          },
          {
            question: "Heron's formula requires knowledge of:",
            options: ["Only the base and height", "All three sides of the triangle", "Only two sides and the included angle", "Only the perimeter"],
            correct: 1,
            explanation: "Heron's formula uses the three sides of the triangle to calculate the area."
          },
          {
            question: "If all three sides of a triangle are 4 cm, the area is:",
            options: ["4√3 sq cm", "8 sq cm", "16 sq cm", "4 sq cm"],
            correct: 0,
            explanation: "For an equilateral triangle, Area = (√3/4) × a² = (√3/4) × 16 = 4√3 sq cm."
          },
          {
            question: "A triangle has sides 10 cm, 10 cm, and 12 cm. Its semi-perimeter is:",
            options: ["12 cm", "14 cm", "16 cm", "32 cm"],
            correct: 2,
            explanation: "s = (10 + 10 + 12)/2 = 32/2 = 16 cm."
          },
          {
            question: "The semi-perimeter of a triangle with sides 13, 14, and 15 cm is:",
            options: ["42 cm", "21 cm", "28 cm", "14 cm"],
            correct: 1,
            explanation: "Semi-perimeter s = (a + b + c)/2 = (13 + 14 + 15)/2 = 42/2 = 21 cm."
          },
          {
            question: "Using Heron's formula, the area of a triangle with sides 3, 4, 5 cm is:",
            options: ["12 sq cm", "6 sq cm", "10 sq cm", "7.5 sq cm"],
            correct: 1,
            explanation: "s = (3+4+5)/2 = 6. Area = sqrt(6*(6-3)*(6-4)*(6-5)) = sqrt(6*3*2*1) = sqrt(36) = 6 sq cm."
          },
          {
            question: "A triangle has sides 10, 10, and 12 cm. Its area is:",
            options: ["48 sq cm", "60 sq cm", "40 sq cm", "36 sq cm"],
            correct: 0,
            explanation: "s = (10+10+12)/2 = 16. Area = sqrt(16*6*6*4) = sqrt(2304) = 48 sq cm."
          },
          {
            question: "Heron's formula for the area of a triangle with sides a, b, c and semi-perimeter s is:",
            options: ["sqrt(s(s-a)(s-b)(s-c))", "s(s-a)(s-b)(s-c)", "sqrt(s*a*b*c)", "1/2 * a * b"],
            correct: 0,
            explanation: "Heron's formula states Area = sqrt(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2."
          },
          {
            question: "An equilateral triangle has side 6 cm. Its area using Heron's formula is:",
            options: ["9 sq cm", "9*sqrt(3) sq cm", "18 sq cm", "36 sq cm"],
            correct: 1,
            explanation: "s = 18/2 = 9. Area = sqrt(9*3*3*3) = sqrt(243) = 9*sqrt(3) sq cm."
          },
          {
            question: "A triangular field has sides 50 m, 60 m, and 70 m. The cost of levelling it at Rs 4 per sq m is approximately:",
            options: ["Rs 4899", "Rs 5765", "Rs 5878", "Rs 6000"],
            correct: 2,
            explanation: "s = 90. Area = sqrt(90*40*30*20) = sqrt(2160000) = 1469.69... Cost = 1469.69 * 4 = Rs 5878.78, approximately Rs 5878."
          },
          {
            question: "The sides of a triangle are 5 cm, 12 cm, and 13 cm. This triangle is:",
            options: ["Acute-angled", "Right-angled", "Obtuse-angled", "Equilateral"],
            correct: 1,
            explanation: "5^2 + 12^2 = 25 + 144 = 169 = 13^2. Since the sum of squares of two sides equals the square of the third, it is a right-angled triangle."
          },
          {
            question: "A rhombus has diagonals of length 16 cm and 12 cm. Its side length is:",
            options: ["10 cm", "14 cm", "20 cm", "8 cm"],
            correct: 0,
            explanation: "The diagonals of a rhombus bisect each other at right angles, forming right triangles with legs 8 and 6. Side = sqrt(8^2 + 6^2) = sqrt(64+36) = sqrt(100) = 10 cm."
          },
          {
            question: "The area of triangle with sides 1 cm, 1 cm, and 1 cm is:",
            options: ["1 sq cm", "sqrt(3)/2 sq cm", "sqrt(3)/4 sq cm", "1/2 sq cm"],
            correct: 2,
            explanation: "s = 3/2. Area = sqrt((3/2)(1/2)(1/2)(1/2)) = sqrt(3/16) = sqrt(3)/4 sq cm."
          },
          {
            question: "A quadrilateral has one diagonal of length 10 cm which divides it into two triangles with areas 24 sq cm and 30 sq cm. The area of the quadrilateral is:",
            options: ["54 sq cm", "240 sq cm", "6 sq cm", "27 sq cm"],
            correct: 0,
            explanation: "The area of the quadrilateral equals the sum of the areas of the two triangles formed by the diagonal: 24 + 30 = 54 sq cm."
          }
        ]
      },
      {
        id: 13,
        name: "Mensuration: Surface Area and Volume",
        description: "Surface area and volume of cubes, cuboids, cylinders, cones, and spheres",
        questions: [
          {
            question: "The total surface area of a cube with side 'a' is:",
            options: ["a²", "4a²", "6a²", "8a²"],
            correct: 2,
            explanation: "A cube has 6 faces each of area a², so TSA = 6a²."
          },
          {
            question: "The volume of a cylinder with radius r and height h is:",
            options: ["πr²h", "2πrh", "πrh", "2πr²h"],
            correct: 0,
            explanation: "The volume of a cylinder is πr²h."
          },
          {
            question: "The curved surface area of a cone with slant height l and radius r is:",
            options: ["πr²", "πrl", "2πrl", "πr(r + l)"],
            correct: 1,
            explanation: "The curved (lateral) surface area of a cone is πrl."
          },
          {
            question: "The volume of a sphere with radius r is:",
            options: ["πr³", "2πr³", "4/3 πr³", "4πr²"],
            correct: 2,
            explanation: "The volume of a sphere is (4/3)πr³."
          },
          {
            question: "The total surface area of a hemisphere with radius r is:",
            options: ["2πr²", "3πr²", "4πr²", "πr²"],
            correct: 1,
            explanation: "TSA of hemisphere = curved surface + base = 2πr² + πr² = 3πr²."
          },
          {
            question: "The volume of a cone is what fraction of the volume of a cylinder with the same base and height?",
            options: ["1/2", "1/3", "1/4", "2/3"],
            correct: 1,
            explanation: "Volume of cone = (1/3)πr²h, which is one-third of the cylinder's volume."
          },
          {
            question: "The lateral surface area of a cuboid with length l, breadth b, and height h is:",
            options: ["2(lb + bh + lh)", "2h(l + b)", "lbh", "2(l + b + h)"],
            correct: 1,
            explanation: "Lateral surface area of cuboid = 2h(l + b)."
          },
          {
            question: "The volume of a cube with side 5 cm is:",
            options: ["25 cm³", "75 cm³", "125 cm³", "150 cm³"],
            correct: 2,
            explanation: "Volume of cube = side³ = 5³ = 125 cm³."
          },
          {
            question: "The surface area of a sphere with radius r is:",
            options: ["πr²", "2πr²", "3πr²", "4πr²"],
            correct: 3,
            explanation: "The surface area of a sphere is 4πr²."
          },
          {
            question: "If the radius of a sphere is doubled, the volume becomes:",
            options: ["Double", "Four times", "Six times", "Eight times"],
            correct: 3,
            explanation: "Volume = (4/3)πr³; doubling r gives (4/3)π(2r)³ = 8 times the original volume."
          },
          {
            question: "The total surface area of a cone with radius r and slant height l is:",
            options: ["πrl", "πr(r + l)", "2πr(r + l)", "πr²l"],
            correct: 1,
            explanation: "TSA of a cone = curved surface area + base area = πrl + πr² = πr(r + l)."
          },
          {
            question: "The curved surface area of a hemisphere with radius r is:",
            options: ["πr²", "2πr²", "3πr²", "4πr²"],
            correct: 1,
            explanation: "The curved surface area of a hemisphere is 2πr² (half the surface area of a sphere)."
          },
          {
            question: "The volume of a cuboid with length 4 cm, breadth 3 cm, and height 2 cm is:",
            options: ["9 cm³", "24 cm³", "18 cm³", "12 cm³"],
            correct: 1,
            explanation: "Volume of cuboid = l × b × h = 4 × 3 × 2 = 24 cm³."
          },
          {
            question: "The total surface area of a cuboid is:",
            options: ["lbh", "2(lb + bh + lh)", "2h(l + b)", "l + b + h"],
            correct: 1,
            explanation: "Total surface area of a cuboid = 2(lb + bh + lh)."
          },
          {
            question: "The curved surface area of a cylinder with radius r and height h is:",
            options: ["πr²h", "2πrh", "2πr(r + h)", "πr²"],
            correct: 1,
            explanation: "The curved (lateral) surface area of a cylinder is 2πrh."
          },
          {
            question: "The total surface area of a cube with edge 5 cm is:",
            options: ["125 sq cm", "150 sq cm", "25 sq cm", "100 sq cm"],
            correct: 1,
            explanation: "Total surface area of a cube = 6a^2 = 6 * 25 = 150 sq cm."
          },
          {
            question: "The volume of a cylinder with radius 7 cm and height 10 cm is (take pi = 22/7):",
            options: ["440 cu cm", "1540 cu cm", "770 cu cm", "1400 cu cm"],
            correct: 1,
            explanation: "Volume = pi * r^2 * h = (22/7) * 49 * 10 = 22 * 70 = 1540 cu cm."
          },
          {
            question: "The curved surface area of a cone with slant height 13 cm and radius 5 cm is:",
            options: ["65*pi sq cm", "25*pi sq cm", "60*pi sq cm", "169*pi sq cm"],
            correct: 0,
            explanation: "Curved surface area of cone = pi * r * l = pi * 5 * 13 = 65*pi sq cm."
          },
          {
            question: "The volume of a sphere of radius 3 cm is:",
            options: ["36*pi cu cm", "27*pi cu cm", "108*pi cu cm", "12*pi cu cm"],
            correct: 0,
            explanation: "Volume of sphere = (4/3)*pi*r^3 = (4/3)*pi*27 = 36*pi cu cm."
          },
          {
            question: "The lateral surface area of a cuboid of dimensions 10 cm x 6 cm x 4 cm is:",
            options: ["120 sq cm", "128 sq cm", "240 sq cm", "248 sq cm"],
            correct: 1,
            explanation: "Lateral surface area = 2h(l + b) = 2*4*(10 + 6) = 8*16 = 128 sq cm."
          },
          {
            question: "A hemispherical bowl has inner radius 7 cm. Its inner curved surface area is (take pi = 22/7):",
            options: ["154 sq cm", "308 sq cm", "616 sq cm", "462 sq cm"],
            correct: 1,
            explanation: "Curved surface area of hemisphere = 2*pi*r^2 = 2*(22/7)*49 = 308 sq cm."
          },
          {
            question: "If the radius of a cylinder is doubled and its height is halved, the volume:",
            options: ["Remains the same", "Is doubled", "Is halved", "Becomes four times"],
            correct: 1,
            explanation: "New volume = pi*(2r)^2*(h/2) = pi*4r^2*h/2 = 2*pi*r^2*h = 2 times the original volume."
          },
          {
            question: "The height of a cone whose base radius is 3 cm and slant height is 5 cm is:",
            options: ["4 cm", "8 cm", "sqrt(34) cm", "2 cm"],
            correct: 0,
            explanation: "h = sqrt(l^2 - r^2) = sqrt(25 - 9) = sqrt(16) = 4 cm."
          },
          {
            question: "The total surface area of a solid hemisphere of radius r is:",
            options: ["2*pi*r^2", "3*pi*r^2", "4*pi*r^2", "pi*r^2"],
            correct: 1,
            explanation: "Total surface area = curved surface + base = 2*pi*r^2 + pi*r^2 = 3*pi*r^2."
          },
          {
            question: "A cylindrical container of radius 6 cm and height 15 cm is full of water. If all the water is poured into a rectangular tank of base 18 cm x 12 cm, the depth of water in the tank is approximately:",
            options: ["7.86 cm", "5 cm", "10 cm", "2.36 cm"],
            correct: 0,
            explanation: "Volume of water = pi*36*15 = 540*pi cu cm. Volume of tank = 18*12*h = 216h. So 216h = 540*pi, h = 540*pi/216 = 2.5*pi = 7.854 cm, approximately 7.86 cm."
          }
        ]
      },
      {
        id: 14,
        name: "Statistics",
        description: "Collection of data, frequency distribution, mean, median, mode, and graphical representation",
        questions: [
          {
            question: "The mean of the first 5 natural numbers is:",
            options: ["2", "3", "4", "5"],
            correct: 1,
            explanation: "Mean = (1+2+3+4+5)/5 = 15/5 = 3."
          },
          {
            question: "The mode of the data set {2, 3, 4, 3, 5, 3, 6} is:",
            options: ["2", "3", "4", "5"],
            correct: 1,
            explanation: "3 appears most frequently (3 times), making it the mode."
          },
          {
            question: "The median of {1, 3, 5, 7, 9} is:",
            options: ["3", "5", "7", "9"],
            correct: 1,
            explanation: "For an odd number of values, the median is the middle value, which is 5."
          },
          {
            question: "A frequency polygon is drawn using:",
            options: ["Bar graph", "Histogram", "Pie chart", "Pictograph"],
            correct: 1,
            explanation: "A frequency polygon is drawn by joining the midpoints of the tops of histogram bars."
          },
          {
            question: "Class mark equals:",
            options: ["Upper limit - Lower limit", "(Upper limit + Lower limit) / 2", "Upper limit + Lower limit", "Upper limit × Lower limit"],
            correct: 1,
            explanation: "Class mark is the average of the upper and lower limits of a class interval."
          },
          {
            question: "In a grouped frequency distribution, the sum of all frequencies gives:",
            options: ["Mean", "Mode", "Total number of observations", "Median"],
            correct: 2,
            explanation: "The sum of all frequencies equals the total number of observations."
          },
          {
            question: "If the mean of 5 observations is 10, their sum is:",
            options: ["15", "50", "25", "2"],
            correct: 1,
            explanation: "Sum = Mean × Number of observations = 10 × 5 = 50."
          },
          {
            question: "The range of the data set {4, 7, 8, 12, 15} is:",
            options: ["4", "7", "11", "15"],
            correct: 2,
            explanation: "Range = Maximum - Minimum = 15 - 4 = 11."
          },
          {
            question: "An ogive is also known as a:",
            options: ["Bar graph", "Cumulative frequency curve", "Line graph", "Scatter plot"],
            correct: 1,
            explanation: "An ogive is a cumulative frequency curve."
          },
          {
            question: "Which measure of central tendency is affected most by extreme values?",
            options: ["Mean", "Median", "Mode", "None of these"],
            correct: 0,
            explanation: "The mean is most affected by outliers or extreme values."
          },
          {
            question: "The median of {2, 4, 6, 8} is:",
            options: ["4", "5", "6", "3"],
            correct: 1,
            explanation: "For an even number of values, median = average of middle two values = (4 + 6)/2 = 5."
          },
          {
            question: "The data set {5, 5, 5, 5, 5} has a range of:",
            options: ["5", "25", "0", "1"],
            correct: 2,
            explanation: "Range = Maximum − Minimum = 5 − 5 = 0."
          },
          {
            question: "A histogram is used to represent:",
            options: ["Individual data points", "Continuous frequency distribution", "Qualitative data only", "Scatter data"],
            correct: 1,
            explanation: "A histogram is used to represent continuous frequency distribution with no gaps between bars."
          },
          {
            question: "If the mean of 10, 12, x, 16, 18 is 14, the value of x is:",
            options: ["12", "14", "16", "10"],
            correct: 1,
            explanation: "Mean = (10 + 12 + x + 16 + 18)/5 = 14. So 56 + x = 70, hence x = 14."
          },
          {
            question: "A bar graph uses rectangular bars where the height represents:",
            options: ["The class interval", "The frequency of the data", "The range", "The median"],
            correct: 1,
            explanation: "In a bar graph, the height (or length) of each bar represents the frequency of the category."
          },
          {
            question: "The mean of the first five natural numbers is:",
            options: ["2", "2.5", "3", "5"],
            correct: 2,
            explanation: "Mean = (1+2+3+4+5)/5 = 15/5 = 3."
          },
          {
            question: "The mode of the data set {2, 3, 5, 3, 7, 3, 8, 3, 9} is:",
            options: ["2", "3", "5", "9"],
            correct: 1,
            explanation: "Mode is the value that occurs most frequently. The number 3 appears 4 times, more than any other value."
          },
          {
            question: "The median of 13, 16, 12, 14, 19, 12, 14, 13, 14 is:",
            options: ["13", "14", "13.5", "12"],
            correct: 1,
            explanation: "Arranging in order: 12, 12, 13, 13, 14, 14, 14, 16, 19. There are 9 values, so the median is the 5th value = 14."
          },
          {
            question: "The mean of 20 observations is 15. If each observation is multiplied by 4, the new mean is:",
            options: ["15", "60", "75", "35"],
            correct: 1,
            explanation: "When each observation is multiplied by a constant k, the mean is also multiplied by k. New mean = 15 * 4 = 60."
          },
          {
            question: "In a frequency distribution, the class mark of a class 10-20 is:",
            options: ["10", "15", "20", "30"],
            correct: 1,
            explanation: "Class mark = (lower limit + upper limit)/2 = (10 + 20)/2 = 15."
          },
          {
            question: "If the mean of x, x+2, x+4, x+6, x+8 is 11, then x equals:",
            options: ["5", "7", "9", "11"],
            correct: 1,
            explanation: "Mean = (x + x+2 + x+4 + x+6 + x+8)/5 = (5x+20)/5 = x+4. Setting x+4 = 11 gives x = 7."
          },
          {
            question: "A data set has two modes. It is called:",
            options: ["Unimodal", "Bimodal", "Trimodal", "No mode"],
            correct: 1,
            explanation: "A data set with exactly two modes is called bimodal. Uni- means one, bi- means two, and tri- means three."
          },
          {
            question: "The range of the data 25, 18, 20, 22, 16, 6, 17, 15 is:",
            options: ["19", "25", "6", "15"],
            correct: 0,
            explanation: "Range = Maximum - Minimum = 25 - 6 = 19."
          },
          {
            question: "The mean of 8 numbers is 25. If one number is excluded, the mean of the remaining 7 numbers becomes 22. The excluded number is:",
            options: ["46", "3", "50", "25"],
            correct: 0,
            explanation: "Sum of 8 numbers = 8*25 = 200. Sum of 7 numbers = 7*22 = 154. Excluded number = 200 - 154 = 46."
          },
          {
            question: "For a grouped frequency distribution, the modal class is the class with:",
            options: ["The smallest frequency", "The largest frequency", "Frequency equal to the mean", "The middle class mark"],
            correct: 1,
            explanation: "The modal class is the class interval that has the highest frequency in a grouped frequency distribution."
          }
        ]
      },
      {
        id: 15,
        name: "Introduction to Probability",
        description: "Experimental probability, events, and outcomes",
        questions: [
          {
            question: "The probability of an event always lies between:",
            options: ["-1 and 1", "0 and 1", "0 and 100", "1 and 10"],
            correct: 1,
            explanation: "Probability of any event is always between 0 and 1 inclusive."
          },
          {
            question: "The probability of a sure event is:",
            options: ["0", "0.5", "1", "2"],
            correct: 2,
            explanation: "A sure (certain) event has a probability of 1."
          },
          {
            question: "The probability of an impossible event is:",
            options: ["0", "0.5", "1", "-1"],
            correct: 0,
            explanation: "An impossible event has a probability of 0."
          },
          {
            question: "When a coin is tossed, the probability of getting heads is:",
            options: ["0", "1/4", "1/2", "1"],
            correct: 2,
            explanation: "There are 2 equally likely outcomes, so P(heads) = 1/2."
          },
          {
            question: "If P(E) = 0.3, then P(not E) is:",
            options: ["0.3", "0.5", "0.7", "1.3"],
            correct: 2,
            explanation: "P(not E) = 1 - P(E) = 1 - 0.3 = 0.7."
          },
          {
            question: "In a single throw of a die, the probability of getting a number greater than 4 is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            correct: 1,
            explanation: "Numbers greater than 4 are {5, 6}, so P = 2/6 = 1/3."
          },
          {
            question: "An experiment is called random if:",
            options: ["The outcome is known", "The outcome cannot be predicted", "There is only one outcome", "It has no outcomes"],
            correct: 1,
            explanation: "A random experiment is one whose outcome cannot be predicted in advance."
          },
          {
            question: "The sum of probabilities of all outcomes of an experiment is:",
            options: ["0", "0.5", "1", "Depends on the experiment"],
            correct: 2,
            explanation: "The total probability of all possible outcomes always equals 1."
          },
          {
            question: "Experimental probability is based on:",
            options: ["Theoretical calculations", "Actual observations", "Assumptions", "Formulas"],
            correct: 1,
            explanation: "Experimental probability is calculated from the results of actual experiments."
          },
          {
            question: "A bag contains 3 red and 2 blue balls. The probability of drawing a red ball is:",
            options: ["2/5", "3/5", "1/2", "1/3"],
            correct: 1,
            explanation: "P(red) = number of red balls / total balls = 3/5."
          },
          {
            question: "In a single throw of a die, the probability of getting an even number is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            correct: 2,
            explanation: "Even numbers on a die are {2, 4, 6}, so P(even) = 3/6 = 1/2."
          },
          {
            question: "If a coin is tossed twice, the total number of outcomes is:",
            options: ["2", "3", "4", "6"],
            correct: 2,
            explanation: "Outcomes: {HH, HT, TH, TT} = 4 total outcomes."
          },
          {
            question: "The probability of drawing a king from a standard deck of 52 cards is:",
            options: ["1/52", "1/26", "1/13", "4/13"],
            correct: 2,
            explanation: "There are 4 kings in a deck of 52 cards, so P(king) = 4/52 = 1/13."
          },
          {
            question: "If a die is thrown, the probability of getting a number less than 3 is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            correct: 1,
            explanation: "Numbers less than 3 are {1, 2}, so P = 2/6 = 1/3."
          },
          {
            question: "Experimental probability of an event approaches the theoretical probability when the number of trials is:",
            options: ["Very small", "Zero", "Very large", "Exactly 10"],
            correct: 2,
            explanation: "As the number of trials increases, experimental probability approaches theoretical probability (Law of Large Numbers)."
          },
          {
            question: "A coin is tossed 200 times and heads appear 118 times. The experimental probability of getting a head is:",
            options: ["118/200", "82/200", "118/82", "200/118"],
            correct: 0,
            explanation: "Experimental probability = Number of times event occurs / Total number of trials = 118/200 = 0.59."
          },
          {
            question: "The probability of an event always lies between:",
            options: ["-1 and 1", "0 and 1", "0 and infinity", "-infinity and infinity"],
            correct: 1,
            explanation: "Probability of any event is always between 0 and 1 inclusive. P = 0 means impossible, P = 1 means certain."
          },
          {
            question: "A die is thrown 500 times and the frequency of outcome '3' is 90. The experimental probability of getting a '3' is:",
            options: ["1/6", "9/50", "3/500", "90/100"],
            correct: 1,
            explanation: "Experimental probability = 90/500 = 9/50."
          },
          {
            question: "If the probability of an event occurring is 0.35, the probability of it NOT occurring is:",
            options: ["0.35", "0.65", "1.35", "0"],
            correct: 1,
            explanation: "P(not E) = 1 - P(E) = 1 - 0.35 = 0.65."
          },
          {
            question: "In 50 tosses of a coin, tails appeared 28 times. The experimental probability of getting heads is:",
            options: ["28/50", "22/50", "28/22", "50/22"],
            correct: 1,
            explanation: "Heads appeared 50 - 28 = 22 times. P(heads) = 22/50 = 11/25."
          },
          {
            question: "An event that cannot possibly occur has probability:",
            options: ["-1", "0", "1", "0.5"],
            correct: 1,
            explanation: "An impossible event has probability 0. For example, rolling a 7 on a standard die."
          },
          {
            question: "A bag has 5 red, 3 blue, and 2 green balls. One ball is drawn at random 100 times (with replacement) and red appears 58 times. The experimental probability of drawing red is:",
            options: ["5/10", "58/100", "3/10", "42/100"],
            correct: 1,
            explanation: "Experimental probability is based on actual outcomes, not theoretical. P(red) = 58/100 = 0.58."
          },
          {
            question: "A factory produces 1000 bulbs. 50 are found defective. A bulb is chosen at random. The probability that it is NOT defective is:",
            options: ["1/20", "19/20", "50/1000", "1"],
            correct: 1,
            explanation: "Non-defective bulbs = 1000 - 50 = 950. P(not defective) = 950/1000 = 19/20."
          },
          {
            question: "The sum of probabilities of all possible outcomes of an experiment is:",
            options: ["0", "Less than 1", "1", "Greater than 1"],
            correct: 2,
            explanation: "The sum of probabilities of all possible outcomes of any experiment is always exactly 1."
          },
          {
            question: "In a cricket match, a batsman hits 4 boundaries out of 30 balls. The probability that he does NOT hit a boundary on a given ball is:",
            options: ["4/30", "26/30", "1/30", "30/4"],
            correct: 1,
            explanation: "P(boundary) = 4/30. P(not boundary) = 1 - 4/30 = 26/30 = 13/15."
          }
        ]
      }
    ]
  },
  science: {
    name: "Science",
    color: "#06b6d4",
    icon: "FlaskConical",
    chapters: [
      {
        id: 1,
        name: "Exploration: Entering the World of Secondary Science",
        description: "Introduction to secondary-level science, scientific method, and branches of science",
        questions: [
          {
            question: "What is the first step in the scientific method?",
            options: ["Forming a hypothesis", "Making an observation", "Conducting an experiment", "Drawing a conclusion"],
            correct: 1,
            explanation: "The scientific method begins with making an observation about the natural world, which then leads to asking questions and forming hypotheses."
          },
          {
            question: "A hypothesis is best described as:",
            options: ["A proven fact", "A testable prediction or explanation", "The final result of an experiment", "A question about nature"],
            correct: 1,
            explanation: "A hypothesis is a testable prediction or proposed explanation for an observation. It must be something that can be tested through experimentation."
          },
          {
            question: "Which branch of science deals with the study of living organisms?",
            options: ["Physics", "Chemistry", "Biology", "Geology"],
            correct: 2,
            explanation: "Biology is the branch of science that studies living organisms, their structure, function, growth, and evolution."
          },
          {
            question: "The variable that is deliberately changed in an experiment is called the:",
            options: ["Dependent variable", "Independent variable", "Controlled variable", "Constant variable"],
            correct: 1,
            explanation: "The independent variable is the one that the experimenter deliberately changes to observe its effect on the dependent variable."
          },
          {
            question: "Which of the following is NOT a branch of Earth science?",
            options: ["Meteorology", "Oceanography", "Botany", "Geology"],
            correct: 2,
            explanation: "Botany is a branch of biology that deals with the study of plants. Meteorology, oceanography, and geology are all branches of Earth science."
          },
          {
            question: "A controlled experiment tests only:",
            options: ["Multiple variables at once", "One variable at a time", "No variables", "Random variables"],
            correct: 1,
            explanation: "A controlled experiment changes only one variable at a time (the independent variable) while keeping all other variables constant, so that any observed effect can be attributed to that single change."
          },
          {
            question: "What is the purpose of repeating an experiment multiple times?",
            options: ["To waste time", "To ensure reliability of results", "To change the hypothesis", "To use more materials"],
            correct: 1,
            explanation: "Repeating an experiment multiple times ensures that the results are reliable and reproducible, reducing the chance of errors or anomalies affecting conclusions."
          },
          {
            question: "Which instrument is used to measure the volume of a liquid accurately?",
            options: ["Beam balance", "Graduated cylinder", "Thermometer", "Spring balance"],
            correct: 1,
            explanation: "A graduated cylinder is a common laboratory instrument used to accurately measure the volume of a liquid."
          },
          {
            question: "Physics is the study of:",
            options: ["Living organisms", "Chemical reactions", "Matter, energy, and their interactions", "Earth's structure"],
            correct: 2,
            explanation: "Physics is the branch of science that deals with matter, energy, force, motion, and their interactions in the natural world."
          },
          {
            question: "Which of the following is a qualitative observation?",
            options: ["The temperature is 25°C", "The liquid is blue", "The mass is 50 grams", "The length is 10 cm"],
            correct: 1,
            explanation: "A qualitative observation describes qualities or characteristics (such as color, texture, or smell) without using numbers. 'The liquid is blue' describes a quality."
          },
          {
            question: "What does a dependent variable represent in an experiment?",
            options: ["What you keep the same", "What you change", "What you measure or observe", "What you ignore"],
            correct: 2,
            explanation: "The dependent variable is the factor that is measured or observed in an experiment. It depends on or responds to changes in the independent variable."
          },
          {
            question: "Which of these is an example of technology, not science?",
            options: ["Studying cell division", "Observing star patterns", "Developing a new medicine", "Classifying organisms"],
            correct: 2,
            explanation: "Technology is the application of scientific knowledge for practical purposes. Developing a new medicine applies scientific knowledge, while the other options are scientific investigations."
          },
          {
            question: "A scientific theory is:",
            options: ["A random guess", "A well-tested explanation supported by evidence", "The same as a hypothesis", "An opinion of a scientist"],
            correct: 1,
            explanation: "A scientific theory is a well-substantiated explanation of natural phenomena, supported by a large body of evidence gathered through repeated experimentation and observation."
          },
          {
            question: "The SI unit of length is:",
            options: ["Centimetre", "Metre", "Kilometre", "Foot"],
            correct: 1,
            explanation: "The metre (m) is the SI (International System of Units) base unit of length."
          },
          {
            question: "What is the SI unit of mass?",
            options: ["Gram", "Kilogram", "Pound", "Ounce"],
            correct: 1,
            explanation: "The kilogram (kg) is the SI base unit of mass."
          },
          {
            question: "Which of the following best describes chemistry?",
            options: ["Study of forces and motion", "Study of the composition, structure, and properties of matter", "Study of living things", "Study of weather patterns"],
            correct: 1,
            explanation: "Chemistry is the branch of science that studies the composition, structure, properties, and changes of matter."
          },
          {
            question: "A scientific law describes:",
            options: ["Why something happens", "A consistent pattern observed in nature", "An untested idea", "A single experiment's result"],
            correct: 1,
            explanation: "A scientific law describes a consistent, observed pattern in nature. Unlike theories, laws describe what happens but do not explain why it happens."
          },
          {
            question: "What is the function of a control group in an experiment?",
            options: ["To add more variables", "To serve as a standard for comparison", "To make the experiment longer", "To prove the hypothesis wrong"],
            correct: 1,
            explanation: "A control group serves as a baseline or standard for comparison. It is not exposed to the independent variable, so the experimenter can compare results between the control and experimental groups."
          },
          {
            question: "Which tool is used to measure temperature?",
            options: ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
            correct: 1,
            explanation: "A thermometer is the instrument used to measure temperature. A barometer measures atmospheric pressure, an anemometer measures wind speed, and a hygrometer measures humidity."
          },
          {
            question: "Botany is the study of:",
            options: ["Animals", "Rocks", "Plants", "Stars"],
            correct: 2,
            explanation: "Botany is the branch of biology that deals with the scientific study of plants, including their structure, growth, reproduction, and classification."
          },
          {
            question: "Data collected during an experiment should be:",
            options: ["Changed to match the hypothesis", "Recorded accurately and honestly", "Memorised and not written down", "Shared only if it supports the hypothesis"],
            correct: 1,
            explanation: "Scientific data must always be recorded accurately and honestly, regardless of whether it supports the hypothesis. Altering data is unethical and unscientific."
          },
          {
            question: "Which of the following is a quantitative observation?",
            options: ["The flower smells sweet", "The rock is rough", "The solution has a mass of 120 grams", "The sky looks cloudy"],
            correct: 2,
            explanation: "A quantitative observation involves a measurement with a number and unit. 'The solution has a mass of 120 grams' includes a numerical measurement."
          },
          {
            question: "Zoology is the study of:",
            options: ["Plants", "Animals", "Minerals", "Weather"],
            correct: 1,
            explanation: "Zoology is the branch of biology that deals with the study of animals, including their behaviour, structure, physiology, and classification."
          },
          {
            question: "After analysing data, a scientist should:",
            options: ["Immediately publish results", "Draw conclusions based on evidence", "Change the hypothesis to match data", "Discard data that does not fit"],
            correct: 1,
            explanation: "After analysing data, a scientist draws conclusions based on the evidence collected. These conclusions may support or refute the original hypothesis."
          },
          {
            question: "Which of the following represents a correct order in the scientific method?",
            options: ["Conclusion → Experiment → Hypothesis → Observation", "Observation → Hypothesis → Experiment → Conclusion", "Experiment → Observation → Conclusion → Hypothesis", "Hypothesis → Conclusion → Observation → Experiment"],
            correct: 1,
            explanation: "The correct general order is: Observation → Hypothesis → Experiment → Conclusion. Scientists first observe, then hypothesize, test through experiments, and finally draw conclusions."
          }
        ]
      },
      {
        id: 2,
        name: "Cell: The Building Block of Life",
        description: "Cell structure, organelles, prokaryotic and eukaryotic cells, and cell theory",
        questions: [
          {
            question: "Who discovered cells by observing thin slices of cork under a microscope?",
            options: ["Anton van Leeuwenhoek", "Robert Hooke", "Matthias Schleiden", "Rudolf Virchow"],
            correct: 1,
            explanation: "Robert Hooke discovered cells in 1665 by examining thin slices of cork under a microscope. He saw small compartments that reminded him of monks' rooms (cells)."
          },
          {
            question: "Which organelle is known as the 'powerhouse of the cell'?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
            correct: 2,
            explanation: "Mitochondria are called the powerhouse of the cell because they produce ATP (adenosine triphosphate), the main energy currency of the cell, through cellular respiration."
          },
          {
            question: "Which of the following is present in plant cells but absent in animal cells?",
            options: ["Nucleus", "Cell membrane", "Cell wall", "Mitochondria"],
            correct: 2,
            explanation: "Plant cells have a rigid cell wall made of cellulose outside the cell membrane, which provides structural support. Animal cells lack a cell wall."
          },
          {
            question: "The cell membrane is also known as the:",
            options: ["Nuclear membrane", "Plasma membrane", "Cell wall", "Tonoplast"],
            correct: 1,
            explanation: "The cell membrane is also called the plasma membrane. It is a selectively permeable membrane that controls the movement of substances in and out of the cell."
          },
          {
            question: "Which organelle contains the genetic material DNA?",
            options: ["Ribosome", "Lysosome", "Nucleus", "Vacuole"],
            correct: 2,
            explanation: "The nucleus contains the cell's genetic material (DNA) organised into chromosomes. It controls cell activities and is essential for cell division."
          },
          {
            question: "Prokaryotic cells differ from eukaryotic cells because they lack:",
            options: ["Cell membrane", "Ribosomes", "A well-defined nucleus", "DNA"],
            correct: 2,
            explanation: "Prokaryotic cells lack a well-defined, membrane-bound nucleus. Their DNA is located in a region called the nucleoid, which is not enclosed by a nuclear membrane."
          },
          {
            question: "Which organelle is responsible for photosynthesis in plant cells?",
            options: ["Mitochondria", "Chloroplast", "Ribosome", "Endoplasmic reticulum"],
            correct: 1,
            explanation: "Chloroplasts contain the green pigment chlorophyll and are the site of photosynthesis, where plants convert light energy into chemical energy (glucose)."
          },
          {
            question: "Lysosomes are often called the 'suicide bags' of the cell because they:",
            options: ["Produce energy", "Store food", "Contain digestive enzymes that can break down the cell", "Help in cell division"],
            correct: 2,
            explanation: "Lysosomes contain powerful digestive enzymes. When a cell is damaged or dies, the lysosome membrane bursts and the enzymes digest the cell's own components, hence the name 'suicide bags'."
          },
          {
            question: "Which part of the cell is selectively permeable?",
            options: ["Cell wall", "Cell membrane", "Nucleus", "Cytoplasm"],
            correct: 1,
            explanation: "The cell membrane (plasma membrane) is selectively permeable, meaning it allows only certain molecules to pass through while blocking others."
          },
          {
            question: "The jelly-like substance that fills the cell is called:",
            options: ["Nucleoplasm", "Cytoplasm", "Protoplasm", "Cell sap"],
            correct: 1,
            explanation: "Cytoplasm is the jelly-like substance that fills the cell between the cell membrane and the nucleus. It contains various organelles and is the site of many metabolic reactions."
          },
          {
            question: "Which of the following is an example of a prokaryotic organism?",
            options: ["Amoeba", "Mushroom", "Bacterium", "Human"],
            correct: 2,
            explanation: "Bacteria are prokaryotic organisms. They lack a membrane-bound nucleus and other membrane-bound organelles. Amoeba, mushrooms, and humans are all eukaryotic."
          },
          {
            question: "The endoplasmic reticulum that has ribosomes on its surface is called:",
            options: ["Smooth endoplasmic reticulum", "Rough endoplasmic reticulum", "Golgi apparatus", "Nuclear envelope"],
            correct: 1,
            explanation: "Rough endoplasmic reticulum (RER) has ribosomes attached to its surface, giving it a 'rough' appearance. It is involved in protein synthesis and transport."
          },
          {
            question: "Which organelle is involved in packaging and dispatching materials from the cell?",
            options: ["Ribosome", "Mitochondria", "Golgi apparatus", "Lysosome"],
            correct: 2,
            explanation: "The Golgi apparatus (Golgi body) modifies, packages, and dispatches proteins and lipids to their destinations inside or outside the cell."
          },
          {
            question: "Ribosomes are the site of:",
            options: ["Photosynthesis", "Respiration", "Protein synthesis", "Lipid synthesis"],
            correct: 2,
            explanation: "Ribosomes are small organelles responsible for protein synthesis. They translate the genetic instructions from mRNA into chains of amino acids (proteins)."
          },
          {
            question: "A large central vacuole is a characteristic feature of:",
            options: ["Animal cells", "Plant cells", "Bacterial cells", "Viral particles"],
            correct: 1,
            explanation: "Plant cells typically have a large central vacuole filled with cell sap that maintains turgor pressure, stores nutrients, and helps maintain the cell's shape."
          },
          {
            question: "Cell theory states that:",
            options: ["Only plants are made of cells", "All living organisms are composed of cells", "Cells arise from non-living matter", "Viruses are made of cells"],
            correct: 1,
            explanation: "Cell theory states that all living organisms are composed of one or more cells, the cell is the basic unit of life, and all cells arise from pre-existing cells."
          },
          {
            question: "Which scientist proposed that all cells arise from pre-existing cells?",
            options: ["Robert Hooke", "Matthias Schleiden", "Rudolf Virchow", "Theodore Schwann"],
            correct: 2,
            explanation: "Rudolf Virchow proposed in 1855 that 'Omnis cellula e cellula' (all cells arise from pre-existing cells), which became the third tenet of cell theory."
          },
          {
            question: "The outermost boundary of a plant cell is the:",
            options: ["Cell membrane", "Cell wall", "Nuclear membrane", "Cytoplasm"],
            correct: 1,
            explanation: "The outermost boundary of a plant cell is the cell wall, which is a rigid structure made of cellulose. The cell membrane lies just inside the cell wall."
          },
          {
            question: "Which organelle is not found in animal cells?",
            options: ["Mitochondria", "Plastids", "Ribosomes", "Golgi apparatus"],
            correct: 1,
            explanation: "Plastids (such as chloroplasts, chromoplasts, and leucoplasts) are found only in plant cells, not in animal cells. They play roles in photosynthesis and storage."
          },
          {
            question: "The process by which water moves through a selectively permeable membrane is called:",
            options: ["Diffusion", "Osmosis", "Active transport", "Endocytosis"],
            correct: 1,
            explanation: "Osmosis is the movement of water molecules from a region of higher water concentration to a region of lower water concentration through a selectively permeable membrane."
          },
          {
            question: "Which type of endoplasmic reticulum is involved in lipid synthesis?",
            options: ["Rough endoplasmic reticulum", "Smooth endoplasmic reticulum", "Golgi apparatus", "Nucleus"],
            correct: 1,
            explanation: "Smooth endoplasmic reticulum (SER) lacks ribosomes and is involved in the synthesis of lipids, detoxification of drugs, and storage of calcium ions."
          },
          {
            question: "The nuclear membrane has tiny pores that allow:",
            options: ["Only water to pass", "Transfer of materials between nucleus and cytoplasm", "Only DNA to leave the nucleus", "Nothing to pass through"],
            correct: 1,
            explanation: "Nuclear pores are tiny openings in the nuclear membrane that regulate the transport of materials such as RNA, proteins, and ribosomal subunits between the nucleus and cytoplasm."
          },
          {
            question: "An organism made of a single cell is called:",
            options: ["Multicellular", "Unicellular", "Acellular", "Colonial"],
            correct: 1,
            explanation: "A unicellular organism consists of a single cell that carries out all life processes. Examples include bacteria, amoeba, and paramecium."
          },
          {
            question: "Chromatin material in the nucleus consists of:",
            options: ["RNA and proteins", "DNA and proteins", "Lipids and carbohydrates", "Only DNA"],
            correct: 1,
            explanation: "Chromatin is composed of DNA and histone proteins. During cell division, chromatin condenses to form visible chromosomes."
          },
          {
            question: "Which of the following is common to both plant and animal cells?",
            options: ["Cell wall", "Chloroplasts", "Large central vacuole", "Mitochondria"],
            correct: 3,
            explanation: "Mitochondria are present in both plant and animal cells as they are essential for cellular respiration and energy production. Cell walls, chloroplasts, and large central vacuoles are typically found only in plant cells."
          }
        ]
      },
      {
        id: 3,
        name: "Tissues in Action",
        description: "Types of plant and animal tissues, their structure and functions",
        questions: [
          {
            question: "A tissue is defined as a group of cells that:",
            options: ["Are different in structure but perform the same function", "Have similar structure and function", "Are randomly arranged", "Exist only in animals"],
            correct: 1,
            explanation: "A tissue is a group of cells that are similar in structure and work together to perform a specific function."
          },
          {
            question: "Which plant tissue is responsible for growth at the tips of roots and stems?",
            options: ["Permanent tissue", "Meristematic tissue", "Protective tissue", "Vascular tissue"],
            correct: 1,
            explanation: "Meristematic tissue is found at the growing tips (apices) of roots and shoots. These cells divide actively and are responsible for the growth in length of the plant."
          },
          {
            question: "Parenchyma tissue in plants primarily functions in:",
            options: ["Protection", "Support", "Storage and photosynthesis", "Transport of water"],
            correct: 2,
            explanation: "Parenchyma is a simple permanent tissue that stores food, provides support, and in leaves (as chlorenchyma) performs photosynthesis."
          },
          {
            question: "Which tissue provides flexibility to plants and is found in leaf stalks?",
            options: ["Sclerenchyma", "Collenchyma", "Parenchyma", "Meristematic tissue"],
            correct: 1,
            explanation: "Collenchyma tissue provides flexibility and mechanical support to growing plant parts. It is found in leaf stalks (petioles) and stems, allowing them to bend without breaking."
          },
          {
            question: "Sclerenchyma tissue is characterised by:",
            options: ["Thin cell walls and living cells", "Thick, lignified cell walls and dead cells", "Cells with chloroplasts", "Cells that divide actively"],
            correct: 1,
            explanation: "Sclerenchyma cells have thick cell walls hardened with lignin and are dead at maturity. They provide rigidity and strength to plant parts like nutshells and seed coats."
          },
          {
            question: "Which vascular tissue transports water and minerals in plants?",
            options: ["Phloem", "Xylem", "Parenchyma", "Collenchyma"],
            correct: 1,
            explanation: "Xylem is the vascular tissue responsible for transporting water and dissolved minerals from the roots upward to the rest of the plant."
          },
          {
            question: "Phloem transports:",
            options: ["Water from roots to leaves", "Food from leaves to other parts", "Minerals from soil", "Gases in and out of the plant"],
            correct: 1,
            explanation: "Phloem transports prepared food (mainly sucrose) from the leaves (where photosynthesis occurs) to other parts of the plant. This process is called translocation."
          },
          {
            question: "The protective covering on the outside of a plant is called:",
            options: ["Cortex", "Epidermis", "Pith", "Endodermis"],
            correct: 1,
            explanation: "The epidermis is the outermost layer of cells that forms a protective covering on the surface of leaves, stems, and roots of plants."
          },
          {
            question: "Cork (bark) in older stems replaces the epidermis and is formed by:",
            options: ["Apical meristem", "Lateral meristem (cork cambium)", "Intercalary meristem", "Parenchyma"],
            correct: 1,
            explanation: "Cork is formed by the lateral meristem called cork cambium (phellogen). It replaces the epidermis in older stems and roots, providing protection against water loss, infection, and mechanical injury."
          },
          {
            question: "Epithelial tissue in animals covers:",
            options: ["Only internal organs", "Only external body surfaces", "Both external body surfaces and internal organ linings", "Only bones and muscles"],
            correct: 2,
            explanation: "Epithelial tissue covers the external body surface (skin) and lines internal organs and cavities such as the mouth, stomach, and blood vessels."
          },
          {
            question: "Which type of animal tissue is specialised for contraction and movement?",
            options: ["Epithelial tissue", "Connective tissue", "Muscular tissue", "Nervous tissue"],
            correct: 2,
            explanation: "Muscular tissue is composed of cells that can contract and relax, enabling movement of body parts and internal organs."
          },
          {
            question: "Voluntary muscles are also called:",
            options: ["Smooth muscles", "Cardiac muscles", "Striated (skeletal) muscles", "Involuntary muscles"],
            correct: 2,
            explanation: "Striated or skeletal muscles are called voluntary muscles because they are under conscious control. They are attached to bones and are responsible for body movements."
          },
          {
            question: "Cardiac muscle tissue is found in the:",
            options: ["Stomach", "Lungs", "Heart", "Biceps"],
            correct: 2,
            explanation: "Cardiac muscle is a specialised type of muscle found only in the heart. It contracts rhythmically and involuntarily throughout life to pump blood."
          },
          {
            question: "Smooth muscles are found in the walls of:",
            options: ["Skeletal system", "Internal organs like intestines and blood vessels", "Heart only", "Skull"],
            correct: 1,
            explanation: "Smooth (unstriated) muscles are found in the walls of internal organs such as the intestines, stomach, blood vessels, and urinary bladder. They are involuntary muscles."
          },
          {
            question: "The connective tissue that connects bone to bone is called:",
            options: ["Tendon", "Ligament", "Cartilage", "Areolar tissue"],
            correct: 1,
            explanation: "Ligaments are strong, elastic connective tissue bands that connect bones to other bones at joints, providing stability."
          },
          {
            question: "Tendons connect:",
            options: ["Bone to bone", "Muscle to bone", "Muscle to muscle", "Nerve to muscle"],
            correct: 1,
            explanation: "Tendons are tough, fibrous connective tissues that attach muscles to bones, allowing the force of muscle contraction to move bones."
          },
          {
            question: "Blood is classified as a type of:",
            options: ["Epithelial tissue", "Muscular tissue", "Connective tissue", "Nervous tissue"],
            correct: 2,
            explanation: "Blood is a fluid connective tissue. It has a liquid matrix called plasma in which blood cells (RBCs, WBCs, and platelets) are suspended, and it connects different parts of the body."
          },
          {
            question: "The fluid matrix of blood is called:",
            options: ["Serum", "Plasma", "Lymph", "Cytoplasm"],
            correct: 1,
            explanation: "Plasma is the fluid matrix of blood. It is a pale yellow liquid that makes up about 55% of blood volume and contains water, proteins, salts, and other dissolved substances."
          },
          {
            question: "Which tissue transmits electrical impulses in the body?",
            options: ["Muscular tissue", "Epithelial tissue", "Connective tissue", "Nervous tissue"],
            correct: 3,
            explanation: "Nervous tissue is composed of neurons (nerve cells) that generate and transmit electrical impulses, enabling communication and coordination throughout the body."
          },
          {
            question: "The basic unit of nervous tissue is the:",
            options: ["Myocyte", "Neuron", "Nephron", "Osteocyte"],
            correct: 1,
            explanation: "The neuron (nerve cell) is the basic structural and functional unit of nervous tissue. It consists of a cell body, dendrites, and an axon."
          },
          {
            question: "Bone tissue is a type of connective tissue that is:",
            options: ["Soft and flexible", "Hard due to calcium and phosphorus deposits", "Fluid in nature", "Found only in the skull"],
            correct: 1,
            explanation: "Bone is a hard connective tissue. Its matrix is rich in calcium and phosphorus salts, making it rigid and strong enough to support the body and protect internal organs."
          },
          {
            question: "Cartilage is found in:",
            options: ["The tip of the nose and ear", "Only inside bones", "Only in the skull", "The heart"],
            correct: 0,
            explanation: "Cartilage is a flexible connective tissue found in the tip of the nose, ear pinna, trachea, and between vertebrae. It provides support and flexibility."
          },
          {
            question: "Adipose tissue stores:",
            options: ["Water", "Fat", "Calcium", "Iron"],
            correct: 1,
            explanation: "Adipose tissue is a specialised connective tissue that stores fat. It acts as an insulator, cushions organs, and serves as an energy reserve."
          },
          {
            question: "Which type of meristematic tissue is found at the base of leaves or internodes?",
            options: ["Apical meristem", "Lateral meristem", "Intercalary meristem", "Cork cambium"],
            correct: 2,
            explanation: "Intercalary meristem is found at the base of leaves or internodes (e.g., in grasses). It helps in the elongation and regrowth of parts like grass blades after cutting."
          },
          {
            question: "Simple epithelium consists of:",
            options: ["Multiple layers of cells", "A single layer of cells", "Only cuboidal cells", "Only squamous cells"],
            correct: 1,
            explanation: "Simple epithelium is made of a single layer of cells. It is found in areas where absorption, secretion, or filtration occurs, such as the lining of blood vessels and air sacs of lungs."
          }
        ]
      },
      {
        id: 4,
        name: "Describing Motion Around Us",
        description: "Distance, displacement, speed, velocity, acceleration, and graphical representation of motion",
        questions: [
          {
            question: "The total path length covered by an object is called:",
            options: ["Displacement", "Distance", "Velocity", "Acceleration"],
            correct: 1,
            explanation: "Distance is the total path length covered by an object regardless of direction. It is a scalar quantity and is always positive."
          },
          {
            question: "Displacement is defined as:",
            options: ["Total path length covered", "The shortest distance between initial and final positions with direction", "Speed multiplied by time", "The rate of change of velocity"],
            correct: 1,
            explanation: "Displacement is the shortest straight-line distance from the initial position to the final position of an object, along with the direction. It is a vector quantity."
          },
          {
            question: "An object moving in a circular path returns to its starting point. Its displacement is:",
            options: ["Equal to the circumference", "Zero", "Equal to the diameter", "Equal to the radius"],
            correct: 1,
            explanation: "When an object returns to its starting point, its initial and final positions are the same, so the displacement is zero even though the distance travelled equals the circumference."
          },
          {
            question: "Speed is a:",
            options: ["Vector quantity", "Scalar quantity", "Neither scalar nor vector", "Dimensionless quantity"],
            correct: 1,
            explanation: "Speed is a scalar quantity because it has only magnitude (how fast something moves) and no direction."
          },
          {
            question: "The SI unit of speed is:",
            options: ["km/h", "m/s", "cm/s", "miles/hour"],
            correct: 1,
            explanation: "The SI unit of speed (and velocity) is metres per second (m/s)."
          },
          {
            question: "Velocity is different from speed because velocity includes:",
            options: ["Magnitude only", "Direction only", "Both magnitude and direction", "Neither magnitude nor direction"],
            correct: 2,
            explanation: "Velocity is a vector quantity that includes both magnitude (how fast) and direction. Speed only has magnitude."
          },
          {
            question: "An object covers 100 metres in 20 seconds. Its average speed is:",
            options: ["2 m/s", "5 m/s", "20 m/s", "2000 m/s"],
            correct: 1,
            explanation: "Average speed = Total distance / Total time = 100 m / 20 s = 5 m/s."
          },
          {
            question: "Acceleration is defined as:",
            options: ["Change in distance per unit time", "Change in speed per unit distance", "Change in velocity per unit time", "Velocity multiplied by time"],
            correct: 2,
            explanation: "Acceleration is the rate of change of velocity with respect to time. It is given by a = (v - u) / t, where v is final velocity, u is initial velocity, and t is time."
          },
          {
            question: "The SI unit of acceleration is:",
            options: ["m/s", "m/s²", "km/h", "m²/s"],
            correct: 1,
            explanation: "The SI unit of acceleration is metres per second squared (m/s²), which represents the change in velocity (m/s) per unit time (s)."
          },
          {
            question: "When an object moves with uniform velocity, its acceleration is:",
            options: ["Positive", "Negative", "Zero", "Infinity"],
            correct: 2,
            explanation: "When an object moves with uniform (constant) velocity, there is no change in velocity, so the acceleration is zero."
          },
          {
            question: "Negative acceleration is also called:",
            options: ["Uniform acceleration", "Retardation or deceleration", "Zero acceleration", "Variable acceleration"],
            correct: 1,
            explanation: "Negative acceleration (when an object slows down) is called retardation or deceleration. The velocity decreases over time."
          },
          {
            question: "In a distance-time graph, a straight line with a positive slope indicates:",
            options: ["The object is stationary", "Uniform speed", "Non-uniform speed", "The object is decelerating"],
            correct: 1,
            explanation: "A straight line with a positive slope on a distance-time graph indicates that the object is moving with uniform (constant) speed."
          },
          {
            question: "In a distance-time graph, a horizontal line means the object is:",
            options: ["Moving with constant speed", "Accelerating", "Stationary (at rest)", "Decelerating"],
            correct: 2,
            explanation: "A horizontal line on a distance-time graph means the distance is not changing with time, indicating the object is stationary."
          },
          {
            question: "The slope of a distance-time graph gives:",
            options: ["Acceleration", "Distance", "Speed", "Time"],
            correct: 2,
            explanation: "The slope (gradient) of a distance-time graph gives the speed of the object. Slope = change in distance / change in time = speed."
          },
          {
            question: "The area under a velocity-time graph represents:",
            options: ["Speed", "Acceleration", "Displacement", "Force"],
            correct: 2,
            explanation: "The area under a velocity-time graph gives the displacement (or distance travelled) by the object during that time interval."
          },
          {
            question: "The slope of a velocity-time graph gives:",
            options: ["Speed", "Distance", "Acceleration", "Displacement"],
            correct: 2,
            explanation: "The slope of a velocity-time graph gives the acceleration of the object. Slope = change in velocity / change in time = acceleration."
          },
          {
            question: "An object starts from rest and accelerates uniformly at 2 m/s² for 5 seconds. Its final velocity is:",
            options: ["2 m/s", "5 m/s", "10 m/s", "7 m/s"],
            correct: 2,
            explanation: "Using v = u + at, where u = 0 (starts from rest), a = 2 m/s², t = 5 s: v = 0 + 2 x 5 = 10 m/s."
          },
          {
            question: "Which equation of motion relates velocity, acceleration, and displacement without time?",
            options: ["v = u + at", "s = ut + ½at²", "v² = u² + 2as", "s = (u + v)t / 2"],
            correct: 2,
            explanation: "The third equation of motion, v² = u² + 2as, relates final velocity (v), initial velocity (u), acceleration (a), and displacement (s) without involving time."
          },
          {
            question: "If a car travels 60 km in 2 hours, its average speed is:",
            options: ["120 km/h", "30 km/h", "62 km/h", "58 km/h"],
            correct: 1,
            explanation: "Average speed = Total distance / Total time = 60 km / 2 h = 30 km/h."
          },
          {
            question: "Uniform circular motion has:",
            options: ["Constant velocity", "Constant speed but changing velocity", "Constant acceleration in magnitude and direction", "Zero acceleration"],
            correct: 1,
            explanation: "In uniform circular motion, the speed remains constant but the direction of motion continuously changes, so the velocity (which includes direction) keeps changing."
          },
          {
            question: "A body is said to be in non-uniform motion when it covers:",
            options: ["Equal distances in equal intervals of time", "Unequal distances in equal intervals of time", "No distance at all", "Equal distances in unequal intervals only"],
            correct: 1,
            explanation: "Non-uniform motion occurs when an object covers unequal distances in equal intervals of time, meaning its speed is changing."
          },
          {
            question: "The odometer of a vehicle measures:",
            options: ["Speed", "Velocity", "Distance travelled", "Acceleration"],
            correct: 2,
            explanation: "An odometer is a device in vehicles that measures the total distance travelled by the vehicle."
          },
          {
            question: "The speedometer of a vehicle measures:",
            options: ["Average speed", "Instantaneous speed", "Acceleration", "Distance"],
            correct: 1,
            explanation: "A speedometer measures the instantaneous speed of a vehicle — the speed at a particular instant of time."
          },
          {
            question: "A body moving with an initial velocity of 10 m/s is brought to rest in 5 seconds. The retardation is:",
            options: ["2 m/s²", "50 m/s²", "0.5 m/s²", "10 m/s²"],
            correct: 0,
            explanation: "Using a = (v - u)/t = (0 - 10)/5 = -2 m/s². The magnitude of retardation is 2 m/s²."
          },
          {
            question: "Distance can never be:",
            options: ["Positive", "Zero", "Negative", "Greater than displacement"],
            correct: 2,
            explanation: "Distance is always positive or zero. It can never be negative because it is the total path length, which is a scalar quantity measured without regard to direction."
          }
        ]
      },
      {
        id: 5,
        name: "Exploring Mixtures and Their Separation",
        description: "Types of mixtures, solutions, suspensions, colloids, and separation techniques",
        questions: [
          {
            question: "A homogeneous mixture is also known as a:",
            options: ["Suspension", "Colloid", "Solution", "Compound"],
            correct: 2,
            explanation: "A solution is a homogeneous mixture where the solute is uniformly distributed throughout the solvent at the molecular level."
          },
          {
            question: "In a solution of sugar and water, sugar is the:",
            options: ["Solvent", "Solute", "Suspension", "Residue"],
            correct: 1,
            explanation: "In a sugar-water solution, sugar is the solute (the substance that is dissolved) and water is the solvent (the substance that does the dissolving)."
          },
          {
            question: "Which of the following is a heterogeneous mixture?",
            options: ["Salt water", "Air", "Sand and iron filings", "Vinegar"],
            correct: 2,
            explanation: "Sand and iron filings form a heterogeneous mixture because the components are not uniformly distributed and can be visually distinguished."
          },
          {
            question: "A colloid differs from a solution because colloid particles:",
            options: ["Are larger than solution particles and scatter light", "Settle down on standing", "Cannot be seen under any microscope", "Are smaller than solution particles"],
            correct: 0,
            explanation: "Colloid particles (1-1000 nm) are larger than solution particles and can scatter light (Tyndall effect), but they do not settle down on standing."
          },
          {
            question: "The Tyndall effect is the scattering of light by particles in a:",
            options: ["True solution", "Colloid", "Pure solvent", "Element"],
            correct: 1,
            explanation: "The Tyndall effect is the scattering of a beam of light by colloidal particles. This effect is not observed in true solutions because their particles are too small."
          },
          {
            question: "Milk is an example of a:",
            options: ["True solution", "Suspension", "Colloid (emulsion)", "Pure substance"],
            correct: 2,
            explanation: "Milk is a colloid, specifically an emulsion, where tiny fat droplets are dispersed in water. It shows the Tyndall effect."
          },
          {
            question: "In a suspension, particles:",
            options: ["Are invisible to the naked eye", "Do not settle on standing", "Are visible and settle on standing", "Pass through filter paper"],
            correct: 2,
            explanation: "Suspension particles are large enough to be visible to the naked eye and settle down on standing due to gravity. They can be separated by filtration."
          },
          {
            question: "Which separation technique is used to separate a mixture of sand and water?",
            options: ["Evaporation", "Filtration", "Distillation", "Sublimation"],
            correct: 1,
            explanation: "Filtration is used to separate an insoluble solid (sand) from a liquid (water). The sand remains on the filter paper as residue while water passes through as filtrate."
          },
          {
            question: "Evaporation is used to separate:",
            options: ["Two immiscible liquids", "A dissolved solid from a liquid", "Two miscible liquids", "A gas from a liquid"],
            correct: 1,
            explanation: "Evaporation is used to separate a dissolved solid (solute) from a liquid (solvent) by heating until the solvent evaporates, leaving the solid behind."
          },
          {
            question: "Distillation is used to separate liquids that have:",
            options: ["The same boiling points", "Different boiling points", "The same density", "Different colours"],
            correct: 1,
            explanation: "Distillation separates miscible liquids based on differences in their boiling points. The liquid with the lower boiling point evaporates first and is condensed separately."
          },
          {
            question: "Chromatography is used to separate:",
            options: ["Insoluble solids from liquids", "Components of a mixture based on differential movement through a medium", "Immiscible liquids", "Gases from liquids"],
            correct: 1,
            explanation: "Chromatography separates the components of a mixture based on their different rates of movement through a stationary medium, often used to separate dyes and pigments."
          },
          {
            question: "Sublimation is the process by which a substance changes from:",
            options: ["Solid to liquid", "Liquid to gas", "Solid directly to gas", "Gas to liquid"],
            correct: 2,
            explanation: "Sublimation is the direct conversion of a solid into a gas without passing through the liquid state. Examples include camphor, naphthalene, and dry ice."
          },
          {
            question: "A separating funnel is used to separate:",
            options: ["Miscible liquids", "Immiscible liquids", "Dissolved solids", "Gases"],
            correct: 1,
            explanation: "A separating funnel is used to separate immiscible liquids (liquids that do not mix), such as oil and water, based on the difference in their densities."
          },
          {
            question: "To obtain pure water from salt water, which method is most appropriate?",
            options: ["Filtration", "Evaporation", "Distillation", "Sedimentation"],
            correct: 2,
            explanation: "Distillation is the best method to obtain pure water from salt water. The water evaporates and is condensed and collected, leaving the salt behind."
          },
          {
            question: "Which technique is used to separate a mixture of common salt and ammonium chloride?",
            options: ["Filtration", "Distillation", "Sublimation", "Chromatography"],
            correct: 2,
            explanation: "Sublimation is used because ammonium chloride sublimes (converts directly from solid to gas on heating) while common salt does not, allowing separation."
          },
          {
            question: "A saturated solution is one that:",
            options: ["Can dissolve more solute at the same temperature", "Cannot dissolve any more solute at a given temperature", "Has no solute dissolved", "Is always hot"],
            correct: 1,
            explanation: "A saturated solution is one in which no more solute can be dissolved at a given temperature. Any additional solute will remain undissolved."
          },
          {
            question: "The concentration of a solution can be increased by:",
            options: ["Adding more solvent", "Adding more solute", "Decreasing temperature", "Filtering the solution"],
            correct: 1,
            explanation: "The concentration of a solution increases when more solute is added (or solvent is removed), as concentration is the ratio of solute to solvent."
          },
          {
            question: "Centrifugation is used to separate:",
            options: ["Miscible liquids", "Fine suspended particles from a liquid", "Gases from liquids", "Two solids of different sizes"],
            correct: 1,
            explanation: "Centrifugation uses rapid spinning to separate fine suspended particles from a liquid. The denser particles are pushed to the bottom."
          },
          {
            question: "Which method is used to separate cream from milk?",
            options: ["Filtration", "Centrifugation", "Sublimation", "Distillation"],
            correct: 1,
            explanation: "Centrifugation is used to separate cream from milk. When milk is spun rapidly, the lighter cream collects at the centre and the heavier skimmed milk moves outward."
          },
          {
            question: "An alloy is an example of a:",
            options: ["Compound", "Element", "Homogeneous mixture", "Heterogeneous mixture"],
            correct: 2,
            explanation: "An alloy is a homogeneous mixture of two or more metals (or a metal and a non-metal). For example, brass is an alloy of copper and zinc."
          },
          {
            question: "Air is an example of a:",
            options: ["Compound", "Homogeneous mixture", "Heterogeneous mixture", "Pure substance"],
            correct: 1,
            explanation: "Air is a homogeneous mixture of gases (mainly nitrogen, oxygen, carbon dioxide, and trace gases). Its composition is fairly uniform."
          },
          {
            question: "Crystallisation is a technique used to:",
            options: ["Separate immiscible liquids", "Purify solids from impure solutions", "Separate gases", "Separate colloids"],
            correct: 1,
            explanation: "Crystallisation is used to obtain pure solid crystals from an impure solution. The solution is heated to saturation and then slowly cooled, allowing pure crystals to form."
          },
          {
            question: "Which of the following is a pure substance?",
            options: ["Air", "Sea water", "Distilled water", "Milk"],
            correct: 2,
            explanation: "Distilled water is a pure substance because it contains only water molecules (H2O). Air, sea water, and milk are all mixtures."
          },
          {
            question: "Sedimentation and decantation are used to separate:",
            options: ["Dissolved salts from water", "Heavier insoluble particles from a liquid", "Two miscible liquids", "Gases from liquids"],
            correct: 1,
            explanation: "Sedimentation allows heavier insoluble particles to settle at the bottom of a liquid, and decantation involves pouring off the clear liquid above the sediment."
          },
          {
            question: "A solution that contains less solute than it can dissolve at a given temperature is called:",
            options: ["Saturated", "Unsaturated", "Supersaturated", "Concentrated"],
            correct: 1,
            explanation: "An unsaturated solution can still dissolve more solute at the given temperature. It has less solute than the maximum amount that can be dissolved."
          }
        ]
      },
      {
        id: 6,
        name: "How Forces Affect Motion",
        description: "Newton's laws of motion, balanced and unbalanced forces, inertia, and momentum",
        questions: [
          {
            question: "Newton's first law of motion is also called the law of:",
            options: ["Acceleration", "Inertia", "Action and reaction", "Gravitation"],
            correct: 1,
            explanation: "Newton's first law is also called the law of inertia. It states that an object at rest stays at rest and an object in motion stays in uniform motion unless acted upon by an unbalanced force."
          },
          {
            question: "Inertia is the tendency of an object to:",
            options: ["Accelerate", "Resist a change in its state of motion", "Move in a circle", "Fall towards the Earth"],
            correct: 1,
            explanation: "Inertia is the natural tendency of an object to resist any change in its state of rest or uniform motion. The greater the mass, the greater the inertia."
          },
          {
            question: "When balanced forces act on an object, the object:",
            options: ["Accelerates", "Decelerates", "Remains in its current state of motion", "Changes direction"],
            correct: 2,
            explanation: "Balanced forces have a net force of zero. They do not change the state of motion of an object — a stationary object stays stationary, and a moving object continues at the same speed and direction."
          },
          {
            question: "An unbalanced force acting on an object will:",
            options: ["Keep it stationary", "Change its state of motion", "Have no effect", "Only change its shape"],
            correct: 1,
            explanation: "An unbalanced (net) force causes a change in the state of motion of an object. It can cause the object to start moving, stop, speed up, slow down, or change direction."
          },
          {
            question: "Newton's second law of motion states that force equals:",
            options: ["Mass divided by acceleration", "Mass times velocity", "Mass times acceleration", "Weight times speed"],
            correct: 2,
            explanation: "Newton's second law states F = ma, where F is force, m is mass, and a is acceleration. The acceleration of an object is directly proportional to the net force and inversely proportional to mass."
          },
          {
            question: "The SI unit of force is:",
            options: ["Kilogram", "Newton", "Joule", "Watt"],
            correct: 1,
            explanation: "The SI unit of force is the Newton (N). One Newton is the force needed to accelerate a 1 kg mass by 1 m/s². Named after Sir Isaac Newton."
          },
          {
            question: "Momentum of an object is the product of its:",
            options: ["Mass and acceleration", "Mass and velocity", "Force and time", "Weight and speed"],
            correct: 1,
            explanation: "Momentum (p) = mass (m) x velocity (v). It is a vector quantity that depends on both the mass and velocity of the object."
          },
          {
            question: "The SI unit of momentum is:",
            options: ["kg m/s", "N/s", "kg m/s²", "N m"],
            correct: 0,
            explanation: "The SI unit of momentum is kilogram metre per second (kg m/s), since momentum = mass x velocity."
          },
          {
            question: "Newton's third law of motion states that:",
            options: ["Force equals mass times acceleration", "Every action has an equal and opposite reaction", "Objects at rest stay at rest", "Momentum is always conserved"],
            correct: 1,
            explanation: "Newton's third law states that for every action force, there is an equal and opposite reaction force. These forces act on different objects."
          },
          {
            question: "A passenger in a bus tends to fall backward when the bus starts suddenly. This is due to:",
            options: ["Momentum", "Inertia of rest", "Inertia of motion", "Friction"],
            correct: 1,
            explanation: "The passenger's body tends to remain at rest (inertia of rest) while the bus moves forward, causing the passenger to fall backward."
          },
          {
            question: "A force of 10 N acts on a body of mass 2 kg. The acceleration produced is:",
            options: ["20 m/s²", "5 m/s²", "12 m/s²", "8 m/s²"],
            correct: 1,
            explanation: "Using F = ma, we get a = F/m = 10 N / 2 kg = 5 m/s²."
          },
          {
            question: "The rate of change of momentum of an object is equal to:",
            options: ["The mass of the object", "The velocity of the object", "The applied unbalanced force", "The inertia of the object"],
            correct: 2,
            explanation: "According to Newton's second law, the rate of change of momentum of an object is equal to the net applied force: F = dp/dt = (mv - mu)/t."
          },
          {
            question: "Conservation of momentum states that in the absence of external forces:",
            options: ["Momentum increases", "Momentum decreases", "Total momentum remains constant", "Only kinetic energy is conserved"],
            correct: 2,
            explanation: "The law of conservation of momentum states that the total momentum of a system remains constant if no external unbalanced force acts on it."
          },
          {
            question: "A cricket player moves his hands backward while catching a ball to:",
            options: ["Increase the force on the ball", "Increase the time of impact and reduce the force", "Decrease the momentum of the ball", "Increase the velocity of the ball"],
            correct: 1,
            explanation: "Moving hands backward increases the time over which the momentum changes, which reduces the force on the hands (F = change in momentum / time)."
          },
          {
            question: "The momentum of a stationary object is:",
            options: ["Infinite", "Depends on mass", "Zero", "Cannot be determined"],
            correct: 2,
            explanation: "Since momentum = mass x velocity, and the velocity of a stationary object is zero, the momentum is zero regardless of the mass."
          },
          {
            question: "Friction is a force that:",
            options: ["Always helps motion", "Opposes the relative motion between surfaces", "Acts only on moving objects", "Is always harmful"],
            correct: 1,
            explanation: "Friction is a contact force that opposes the relative motion (or tendency of motion) between two surfaces in contact."
          },
          {
            question: "A rocket works on the principle of:",
            options: ["Newton's first law", "Newton's second law only", "Newton's third law", "Law of gravitation"],
            correct: 2,
            explanation: "A rocket works on Newton's third law. The exhaust gases are expelled downward (action), and the rocket is pushed upward (reaction)."
          },
          {
            question: "Which has more inertia: a 1 kg ball or a 10 kg ball?",
            options: ["1 kg ball", "10 kg ball", "Both have equal inertia", "Neither has inertia"],
            correct: 1,
            explanation: "Inertia is directly proportional to mass. The 10 kg ball has more mass and therefore more inertia, making it harder to change its state of motion."
          },
          {
            question: "Two objects of masses 5 kg and 10 kg are moving with the same velocity. Which has greater momentum?",
            options: ["5 kg object", "10 kg object", "Both have equal momentum", "Cannot be determined"],
            correct: 1,
            explanation: "Momentum = mass x velocity. Since both have the same velocity, the 10 kg object has double the momentum of the 5 kg object."
          },
          {
            question: "When a bullet is fired from a gun, the gun recoils. This is an example of:",
            options: ["Newton's first law", "Newton's second law", "Newton's third law", "Law of inertia"],
            correct: 2,
            explanation: "The recoil of a gun is a classic example of Newton's third law. The bullet moves forward (action) and the gun pushes backward (equal and opposite reaction)."
          },
          {
            question: "A passenger in a moving bus falls forward when the bus stops suddenly due to:",
            options: ["Inertia of rest", "Inertia of motion", "Gravity", "Balanced forces"],
            correct: 1,
            explanation: "The passenger's body tends to continue moving forward (inertia of motion) even though the bus has stopped, causing the passenger to fall forward."
          },
          {
            question: "The product of force and time is called:",
            options: ["Momentum", "Impulse", "Power", "Work"],
            correct: 1,
            explanation: "Impulse is the product of force and the time for which it acts (Impulse = F x t). It equals the change in momentum of the object."
          },
          {
            question: "If the mass of an object is doubled and velocity remains the same, its momentum will:",
            options: ["Remain the same", "Be halved", "Be doubled", "Be quadrupled"],
            correct: 2,
            explanation: "Since momentum = mass x velocity, doubling the mass while keeping velocity constant will double the momentum."
          },
          {
            question: "Which of the following is an example of Newton's first law?",
            options: ["A ball rolling on a rough surface slows down", "A coin on cardboard falls into a glass when the cardboard is flicked", "A rocket launching into space", "A heavier object being harder to push"],
            correct: 1,
            explanation: "When the cardboard is flicked away, the coin remains in place due to inertia (Newton's first law) and then falls into the glass due to gravity."
          },
          {
            question: "The net force on an object moving with constant velocity is:",
            options: ["Greater than zero", "Less than zero", "Equal to zero", "Equal to its weight"],
            correct: 2,
            explanation: "An object moving with constant velocity has zero acceleration, so by Newton's second law (F = ma), the net force acting on it must be zero."
          }
        ]
      },
      {
        id: 7,
        name: "Work, Energy, and Simple Machines",
        description: "Work, kinetic and potential energy, conservation of energy, power, and simple machines",
        questions: [
          {
            question: "Work is done when a force:",
            options: ["Is applied but no displacement occurs", "Causes a displacement in its direction", "Is perpendicular to displacement", "Is balanced by another force"],
            correct: 1,
            explanation: "Work is done when a force causes a displacement of the object in the direction of the applied force. W = F x d x cos(theta)."
          },
          {
            question: "The SI unit of work is:",
            options: ["Newton", "Watt", "Joule", "Pascal"],
            correct: 2,
            explanation: "The SI unit of work is the Joule (J). One joule is the work done when a force of 1 Newton moves an object through 1 metre in the direction of the force."
          },
          {
            question: "When a force is applied perpendicular to the direction of displacement, the work done is:",
            options: ["Maximum", "Minimum but not zero", "Zero", "Negative"],
            correct: 2,
            explanation: "When force is perpendicular to displacement, W = F x d x cos(90°) = 0. No work is done. For example, a coolie carrying a load on his head while walking horizontally."
          },
          {
            question: "Energy is defined as the:",
            options: ["Rate of doing work", "Capacity to do work", "Force times distance", "Mass times acceleration"],
            correct: 1,
            explanation: "Energy is the capacity or ability to do work. An object that has energy can exert a force on another object and cause it to move."
          },
          {
            question: "The SI unit of energy is:",
            options: ["Newton", "Joule", "Watt", "Kilogram"],
            correct: 1,
            explanation: "The SI unit of energy is the Joule (J), the same as the unit of work, since energy is the capacity to do work."
          },
          {
            question: "Kinetic energy is the energy possessed by an object due to its:",
            options: ["Position", "Shape", "Motion", "Temperature"],
            correct: 2,
            explanation: "Kinetic energy is the energy an object possesses due to its motion. It is given by KE = ½mv², where m is mass and v is velocity."
          },
          {
            question: "The kinetic energy of an object of mass 2 kg moving at 3 m/s is:",
            options: ["3 J", "6 J", "9 J", "18 J"],
            correct: 2,
            explanation: "KE = ½mv² = ½ x 2 x 3² = ½ x 2 x 9 = 9 J."
          },
          {
            question: "Potential energy is the energy stored in an object due to its:",
            options: ["Motion", "Position or configuration", "Speed", "Acceleration"],
            correct: 1,
            explanation: "Potential energy is stored energy due to an object's position (gravitational PE) or configuration (elastic PE). It has the potential to be converted into kinetic energy."
          },
          {
            question: "The gravitational potential energy of an object is given by:",
            options: ["½mv²", "mgh", "Fd", "mv"],
            correct: 1,
            explanation: "Gravitational potential energy = mgh, where m is mass, g is acceleration due to gravity, and h is the height above the reference level."
          },
          {
            question: "The law of conservation of energy states that energy:",
            options: ["Can be created but not destroyed", "Can be destroyed but not created", "Can neither be created nor destroyed, only transformed", "Is always lost as heat"],
            correct: 2,
            explanation: "The law of conservation of energy states that energy can neither be created nor destroyed. It can only be transformed from one form to another. The total energy of an isolated system remains constant."
          },
          {
            question: "A ball thrown upward has maximum potential energy at:",
            options: ["The point of throwing", "The highest point", "While coming down", "When it hits the ground"],
            correct: 1,
            explanation: "At the highest point, the ball momentarily stops (KE = 0) and all its energy is converted to gravitational potential energy (PE = mgh is maximum)."
          },
          {
            question: "Power is defined as the:",
            options: ["Total work done", "Rate of doing work", "Force times displacement", "Energy stored in a body"],
            correct: 1,
            explanation: "Power is the rate of doing work or the rate of energy transfer. P = W/t, where W is work and t is time."
          },
          {
            question: "The SI unit of power is:",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            correct: 2,
            explanation: "The SI unit of power is the Watt (W). One watt is equal to one joule of work done per second (1 W = 1 J/s)."
          },
          {
            question: "1 kilowatt is equal to:",
            options: ["100 watts", "1000 watts", "10000 watts", "10 watts"],
            correct: 1,
            explanation: "1 kilowatt (kW) = 1000 watts (W). It is a commonly used unit for measuring power of electrical appliances and engines."
          },
          {
            question: "The commercial unit of energy is:",
            options: ["Joule", "Watt", "Kilowatt-hour (kWh)", "Calorie"],
            correct: 2,
            explanation: "The kilowatt-hour (kWh) is the commercial unit of energy, commonly used in electricity bills. 1 kWh = 3.6 x 10⁶ J."
          },
          {
            question: "If a person does 500 J of work in 10 seconds, the power is:",
            options: ["5000 W", "50 W", "5 W", "0.02 W"],
            correct: 1,
            explanation: "Power = Work / Time = 500 J / 10 s = 50 W."
          },
          {
            question: "A lever is an example of a:",
            options: ["Complex machine", "Simple machine", "Compound machine", "Electrical machine"],
            correct: 1,
            explanation: "A lever is one of the six classical simple machines. It consists of a rigid bar that rotates around a fixed point (fulcrum) and is used to multiply force or change its direction."
          },
          {
            question: "The fixed point around which a lever rotates is called the:",
            options: ["Load", "Effort", "Fulcrum", "Pivot arm"],
            correct: 2,
            explanation: "The fulcrum is the fixed point around which a lever pivots. The position of the fulcrum relative to the load and effort determines the type of lever."
          },
          {
            question: "An inclined plane reduces the effort needed to lift an object by:",
            options: ["Eliminating friction", "Increasing the distance over which force is applied", "Reducing the weight of the object", "Increasing gravity"],
            correct: 1,
            explanation: "An inclined plane reduces effort by increasing the distance over which force is applied. While less force is needed, the total work done remains the same."
          },
          {
            question: "When the velocity of an object is doubled, its kinetic energy becomes:",
            options: ["Double", "Triple", "Four times", "Half"],
            correct: 2,
            explanation: "KE = ½mv². If velocity is doubled: KE = ½m(2v)² = ½m(4v²) = 4 x ½mv². The kinetic energy becomes four times the original."
          },
          {
            question: "A freely falling object has:",
            options: ["Only kinetic energy", "Only potential energy", "Both kinetic and potential energy that interchange", "No energy"],
            correct: 2,
            explanation: "A freely falling object converts potential energy to kinetic energy as it falls. At any point during the fall, it possesses both KE and PE, and their sum remains constant."
          },
          {
            question: "Which of the following is NOT a simple machine?",
            options: ["Pulley", "Wedge", "Motor", "Screw"],
            correct: 2,
            explanation: "A motor is not a simple machine. The six classical simple machines are the lever, wheel and axle, pulley, inclined plane, wedge, and screw."
          },
          {
            question: "A pulley is used to:",
            options: ["Store energy", "Change the direction of force", "Increase the weight of an object", "Measure force"],
            correct: 1,
            explanation: "A simple pulley changes the direction of the applied force, making it easier to lift objects. A system of pulleys can also multiply force."
          },
          {
            question: "The work done against gravity in lifting a 5 kg object to a height of 2 m is (g = 10 m/s²):",
            options: ["10 J", "25 J", "100 J", "50 J"],
            correct: 2,
            explanation: "Work done against gravity = mgh = 5 kg x 10 m/s² x 2 m = 100 J."
          },
          {
            question: "Mechanical advantage of a simple machine is the ratio of:",
            options: ["Effort to load", "Load to effort", "Work input to work output", "Distance to force"],
            correct: 1,
            explanation: "Mechanical advantage (MA) = Load / Effort. It tells us how many times a machine multiplies the effort force. A MA greater than 1 means the machine multiplies force."
          }
        ]
      },
      {
        id: 8,
        name: "Journey Inside the Atom",
        description: "Atomic models, subatomic particles, atomic number, mass number, and isotopes",
        questions: [
          {
            question: "Who proposed the first atomic model, often called the 'plum pudding model'?",
            options: ["Niels Bohr", "Ernest Rutherford", "J.J. Thomson", "John Dalton"],
            correct: 2,
            explanation: "J.J. Thomson proposed the plum pudding model in 1904. He suggested the atom is a sphere of positive charge with electrons embedded in it, like plums in a pudding."
          },
          {
            question: "J.J. Thomson discovered the:",
            options: ["Proton", "Neutron", "Electron", "Nucleus"],
            correct: 2,
            explanation: "J.J. Thomson discovered the electron in 1897 through cathode ray experiments. He determined that electrons are negatively charged subatomic particles."
          },
          {
            question: "Rutherford's gold foil experiment led to the discovery of the:",
            options: ["Electron", "Neutron", "Nucleus", "Proton orbit"],
            correct: 2,
            explanation: "Rutherford's alpha particle scattering experiment (gold foil experiment) in 1911 led to the discovery of the atomic nucleus — a small, dense, positively charged centre of the atom."
          },
          {
            question: "In Rutherford's experiment, most alpha particles:",
            options: ["Were deflected at large angles", "Bounced back", "Passed straight through the gold foil", "Were absorbed by the foil"],
            correct: 2,
            explanation: "Most alpha particles passed straight through the gold foil, showing that most of the atom is empty space. Only a very few were deflected or bounced back."
          },
          {
            question: "According to Rutherford's model, electrons revolve around the nucleus in:",
            options: ["Fixed energy levels", "Circular orbits", "Random paths", "Stationary positions"],
            correct: 1,
            explanation: "Rutherford proposed that electrons revolve around the small, dense, positively charged nucleus in circular orbits, similar to planets orbiting the sun."
          },
          {
            question: "A major limitation of Rutherford's model was that it could not explain:",
            options: ["The existence of the nucleus", "Why electrons do not spiral into the nucleus", "The positive charge of protons", "The mass of the atom"],
            correct: 1,
            explanation: "According to classical physics, a revolving charged particle should continuously emit radiation, lose energy, and spiral into the nucleus. Rutherford's model could not explain the stability of the atom."
          },
          {
            question: "Bohr's model of the atom proposed that electrons move in:",
            options: ["Random orbits", "Definite circular orbits called energy levels", "Elliptical orbits only", "Straight lines"],
            correct: 1,
            explanation: "Niels Bohr proposed that electrons revolve around the nucleus in specific circular orbits called energy levels or shells (K, L, M, N...), and each shell has a fixed energy."
          },
          {
            question: "The maximum number of electrons that can be accommodated in the nth shell is:",
            options: ["2n", "n²", "2n²", "2n + 1"],
            correct: 2,
            explanation: "The maximum number of electrons in the nth shell is 2n². So K-shell (n=1) holds 2, L-shell (n=2) holds 8, M-shell (n=3) holds 18, and so on."
          },
          {
            question: "The atomic number of an element is equal to the number of:",
            options: ["Neutrons", "Protons", "Electrons and neutrons", "Mass number"],
            correct: 1,
            explanation: "The atomic number (Z) equals the number of protons in the nucleus. It is also equal to the number of electrons in a neutral atom."
          },
          {
            question: "The mass number of an atom is the sum of:",
            options: ["Protons and electrons", "Protons and neutrons", "Neutrons and electrons", "All subatomic particles"],
            correct: 1,
            explanation: "Mass number (A) = number of protons (Z) + number of neutrons (N). Electrons are not included because their mass is negligible compared to protons and neutrons."
          },
          {
            question: "An element has atomic number 11 and mass number 23. The number of neutrons is:",
            options: ["11", "23", "12", "34"],
            correct: 2,
            explanation: "Number of neutrons = Mass number - Atomic number = 23 - 11 = 12."
          },
          {
            question: "Isotopes are atoms of the same element that have:",
            options: ["Different atomic numbers", "Same mass number but different atomic numbers", "Same atomic number but different mass numbers", "Different number of electrons"],
            correct: 2,
            explanation: "Isotopes have the same atomic number (same number of protons) but different mass numbers (different number of neutrons). For example, hydrogen has three isotopes: protium, deuterium, and tritium."
          },
          {
            question: "Which subatomic particle has no electric charge?",
            options: ["Proton", "Electron", "Neutron", "Alpha particle"],
            correct: 2,
            explanation: "The neutron is electrically neutral (has no charge). Protons are positively charged and electrons are negatively charged."
          },
          {
            question: "The neutron was discovered by:",
            options: ["J.J. Thomson", "Ernest Rutherford", "James Chadwick", "Niels Bohr"],
            correct: 2,
            explanation: "James Chadwick discovered the neutron in 1932. He found that the nucleus contains neutral particles with mass approximately equal to that of protons."
          },
          {
            question: "The charge on an electron is:",
            options: ["+1.6 x 10⁻¹⁹ C", "-1.6 x 10⁻¹⁹ C", "Zero", "+1 C"],
            correct: 1,
            explanation: "The charge on an electron is -1.6 x 10⁻¹⁹ coulombs. This is the fundamental unit of negative charge."
          },
          {
            question: "The valence shell is the:",
            options: ["Innermost shell of an atom", "Shell closest to the nucleus", "Outermost shell of an atom", "Shell with the most electrons"],
            correct: 2,
            explanation: "The valence shell is the outermost electron shell of an atom. The electrons in this shell, called valence electrons, determine the chemical properties and bonding behaviour of the element."
          },
          {
            question: "An atom with 2 electrons in K-shell, 8 in L-shell, and 1 in M-shell has a valency of:",
            options: ["2", "8", "1", "11"],
            correct: 2,
            explanation: "Valency is determined by the number of electrons in the outermost shell (valence shell). This atom has 1 electron in its outermost M-shell, so its valency is 1."
          },
          {
            question: "Isobars are atoms of different elements that have:",
            options: ["Same atomic number", "Same mass number", "Same number of neutrons", "Same number of electrons"],
            correct: 1,
            explanation: "Isobars are atoms of different elements that have the same mass number but different atomic numbers. For example, calcium-40 and argon-40 are isobars."
          },
          {
            question: "The nucleus of an atom contains:",
            options: ["Only protons", "Only neutrons", "Protons and neutrons", "Protons and electrons"],
            correct: 2,
            explanation: "The nucleus contains protons (positively charged) and neutrons (neutral). Together, they are called nucleons. Electrons orbit outside the nucleus."
          },
          {
            question: "Which of the following elements has isotopes used in nuclear power plants?",
            options: ["Carbon", "Uranium", "Oxygen", "Nitrogen"],
            correct: 1,
            explanation: "Uranium-235 is the isotope used as fuel in nuclear power plants. It undergoes nuclear fission, releasing a large amount of energy."
          },
          {
            question: "An atom is electrically neutral because:",
            options: ["It has no charged particles", "The number of protons equals the number of neutrons", "The number of protons equals the number of electrons", "Neutrons cancel out the charge"],
            correct: 2,
            explanation: "An atom is electrically neutral because the number of positively charged protons equals the number of negatively charged electrons, so the charges balance out."
          },
          {
            question: "The K shell can hold a maximum of:",
            options: ["2 electrons", "8 electrons", "18 electrons", "32 electrons"],
            correct: 0,
            explanation: "Using the formula 2n², where n=1 for K shell: 2(1)² = 2. The K shell (innermost shell) can hold a maximum of 2 electrons."
          },
          {
            question: "The L shell can hold a maximum of:",
            options: ["2 electrons", "8 electrons", "18 electrons", "32 electrons"],
            correct: 1,
            explanation: "Using the formula 2n², where n=2 for L shell: 2(2)² = 8. The L shell can hold a maximum of 8 electrons."
          },
          {
            question: "Dalton's atomic theory stated that atoms:",
            options: ["Can be divided into smaller particles", "Of the same element are identical in mass and properties", "Are made of protons and neutrons", "Can be created and destroyed in reactions"],
            correct: 1,
            explanation: "Dalton proposed that all atoms of a given element are identical in mass and properties, atoms of different elements differ in mass and properties, and atoms cannot be created or destroyed in chemical reactions."
          },
          {
            question: "An element has electronic configuration 2, 8, 7. Its valency is:",
            options: ["7", "1", "8", "2"],
            correct: 1,
            explanation: "This atom has 7 electrons in its outermost shell. Since it needs only 1 more electron to complete the octet (8 electrons), its valency is 8 - 7 = 1."
          }
        ]
      },
      {
        id: 9,
        name: "Atomic Foundations of Matter",
        description: "Atoms, molecules, chemical formulae, mole concept, and molecular mass",
        questions: [
          {
            question: "The smallest particle of an element that retains its chemical properties is called:",
            options: ["Molecule", "Atom", "Ion", "Compound"],
            correct: 1,
            explanation: "An atom is the smallest particle of an element that retains the chemical properties of that element. It may or may not exist independently."
          },
          {
            question: "A molecule is defined as:",
            options: ["A single atom of any element", "The smallest particle of a substance that can exist independently", "An ion with a charge", "A mixture of atoms"],
            correct: 1,
            explanation: "A molecule is the smallest particle of an element or compound that can exist independently and retains all the chemical properties of that substance."
          },
          {
            question: "The chemical formula of water is H2O. This means each molecule of water contains:",
            options: ["1 hydrogen atom and 2 oxygen atoms", "2 hydrogen atoms and 1 oxygen atom", "2 hydrogen atoms and 2 oxygen atoms", "1 hydrogen atom and 1 oxygen atom"],
            correct: 1,
            explanation: "H2O indicates that each water molecule contains 2 atoms of hydrogen (H) and 1 atom of oxygen (O)."
          },
          {
            question: "The atomicity of ozone (O3) is:",
            options: ["1", "2", "3", "6"],
            correct: 2,
            explanation: "Atomicity is the number of atoms in a molecule. Ozone (O3) has 3 oxygen atoms in each molecule, so its atomicity is 3."
          },
          {
            question: "The valency of an element is:",
            options: ["Its atomic number", "Its mass number", "The combining capacity of its atom", "The number of neutrons"],
            correct: 2,
            explanation: "Valency is the combining capacity of an atom. It represents the number of electrons an atom can lose, gain, or share to form chemical bonds."
          },
          {
            question: "The chemical formula of carbon dioxide is:",
            options: ["CO", "CO2", "C2O", "C2O2"],
            correct: 1,
            explanation: "Carbon dioxide has the formula CO2, meaning each molecule consists of 1 carbon atom and 2 oxygen atoms. Carbon has valency 4 and oxygen has valency 2."
          },
          {
            question: "One mole of any substance contains:",
            options: ["6.022 x 10²⁰ particles", "6.022 x 10²³ particles", "6.022 x 10²⁶ particles", "6.022 x 10¹⁹ particles"],
            correct: 1,
            explanation: "One mole contains Avogadro's number (6.022 x 10²³) of particles (atoms, molecules, or ions). This is known as Avogadro's constant."
          },
          {
            question: "The molar mass of an element is the mass of:",
            options: ["One atom of the element", "One mole of atoms of the element", "One molecule of the element", "One gram of the element"],
            correct: 1,
            explanation: "The molar mass is the mass of one mole (6.022 x 10²³ atoms) of an element, expressed in grams per mole (g/mol). It is numerically equal to the atomic mass in atomic mass units."
          },
          {
            question: "The atomic mass unit (amu or u) is defined as:",
            options: ["The mass of one hydrogen atom", "1/12th the mass of a carbon-12 atom", "The mass of one oxygen atom", "The mass of one electron"],
            correct: 1,
            explanation: "One atomic mass unit (1 u) is defined as exactly 1/12th the mass of one atom of carbon-12. It is approximately 1.66 x 10⁻²⁴ grams."
          },
          {
            question: "The molecular mass of H2O is (H = 1 u, O = 16 u):",
            options: ["17 u", "18 u", "19 u", "16 u"],
            correct: 1,
            explanation: "Molecular mass of H2O = (2 x 1) + (1 x 16) = 2 + 16 = 18 u."
          },
          {
            question: "The molecular mass of CO2 is (C = 12 u, O = 16 u):",
            options: ["28 u", "32 u", "44 u", "40 u"],
            correct: 2,
            explanation: "Molecular mass of CO2 = (1 x 12) + (2 x 16) = 12 + 32 = 44 u."
          },
          {
            question: "An ion is formed when an atom:",
            options: ["Shares electrons", "Gains or loses electrons", "Gains or loses protons", "Splits into smaller atoms"],
            correct: 1,
            explanation: "An ion is a charged particle formed when an atom gains electrons (becoming a negative ion or anion) or loses electrons (becoming a positive ion or cation)."
          },
          {
            question: "A positively charged ion is called a:",
            options: ["Anion", "Cation", "Molecule", "Radical"],
            correct: 1,
            explanation: "A cation is a positively charged ion formed when an atom loses one or more electrons. For example, Na+ is a sodium cation."
          },
          {
            question: "A negatively charged ion is called an:",
            options: ["Cation", "Anion", "Isotope", "Neutron"],
            correct: 1,
            explanation: "An anion is a negatively charged ion formed when an atom gains one or more electrons. For example, Cl⁻ is a chloride anion."
          },
          {
            question: "The chemical formula of sodium chloride is:",
            options: ["NaCl2", "Na2Cl", "NaCl", "Na2Cl2"],
            correct: 2,
            explanation: "Sodium (Na) has valency 1 and chlorine (Cl) has valency 1. They combine in a 1:1 ratio, giving the formula NaCl."
          },
          {
            question: "The formula mass of NaCl is (Na = 23 u, Cl = 35.5 u):",
            options: ["58.5 u", "57.5 u", "59.5 u", "56.5 u"],
            correct: 0,
            explanation: "Formula mass of NaCl = 23 + 35.5 = 58.5 u. For ionic compounds we use formula mass instead of molecular mass."
          },
          {
            question: "Which of the following represents a diatomic molecule?",
            options: ["He", "O2", "O3", "Ne"],
            correct: 1,
            explanation: "O2 (oxygen gas) is a diatomic molecule consisting of two oxygen atoms bonded together. Helium (He) and neon (Ne) are monatomic, and ozone (O3) is triatomic."
          },
          {
            question: "The number of moles in 36 g of water (H2O, molar mass = 18 g/mol) is:",
            options: ["1", "2", "3", "0.5"],
            correct: 1,
            explanation: "Number of moles = mass / molar mass = 36 g / 18 g/mol = 2 moles."
          },
          {
            question: "The chemical formula of calcium oxide is CaO. The valency of calcium is:",
            options: ["1", "2", "3", "4"],
            correct: 1,
            explanation: "In CaO, oxygen has valency 2. Since calcium and oxygen combine in a 1:1 ratio, calcium must also have valency 2."
          },
          {
            question: "Polyatomic ions are:",
            options: ["Single atoms with a charge", "Groups of atoms carrying a charge", "Neutral molecules", "Atoms without electrons"],
            correct: 1,
            explanation: "Polyatomic ions are groups of atoms that carry a net charge and act as a single unit in chemical reactions. Examples include SO4²⁻ (sulphate), NH4+ (ammonium), and CO3²⁻ (carbonate)."
          },
          {
            question: "The chemical formula of aluminium oxide is:",
            options: ["AlO", "Al2O3", "Al3O2", "AlO3"],
            correct: 1,
            explanation: "Aluminium has valency 3 and oxygen has valency 2. By cross-multiplying valencies: Al2O3. This gives 2 aluminium atoms and 3 oxygen atoms."
          },
          {
            question: "The number of atoms in 1 mole of helium gas is:",
            options: ["6.022 x 10²³", "12.044 x 10²³", "3.011 x 10²³", "1 x 10²³"],
            correct: 0,
            explanation: "Helium is a monatomic gas, so 1 mole of helium contains 6.022 x 10²³ atoms (Avogadro's number)."
          },
          {
            question: "The mass of 1 mole of oxygen gas (O2) is:",
            options: ["16 g", "32 g", "48 g", "8 g"],
            correct: 1,
            explanation: "Oxygen gas exists as O2 molecules. Molar mass of O2 = 2 x 16 = 32 g/mol. So 1 mole of O2 has a mass of 32 g."
          },
          {
            question: "The number of molecules in 2 moles of water is:",
            options: ["6.022 x 10²³", "12.044 x 10²³", "3.011 x 10²³", "18.066 x 10²³"],
            correct: 1,
            explanation: "Number of molecules = number of moles x Avogadro's number = 2 x 6.022 x 10²³ = 12.044 x 10²³ molecules."
          },
          {
            question: "The molecular formula of glucose is C6H12O6. The molecular mass is (C=12, H=1, O=16):",
            options: ["160 u", "170 u", "180 u", "190 u"],
            correct: 2,
            explanation: "Molecular mass of C6H12O6 = (6 x 12) + (12 x 1) + (6 x 16) = 72 + 12 + 96 = 180 u."
          }
        ]
      },
      {
        id: 10,
        name: "Sound Waves: Characteristics and Applications",
        description: "Production, propagation, characteristics of sound, echo, resonance, and applications",
        questions: [
          {
            question: "Sound is produced by:",
            options: ["Reflection of light", "Vibration of objects", "Flow of electric current", "Chemical reactions"],
            correct: 1,
            explanation: "Sound is produced by the vibration of objects. When an object vibrates, it creates disturbances (compressions and rarefactions) in the surrounding medium."
          },
          {
            question: "Sound requires a medium for propagation. It cannot travel through:",
            options: ["Air", "Water", "Steel", "Vacuum"],
            correct: 3,
            explanation: "Sound is a mechanical wave that requires a material medium (solid, liquid, or gas) to propagate. It cannot travel through a vacuum because there are no particles to transmit the vibrations."
          },
          {
            question: "Sound travels fastest through:",
            options: ["Gases", "Liquids", "Solids", "Vacuum"],
            correct: 2,
            explanation: "Sound travels fastest through solids because the particles are closely packed and can transmit vibrations quickly. Speed of sound: solids > liquids > gases."
          },
          {
            question: "The speed of sound in air at room temperature is approximately:",
            options: ["3 x 10⁸ m/s", "340 m/s", "1500 m/s", "5000 m/s"],
            correct: 1,
            explanation: "The speed of sound in air at room temperature (about 20°C) is approximately 340 m/s. It increases with temperature."
          },
          {
            question: "Sound waves are:",
            options: ["Transverse waves", "Longitudinal waves", "Electromagnetic waves", "Surface waves"],
            correct: 1,
            explanation: "Sound waves are longitudinal waves where the particles of the medium vibrate parallel to the direction of wave propagation, creating compressions and rarefactions."
          },
          {
            question: "The frequency of a sound wave is measured in:",
            options: ["Metres", "Seconds", "Hertz (Hz)", "Decibels"],
            correct: 2,
            explanation: "Frequency is measured in Hertz (Hz). One hertz means one vibration (cycle) per second."
          },
          {
            question: "The range of hearing for a normal human ear is:",
            options: ["1 Hz to 100 Hz", "20 Hz to 20,000 Hz", "20,000 Hz to 100,000 Hz", "0 Hz to 20 Hz"],
            correct: 1,
            explanation: "The audible range for humans is approximately 20 Hz to 20,000 Hz (20 kHz). Sounds below 20 Hz are infrasound and above 20,000 Hz are ultrasound."
          },
          {
            question: "Pitch of a sound is determined by its:",
            options: ["Amplitude", "Frequency", "Speed", "Wavelength only"],
            correct: 1,
            explanation: "Pitch is the perception of how high or low a sound is and is determined by its frequency. Higher frequency means higher pitch."
          },
          {
            question: "Loudness of a sound depends on its:",
            options: ["Frequency", "Wavelength", "Amplitude", "Speed"],
            correct: 2,
            explanation: "Loudness is determined by the amplitude of the sound wave. Greater amplitude means louder sound. Loudness is measured in decibels (dB)."
          },
          {
            question: "The unit of loudness is:",
            options: ["Hertz", "Decibel (dB)", "Metre", "Newton"],
            correct: 1,
            explanation: "Loudness is measured in decibels (dB). Normal conversation is about 60 dB, while sounds above 80 dB can be harmful with prolonged exposure."
          },
          {
            question: "An echo is produced due to:",
            options: ["Refraction of sound", "Reflection of sound", "Absorption of sound", "Diffraction of sound"],
            correct: 1,
            explanation: "An echo is the repetition of a sound caused by the reflection of sound waves from a hard surface back to the listener."
          },
          {
            question: "To hear a distinct echo, the minimum distance between the source and reflecting surface should be approximately:",
            options: ["8.5 metres", "17 metres", "34 metres", "1 metre"],
            correct: 1,
            explanation: "For a distinct echo, the minimum distance should be about 17 metres. This ensures the reflected sound reaches the ear at least 0.1 seconds after the original sound (the persistence of hearing)."
          },
          {
            question: "Ultrasound is sound with frequency:",
            options: ["Below 20 Hz", "Between 20 Hz and 20,000 Hz", "Above 20,000 Hz", "Exactly 20,000 Hz"],
            correct: 2,
            explanation: "Ultrasound refers to sound waves with frequencies above 20,000 Hz (20 kHz), which is above the upper limit of human hearing."
          },
          {
            question: "Which of the following is an application of ultrasound?",
            options: ["Playing music", "Medical imaging (ultrasonography)", "Telephone communication", "Radio broadcasting"],
            correct: 1,
            explanation: "Ultrasound is used in medical imaging (ultrasonography/sonography) to produce images of internal organs and to monitor fetal development during pregnancy."
          },
          {
            question: "SONAR stands for:",
            options: ["Sound Navigation And Ranging", "Sonic Navigation And Recording", "Sound Natural And Reflected", "Sonic Navigation And Ranging"],
            correct: 0,
            explanation: "SONAR stands for Sound Navigation And Ranging. It uses ultrasound waves to measure distances, detect objects underwater, and map the ocean floor."
          },
          {
            question: "The quality or timbre of sound depends on:",
            options: ["Only frequency", "Only amplitude", "The waveform (combination of frequencies)", "Only speed"],
            correct: 2,
            explanation: "Timbre (quality) depends on the waveform of the sound, which is determined by the combination of fundamental frequency and overtones. It helps us distinguish between different instruments playing the same note."
          },
          {
            question: "Infrasound is sound with frequency:",
            options: ["Above 20,000 Hz", "Between 20 Hz and 20,000 Hz", "Below 20 Hz", "Exactly 20 Hz"],
            correct: 2,
            explanation: "Infrasound refers to sound waves with frequencies below 20 Hz, which is below the lower limit of human hearing. Some animals like elephants and whales can hear infrasound."
          },
          {
            question: "The wavelength of a sound wave is:",
            options: ["The distance between two consecutive compressions", "The amplitude of the wave", "The speed of the wave", "The frequency of the wave"],
            correct: 0,
            explanation: "Wavelength is the distance between two consecutive compressions (or two consecutive rarefactions) in a longitudinal sound wave. It is represented by the Greek letter lambda."
          },
          {
            question: "The relationship between speed (v), frequency (f), and wavelength (lambda) is:",
            options: ["v = f / lambda", "v = f x lambda", "v = lambda / f", "f = v x lambda"],
            correct: 1,
            explanation: "The wave equation states that speed = frequency x wavelength (v = f x lambda). This applies to all types of waves."
          },
          {
            question: "Reverberation is caused by:",
            options: ["Single reflection of sound", "Multiple reflections of sound", "Refraction of sound", "Absorption of sound"],
            correct: 1,
            explanation: "Reverberation is the persistence of sound in a space due to multiple reflections from walls, ceiling, and floor. The reflected sounds reach the listener so quickly that the original sound seems to be prolonged."
          },
          {
            question: "To reduce reverberation in auditoriums, the walls and ceilings are covered with:",
            options: ["Hard tiles", "Metal sheets", "Sound-absorbing materials like curtains and carpets", "Glass panels"],
            correct: 2,
            explanation: "Sound-absorbing materials like curtains, carpets, and acoustic panels are used to reduce reverberation by absorbing sound energy rather than reflecting it."
          },
          {
            question: "A sound wave with higher frequency has:",
            options: ["Longer wavelength", "Shorter wavelength", "Same wavelength", "No wavelength"],
            correct: 1,
            explanation: "Since v = f x lambda, and the speed of sound in a medium is constant, a higher frequency results in a shorter wavelength, and vice versa."
          },
          {
            question: "Which animal uses ultrasound for navigation?",
            options: ["Dog", "Bat", "Cat", "Eagle"],
            correct: 1,
            explanation: "Bats use ultrasound for navigation through a process called echolocation. They emit ultrasonic waves and listen for the echoes to detect obstacles and prey in the dark."
          },
          {
            question: "The time period of a sound wave is:",
            options: ["The time taken for one complete oscillation", "The number of oscillations per second", "The distance between two compressions", "The speed of the wave"],
            correct: 0,
            explanation: "Time period (T) is the time taken for one complete oscillation or cycle of the wave. It is the reciprocal of frequency: T = 1/f."
          },
          {
            question: "If a sound wave has a frequency of 500 Hz and a wavelength of 0.68 m, its speed is:",
            options: ["170 m/s", "340 m/s", "500 m/s", "735 m/s"],
            correct: 1,
            explanation: "Using v = f x lambda = 500 Hz x 0.68 m = 340 m/s."
          }
        ]
      },
      {
        id: 11,
        name: "Reproduction: How Life Continues",
        description: "Modes of reproduction, asexual and sexual reproduction in plants and animals",
        questions: [
          {
            question: "Reproduction is the biological process by which organisms:",
            options: ["Grow in size", "Produce offspring of their own kind", "Obtain energy from food", "Respond to stimuli"],
            correct: 1,
            explanation: "Reproduction is the biological process by which organisms produce new individuals (offspring) of their own kind, ensuring the continuation of the species."
          },
          {
            question: "Asexual reproduction involves:",
            options: ["Two parents", "Fusion of gametes", "A single parent", "Cross-pollination"],
            correct: 2,
            explanation: "Asexual reproduction involves only one parent and does not require the fusion of gametes. The offspring are genetically identical to the parent (clones)."
          },
          {
            question: "Binary fission is a type of asexual reproduction seen in:",
            options: ["Humans", "Amoeba", "Flowering plants", "Birds"],
            correct: 1,
            explanation: "Binary fission occurs in unicellular organisms like Amoeba and bacteria. The parent cell divides into two equal daughter cells."
          },
          {
            question: "Budding is a mode of reproduction found in:",
            options: ["Amoeba", "Hydra and yeast", "Fern", "Mango tree"],
            correct: 1,
            explanation: "Budding occurs in organisms like Hydra and yeast. A small outgrowth (bud) develops on the parent's body, grows, and eventually detaches to form a new organism."
          },
          {
            question: "Spore formation is a method of asexual reproduction in:",
            options: ["Amoeba", "Hydra", "Fungi like bread mould (Rhizopus)", "Earthworm"],
            correct: 2,
            explanation: "Fungi like bread mould (Rhizopus) reproduce asexually through spore formation. Spores are tiny, resistant structures that germinate into new organisms under favourable conditions."
          },
          {
            question: "Vegetative propagation is a type of asexual reproduction in:",
            options: ["Animals only", "Plants", "Bacteria", "Fungi only"],
            correct: 1,
            explanation: "Vegetative propagation is a method of asexual reproduction in plants where new plants grow from vegetative parts like roots, stems, or leaves."
          },
          {
            question: "Which of the following plants reproduces by vegetative propagation through leaves?",
            options: ["Potato", "Bryophyllum", "Ginger", "Onion"],
            correct: 1,
            explanation: "Bryophyllum (also called Kalanchoe) reproduces through leaf margins. Small plantlets develop from the notches on the leaf edges and fall to grow into new plants."
          },
          {
            question: "Potato reproduces vegetatively through:",
            options: ["Seeds", "Eyes (buds) on tubers", "Leaf cuttings", "Root tips"],
            correct: 1,
            explanation: "Potatoes reproduce vegetatively through the eyes (buds) present on the tuber surface. Each eye can sprout and grow into a new potato plant."
          },
          {
            question: "Fragmentation is a mode of reproduction seen in:",
            options: ["Spirogyra", "Humans", "Mango tree", "Amoeba"],
            correct: 0,
            explanation: "Fragmentation occurs in organisms like Spirogyra (a filamentous alga). The organism breaks into fragments, and each fragment grows into a new individual."
          },
          {
            question: "Regeneration is the ability to:",
            options: ["Reproduce by seeds", "Grow back lost or damaged body parts", "Undergo binary fission", "Produce spores"],
            correct: 1,
            explanation: "Regeneration is the ability of certain organisms to regrow lost or damaged body parts. In some organisms like Planaria and Hydra, cut pieces can regenerate into complete organisms."
          },
          {
            question: "Sexual reproduction involves the fusion of:",
            options: ["Two somatic cells", "Male and female gametes", "Two identical cells", "Spores"],
            correct: 1,
            explanation: "Sexual reproduction involves the fusion of male gamete (sperm) and female gamete (egg/ovum) to form a zygote. This process is called fertilisation."
          },
          {
            question: "The male reproductive part of a flower is called the:",
            options: ["Pistil", "Stamen", "Sepal", "Petal"],
            correct: 1,
            explanation: "The stamen is the male reproductive part of a flower. It consists of the anther (which produces pollen grains containing male gametes) and the filament."
          },
          {
            question: "The female reproductive part of a flower is called the:",
            options: ["Stamen", "Sepal", "Pistil (carpel)", "Petal"],
            correct: 2,
            explanation: "The pistil (or carpel) is the female reproductive part. It consists of the stigma (receives pollen), style (tube connecting stigma to ovary), and ovary (contains ovules)."
          },
          {
            question: "Pollination is the transfer of pollen grains from:",
            options: ["Ovary to stigma", "Anther to stigma", "Stigma to anther", "Ovule to anther"],
            correct: 1,
            explanation: "Pollination is the transfer of pollen grains from the anther (male part) to the stigma (female part) of a flower. It can occur by wind, water, insects, or other agents."
          },
          {
            question: "Self-pollination occurs when pollen is transferred:",
            options: ["From one flower to another on a different plant", "From anther to stigma of the same flower or another flower on the same plant", "Only by wind", "Only by insects"],
            correct: 1,
            explanation: "Self-pollination occurs when pollen from the anther lands on the stigma of the same flower or another flower on the same plant."
          },
          {
            question: "Cross-pollination occurs when pollen is transferred:",
            options: ["Within the same flower", "From one flower to another on a different plant of the same species", "Between different species", "Without any agent"],
            correct: 1,
            explanation: "Cross-pollination is the transfer of pollen from the anther of a flower to the stigma of a flower on a different plant of the same species. It promotes genetic diversity."
          },
          {
            question: "After fertilisation, the ovule develops into a:",
            options: ["Fruit", "Seed", "Flower", "Pollen grain"],
            correct: 1,
            explanation: "After fertilisation, the ovule develops into a seed. The seed contains the embryo, which can grow into a new plant."
          },
          {
            question: "After fertilisation, the ovary develops into a:",
            options: ["Seed", "Fruit", "Leaf", "Root"],
            correct: 1,
            explanation: "After fertilisation, the ovary wall matures and develops into a fruit, which encloses and protects the seeds."
          },
          {
            question: "The zygote is formed by the fusion of:",
            options: ["Two sperm cells", "Two egg cells", "Sperm and egg", "Pollen and ovary"],
            correct: 2,
            explanation: "A zygote is formed by the fusion (fertilisation) of the male gamete (sperm) and the female gamete (egg/ovum). It is the first cell of the new organism."
          },
          {
            question: "Which of the following organisms can reproduce both asexually and sexually?",
            options: ["Humans", "Hydra", "Birds", "Fish"],
            correct: 1,
            explanation: "Hydra can reproduce both asexually (by budding) and sexually (by producing gametes). Many organisms switch between modes depending on conditions."
          },
          {
            question: "In humans, the male gamete is called:",
            options: ["Ovum", "Sperm", "Zygote", "Embryo"],
            correct: 1,
            explanation: "The male gamete in humans is the sperm cell, produced in the testes. It is small, motile, and has a tail for swimming to the egg."
          },
          {
            question: "In humans, the female gamete is called:",
            options: ["Sperm", "Ovum (egg)", "Zygote", "Embryo"],
            correct: 1,
            explanation: "The female gamete in humans is the ovum (egg cell), produced in the ovaries. It is larger than the sperm and non-motile."
          },
          {
            question: "An advantage of sexual reproduction over asexual reproduction is:",
            options: ["It is faster", "It requires only one parent", "It produces genetic variation in offspring", "Offspring are identical to parents"],
            correct: 2,
            explanation: "Sexual reproduction produces genetic variation because offspring receive genetic material from two parents. This variation helps species adapt to changing environments."
          },
          {
            question: "Grafting is an artificial method of:",
            options: ["Sexual reproduction", "Vegetative propagation", "Spore formation", "Binary fission"],
            correct: 1,
            explanation: "Grafting is an artificial method of vegetative propagation where a part (scion) of one plant is joined to the stem (stock) of another plant. It combines desirable traits of both plants."
          },
          {
            question: "Which of the following is an agent of pollination?",
            options: ["Gravity", "Wind", "Soil", "Roots"],
            correct: 1,
            explanation: "Wind is a common agent of pollination (anemophily). Other agents include insects (entomophily), birds (ornithophily), water (hydrophily), and bats."
          }
        ]
      },
      {
        id: 12,
        name: "Patterns in Life: Diversity and Classification",
        description: "Biodiversity, classification systems, five kingdoms, nomenclature, and taxonomy",
        questions: [
          {
            question: "Biodiversity refers to:",
            options: ["The study of biology", "The variety of living organisms in an area", "The classification of organisms", "The evolution of species"],
            correct: 1,
            explanation: "Biodiversity (biological diversity) refers to the variety and variability of all living organisms in a particular area or on Earth, including diversity within species, between species, and of ecosystems."
          },
          {
            question: "Taxonomy is the branch of biology that deals with:",
            options: ["Study of fossils", "Classification, naming, and identification of organisms", "Study of cells", "Study of heredity"],
            correct: 1,
            explanation: "Taxonomy is the science of classifying, naming, and identifying organisms based on their similarities, differences, and evolutionary relationships."
          },
          {
            question: "Who is known as the 'Father of Taxonomy'?",
            options: ["Charles Darwin", "Carolus Linnaeus", "Aristotle", "Robert Whittaker"],
            correct: 1,
            explanation: "Carolus Linnaeus (Carl Linnaeus) is known as the Father of Taxonomy. He developed the system of binomial nomenclature and a hierarchical classification system."
          },
          {
            question: "Binomial nomenclature means each organism is given:",
            options: ["One name", "Two names (genus and species)", "Three names", "A common name only"],
            correct: 1,
            explanation: "Binomial nomenclature gives each organism a two-part scientific name: the genus name (capitalised) and the species name (lowercase). For example, Homo sapiens for humans."
          },
          {
            question: "In the scientific name Homo sapiens, 'Homo' represents the:",
            options: ["Species", "Genus", "Family", "Order"],
            correct: 1,
            explanation: "In binomial nomenclature, the first word is the genus name. So 'Homo' is the genus name and 'sapiens' is the species name for humans."
          },
          {
            question: "The correct hierarchy of classification from largest to smallest is:",
            options: ["Kingdom, Phylum, Class, Order, Family, Genus, Species", "Kingdom, Class, Phylum, Order, Family, Genus, Species", "Species, Genus, Family, Order, Class, Phylum, Kingdom", "Kingdom, Phylum, Order, Class, Family, Genus, Species"],
            correct: 0,
            explanation: "The correct hierarchy from largest to smallest is: Kingdom > Phylum > Class > Order > Family > Genus > Species."
          },
          {
            question: "The five-kingdom classification was proposed by:",
            options: ["Carolus Linnaeus", "Robert Whittaker", "Charles Darwin", "Aristotle"],
            correct: 1,
            explanation: "Robert Whittaker proposed the five-kingdom classification in 1969, dividing organisms into Monera, Protista, Fungi, Plantae, and Animalia."
          },
          {
            question: "Kingdom Monera includes:",
            options: ["All plants", "All animals", "Bacteria and blue-green algae (cyanobacteria)", "Fungi"],
            correct: 2,
            explanation: "Kingdom Monera includes prokaryotic organisms such as bacteria and cyanobacteria (blue-green algae). They lack a membrane-bound nucleus."
          },
          {
            question: "Kingdom Protista includes:",
            options: ["Only bacteria", "Unicellular eukaryotic organisms", "All multicellular organisms", "Only fungi"],
            correct: 1,
            explanation: "Kingdom Protista includes unicellular eukaryotic organisms such as Amoeba, Paramecium, Euglena, and some algae. They have membrane-bound organelles."
          },
          {
            question: "Fungi differ from plants because fungi:",
            options: ["Have chlorophyll and photosynthesise", "Are heterotrophic and lack chlorophyll", "Are prokaryotic", "Have roots and stems"],
            correct: 1,
            explanation: "Fungi lack chlorophyll and cannot photosynthesise. They are heterotrophic and obtain nutrition by absorbing organic matter from their surroundings (saprophytic or parasitic)."
          },
          {
            question: "The cell wall of fungi is made of:",
            options: ["Cellulose", "Chitin", "Peptidoglycan", "Starch"],
            correct: 1,
            explanation: "The cell wall of fungi is composed of chitin, a tough polysaccharide. This differs from plant cell walls, which are made of cellulose."
          },
          {
            question: "Kingdom Plantae includes organisms that are:",
            options: ["Heterotrophic and unicellular", "Autotrophic, multicellular, and have cell walls", "Prokaryotic", "All parasitic"],
            correct: 1,
            explanation: "Kingdom Plantae includes multicellular, autotrophic organisms that have cell walls made of cellulose. They produce food through photosynthesis."
          },
          {
            question: "Kingdom Animalia includes organisms that are:",
            options: ["Autotrophic with cell walls", "Heterotrophic, multicellular, and lack cell walls", "Prokaryotic", "All unicellular"],
            correct: 1,
            explanation: "Kingdom Animalia includes multicellular, heterotrophic organisms that lack cell walls. They obtain nutrition by ingesting food."
          },
          {
            question: "Bryophytes are also called 'amphibians of the plant kingdom' because they:",
            options: ["Live only in water", "Live on land but need water for reproduction", "Can fly", "Are found only in deserts"],
            correct: 1,
            explanation: "Bryophytes (like mosses) are called amphibians of the plant kingdom because they live on land but require water for the transfer of male gametes during sexual reproduction."
          },
          {
            question: "Gymnosperms are plants that:",
            options: ["Have enclosed seeds in fruits", "Bear naked seeds not enclosed in fruits", "Do not produce seeds", "Are non-vascular"],
            correct: 1,
            explanation: "Gymnosperms (like pine and cycads) are seed-bearing plants whose seeds are not enclosed within a fruit. The word gymnosperm means 'naked seed'."
          },
          {
            question: "Angiosperms are plants that:",
            options: ["Bear naked seeds", "Have seeds enclosed within fruits", "Do not produce flowers", "Reproduce only by spores"],
            correct: 1,
            explanation: "Angiosperms are flowering plants that bear seeds enclosed within fruits. They are the most diverse and widespread group of plants."
          },
          {
            question: "Vertebrates are animals that have:",
            options: ["No backbone", "A backbone (vertebral column)", "No nervous system", "External skeleton only"],
            correct: 1,
            explanation: "Vertebrates are animals that possess a backbone or vertebral column (spinal column). They include fish, amphibians, reptiles, birds, and mammals."
          },
          {
            question: "Which phylum includes animals with a notochord?",
            options: ["Arthropoda", "Mollusca", "Chordata", "Annelida"],
            correct: 2,
            explanation: "Phylum Chordata includes animals that possess a notochord (a flexible rod-like structure) at some stage of their development. Vertebrates are a subgroup of chordates."
          },
          {
            question: "Arthropoda is the largest phylum of the animal kingdom. Examples include:",
            options: ["Earthworm and leech", "Insects, spiders, and crabs", "Starfish and sea urchin", "Snails and octopus"],
            correct: 1,
            explanation: "Arthropoda is the largest animal phylum and includes insects, spiders, crabs, scorpions, and centipedes. They have jointed legs and an exoskeleton."
          },
          {
            question: "Thallophyta includes:",
            options: ["Mosses and liverworts", "Algae (plant body not differentiated into root, stem, leaves)", "Ferns", "Flowering plants"],
            correct: 1,
            explanation: "Thallophyta includes algae and similar organisms whose body (thallus) is not differentiated into true roots, stems, or leaves. Examples include Spirogyra and Ulva."
          },
          {
            question: "Pteridophytes are characterised by:",
            options: ["Absence of vascular tissue", "Presence of vascular tissue but reproduction by spores", "Seed production", "Flower production"],
            correct: 1,
            explanation: "Pteridophytes (ferns and horsetails) have vascular tissue (xylem and phloem) for transport but reproduce by spores instead of seeds."
          },
          {
            question: "Cold-blooded (ectothermic) animals are those whose body temperature:",
            options: ["Remains constant", "Varies with the environment", "Is always higher than the environment", "Is not measurable"],
            correct: 1,
            explanation: "Cold-blooded (ectothermic) animals cannot regulate their body temperature internally. Their body temperature changes with the temperature of their environment. Examples include fish, amphibians, and reptiles."
          },
          {
            question: "Mammals are characterised by:",
            options: ["Laying eggs only", "Having feathers", "Having mammary glands that produce milk", "Having scales"],
            correct: 2,
            explanation: "Mammals are warm-blooded vertebrates characterised by the presence of mammary glands that produce milk to nourish their young. Most mammals also have hair or fur."
          },
          {
            question: "Aves (birds) are characterised by:",
            options: ["Cold-blooded metabolism", "Feathers and hollow bones", "Mammary glands", "Moist skin without scales"],
            correct: 1,
            explanation: "Birds (class Aves) are warm-blooded vertebrates characterised by feathers, beaks, hollow bones (which aid in flight), and the ability to lay hard-shelled eggs."
          },
          {
            question: "The species is the basic unit of classification. Two organisms belong to the same species if they:",
            options: ["Look similar", "Can interbreed and produce fertile offspring", "Live in the same habitat", "Have the same size"],
            correct: 1,
            explanation: "A species is defined as a group of organisms that can interbreed among themselves and produce fertile offspring. This is the most fundamental unit of classification."
          }
        ]
      },
      {
        id: 13,
        name: "Earth as a System: Energy, Matter, and Life",
        description: "Earth's systems, biogeochemical cycles, energy flow, climate, and environmental balance",
        questions: [
          {
            question: "The four main spheres of the Earth system are:",
            options: ["Atmosphere, hydrosphere, lithosphere, and biosphere", "Atmosphere, stratosphere, mesosphere, and thermosphere", "Crust, mantle, outer core, and inner core", "Troposphere, ozone layer, ionosphere, and exosphere"],
            correct: 0,
            explanation: "Earth's four main spheres are the atmosphere (air), hydrosphere (water), lithosphere (land/rocks), and biosphere (living organisms). These interact to support life on Earth."
          },
          {
            question: "The biosphere is the zone of Earth where:",
            options: ["Only water exists", "Only air exists", "Life exists", "Only rocks exist"],
            correct: 2,
            explanation: "The biosphere is the global ecological system integrating all living beings and their relationships. It includes parts of the atmosphere, hydrosphere, and lithosphere where life is found."
          },
          {
            question: "The atmosphere is mainly composed of:",
            options: ["Oxygen and carbon dioxide", "Nitrogen and oxygen", "Carbon dioxide and water vapour", "Hydrogen and helium"],
            correct: 1,
            explanation: "The atmosphere is mainly composed of nitrogen (about 78%) and oxygen (about 21%). The remaining 1% includes carbon dioxide, water vapour, argon, and trace gases."
          },
          {
            question: "The biogeochemical cycle that involves the movement of water through the environment is called:",
            options: ["Carbon cycle", "Water cycle (hydrological cycle)", "Nitrogen cycle", "Oxygen cycle"],
            correct: 1,
            explanation: "The water cycle (hydrological cycle) describes the continuous movement of water through evaporation, condensation, precipitation, and collection in oceans, lakes, and groundwater."
          },
          {
            question: "In the carbon cycle, plants absorb carbon dioxide during:",
            options: ["Respiration", "Photosynthesis", "Transpiration", "Decomposition"],
            correct: 1,
            explanation: "During photosynthesis, plants absorb carbon dioxide from the atmosphere and use it along with water and sunlight to produce glucose and oxygen."
          },
          {
            question: "Nitrogen fixation is the process of converting atmospheric nitrogen into:",
            options: ["Nitrogen gas", "Usable nitrogen compounds (like nitrates and ammonia)", "Carbon dioxide", "Oxygen"],
            correct: 1,
            explanation: "Nitrogen fixation converts atmospheric nitrogen (N2) into usable forms like ammonia (NH3) and nitrates (NO3⁻) that plants can absorb. This is done by certain bacteria and lightning."
          },
          {
            question: "Which bacteria are responsible for biological nitrogen fixation?",
            options: ["E. coli", "Rhizobium", "Lactobacillus", "Streptococcus"],
            correct: 1,
            explanation: "Rhizobium bacteria live in the root nodules of leguminous plants and fix atmospheric nitrogen into ammonia, which the plants can use."
          },
          {
            question: "The ozone layer protects Earth by absorbing:",
            options: ["Infrared radiation", "Visible light", "Harmful ultraviolet (UV) radiation", "Radio waves"],
            correct: 2,
            explanation: "The ozone layer in the stratosphere absorbs most of the sun's harmful ultraviolet (UV) radiation, protecting living organisms from DNA damage and skin cancer."
          },
          {
            question: "The greenhouse effect is caused by gases that:",
            options: ["Reflect sunlight back to space", "Trap heat (infrared radiation) in the atmosphere", "Produce oxygen", "Absorb ultraviolet radiation"],
            correct: 1,
            explanation: "Greenhouse gases (like CO2, methane, and water vapour) trap heat (infrared radiation) in the atmosphere, warming the Earth. While essential for life, excess greenhouse gases cause global warming."
          },
          {
            question: "Which of the following is a major greenhouse gas?",
            options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
            correct: 2,
            explanation: "Carbon dioxide (CO2) is a major greenhouse gas. Other greenhouse gases include methane (CH4), nitrous oxide (N2O), and water vapour."
          },
          {
            question: "The primary source of energy for Earth's ecosystems is:",
            options: ["Wind energy", "Geothermal energy", "Solar energy (sunlight)", "Nuclear energy"],
            correct: 2,
            explanation: "The sun is the primary source of energy for almost all ecosystems on Earth. Solar energy drives photosynthesis, which forms the basis of most food chains."
          },
          {
            question: "In a food chain, the organisms that make their own food are called:",
            options: ["Consumers", "Decomposers", "Producers (autotrophs)", "Scavengers"],
            correct: 2,
            explanation: "Producers (autotrophs) are organisms like green plants and algae that make their own food through photosynthesis. They form the first trophic level in a food chain."
          },
          {
            question: "Decomposers play a vital role in ecosystems by:",
            options: ["Producing food through photosynthesis", "Hunting prey", "Breaking down dead organisms and recycling nutrients", "Fixing nitrogen"],
            correct: 2,
            explanation: "Decomposers (like bacteria and fungi) break down dead organisms and organic waste, releasing nutrients back into the soil and atmosphere for reuse by producers."
          },
          {
            question: "The process by which water vapour in the atmosphere condenses to form clouds is called:",
            options: ["Evaporation", "Condensation", "Precipitation", "Transpiration"],
            correct: 1,
            explanation: "Condensation is the process by which water vapour cools and changes back into tiny water droplets, forming clouds and fog."
          },
          {
            question: "Rain, snow, and hail are forms of:",
            options: ["Evaporation", "Condensation", "Precipitation", "Transpiration"],
            correct: 2,
            explanation: "Precipitation is any form of water falling from clouds to the Earth's surface, including rain, snow, sleet, and hail."
          },
          {
            question: "Transpiration is the process by which:",
            options: ["Animals release carbon dioxide", "Plants release water vapour through their leaves", "Water evaporates from oceans", "Rain falls from clouds"],
            correct: 1,
            explanation: "Transpiration is the process by which plants release water vapour through tiny pores (stomata) in their leaves into the atmosphere."
          },
          {
            question: "Soil is formed from rocks by the process of:",
            options: ["Erosion only", "Weathering", "Volcanic activity only", "Condensation"],
            correct: 1,
            explanation: "Weathering is the process by which rocks are broken down into smaller particles (soil) by physical, chemical, and biological agents over long periods of time."
          },
          {
            question: "The oxygen cycle is closely linked to the:",
            options: ["Nitrogen cycle only", "Carbon cycle", "Rock cycle only", "Water cycle only"],
            correct: 1,
            explanation: "The oxygen cycle is closely linked to the carbon cycle. Photosynthesis produces oxygen while consuming CO2, and respiration consumes oxygen while producing CO2."
          },
          {
            question: "Fossil fuels are formed from:",
            options: ["Volcanic eruptions", "Ancient buried organisms over millions of years", "Atmospheric gases", "Ocean water"],
            correct: 1,
            explanation: "Fossil fuels (coal, petroleum, natural gas) are formed from the remains of ancient organisms buried under sediment and subjected to heat and pressure over millions of years."
          },
          {
            question: "Burning of fossil fuels increases atmospheric levels of:",
            options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Ozone"],
            correct: 2,
            explanation: "Burning fossil fuels releases carbon dioxide (CO2) into the atmosphere, increasing its concentration. This contributes to the enhanced greenhouse effect and global warming."
          },
          {
            question: "Deforestation contributes to climate change because:",
            options: ["Trees produce carbon dioxide", "Fewer trees means less CO2 is absorbed from the atmosphere", "Trees block sunlight", "Trees increase rainfall"],
            correct: 1,
            explanation: "Trees absorb CO2 during photosynthesis. When forests are cleared, less CO2 is removed from the atmosphere, and the carbon stored in trees is released, contributing to increased greenhouse gas levels."
          },
          {
            question: "The nitrogen cycle involves the conversion of nitrogen between:",
            options: ["Only two forms", "Only atmospheric nitrogen and nitrates", "Various forms including N2, NH3, NO3⁻, and organic nitrogen", "Only nitrogen gas and proteins"],
            correct: 2,
            explanation: "The nitrogen cycle involves multiple conversions: atmospheric N2 is fixed to NH3, converted to nitrites and nitrates (nitrification), absorbed by plants, passed through food chains, and returned to the atmosphere by denitrifying bacteria."
          },
          {
            question: "Denitrification is the process by which:",
            options: ["Nitrogen is fixed into ammonia", "Nitrates are converted back to atmospheric nitrogen gas", "Plants absorb nitrogen from soil", "Lightning fixes nitrogen"],
            correct: 1,
            explanation: "Denitrification is carried out by denitrifying bacteria that convert nitrates in the soil back into nitrogen gas (N2), releasing it into the atmosphere and completing the nitrogen cycle."
          },
          {
            question: "The balance of oxygen in the atmosphere is maintained mainly by:",
            options: ["Volcanic eruptions", "Photosynthesis by plants and algae", "Burning of fuels", "Respiration by animals"],
            correct: 1,
            explanation: "Photosynthesis by plants, algae, and cyanobacteria is the main process that replenishes oxygen in the atmosphere, maintaining the balance despite consumption by respiration and combustion."
          },
          {
            question: "An increase in the average temperature of Earth due to excess greenhouse gases is called:",
            options: ["Ozone depletion", "Acid rain", "Global warming", "Eutrophication"],
            correct: 2,
            explanation: "Global warming is the long-term increase in Earth's average temperature due to the enhanced greenhouse effect caused by excess greenhouse gases from human activities like burning fossil fuels and deforestation."
          }
        ]
      }    ]
  },
  social: {
    name: "Social Science",
    color: "#f59e0b",
    icon: "Globe",
    chapters: [
      {
        id: 1,
        name: "Understanding Social Science",
        description: "Introduction to social science, its branches, and their importance in understanding society",
        questions: [
          {
            question: "Which of the following is NOT a branch of social science?",
            options: ["Sociology", "Economics", "Botany", "Political Science"],
            correct: 2,
            explanation: "Botany is a branch of natural science that deals with plants. Sociology, Economics, and Political Science are all branches of social science."
          },
          {
            question: "Social science primarily deals with the study of:",
            options: ["Natural phenomena", "Human society and relationships", "Chemical reactions", "Mathematical equations"],
            correct: 1,
            explanation: "Social science is the study of human society, social relationships, and how people interact within communities and institutions."
          },
          {
            question: "Which branch of social science studies the production, distribution, and consumption of goods and services?",
            options: ["History", "Geography", "Economics", "Sociology"],
            correct: 2,
            explanation: "Economics is the branch of social science that studies how societies produce, distribute, and consume goods and services."
          },
          {
            question: "The study of past events, cultures, and civilisations is known as:",
            options: ["Sociology", "History", "Anthropology", "Psychology"],
            correct: 1,
            explanation: "History is the study of past events, civilisations, cultures, and how they shaped the present world."
          },
          {
            question: "Which social science discipline focuses on the relationship between humans and their environment?",
            options: ["Political Science", "Geography", "Psychology", "Economics"],
            correct: 1,
            explanation: "Geography studies the relationship between humans and their physical environment, including landscapes, climates, and natural resources."
          },
          {
            question: "Sociology is the study of:",
            options: ["Individual behaviour", "Society and social interactions", "Government systems", "Earth's physical features"],
            correct: 1,
            explanation: "Sociology is the study of society, social institutions, and social relationships, examining how people interact in groups."
          },
          {
            question: "Political Science mainly deals with:",
            options: ["Market forces", "Government, politics, and power", "Human evolution", "Weather patterns"],
            correct: 1,
            explanation: "Political Science studies government systems, political activities, political behaviour, and the distribution of power in society."
          },
          {
            question: "Why is the study of social science important?",
            options: ["It helps us build machines", "It helps us understand society and solve social problems", "It helps us study stars", "It helps us create new medicines"],
            correct: 1,
            explanation: "Social science helps us understand how societies function, why people behave the way they do, and how to address social issues effectively."
          },
          {
            question: "Which of the following is an example of a social science research method?",
            options: ["Laboratory experiment with chemicals", "Survey and questionnaire", "Dissection of organisms", "Telescope observation"],
            correct: 1,
            explanation: "Surveys and questionnaires are common research methods in social science used to collect data about people's opinions, behaviours, and experiences."
          },
          {
            question: "Anthropology is the study of:",
            options: ["Animals", "Human cultures and societies across time", "Ocean currents", "Plant species"],
            correct: 1,
            explanation: "Anthropology studies human cultures, societies, and their development across time, including both past and present communities."
          },
          {
            question: "Which of the following best describes an interdisciplinary approach in social science?",
            options: ["Studying only one subject", "Combining knowledge from multiple social science branches", "Ignoring other subjects", "Studying only natural sciences"],
            correct: 1,
            explanation: "An interdisciplinary approach involves combining insights and methods from multiple branches of social science to gain a comprehensive understanding of issues."
          },
          {
            question: "Psychology is the scientific study of:",
            options: ["Rocks and minerals", "Mind and behaviour", "Political systems", "Economic markets"],
            correct: 1,
            explanation: "Psychology is the scientific study of the human mind and behaviour, exploring how people think, feel, and act."
          },
          {
            question: "Which social science discipline would study the impact of poverty on education?",
            options: ["Only Economics", "Only Sociology", "Multiple disciplines like Economics, Sociology, and Education", "Only Geography"],
            correct: 2,
            explanation: "The impact of poverty on education is a complex issue that requires insights from multiple social science disciplines including Economics, Sociology, and Education studies."
          },
          {
            question: "Census data collection is an example of a method used in:",
            options: ["Physics", "Chemistry", "Social Science", "Biology"],
            correct: 2,
            explanation: "Census data collection is a social science method used to gather demographic information about populations for sociological, economic, and political analysis."
          },
          {
            question: "Which of the following is a qualitative research method in social science?",
            options: ["Statistical analysis", "In-depth interviews", "Mathematical modelling", "Numerical data collection"],
            correct: 1,
            explanation: "In-depth interviews are a qualitative research method that gathers detailed, non-numerical data about people's experiences, perspectives, and feelings."
          },
          {
            question: "The term 'society' in social science refers to:",
            options: ["A group of animals", "A group of people sharing common culture, institutions, and territory", "A science laboratory", "A political party"],
            correct: 1,
            explanation: "In social science, society refers to a group of people who share a common culture, institutions, territory, and social relationships."
          },
          {
            question: "Which of these is a social institution?",
            options: ["A rock formation", "Family", "A chemical compound", "A planet"],
            correct: 1,
            explanation: "Family is a social institution — an established pattern of social behaviour that serves important functions in society, such as socialisation and support."
          },
          {
            question: "Human Geography is concerned with:",
            options: ["Only physical features of Earth", "The relationship between people and places", "Only climate patterns", "Only ocean currents"],
            correct: 1,
            explanation: "Human Geography studies the relationship between people and their environments, including how humans shape and are shaped by the places they live."
          },
          {
            question: "Which of the following questions would a social scientist most likely ask?",
            options: ["What is the boiling point of water?", "Why do some societies have more inequality than others?", "How do cells divide?", "What causes volcanic eruptions?"],
            correct: 1,
            explanation: "Social scientists study human societies and relationships, so a question about inequality across societies is most relevant to their field."
          },
          {
            question: "The concept of 'culture' in social science includes:",
            options: ["Only language", "Beliefs, customs, art, language, and way of life of a group", "Only food habits", "Only religious practices"],
            correct: 1,
            explanation: "Culture in social science encompasses the entire way of life of a group, including beliefs, customs, art, language, food habits, and social practices."
          },
          {
            question: "Which branch of social science would primarily study elections and voting patterns?",
            options: ["Economics", "Political Science", "Anthropology", "Geography"],
            correct: 1,
            explanation: "Political Science is the branch that studies government, politics, elections, voting behaviour, and the exercise of power in society."
          },
          {
            question: "A social scientist studying how festivals bring communities together is practising:",
            options: ["Physics", "Sociology", "Chemistry", "Astronomy"],
            correct: 1,
            explanation: "Studying how festivals foster community bonds is a sociological inquiry, as Sociology examines social interactions and group dynamics."
          },
          {
            question: "Which of the following is NOT a characteristic of social science?",
            options: ["It studies human behaviour", "It uses systematic methods", "It produces universal laws like physics", "It examines social institutions"],
            correct: 2,
            explanation: "Unlike physical sciences, social science does not produce universal, unchanging laws because human behaviour is complex and influenced by many variable factors."
          },
          {
            question: "Demography is the study of:",
            options: ["Democracy", "Human population statistics", "Earth's crust", "Animal behaviour"],
            correct: 1,
            explanation: "Demography is a branch of social science that studies human population statistics including size, structure, distribution, and changes over time."
          },
          {
            question: "Which of the following best describes the scope of social science?",
            options: ["It is limited to studying ancient history only", "It covers all aspects of human life in society", "It only studies economic activities", "It only studies political systems"],
            correct: 1,
            explanation: "Social science has a broad scope covering all aspects of human life in society, including history, economics, politics, culture, geography, and social relationships."
          }
        ]
      },
      {
        id: 2,
        name: "Shaping of the Earth's Surface",
        description: "Endogenic and exogenic forces, weathering, erosion, types of landforms, and geological processes",
        questions: [
          {
            question: "Which of the following are endogenic forces?",
            options: ["Wind and water", "Earthquakes and volcanic eruptions", "Rain and frost", "Waves and glaciers"],
            correct: 1,
            explanation: "Endogenic forces originate from within the Earth and include earthquakes, volcanic eruptions, and tectonic movements."
          },
          {
            question: "Exogenic forces are those that operate on the Earth's surface from:",
            options: ["Inside the Earth", "Outside the Earth's surface", "The Earth's core", "The mantle"],
            correct: 1,
            explanation: "Exogenic forces operate on the Earth's surface from outside, including wind, water, ice, and waves that cause weathering and erosion."
          },
          {
            question: "The breaking down of rocks on the Earth's surface by natural agents is called:",
            options: ["Erosion", "Weathering", "Deposition", "Volcanism"],
            correct: 1,
            explanation: "Weathering is the process of breaking down rocks on the Earth's surface through physical, chemical, or biological means without transportation."
          },
          {
            question: "Which type of weathering involves the expansion and contraction of rocks due to temperature changes?",
            options: ["Chemical weathering", "Biological weathering", "Physical weathering", "Mechanical erosion"],
            correct: 2,
            explanation: "Physical (or mechanical) weathering involves the disintegration of rocks due to temperature changes causing expansion and contraction."
          },
          {
            question: "Chemical weathering is most effective in:",
            options: ["Cold and dry climates", "Hot and humid climates", "Polar regions", "Deserts"],
            correct: 1,
            explanation: "Chemical weathering is most effective in hot and humid climates where water and heat accelerate chemical reactions that decompose rocks."
          },
          {
            question: "Which of the following is an example of biological weathering?",
            options: ["Frost action", "Oxidation of minerals", "Tree roots growing into rock cracks", "Wind abrasion"],
            correct: 2,
            explanation: "Biological weathering occurs when living organisms like tree roots grow into cracks in rocks, widening them and breaking the rock apart."
          },
          {
            question: "The process by which weathered rock material is carried away by natural agents is called:",
            options: ["Weathering", "Deposition", "Erosion", "Metamorphism"],
            correct: 2,
            explanation: "Erosion is the process of wearing away and transporting weathered rock material from one place to another by agents like water, wind, and ice."
          },
          {
            question: "V-shaped valleys are formed by:",
            options: ["Glacial erosion", "River erosion", "Wind erosion", "Wave erosion"],
            correct: 1,
            explanation: "V-shaped valleys are formed by river erosion, especially in the upper course of a river where it cuts downward into the landscape."
          },
          {
            question: "A U-shaped valley is typically formed by:",
            options: ["River erosion", "Wind deposition", "Glacial erosion", "Wave action"],
            correct: 2,
            explanation: "U-shaped valleys are formed by glacial erosion, where a glacier carves a wide, flat-bottomed valley with steep sides."
          },
          {
            question: "An oxbow lake is formed when:",
            options: ["A glacier melts", "A river meander gets cut off from the main river", "Volcanic activity creates a crater lake", "Wind deposits sand around water"],
            correct: 1,
            explanation: "An oxbow lake forms when a river meander becomes so curved that the river cuts through the narrow neck of land, leaving behind a crescent-shaped lake."
          },
          {
            question: "Sand dunes are landforms created by:",
            options: ["River deposition", "Wind deposition", "Glacial deposition", "Wave erosion"],
            correct: 1,
            explanation: "Sand dunes are mounds of sand formed by wind deposition in desert and coastal areas where loose sand is blown and accumulated."
          },
          {
            question: "A delta is formed at the:",
            options: ["Source of a river", "Mouth of a river where it meets the sea", "Middle course of a river", "Top of a mountain"],
            correct: 1,
            explanation: "A delta is formed at the mouth of a river where it meets the sea or a lake, depositing sediment it has carried, creating a fan-shaped landform."
          },
          {
            question: "Mushroom rocks in deserts are formed by:",
            options: ["River erosion", "Glacial erosion", "Wind erosion", "Chemical weathering only"],
            correct: 2,
            explanation: "Mushroom rocks (also called pedestal rocks) are formed by wind erosion in deserts, where sand-laden wind erodes the base of rocks more than the top."
          },
          {
            question: "Which of the following landforms is created by sea waves?",
            options: ["Sand dunes", "Sea cliffs and sea caves", "Moraines", "Meanders"],
            correct: 1,
            explanation: "Sea cliffs and sea caves are formed by the erosive action of sea waves constantly hitting the coastline, wearing away the rock."
          },
          {
            question: "A moraine is a landform associated with:",
            options: ["River deposition", "Wind erosion", "Glacial deposition", "Volcanic activity"],
            correct: 2,
            explanation: "A moraine is an accumulation of rocks, soil, and debris deposited by a glacier as it moves or when it melts."
          },
          {
            question: "The flat, elevated landform with steep sides is called a:",
            options: ["Valley", "Plateau", "Plain", "Delta"],
            correct: 1,
            explanation: "A plateau is a flat, elevated area of land with at least one steep side, often formed by tectonic uplift or volcanic activity."
          },
          {
            question: "Which of the following is an erosional landform created by rivers?",
            options: ["Delta", "Floodplain", "Waterfall", "Levee"],
            correct: 2,
            explanation: "A waterfall is an erosional landform created when a river flows over a layer of hard rock followed by softer rock, which erodes faster creating a steep drop."
          },
          {
            question: "Stalactites and stalagmites are found in:",
            options: ["Deserts", "Limestone caves", "River valleys", "Glacial regions"],
            correct: 1,
            explanation: "Stalactites (hanging from the ceiling) and stalagmites (rising from the floor) are found in limestone caves, formed by the deposition of dissolved calcium carbonate."
          },
          {
            question: "The Richter scale is used to measure:",
            options: ["Volcanic eruptions", "Wind speed", "Earthquake magnitude", "Rainfall intensity"],
            correct: 2,
            explanation: "The Richter scale is used to measure the magnitude of earthquakes, indicating the amount of energy released."
          },
          {
            question: "Which layer of the Earth is made up of molten rock called magma?",
            options: ["Crust", "Mantle", "Inner core", "Outer core"],
            correct: 1,
            explanation: "The mantle contains semi-molten rock material called magma. When this magma reaches the surface through volcanic eruptions, it is called lava."
          },
          {
            question: "A floodplain is formed by:",
            options: ["Wind deposition", "Glacial erosion", "River deposition during floods", "Volcanic eruption"],
            correct: 2,
            explanation: "A floodplain is a flat area alongside a river formed by the deposition of sediment when the river overflows its banks during floods."
          },
          {
            question: "The process by which eroded material is laid down in a new location is called:",
            options: ["Weathering", "Erosion", "Deposition", "Abrasion"],
            correct: 2,
            explanation: "Deposition is the process by which eroded material (sediment) is laid down or dropped in a new location by wind, water, ice, or gravity."
          },
          {
            question: "Which of the following is formed by wave deposition?",
            options: ["Sea cliff", "Sea cave", "Beach", "Sea stack"],
            correct: 2,
            explanation: "A beach is formed by wave deposition, where sand, pebbles, and shells are deposited along the shoreline by wave action."
          },
          {
            question: "Loess is a type of deposit made by:",
            options: ["Rivers", "Glaciers", "Wind", "Sea waves"],
            correct: 2,
            explanation: "Loess is a fine-grained, wind-deposited sediment formed when wind carries fine silt particles and deposits them over large areas."
          },
          {
            question: "The movement of tectonic plates can cause all of the following EXCEPT:",
            options: ["Earthquakes", "Mountain formation", "Rainfall", "Volcanic eruptions"],
            correct: 2,
            explanation: "Rainfall is caused by atmospheric processes, not by the movement of tectonic plates. Earthquakes, mountain formation, and volcanic eruptions are all caused by plate tectonics."
          }
        ]
      },      {
        id: 3,
        name: "Atmosphere and Climate",
        description: "Composition of atmosphere, weather vs climate, factors affecting climate, and climate zones",
        questions: [
          {
            question: "Which gas makes up the largest percentage of the Earth's atmosphere?",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
            correct: 2,
            explanation: "Nitrogen makes up approximately 78% of the Earth's atmosphere, making it the most abundant gas."
          },
          {
            question: "What is the approximate percentage of oxygen in the atmosphere?",
            options: ["78%", "21%", "0.04%", "1%"],
            correct: 1,
            explanation: "Oxygen constitutes approximately 21% of the Earth's atmosphere, making it the second most abundant gas after nitrogen."
          },
          {
            question: "Weather refers to:",
            options: ["The average atmospheric conditions over a long period", "The day-to-day condition of the atmosphere at a specific place and time", "Only the temperature of a place", "The annual rainfall pattern"],
            correct: 1,
            explanation: "Weather refers to the short-term, day-to-day condition of the atmosphere at a specific place and time, including temperature, humidity, precipitation, and wind."
          },
          {
            question: "Climate is defined as:",
            options: ["Yesterday's weather", "The average weather conditions of a place over 25-30 years or more", "Today's temperature", "A single weather event"],
            correct: 1,
            explanation: "Climate is the average of weather conditions measured over a long period, typically 25-30 years or more, for a particular region."
          },
          {
            question: "Which layer of the atmosphere contains the ozone layer?",
            options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            correct: 1,
            explanation: "The ozone layer is found in the stratosphere, approximately 15-35 km above Earth's surface. It absorbs harmful ultraviolet radiation from the Sun."
          },
          {
            question: "The troposphere is important because:",
            options: ["It contains the ozone layer", "All weather phenomena occur in this layer", "It is the hottest layer", "It is the outermost layer"],
            correct: 1,
            explanation: "The troposphere is the lowest layer of the atmosphere where all weather phenomena like rain, clouds, storms, and wind occur."
          },
          {
            question: "Which of the following is NOT a factor affecting the climate of a place?",
            options: ["Latitude", "Altitude", "Population density", "Distance from the sea"],
            correct: 2,
            explanation: "Population density is not a direct factor affecting climate. Latitude, altitude, and distance from the sea are major factors that influence the climate of a place."
          },
          {
            question: "As altitude increases, temperature generally:",
            options: ["Increases", "Decreases", "Remains the same", "Fluctuates randomly"],
            correct: 1,
            explanation: "Temperature generally decreases with increasing altitude at a rate of about 6.5 degrees Celsius per 1000 metres in the troposphere."
          },
          {
            question: "Places near the equator have:",
            options: ["Very cold climate", "Hot and humid climate", "Dry desert climate", "Polar climate"],
            correct: 1,
            explanation: "Places near the equator receive direct sunlight throughout the year, resulting in a hot and humid climate with high temperatures and rainfall."
          },
          {
            question: "The instrument used to measure atmospheric pressure is called a:",
            options: ["Thermometer", "Rain gauge", "Barometer", "Hygrometer"],
            correct: 2,
            explanation: "A barometer is the instrument used to measure atmospheric pressure. Changes in atmospheric pressure help in weather forecasting."
          },
          {
            question: "Which type of rainfall occurs when air is forced to rise over a mountain?",
            options: ["Convectional rainfall", "Orographic rainfall", "Cyclonic rainfall", "Frontal rainfall"],
            correct: 1,
            explanation: "Orographic rainfall (also called relief rainfall) occurs when moist air is forced to rise over a mountain barrier, cools, condenses, and precipitates."
          },
          {
            question: "The greenhouse effect is caused by:",
            options: ["Oxygen in the atmosphere", "Gases like CO2 and methane trapping heat in the atmosphere", "The ozone layer", "Wind patterns"],
            correct: 1,
            explanation: "The greenhouse effect is caused by gases like carbon dioxide and methane trapping heat in the atmosphere, keeping the Earth warm enough to support life."
          },
          {
            question: "Land breeze blows from:",
            options: ["Sea to land during the day", "Land to sea during the night", "North to south always", "East to west always"],
            correct: 1,
            explanation: "Land breeze blows from land to sea during the night because land cools faster than water, creating higher pressure over land."
          },
          {
            question: "Sea breeze blows from:",
            options: ["Land to sea during the day", "Sea to land during the day", "Land to sea during the night", "North to south"],
            correct: 1,
            explanation: "Sea breeze blows from sea to land during the day because land heats up faster than water, creating lower pressure over land."
          },
          {
            question: "Which climate zone lies between the Tropic of Cancer and the Tropic of Capricorn?",
            options: ["Temperate zone", "Frigid zone", "Torrid zone", "Polar zone"],
            correct: 2,
            explanation: "The Torrid zone (tropical zone) lies between the Tropic of Cancer (23.5 degrees N) and the Tropic of Capricorn (23.5 degrees S), receiving the most direct sunlight."
          },
          {
            question: "A hygrometer is used to measure:",
            options: ["Temperature", "Wind speed", "Humidity", "Atmospheric pressure"],
            correct: 2,
            explanation: "A hygrometer is an instrument used to measure the humidity or moisture content in the air."
          },
          {
            question: "Wind speed is measured using a:",
            options: ["Barometer", "Thermometer", "Wind vane", "Anemometer"],
            correct: 3,
            explanation: "An anemometer is used to measure wind speed. A wind vane measures wind direction, not speed."
          },
          {
            question: "Precipitation includes:",
            options: ["Only rainfall", "Only snowfall", "Rain, snow, sleet, and hail", "Only hail"],
            correct: 2,
            explanation: "Precipitation includes all forms of water that fall from the atmosphere to the Earth's surface, including rain, snow, sleet, and hail."
          },
          {
            question: "Which of the following increases the moderating effect on climate?",
            options: ["Being far from the sea", "Being close to the sea", "High altitude only", "Low latitude only"],
            correct: 1,
            explanation: "Being close to the sea has a moderating effect on climate because water heats and cools more slowly than land, keeping coastal temperatures more stable."
          },
          {
            question: "Global warming is primarily caused by:",
            options: ["Decrease in oxygen levels", "Increase in greenhouse gas emissions", "Decrease in nitrogen levels", "Increase in ozone"],
            correct: 1,
            explanation: "Global warming is primarily caused by the increase in greenhouse gas emissions (mainly CO2 from burning fossil fuels), which trap more heat in the atmosphere."
          },
          {
            question: "The temperate zone lies between:",
            options: ["The Equator and Tropic of Cancer", "The Tropic of Cancer/Capricorn and the Arctic/Antarctic Circle", "The Arctic Circle and the North Pole", "0 degrees and 23.5 degrees latitude"],
            correct: 1,
            explanation: "The temperate zones lie between the Tropics (23.5 degrees) and the Arctic/Antarctic Circles (66.5 degrees) in both hemispheres, experiencing moderate climates."
          },
          {
            question: "Condensation is the process by which:",
            options: ["Water turns into ice", "Water vapour turns into liquid water", "Ice turns into water vapour", "Liquid water turns into vapour"],
            correct: 1,
            explanation: "Condensation is the process by which water vapour in the air cools and changes into tiny droplets of liquid water, forming clouds and dew."
          },
          {
            question: "Clouds are formed when:",
            options: ["Temperature increases rapidly", "Water vapour condenses around tiny particles in the air", "Wind speed increases", "Atmospheric pressure increases"],
            correct: 1,
            explanation: "Clouds form when warm, moist air rises, cools, and the water vapour condenses around tiny dust or pollen particles in the atmosphere."
          },
          {
            question: "The frigid zone is characterised by:",
            options: ["Very hot temperatures year-round", "Extremely cold temperatures with ice and snow", "Moderate rainfall", "Tropical forests"],
            correct: 1,
            explanation: "The frigid zones (polar regions) experience extremely cold temperatures, ice, and snow because they receive very slanted rays of the Sun throughout the year."
          },
          {
            question: "Insolation refers to:",
            options: ["Insulation of buildings", "Incoming solar radiation received by the Earth", "Internal heat of the Earth", "Infrared radiation from the ground"],
            correct: 1,
            explanation: "Insolation refers to the incoming solar radiation received by the Earth's surface. It is the primary source of energy that drives weather and climate."
          }
        ]
      },      {
        id: 4,
        name: "Early Humans and Beginning of Civilisation",
        description: "Prehistoric humans, Stone Age, early settlements, and the rise of early civilisations",
        questions: [
          {
            question: "The earliest humans are believed to have originated in:",
            options: ["Europe", "Asia", "Africa", "Australia"],
            correct: 2,
            explanation: "Scientific evidence, including fossil records, suggests that the earliest humans originated in Africa millions of years ago."
          },
          {
            question: "The Stone Age is divided into which three periods?",
            options: ["Bronze, Iron, and Steel Ages", "Palaeolithic, Mesolithic, and Neolithic", "Ancient, Medieval, and Modern", "Primary, Secondary, and Tertiary"],
            correct: 1,
            explanation: "The Stone Age is divided into the Palaeolithic (Old Stone Age), Mesolithic (Middle Stone Age), and Neolithic (New Stone Age) periods."
          },
          {
            question: "During the Palaeolithic Age, humans primarily lived as:",
            options: ["Farmers", "Traders", "Hunter-gatherers", "Industrialists"],
            correct: 2,
            explanation: "During the Palaeolithic Age, humans lived as hunter-gatherers, relying on hunting animals and gathering wild plants for food."
          },
          {
            question: "The discovery of fire was significant because it:",
            options: ["Only provided light", "Helped in cooking food, providing warmth, and protection from wild animals", "Was used only for religious purposes", "Had no real importance"],
            correct: 1,
            explanation: "Fire was a crucial discovery that helped early humans cook food, stay warm, protect themselves from predators, and later clear land for farming."
          },
          {
            question: "The Neolithic Revolution refers to the shift from:",
            options: ["Stone tools to metal tools", "Hunting-gathering to farming and settled life", "Monarchy to democracy", "Oral to written communication"],
            correct: 1,
            explanation: "The Neolithic Revolution was the transition from nomadic hunting-gathering to settled agricultural life, which fundamentally changed human civilisation."
          },
          {
            question: "Which of the following was the first animal to be domesticated by humans?",
            options: ["Horse", "Cow", "Dog", "Sheep"],
            correct: 2,
            explanation: "The dog is believed to be the first animal domesticated by humans, likely from wolves, helping with hunting and protection."
          },
          {
            question: "Early humans made their tools primarily from:",
            options: ["Metal", "Plastic", "Stone", "Wood only"],
            correct: 2,
            explanation: "Early humans primarily made tools from stone, which is why this period is called the Stone Age. They used stones for cutting, scraping, and hunting."
          },
          {
            question: "Cave paintings by early humans have been found in:",
            options: ["Only India", "Only France", "Various places including Bhimbetka (India), Altamira (Spain), and Lascaux (France)", "Only Egypt"],
            correct: 2,
            explanation: "Cave paintings have been discovered in many places worldwide, including Bhimbetka in India, Altamira in Spain, and Lascaux in France."
          },
          {
            question: "The practice of agriculture began approximately:",
            options: ["1,000 years ago", "5,000 years ago", "10,000 years ago", "1 million years ago"],
            correct: 2,
            explanation: "Agriculture began approximately 10,000 years ago during the Neolithic period, marking one of the most important developments in human history."
          },
          {
            question: "Which of the following crops were among the first to be cultivated?",
            options: ["Potatoes and tomatoes", "Wheat and barley", "Sugarcane and coffee", "Rubber and cotton"],
            correct: 1,
            explanation: "Wheat and barley were among the first crops cultivated by early humans in the Fertile Crescent region of Mesopotamia."
          },
          {
            question: "Early civilisations typically developed near:",
            options: ["Mountain tops", "River valleys", "Deserts", "Dense forests"],
            correct: 1,
            explanation: "Early civilisations developed near river valleys because rivers provided water for drinking, irrigation, transportation, and fertile soil for farming."
          },
          {
            question: "The invention of the wheel was important because it:",
            options: ["Was used only for decoration", "Revolutionised transportation and pottery making", "Had no practical use initially", "Was only used in warfare"],
            correct: 1,
            explanation: "The wheel revolutionised human life by enabling easier transportation of goods and people, and was also used in pottery making."
          },
          {
            question: "Microliths are characteristic tools of which period?",
            options: ["Palaeolithic Age", "Mesolithic Age", "Neolithic Age", "Iron Age"],
            correct: 1,
            explanation: "Microliths (small, fine stone tools) are characteristic of the Mesolithic Age. They were used for making composite tools like arrows and sickles."
          },
          {
            question: "Which of the following is considered one of the earliest civilisations?",
            options: ["Roman civilisation", "Greek civilisation", "Mesopotamian civilisation", "Aztec civilisation"],
            correct: 2,
            explanation: "The Mesopotamian civilisation (in modern-day Iraq) is one of the earliest known civilisations, developing around 3500 BCE in the Tigris-Euphrates river valley."
          },
          {
            question: "The transition from nomadic to settled life was mainly due to:",
            options: ["Climate becoming colder everywhere", "Development of agriculture", "Discovery of metals", "Invention of writing"],
            correct: 1,
            explanation: "The development of agriculture allowed humans to grow their own food and settle in one place instead of constantly moving in search of food."
          },
          {
            question: "Pottery was first developed during the:",
            options: ["Palaeolithic Age", "Mesolithic Age", "Neolithic Age", "Bronze Age"],
            correct: 2,
            explanation: "Pottery was first developed during the Neolithic Age when settled communities needed containers for storing grains, water, and cooking food."
          },
          {
            question: "The term 'Palaeolithic' literally means:",
            options: ["New Stone", "Middle Stone", "Old Stone", "No Stone"],
            correct: 2,
            explanation: "The term Palaeolithic comes from Greek words 'palaeo' meaning old and 'lithos' meaning stone, so it literally means 'Old Stone' Age."
          },
          {
            question: "Early humans lived in caves primarily for:",
            options: ["Artistic expression only", "Shelter and protection from weather and wild animals", "Storing food only", "Religious ceremonies only"],
            correct: 1,
            explanation: "Early humans used caves primarily as shelter to protect themselves from harsh weather conditions and dangerous wild animals."
          },
          {
            question: "Writing was first developed in:",
            options: ["India", "China", "Mesopotamia", "Egypt"],
            correct: 2,
            explanation: "Writing was first developed in Mesopotamia around 3400-3200 BCE. The Sumerians developed cuneiform, one of the earliest known writing systems."
          },
          {
            question: "The Bronze Age is characterised by:",
            options: ["Use of stone tools only", "Use of iron tools", "Use of bronze for making tools and weapons", "Use of copper only"],
            correct: 2,
            explanation: "The Bronze Age is characterised by the widespread use of bronze (an alloy of copper and tin) for making tools, weapons, and ornaments."
          },
          {
            question: "Which of the following was a result of settled agricultural life?",
            options: ["Decrease in population", "Development of villages and towns", "Return to hunting and gathering", "Decline in tool making"],
            correct: 1,
            explanation: "Settled agricultural life led to the development of permanent villages and towns as people no longer needed to move in search of food."
          },
          {
            question: "The earliest evidence of human habitation in the Indian subcontinent dates to approximately:",
            options: ["5,000 years ago", "50,000 years ago", "2 million years ago", "500 years ago"],
            correct: 2,
            explanation: "The earliest evidence of human habitation in the Indian subcontinent dates back approximately 2 million years, with stone tools found in places like the Soan Valley."
          },
          {
            question: "Mehrgarh, one of the earliest Neolithic sites, is located in present-day:",
            options: ["India", "Pakistan", "Afghanistan", "Iran"],
            correct: 1,
            explanation: "Mehrgarh is one of the earliest known Neolithic sites in South Asia, located in present-day Balochistan, Pakistan, dating to around 7000 BCE."
          },
          {
            question: "Which of these was NOT a feature of Neolithic settlements?",
            options: ["Permanent houses", "Agriculture", "Domestication of animals", "Use of only natural caves for shelter"],
            correct: 3,
            explanation: "Neolithic people built permanent houses rather than relying on natural caves. They practised agriculture, domesticated animals, and lived in settled communities."
          },
          {
            question: "The discovery of metals marked the end of the:",
            options: ["Iron Age", "Bronze Age", "Stone Age", "Modern Age"],
            correct: 2,
            explanation: "The discovery and use of metals (first copper, then bronze) marked the end of the Stone Age and the beginning of the Metal Ages."
          }
        ]
      },      {
        id: 5,
        name: "State and Society (upto 1000 CE)",
        description: "Ancient Indian kingdoms, empires, administration, society, and culture up to 1000 CE",
        questions: [
          {
            question: "The Mauryan Empire was founded by:",
            options: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Samudragupta"],
            correct: 2,
            explanation: "The Mauryan Empire was founded by Chandragupta Maurya around 321 BCE with the help of his advisor Chanakya (Kautilya)."
          },
          {
            question: "Ashoka embraced Buddhism after the battle of:",
            options: ["Panipat", "Kalinga", "Tarain", "Plassey"],
            correct: 1,
            explanation: "Emperor Ashoka embraced Buddhism after witnessing the massive death and destruction caused by the Kalinga War (261 BCE)."
          },
          {
            question: "The Arthashastra was written by:",
            options: ["Ashoka", "Kautilya (Chanakya)", "Kalidasa", "Aryabhata"],
            correct: 1,
            explanation: "The Arthashastra, an ancient Indian treatise on statecraft, politics, and economics, was written by Kautilya, also known as Chanakya."
          },
          {
            question: "The Gupta period is often referred to as the:",
            options: ["Iron Age of India", "Dark Age of India", "Golden Age of India", "Stone Age of India"],
            correct: 2,
            explanation: "The Gupta period (320-550 CE) is called the Golden Age of India due to significant achievements in science, mathematics, art, literature, and philosophy."
          },
          {
            question: "Aryabhata, the great mathematician and astronomer, lived during the:",
            options: ["Mauryan period", "Gupta period", "Mughal period", "British period"],
            correct: 1,
            explanation: "Aryabhata (476-550 CE) was a renowned mathematician and astronomer who lived during the Gupta period and contributed concepts like zero and the value of pi."
          },
          {
            question: "The Varna system in ancient India divided society into:",
            options: ["Two groups", "Three groups", "Four groups", "Six groups"],
            correct: 2,
            explanation: "The Varna system divided society into four groups: Brahmins (priests/scholars), Kshatriyas (warriors/rulers), Vaishyas (traders/farmers), and Shudras (labourers/servants)."
          },
          {
            question: "Which dynasty built the famous Ajanta and Ellora caves?",
            options: ["Mauryas", "Guptas", "Vakatakas and Rashtrakutas", "Cholas"],
            correct: 2,
            explanation: "The Ajanta caves were primarily patronised by the Vakatakas, while the Ellora caves were built under the patronage of the Rashtrakutas and other dynasties."
          },
          {
            question: "The concept of 'Dhamma' was propagated by:",
            options: ["Chandragupta Maurya", "Emperor Ashoka", "Harsha", "Samudragupta"],
            correct: 1,
            explanation: "Emperor Ashoka propagated the concept of Dhamma (righteousness), which included tolerance, respect for elders, compassion, and non-violence."
          },
          {
            question: "The Sangam literature belongs to which region of India?",
            options: ["North India", "East India", "South India (Tamil Nadu)", "West India"],
            correct: 2,
            explanation: "Sangam literature is a collection of ancient Tamil literary works from South India (Tamil Nadu), composed during the Sangam period (300 BCE - 300 CE)."
          },
          {
            question: "King Harsha ruled from which city?",
            options: ["Pataliputra", "Kannauj", "Delhi", "Ujjain"],
            correct: 1,
            explanation: "King Harshavardhana (606-647 CE) ruled from Kannauj and was one of the last great rulers of ancient North India before the medieval period."
          },
          {
            question: "The Chola dynasty was famous for its:",
            options: ["Land army only", "Naval power and administration", "Desert warfare", "Mountain fortresses"],
            correct: 1,
            explanation: "The Chola dynasty was renowned for its powerful navy, efficient local self-government system, and maritime trade across Southeast Asia."
          },
          {
            question: "Buddhism was founded by:",
            options: ["Mahavira", "Siddhartha Gautama", "Ashoka", "Chanakya"],
            correct: 1,
            explanation: "Buddhism was founded by Siddhartha Gautama (the Buddha) in the 6th century BCE in ancient India."
          },
          {
            question: "Jainism was propagated by:",
            options: ["Buddha", "Ashoka", "Mahavira", "Chandragupta II"],
            correct: 2,
            explanation: "Jainism was propagated by Vardhamana Mahavira (599-527 BCE), the 24th Tirthankara, who preached non-violence, truth, and asceticism."
          },
          {
            question: "The Pallava dynasty is known for building:",
            options: ["Taj Mahal", "Shore Temple at Mahabalipuram", "Red Fort", "Qutub Minar"],
            correct: 1,
            explanation: "The Pallava dynasty is known for building magnificent temples, including the Shore Temple and the rock-cut monuments at Mahabalipuram (Mamallapuram)."
          },
          {
            question: "The Gupta Empire was founded by:",
            options: ["Chandragupta I", "Samudragupta", "Chandragupta II", "Kumaragupta"],
            correct: 0,
            explanation: "The Gupta Empire was founded by Chandragupta I around 320 CE. He adopted the title Maharajadhiraja (King of Kings)."
          },
          {
            question: "Samudragupta is often compared to:",
            options: ["Julius Caesar", "Napoleon", "Alexander the Great", "Genghis Khan"],
            correct: 2,
            explanation: "Samudragupta is often compared to Alexander the Great due to his extensive military conquests and is sometimes called the 'Napoleon of India' by historian V.A. Smith."
          },
          {
            question: "The decimal number system was developed in ancient:",
            options: ["Greece", "Rome", "India", "China"],
            correct: 2,
            explanation: "The decimal number system, including the concept of zero, was developed in ancient India by mathematicians during the Gupta period."
          },
          {
            question: "Which Chinese pilgrim visited India during the reign of Harsha?",
            options: ["Fa-Hien", "Hiuen Tsang", "I-Tsing", "Marco Polo"],
            correct: 1,
            explanation: "Hiuen Tsang (Xuanzang) visited India during the reign of Harshavardhana (630-645 CE) and left detailed accounts of Indian society and culture."
          },
          {
            question: "The Panchayat system in ancient India refers to:",
            options: ["Military organisation", "Local self-governance", "Religious council", "Trade guild"],
            correct: 1,
            explanation: "The Panchayat system was a form of local self-governance in ancient India where a council of five (panch) elected members managed village affairs."
          },
          {
            question: "The Rashtrakutas ruled from:",
            options: ["Delhi", "Manyakheta (Malkhed)", "Pataliputra", "Madurai"],
            correct: 1,
            explanation: "The Rashtrakutas ruled from their capital Manyakheta (modern Malkhed in Karnataka) and were a powerful dynasty in the Deccan region."
          },
          {
            question: "The Nalanda University was a famous centre of learning during the:",
            options: ["Vedic period", "Gupta and post-Gupta period", "British period", "Indus Valley period"],
            correct: 1,
            explanation: "Nalanda University, located in present-day Bihar, was a renowned centre of learning during the Gupta and post-Gupta period, attracting scholars from across Asia."
          },
          {
            question: "Kalidasa, the famous Sanskrit poet, lived during the:",
            options: ["Mauryan period", "Gupta period", "Mughal period", "Vedic period"],
            correct: 1,
            explanation: "Kalidasa, author of works like Shakuntala and Meghadutam, is believed to have lived during the Gupta period, in the court of Chandragupta II."
          },
          {
            question: "The rock edicts of Ashoka were written in:",
            options: ["Sanskrit", "Prakrit and Brahmi script", "English", "Tamil"],
            correct: 1,
            explanation: "Ashoka's rock edicts were primarily written in Prakrit language using the Brahmi script, though some were also in Kharosthi and Greek."
          },
          {
            question: "The Satavahana dynasty was prominent in:",
            options: ["North India", "The Deccan region", "Northeast India", "Northwest India"],
            correct: 1,
            explanation: "The Satavahana dynasty was prominent in the Deccan region of India, ruling from around the 2nd century BCE to the 3rd century CE."
          },
          {
            question: "Trade guilds (shrenis) in ancient India were:",
            options: ["Military units", "Organisations of craftsmen and merchants", "Religious sects", "Political parties"],
            correct: 1,
            explanation: "Shrenis (trade guilds) were organisations of craftsmen and merchants in ancient India that regulated trade, set quality standards, and protected the interests of their members."
          }
        ]
      },      {
        id: 6,
        name: "Democracy",
        description: "Meaning and features of democracy, types of democracy, merits and demerits, and democratic values",
        questions: [
          {
            question: "Democracy literally means:",
            options: ["Rule by the rich", "Rule by the people", "Rule by the military", "Rule by religious leaders"],
            correct: 1,
            explanation: "Democracy comes from Greek words 'demos' (people) and 'kratos' (rule), literally meaning 'rule by the people'."
          },
          {
            question: "Which of the following is a key feature of democracy?",
            options: ["Rule by a single person", "Free and fair elections", "No opposition allowed", "Hereditary succession"],
            correct: 1,
            explanation: "Free and fair elections are a key feature of democracy, allowing citizens to choose their representatives through a transparent voting process."
          },
          {
            question: "In a direct democracy, citizens:",
            options: ["Elect representatives to make laws", "Directly participate in decision-making", "Have no say in governance", "Are ruled by a king"],
            correct: 1,
            explanation: "In a direct democracy, citizens directly participate in decision-making and law-making without intermediaries or elected representatives."
          },
          {
            question: "In an indirect (representative) democracy, citizens:",
            options: ["Make all decisions themselves", "Elect representatives to make decisions on their behalf", "Have no voting rights", "Are governed by hereditary rulers"],
            correct: 1,
            explanation: "In an indirect or representative democracy, citizens elect representatives who make laws and decisions on their behalf in a legislature."
          },
          {
            question: "India is an example of:",
            options: ["Direct democracy", "Monarchy", "Representative democracy", "Military dictatorship"],
            correct: 2,
            explanation: "India is a representative (indirect) democracy where citizens elect representatives to the Parliament and State Legislatures to govern on their behalf."
          },
          {
            question: "Universal adult suffrage means:",
            options: ["Only educated people can vote", "Only men can vote", "All adult citizens have the right to vote regardless of caste, creed, or gender", "Only property owners can vote"],
            correct: 2,
            explanation: "Universal adult suffrage means all adult citizens have the right to vote without discrimination based on caste, religion, gender, wealth, or education."
          },
          {
            question: "Which of the following is NOT a merit of democracy?",
            options: ["Protects individual rights", "Promotes equality", "Decision-making can be slow", "Ensures accountability of leaders"],
            correct: 2,
            explanation: "Slow decision-making is considered a limitation of democracy, not a merit. Merits include protection of rights, equality, and accountability."
          },
          {
            question: "The rule of law in a democracy means:",
            options: ["The ruler is above the law", "Everyone, including leaders, must follow the law", "Laws apply only to ordinary citizens", "There are no laws"],
            correct: 1,
            explanation: "The rule of law means that everyone, including government officials and leaders, is subject to and must abide by the law of the land."
          },
          {
            question: "Which ancient Greek city-state is considered the birthplace of democracy?",
            options: ["Sparta", "Athens", "Rome", "Corinth"],
            correct: 1,
            explanation: "Athens is considered the birthplace of democracy, where a form of direct democracy was practised around the 5th century BCE."
          },
          {
            question: "Opposition parties in a democracy are important because they:",
            options: ["Create chaos", "Hold the ruling party accountable and provide alternative policies", "Support everything the ruling party does", "Have no role"],
            correct: 1,
            explanation: "Opposition parties play a vital role in democracy by scrutinising government actions, holding the ruling party accountable, and offering alternative policies."
          },
          {
            question: "Fundamental rights in a democracy:",
            options: ["Can be taken away by the government at any time", "Protect citizens against the misuse of state power", "Apply only to government officials", "Are not important"],
            correct: 1,
            explanation: "Fundamental rights protect citizens against the arbitrary use of state power and guarantee basic freedoms essential for a dignified life."
          },
          {
            question: "A dictatorship differs from a democracy in that:",
            options: ["Power is shared among the people", "One person or a small group holds absolute power", "Free elections are held regularly", "Citizens have freedom of speech"],
            correct: 1,
            explanation: "In a dictatorship, one person or a small group holds absolute power without the consent of the people, unlike in a democracy."
          },
          {
            question: "Freedom of expression in a democracy means citizens can:",
            options: ["Say anything without any responsibility", "Express their views freely within legal limits", "Only praise the government", "Not express any opinion"],
            correct: 1,
            explanation: "Freedom of expression allows citizens to express their opinions and ideas freely, though this right comes with reasonable legal restrictions."
          },
          {
            question: "Which of the following is a demerit of democracy?",
            options: ["It promotes equality", "It ensures representation", "It may lead to corruption and inefficiency", "It protects fundamental rights"],
            correct: 2,
            explanation: "Democracy can sometimes lead to corruption, inefficiency, and delays in decision-making due to lengthy debates and political rivalries."
          },
          {
            question: "Secularism in a democracy means:",
            options: ["The state has an official religion", "The state treats all religions equally and does not favour any", "Religion controls the government", "Only one religion is allowed"],
            correct: 1,
            explanation: "Secularism means the state treats all religions equally, does not favour or discriminate against any religion, and separates religion from governance."
          },
          {
            question: "The head of state in the Indian democracy is:",
            options: ["The Prime Minister", "The President", "The Chief Justice", "The Governor"],
            correct: 1,
            explanation: "The President of India is the constitutional head of state, while the Prime Minister is the head of government who exercises executive powers."
          },
          {
            question: "Which document is considered the supreme law of India?",
            options: ["The Vedas", "The Constitution of India", "The Arthashastra", "The Panchayati Raj Act"],
            correct: 1,
            explanation: "The Constitution of India, adopted on 26 January 1950, is the supreme law of the country, defining the framework of government and citizens' rights."
          },
          {
            question: "Transparency in a democracy means:",
            options: ["Government operations are kept secret", "Government decisions and processes are open for public scrutiny", "Only ministers know about government actions", "Media is not allowed to report on governance"],
            correct: 1,
            explanation: "Transparency means government decisions, processes, and information are open and accessible to the public, enabling citizens to hold the government accountable."
          },
          {
            question: "Which of the following is essential for a healthy democracy?",
            options: ["One-party system", "Informed and active citizenry", "Military rule", "Censorship of media"],
            correct: 1,
            explanation: "An informed and active citizenry is essential for a healthy democracy, as engaged citizens can make better electoral choices and hold leaders accountable."
          },
          {
            question: "The right to vote is also known as:",
            options: ["Franchise or suffrage", "Habeas corpus", "Mandate", "Referendum"],
            correct: 0,
            explanation: "The right to vote is also known as franchise or suffrage. Universal adult franchise means every adult citizen has the right to vote."
          },
          {
            question: "In a constitutional democracy:",
            options: ["The ruler has unlimited power", "The powers of the government are limited by a constitution", "There is no written law", "The military makes all decisions"],
            correct: 1,
            explanation: "In a constitutional democracy, the powers of the government are defined and limited by a constitution, which protects citizens' rights."
          },
          {
            question: "Which of the following countries is NOT a democracy?",
            options: ["India", "France", "North Korea", "Japan"],
            correct: 2,
            explanation: "North Korea is a totalitarian state ruled by a single party under a hereditary dictatorship, not a democracy."
          },
          {
            question: "Public opinion in a democracy is expressed through:",
            options: ["Only elections", "Elections, media, protests, and public debates", "Only the government", "Only through courts"],
            correct: 1,
            explanation: "In a democracy, public opinion is expressed through multiple channels including elections, media, peaceful protests, public debates, and civil society."
          },
          {
            question: "Equality before the law means:",
            options: ["Rich people get special treatment", "All persons are treated equally by the law regardless of their status", "Laws apply differently to different people", "Only citizens are protected by law"],
            correct: 1,
            explanation: "Equality before the law means every person is treated equally by the legal system, regardless of their social status, wealth, religion, or position."
          },
          {
            question: "The term 'sovereign' in the Indian Constitution means:",
            options: ["India is controlled by another country", "India is an independent nation that makes its own decisions", "India follows orders from the UN", "India has no government"],
            correct: 1,
            explanation: "Sovereign means India is an independent nation, free from external control, and has the supreme power to govern itself and make its own decisions."
          }
        ]
      },      {
        id: 7,
        name: "Elections",
        description: "Electoral process, types of elections, voting, electoral systems, and free and fair elections",
        questions: [
          {
            question: "The Election Commission of India is responsible for:",
            options: ["Making laws", "Conducting free and fair elections", "Appointing judges", "Collecting taxes"],
            correct: 1,
            explanation: "The Election Commission of India is an autonomous constitutional body responsible for administering and conducting free and fair elections in India."
          },
          {
            question: "The minimum voting age in India is:",
            options: ["16 years", "18 years", "21 years", "25 years"],
            correct: 1,
            explanation: "The minimum voting age in India is 18 years. The 61st Constitutional Amendment Act of 1988 lowered it from 21 to 18 years."
          },
          {
            question: "Lok Sabha elections are an example of:",
            options: ["Local elections", "State elections", "General elections", "By-elections"],
            correct: 2,
            explanation: "Lok Sabha elections are general elections where the entire country votes to elect members of the lower house of Parliament."
          },
          {
            question: "A by-election is held when:",
            options: ["A general election takes place", "A seat becomes vacant before the term ends", "All seats are contested", "The government changes"],
            correct: 1,
            explanation: "A by-election is held when a seat in the legislature becomes vacant before the end of the term, due to resignation, death, or disqualification of a member."
          },
          {
            question: "EVM stands for:",
            options: ["Electronic Voting Machine", "Election Verification Method", "Electoral Vote Management", "Electronic Vote Manager"],
            correct: 0,
            explanation: "EVM stands for Electronic Voting Machine, which is used in Indian elections to record votes electronically instead of using paper ballots."
          },
          {
            question: "NOTA on a ballot means:",
            options: ["Not On The Agenda", "None Of The Above", "National Organisation for Transparent Administration", "New Option for Total Access"],
            correct: 1,
            explanation: "NOTA stands for 'None Of The Above,' an option that allows voters to reject all candidates contesting in an election."
          },
          {
            question: "A constituency is:",
            options: ["A political party", "A geographical area whose voters elect a representative", "A government office", "A type of election"],
            correct: 1,
            explanation: "A constituency is a defined geographical area whose eligible voters elect a representative to a legislative body."
          },
          {
            question: "In India, the head of the Election Commission is called:",
            options: ["Chief Electoral Officer", "Chief Election Commissioner", "Election Minister", "Electoral Chairman"],
            correct: 1,
            explanation: "The head of the Election Commission of India is called the Chief Election Commissioner, who leads the multi-member commission."
          },
          {
            question: "Which of the following is essential for free and fair elections?",
            options: ["Only one party contesting", "Secret ballot", "Open voting", "Government control of media"],
            correct: 1,
            explanation: "Secret ballot is essential for free and fair elections as it ensures voters can make their choice without fear of intimidation or retaliation."
          },
          {
            question: "The Model Code of Conduct is:",
            options: ["A law passed by Parliament", "A set of guidelines for political parties and candidates during elections", "A military code", "A school rulebook"],
            correct: 1,
            explanation: "The Model Code of Conduct is a set of guidelines issued by the Election Commission for political parties and candidates to follow during elections."
          },
          {
            question: "Universal adult franchise means:",
            options: ["Only adults above 25 can vote", "Every citizen above 18 has the right to vote", "Only taxpayers can vote", "Only literate adults can vote"],
            correct: 1,
            explanation: "Universal adult franchise means every citizen who has attained the age of 18 has the right to vote, without discrimination based on caste, religion, gender, or education."
          },
          {
            question: "How many members are there in the Lok Sabha (maximum)?",
            options: ["245", "545", "552", "500"],
            correct: 2,
            explanation: "The maximum strength of Lok Sabha is 552 members — 530 from states, 20 from Union Territories, and 2 nominated Anglo-Indian members (though this provision was discontinued in 2020)."
          },
          {
            question: "Rajya Sabha members are:",
            options: ["Directly elected by the people", "Elected by elected members of State Legislative Assemblies", "Appointed by the Prime Minister", "Selected by the Supreme Court"],
            correct: 1,
            explanation: "Rajya Sabha members are elected by the elected members of State Legislative Assemblies through the system of proportional representation."
          },
          {
            question: "The tenure of Lok Sabha is normally:",
            options: ["4 years", "5 years", "6 years", "3 years"],
            correct: 1,
            explanation: "The normal tenure of Lok Sabha is 5 years from the date of its first meeting, unless dissolved earlier."
          },
          {
            question: "An election manifesto is:",
            options: ["A government document", "A statement of policies and promises made by a political party before elections", "A legal document", "A court order"],
            correct: 1,
            explanation: "An election manifesto is a document published by a political party before elections, outlining its policies, plans, and promises to voters."
          },
          {
            question: "The first general elections in independent India were held in:",
            options: ["1947", "1950", "1951-52", "1955"],
            correct: 2,
            explanation: "The first general elections in independent India were held in 1951-52, making India the largest democracy in the world to hold universal adult franchise elections."
          },
          {
            question: "A political party must win how many seats to form a majority in Lok Sabha?",
            options: ["200", "272", "300", "250"],
            correct: 1,
            explanation: "A political party or coalition must win at least 272 seats (more than half of the total 543 elected seats) in the Lok Sabha to form a majority government."
          },
          {
            question: "Which symbol is associated with the Election Commission of India?",
            options: ["Lotus", "Ashoka Pillar", "A voter's hand with ink mark", "National flag"],
            correct: 2,
            explanation: "The Election Commission uses the image of a voter showing an inked finger as its awareness symbol, representing the act of voting."
          },
          {
            question: "Voter ID card is also known as:",
            options: ["Aadhaar Card", "EPIC (Electors Photo Identity Card)", "PAN Card", "Ration Card"],
            correct: 1,
            explanation: "The Voter ID card is officially known as EPIC (Electors Photo Identity Card), issued by the Election Commission as proof of identity for voting."
          },
          {
            question: "Delimitation refers to:",
            options: ["Counting votes", "Fixing the boundaries of constituencies", "Announcing election results", "Forming the government"],
            correct: 1,
            explanation: "Delimitation is the process of fixing or redrawing the boundaries of electoral constituencies based on population changes as per census data."
          },
          {
            question: "Which of the following would make an election unfair?",
            options: ["Multiple parties contesting", "Use of secret ballot", "Intimidation of voters", "Independent Election Commission"],
            correct: 2,
            explanation: "Voter intimidation makes an election unfair by preventing people from voting freely. Free and fair elections require voters to make choices without fear."
          },
          {
            question: "Coalition government is formed when:",
            options: ["One party wins all seats", "No single party wins a majority and multiple parties join together", "The military takes over", "The President appoints the government"],
            correct: 1,
            explanation: "A coalition government is formed when no single party wins a majority, so multiple parties come together to form a government with a combined majority."
          },
          {
            question: "The purpose of the electoral roll is to:",
            options: ["List all candidates", "List all eligible voters in a constituency", "Count the votes", "Announce results"],
            correct: 1,
            explanation: "The electoral roll (voters' list) is a comprehensive list of all eligible voters in a constituency who are entitled to vote in an election."
          },
          {
            question: "In India, elections are held on the principle of:",
            options: ["One person, one vote", "One family, one vote", "Weighted voting based on education", "Only taxpayers vote"],
            correct: 0,
            explanation: "Indian elections follow the principle of 'one person, one vote,' meaning every eligible voter has exactly one vote, ensuring political equality."
          },
          {
            question: "A candidate who contests an election without belonging to any political party is called:",
            options: ["A rebel candidate", "An independent candidate", "A nominated member", "A proxy candidate"],
            correct: 1,
            explanation: "An independent candidate is one who contests elections without the support or affiliation of any political party, using an independent election symbol."
          }
        ]
      },      {
        id: 8,
        name: "Building Blocks in Economics",
        description: "Basic economic concepts, needs vs wants, goods and services, factors of production, and economic systems",
        questions: [
          {
            question: "Economics is primarily the study of:",
            options: ["Only money", "How societies allocate scarce resources to satisfy unlimited wants", "Only banking", "Only government budgets"],
            correct: 1,
            explanation: "Economics studies how individuals, businesses, and societies allocate scarce resources to satisfy unlimited wants and needs."
          },
          {
            question: "The difference between needs and wants is:",
            options: ["There is no difference", "Needs are essential for survival, wants are desires that are not essential", "Wants are more important than needs", "Needs are unlimited, wants are limited"],
            correct: 1,
            explanation: "Needs are basic essentials required for survival (food, shelter, clothing), while wants are desires for things that are not essential but improve quality of life."
          },
          {
            question: "Which of the following is a 'need'?",
            options: ["A luxury car", "Designer clothes", "Clean drinking water", "A video game console"],
            correct: 2,
            explanation: "Clean drinking water is a basic need essential for survival. Luxury cars, designer clothes, and gaming consoles are wants."
          },
          {
            question: "Goods are:",
            options: ["Only intangible items", "Tangible physical items that satisfy human wants", "Only services", "Only natural resources"],
            correct: 1,
            explanation: "Goods are tangible (physical) items like food, clothes, books, and machines that can be seen, touched, and used to satisfy human wants."
          },
          {
            question: "Services are:",
            options: ["Tangible products", "Intangible activities that satisfy human wants", "Only government functions", "Only banking activities"],
            correct: 1,
            explanation: "Services are intangible activities like teaching, healthcare, banking, and transportation that satisfy human wants but cannot be physically touched."
          },
          {
            question: "The four factors of production are:",
            options: ["Buying, selling, trading, saving", "Land, labour, capital, and entrepreneurship", "Money, gold, silver, and diamonds", "Import, export, production, consumption"],
            correct: 1,
            explanation: "The four factors of production are land (natural resources), labour (human effort), capital (machinery, tools, money), and entrepreneurship (organising other factors)."
          },
          {
            question: "In economics, 'land' as a factor of production includes:",
            options: ["Only agricultural land", "All natural resources including water, minerals, forests, and soil", "Only buildings", "Only urban property"],
            correct: 1,
            explanation: "In economics, land refers to all natural resources used in production, including soil, water, forests, minerals, sunlight, and air."
          },
          {
            question: "Labour refers to:",
            options: ["Only physical work", "All human effort, both physical and mental, used in production", "Only factory work", "Only farm work"],
            correct: 1,
            explanation: "Labour includes all human effort, both physical and mental, used in the production of goods and services, from farm work to professional services."
          },
          {
            question: "Capital in economics refers to:",
            options: ["Only money", "Man-made resources used in production like machinery, tools, and buildings", "Only gold and silver", "Only bank deposits"],
            correct: 1,
            explanation: "Capital refers to man-made resources used in further production, including machinery, tools, buildings, technology, and equipment."
          },
          {
            question: "An entrepreneur is someone who:",
            options: ["Only works in a factory", "Organises factors of production and takes risks to start a business", "Only lends money", "Only buys goods"],
            correct: 1,
            explanation: "An entrepreneur organises the other factors of production (land, labour, capital), takes business risks, and innovates to create goods and services."
          },
          {
            question: "Scarcity in economics means:",
            options: ["There is nothing available", "Resources are limited compared to unlimited human wants", "Everything is expensive", "Only poor people face shortages"],
            correct: 1,
            explanation: "Scarcity means that available resources are limited while human wants are unlimited, forcing individuals and societies to make choices."
          },
          {
            question: "Opportunity cost is:",
            options: ["The price of a product", "The value of the next best alternative given up when making a choice", "The cost of raw materials", "The profit earned"],
            correct: 1,
            explanation: "Opportunity cost is the value of the next best alternative that must be given up when making a choice between different uses of resources."
          },
          {
            question: "Consumer goods are:",
            options: ["Goods used to make other goods", "Goods bought by consumers for direct use", "Only food items", "Only luxury items"],
            correct: 1,
            explanation: "Consumer goods are finished products bought by consumers for direct use or consumption, such as food, clothing, electronics, and furniture."
          },
          {
            question: "Producer goods (capital goods) are:",
            options: ["Goods sold directly to consumers", "Goods used to produce other goods and services", "Only agricultural products", "Only imported goods"],
            correct: 1,
            explanation: "Producer goods (capital goods) are goods used in the production of other goods and services, such as machinery, raw materials, and tools."
          },
          {
            question: "In a market economy, economic decisions are mainly made by:",
            options: ["The government alone", "Individuals and businesses through market forces", "The military", "Religious leaders"],
            correct: 1,
            explanation: "In a market economy, economic decisions about production, distribution, and pricing are made by individuals and businesses through supply and demand."
          },
          {
            question: "In a command (planned) economy, economic decisions are made by:",
            options: ["Private businesses", "The central government", "Individual consumers", "Foreign companies"],
            correct: 1,
            explanation: "In a command economy, the central government makes all major economic decisions about what to produce, how to produce, and for whom to produce."
          },
          {
            question: "India has a:",
            options: ["Purely market economy", "Purely command economy", "Mixed economy", "Traditional economy"],
            correct: 2,
            explanation: "India has a mixed economy that combines features of both market and command economies, with both private enterprise and government planning playing roles."
          },
          {
            question: "The primary sector of the economy includes:",
            options: ["Manufacturing and industry", "Services like banking and education", "Agriculture, fishing, mining, and forestry", "Information technology"],
            correct: 2,
            explanation: "The primary sector includes activities that directly extract or harvest natural resources, such as agriculture, fishing, mining, and forestry."
          },
          {
            question: "The secondary sector of the economy includes:",
            options: ["Agriculture and fishing", "Manufacturing and industry", "Banking and education", "Government services"],
            correct: 1,
            explanation: "The secondary sector involves manufacturing and industry, where raw materials from the primary sector are transformed into finished products."
          },
          {
            question: "The tertiary sector of the economy includes:",
            options: ["Farming", "Manufacturing", "Services like transport, communication, and trade", "Mining"],
            correct: 2,
            explanation: "The tertiary sector includes service activities like transportation, communication, banking, education, healthcare, and trade."
          },
          {
            question: "GDP stands for:",
            options: ["Gross Domestic Product", "General Development Plan", "Government Domestic Policy", "Global Distribution Price"],
            correct: 0,
            explanation: "GDP stands for Gross Domestic Product, which is the total value of all goods and services produced within a country in a given period."
          },
          {
            question: "Which of the following is a free good?",
            options: ["Bottled water", "Sunlight", "Electricity", "Petrol"],
            correct: 1,
            explanation: "Sunlight is a free good because it is naturally available in unlimited quantity and does not require payment. Bottled water, electricity, and petrol are economic goods."
          },
          {
            question: "Division of labour means:",
            options: ["Everyone does the same work", "Breaking down production into specialised tasks performed by different workers", "Only managers work", "Machines replace all workers"],
            correct: 1,
            explanation: "Division of labour means breaking down the production process into specialised tasks, each performed by different workers, increasing efficiency and productivity."
          },
          {
            question: "Barter system is:",
            options: ["Exchange of goods for money", "Direct exchange of goods and services without using money", "Online shopping", "Credit-based transactions"],
            correct: 1,
            explanation: "The barter system is the direct exchange of goods and services without using money. It was the earliest form of trade before money was invented."
          },
          {
            question: "The main problem with the barter system was:",
            options: ["It was too easy", "The double coincidence of wants was difficult to achieve", "It used too much money", "It required banks"],
            correct: 1,
            explanation: "The main problem with barter was the 'double coincidence of wants' — both parties had to want what the other offered at the same time, which was difficult."
          }
        ]
      },      {
        id: 9,
        name: "The Price Puzzle: What Drives the Market",
        description: "Demand and supply, market equilibrium, price determination, and factors affecting prices",
        questions: [
          {
            question: "Demand in economics refers to:",
            options: ["Just wanting something", "The quantity of a good a consumer is willing and able to buy at a given price", "Only the supply of goods", "Government orders for goods"],
            correct: 1,
            explanation: "Demand refers to the quantity of a good or service that consumers are both willing and able to purchase at a given price during a specific period."
          },
          {
            question: "According to the law of demand, when the price of a good increases:",
            options: ["Demand also increases", "Demand decreases", "Demand remains the same", "Supply decreases"],
            correct: 1,
            explanation: "The law of demand states that, all other factors being equal, as the price of a good increases, the quantity demanded decreases, and vice versa."
          },
          {
            question: "Supply refers to:",
            options: ["How much consumers want", "The quantity of a good a producer is willing and able to sell at a given price", "Government regulations", "The total money in the market"],
            correct: 1,
            explanation: "Supply refers to the quantity of a good or service that producers are willing and able to offer for sale at a given price during a specific period."
          },
          {
            question: "According to the law of supply, when the price of a good increases:",
            options: ["Supply decreases", "Supply remains the same", "Supply increases", "Demand increases"],
            correct: 2,
            explanation: "The law of supply states that, all other factors being equal, as the price of a good increases, the quantity supplied also increases, and vice versa."
          },
          {
            question: "Market equilibrium occurs when:",
            options: ["Demand is greater than supply", "Supply is greater than demand", "The quantity demanded equals the quantity supplied", "The government sets the price"],
            correct: 2,
            explanation: "Market equilibrium occurs at the price point where the quantity demanded by consumers equals the quantity supplied by producers."
          },
          {
            question: "The equilibrium price is also called the:",
            options: ["Maximum price", "Minimum price", "Market-clearing price", "Government price"],
            correct: 2,
            explanation: "The equilibrium price is called the market-clearing price because at this price, all goods supplied are purchased, and the market clears."
          },
          {
            question: "When demand exceeds supply, it creates a:",
            options: ["Surplus", "Shortage", "Equilibrium", "Recession"],
            correct: 1,
            explanation: "When demand exceeds supply, it creates a shortage (excess demand), which typically causes prices to rise."
          },
          {
            question: "When supply exceeds demand, it creates a:",
            options: ["Shortage", "Surplus", "Equilibrium", "Inflation"],
            correct: 1,
            explanation: "When supply exceeds demand, it creates a surplus (excess supply), which typically causes prices to fall."
          },
          {
            question: "Which of the following can cause an increase in demand?",
            options: ["Decrease in consumer income", "Increase in the price of the good", "Increase in consumer income or preference", "Decrease in population"],
            correct: 2,
            explanation: "An increase in consumer income or a shift in consumer preference towards a good can cause an increase in demand for that good."
          },
          {
            question: "A market is:",
            options: ["Only a physical place like a shop", "Any arrangement where buyers and sellers come together to exchange goods and services", "Only an online platform", "Only a government institution"],
            correct: 1,
            explanation: "A market is any arrangement or mechanism that brings buyers and sellers together for the exchange of goods and services, whether physical or virtual."
          },
          {
            question: "Inflation refers to:",
            options: ["A decrease in the general price level", "A sustained increase in the general price level", "Prices remaining constant", "A decrease in production"],
            correct: 1,
            explanation: "Inflation is a sustained increase in the general price level of goods and services in an economy over a period of time."
          },
          {
            question: "Which of the following is a substitute good for tea?",
            options: ["Sugar", "Coffee", "Milk", "A teacup"],
            correct: 1,
            explanation: "Coffee is a substitute good for tea because it can be consumed in place of tea. Substitute goods fulfil similar needs."
          },
          {
            question: "Complementary goods are:",
            options: ["Goods that replace each other", "Goods that are used together", "Goods that are not related", "Goods produced by the government"],
            correct: 1,
            explanation: "Complementary goods are products that are typically used together, such as bread and butter, or a phone and a phone case."
          },
          {
            question: "If the price of petrol increases, the demand for cars is likely to:",
            options: ["Increase", "Decrease", "Remain the same", "Double"],
            correct: 1,
            explanation: "Since petrol and cars are complementary goods, an increase in petrol price increases the cost of using a car, likely decreasing the demand for cars."
          },
          {
            question: "A price ceiling is:",
            options: ["A minimum price set by the government", "A maximum price set by the government below the equilibrium", "The equilibrium price", "The highest price a seller charges"],
            correct: 1,
            explanation: "A price ceiling is a maximum price set by the government below the equilibrium price, usually to make essential goods affordable for consumers."
          },
          {
            question: "A price floor is:",
            options: ["A maximum price set by the government", "A minimum price set by the government above the equilibrium", "The lowest market price", "The cost of production"],
            correct: 1,
            explanation: "A price floor is a minimum price set by the government above the equilibrium price, often used to protect producers, like minimum support prices for crops."
          },
          {
            question: "The Minimum Support Price (MSP) in India is an example of:",
            options: ["Price ceiling", "Price floor", "Equilibrium price", "Market price"],
            correct: 1,
            explanation: "MSP is a price floor set by the government to protect farmers by ensuring they receive a minimum guaranteed price for their crops."
          },
          {
            question: "When the price of a product falls, consumers tend to buy more. This is because of:",
            options: ["The law of supply", "The law of demand", "Inflation", "Government regulation"],
            correct: 1,
            explanation: "The law of demand states that when the price of a product falls, consumers tend to buy more of it, showing an inverse relationship between price and demand."
          },
          {
            question: "Which factor does NOT typically affect the supply of a good?",
            options: ["Cost of production", "Technology", "Consumer taste", "Government policies"],
            correct: 2,
            explanation: "Consumer taste affects demand, not supply. Supply is affected by cost of production, technology, government policies, and input prices."
          },
          {
            question: "Hoarding of essential goods typically leads to:",
            options: ["Decrease in prices", "Artificial shortage and price increase", "Increase in supply", "Market equilibrium"],
            correct: 1,
            explanation: "Hoarding creates an artificial shortage by restricting supply, which drives up prices and hurts consumers, especially during emergencies."
          },
          {
            question: "A monopoly market has:",
            options: ["Many sellers", "Only one seller", "Only one buyer", "Perfect competition"],
            correct: 1,
            explanation: "A monopoly market has only one seller who controls the entire supply of a product or service, giving them significant power over pricing."
          },
          {
            question: "Perfect competition is characterised by:",
            options: ["One dominant seller", "Many buyers and sellers with identical products", "Government control of all prices", "Only two sellers"],
            correct: 1,
            explanation: "Perfect competition features many buyers and sellers trading identical products, where no single buyer or seller can influence the market price."
          },
          {
            question: "The Consumer Price Index (CPI) measures:",
            options: ["Industrial production", "Changes in the average price level of consumer goods and services", "Stock market performance", "Government spending"],
            correct: 1,
            explanation: "The Consumer Price Index (CPI) measures changes in the average price level of a basket of consumer goods and services, indicating inflation."
          },
          {
            question: "Black marketing refers to:",
            options: ["Legal selling of goods", "Selling goods at prices higher than the legally permitted price", "Selling goods online", "Government-controlled selling"],
            correct: 1,
            explanation: "Black marketing refers to the illegal practice of selling goods at prices higher than the legally permitted or official price, exploiting shortages."
          },
          {
            question: "When demand for a product is high but supply is low, the price will:",
            options: ["Decrease", "Remain the same", "Increase", "Become zero"],
            correct: 2,
            explanation: "When demand is high and supply is low, competition among buyers pushes the price upward until a new equilibrium is reached."
          }
        ]
      },      {
        id: 10,
        name: "Oceans and Life",
        description: "Ocean distribution, ocean movements, marine resources, ocean currents, and importance of oceans",
        questions: [
          {
            question: "What percentage of the Earth's surface is covered by oceans?",
            options: ["About 50%", "About 61%", "About 71%", "About 90%"],
            correct: 2,
            explanation: "Approximately 71% of the Earth's surface is covered by oceans and seas, making water the dominant feature of our planet."
          },
          {
            question: "Which is the largest ocean in the world?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            correct: 2,
            explanation: "The Pacific Ocean is the largest ocean, covering about one-third of the Earth's surface and larger than all the land areas combined."
          },
          {
            question: "Which is the smallest and shallowest ocean?",
            options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
            correct: 3,
            explanation: "The Arctic Ocean is the smallest and shallowest of the five oceans, located around the North Pole and largely covered by sea ice."
          },
          {
            question: "Ocean currents are caused by:",
            options: ["Only wind", "Wind, differences in water temperature and salinity, and Earth's rotation", "Only the moon's gravity", "Only underwater volcanoes"],
            correct: 1,
            explanation: "Ocean currents are caused by a combination of factors including wind, differences in water temperature and salinity, and the Coriolis effect due to Earth's rotation."
          },
          {
            question: "Tides are primarily caused by:",
            options: ["Wind", "Earthquakes", "The gravitational pull of the Moon and Sun", "Ocean currents"],
            correct: 2,
            explanation: "Tides are primarily caused by the gravitational pull of the Moon and, to a lesser extent, the Sun on Earth's water bodies."
          },
          {
            question: "A spring tide occurs when:",
            options: ["Only the Moon affects tides", "The Sun, Moon, and Earth are in a straight line", "The Moon is farthest from Earth", "Only during spring season"],
            correct: 1,
            explanation: "Spring tides occur when the Sun, Moon, and Earth are aligned (during full moon and new moon), creating the highest high tides and lowest low tides."
          },
          {
            question: "A neap tide occurs when:",
            options: ["The Sun and Moon are at right angles to each other relative to Earth", "The Sun and Moon are aligned", "During volcanic eruptions", "Only at the equator"],
            correct: 0,
            explanation: "Neap tides occur when the Sun and Moon are at right angles to each other relative to Earth (during quarter moons), producing the smallest tidal range."
          },
          {
            question: "Waves are caused primarily by:",
            options: ["Earthquakes", "Wind blowing over the ocean surface", "Fish movement", "Underwater volcanoes"],
            correct: 1,
            explanation: "Ocean waves are primarily caused by wind blowing over the surface of the water, transferring energy to the water."
          },
          {
            question: "A tsunami is a large ocean wave caused by:",
            options: ["Strong winds", "Underwater earthquakes, volcanic eruptions, or landslides", "Normal tides", "Monsoons"],
            correct: 1,
            explanation: "A tsunami is a series of large, powerful ocean waves caused by underwater disturbances such as earthquakes, volcanic eruptions, or submarine landslides."
          },
          {
            question: "The Gulf Stream is an example of:",
            options: ["A cold ocean current", "A warm ocean current", "A river", "A type of tide"],
            correct: 1,
            explanation: "The Gulf Stream is a warm ocean current that flows from the Gulf of Mexico along the east coast of North America and across the Atlantic, moderating European climate."
          },
          {
            question: "Warm ocean currents generally flow:",
            options: ["From poles towards the equator", "From the equator towards the poles", "Only in the Pacific Ocean", "Only east to west"],
            correct: 1,
            explanation: "Warm ocean currents generally flow from equatorial regions towards the poles, carrying warm water and moderating the climate of coastal areas."
          },
          {
            question: "Cold ocean currents generally flow:",
            options: ["From the equator towards the poles", "From polar regions towards the equator", "Only in a circular pattern", "Only in the Atlantic"],
            correct: 1,
            explanation: "Cold ocean currents generally flow from polar regions towards the equator, bringing cold water that can affect local climates."
          },
          {
            question: "The Mariana Trench is:",
            options: ["The highest mountain on Earth", "The deepest point in the ocean", "A type of coral reef", "An island chain"],
            correct: 1,
            explanation: "The Mariana Trench in the Pacific Ocean is the deepest point in the ocean, reaching approximately 11,034 metres (36,201 feet) at its deepest point."
          },
          {
            question: "Coral reefs are formed by:",
            options: ["Volcanic eruptions only", "Tiny marine organisms called coral polyps", "River deposits", "Wind erosion"],
            correct: 1,
            explanation: "Coral reefs are formed by colonies of tiny marine organisms called coral polyps that secrete calcium carbonate to form hard, rock-like structures over time."
          },
          {
            question: "Which of the following is a marine resource?",
            options: ["Coal from mines", "Fish and petroleum from the ocean floor", "Iron ore from mountains", "Timber from forests"],
            correct: 1,
            explanation: "Marine resources include fish, seaweed, petroleum, natural gas, minerals, and salt obtained from oceans and seas."
          },
          {
            question: "Salinity of ocean water refers to:",
            options: ["Its temperature", "The amount of dissolved salts in the water", "Its depth", "Its colour"],
            correct: 1,
            explanation: "Salinity refers to the amount of dissolved salts (mainly sodium chloride) in ocean water, typically expressed in parts per thousand (ppt)."
          },
          {
            question: "The average salinity of ocean water is approximately:",
            options: ["15 ppt", "25 ppt", "35 ppt", "55 ppt"],
            correct: 2,
            explanation: "The average salinity of ocean water is approximately 35 parts per thousand (ppt), meaning about 35 grams of salt per litre of water."
          },
          {
            question: "The continental shelf is:",
            options: ["The deepest part of the ocean", "The gently sloping shallow area extending from the coastline", "An island in the ocean", "A type of coral reef"],
            correct: 1,
            explanation: "The continental shelf is the gently sloping, shallow underwater extension of a continent, typically extending to a depth of about 200 metres."
          },
          {
            question: "Oceans are important because they:",
            options: ["Only provide fish", "Regulate climate, provide food, facilitate trade, and are a source of minerals", "Only serve as boundaries between continents", "Have no significant importance"],
            correct: 1,
            explanation: "Oceans are vital for climate regulation, food supply (fish and seafood), maritime trade, mineral resources, and maintaining the water cycle."
          },
          {
            question: "Plankton are important in the ocean because they:",
            options: ["Create waves", "Form the base of the marine food chain and produce oxygen", "Cause tsunamis", "Have no ecological importance"],
            correct: 1,
            explanation: "Plankton form the base of the marine food chain and phytoplankton produce approximately 50% of the world's oxygen through photosynthesis."
          },
          {
            question: "The Indian Ocean is bordered by:",
            options: ["Only Asia", "Asia, Africa, Australia, and Antarctica", "Only Europe and Africa", "Only North and South America"],
            correct: 1,
            explanation: "The Indian Ocean is bordered by Asia to the north, Africa to the west, Australia to the east, and Antarctica to the south."
          },
          {
            question: "Ocean pollution is mainly caused by:",
            options: ["Natural sea currents", "Oil spills, plastic waste, industrial discharge, and sewage", "Marine animals", "Tidal movements"],
            correct: 1,
            explanation: "Ocean pollution is mainly caused by human activities including oil spills, plastic waste dumping, industrial discharge, agricultural runoff, and untreated sewage."
          },
          {
            question: "The Exclusive Economic Zone (EEZ) extends up to:",
            options: ["12 nautical miles from the coast", "200 nautical miles from the coast", "500 nautical miles from the coast", "50 nautical miles from the coast"],
            correct: 1,
            explanation: "The Exclusive Economic Zone extends up to 200 nautical miles from a country's coast, within which the country has special rights to explore and exploit marine resources."
          },
          {
            question: "Which ocean current keeps the western coast of Europe warm?",
            options: ["Labrador Current", "North Atlantic Drift", "Benguela Current", "Peru Current"],
            correct: 1,
            explanation: "The North Atlantic Drift (an extension of the Gulf Stream) carries warm water to the western coast of Europe, keeping it warmer than other regions at similar latitudes."
          },
          {
            question: "The process by which ocean water becomes water vapour is called:",
            options: ["Condensation", "Evaporation", "Precipitation", "Transpiration"],
            correct: 1,
            explanation: "Evaporation is the process by which ocean water is heated by the Sun and turns into water vapour, which rises into the atmosphere as part of the water cycle."
          }
        ]
      },      {
        id: 11,
        name: "Life on Earth",
        description: "Biosphere, ecosystems, biodiversity, food chains, and human impact on the environment",
        questions: [
          {
            question: "The biosphere is:",
            options: ["Only the atmosphere", "The zone of life on Earth where the lithosphere, hydrosphere, and atmosphere interact", "Only the oceans", "Only the land surface"],
            correct: 1,
            explanation: "The biosphere is the zone of life on Earth, encompassing all ecosystems where the lithosphere (land), hydrosphere (water), and atmosphere (air) interact."
          },
          {
            question: "An ecosystem consists of:",
            options: ["Only living organisms", "Only non-living components", "Both living organisms and their non-living environment interacting together", "Only plants"],
            correct: 2,
            explanation: "An ecosystem is a community of living organisms (biotic) interacting with their non-living (abiotic) environment, including air, water, soil, and sunlight."
          },
          {
            question: "Which of the following is a biotic component of an ecosystem?",
            options: ["Water", "Sunlight", "Plants", "Soil"],
            correct: 2,
            explanation: "Plants are biotic (living) components of an ecosystem. Water, sunlight, and soil are abiotic (non-living) components."
          },
          {
            question: "Which of the following is an abiotic component of an ecosystem?",
            options: ["Trees", "Animals", "Temperature", "Bacteria"],
            correct: 2,
            explanation: "Temperature is an abiotic (non-living) component. Trees, animals, and bacteria are all biotic (living) components of an ecosystem."
          },
          {
            question: "Producers in a food chain are:",
            options: ["Animals that eat other animals", "Green plants that make their own food through photosynthesis", "Decomposers", "Consumers"],
            correct: 1,
            explanation: "Producers are green plants and algae that make their own food through photosynthesis, forming the base of the food chain."
          },
          {
            question: "Primary consumers are:",
            options: ["Carnivores", "Herbivores that eat plants", "Decomposers", "Top predators"],
            correct: 1,
            explanation: "Primary consumers are herbivores (plant-eating animals) that feed directly on producers (plants), forming the second level of the food chain."
          },
          {
            question: "A food chain shows:",
            options: ["How animals sleep", "The transfer of energy from one organism to another", "Only plant growth", "Weather patterns"],
            correct: 1,
            explanation: "A food chain shows the linear transfer of energy and nutrients from one organism to another, starting from producers to various levels of consumers."
          },
          {
            question: "A food web is:",
            options: ["A single food chain", "An interconnected network of multiple food chains", "A spider's web", "A type of fishing net"],
            correct: 1,
            explanation: "A food web is a complex, interconnected network of multiple food chains in an ecosystem, showing how organisms are linked through feeding relationships."
          },
          {
            question: "Decomposers are important because they:",
            options: ["Produce food through photosynthesis", "Break down dead organisms and recycle nutrients back to the soil", "Hunt other animals", "Produce oxygen"],
            correct: 1,
            explanation: "Decomposers like bacteria and fungi break down dead plants and animals, recycling nutrients back into the soil for producers to use."
          },
          {
            question: "Biodiversity refers to:",
            options: ["Only the number of animal species", "The variety of all living organisms in an ecosystem or on Earth", "Only marine life", "Only plant species"],
            correct: 1,
            explanation: "Biodiversity refers to the variety of all living organisms, including the diversity of species, genes, and ecosystems on Earth."
          },
          {
            question: "Deforestation leads to:",
            options: ["Increase in biodiversity", "Loss of habitat, soil erosion, and climate change", "More rainfall", "Improved air quality"],
            correct: 1,
            explanation: "Deforestation leads to loss of habitat for wildlife, soil erosion, disruption of the water cycle, and contributes to climate change by releasing stored carbon."
          },
          {
            question: "A terrestrial ecosystem is one that exists on:",
            options: ["Water", "Land", "In the air only", "Underground only"],
            correct: 1,
            explanation: "A terrestrial ecosystem is one that exists on land, such as forests, grasslands, deserts, and tundra."
          },
          {
            question: "An aquatic ecosystem is one that exists in:",
            options: ["Deserts", "Mountains", "Water bodies like oceans, rivers, and lakes", "Forests"],
            correct: 2,
            explanation: "An aquatic ecosystem exists in water bodies, including freshwater ecosystems (rivers, lakes, ponds) and marine ecosystems (oceans, seas, coral reefs)."
          },
          {
            question: "The tropical rainforest biome is characterised by:",
            options: ["Cold temperatures and little rainfall", "High temperatures, heavy rainfall, and high biodiversity", "Dry conditions and sparse vegetation", "Extreme cold and ice"],
            correct: 1,
            explanation: "Tropical rainforests have high temperatures and heavy rainfall year-round, supporting the highest biodiversity of any land biome."
          },
          {
            question: "Endangered species are:",
            options: ["Species that are very common", "Species that are at risk of extinction", "Species that are already extinct", "Species that are not affected by humans"],
            correct: 1,
            explanation: "Endangered species are those facing a very high risk of extinction in the wild due to factors like habitat loss, poaching, and climate change."
          },
          {
            question: "A national park is established to:",
            options: ["Build houses", "Protect and conserve wildlife and natural habitats", "Develop industries", "Create farmland"],
            correct: 1,
            explanation: "National parks are established to protect and conserve wildlife, natural habitats, and biodiversity from human interference and exploitation."
          },
          {
            question: "The energy in most ecosystems ultimately comes from:",
            options: ["Soil", "Water", "The Sun", "Wind"],
            correct: 2,
            explanation: "The Sun is the ultimate source of energy for most ecosystems. Plants capture solar energy through photosynthesis, which then flows through the food chain."
          },
          {
            question: "Which of the following is a greenhouse gas?",
            options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
            correct: 2,
            explanation: "Carbon dioxide (CO2) is a major greenhouse gas that traps heat in the atmosphere. Other greenhouse gases include methane and nitrous oxide."
          },
          {
            question: "Overgrazing by livestock can lead to:",
            options: ["Improved soil quality", "Soil degradation and desertification", "Increased forest cover", "Higher biodiversity"],
            correct: 1,
            explanation: "Overgrazing removes vegetation cover, leading to soil degradation, erosion, and eventually desertification in severe cases."
          },
          {
            question: "The ozone layer protects life on Earth by:",
            options: ["Trapping heat", "Absorbing harmful ultraviolet radiation from the Sun", "Producing oxygen", "Creating wind patterns"],
            correct: 1,
            explanation: "The ozone layer in the stratosphere absorbs most of the Sun's harmful ultraviolet (UV) radiation, protecting living organisms from its damaging effects."
          },
          {
            question: "Which of the following practices helps in conserving biodiversity?",
            options: ["Deforestation", "Poaching", "Creating wildlife sanctuaries and protected areas", "Pollution"],
            correct: 2,
            explanation: "Creating wildlife sanctuaries and protected areas helps conserve biodiversity by providing safe habitats for endangered species and natural ecosystems."
          },
          {
            question: "An omnivore is an organism that eats:",
            options: ["Only plants", "Only animals", "Both plants and animals", "Only dead matter"],
            correct: 2,
            explanation: "An omnivore is an organism that eats both plants and animals. Humans, bears, and crows are examples of omnivores."
          },
          {
            question: "The water cycle involves:",
            options: ["Only evaporation", "Evaporation, condensation, precipitation, and collection", "Only rainfall", "Only groundwater flow"],
            correct: 1,
            explanation: "The water cycle involves evaporation (water to vapour), condensation (vapour to droplets), precipitation (rain/snow), and collection (in water bodies and ground)."
          },
          {
            question: "Acid rain is caused by:",
            options: ["Excessive sunshine", "Emissions of sulphur dioxide and nitrogen oxides from burning fossil fuels", "Too much oxygen in the atmosphere", "Natural forest fires only"],
            correct: 1,
            explanation: "Acid rain is caused by emissions of sulphur dioxide (SO2) and nitrogen oxides (NOx) from burning fossil fuels, which react with water vapour in the atmosphere."
          },
          {
            question: "Sustainable development means:",
            options: ["Using all resources as fast as possible", "Meeting present needs without compromising the ability of future generations to meet their needs", "Stopping all development", "Only focusing on economic growth"],
            correct: 1,
            explanation: "Sustainable development means meeting the needs of the present generation without compromising the ability of future generations to meet their own needs."
          }
        ]
      },      {
        id: 12,
        name: "Resistance and Resilience (1000 CE–1700 CE)",
        description: "Medieval Indian history, Delhi Sultanate, Mughal Empire, Bhakti and Sufi movements, and regional kingdoms",
        questions: [
          {
            question: "The Delhi Sultanate was established in:",
            options: ["1006 CE", "1206 CE", "1306 CE", "1406 CE"],
            correct: 1,
            explanation: "The Delhi Sultanate was established in 1206 CE when Qutb-ud-din Aibak, a former slave of Muhammad of Ghor, became the first Sultan of Delhi."
          },
          {
            question: "Which of the following dynasties ruled during the Delhi Sultanate period?",
            options: ["Maurya and Gupta", "Slave, Khalji, Tughlaq, Sayyid, and Lodi", "Chola and Pallava", "Maratha and Sikh"],
            correct: 1,
            explanation: "The Delhi Sultanate comprised five dynasties: Slave (Mamluk), Khalji, Tughlaq, Sayyid, and Lodi, ruling from 1206 to 1526 CE."
          },
          {
            question: "The Qutub Minar was begun by:",
            options: ["Akbar", "Qutb-ud-din Aibak", "Alauddin Khalji", "Muhammad bin Tughlaq"],
            correct: 1,
            explanation: "The construction of Qutub Minar in Delhi was begun by Qutb-ud-din Aibak in 1193 CE and completed by his successor Iltutmish."
          },
          {
            question: "Alauddin Khalji is known for his:",
            options: ["Religious tolerance", "Market control policies and military conquests", "Building the Taj Mahal", "Naval expeditions"],
            correct: 1,
            explanation: "Alauddin Khalji is known for his strict market control policies to keep prices low and his successful military campaigns, including repelling Mongol invasions."
          },
          {
            question: "Muhammad bin Tughlaq shifted his capital from Delhi to:",
            options: ["Agra", "Daulatabad", "Lahore", "Jaunpur"],
            correct: 1,
            explanation: "Muhammad bin Tughlaq shifted his capital from Delhi to Daulatabad (Devagiri) in the Deccan, which proved disastrous and was eventually reversed."
          },
          {
            question: "The Mughal Empire in India was founded by:",
            options: ["Akbar", "Babur", "Humayun", "Shah Jahan"],
            correct: 1,
            explanation: "The Mughal Empire was founded by Babur after his victory in the First Battle of Panipat in 1526 CE, defeating Ibrahim Lodi."
          },
          {
            question: "The Battle of Panipat (1526) was fought between:",
            options: ["Akbar and Hemu", "Babur and Ibrahim Lodi", "Humayun and Sher Shah", "Aurangzeb and Shivaji"],
            correct: 1,
            explanation: "The First Battle of Panipat (1526) was fought between Babur and Ibrahim Lodi, the last Sultan of Delhi. Babur's victory established the Mughal Empire."
          },
          {
            question: "Akbar's policy of 'Sulh-i-Kul' means:",
            options: ["Divide and rule", "Universal peace and tolerance", "Military aggression", "Religious conversion"],
            correct: 1,
            explanation: "Akbar's policy of Sulh-i-Kul meant universal peace and tolerance, promoting harmony among different religious communities in his empire."
          },
          {
            question: "The Mansabdari system was introduced by:",
            options: ["Babur", "Humayun", "Akbar", "Shah Jahan"],
            correct: 2,
            explanation: "The Mansabdari system was introduced by Akbar to organise military and civil administration. It was a grading system that determined a person's rank and salary."
          },
          {
            question: "The Taj Mahal was built by:",
            options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
            correct: 2,
            explanation: "The Taj Mahal in Agra was built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It was completed around 1653 CE."
          },
          {
            question: "The Bhakti movement emphasised:",
            options: ["Rituals and ceremonies", "Personal devotion to God and equality of all humans", "Military conquest", "Trade and commerce"],
            correct: 1,
            explanation: "The Bhakti movement emphasised personal devotion to God, rejected caste discrimination, and promoted the idea that all people are equal before God."
          },
          {
            question: "Which of the following was a prominent Bhakti saint?",
            options: ["Chanakya", "Kabir", "Ashoka", "Chandragupta"],
            correct: 1,
            explanation: "Kabir was a prominent Bhakti saint who preached unity of God, rejected religious discrimination, and composed devotional poetry in simple language."
          },
          {
            question: "The Sufi movement in India promoted:",
            options: ["Military conquest", "Mystical love of God, tolerance, and spiritual purification", "Rigid orthodoxy", "Political power"],
            correct: 1,
            explanation: "The Sufi movement promoted mystical love of God, religious tolerance, spiritual purification through meditation, and service to humanity."
          },
          {
            question: "Guru Nanak Dev, the founder of Sikhism, preached:",
            options: ["Idol worship", "Caste discrimination", "One God, equality, and honest living", "Military conquest"],
            correct: 2,
            explanation: "Guru Nanak Dev preached the worship of one God, equality of all human beings, honest living, and service to the community."
          },
          {
            question: "The Vijayanagara Empire was located in:",
            options: ["North India", "South India", "East India", "West India"],
            correct: 1,
            explanation: "The Vijayanagara Empire was a powerful South Indian kingdom with its capital at Hampi (in present-day Karnataka), flourishing from 1336 to 1646 CE."
          },
          {
            question: "Krishnadevaraya was a famous ruler of the:",
            options: ["Delhi Sultanate", "Mughal Empire", "Vijayanagara Empire", "Bahmani Sultanate"],
            correct: 2,
            explanation: "Krishnadevaraya was the greatest ruler of the Vijayanagara Empire, known for his military prowess, patronage of art and literature, and efficient administration."
          },
          {
            question: "The Bahmani Sultanate was established in the:",
            options: ["North India", "Deccan region", "Northeast India", "Northwest India"],
            correct: 1,
            explanation: "The Bahmani Sultanate was established in 1347 CE in the Deccan region, covering parts of present-day Karnataka, Maharashtra, and Andhra Pradesh."
          },
          {
            question: "Shivaji Maharaj founded the:",
            options: ["Mughal Empire", "Delhi Sultanate", "Maratha Empire", "Sikh Empire"],
            correct: 2,
            explanation: "Shivaji Maharaj founded the Maratha Empire in the 17th century, establishing an independent kingdom that challenged Mughal dominance."
          },
          {
            question: "Shivaji's system of administration was known for its:",
            options: ["Foreign influence", "Efficient revenue system, strong navy, and guerrilla warfare", "Lack of organisation", "Complete dependence on Mughals"],
            correct: 1,
            explanation: "Shivaji's administration featured an efficient revenue system, a council of eight ministers (Ashtapradhan), a strong navy, and innovative guerrilla warfare tactics."
          },
          {
            question: "Mirabai was a Bhakti saint devoted to:",
            options: ["Lord Shiva", "Lord Krishna", "Goddess Durga", "Lord Rama"],
            correct: 1,
            explanation: "Mirabai was a Rajput princess and Bhakti saint who was deeply devoted to Lord Krishna and composed many devotional songs (bhajans) in his praise."
          },
          {
            question: "The Din-i-Ilahi was a new faith founded by:",
            options: ["Babur", "Akbar", "Aurangzeb", "Shah Jahan"],
            correct: 1,
            explanation: "Din-i-Ilahi (Religion of God) was founded by Emperor Akbar in 1582 CE, combining elements from various religions to promote harmony and tolerance."
          },
          {
            question: "Aurangzeb was the last great Mughal emperor. His reign saw:",
            options: ["Expansion of the empire but also its eventual decline", "Only prosperity", "Only peace", "Only artistic development"],
            correct: 0,
            explanation: "Aurangzeb expanded the Mughal Empire to its greatest extent but his long wars and religious policies also sowed seeds for its eventual decline."
          },
          {
            question: "The Rajput kingdoms were known for:",
            options: ["Naval power", "Their bravery, honour, and resistance against invaders", "Lack of military tradition", "Only trade activities"],
            correct: 1,
            explanation: "The Rajput kingdoms were known for their warrior tradition, bravery, honour (Rajput code of conduct), and fierce resistance against foreign invaders."
          },
          {
            question: "Amir Khusrau was a famous:",
            options: ["Military commander only", "Poet, musician, and scholar of the Sultanate period", "Mughal emperor", "British officer"],
            correct: 1,
            explanation: "Amir Khusrau was a renowned Sufi poet, musician, and scholar who lived during the Delhi Sultanate period and is considered the father of Qawwali."
          },
          {
            question: "The decline of the Mughal Empire after Aurangzeb led to:",
            options: ["A period of unity", "The rise of regional kingdoms and eventual European colonisation", "Immediate British rule", "Return of the Delhi Sultanate"],
            correct: 1,
            explanation: "After Aurangzeb's death in 1707, the Mughal Empire weakened rapidly, leading to the rise of regional kingdoms and eventually European colonial expansion in India."
          }
        ]
      },      {
        id: 13,
        name: "India and the World-I (1900 BCE–1200 CE)",
        description: "Indus Valley Civilisation, Vedic period, Mauryas, Guptas, and India's interactions with the world",
        questions: [
          {
            question: "The Indus Valley Civilisation flourished around:",
            options: ["5000 BCE", "2600-1900 BCE", "500 BCE", "100 CE"],
            correct: 1,
            explanation: "The Indus Valley (Harappan) Civilisation flourished approximately between 2600-1900 BCE, making it one of the oldest urban civilisations."
          },
          {
            question: "Harappa and Mohenjo-daro are located in present-day:",
            options: ["India", "Pakistan", "Afghanistan", "Bangladesh"],
            correct: 1,
            explanation: "Harappa (in Punjab) and Mohenjo-daro (in Sindh) are both located in present-day Pakistan, though many Indus Valley sites are also in India."
          },
          {
            question: "The Indus Valley Civilisation was known for its:",
            options: ["Lack of planning", "Advanced urban planning, drainage systems, and standardised weights", "Only agricultural practices", "Military conquests"],
            correct: 1,
            explanation: "The Indus Valley Civilisation was remarkable for its advanced urban planning, grid-pattern streets, sophisticated drainage systems, and standardised weights and measures."
          },
          {
            question: "The Great Bath of Mohenjo-daro was likely used for:",
            options: ["Swimming competitions", "Ritual bathing and purification", "Water storage only", "Fish farming"],
            correct: 1,
            explanation: "The Great Bath at Mohenjo-daro is believed to have been used for ritual bathing and purification ceremonies, suggesting the importance of cleanliness in their culture."
          },
          {
            question: "The script of the Indus Valley Civilisation:",
            options: ["Has been fully deciphered", "Has not been deciphered yet", "Was written in Sanskrit", "Was similar to Egyptian hieroglyphics"],
            correct: 1,
            explanation: "The Indus Valley script has not been deciphered yet. It remains one of the great mysteries of ancient history."
          },
          {
            question: "The Vedic period is associated with:",
            options: ["The Indus Valley people", "The Aryan migration and composition of the Vedas", "The Mughal Empire", "The British period"],
            correct: 1,
            explanation: "The Vedic period (1500-500 BCE) is associated with the composition of the Vedas and the development of early Hindu religious and social traditions."
          },
          {
            question: "The Rigveda is:",
            options: ["A book on mathematics", "The oldest of the four Vedas, containing hymns to gods", "A historical chronicle", "A book on medicine"],
            correct: 1,
            explanation: "The Rigveda is the oldest of the four Vedas, containing 1,028 hymns (suktas) dedicated to various deities, composed in early Sanskrit."
          },
          {
            question: "The four Vedas are:",
            options: ["Rigveda, Yajurveda, Samaveda, and Atharvaveda", "Ramayana, Mahabharata, Bhagavad Gita, and Puranas", "Arthashastra, Manusmriti, Dharmashastra, and Kamasutra", "Jataka, Tripitaka, Dhammapada, and Anguttara"],
            correct: 0,
            explanation: "The four Vedas are Rigveda (hymns), Yajurveda (rituals), Samaveda (melodies), and Atharvaveda (spells and charms)."
          },
          {
            question: "The Mauryan Empire was significant in India's interaction with the world because:",
            options: ["It had no foreign contacts", "Ashoka spread Buddhism to other countries and had diplomatic relations with Greek kingdoms", "It was isolated from the world", "It only traded with China"],
            correct: 1,
            explanation: "The Mauryan Empire had extensive foreign contacts. Ashoka sent Buddhist missionaries to Sri Lanka, Central Asia, and Southeast Asia and maintained diplomatic relations with Greek kingdoms."
          },
          {
            question: "The Silk Road connected:",
            options: ["Only India and China", "Asia, the Middle East, and Europe for trade and cultural exchange", "Only Rome and Greece", "Only India and Africa"],
            correct: 1,
            explanation: "The Silk Road was a network of trade routes connecting Asia, the Middle East, and Europe, facilitating the exchange of goods, ideas, religions, and cultures."
          },
          {
            question: "Indian traders had extensive maritime trade with:",
            options: ["Only China", "Southeast Asia, Rome, Arabia, and East Africa", "Only Britain", "Only Australia"],
            correct: 1,
            explanation: "Indian traders had extensive maritime trade with Southeast Asia, the Roman Empire, Arabia, and East Africa, exporting spices, textiles, and precious stones."
          },
          {
            question: "Buddhism spread from India to which regions?",
            options: ["Only Europe", "Southeast Asia, Central Asia, China, Japan, and Sri Lanka", "Only America", "Only Africa"],
            correct: 1,
            explanation: "Buddhism spread from India to Sri Lanka, Southeast Asia, Central Asia, China, Korea, and Japan, becoming a major world religion."
          },
          {
            question: "The Gupta period saw significant advances in:",
            options: ["Only warfare", "Mathematics, astronomy, literature, and art", "Only agriculture", "Only trade"],
            correct: 1,
            explanation: "The Gupta period witnessed remarkable achievements in mathematics (zero, decimal system), astronomy (Aryabhata), literature (Kalidasa), and art (Ajanta paintings)."
          },
          {
            question: "Indian numerals (including zero) were transmitted to the world through:",
            options: ["The British", "Arab traders and scholars", "Chinese merchants", "Greek philosophers"],
            correct: 1,
            explanation: "Indian numerals, including the concept of zero, were transmitted to the Arab world by scholars and traders, and then to Europe, which is why they are sometimes called 'Arabic numerals'."
          },
          {
            question: "The Chola dynasty had significant trade and cultural links with:",
            options: ["Only North India", "Southeast Asian countries", "Only Europe", "Only Africa"],
            correct: 1,
            explanation: "The Chola dynasty had significant maritime trade and cultural links with Southeast Asian countries, spreading Indian culture, art, and Hindu-Buddhist traditions."
          },
          {
            question: "Fa-Hien visited India during the reign of:",
            options: ["Ashoka", "Chandragupta II (Vikramaditya)", "Harsha", "Akbar"],
            correct: 1,
            explanation: "Fa-Hien (Faxian), a Chinese Buddhist pilgrim, visited India during the reign of Chandragupta II (Vikramaditya) of the Gupta dynasty, around 399-414 CE."
          },
          {
            question: "The Indus Valley people traded with:",
            options: ["No other civilisation", "Mesopotamia, Egypt, and Persia", "Only China", "Only Greece"],
            correct: 1,
            explanation: "Archaeological evidence shows the Indus Valley people had extensive trade links with Mesopotamia, Egypt, and Persia, exchanging goods like beads, metals, and textiles."
          },
          {
            question: "The concept of zero was formalised by the Indian mathematician:",
            options: ["Pythagoras", "Brahmagupta", "Euclid", "Archimedes"],
            correct: 1,
            explanation: "Brahmagupta, an Indian mathematician of the 7th century CE, was one of the first to formalise the rules for using zero in mathematical operations."
          },
          {
            question: "Taxila (Takshashila) was an ancient centre of learning located in present-day:",
            options: ["India", "Pakistan", "Nepal", "Sri Lanka"],
            correct: 1,
            explanation: "Taxila was a renowned ancient centre of learning located in present-day Pakistan, where students from across the ancient world came to study various subjects."
          },
          {
            question: "The Gandhara school of art was influenced by:",
            options: ["Chinese art", "Greek and Roman art styles", "Egyptian art", "Persian art only"],
            correct: 1,
            explanation: "The Gandhara school of art, which flourished in northwest India, was heavily influenced by Greek and Roman artistic traditions, creating Indo-Greek Buddhist sculptures."
          },
          {
            question: "Angkor Wat in Cambodia shows the influence of:",
            options: ["Chinese culture", "Indian culture and Hindu-Buddhist architecture", "European culture", "African culture"],
            correct: 1,
            explanation: "Angkor Wat, the largest religious monument in the world, reflects strong Indian cultural influence with its Hindu-Buddhist architectural styles and Sanskrit inscriptions."
          },
          {
            question: "Indian spices were in high demand in:",
            options: ["Only neighbouring countries", "The Roman Empire and later European nations", "Only China", "Only Africa"],
            correct: 1,
            explanation: "Indian spices like pepper, cardamom, and cinnamon were highly valued in the Roman Empire and later European nations, driving extensive maritime trade."
          },
          {
            question: "The Kushana dynasty, which ruled parts of India, facilitated trade on:",
            options: ["Only river routes", "The Silk Road", "Only sea routes", "Only overland routes within India"],
            correct: 1,
            explanation: "The Kushana dynasty, particularly under Kanishka, controlled key areas along the Silk Road, facilitating trade between India, Central Asia, China, and Rome."
          },
          {
            question: "Sanskrit literature like the Panchatantra influenced:",
            options: ["Only Indian culture", "Literature in many world languages through translations", "Only Chinese literature", "No other culture"],
            correct: 1,
            explanation: "The Panchatantra and other Sanskrit works were translated into Persian, Arabic, and later European languages, influencing storytelling traditions worldwide."
          },
          {
            question: "Dholavira, an important Indus Valley site, is located in:",
            options: ["Punjab", "Gujarat (India)", "Sindh", "Rajasthan"],
            correct: 1,
            explanation: "Dholavira is an important Indus Valley Civilisation site located in the Kutch district of Gujarat, India, known for its sophisticated water management system."
          }
        ]
      },      {
        id: 14,
        name: "Authority",
        description: "Concept of authority, types of authority, government institutions, and the role of the state",
        questions: [
          {
            question: "Authority refers to:",
            options: ["Physical force only", "The legitimate right to give orders and make decisions", "Wealth and money", "Popularity among people"],
            correct: 1,
            explanation: "Authority is the legitimate right or power to give orders, make decisions, and enforce obedience, derived from a recognised position or role."
          },
          {
            question: "The difference between power and authority is:",
            options: ["There is no difference", "Power is the ability to influence, while authority is the legitimate right to exercise power", "Authority is illegal, power is legal", "Power is always democratic"],
            correct: 1,
            explanation: "Power is the ability to influence others, while authority is the legitimate, recognised right to exercise that power within an institutional framework."
          },
          {
            question: "According to Max Weber, which type of authority is based on customs and traditions?",
            options: ["Legal-rational authority", "Charismatic authority", "Traditional authority", "Democratic authority"],
            correct: 2,
            explanation: "Traditional authority, as described by Max Weber, is based on long-established customs, traditions, and hereditary rights, such as monarchy."
          },
          {
            question: "Charismatic authority is based on:",
            options: ["Laws and rules", "The exceptional personal qualities of a leader", "Hereditary succession", "Military power"],
            correct: 1,
            explanation: "Charismatic authority is based on the exceptional personal qualities, charm, and appeal of a leader who inspires devotion and loyalty among followers."
          },
          {
            question: "Legal-rational authority is based on:",
            options: ["Personal charm of the leader", "Established laws, rules, and procedures", "Family traditions", "Religious texts"],
            correct: 1,
            explanation: "Legal-rational authority derives from established laws, rules, and procedures. Modern democratic governments are based on this type of authority."
          },
          {
            question: "The legislature in India is responsible for:",
            options: ["Implementing laws", "Making and passing laws", "Interpreting laws", "Enforcing law and order"],
            correct: 1,
            explanation: "The legislature (Parliament at the central level, State Legislatures at the state level) is responsible for making, debating, and passing laws."
          },
          {
            question: "The executive branch of government is responsible for:",
            options: ["Making laws", "Implementing and enforcing laws", "Interpreting laws", "Electing representatives"],
            correct: 1,
            explanation: "The executive branch is responsible for implementing and enforcing the laws passed by the legislature. It includes the President, Prime Minister, and the bureaucracy."
          },
          {
            question: "The judiciary is responsible for:",
            options: ["Making laws", "Implementing laws", "Interpreting laws and delivering justice", "Collecting taxes"],
            correct: 2,
            explanation: "The judiciary interprets laws, settles disputes, and ensures justice. It also protects fundamental rights and checks the powers of the other branches."
          },
          {
            question: "The separation of powers means:",
            options: ["One branch controls all government functions", "Government powers are divided among the legislature, executive, and judiciary", "Only the military has power", "Powers are shared between countries"],
            correct: 1,
            explanation: "Separation of powers divides government functions among three branches — legislature, executive, and judiciary — to prevent concentration of power and ensure checks and balances."
          },
          {
            question: "In India, the Prime Minister is the head of:",
            options: ["The state", "The government (executive)", "The judiciary", "The military only"],
            correct: 1,
            explanation: "The Prime Minister is the head of the government (executive branch) in India, leading the Council of Ministers and making key policy decisions."
          },
          {
            question: "The President of India is elected by:",
            options: ["Direct vote of the people", "An electoral college of elected members of Parliament and State Legislatures", "The Prime Minister", "The Supreme Court"],
            correct: 1,
            explanation: "The President of India is elected by an electoral college consisting of elected members of both houses of Parliament and State Legislative Assemblies."
          },
          {
            question: "A federal system of government divides power between:",
            options: ["The army and police", "The central government and state/regional governments", "Only local bodies", "Only the judiciary"],
            correct: 1,
            explanation: "A federal system divides governmental power between a central (national) government and state or regional governments, each with defined areas of authority."
          },
          {
            question: "A unitary system of government has:",
            options: ["Power divided between centre and states", "All power concentrated in the central government", "No government at all", "Power only with local bodies"],
            correct: 1,
            explanation: "In a unitary system, all governmental power is concentrated in the central government, which may delegate powers to local units but retains ultimate authority."
          },
          {
            question: "Accountability in government means:",
            options: ["Government officials are not answerable to anyone", "Government officials must explain and justify their actions to the people", "Only the military is accountable", "Accountability is not important in democracy"],
            correct: 1,
            explanation: "Accountability means government officials must explain and justify their actions and decisions to the people, the legislature, and other institutions."
          },
          {
            question: "The Supreme Court of India is the:",
            options: ["Lowest court in the country", "Highest court and guardian of the Constitution", "Only a civil court", "Part of the executive branch"],
            correct: 1,
            explanation: "The Supreme Court of India is the highest court in the country and serves as the guardian of the Constitution, with the power of judicial review."
          },
          {
            question: "Judicial review means:",
            options: ["Judges reviewing their own decisions", "The power of courts to examine whether laws and actions of government are constitutional", "The legislature reviewing court decisions", "Annual review of judges"],
            correct: 1,
            explanation: "Judicial review is the power of the judiciary to examine laws and government actions to determine whether they conform to the Constitution."
          },
          {
            question: "Local self-government bodies include:",
            options: ["Only Parliament", "Panchayats and Municipalities", "Only the Supreme Court", "Only the military"],
            correct: 1,
            explanation: "Local self-government bodies include Panchayati Raj institutions (rural areas) and Municipalities/Municipal Corporations (urban areas) that govern at the local level."
          },
          {
            question: "The 73rd and 74th Constitutional Amendments strengthened:",
            options: ["The military", "Panchayati Raj and urban local bodies respectively", "The Supreme Court", "The President's power"],
            correct: 1,
            explanation: "The 73rd Amendment (1992) strengthened Panchayati Raj institutions, and the 74th Amendment (1992) strengthened urban local bodies (municipalities)."
          },
          {
            question: "A constitution is important because it:",
            options: ["Has no real purpose", "Defines the structure of government, rights of citizens, and limits of governmental power", "Only lists punishments", "Is just a symbolic document"],
            correct: 1,
            explanation: "A constitution defines the structure and powers of government, establishes the rights of citizens, and sets limits on governmental authority."
          },
          {
            question: "Checks and balances in government ensure that:",
            options: ["One branch can dominate others", "Each branch can limit the powers of the other branches to prevent misuse of power", "Only the executive has power", "There are no limits on power"],
            correct: 1,
            explanation: "Checks and balances allow each branch of government to limit and review the actions of the others, preventing the concentration or misuse of power."
          },
          {
            question: "A monarchy is a form of government where:",
            options: ["People elect their leaders", "A king or queen rules, often through hereditary succession", "Military controls the government", "There is no ruler"],
            correct: 1,
            explanation: "A monarchy is a form of government where a king or queen serves as head of state, with the position usually passed down through hereditary succession."
          },
          {
            question: "Legitimacy of a government comes from:",
            options: ["Military force only", "The consent and acceptance of the governed", "Wealth of rulers", "Fear of punishment"],
            correct: 1,
            explanation: "In a democracy, the legitimacy of government comes from the consent of the people, expressed through free and fair elections."
          },
          {
            question: "The Right to Information (RTI) Act empowers citizens to:",
            options: ["Become government officials", "Access information about government activities and decisions", "Change laws themselves", "Vote in elections"],
            correct: 1,
            explanation: "The RTI Act (2005) empowers citizens to seek information from public authorities, promoting transparency and accountability in governance."
          },
          {
            question: "Decentralisation of power means:",
            options: ["Concentrating all power at the centre", "Distributing power to lower levels of government closer to the people", "Giving all power to the military", "Removing all authority"],
            correct: 1,
            explanation: "Decentralisation means distributing governmental authority and decision-making power to lower levels of government, bringing governance closer to the people."
          },
          {
            question: "The role of the state includes:",
            options: ["Only collecting taxes", "Maintaining law and order, providing public services, and protecting citizens' rights", "Only fighting wars", "Only conducting elections"],
            correct: 1,
            explanation: "The state's role includes maintaining law and order, providing public services (education, healthcare), protecting rights, managing the economy, and ensuring national security."
          }
        ]
      },      {
        id: 15,
        name: "From Ideas to Startups",
        description: "Entrepreneurship, innovation, business ideas, startup ecosystem, and economic development",
        questions: [
          {
            question: "An entrepreneur is a person who:",
            options: ["Only works for a salary", "Starts a business, takes risks, and innovates to create value", "Only invests money in banks", "Only buys products"],
            correct: 1,
            explanation: "An entrepreneur is someone who identifies opportunities, starts a business venture, takes financial risks, and innovates to create products, services, or value."
          },
          {
            question: "Innovation in business refers to:",
            options: ["Copying existing products", "Introducing new ideas, products, methods, or processes", "Avoiding all change", "Only reducing costs"],
            correct: 1,
            explanation: "Innovation means introducing new or significantly improved ideas, products, services, methods, or processes that create value for customers and society."
          },
          {
            question: "A startup is typically:",
            options: ["A large established corporation", "A newly established business venture, often technology-driven, designed to grow rapidly", "A government organisation", "A non-profit charity"],
            correct: 1,
            explanation: "A startup is a newly established business, often driven by technology and innovation, designed to grow rapidly and solve problems in new ways."
          },
          {
            question: "Which of the following is a quality of a successful entrepreneur?",
            options: ["Fear of taking risks", "Creativity and willingness to take calculated risks", "Avoiding all problems", "Following others blindly"],
            correct: 1,
            explanation: "Successful entrepreneurs are creative, willing to take calculated risks, resilient in the face of failure, and able to identify opportunities."
          },
          {
            question: "A business plan is:",
            options: ["Not necessary for any business", "A document outlining business goals, strategies, market analysis, and financial projections", "Only needed for large companies", "A government regulation"],
            correct: 1,
            explanation: "A business plan is a document that outlines the business idea, goals, target market, marketing strategy, financial projections, and operational plans."
          },
          {
            question: "The 'Startup India' initiative was launched by the Government of India to:",
            options: ["Discourage entrepreneurship", "Promote and support startups through policies, funding, and simplification of regulations", "Only support large corporations", "Increase taxes on small businesses"],
            correct: 1,
            explanation: "Startup India was launched in 2016 to build a strong ecosystem for nurturing innovation and startups through policy support, funding, and reduced regulatory burden."
          },
          {
            question: "Venture capital is:",
            options: ["A loan from a bank", "Funding provided by investors to startups and small businesses with high growth potential", "Government grant", "Personal savings only"],
            correct: 1,
            explanation: "Venture capital is funding provided by investors (venture capitalists) to startups and early-stage companies that show high growth potential, in exchange for equity."
          },
          {
            question: "A business idea should solve:",
            options: ["No problems", "A problem or fulfil an unmet need in the market", "Only the entrepreneur's personal problems", "Problems that don't exist"],
            correct: 1,
            explanation: "A good business idea should identify and solve a real problem or fulfil an unmet need in the market, creating value for customers."
          },
          {
            question: "Market research is important for a startup because it helps to:",
            options: ["Ignore customer preferences", "Understand customer needs, competition, and market trends", "Avoid all planning", "Copy competitors exactly"],
            correct: 1,
            explanation: "Market research helps entrepreneurs understand customer needs and preferences, assess competition, identify market trends, and make informed business decisions."
          },
          {
            question: "The term 'bootstrapping' in startups means:",
            options: ["Getting large bank loans", "Starting and growing a business using personal funds and revenue without external investment", "Receiving government funding", "Selling shares on the stock market"],
            correct: 1,
            explanation: "Bootstrapping means starting and growing a business using personal savings and the company's own revenue, without relying on external investors or loans."
          },
          {
            question: "An MVP (Minimum Viable Product) is:",
            options: ["The final, perfect version of a product", "A basic version of a product with core features to test the idea with early customers", "A product that is too expensive to make", "A government-approved product"],
            correct: 1,
            explanation: "An MVP is a basic version of a product with just enough features to test the business idea with early customers and gather feedback for improvement."
          },
          {
            question: "Social entrepreneurship focuses on:",
            options: ["Only making maximum profit", "Creating business solutions to social, cultural, or environmental problems", "Avoiding social issues", "Only government contracts"],
            correct: 1,
            explanation: "Social entrepreneurship uses business principles and innovation to create solutions for social, cultural, or environmental problems while being financially sustainable."
          },
          {
            question: "Intellectual property rights (IPR) protect:",
            options: ["Physical property like land", "Creations of the mind such as inventions, designs, and brand names", "Only government property", "Only agricultural products"],
            correct: 1,
            explanation: "IPR protects creations of the mind including inventions (patents), literary/artistic works (copyrights), designs, symbols, and brand names (trademarks)."
          },
          {
            question: "A patent protects:",
            options: ["A company's brand name", "An invention or new process from being copied", "A book or song", "A website design"],
            correct: 1,
            explanation: "A patent protects an invention or new process, giving the inventor exclusive rights to make, use, or sell the invention for a specified period."
          },
          {
            question: "A trademark protects:",
            options: ["An invention", "A brand name, logo, or symbol that distinguishes a product or company", "A software code", "A manufacturing process"],
            correct: 1,
            explanation: "A trademark protects brand names, logos, symbols, or slogans that distinguish a company's products or services from others in the market."
          },
          {
            question: "Crowdfunding is:",
            options: ["Funding from one large investor", "Raising small amounts of money from a large number of people, usually via the internet", "Government funding", "Bank loans"],
            correct: 1,
            explanation: "Crowdfunding involves raising small amounts of money from a large number of people, typically through online platforms, to fund a business idea or project."
          },
          {
            question: "A business incubator provides:",
            options: ["Nothing useful to startups", "Support services like workspace, mentoring, and networking to early-stage startups", "Only financial support", "Only legal advice"],
            correct: 1,
            explanation: "Business incubators provide startups with support services including workspace, mentoring, training, networking opportunities, and sometimes funding."
          },
          {
            question: "The break-even point in business is when:",
            options: ["The business makes a huge profit", "Total revenue equals total costs, and the business neither profits nor loses", "The business closes down", "The business first starts"],
            correct: 1,
            explanation: "The break-even point is when a business's total revenue equals its total costs, meaning it is neither making a profit nor incurring a loss."
          },
          {
            question: "E-commerce refers to:",
            options: ["Only physical stores", "Buying and selling goods and services over the internet", "Government commerce only", "Only wholesale trade"],
            correct: 1,
            explanation: "E-commerce refers to commercial transactions conducted electronically over the internet, including online shopping, digital payments, and online services."
          },
          {
            question: "Which of the following is an example of a successful Indian startup?",
            options: ["Tata Steel", "Flipkart", "Indian Railways", "Reserve Bank of India"],
            correct: 1,
            explanation: "Flipkart is a well-known example of a successful Indian startup, founded in 2007 as an online bookstore and growing into one of India's largest e-commerce platforms."
          },
          {
            question: "Profit in a business is calculated as:",
            options: ["Total revenue minus total costs", "Total costs minus total revenue", "Total revenue plus total costs", "Total revenue divided by total costs"],
            correct: 0,
            explanation: "Profit is calculated by subtracting total costs (expenses) from total revenue (income). If revenue exceeds costs, the business makes a profit."
          },
          {
            question: "Risk-taking is important in entrepreneurship because:",
            options: ["It always guarantees success", "Starting something new inherently involves uncertainty and potential for failure", "There is no risk in business", "Only failed businesses take risks"],
            correct: 1,
            explanation: "Risk-taking is inherent in entrepreneurship because starting a new venture involves uncertainty. Successful entrepreneurs take calculated risks after careful analysis."
          },
          {
            question: "A franchise business model involves:",
            options: ["Starting an entirely new concept", "Buying the right to use an established brand's name and business model", "Only government businesses", "Only online businesses"],
            correct: 1,
            explanation: "A franchise involves buying the right to operate a business using an established brand's name, products, and business model, such as McDonald's or Subway."
          },
          {
            question: "Self-employment means:",
            options: ["Working for a large company", "Working for oneself by running one's own business or profession", "Being unemployed", "Working for the government"],
            correct: 1,
            explanation: "Self-employment means working for oneself rather than being employed by someone else, by running one's own business, trade, or profession."
          },
          {
            question: "Entrepreneurship contributes to economic development by:",
            options: ["Increasing unemployment", "Creating jobs, driving innovation, generating wealth, and boosting economic growth", "Reducing production", "Increasing imports only"],
            correct: 1,
            explanation: "Entrepreneurship drives economic development by creating employment, fostering innovation, generating wealth, increasing competition, and contributing to GDP growth."
          }
        ]
      },      {
        id: 16,
        name: "Smart Ways to Manage Your Finances",
        description: "Financial literacy, saving, budgeting, banking, investment basics, and responsible financial behaviour",
        questions: [
          {
            question: "Financial literacy means:",
            options: ["Being able to read financial newspapers", "Having the knowledge and skills to make informed financial decisions", "Being very wealthy", "Working in a bank"],
            correct: 1,
            explanation: "Financial literacy is the ability to understand and effectively use financial skills including personal finance, budgeting, saving, investing, and managing debt."
          },
          {
            question: "A budget is:",
            options: ["A list of things to buy", "A plan for managing income and expenses over a period of time", "A bank account", "A type of loan"],
            correct: 1,
            explanation: "A budget is a financial plan that estimates income and expenses over a specific period, helping individuals or organisations manage their money effectively."
          },
          {
            question: "The primary purpose of saving money is to:",
            options: ["Show off wealth", "Set aside money for future needs, emergencies, and goals", "Avoid spending completely", "Hide money from the government"],
            correct: 1,
            explanation: "Saving money helps meet future financial needs, build an emergency fund, achieve financial goals, and provide financial security."
          },
          {
            question: "A savings account in a bank:",
            options: ["Does not earn any interest", "Earns interest on the deposited amount", "Charges fees for keeping money", "Is only for businesses"],
            correct: 1,
            explanation: "A savings account earns interest on the money deposited, though the interest rate may be relatively low compared to other investment options."
          },
          {
            question: "Compound interest means:",
            options: ["Interest earned only on the principal amount", "Interest earned on both the principal and the accumulated interest", "No interest at all", "Interest that decreases over time"],
            correct: 1,
            explanation: "Compound interest is calculated on both the initial principal and the accumulated interest from previous periods, making money grow faster over time."
          },
          {
            question: "Which of the following is a need rather than a want?",
            options: ["Latest smartphone", "Basic nutritious food", "Designer clothing", "Gaming console"],
            correct: 1,
            explanation: "Basic nutritious food is a need essential for survival, while the latest smartphone, designer clothing, and gaming consoles are wants."
          },
          {
            question: "A fixed deposit (FD) in a bank:",
            options: ["Can be withdrawn at any time without penalty", "Locks money for a fixed period at a higher interest rate than a savings account", "Earns no interest", "Is the same as a current account"],
            correct: 1,
            explanation: "A fixed deposit locks money for a predetermined period at a higher interest rate than a regular savings account. Early withdrawal may attract a penalty."
          },
          {
            question: "Insurance is important because it:",
            options: ["Makes you wealthy", "Provides financial protection against unforeseen risks and losses", "Is a way to avoid taxes", "Is required only for rich people"],
            correct: 1,
            explanation: "Insurance provides financial protection against unforeseen events like illness, accidents, or property damage by transferring the financial risk to an insurance company."
          },
          {
            question: "The Reserve Bank of India (RBI) is:",
            options: ["A private bank", "The central bank of India that regulates the banking system", "A foreign bank", "A state government bank"],
            correct: 1,
            explanation: "The RBI is India's central bank, responsible for regulating the banking system, controlling monetary policy, issuing currency, and maintaining financial stability."
          },
          {
            question: "UPI stands for:",
            options: ["Universal Payment Interface", "Unified Payments Interface", "United Payment Integration", "Unified Price Index"],
            correct: 1,
            explanation: "UPI stands for Unified Payments Interface, a real-time payment system developed by NPCI that enables instant money transfer between bank accounts via mobile phones."
          },
          {
            question: "A debit card allows you to:",
            options: ["Borrow money from the bank", "Spend money directly from your bank account", "Get unlimited credit", "Withdraw money without having an account"],
            correct: 1,
            explanation: "A debit card allows you to spend money directly from your bank account. The amount is immediately deducted from your account balance."
          },
          {
            question: "A credit card allows you to:",
            options: ["Only withdraw cash", "Buy now and pay later, essentially borrowing money from the bank", "Only check your balance", "Only save money"],
            correct: 1,
            explanation: "A credit card allows you to make purchases on credit (buy now, pay later). The bank lends you the money, which you must repay, often with interest if not paid in full."
          },
          {
            question: "The risk of using a credit card irresponsibly includes:",
            options: ["Earning too much interest", "Accumulating debt due to high interest rates on unpaid balances", "Having too much savings", "Getting free money"],
            correct: 1,
            explanation: "Irresponsible use of credit cards can lead to accumulating debt due to high interest rates on unpaid balances, leading to a cycle of debt."
          },
          {
            question: "An emergency fund should ideally cover:",
            options: ["One week of expenses", "3-6 months of living expenses", "Only one month of rent", "Only food expenses for a week"],
            correct: 1,
            explanation: "Financial experts recommend an emergency fund covering 3-6 months of living expenses to handle unexpected events like job loss, medical emergencies, or repairs."
          },
          {
            question: "Inflation affects savings by:",
            options: ["Increasing the value of money", "Reducing the purchasing power of money over time", "Having no effect", "Making money more valuable"],
            correct: 1,
            explanation: "Inflation reduces the purchasing power of money over time, meaning the same amount of money buys fewer goods and services in the future."
          },
          {
            question: "Diversification in investment means:",
            options: ["Putting all money in one investment", "Spreading investments across different types to reduce risk", "Avoiding all investments", "Only investing in gold"],
            correct: 1,
            explanation: "Diversification means spreading investments across different asset types (stocks, bonds, real estate, etc.) to reduce the risk of losing money."
          },
          {
            question: "A recurring deposit (RD) requires:",
            options: ["A one-time large deposit", "Regular monthly deposits of a fixed amount for a set period", "No deposits at all", "Withdrawals every month"],
            correct: 1,
            explanation: "A recurring deposit requires depositing a fixed amount every month for a predetermined period, earning interest similar to fixed deposits."
          },
          {
            question: "Income tax is:",
            options: ["A tax on goods purchased", "A tax levied by the government on individuals' and organisations' earnings", "A bank fee", "A type of loan"],
            correct: 1,
            explanation: "Income tax is a direct tax levied by the government on the income earned by individuals and organisations, used to fund public services and infrastructure."
          },
          {
            question: "GST (Goods and Services Tax) is:",
            options: ["A direct tax on income", "An indirect tax on the supply of goods and services", "A bank interest rate", "A type of savings scheme"],
            correct: 1,
            explanation: "GST is an indirect tax levied on the supply of goods and services in India, replacing multiple earlier indirect taxes with a unified tax system."
          },
          {
            question: "Online banking fraud can be prevented by:",
            options: ["Sharing passwords with friends", "Using strong passwords, enabling two-factor authentication, and not sharing OTPs", "Using public Wi-Fi for banking", "Clicking on unknown links in emails"],
            correct: 1,
            explanation: "Protecting yourself from online banking fraud involves using strong passwords, enabling two-factor authentication, never sharing OTPs, and avoiding suspicious links."
          },
          {
            question: "A Ponzi scheme is:",
            options: ["A legitimate investment plan", "A fraudulent scheme that pays earlier investors using money from newer investors", "A government savings plan", "A type of mutual fund"],
            correct: 1,
            explanation: "A Ponzi scheme is a fraudulent investment scam where returns to existing investors are paid using funds from new investors, rather than from legitimate profits."
          },
          {
            question: "The rule of 72 helps you estimate:",
            options: ["Your tax liability", "How long it takes for an investment to double at a given interest rate", "Your monthly expenses", "The inflation rate"],
            correct: 1,
            explanation: "The rule of 72 is a quick formula: divide 72 by the annual interest rate to estimate the number of years it takes for an investment to double."
          },
          {
            question: "KYC (Know Your Customer) in banking requires:",
            options: ["No documents", "Identity and address verification documents to open an account", "Only a phone number", "Only an email address"],
            correct: 1,
            explanation: "KYC requires customers to provide identity proof (like Aadhaar, PAN) and address proof documents to verify their identity when opening bank accounts."
          },
          {
            question: "A mutual fund is:",
            options: ["A personal savings account", "A pool of money collected from many investors to invest in diversified securities", "A government bond only", "A type of insurance"],
            correct: 1,
            explanation: "A mutual fund pools money from many investors and invests it in a diversified portfolio of stocks, bonds, or other securities, managed by professional fund managers."
          },
          {
            question: "The best financial habit for a student is to:",
            options: ["Spend everything they receive", "Track expenses, save regularly, and distinguish between needs and wants", "Borrow money frequently", "Never think about money"],
            correct: 1,
            explanation: "Good financial habits for students include tracking expenses, saving regularly, distinguishing between needs and wants, and learning about basic financial concepts."
          }
        ]
      }    ]
  },
  hindi: {
    name: "Hindi",
    color: "#ef4444",
    icon: "BookOpen",
    chapters: [
      {
        id: 1,
        name: "दो बैलों की कथा",
        description: "प्रेमचंद द्वारा रचित कहानी — दो बैलों की मित्रता, स्वतंत्रता की भावना और अन्याय के विरुद्ध संघर्ष",
        questions: [
          {
            question: "Who is the author of 'Do Bailon Ki Katha'?",
            options: ["Hazari Prasad Dwivedi", "Premchand", "Rahul Sankrityayan", "Yashpal"],
            correct: 1,
            explanation: "Premchand wrote this story as an allegory of the freedom struggle."
          },
          {
            question: "What are the names of the two bullocks in the story?",
            options: ["Sheru and Moti", "Heera and Moti", "Raja and Rani", "Bhola and Golu"],
            correct: 1,
            explanation: "The two bullocks are named Heera and Moti."
          },
          {
            question: "The story is an allegory for:",
            options: ["Love story", "The freedom struggle against British rule", "A farming manual", "Animal behaviour"],
            correct: 1,
            explanation: "The story symbolises the Indian freedom struggle through the bullocks' fight for freedom."
          },
          {
            question: "Who was the cruel owner who mistreated the bullocks?",
            options: ["Jhuri", "Gaya", "Bhola", "Ramu"],
            correct: 1,
            explanation: "Gaya was the cruel brother-in-law who mistreated Heera and Moti."
          },
          {
            question: "What quality do the bullocks primarily represent?",
            options: ["Cowardice", "Friendship and resistance", "Greed", "Laziness"],
            correct: 1,
            explanation: "The bullocks represent friendship, loyalty, and resistance against oppression."
          },
          {
            question: "Where were the bullocks taken against their will?",
            options: ["To a fair", "To Gaya's house", "To the river", "To the forest"],
            correct: 1,
            explanation: "The bullocks were sent to Gaya's house where they were mistreated."
          },
          {
            question: "The literary form of this text is:",
            options: ["Poetry", "Drama", "Short story", "Essay"],
            correct: 2,
            explanation: "Do Bailon Ki Katha is a short story (kahani) by Premchand."
          },
          {
            question: "What literary device is primarily used in this story?",
            options: ["Simile", "Metaphor", "Allegory", "Hyperbole"],
            correct: 2,
            explanation: "The entire story is an allegory where animals represent human conditions under colonial rule."
          },
          {
            question: "Jhuri is:",
            options: ["The cruel owner", "The kind original owner", "A bullock", "A neighbour"],
            correct: 1,
            explanation: "Jhuri is the kind farmer who originally owns and cares for Heera and Moti."
          },
          {
            question: "The theme of the story includes:",
            options: ["Importance of money", "Freedom, friendship, and resistance against injustice", "Education", "Science and technology"],
            correct: 1,
            explanation: "The central themes are freedom, loyalty, friendship, and standing up against oppression."
          },
          {
            question: "Premchand is considered the:",
            options: ["Father of Hindi drama", "Emperor of Hindi fiction (Upanyas Samrat)", "Father of Hindi poetry", "First Hindi novelist"],
            correct: 1,
            explanation: "Premchand is called 'Upanyas Samrat' (Emperor of Novels) for his unmatched contributions to Hindi fiction."
          },
          {
            question: "The bullocks kept running away from Gaya because they:",
            options: ["Wanted to see new places", "Were loyal to Jhuri and wanted to return home", "Were afraid of other animals", "Liked travelling"],
            correct: 1,
            explanation: "Heera and Moti repeatedly escaped because of their loyalty and desire to return to their kind master Jhuri."
          },
          {
            question: "The story is written in which language style?",
            options: ["Formal scholarly Hindi", "Simple, colloquial Hindi with rural flavour", "Urdu-heavy language", "Sanskrit-heavy language"],
            correct: 1,
            explanation: "Premchand used simple, everyday Hindi with rural expressions to make the story accessible and realistic."
          },
          {
            question: "The bullocks were once caught and sent to a:",
            options: ["Zoo", "Kaanji house (animal pound)", "Farm", "Temple"],
            correct: 1,
            explanation: "The bullocks were caught and kept in a kaanji house (animal pound) where they faced starvation."
          },
          {
            question: "The story teaches the reader that:",
            options: ["Animals cannot think", "Even animals understand the value of freedom and friendship", "Farming is easy", "Animals should be left wild"],
            correct: 1,
            explanation: "Through the bullocks, Premchand shows that the desire for freedom and bonds of friendship are universal."
          },
          {
            question: "दो बैलों की कथा के लेखक कौन हैं?",
            options: ["प्रेमचंद", "हरिशंकर परसाई", "राहुल सांकृत्यायन", "महादेवी वर्मा"],
            correct: 0,
            explanation: "दो बैलों की कथा प्रेमचंद द्वारा लिखी गई कहानी है।"
          },
          {
            question: "हीरा और मोती कौन हैं?",
            options: ["दो घोड़े", "दो बैल", "दो किसान", "दो भाई"],
            correct: 1,
            explanation: "हीरा और मोती कहानी के दो प्रमुख बैल पात्र हैं।"
          },
          {
            question: "हीरा और मोती का मालिक कौन था?",
            options: ["गया", "झूरी", "मटकू", "हरखू"],
            correct: 1,
            explanation: "झूरी हीरा और मोती का मूल मालिक था जो उनसे बहुत प्रेम करता था।"
          },
          {
            question: "झूरी की ससुराल में बैलों को कौन ले गया?",
            options: ["झूरी का भाई", "झूरी का बेटा", "झूरी की पत्नी का भाई", "झूरी का पड़ोसी"],
            correct: 2,
            explanation: "झूरी की पत्नी के भाई (साले) गया बैलों को अपने घर ले गया।"
          },
          {
            question: "कहानी में बैलों को किसका प्रतीक माना गया है?",
            options: ["शोषित वर्ग", "राजा", "व्यापारी", "पुजारी"],
            correct: 0,
            explanation: "बैल शोषित और मज़दूर वर्ग के प्रतीक हैं जो अन्याय के विरुद्ध लड़ते हैं।"
          },
          {
            question: "कांजीहौस में बैलों के साथ कौन बंद था?",
            options: ["एक गधा", "एक घोड़ा", "एक गाय", "एक बकरी"],
            correct: 0,
            explanation: "कांजीहौस में बैलों के साथ एक गधा भी बंद था।"
          },
          {
            question: "दो बैलों की कथा किस संग्रह से ली गई है?",
            options: ["मानसरोवर", "गोदान", "निर्मला", "सेवासदन"],
            correct: 0,
            explanation: "यह कहानी प्रेमचंद के कहानी संग्रह 'मानसरोवर' से ली गई है।"
          },
          {
            question: "कहानी का मुख्य संदेश क्या है?",
            options: ["धन कमाना", "स्वतंत्रता और मित्रता", "शिक्षा का महत्व", "खेती करना"],
            correct: 1,
            explanation: "कहानी का मुख्य संदेश स्वतंत्रता की भावना और सच्ची मित्रता है।"
          },
          {
            question: "बैलों ने कांजीहौस की दीवार कैसे तोड़ी?",
            options: ["पैरों से", "सींगों से", "शरीर से धक्का देकर", "कुदाल से"],
            correct: 2,
            explanation: "बैलों ने मिलकर शरीर से धक्का देकर कांजीहौस की दीवार तोड़ दी।"
          },
          {
            question: "प्रेमचंद ने इस कहानी में किस भावना को प्रमुखता दी है?",
            options: ["भय", "स्वाधीनता", "लालच", "क्रोध"],
            correct: 1,
            explanation: "प्रेमचंद ने इस कहानी में स्वाधीनता की भावना को प्रमुखता दी है।"
          }
        ]
      },
      {
        id: 2,
        name: "ल्हासा की ओर",
        description: "राहुल सांकृत्यायन का यात्रा-वृत्तांत — तिब्बत की यात्रा के अनुभव और कठिनाइयाँ",
        questions: [
          {
            question: "Who wrote 'Lhasa Ki Or'?",
            options: ["Premchand", "Rahul Sankrityayan", "Hazari Prasad Dwivedi", "Mahadevi Verma"],
            correct: 1,
            explanation: "Rahul Sankrityayan, known as the father of Hindi travel writing, wrote this travelogue."
          },
          {
            question: "Lhasa is the capital of:",
            options: ["Nepal", "Bhutan", "Tibet", "Mongolia"],
            correct: 2,
            explanation: "Lhasa is the capital city of Tibet."
          },
          {
            question: "The literary genre of this text is:",
            options: ["Short story", "Poetry", "Travelogue", "Drama"],
            correct: 2,
            explanation: "Lhasa Ki Or is a travelogue (yatra-vritant) describing the author's journey."
          },
          {
            question: "Why did the author travel disguised?",
            options: ["For fun", "Because foreigners were not allowed in Tibet", "To avoid paying taxes", "For a movie role"],
            correct: 1,
            explanation: "Foreigners were forbidden from entering Tibet, so the author had to travel in disguise."
          },
          {
            question: "Rahul Sankrityayan is known as:",
            options: ["Father of Hindi poetry", "Father of Hindi travelogue", "Father of Hindi drama", "Father of Hindi novel"],
            correct: 1,
            explanation: "Rahul Sankrityayan is regarded as the father of Hindi travel literature."
          },
          {
            question: "The journey described in the text was primarily through:",
            options: ["Deserts", "Mountains and difficult terrain", "Oceans", "Forests"],
            correct: 1,
            explanation: "The journey to Lhasa involved crossing difficult mountainous terrain."
          },
          {
            question: "The author's companion during the journey was:",
            options: ["A soldier", "A Tibetan friend named Sumati", "A British officer", "He travelled alone"],
            correct: 1,
            explanation: "Sumati was the author's Tibetan companion during the journey."
          },
          {
            question: "The text highlights the value of:",
            options: ["Wealth", "Adventure, curiosity, and cultural exploration", "Military power", "Political authority"],
            correct: 1,
            explanation: "The text celebrates the spirit of adventure, cultural curiosity, and exploration."
          },
          {
            question: "What danger did the author face during the journey?",
            options: ["Wild animals", "Being caught as an illegal traveller", "Earthquake", "Floods"],
            correct: 1,
            explanation: "The author risked being caught since foreigners were banned from entering Tibet."
          },
          {
            question: "The narrative style of the text is:",
            options: ["Third person", "First person autobiographical", "Dramatic dialogue", "Stream of consciousness"],
            correct: 1,
            explanation: "The travelogue is written in first person, narrating the author's personal experiences."
          },
          {
            question: "The author visited Tibet to study:",
            options: ["Modern technology", "Buddhist manuscripts and scriptures", "Western philosophy", "English literature"],
            correct: 1,
            explanation: "Rahul Sankrityayan visited Tibet to study ancient Buddhist texts and manuscripts."
          },
          {
            question: "The hospitality the author received in Tibet was:",
            options: ["Hostile", "Warm and generous from common Tibetans", "Only from officials", "Non-existent"],
            correct: 1,
            explanation: "Despite being an illegal traveller, the author received warm hospitality from ordinary Tibetan people."
          },
          {
            question: "The Tibetan society described by the author was:",
            options: ["Highly industrialised", "Simple, deeply religious, and bound by traditions", "Very westernised", "Chaotic and violent"],
            correct: 1,
            explanation: "The text describes Tibetan society as simple, deeply religious, and governed by age-old traditions."
          },
          {
            question: "The author crossed dangerous mountain passes which shows his:",
            options: ["Recklessness", "Spirit of adventure and dedication to knowledge", "Wealth", "Military training"],
            correct: 1,
            explanation: "The perilous journey highlights the author's extraordinary courage and passion for acquiring knowledge."
          },
          {
            question: "Rahul Sankrityayan is called 'Mahapandit' because of his:",
            options: ["Political career", "Vast knowledge spanning many languages and subjects", "Wealth", "Military service"],
            correct: 1,
            explanation: "He was called Mahapandit (great scholar) for his mastery of multiple languages and wide-ranging scholarship."
          },
          {
            question: "'ल्हासा की ओर' पाठ के लेखक कौन हैं?",
            options: ["प्रेमचंद", "राहुल सांकृत्यायन", "जाबिर हुसैन", "हज़ारी प्रसाद द्विवेदी"],
            correct: 1,
            explanation: "ल्हासा की ओर राहुल सांकृत्यायन द्वारा लिखित यात्रा वृत्तांत है।"
          },
          {
            question: "ल्हासा कहाँ स्थित है?",
            options: ["नेपाल", "चीन (तिब्बत)", "भूटान", "म्यांमार"],
            correct: 1,
            explanation: "ल्हासा तिब्बत (चीन) की राजधानी है।"
          },
          {
            question: "लेखक ने यात्रा किस वर्ष की थी?",
            options: ["1929", "1930", "1935", "1940"],
            correct: 0,
            explanation: "लेखक ने 1929 में नेपाल से तिब्बत की यात्रा की थी।"
          },
          {
            question: "लेखक के साथ यात्रा में कौन था?",
            options: ["सुमति", "रामचंद्र", "प्रेमचंद", "विनोद"],
            correct: 0,
            explanation: "लेखक के साथ सुमति नामक बौद्ध भिक्षु यात्रा में था।"
          },
          {
            question: "तिब्बत में भिखारी को क्या कहा जाता है?",
            options: ["फकीर", "संन्यासी", "भिक्षु", "कुसंग-कुसुंग"],
            correct: 3,
            explanation: "तिब्बत में भिखारियों को कुसंग-कुसुंग कहा जाता है।"
          },
          {
            question: "तिब्बत में स्त्रियों की क्या स्थिति बताई गई है?",
            options: ["बहुत दयनीय", "बहुत स्वतंत्र", "पूर्णतः निर्भर", "शिक्षा से वंचित"],
            correct: 1,
            explanation: "तिब्बत में स्त्रियाँ बहुत स्वतंत्र थीं और अजनबियों से भी खुलकर बात करती थीं।"
          },
          {
            question: "लेखक को डाकुओं से बचने के लिए क्या करना पड़ा?",
            options: ["भागना पड़ा", "भिक्षु का वेश बनाना पड़ा", "छिपना पड़ा", "लड़ना पड़ा"],
            correct: 2,
            explanation: "लेखक को डाकुओं से बचने के लिए छिपकर यात्रा करनी पड़ी।"
          },
          {
            question: "ल्हासा की ओर पाठ किस विधा में है?",
            options: ["कहानी", "निबंध", "यात्रा वृत्तांत", "कविता"],
            correct: 2,
            explanation: "ल्हासा की ओर एक यात्रा वृत्तांत है।"
          },
          {
            question: "तिब्बत में जाति-पाँति के बारे में क्या कहा गया है?",
            options: ["बहुत कठोर है", "कोई भेदभाव नहीं है", "केवल ऊँची जाति को महत्व", "जाति प्रथा सख्त है"],
            correct: 1,
            explanation: "तिब्बत में जाति-पाँति का कोई भेदभाव नहीं था।"
          },
          {
            question: "लंकोर में लेखक ने क्या देखा?",
            options: ["एक मंदिर", "एक सुंदर झील", "चीनी सैनिक", "हरे-भरे मैदान"],
            correct: 1,
            explanation: "लंकोर में लेखक ने एक सुंदर झील देखी जिसका वर्णन उन्होंने किया।"
          }
        ]
      },
      {
        id: 3,
        name: "रीढ़ की हड्डी",
        description: "जगदीश चंद्र माथुर का एकांकी — दहेज प्रथा, स्त्री शिक्षा और सामाजिक रूढ़ियों पर व्यंग्य",
        questions: [
          {
            question: "'रीढ़ की हड्डी' एकांकी के लेखक कौन हैं?",
            options: ["मोहन राकेश", "जगदीश चंद्र माथुर", "भारतेंदु हरिश्चंद्र", "धर्मवीर भारती"],
            correct: 1,
            explanation: "'रीढ़ की हड्डी' एकांकी के रचनाकार जगदीश चंद्र माथुर हैं।"
          },
          {
            question: "'रीढ़ की हड्डी' किस विधा में लिखा गया है?",
            options: ["कहानी", "निबंध", "एकांकी (नाटक)", "कविता"],
            correct: 2,
            explanation: "'रीढ़ की हड्डी' एक एकांकी (एक अंक वाला नाटक) है।"
          },
          {
            question: "इस एकांकी का मुख्य विषय क्या है?",
            options: ["देशभक्ति", "दहेज प्रथा और स्त्री शिक्षा", "प्रकृति वर्णन", "ग्रामीण जीवन"],
            correct: 1,
            explanation: "इस एकांकी का मुख्य विषय दहेज प्रथा, स्त्री शिक्षा और सामाजिक रूढ़ियों पर व्यंग्य है।"
          },
          {
            question: "एकांकी में लड़की का नाम क्या है?",
            options: ["कमला", "उमा", "सरला", "गीता"],
            correct: 1,
            explanation: "एकांकी में लड़की का नाम उमा है जो शिक्षित और आत्मनिर्भर है।"
          },
          {
            question: "उमा के पिता का नाम क्या है?",
            options: ["रामस्वरूप", "शंकर", "गोपाल प्रसाद", "प्रेमचंद"],
            correct: 0,
            explanation: "उमा के पिता का नाम रामस्वरूप है।"
          },
          {
            question: "लड़के के पिता का नाम क्या है?",
            options: ["रामस्वरूप", "गोपाल प्रसाद", "हरिप्रसाद", "शंकर"],
            correct: 1,
            explanation: "लड़के के पिता गोपाल प्रसाद हैं जो रूढ़िवादी सोच रखते हैं।"
          },
          {
            question: "गोपाल प्रसाद लड़की में क्या देखना चाहते हैं?",
            options: ["शिक्षा और बुद्धि", "सुंदरता और घरेलू गुण", "खेलकूद", "नौकरी"],
            correct: 1,
            explanation: "गोपाल प्रसाद लड़की में केवल सुंदरता और घरेलू गुण देखना चाहते हैं, शिक्षा नहीं।"
          },
          {
            question: "रामस्वरूप ने उमा की शिक्षा के बारे में क्या छिपाया?",
            options: ["कि उमा पढ़ी-लिखी नहीं है", "कि उमा बी.ए. पास है", "कि उमा विदेश में पढ़ी है", "कि उमा को हिंदी नहीं आती"],
            correct: 1,
            explanation: "रामस्वरूप ने गोपाल प्रसाद से उमा की उच्च शिक्षा (बी.ए.) की बात छिपाई।"
          },
          {
            question: "गोपाल प्रसाद शिक्षित लड़की को क्यों नहीं चाहते?",
            options: ["पढ़ी-लिखी लड़की से डरते हैं", "उन्हें लगता है पढ़ी-लिखी लड़की घर नहीं सँभालती", "शिक्षा महँगी होती है", "उनका बेटा अनपढ़ है"],
            correct: 1,
            explanation: "गोपाल प्रसाद की रूढ़िवादी सोच है कि पढ़ी-लिखी लड़की घर ठीक से नहीं सँभाल सकती।"
          },
          {
            question: "लड़के (शंकर) के बारे में क्या सच सामने आता है?",
            options: ["वह बहुत होशियार है", "वह फेल हो चुका है और उसकी रीढ़ की हड्डी में दोष है", "वह विदेश में पढ़ा है", "वह बहुत अमीर है"],
            correct: 1,
            explanation: "शंकर परीक्षा में फेल हो चुका है और उसकी रीढ़ की हड्डी में शारीरिक दोष है।"
          },
          {
            question: "'रीढ़ की हड्डी' शीर्षक का प्रतीकात्मक अर्थ क्या है?",
            options: ["शारीरिक बीमारी", "आत्मसम्मान और दृढ़ता", "खेलकूद", "चिकित्सा विज्ञान"],
            correct: 1,
            explanation: "'रीढ़ की हड्डी' आत्मसम्मान, दृढ़ता और नैतिक साहस का प्रतीक है।"
          },
          {
            question: "उमा ने अंत में क्या किया?",
            options: ["चुपचाप शादी मान ली", "गोपाल प्रसाद की रूढ़िवादी सोच का विरोध किया", "घर छोड़ दिया", "रो पड़ी"],
            correct: 1,
            explanation: "उमा ने साहसपूर्वक गोपाल प्रसाद की स्त्री-विरोधी सोच का डटकर विरोध किया।"
          },
          {
            question: "एकांकी में किस सामाजिक बुराई पर व्यंग्य किया गया है?",
            options: ["जातिवाद", "दहेज प्रथा और स्त्री शिक्षा के प्रति पूर्वाग्रह", "भ्रष्टाचार", "बेरोज़गारी"],
            correct: 1,
            explanation: "एकांकी दहेज प्रथा और लड़कियों की शिक्षा के प्रति समाज के पूर्वाग्रह पर व्यंग्य करता है।"
          },
          {
            question: "गोपाल प्रसाद का चरित्र किसका प्रतिनिधित्व करता है?",
            options: ["प्रगतिशील समाज", "रूढ़िवादी और पितृसत्तात्मक सोच", "आधुनिक विचारधारा", "क्रांतिकारी सोच"],
            correct: 1,
            explanation: "गोपाल प्रसाद रूढ़िवादी पितृसत्तात्मक समाज का प्रतिनिधित्व करते हैं।"
          },
          {
            question: "उमा का चरित्र किसका प्रतीक है?",
            options: ["कमज़ोर स्त्री", "शिक्षित और आत्मनिर्भर नारी", "अनपढ़ लड़की", "विदेशी महिला"],
            correct: 1,
            explanation: "उमा शिक्षित, आत्मनिर्भर और अपने अधिकारों के प्रति सजग नारी का प्रतीक है।"
          },
          {
            question: "एकांकी का संदेश क्या है?",
            options: ["लड़कियों को पढ़ाना व्यर्थ है", "स्त्री शिक्षा आवश्यक है और दहेज प्रथा समाप्त होनी चाहिए", "विवाह ही सबकुछ है", "पैसा सबसे ज़रूरी है"],
            correct: 1,
            explanation: "एकांकी का संदेश है कि स्त्री शिक्षा अनिवार्य है और दहेज जैसी कुरीतियाँ समाप्त होनी चाहिए।"
          },
          {
            question: "'एकांकी' विधा की क्या विशेषता है?",
            options: ["इसमें कई अंक होते हैं", "इसमें केवल एक अंक होता है", "यह गद्य नहीं होता", "इसमें कोई पात्र नहीं होता"],
            correct: 1,
            explanation: "एकांकी नाटक की वह विधा है जिसमें केवल एक अंक (एक दृश्य) होता है।"
          },
          {
            question: "रामस्वरूप ने उमा का चश्मा क्यों उतरवाया?",
            options: ["डॉक्टर ने कहा", "ताकि लड़के वाले को पता न चले कि उमा पढ़ती है", "चश्मा टूट गया था", "उमा की नज़र ठीक हो गई"],
            correct: 1,
            explanation: "रामस्वरूप ने चश्मा इसलिए उतरवाया ताकि गोपाल प्रसाद को उमा की पढ़ाई का अंदाज़ा न हो।"
          },
          {
            question: "एकांकी में 'रीढ़ की हड्डी' न होने का क्या अर्थ है?",
            options: ["बीमार होना", "आत्मसम्मान और नैतिक साहस का अभाव", "कमज़ोर शरीर", "गरीबी"],
            correct: 1,
            explanation: "रीढ़ की हड्डी न होने का अर्थ है आत्मसम्मान और नैतिक दृढ़ता का अभाव।"
          },
          {
            question: "गोपाल प्रसाद लड़की की परीक्षा किस प्रकार लेते हैं?",
            options: ["लिखित परीक्षा", "उमा से गाना गाने और चलने-फिरने को कहते हैं", "खाना बनवाते हैं", "खेल खिलवाते हैं"],
            correct: 1,
            explanation: "गोपाल प्रसाद उमा को गाना गाने और चलकर दिखाने को कहते हैं, जैसे कोई वस्तु परख रहे हों।"
          },
          {
            question: "एकांकी की भाषा शैली कैसी है?",
            options: ["गंभीर और दार्शनिक", "व्यंग्यात्मक और संवादात्मक", "काव्यात्मक", "तकनीकी"],
            correct: 1,
            explanation: "एकांकी की भाषा व्यंग्यात्मक और संवादात्मक है जो समाज की विसंगतियों को उजागर करती है।"
          },
          {
            question: "शंकर का व्यवहार कैसा है?",
            options: ["बहुत साहसी", "दब्बू और पिता के कहे अनुसार चलने वाला", "क्रांतिकारी", "विद्रोही"],
            correct: 1,
            explanation: "शंकर दब्बू है और अपने पिता गोपाल प्रसाद के कहे अनुसार चलता है।"
          },
          {
            question: "इस एकांकी में किस रस की प्रधानता है?",
            options: ["श्रृंगार रस", "हास्य-व्यंग्य रस", "वीर रस", "करुण रस"],
            correct: 1,
            explanation: "एकांकी में हास्य-व्यंग्य रस की प्रधानता है।"
          },
          {
            question: "एकांकी किस काल की सामाजिक समस्याओं को दर्शाता है?",
            options: ["प्राचीन काल", "मध्यकालीन", "स्वतंत्रता के बाद का भारतीय समाज", "भविष्य का समाज"],
            correct: 2,
            explanation: "एकांकी स्वतंत्रता के बाद के भारतीय समाज में व्याप्त दहेज प्रथा जैसी कुरीतियों को दर्शाता है।"
          },
          {
            question: "जगदीश चंद्र माथुर किस क्षेत्र के प्रमुख साहित्यकार हैं?",
            options: ["कविता", "उपन्यास", "हिंदी नाटक और एकांकी", "यात्रा वृत्तांत"],
            correct: 2,
            explanation: "जगदीश चंद्र माथुर हिंदी नाटक और एकांकी विधा के प्रमुख साहित्यकार हैं।"
          }
        ]
      },
      {
        id: 4,
        name: "क्या लिखूँ?",
        description: "लेखक की आत्मकथात्मक शैली — लेखन की चुनौतियाँ, रचनात्मकता और साहित्यिक दृष्टिकोण",
        questions: [
          {
            question: "'क्या लिखूँ?' पाठ के लेखक कौन हैं?",
            options: ["प्रेमचंद", "पदुमलाल पुन्नालाल बख्शी", "हज़ारी प्रसाद द्विवेदी", "रामचंद्र शुक्ल"],
            correct: 1,
            explanation: "'क्या लिखूँ?' पाठ के लेखक पदुमलाल पुन्नालाल बख्शी हैं।"
          },
          {
            question: "यह पाठ किस विधा में लिखा गया है?",
            options: ["कहानी", "निबंध (ललित निबंध)", "कविता", "नाटक"],
            correct: 1,
            explanation: "यह एक ललित निबंध है जिसमें लेखक ने आत्मकथात्मक शैली का प्रयोग किया है।"
          },
          {
            question: "लेखक को लिखने में क्या कठिनाई होती है?",
            options: ["भाषा नहीं आती", "विषय चयन की समस्या — क्या लिखें, क्या छोड़ें", "कागज़ नहीं मिलता", "समय नहीं मिलता"],
            correct: 1,
            explanation: "लेखक को विषय चयन की दुविधा होती है — इतना कुछ है कि क्या लिखें और क्या न लिखें।"
          },
          {
            question: "लेखक के अनुसार साहित्य का उद्देश्य क्या है?",
            options: ["केवल मनोरंजन", "समाज का चित्रण और मानवीय संवेदनाओं की अभिव्यक्ति", "धन कमाना", "प्रसिद्धि पाना"],
            correct: 1,
            explanation: "लेखक साहित्य का उद्देश्य समाज का यथार्थ चित्रण और मानवीय भावनाओं की अभिव्यक्ति मानते हैं।"
          },
          {
            question: "'ललित निबंध' की प्रमुख विशेषता क्या है?",
            options: ["केवल तथ्य प्रस्तुत करना", "व्यक्तिगत अनुभव, भावात्मकता और साहित्यिक सौंदर्य", "वैज्ञानिक शोध", "राजनीतिक विश्लेषण"],
            correct: 1,
            explanation: "ललित निबंध में व्यक्तिगत अनुभव, भावात्मकता और भाषा का साहित्यिक सौंदर्य होता है।"
          },
          {
            question: "लेखक ने किस शैली में लेखन किया है?",
            options: ["वर्णनात्मक", "आत्मकथात्मक और चिंतनशील", "नाटकीय", "पत्र शैली"],
            correct: 1,
            explanation: "लेखक ने आत्मकथात्मक और चिंतनशील शैली में इस निबंध की रचना की है।"
          },
          {
            question: "पदुमलाल पुन्नालाल बख्शी किस युग के साहित्यकार हैं?",
            options: ["भक्तिकाल", "रीतिकाल", "आधुनिक काल (छायावाद युग)", "वैदिक काल"],
            correct: 2,
            explanation: "बख्शी जी आधुनिक काल (छायावाद युग) के प्रसिद्ध निबंधकार हैं।"
          },
          {
            question: "लेखक के मन में लेखन को लेकर कौन-सा भाव प्रमुख है?",
            options: ["घमंड", "द्वंद्व और अंतर्द्वंद्व", "उदासीनता", "क्रोध"],
            correct: 1,
            explanation: "लेखक के मन में लेखन को लेकर सदैव द्वंद्व और अंतर्द्वंद्व बना रहता है।"
          },
          {
            question: "'क्या लिखूँ?' शीर्षक में कौन-सा भाव छिपा है?",
            options: ["आत्मविश्वास", "लेखन की दुविधा और रचनात्मक संघर्ष", "अहंकार", "निराशा"],
            correct: 1,
            explanation: "शीर्षक में लेखन की दुविधा और रचनात्मक प्रक्रिया के संघर्ष का भाव छिपा है।"
          },
          {
            question: "लेखक के अनुसार अच्छे लेखन के लिए क्या आवश्यक है?",
            options: ["केवल भाषा ज्ञान", "अनुभव, संवेदनशीलता और सच्चाई", "धन", "प्रसिद्धि"],
            correct: 1,
            explanation: "अच्छे लेखन के लिए जीवन का अनुभव, संवेदनशीलता और सत्य का प्रतिबिंबन आवश्यक है।"
          },
          {
            question: "निबंध में लेखक ने किस समस्या पर चिंतन किया है?",
            options: ["राजनीतिक समस्या", "रचनात्मकता और लेखन की चुनौतियाँ", "आर्थिक समस्या", "पर्यावरण"],
            correct: 1,
            explanation: "लेखक ने रचनात्मकता, लेखन प्रक्रिया और साहित्यिक अभिव्यक्ति की चुनौतियों पर चिंतन किया है।"
          },
          {
            question: "'आत्मकथात्मक शैली' का अर्थ क्या है?",
            options: ["दूसरों के बारे में लिखना", "स्वयं के अनुभवों को आधार बनाकर लिखना", "काल्पनिक कहानी", "समाचार लेखन"],
            correct: 1,
            explanation: "आत्मकथात्मक शैली में लेखक अपने निजी अनुभवों और विचारों को आधार बनाकर लिखता है।"
          },
          {
            question: "लेखक ने 'लिखना' क्रिया को किससे जोड़ा है?",
            options: ["व्यापार से", "जीवन जीने और अनुभव करने से", "खेलकूद से", "यात्रा से"],
            correct: 1,
            explanation: "लेखक ने लिखने की प्रक्रिया को जीवन जीने, अनुभव करने और महसूस करने से जोड़ा है।"
          },
          {
            question: "निबंध की भाषा कैसी है?",
            options: ["कठिन और क्लिष्ट", "सरल, सहज और भावपूर्ण", "अंग्रेज़ी मिश्रित", "तकनीकी"],
            correct: 1,
            explanation: "निबंध की भाषा सरल, सहज और भावपूर्ण है।"
          },
          {
            question: "लेखक के अनुसार साहित्यकार का दायित्व क्या है?",
            options: ["केवल कल्पना करना", "समाज का दर्पण बनना और सत्य को प्रकट करना", "राजनीति करना", "व्यापार करना"],
            correct: 1,
            explanation: "लेखक के अनुसार साहित्यकार का दायित्व समाज का दर्पण बनना और यथार्थ को उजागर करना है।"
          },
          {
            question: "इस पाठ में किस रस की प्रधानता है?",
            options: ["वीर रस", "शांत रस और चिंतन", "श्रृंगार रस", "भयानक रस"],
            correct: 1,
            explanation: "इस पाठ में शांत रस और चिंतनशीलता की प्रधानता है।"
          },
          {
            question: "लेखक ने लेखन को किसकी संज्ञा दी है?",
            options: ["खेल", "एक साधना और तपस्या", "व्यापार", "मनोरंजन"],
            correct: 1,
            explanation: "लेखक ने लेखन को एक साधना और तपस्या के समान बताया है।"
          },
          {
            question: "बख्शी जी की लेखन शैली की विशेषता क्या है?",
            options: ["हास्य", "विचारात्मक गहराई और भावात्मक अभिव्यक्ति", "व्यंग्य", "रोमांच"],
            correct: 1,
            explanation: "बख्शी जी की शैली में विचारात्मक गहराई और भावात्मक अभिव्यक्ति का सुंदर मिश्रण है।"
          },
          {
            question: "निबंध में 'क्या लिखूँ?' प्रश्न किसके द्वंद्व को दर्शाता है?",
            options: ["पाठक का", "लेखक का आंतरिक द्वंद्व", "संपादक का", "प्रकाशक का"],
            correct: 1,
            explanation: "यह प्रश्न लेखक के आंतरिक रचनात्मक द्वंद्व को दर्शाता है।"
          },
          {
            question: "लेखक को जीवन में क्या अनुभव हुआ?",
            options: ["जीवन सरल है", "जीवन जटिल है और इसे शब्दों में बाँधना कठिन है", "जीवन बोरिंग है", "जीवन में कुछ नहीं होता"],
            correct: 1,
            explanation: "लेखक का अनुभव है कि जीवन बहुत जटिल है और उसे शब्दों में पूरी तरह व्यक्त करना कठिन है।"
          },
          {
            question: "इस पाठ से क्या शिक्षा मिलती है?",
            options: ["लिखना आसान है", "लेखन एक गंभीर और ज़िम्मेदारी भरी प्रक्रिया है", "लिखना समय की बर्बादी है", "केवल प्रसिद्ध लोग लिखें"],
            correct: 1,
            explanation: "पाठ यह शिक्षा देता है कि लेखन एक गंभीर, ज़िम्मेदारी भरी और सतत साधना की प्रक्रिया है।"
          },
          {
            question: "'निबंध' शब्द का शाब्दिक अर्थ क्या है?",
            options: ["बंधन", "निश्चित रूप से बँधा हुआ (नि + बंध)", "मुक्त लेखन", "कविता"],
            correct: 1,
            explanation: "'निबंध' का शाब्दिक अर्थ है 'जो निश्चित रूप से बँधा हुआ हो' — अर्थात विचारों का क्रमबद्ध प्रस्तुतीकरण।"
          },
          {
            question: "लेखक के लिए लेखन कार्य में सबसे बड़ी बाधा क्या है?",
            options: ["आलस्य", "विषयों की अधिकता और चयन की दुविधा", "पैसे की कमी", "आलोचना का भय"],
            correct: 1,
            explanation: "लेखक के लिए सबसे बड़ी बाधा यह है कि विषय इतने अधिक हैं कि किसे चुनें, यह तय करना कठिन है।"
          },
          {
            question: "बख्शी जी को किस पत्रिका का संपादक माना जाता है?",
            options: ["हंस", "सरस्वती", "धर्मयुग", "कादंबिनी"],
            correct: 1,
            explanation: "पदुमलाल पुन्नालाल बख्शी सरस्वती पत्रिका के संपादक रहे।"
          },
          {
            question: "लेखक के अनुसार रचना का जन्म कैसे होता है?",
            options: ["मशीनी ढंग से", "अनुभव और संवेदना के गहरे मंथन से", "नकल करने से", "केवल कल्पना से"],
            correct: 1,
            explanation: "लेखक के अनुसार रचना का जन्म अनुभव और संवेदना के गहरे मंथन से होता है, यह यांत्रिक प्रक्रिया नहीं है।"
          }
        ]
      },
      {
        id: 5,
        name: "मैं और मेरा देश",
        description: "देशभक्ति, राष्ट्रीय एकता और भारतीय नागरिक की जिम्मेदारियों पर निबंधात्मक पाठ",
        questions: [
          {
            question: "'मैं और मेरा देश' पाठ का मुख्य विषय क्या है?",
            options: ["यात्रा वर्णन", "देशभक्ति, राष्ट्रीय एकता और नागरिक कर्तव्य", "प्रेम कहानी", "विज्ञान"],
            correct: 1,
            explanation: "इस पाठ का मुख्य विषय देशभक्ति, राष्ट्रीय एकता और नागरिक की ज़िम्मेदारियाँ हैं।"
          },
          {
            question: "यह पाठ किस विधा में लिखा गया है?",
            options: ["कहानी", "निबंध", "कविता", "नाटक"],
            correct: 1,
            explanation: "यह एक निबंधात्मक पाठ है।"
          },
          {
            question: "पाठ में 'देश' शब्द से क्या तात्पर्य है?",
            options: ["केवल ज़मीन", "भौगोलिक सीमा, संस्कृति, लोग और मूल्य", "केवल सरकार", "केवल सेना"],
            correct: 1,
            explanation: "देश केवल भौगोलिक सीमा नहीं है, बल्कि उसकी संस्कृति, लोग और मूल्य भी इसमें शामिल हैं।"
          },
          {
            question: "एक अच्छे नागरिक का प्रमुख कर्तव्य क्या है?",
            options: ["केवल कर देना", "देश के विकास में योगदान देना और कानूनों का पालन करना", "विदेश जाना", "केवल अपना काम करना"],
            correct: 1,
            explanation: "अच्छे नागरिक का कर्तव्य देश के विकास में सक्रिय भागीदारी और कानूनों का सम्मान करना है।"
          },
          {
            question: "पाठ में राष्ट्रीय एकता से क्या तात्पर्य है?",
            options: ["सभी लोग एक जैसे हों", "विभिन्न धर्म, भाषा, संस्कृति के लोग मिलकर रहें", "केवल एक भाषा बोलना", "एक ही धर्म मानना"],
            correct: 1,
            explanation: "राष्ट्रीय एकता का अर्थ है कि विभिन्न धर्म, भाषा और संस्कृति के लोग मिलजुलकर एक राष्ट्र के रूप में रहें।"
          },
          {
            question: "भारत की विविधता में एकता का क्या अर्थ है?",
            options: ["सभी एक ही भाषा बोलते हैं", "विभिन्नताओं के बावजूद राष्ट्रीय भावना से एक होना", "कोई विविधता नहीं है", "केवल शहरी एकता"],
            correct: 1,
            explanation: "भारत में अनेक भाषाएँ, धर्म और संस्कृतियाँ हैं, फिर भी राष्ट्रीय भावना से सब एक हैं।"
          },
          {
            question: "देश के प्रति नागरिक की जिम्मेदारी में क्या शामिल नहीं है?",
            options: ["कर चुकाना", "मतदान करना", "भ्रष्टाचार फैलाना", "सार्वजनिक संपत्ति की रक्षा"],
            correct: 2,
            explanation: "भ्रष्टाचार फैलाना नागरिक की ज़िम्मेदारी नहीं बल्कि एक अपराध है।"
          },
          {
            question: "स्वतंत्रता दिवस कब मनाया जाता है?",
            options: ["26 जनवरी", "15 अगस्त", "2 अक्टूबर", "14 नवंबर"],
            correct: 1,
            explanation: "भारत का स्वतंत्रता दिवस प्रतिवर्ष 15 अगस्त को मनाया जाता है।"
          },
          {
            question: "गणतंत्र दिवस कब मनाया जाता है?",
            options: ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "5 सितंबर"],
            correct: 1,
            explanation: "भारत का गणतंत्र दिवस 26 जनवरी को मनाया जाता है जब संविधान लागू हुआ था।"
          },
          {
            question: "पाठ के अनुसार देशभक्ति का सही अर्थ क्या है?",
            options: ["केवल नारे लगाना", "देश के हित में सोचना, काम करना और कर्तव्यों का पालन", "दूसरे देशों से नफ़रत करना", "केवल झंडा फहराना"],
            correct: 1,
            explanation: "सच्ची देशभक्ति का अर्थ है देश के हित में सोचना, काम करना और अपने कर्तव्यों का ईमानदारी से पालन करना।"
          },
          {
            question: "भारतीय संविधान नागरिकों को क्या प्रदान करता है?",
            options: ["केवल अधिकार", "अधिकार और कर्तव्य दोनों", "केवल कर्तव्य", "कोई अधिकार नहीं"],
            correct: 1,
            explanation: "भारतीय संविधान नागरिकों को मौलिक अधिकार और मौलिक कर्तव्य दोनों प्रदान करता है।"
          },
          {
            question: "पाठ में किस भावना को बढ़ावा दिया गया है?",
            options: ["स्वार्थ", "राष्ट्रप्रेम और सामाजिक उत्तरदायित्व", "व्यक्तिवाद", "भौतिकवाद"],
            correct: 1,
            explanation: "पाठ में राष्ट्रप्रेम और सामाजिक उत्तरदायित्व की भावना को बढ़ावा दिया गया है।"
          },
          {
            question: "'मौलिक कर्तव्य' संविधान के किस भाग में हैं?",
            options: ["भाग 3", "भाग 4-क", "भाग 5", "भाग 1"],
            correct: 1,
            explanation: "मौलिक कर्तव्य भारतीय संविधान के भाग 4-क (अनुच्छेद 51-क) में वर्णित हैं।"
          },
          {
            question: "देश की प्रगति में सबसे बड़ी बाधा क्या है?",
            options: ["शिक्षा", "भ्रष्टाचार और अनुशासनहीनता", "कृषि", "उद्योग"],
            correct: 1,
            explanation: "भ्रष्टाचार और अनुशासनहीनता देश की प्रगति में सबसे बड़ी बाधा हैं।"
          },
          {
            question: "पाठ के अनुसार युवाओं का क्या कर्तव्य है?",
            options: ["केवल पढ़ाई", "देश के विकास में सक्रिय भागीदारी और सामाजिक जागरूकता", "केवल नौकरी", "विदेश जाना"],
            correct: 1,
            explanation: "युवाओं का कर्तव्य देश के विकास में सक्रिय भाग लेना और सामाजिक जागरूकता फैलाना है।"
          },
          {
            question: "राष्ट्रीय ध्वज 'तिरंगा' में कितने रंग हैं?",
            options: ["दो", "तीन", "चार", "पाँच"],
            correct: 1,
            explanation: "भारतीय राष्ट्रीय ध्वज तिरंगे में तीन रंग हैं — केसरिया, सफ़ेद और हरा।"
          },
          {
            question: "भारत का राष्ट्रीय गान कौन-सा है?",
            options: ["वंदे मातरम्", "जन गण मन", "सारे जहाँ से अच्छा", "हम होंगे कामयाब"],
            correct: 1,
            explanation: "भारत का राष्ट्रीय गान 'जन गण मन' है, जो रवींद्रनाथ टैगोर ने लिखा।"
          },
          {
            question: "पाठ में 'मैं' शब्द किसका प्रतीक है?",
            options: ["केवल लेखक", "प्रत्येक भारतीय नागरिक", "केवल सैनिक", "केवल नेता"],
            correct: 1,
            explanation: "'मैं' शब्द प्रत्येक भारतीय नागरिक का प्रतीक है जिसकी देश के प्रति ज़िम्मेदारी है।"
          },
          {
            question: "पाठ की भाषा कैसी है?",
            options: ["क्लिष्ट संस्कृतनिष्ठ", "सरल, प्रेरणादायक और बोधगम्य", "अंग्रेज़ी मिश्रित", "ग्रामीण बोली"],
            correct: 1,
            explanation: "पाठ की भाषा सरल, प्रेरणादायक और सबके लिए बोधगम्य है।"
          },
          {
            question: "पाठ का मुख्य संदेश क्या है?",
            options: ["देश दूसरों की ज़िम्मेदारी है", "हर नागरिक का देश के प्रति कर्तव्य है और राष्ट्र निर्माण में भागीदारी ज़रूरी है", "केवल सरकार ज़िम्मेदार है", "देश से कोई लेना-देना नहीं"],
            correct: 1,
            explanation: "पाठ का संदेश है कि हर नागरिक का देश के प्रति कर्तव्य है और राष्ट्र निर्माण में सबकी भागीदारी आवश्यक है।"
          },
          {
            question: "भारतीय संविधान के निर्माता कौन माने जाते हैं?",
            options: ["महात्मा गाँधी", "डॉ. भीमराव अंबेडकर", "जवाहरलाल नेहरू", "सरदार पटेल"],
            correct: 1,
            explanation: "डॉ. भीमराव अंबेडकर को भारतीय संविधान का प्रमुख निर्माता माना जाता है।"
          },
          {
            question: "पाठ में किन मूल्यों पर बल दिया गया है?",
            options: ["स्वार्थ और लालच", "त्याग, सेवा, एकता और देशप्रेम", "शक्ति और युद्ध", "भौतिक सुख"],
            correct: 1,
            explanation: "पाठ में त्याग, सेवा, एकता और देशप्रेम जैसे मूल्यों पर बल दिया गया है।"
          },
          {
            question: "सार्वजनिक संपत्ति की रक्षा करना किसका कर्तव्य है?",
            options: ["केवल पुलिस", "प्रत्येक नागरिक", "केवल सरकार", "केवल सेना"],
            correct: 1,
            explanation: "सार्वजनिक संपत्ति की रक्षा करना प्रत्येक नागरिक का मौलिक कर्तव्य है।"
          },
          {
            question: "देशप्रेम और राष्ट्रवाद में क्या अंतर बताया गया है?",
            options: ["कोई अंतर नहीं", "देशप्रेम सकारात्मक भावना है जबकि अंध राष्ट्रवाद दूसरों से घृणा कर सकता है", "दोनों बुरे हैं", "दोनों एक ही हैं"],
            correct: 1,
            explanation: "देशप्रेम अपने देश से प्रेम की सकारात्मक भावना है जबकि अंध राष्ट्रवाद में दूसरों से घृणा का तत्व हो सकता है।"
          },
          {
            question: "भारत का राष्ट्रीय गीत 'वंदे मातरम्' किसने लिखा?",
            options: ["रवींद्रनाथ टैगोर", "बंकिमचंद्र चट्टोपाध्याय", "मुंशी प्रेमचंद", "सुभाषचंद्र बोस"],
            correct: 1,
            explanation: "'वंदे मातरम्' बंकिमचंद्र चट्टोपाध्याय ने लिखा — यह भारत का राष्ट्रीय गीत है।"
          }
        ]
      },
      {
        id: 6,
        name: "संवेदन: ऐसी भी बातें होती हैं",
        description: "साक्षात्कार विधा — संवेदनशीलता, मानवीय मूल्य और जीवन के अनूठे अनुभव",
        questions: [
          {
            question: "'संवेदन: ऐसी भी बातें होती हैं' किस विधा में लिखा गया है?",
            options: ["कहानी", "साक्षात्कार", "निबंध", "कविता"],
            correct: 1,
            explanation: "यह पाठ साक्षात्कार विधा में लिखा गया है।"
          },
          {
            question: "'साक्षात्कार' विधा की प्रमुख विशेषता क्या है?",
            options: ["केवल एक व्यक्ति बोलता है", "प्रश्न-उत्तर के माध्यम से जानकारी प्राप्त करना", "काव्यात्मक भाषा", "काल्पनिक कथा"],
            correct: 1,
            explanation: "साक्षात्कार में प्रश्न-उत्तर के माध्यम से किसी व्यक्ति के विचारों और अनुभवों की जानकारी प्राप्त की जाती है।"
          },
          {
            question: "इस पाठ का मुख्य विषय क्या है?",
            options: ["राजनीति", "संवेदनशीलता, मानवीय मूल्य और जीवन के विशेष अनुभव", "विज्ञान", "खेलकूद"],
            correct: 1,
            explanation: "पाठ का मुख्य विषय संवेदनशीलता, मानवीय मूल्य और जीवन के अनूठे अनुभव हैं।"
          },
          {
            question: "'संवेदन' शब्द का अर्थ क्या है?",
            options: ["क्रोध", "अनुभूति और सहानुभूति", "भय", "घृणा"],
            correct: 1,
            explanation: "'संवेदन' का अर्थ है अनुभूति, सहानुभूति या किसी के दुख-सुख को महसूस करना।"
          },
          {
            question: "साक्षात्कार विधा में कितने पक्ष होते हैं?",
            options: ["एक", "दो — साक्षात्कारकर्ता और साक्षात्कारदाता", "तीन", "चार"],
            correct: 1,
            explanation: "साक्षात्कार में दो पक्ष होते हैं — प्रश्न पूछने वाला (साक्षात्कारकर्ता) और उत्तर देने वाला (साक्षात्कारदाता)।"
          },
          {
            question: "पाठ में किस प्रकार के अनुभवों का वर्णन है?",
            options: ["केवल सुखद अनुभव", "जीवन के अनूठे, प्रेरणादायक और मार्मिक अनुभव", "केवल दुखद अनुभव", "केवल हास्य अनुभव"],
            correct: 1,
            explanation: "पाठ में जीवन के अनूठे, प्रेरणादायक और मार्मिक अनुभवों का वर्णन है।"
          },
          {
            question: "इस पाठ से क्या संदेश मिलता है?",
            options: ["जीवन में केवल सफलता मायने रखती है", "संवेदनशीलता और मानवीय मूल्य जीवन को सार्थक बनाते हैं", "पैसा ही सबकुछ है", "दूसरों की परवाह मत करो"],
            correct: 1,
            explanation: "पाठ का संदेश है कि संवेदनशीलता और मानवीय मूल्य जीवन को सार्थक और अर्थपूर्ण बनाते हैं।"
          },
          {
            question: "साक्षात्कार की भाषा कैसी होनी चाहिए?",
            options: ["क्लिष्ट और जटिल", "सरल, स्पष्ट और बोधगम्य", "काव्यात्मक", "तकनीकी"],
            correct: 1,
            explanation: "साक्षात्कार की भाषा सरल, स्पष्ट और बोधगम्य होनी चाहिए ताकि पाठक आसानी से समझ सके।"
          },
          {
            question: "पाठ में 'ऐसी भी बातें होती हैं' से क्या तात्पर्य है?",
            options: ["सामान्य बातें", "जीवन में ऐसी असाधारण घटनाएँ होती हैं जो हमें चकित करती हैं", "बोरिंग बातें", "झूठी बातें"],
            correct: 1,
            explanation: "इसका तात्पर्य है कि जीवन में कुछ ऐसी असाधारण और अनूठी घटनाएँ होती हैं जो हमें सोचने पर मजबूर करती हैं।"
          },
          {
            question: "साक्षात्कार विधा हिंदी गद्य की किस श्रेणी में आती है?",
            options: ["काव्य विधा", "गद्य की नवीन विधा", "प्राचीन विधा", "पद्य विधा"],
            correct: 1,
            explanation: "साक्षात्कार हिंदी गद्य साहित्य की एक नवीन (आधुनिक) विधा है।"
          },
          {
            question: "संवेदनशील व्यक्ति की क्या विशेषता होती है?",
            options: ["वह कमज़ोर होता है", "वह दूसरों के दुख-सुख को अपना मानता है", "वह स्वार्थी होता है", "वह उदासीन होता है"],
            correct: 1,
            explanation: "संवेदनशील व्यक्ति दूसरों के दुख-सुख में सहभागी होता है और उन्हें अपना मानता है।"
          },
          {
            question: "पाठ की लेखन शैली कैसी है?",
            options: ["जटिल और दार्शनिक", "संवादात्मक और प्रभावशाली", "काव्यात्मक", "वैज्ञानिक"],
            correct: 1,
            explanation: "पाठ की लेखन शैली संवादात्मक (प्रश्न-उत्तर) और प्रभावशाली है।"
          },
          {
            question: "साक्षात्कार लेने से पहले क्या तैयारी आवश्यक है?",
            options: ["कोई तैयारी नहीं", "विषय और व्यक्ति के बारे में पूर्व जानकारी", "केवल कैमरा लाना", "केवल कागज़ लाना"],
            correct: 1,
            explanation: "साक्षात्कार लेने से पहले विषय और साक्षात्कारदाता के बारे में पूर्व जानकारी एकत्र करना आवश्यक है।"
          },
          {
            question: "पाठ में मानवीय मूल्यों से क्या तात्पर्य है?",
            options: ["धन और संपत्ति", "करुणा, सहानुभूति, प्रेम और सेवा", "शक्ति और सत्ता", "प्रतिस्पर्धा"],
            correct: 1,
            explanation: "मानवीय मूल्यों से तात्पर्य करुणा, सहानुभूति, प्रेम, सेवा और दया जैसी भावनाओं से है।"
          },
          {
            question: "'साक्षात्कार' शब्द का शाब्दिक अर्थ क्या है?",
            options: ["दूर से देखना", "आमने-सामने होना (साक्षात् + कार)", "पीछे से देखना", "सुनना"],
            correct: 1,
            explanation: "'साक्षात्कार' का शाब्दिक अर्थ है 'आमने-सामने होना' — अर्थात प्रत्यक्ष भेंट और बातचीत।"
          },
          {
            question: "इस पाठ से विद्यार्थियों को क्या प्रेरणा मिलती है?",
            options: ["केवल पढ़ाई करो", "जीवन में संवेदनशील बनो और दूसरों की भावनाओं का सम्मान करो", "केवल पैसा कमाओ", "दूसरों से प्रतिस्पर्धा करो"],
            correct: 1,
            explanation: "पाठ विद्यार्थियों को संवेदनशील बनने और दूसरों की भावनाओं का सम्मान करने की प्रेरणा देता है।"
          },
          {
            question: "साक्षात्कार और बातचीत में क्या अंतर है?",
            options: ["कोई अंतर नहीं", "साक्षात्कार उद्देश्यपूर्ण होता है जबकि बातचीत सामान्य हो सकती है", "बातचीत औपचारिक होती है", "साक्षात्कार अनौपचारिक होता है"],
            correct: 1,
            explanation: "साक्षात्कार एक उद्देश्यपूर्ण और नियोजित प्रक्रिया है जबकि बातचीत सामान्य और अनौपचारिक हो सकती है।"
          },
          {
            question: "पाठ में किस भाव की प्रधानता है?",
            options: ["क्रोध", "करुणा और संवेदना", "भय", "हास्य"],
            correct: 1,
            explanation: "पाठ में करुणा और संवेदना का भाव प्रधान है।"
          },
          {
            question: "संवेदनशीलता का विलोम क्या है?",
            options: ["कोमलता", "संवेदनहीनता (निर्ममता)", "सज्जनता", "विनम्रता"],
            correct: 1,
            explanation: "संवेदनशीलता का विलोम संवेदनहीनता या निर्ममता है।"
          },
          {
            question: "साक्षात्कार विधा में प्रश्नों की क्या विशेषता होनी चाहिए?",
            options: ["बहुत लंबे प्रश्न", "स्पष्ट, संक्षिप्त और विषय से संबंधित", "अस्पष्ट प्रश्न", "उत्तर वाले प्रश्न"],
            correct: 1,
            explanation: "साक्षात्कार में प्रश्न स्पष्ट, संक्षिप्त और विषय से सीधे संबंधित होने चाहिए।"
          },
          {
            question: "पाठ में वर्णित अनुभव किस प्रकार प्रस्तुत किए गए हैं?",
            options: ["सूखे तथ्यों के रूप में", "भावनात्मक और मर्मस्पर्शी ढंग से", "हास्यपूर्ण ढंग से", "वैज्ञानिक ढंग से"],
            correct: 1,
            explanation: "पाठ में अनुभव भावनात्मक और मर्मस्पर्शी ढंग से प्रस्तुत किए गए हैं।"
          },
          {
            question: "गद्य की अन्य नवीन विधाओं में कौन-सी विधा शामिल है?",
            options: ["दोहा", "रिपोर्ताज, फ़ीचर, डायरी", "चौपाई", "छंद"],
            correct: 1,
            explanation: "रिपोर्ताज, फ़ीचर, डायरी, यात्रा वृत्तांत आदि गद्य की अन्य नवीन विधाएँ हैं।"
          },
          {
            question: "पाठ में 'संवेदन' का क्या महत्व बताया गया है?",
            options: ["संवेदन अनावश्यक है", "संवेदन मानवता की पहचान है", "संवेदन कमज़ोरी है", "संवेदन बेकार है"],
            correct: 1,
            explanation: "पाठ में बताया गया है कि संवेदन (संवेदनशीलता) मानवता की असली पहचान है।"
          },
          {
            question: "इस पाठ को पढ़कर पाठक में कौन-सा गुण विकसित होता है?",
            options: ["क्रोध", "सहानुभूति और दूसरों के प्रति संवेदनशीलता", "ईर्ष्या", "भय"],
            correct: 1,
            explanation: "इस पाठ को पढ़कर पाठक में सहानुभूति और दूसरों के प्रति संवेदनशीलता का गुण विकसित होता है।"
          },
          {
            question: "साक्षात्कार और संवाद में मुख्य अंतर क्या है?",
            options: ["कोई अंतर नहीं", "साक्षात्कार में एक पक्ष जानकारी प्राप्त करता है जबकि संवाद में दोनों पक्ष समान रूप से भाग लेते हैं", "संवाद लिखित होता है", "साक्षात्कार मौखिक नहीं होता"],
            correct: 1,
            explanation: "साक्षात्कार में एक पक्ष प्रश्न पूछकर जानकारी प्राप्त करता है जबकि संवाद में दोनों पक्ष समान भागीदार होते हैं।"
          }
        ]
      },
      {
        id: 7,
        name: "साखियाँ एवं सबद",
        description: "कबीर दास की साखियाँ और सबद — भक्ति, ज्ञान, सत्य और सामाजिक आडंबर पर दोहे",
        questions: [
          {
            question: "'साखियाँ एवं सबद' के रचयिता कौन हैं?",
            options: ["तुलसीदास", "कबीर दास", "सूरदास", "रसखान"],
            correct: 1,
            explanation: "'साखियाँ एवं सबद' कबीर दास की रचनाएँ हैं।"
          },
          {
            question: "'साखी' शब्द किससे बना है?",
            options: ["सखी (मित्र)", "साक्षी (गवाह/प्रमाण)", "शाखा", "साख"],
            correct: 1,
            explanation: "'साखी' शब्द संस्कृत के 'साक्षी' से बना है जिसका अर्थ है गवाह या प्रमाण।"
          },
          {
            question: "'सबद' का क्या अर्थ है?",
            options: ["कहानी", "शब्द (पद/गीत)", "निबंध", "नाटक"],
            correct: 1,
            explanation: "'सबद' शब्द 'शब्द' का लोकभाषा रूप है जो एक प्रकार का पद या गीत है।"
          },
          {
            question: "कबीर दास किस काल के कवि हैं?",
            options: ["रीतिकाल", "आधुनिक काल", "भक्तिकाल", "वैदिक काल"],
            correct: 2,
            explanation: "कबीर दास भक्तिकाल (लगभग 15वीं शताब्दी) के प्रमुख कवि हैं।"
          },
          {
            question: "कबीर किस धारा के कवि माने जाते हैं?",
            options: ["सगुण भक्ति", "निर्गुण भक्ति (ज्ञानाश्रयी शाखा)", "रीति काव्य", "वीरगाथा"],
            correct: 1,
            explanation: "कबीर निर्गुण भक्ति की ज्ञानाश्रयी शाखा के प्रमुख कवि हैं।"
          },
          {
            question: "कबीर ने किस पर कड़ा व्यंग्य किया है?",
            options: ["प्रकृति पर", "सामाजिक आडंबर, पाखंड और जातिवाद पर", "बच्चों पर", "किसानों पर"],
            correct: 1,
            explanation: "कबीर ने सामाजिक आडंबर, धार्मिक पाखंड और जातिवाद पर कड़ा व्यंग्य किया है।"
          },
          {
            question: "कबीर की भाषा को क्या कहा जाता है?",
            options: ["शुद्ध हिंदी", "सधुक्कड़ी (पंचमेल खिचड़ी)", "संस्कृत", "उर्दू"],
            correct: 1,
            explanation: "कबीर की भाषा को 'सधुक्कड़ी' या 'पंचमेल खिचड़ी' कहा जाता है क्योंकि इसमें कई भाषाओं के शब्द मिले हैं।"
          },
          {
            question: "कबीर के गुरु कौन थे?",
            options: ["तुलसीदास", "रामानंद", "वल्लभाचार्य", "शंकराचार्य"],
            correct: 1,
            explanation: "कबीर के गुरु स्वामी रामानंद माने जाते हैं।"
          },
          {
            question: "कबीर की रचनाओं का संग्रह क्या कहलाता है?",
            options: ["रामचरितमानस", "बीजक", "सूरसागर", "पद्मावत"],
            correct: 1,
            explanation: "कबीर की रचनाओं का संग्रह 'बीजक' कहलाता है।"
          },
          {
            question: "'बीजक' के कितने भाग हैं?",
            options: ["दो", "तीन — साखी, सबद, रमैनी", "चार", "पाँच"],
            correct: 1,
            explanation: "बीजक के तीन भाग हैं — साखी, सबद और रमैनी।"
          },
          {
            question: "कबीर के अनुसार ईश्वर कहाँ निवास करता है?",
            options: ["मंदिर में", "मस्जिद में", "हर प्राणी के हृदय में", "आकाश में"],
            correct: 2,
            explanation: "कबीर के अनुसार ईश्वर मंदिर-मस्जिद में नहीं बल्कि हर प्राणी के हृदय में निवास करता है।"
          },
          {
            question: "कबीर ने मूर्तिपूजा के बारे में क्या कहा?",
            options: ["बहुत ज़रूरी है", "पत्थर पूजने से भगवान नहीं मिलते", "सबसे श्रेष्ठ पूजा है", "केवल बड़ी मूर्तियाँ पूजो"],
            correct: 1,
            explanation: "कबीर ने कहा कि पत्थर पूजने से ईश्वर प्राप्त नहीं होते, सच्ची भक्ति हृदय से होती है।"
          },
          {
            question: "'साखी' विधा का छंद कौन-सा है?",
            options: ["चौपाई", "दोहा", "सवैया", "कवित्त"],
            correct: 1,
            explanation: "साखी दोहा छंद में रचित होती है।"
          },
          {
            question: "कबीर ने 'गुरु' के बारे में क्या कहा है?",
            options: ["गुरु अनावश्यक है", "गुरु गोविंद दोनों खड़े, काके लागूँ पाय — गुरु सर्वोपरि है", "गुरु और ईश्वर बराबर नहीं", "गुरु केवल पढ़ाता है"],
            correct: 1,
            explanation: "कबीर ने गुरु को ईश्वर से भी ऊँचा स्थान दिया — 'गुरु गोविंद दोनों खड़े, काके लागूँ पाय'।"
          },
          {
            question: "कबीर ने हिंदू-मुस्लिम एकता पर क्या विचार व्यक्त किए?",
            options: ["दोनों अलग हैं", "दोनों एक ही ईश्वर की संतान हैं और धार्मिक भेदभाव व्यर्थ है", "केवल एक धर्म सही है", "धर्म ज़रूरी नहीं"],
            correct: 1,
            explanation: "कबीर ने कहा कि हिंदू-मुस्लिम सब एक ही ईश्वर की संतान हैं और धार्मिक भेदभाव व्यर्थ है।"
          },
          {
            question: "कबीर का जन्म कहाँ हुआ माना जाता है?",
            options: ["दिल्ली", "काशी (वाराणसी)", "मथुरा", "अयोध्या"],
            correct: 1,
            explanation: "कबीर का जन्म काशी (वाराणसी) में हुआ माना जाता है।"
          },
          {
            question: "कबीर ने 'माला फेरत जुग भया' में क्या कहा?",
            options: ["माला फेरना ज़रूरी है", "बाहरी आडंबर से भक्ति नहीं होती, मन का मोती फेरो", "माला बहुत सुंदर है", "माला पहनना चाहिए"],
            correct: 1,
            explanation: "कबीर कहते हैं कि बाहरी माला फेरने से कुछ नहीं होता, सच्ची भक्ति मन को शुद्ध करने से होती है।"
          },
          {
            question: "'निर्गुण भक्ति' का क्या अर्थ है?",
            options: ["साकार ईश्वर की भक्ति", "निराकार, गुणातीत ब्रह्म की उपासना", "मूर्तिपूजा", "देवताओं की पूजा"],
            correct: 1,
            explanation: "निर्गुण भक्ति में निराकार, गुणातीत और अव्यक्त ब्रह्म की उपासना की जाती है।"
          },
          {
            question: "कबीर ने समाज को क्या संदेश दिया?",
            options: ["जाति-पाँति मानो", "प्रेम, समानता और सत्य का मार्ग अपनाओ", "केवल पूजा करो", "संसार त्यागो"],
            correct: 1,
            explanation: "कबीर ने समाज को प्रेम, समानता, सत्य और सदाचार का मार्ग अपनाने का संदेश दिया।"
          },
          {
            question: "कबीर की काव्य शैली की विशेषता क्या है?",
            options: ["अलंकारिक और शृंगारिक", "सीधी, तीखी और व्यंग्यपूर्ण", "नाटकीय", "वर्णनात्मक"],
            correct: 1,
            explanation: "कबीर की काव्य शैली सीधी, तीखी, व्यंग्यपूर्ण और प्रभावशाली है।"
          },
          {
            question: "कबीर किस वर्ग से संबंधित थे?",
            options: ["राजपरिवार", "जुलाहा (बुनकर) परिवार", "ब्राह्मण", "व्यापारी"],
            correct: 1,
            explanation: "कबीर जुलाहा (बुनकर) परिवार से संबंधित थे।"
          },
          {
            question: "'पोथी पढ़ि-पढ़ि जग मुआ, पंडित भया न कोय' का क्या अर्थ है?",
            options: ["किताबें पढ़ना ज़रूरी है", "केवल किताबें पढ़ने से ज्ञान नहीं मिलता, अनुभव ज़रूरी है", "सभी पंडित बन गए", "पढ़ाई बेकार है"],
            correct: 1,
            explanation: "कबीर कहते हैं कि केवल किताबें पढ़ने से सच्चा ज्ञान नहीं मिलता, प्रत्यक्ष अनुभव और आत्मज्ञान ज़रूरी है।"
          },
          {
            question: "कबीर के काव्य में किस रस की प्रधानता है?",
            options: ["श्रृंगार रस", "शांत रस और भक्ति रस", "वीर रस", "हास्य रस"],
            correct: 1,
            explanation: "कबीर के काव्य में शांत रस और भक्ति रस की प्रधानता है।"
          },
          {
            question: "कबीर ने 'सबद' में किस विषय पर गाया है?",
            options: ["प्रकृति वर्णन", "आत्मा-परमात्मा का मिलन और भक्ति", "युद्ध", "राजनीति"],
            correct: 1,
            explanation: "कबीर ने सबद में आत्मा-परमात्मा के मिलन, भक्ति और आध्यात्मिक अनुभवों पर गाया है।"
          },
          {
            question: "'दुख में सुमिरन सब करें, सुख में करे न कोय' — इस साखी का क्या अर्थ है?",
            options: ["सुख में भगवान को याद करो", "लोग केवल दुख में ईश्वर को याद करते हैं, सुख में भूल जाते हैं", "दुख में किसी को याद मत करो", "सुख और दुख बराबर हैं"],
            correct: 1,
            explanation: "कबीर कहते हैं कि लोग केवल दुख आने पर ईश्वर को याद करते हैं, सुख में भूल जाते हैं — यह सच्ची भक्ति नहीं है।"
          }
        ]
      },
      {
        id: 8,
        name: "वाख",
        description: "लल्लद्यद (ललदेद) के वाख — कश्मीरी संत कवयित्री की आध्यात्मिक रचनाएँ",
        questions: [
          {
            question: "'वाख' की रचयिता कौन हैं?",
            options: ["मीराबाई", "लल्लद्यद (ललदेद)", "महादेवी वर्मा", "सुभद्रा कुमारी चौहान"],
            correct: 1,
            explanation: "'वाख' की रचयिता कश्मीरी संत कवयित्री लल्लद्यद (ललदेद) हैं।"
          },
          {
            question: "'वाख' शब्द का क्या अर्थ है?",
            options: ["कहानी", "वाक् (वाणी/उक्ति)", "गीत", "निबंध"],
            correct: 1,
            explanation: "'वाख' संस्कृत के 'वाक्' शब्द से बना है जिसका अर्थ है वाणी या उक्ति।"
          },
          {
            question: "लल्लद्यद कहाँ की कवयित्री हैं?",
            options: ["राजस्थान", "कश्मीर", "बंगाल", "गुजरात"],
            correct: 1,
            explanation: "लल्लद्यद कश्मीर की प्रसिद्ध संत कवयित्री हैं।"
          },
          {
            question: "लल्लद्यद को और किस नाम से जाना जाता है?",
            options: ["मीरा", "लल्लेश्वरी या लाल देद", "राधा", "सीता"],
            correct: 1,
            explanation: "लल्लद्यद को लल्लेश्वरी, लाल देद आदि नामों से भी जाना जाता है।"
          },
          {
            question: "लल्लद्यद का काल कौन-सा है?",
            options: ["10वीं शताब्दी", "14वीं शताब्दी", "18वीं शताब्दी", "20वीं शताब्दी"],
            correct: 1,
            explanation: "लल्लद्यद 14वीं शताब्दी की कश्मीरी संत कवयित्री हैं।"
          },
          {
            question: "वाख की विषयवस्तु क्या है?",
            options: ["प्रेम कहानी", "आत्मज्ञान, भक्ति और आध्यात्मिक अनुभव", "युद्ध वर्णन", "प्रकृति चित्रण"],
            correct: 1,
            explanation: "वाख में आत्मज्ञान, भक्ति, आध्यात्मिक साधना और आत्मा-परमात्मा के संबंध का वर्णन है।"
          },
          {
            question: "लल्लद्यद ने किस भाषा में रचना की?",
            options: ["हिंदी", "कश्मीरी", "संस्कृत", "उर्दू"],
            correct: 1,
            explanation: "लल्लद्यद ने कश्मीरी भाषा में अपनी रचनाएँ (वाख) की हैं।"
          },
          {
            question: "वाख में लल्लद्यद ने ईश्वर को कहाँ खोजने को कहा?",
            options: ["मंदिर में", "तीर्थ स्थलों में", "अपने भीतर (आत्मा में)", "पहाड़ों में"],
            correct: 2,
            explanation: "लल्लद्यद ने ईश्वर को बाहर नहीं बल्कि अपने भीतर (आत्मा में) खोजने को कहा है।"
          },
          {
            question: "लल्लद्यद की रचनाओं में किस भावना की प्रधानता है?",
            options: ["क्रोध", "वैराग्य, भक्ति और आत्मज्ञान", "भय", "हास्य"],
            correct: 1,
            explanation: "लल्लद्यद की रचनाओं में वैराग्य, भक्ति और आत्मज्ञान की भावना प्रमुख है।"
          },
          {
            question: "लल्लद्यद ने सांसारिक मोह-माया के बारे में क्या कहा?",
            options: ["मोह-माया सुखदायक है", "सांसारिक मोह-माया नाशवान है और इससे मुक्त होना चाहिए", "मोह-माया ज़रूरी है", "माया ही ईश्वर है"],
            correct: 1,
            explanation: "लल्लद्यद ने कहा कि सांसारिक मोह-माया नाशवान है और आत्मज्ञान के लिए इससे मुक्ति आवश्यक है।"
          },
          {
            question: "वाख किस काव्य रूप में हैं?",
            options: ["दोहा", "चार पंक्तियों की मुक्तक रचना", "महाकाव्य", "खंडकाव्य"],
            correct: 1,
            explanation: "वाख चार पंक्तियों (चतुष्पदी) की मुक्तक रचनाएँ हैं।"
          },
          {
            question: "लल्लद्यद ने शिव के बारे में क्या कहा?",
            options: ["शिव दूर हैं", "शिव सर्वव्यापी हैं और सब में विद्यमान हैं", "शिव केवल मंदिर में हैं", "शिव क्रोधी हैं"],
            correct: 1,
            explanation: "लल्लद्यद के अनुसार शिव सर्वव्यापी हैं और प्रत्येक प्राणी में विद्यमान हैं।"
          },
          {
            question: "लल्लद्यद की भक्ति किस प्रकार की है?",
            options: ["सगुण भक्ति", "निर्गुण भक्ति (शैव दर्शन से प्रभावित)", "मूर्ति भक्ति", "कर्मकांडी भक्ति"],
            correct: 1,
            explanation: "लल्लद्यद की भक्ति निर्गुण भक्ति है जो कश्मीरी शैव दर्शन से प्रभावित है।"
          },
          {
            question: "वाख में 'रस्सी' का प्रतीकात्मक अर्थ क्या है?",
            options: ["असली रस्सी", "श्वास (प्राण)", "नदी", "सड़क"],
            correct: 1,
            explanation: "वाख में 'रस्सी' श्वास (प्राणवायु) का प्रतीक है जो जीवन को धारण करती है।"
          },
          {
            question: "लल्लद्यद ने बाहरी आडंबर के बारे में क्या कहा?",
            options: ["बाहरी आडंबर ज़रूरी है", "बाहरी कर्मकांड और आडंबर से ईश्वर नहीं मिलते", "तीर्थ करना आवश्यक है", "पूजा-पाठ ही सबकुछ है"],
            correct: 1,
            explanation: "लल्लद्यद ने कहा कि बाहरी कर्मकांड और आडंबर से ईश्वर प्राप्ति नहीं होती, आंतरिक साधना आवश्यक है।"
          },
          {
            question: "वाख की भाषा की विशेषता क्या है?",
            options: ["बहुत क्लिष्ट", "सरल, प्रतीकात्मक और गहन अर्थ वाली", "केवल अलंकारिक", "तकनीकी"],
            correct: 1,
            explanation: "वाख की भाषा सरल किंतु प्रतीकात्मक है जिसमें गहन आध्यात्मिक अर्थ छिपे हैं।"
          },
          {
            question: "लल्लद्यद को कश्मीर में क्या माना जाता है?",
            options: ["राजकुमारी", "संत कवयित्री और कश्मीरी भाषा की आदि कवयित्री", "योद्धा", "व्यापारी"],
            correct: 1,
            explanation: "लल्लद्यद को कश्मीर की संत कवयित्री और कश्मीरी भाषा-साहित्य की आदि कवयित्री माना जाता है।"
          },
          {
            question: "वाख में किस दर्शन का प्रभाव है?",
            options: ["चार्वाक दर्शन", "कश्मीरी शैव दर्शन", "बौद्ध दर्शन", "जैन दर्शन"],
            correct: 1,
            explanation: "वाख में कश्मीरी शैव दर्शन (प्रत्यभिज्ञा दर्शन) का गहरा प्रभाव है।"
          },
          {
            question: "लल्लद्यद ने 'अमल-धवल' जीवन के लिए क्या सुझाव दिया?",
            options: ["धन कमाओ", "सत्कर्म करो, मन को शुद्ध करो और आत्मचिंतन करो", "सत्ता हासिल करो", "संसार त्यागो"],
            correct: 1,
            explanation: "लल्लद्यद ने निर्मल जीवन के लिए सत्कर्म, मन की शुद्धि और आत्मचिंतन का सुझाव दिया।"
          },
          {
            question: "वाख में 'नाव' किसका प्रतीक है?",
            options: ["नदी की नाव", "शरीर (जीवन)", "धन", "ज्ञान"],
            correct: 1,
            explanation: "वाख में 'नाव' शरीर (जीवन) का प्रतीक है जिसे भवसागर पार करना है।"
          },
          {
            question: "लल्लद्यद और कबीर में क्या समानता है?",
            options: ["दोनों एक ही भाषा में लिखते हैं", "दोनों निर्गुण भक्त हैं और बाहरी आडंबर का विरोध करते हैं", "दोनों एक ही प्रदेश के हैं", "दोनों सगुण भक्त हैं"],
            correct: 1,
            explanation: "लल्लद्यद और कबीर दोनों निर्गुण भक्त हैं और बाहरी धार्मिक आडंबर का विरोध करते हैं।"
          },
          {
            question: "वाख में किस रस की प्रधानता है?",
            options: ["श्रृंगार रस", "शांत रस", "वीर रस", "हास्य रस"],
            correct: 1,
            explanation: "वाख में शांत रस की प्रधानता है जो वैराग्य और आत्मज्ञान से उत्पन्न होता है।"
          },
          {
            question: "लल्लद्यद ने ससुराल में कष्ट सहने के बावजूद क्या किया?",
            options: ["रोती रहीं", "आध्यात्मिक साधना का मार्ग अपनाया और वाख की रचना की", "बदला लिया", "चुप रहीं"],
            correct: 1,
            explanation: "ससुराल में कष्ट सहने के बावजूद लल्लद्यद ने आध्यात्मिक साधना का मार्ग अपनाया और अमर वाख रचे।"
          },
          {
            question: "वाख का मुख्य संदेश क्या है?",
            options: ["भौतिक सुख सबसे ज़रूरी है", "आत्मज्ञान और आंतरिक शुद्धि ही सच्ची भक्ति है", "बाहरी आडंबर ज़रूरी है", "धन कमाना सबसे ज़रूरी है"],
            correct: 1,
            explanation: "वाख का मुख्य संदेश है कि आत्मज्ञान और आंतरिक शुद्धि ही सच्ची भक्ति और मुक्ति का मार्ग है।"
          },
          {
            question: "लल्लद्यद ने 'जीवन-मरण' के चक्र से मुक्ति का क्या उपाय बताया?",
            options: ["तीर्थ यात्रा", "आत्मज्ञान और अहंकार का त्याग", "धन दान", "कठोर तपस्या"],
            correct: 1,
            explanation: "लल्लद्यद ने जीवन-मरण के चक्र से मुक्ति के लिए आत्मज्ञान प्राप्त करने और अहंकार का त्याग करने का उपाय बताया।"
          }
        ]
      },
      {
        id: 9,
        name: "सवैये",
        description: "रसखान के सवैये — कृष्ण भक्ति, ब्रज संस्कृति और प्रकृति का सुंदर चित्रण",
        questions: [
          {
            question: "'सवैये' के रचयिता कौन हैं?",
            options: ["सूरदास", "रसखान", "तुलसीदास", "कबीर दास"],
            correct: 1,
            explanation: "पाठ्यपुस्तक में संकलित सवैये रसखान की रचनाएँ हैं।"
          },
          {
            question: "रसखान किस भक्ति धारा के कवि हैं?",
            options: ["निर्गुण भक्ति", "सगुण भक्ति (कृष्ण भक्ति शाखा)", "रीतिकाव्य", "वीरगाथा"],
            correct: 1,
            explanation: "रसखान सगुण भक्ति की कृष्ण भक्ति शाखा के प्रमुख कवि हैं।"
          },
          {
            question: "रसखान का मूल नाम क्या था?",
            options: ["सैयद इब्राहिम", "अहमद खान", "मिर्ज़ा ग़ालिब", "अमीर खुसरो"],
            correct: 0,
            explanation: "रसखान का मूल नाम सैयद इब्राहिम माना जाता है।"
          },
          {
            question: "'सवैया' किस प्रकार का छंद है?",
            options: ["मात्रिक छंद", "वर्णिक छंद", "मुक्त छंद", "दोहा"],
            correct: 1,
            explanation: "सवैया एक वर्णिक छंद है जिसमें वर्णों की निश्चित गिनती होती है।"
          },
          {
            question: "रसखान ने अगले जन्म में क्या बनना चाहा?",
            options: ["राजा", "ब्रज की गाय, पत्थर या गोपी", "सैनिक", "व्यापारी"],
            correct: 1,
            explanation: "रसखान ने अगले जन्म में ब्रज की गाय, गोवर्धन पर्वत का पत्थर या ग्वालिन बनने की इच्छा व्यक्त की।"
          },
          {
            question: "रसखान की विशेषता क्या है?",
            options: ["वे ब्राह्मण थे", "मुस्लिम होते हुए भी कृष्ण के अनन्य भक्त थे", "वे राजा थे", "वे वैज्ञानिक थे"],
            correct: 1,
            explanation: "रसखान की विशेषता यह है कि मुस्लिम होते हुए भी वे कृष्ण के अनन्य भक्त और ब्रज प्रेमी थे।"
          },
          {
            question: "सवैयों में किस क्षेत्र का वर्णन है?",
            options: ["काशी", "ब्रजभूमि (मथुरा-वृंदावन)", "दिल्ली", "लखनऊ"],
            correct: 1,
            explanation: "सवैयों में ब्रजभूमि (मथुरा-वृंदावन) का सुंदर और भावपूर्ण वर्णन है।"
          },
          {
            question: "रसखान ने कृष्ण के किस रूप का वर्णन किया है?",
            options: ["योद्धा रूप", "बाल-गोपाल और मुरलीधर रूप", "विष्णु रूप", "राम रूप"],
            correct: 1,
            explanation: "रसखान ने कृष्ण के बाल-गोपाल, ग्वाला और मुरलीधर रूप का मनोहर वर्णन किया है।"
          },
          {
            question: "रसखान किस काल के कवि हैं?",
            options: ["आदिकाल", "भक्तिकाल (16वीं शताब्दी)", "रीतिकाल", "आधुनिक काल"],
            correct: 1,
            explanation: "रसखान भक्तिकाल (16वीं शताब्दी) के कवि हैं।"
          },
          {
            question: "रसखान की प्रमुख रचना कौन-सी है?",
            options: ["रामचरितमानस", "प्रेमवाटिका और सुजान रसखान", "सूरसागर", "बीजक"],
            correct: 1,
            explanation: "रसखान की प्रमुख रचनाएँ 'प्रेमवाटिका' और 'सुजान रसखान' हैं।"
          },
          {
            question: "सवैये में 'गोधन' शब्द का क्या अर्थ है?",
            options: ["सोने का धन", "गायों का समूह (गो-धन)", "ज़मीन", "अनाज"],
            correct: 1,
            explanation: "'गोधन' का अर्थ है गायों का समूह — ब्रज संस्कृति में गायों को धन माना जाता है।"
          },
          {
            question: "रसखान ने ब्रज की प्रकृति का वर्णन कैसे किया है?",
            options: ["नीरस ढंग से", "अत्यंत सजीव, मनोरम और भावपूर्ण ढंग से", "वैज्ञानिक ढंग से", "उदासीन ढंग से"],
            correct: 1,
            explanation: "रसखान ने ब्रज की प्रकृति का अत्यंत सजीव, मनोरम और भावपूर्ण चित्रण किया है।"
          },
          {
            question: "रसखान की भाषा कौन-सी है?",
            options: ["अवधी", "ब्रजभाषा", "खड़ी बोली", "मैथिली"],
            correct: 1,
            explanation: "रसखान ने अपनी रचनाएँ ब्रजभाषा में की हैं।"
          },
          {
            question: "सवैयों में किस रस की प्रधानता है?",
            options: ["वीर रस", "श्रृंगार रस और भक्ति रस", "रौद्र रस", "भयानक रस"],
            correct: 1,
            explanation: "रसखान के सवैयों में श्रृंगार रस और भक्ति रस की प्रधानता है।"
          },
          {
            question: "'मानुष हों तो वही रसखान' — इस पंक्ति का क्या अर्थ है?",
            options: ["कहीं भी जन्म लो", "यदि मनुष्य बनूँ तो गोकुल के ग्वालों में बनूँ", "मनुष्य बनना बुरा है", "शहर में जन्म लो"],
            correct: 1,
            explanation: "रसखान कहते हैं कि यदि मनुष्य योनि मिले तो गोकुल के ग्वालों के बीच जन्म लेना चाहें।"
          },
          {
            question: "रसखान के काव्य में किसके प्रति अटूट प्रेम व्यक्त हुआ है?",
            options: ["राम", "श्रीकृष्ण और ब्रजभूमि", "शिव", "ब्रह्मा"],
            correct: 1,
            explanation: "रसखान के संपूर्ण काव्य में श्रीकृष्ण और ब्रजभूमि के प्रति अटूट प्रेम व्यक्त हुआ है।"
          },
          {
            question: "रसखान ने 'पाहन' (पत्थर) बनने की इच्छा क्यों व्यक्त की?",
            options: ["पत्थर मज़बूत होता है", "गोवर्धन पर्वत का पत्थर बनकर कृष्ण के निकट रहने के लिए", "पत्थर अमर है", "पत्थर सुंदर होता है"],
            correct: 1,
            explanation: "रसखान गोवर्धन पर्वत का पत्थर बनकर कृष्ण के निकट रहना चाहते हैं।"
          },
          {
            question: "सवैयों में किस अलंकार का प्रमुख प्रयोग है?",
            options: ["उपमा और रूपक", "अनुप्रास और रूपक", "उत्प्रेक्षा", "विरोधाभास"],
            correct: 1,
            explanation: "सवैयों में अनुप्रास और रूपक अलंकारों का प्रमुख प्रयोग है।"
          },
          {
            question: "रसखान का कृष्ण प्रेम कैसा है?",
            options: ["औपचारिक", "अनन्य, समर्पित और दीवानगी भरा", "सतही", "बनावटी"],
            correct: 1,
            explanation: "रसखान का कृष्ण प्रेम अनन्य, पूर्ण समर्पण और दीवानगी से भरा है।"
          },
          {
            question: "'करील की कुंजन' में 'करील' क्या है?",
            options: ["एक पक्षी", "एक काँटेदार झाड़ी (ब्रज का पौधा)", "एक नदी", "एक पहाड़"],
            correct: 1,
            explanation: "'करील' ब्रज क्षेत्र में पाई जाने वाली एक काँटेदार झाड़ी है।"
          },
          {
            question: "रसखान और सूरदास में क्या समानता है?",
            options: ["दोनों निर्गुण भक्त हैं", "दोनों कृष्ण भक्त हैं और ब्रजभाषा में लिखते हैं", "दोनों एक ही गाँव के हैं", "दोनों मुस्लिम हैं"],
            correct: 1,
            explanation: "रसखान और सूरदास दोनों कृष्ण भक्त कवि हैं जिन्होंने ब्रजभाषा में रचना की।"
          },
          {
            question: "सवैये छंद में कितने वर्ण होते हैं?",
            options: ["22-26 वर्ण प्रति चरण", "10 वर्ण", "32 वर्ण", "16 वर्ण"],
            correct: 0,
            explanation: "सवैये छंद में प्रत्येक चरण में 22 से 26 वर्ण होते हैं।"
          },
          {
            question: "रसखान को 'रसखान' उपनाम क्यों मिला?",
            options: ["खाना अच्छा बनाते थे", "रस (भावों) की खान (भंडार) होने के कारण", "एक गाँव का नाम", "बचपन का नाम"],
            correct: 1,
            explanation: "काव्य में रस (भावों) की खान (भंडार) होने के कारण उन्हें 'रसखान' उपनाम मिला।"
          },
          {
            question: "रसखान के सवैयों का मुख्य संदेश क्या है?",
            options: ["धन कमाओ", "सच्चा प्रेम और भक्ति सारी सीमाओं से परे होती है", "युद्ध करो", "संसार त्यागो"],
            correct: 1,
            explanation: "रसखान के सवैये बताते हैं कि सच्चा प्रेम और भक्ति धर्म, जाति — सभी सीमाओं से परे होती है।"
          },
          {
            question: "रसखान ने 'या लकुटी अरु कामरिया' में किसका वर्णन किया है?",
            options: ["राम का", "कृष्ण की लाठी और कंबल — ग्वाल रूप का मनोहर चित्रण", "शिव का", "हनुमान का"],
            correct: 1,
            explanation: "रसखान ने कृष्ण के ग्वाल रूप का चित्रण किया है — उनकी लकुटी (लाठी) और कामरिया (कंबल) तीनों लोकों की संपत्ति से बढ़कर हैं।"
          }
        ]
      },
      {
        id: 10,
        name: "कैदी और कोकिला",
        description: "माखनलाल चतुर्वेदी की कविता — स्वतंत्रता संग्राम, कारागार जीवन और कोकिला का प्रतीकात्मक चित्रण",
        questions: [
          {
            question: "'कैदी और कोकिला' कविता के रचयिता कौन हैं?",
            options: ["सुभद्रा कुमारी चौहान", "माखनलाल चतुर्वेदी", "रामधारी सिंह दिनकर", "सूर्यकांत त्रिपाठी निराला"],
            correct: 1,
            explanation: "'कैदी और कोकिला' के रचयिता माखनलाल चतुर्वेदी हैं।"
          },
          {
            question: "'कोकिला' किसका प्रतीक है?",
            options: ["निराशा", "स्वतंत्रता और आशा", "भय", "क्रोध"],
            correct: 1,
            explanation: "कविता में कोकिला (कोयल) स्वतंत्रता, आशा और उमंग का प्रतीक है।"
          },
          {
            question: "'कैदी' किसका प्रतीक है?",
            options: ["अपराधी", "स्वतंत्रता सेनानी (कवि स्वयं)", "डाकू", "सिपाही"],
            correct: 1,
            explanation: "कैदी स्वतंत्रता संग्राम में जेल में बंद देशभक्त (स्वयं कवि) का प्रतीक है।"
          },
          {
            question: "कवि कहाँ बंद है?",
            options: ["अपने घर में", "ब्रिटिश जेल (कारागार) में", "किले में", "अस्पताल में"],
            correct: 1,
            explanation: "कवि स्वतंत्रता आंदोलन में भाग लेने के कारण ब्रिटिश जेल में बंद है।"
          },
          {
            question: "कवि कोकिला से क्या पूछता है?",
            options: ["गाना सिखाओ", "तुम इस अंधेरी रात में क्यों गा रही हो?", "कहाँ से आई हो?", "क्या खाती हो?"],
            correct: 1,
            explanation: "कवि कोकिला से पूछता है कि इस काली अंधेरी रात में वह क्यों गा रही है।"
          },
          {
            question: "कविता में 'काली रात' किसका प्रतीक है?",
            options: ["सामान्य रात", "ब्रिटिश शासन का अत्याचारी काल", "बारिश की रात", "सर्दी की रात"],
            correct: 1,
            explanation: "'काली रात' ब्रिटिश शासन के अत्याचारी और अंधकारपूर्ण काल का प्रतीक है।"
          },
          {
            question: "माखनलाल चतुर्वेदी की प्रसिद्ध कविता कौन-सी है?",
            options: ["साकेत", "पुष्प की अभिलाषा", "कामायनी", "उर्वशी"],
            correct: 1,
            explanation: "माखनलाल चतुर्वेदी की सबसे प्रसिद्ध कविता 'पुष्प की अभिलाषा' है।"
          },
          {
            question: "कवि को जेल में किन कष्टों का सामना करना पड़ता है?",
            options: ["केवल ठंड", "अंधेरा, हथकड़ियाँ, भूख और तन्हाई", "केवल गर्मी", "कोई कष्ट नहीं"],
            correct: 1,
            explanation: "कवि को जेल में अंधेरा, हथकड़ियाँ, बेड़ियाँ, भूख और अकेलापन जैसे कष्ट सहने पड़ते हैं।"
          },
          {
            question: "कविता में 'हथकड़ियों' का प्रतीकात्मक अर्थ क्या है?",
            options: ["आभूषण", "गुलामी और परतंत्रता", "खेल", "सज़ावट"],
            correct: 1,
            explanation: "हथकड़ियाँ गुलामी, परतंत्रता और ब्रिटिश शासन के दमन का प्रतीक हैं।"
          },
          {
            question: "कविता किस विधा में है?",
            options: ["गद्य", "मुक्तक कविता", "एकांकी", "निबंध"],
            correct: 1,
            explanation: "यह एक मुक्तक कविता (गीतात्मक कविता) है।"
          },
          {
            question: "कवि कोकिला की आवाज़ सुनकर क्या महसूस करता है?",
            options: ["क्रोध", "स्वतंत्रता की उमंग और आशा", "भय", "उदासीनता"],
            correct: 1,
            explanation: "कोकिला की आवाज़ सुनकर कवि के मन में स्वतंत्रता की उमंग और नई आशा जागती है।"
          },
          {
            question: "माखनलाल चतुर्वेदी किस काव्यधारा से संबंधित हैं?",
            options: ["छायावाद", "राष्ट्रीय काव्यधारा (राष्ट्रीय-सांस्कृतिक)", "प्रगतिवाद", "प्रयोगवाद"],
            correct: 1,
            explanation: "माखनलाल चतुर्वेदी राष्ट्रीय काव्यधारा (राष्ट्रीय-सांस्कृतिक चेतना) के प्रमुख कवि हैं।"
          },
          {
            question: "कविता में कोकिला की बोली और कैदी की स्थिति में क्या विरोधाभास है?",
            options: ["कोई विरोधाभास नहीं", "कोकिला स्वतंत्र है और गा रही है जबकि कैदी बंदी है और तड़प रहा है", "दोनों खुश हैं", "दोनों दुखी हैं"],
            correct: 1,
            explanation: "कोकिला स्वतंत्र होकर मधुर गीत गा रही है जबकि कैदी बंदी है — यह विरोधाभास कविता का मूल है।"
          },
          {
            question: "कविता में 'मुंडन' शब्द किसके लिए आया है?",
            options: ["बच्चे के", "कैदियों के बालों की कटाई (अपमान)", "पंडित के", "शादी में"],
            correct: 1,
            explanation: "जेल में कैदियों के बाल काटे जाते थे जो अपमान और दमन का प्रतीक है।"
          },
          {
            question: "कवि कोकिला को क्या संदेश देता है?",
            options: ["चुप हो जाओ", "जाओ और बाहर की दुनिया को जगाओ, स्वतंत्रता का संदेश दो", "वापस जाओ", "यहीं रहो"],
            correct: 1,
            explanation: "कवि कोकिला से कहता है कि वह बाहर जाकर लोगों को जगाए और स्वतंत्रता की अलख जगाए।"
          },
          {
            question: "कविता में किस रस की प्रधानता है?",
            options: ["श्रृंगार रस", "वीर रस और करुण रस", "हास्य रस", "अद्भुत रस"],
            correct: 1,
            explanation: "कविता में वीर रस (देशभक्ति) और करुण रस (कैदी की व्यथा) की प्रधानता है।"
          },
          {
            question: "माखनलाल चतुर्वेदी को कौन-सी उपाधि मिली?",
            options: ["कवि सम्राट", "एक भारतीय आत्मा", "राष्ट्रकवि", "महाकवि"],
            correct: 1,
            explanation: "माखनलाल चतुर्वेदी को 'एक भारतीय आत्मा' की उपाधि दी गई।"
          },
          {
            question: "कविता किस ऐतिहासिक पृष्ठभूमि पर आधारित है?",
            options: ["मुगल काल", "भारतीय स्वतंत्रता आंदोलन", "प्राचीन भारत", "स्वतंत्रता के बाद"],
            correct: 1,
            explanation: "कविता भारतीय स्वतंत्रता आंदोलन की पृष्ठभूमि पर आधारित है।"
          },
          {
            question: "कवि ने कोकिला से जेल आने का कारण क्या पूछा?",
            options: ["खाना खाने", "क्या तू भी जेल भेजी गई है या कोई संदेश लाई है?", "घूमने", "गाना सुनाने"],
            correct: 1,
            explanation: "कवि कोकिला से पूछता है कि क्या वह भी बंदी बनाई गई है या कोई स्वतंत्रता का संदेश लाई है।"
          },
          {
            question: "कविता की भाषा कैसी है?",
            options: ["क्लिष्ट संस्कृतनिष्ठ", "ओजपूर्ण, भावपूर्ण और सरल खड़ी बोली", "अंग्रेज़ी मिश्रित", "ग्रामीण बोली"],
            correct: 1,
            explanation: "कविता की भाषा ओजपूर्ण, भावपूर्ण और सरल खड़ी बोली है।"
          },
          {
            question: "कविता में 'अंधेरी रात' और 'कोकिला का गीत' में क्या संबंध है?",
            options: ["कोई संबंध नहीं", "अंधेरे (गुलामी) में कोकिला का गीत (स्वतंत्रता की आशा) प्रकाश की किरण है", "दोनों अंधेरे हैं", "दोनों प्रकाश हैं"],
            correct: 1,
            explanation: "अंधेरी रात गुलामी का प्रतीक है और कोकिला का गीत उस अंधेरे में स्वतंत्रता की आशा की किरण है।"
          },
          {
            question: "कवि जेल में किसकी याद करता है?",
            options: ["धन की", "देश, स्वतंत्रता और अपने साथियों की", "खाने की", "खेल की"],
            correct: 1,
            explanation: "कवि जेल में अपने देश, स्वतंत्रता और स्वतंत्रता संग्राम के साथियों की याद करता है।"
          },
          {
            question: "माखनलाल चतुर्वेदी का जन्म कहाँ हुआ?",
            options: ["उत्तर प्रदेश", "मध्य प्रदेश (बाबई, होशंगाबाद)", "राजस्थान", "बिहार"],
            correct: 1,
            explanation: "माखनलाल चतुर्वेदी का जन्म मध्य प्रदेश के होशंगाबाद ज़िले के बाबई गाँव में हुआ।"
          },
          {
            question: "कविता का मुख्य संदेश क्या है?",
            options: ["जेल से भागो", "स्वतंत्रता अमूल्य है और उसके लिए कष्ट सहना उचित है", "चुप रहो", "कुछ मत करो"],
            correct: 1,
            explanation: "कविता का संदेश है कि स्वतंत्रता अमूल्य है और उसे पाने के लिए हर कष्ट सहना उचित और गौरवपूर्ण है।"
          },
          {
            question: "कविता में 'जंजीरों की झनकार' का प्रतीकात्मक अर्थ क्या है?",
            options: ["संगीत", "गुलामी की पीड़ा और बंधन की ध्वनि", "आभूषण", "खेल"],
            correct: 1,
            explanation: "जंजीरों की झनकार गुलामी की पीड़ा, कैदी की विवशता और ब्रिटिश दमन के बंधन का प्रतीक है।"
          }
        ]
      },
      {
        id: 11,
        name: "मेघ आए",
        description: "सर्वेश्वर दयाल सक्सेना की कविता — वर्षा ऋतु का मानवीकरण और ग्रामीण जीवन का चित्रण",
        questions: [
          {
            question: "'मेघ आए' कविता के रचयिता कौन हैं?",
            options: ["निराला", "सर्वेश्वर दयाल सक्सेना", "पंत", "महादेवी वर्मा"],
            correct: 1,
            explanation: "'मेघ आए' कविता के रचयिता सर्वेश्वर दयाल सक्सेना हैं।"
          },
          {
            question: "कविता में 'मेघ' किसके प्रतीक हैं?",
            options: ["दुख", "दामाद (बहुत दिनों बाद आने वाला प्रिय अतिथि)", "शत्रु", "राजा"],
            correct: 1,
            explanation: "कविता में मेघ को दामाद या बहुत दिनों बाद आने वाले प्रिय अतिथि के रूप में चित्रित किया गया है।"
          },
          {
            question: "कविता में किस अलंकार का प्रमुख प्रयोग हुआ है?",
            options: ["उपमा", "मानवीकरण (Personification)", "अतिशयोक्ति", "विरोधाभास"],
            correct: 1,
            explanation: "कविता में मानवीकरण अलंकार का प्रमुख प्रयोग है — मेघों को मनुष्य के रूप में चित्रित किया गया है।"
          },
          {
            question: "कविता में मेघों के आने पर गाँव की क्या प्रतिक्रिया है?",
            options: ["उदासीनता", "खुशी और उत्साह — जैसे दामाद आया हो", "भय", "क्रोध"],
            correct: 1,
            explanation: "मेघों के आने पर पूरा गाँव खुशी और उत्साह से भर जाता है जैसे कोई प्रिय दामाद आया हो।"
          },
          {
            question: "कविता में 'पेड़ों' को किसके रूप में दिखाया गया है?",
            options: ["शत्रु", "गाँव के बुज़ुर्ग जो गर्दन उठाकर देख रहे हैं", "सैनिक", "व्यापारी"],
            correct: 1,
            explanation: "पेड़ों को गाँव के बुज़ुर्गों की तरह दिखाया गया है जो गर्दन उठाकर मेघों को आते देख रहे हैं।"
          },
          {
            question: "कविता में 'बूढ़े पीपल' किसका प्रतीक है?",
            options: ["एक पेड़", "गाँव का बुज़ुर्ग व्यक्ति", "एक पहाड़", "एक नदी"],
            correct: 1,
            explanation: "'बूढ़ा पीपल' गाँव के वयोवृद्ध, अनुभवी बुज़ुर्ग व्यक्ति का प्रतीक है।"
          },
          {
            question: "'मेघ आए' में किस ऋतु का चित्रण है?",
            options: ["शीत ऋतु", "वर्षा ऋतु", "ग्रीष्म ऋतु", "बसंत ऋतु"],
            correct: 1,
            explanation: "कविता में वर्षा ऋतु (सावन) के आगमन का सुंदर चित्रण है।"
          },
          {
            question: "कविता में 'बारात' की कल्पना किसकी है?",
            options: ["शादी की बारात", "मेघों के समूह की (बादलों को बाराती माना गया)", "सेना की", "व्यापारियों की"],
            correct: 1,
            explanation: "कवि ने मेघों के समूह को बारात की तरह चित्रित किया है जो गाँव में आ रही है।"
          },
          {
            question: "कविता में 'बिजली' को किसके रूप में दर्शाया गया है?",
            options: ["हथियार", "दामाद के साथ आई नई बहू (चमकती दुल्हन)", "सैनिक", "देवता"],
            correct: 1,
            explanation: "बिजली को दामाद (मेघ) के साथ आई चमकती हुई नई बहू या दुल्हन के रूप में दर्शाया गया है।"
          },
          {
            question: "सर्वेश्वर दयाल सक्सेना किस काव्यधारा से संबंधित हैं?",
            options: ["छायावाद", "प्रगतिवाद", "नई कविता (अकविता)", "रीतिकाल"],
            correct: 2,
            explanation: "सर्वेश्वर दयाल सक्सेना 'नई कविता' और 'अकविता' आंदोलन से जुड़े कवि हैं।"
          },
          {
            question: "कविता में ग्रामीण जीवन का चित्रण कैसे किया गया है?",
            options: ["नकारात्मक ढंग से", "सजीव और आत्मीयतापूर्ण ढंग से", "उदासीन ढंग से", "वैज्ञानिक ढंग से"],
            correct: 1,
            explanation: "कविता में ग्रामीण जीवन, रिश्तों और प्रकृति का अत्यंत सजीव और आत्मीयतापूर्ण चित्रण है।"
          },
          {
            question: "कविता में 'धूल' किसके रूप में चित्रित है?",
            options: ["गंदगी", "मेघों के स्वागत में उड़ती धूल — उत्साह का प्रतीक", "प्रदूषण", "आँधी"],
            correct: 1,
            explanation: "धूल का उड़ना मेघों के स्वागत की तैयारी और उत्साह का प्रतीक है।"
          },
          {
            question: "कविता की भाषा कैसी है?",
            options: ["क्लिष्ट और संस्कृतनिष्ठ", "सहज, चित्रात्मक और ग्रामीण रंग वाली", "अंग्रेज़ी मिश्रित", "तकनीकी"],
            correct: 1,
            explanation: "कविता की भाषा सहज, चित्रात्मक और ग्रामीण जीवन के रंगों से भरी हुई है।"
          },
          {
            question: "कविता में 'ताल-तलैया' का उल्लेख क्यों है?",
            options: ["तैरने के लिए", "गाँव के तालाब मेघों के स्वागत में भर जाते हैं", "मछली पकड़ने", "नहाने"],
            correct: 1,
            explanation: "ताल-तलैया (तालाब) मेघों की बारिश से भर जाते हैं — यह मेघों के आगमन का प्रभाव दर्शाता है।"
          },
          {
            question: "कविता में किस रस की प्रधानता है?",
            options: ["करुण रस", "श्रृंगार रस (संयोग श्रृंगार)", "वीर रस", "भयानक रस"],
            correct: 1,
            explanation: "कविता में श्रृंगार रस (विशेषकर संयोग श्रृंगार) की प्रधानता है — मेघ और धरती का मिलन।"
          },
          {
            question: "'नाचती-गाती हवा' में कौन-सा अलंकार है?",
            options: ["उपमा", "मानवीकरण", "रूपक", "अनुप्रास"],
            correct: 1,
            explanation: "हवा को नाचता-गाता बताना मानवीकरण अलंकार है — प्रकृति को मानवीय क्रियाएँ दी गई हैं।"
          },
          {
            question: "कवि ने मेघों के आगमन को किस सामाजिक घटना से जोड़ा है?",
            options: ["त्योहार", "दामाद (मेघ) का ससुराल (गाँव) आना", "युद्ध", "बाज़ार"],
            correct: 1,
            explanation: "कवि ने मेघों के आगमन को दामाद के ससुराल आने की सामाजिक घटना से जोड़ा है।"
          },
          {
            question: "कविता में 'क्षितिज' शब्द किसके लिए प्रयुक्त हुआ है?",
            options: ["ज़मीन", "आकाश और धरती के मिलन बिंदु — जहाँ से मेघ आते हैं", "पहाड़", "समुद्र"],
            correct: 1,
            explanation: "'क्षितिज' वह स्थान है जहाँ आकाश और धरती मिलते प्रतीत होते हैं — यहीं से मेघ आते दिखते हैं।"
          },
          {
            question: "कविता में प्रकृति और मानव जीवन का क्या संबंध दर्शाया गया है?",
            options: ["कोई संबंध नहीं", "प्रकृति और मानव जीवन गहरे रूप से जुड़े हैं", "विरोध का संबंध", "प्रकृति शत्रु है"],
            correct: 1,
            explanation: "कविता दर्शाती है कि प्रकृति और मानव जीवन गहरे रूप से जुड़े और एक-दूसरे पर निर्भर हैं।"
          },
          {
            question: "सर्वेश्वर दयाल सक्सेना की अन्य प्रमुख रचना कौन-सी है?",
            options: ["कामायनी", "खूँटियों पर टँगे लोग", "गोदान", "रामचरितमानस"],
            correct: 1,
            explanation: "'खूँटियों पर टँगे लोग' सर्वेश्वर दयाल सक्सेना की अन्य प्रमुख काव्य रचना है।"
          },
          {
            question: "कविता में 'गागर' और 'मटके' का उल्लेख क्यों है?",
            options: ["खाना बनाने के लिए", "ग्रामीण महिलाओं द्वारा बारिश का पानी भरने की तैयारी", "सजावट", "बिक्री"],
            correct: 1,
            explanation: "गागर और मटके का उल्लेख ग्रामीण जीवन और बारिश के स्वागत की तैयारी को दर्शाता है।"
          },
          {
            question: "कविता में 'बादलों का गरजना' किसके समान बताया गया है?",
            options: ["युद्ध", "बारात के ढोल-नगाड़े", "भूकंप", "ज्वालामुखी"],
            correct: 1,
            explanation: "बादलों के गरजने को बारात के ढोल-नगाड़ों की आवाज़ के समान बताया गया है।"
          },
          {
            question: "कविता में किस भाव की अभिव्यक्ति हुई है?",
            options: ["निराशा", "प्रकृति के प्रति उल्लास, प्रेम और ग्रामीण आत्मीयता", "क्रोध", "भय"],
            correct: 1,
            explanation: "कविता में प्रकृति के प्रति उल्लास, प्रेम और ग्रामीण जीवन की आत्मीयता का सुंदर भाव व्यक्त हुआ है।"
          },
          {
            question: "कविता का मुख्य संदेश क्या है?",
            options: ["बारिश बुरी है", "प्रकृति और मानव का संबंध अटूट है और प्रकृति हमारे जीवन में आनंद लाती है", "बारिश से डरो", "प्रकृति से दूर रहो"],
            correct: 1,
            explanation: "कविता का संदेश है कि प्रकृति और मानव का संबंध अटूट है और प्रकृति हमारे जीवन में आनंद और उमंग लाती है।"
          },
          {
            question: "कविता में 'शीतल हवा' किसका प्रतीक है?",
            options: ["ठंड", "मेघों के आगमन की शुभ सूचना देने वाली दूतिका", "आँधी", "तूफान"],
            correct: 1,
            explanation: "शीतल हवा मेघों के आगमन की शुभ सूचना देने वाली दूतिका (संदेशवाहक) के रूप में चित्रित है।"
          }
        ]
      }
    ]
  },
  telugu: {
    name: "Telugu",
    color: "#8b5cf6",
    icon: "Languages",
    chapters: [
      {
        id: 1,
        name: "ఏది గొప్పదానం",
        description: "గొప్పదానం యొక్క నిజమైన అర్థం మరియు దాన గుణం గురించి పాఠం",
        questions: [
          {
            question: "'ఏది గొప్పదానం' పాఠం ప్రధాన సందేశం ఏమిటి?",
            options: ["ధనం సంపాదించడం గొప్ప", "నిస్వార్థంగా చేసే దానమే గొప్పదానం", "దానం చేయకూడదు", "కేవలం ధనికులే దానం చేయాలి"],
            correct: 1,
            explanation: "పాఠం ప్రకారం నిస్వార్థంగా, ఎటువంటి ప్రతిఫలాపేక్ష లేకుండా చేసే దానమే నిజమైన గొప్పదానం."
          },
          {
            question: "'దానం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["తీసుకోవడం", "ఇవ్వడం", "అడగడం", "కొనడం"],
            correct: 1,
            explanation: "'దానం' అంటే ఇతరులకు ఏదైనా ఇవ్వడం అని అర్థం."
          },
          {
            question: "గొప్పదానం చేయడానికి ఏమి అవసరం?",
            options: ["చాలా ధనం", "మంచి మనసు", "అధికారం", "పేరు ప్రఖ్యాతులు"],
            correct: 1,
            explanation: "గొప్పదానం చేయడానికి మంచి మనసు మాత్రమే అవసరం, ధనం కాదు."
          },
          {
            question: "'నిస్వార్థం' అనే పదంలో ఉన్న సంధి ఏది?",
            options: ["సవర్ణదీర్ఘ సంధి", "గుణ సంధి", "యణాదేశ సంధి", "విసర్గ సంధి"],
            correct: 0,
            explanation: "'నిస్ + స్వార్థం = నిస్వార్థం' ఇందులో సవర్ణదీర్ఘ సంధి ఉంది."
          },
          {
            question: "పాఠంలో దానం గురించి ఏమని చెప్పబడింది?",
            options: ["దానం చేస్తే పేదవాడవుతావు", "దానం చేస్తే పుణ్యం వస్తుంది", "దానం అనవసరం", "దానం కేవలం ఆచారం"],
            correct: 1,
            explanation: "పాఠంలో దానం చేస్తే పుణ్యం వస్తుందని, అది మానవ ధర్మమని చెప్పబడింది."
          },
          {
            question: "'అన్నదానం' ఏ రకమైన సమాసం?",
            options: ["తత్పురుష సమాసం", "ద్వంద్వ సమాసం", "బహువ్రీహి సమాసం", "కర్మధారయ సమాసం"],
            correct: 0,
            explanation: "'అన్నదానం' = అన్నము యొక్క దానం - ఇది తత్పురుష సమాసం."
          },
          {
            question: "పాఠం ప్రకారం ఏ దానం అన్నింటికంటే గొప్పది?",
            options: ["ధన దానం", "భూ దానం", "విద్యా దానం", "వస్త్ర దానం"],
            correct: 2,
            explanation: "విద్యా దానం అన్నింటికంటే గొప్పదని పాఠంలో చెప్పబడింది, ఎందుకంటే అది శాశ్వతమైనది."
          },
          {
            question: "'గొప్పదానం' అనే పదంలో విభక్తి ఏది?",
            options: ["ప్రథమా విభక్తి", "ద్వితీయా విభక్తి", "తృతీయా విభక్తి", "చతుర్థీ విభక్తి"],
            correct: 0,
            explanation: "'గొప్పదానం' అనేది ప్రథమా విభక్తి (కర్త) రూపం."
          },
          {
            question: "దానం చేసేటప్పుడు ఏ భావన ఉండాలి?",
            options: ["గర్వం", "అహంకారం", "వినయం మరియు కరుణ", "భయం"],
            correct: 2,
            explanation: "దానం చేసేటప్పుడు వినయం మరియు కరుణ భావన ఉండాలని పాఠం బోధిస్తుంది."
          },
          {
            question: "'ప్రతిఫలాపేక్ష' అనే పదానికి అర్థం ఏమిటి?",
            options: ["బదులుగా ఏదైనా ఆశించడం", "ఏమీ ఆశించకపోవడం", "దానం చేయడం", "సహాయం చేయడం"],
            correct: 0,
            explanation: "'ప్రతిఫలాపేక్ష' అంటే తాను చేసిన పనికి బదులుగా ఏదైనా ఆశించడం అని అర్థం."
          },
          {
            question: "పాఠంలో ఏ రకమైన దానాలు ప్రస్తావించబడ్డాయి?",
            options: ["అన్నదానం, విద్యాదానం, ధనదానం", "కేవలం ధనదానం", "కేవలం అన్నదానం", "కేవలం భూదానం"],
            correct: 0,
            explanation: "పాఠంలో అన్నదానం, విద్యాదానం, ధనదానం వంటి వివిధ రకాల దానాలు ప్రస్తావించబడ్డాయి."
          },
          {
            question: "'దాత' అనే పదానికి వ్యతిరేక పదం ఏది?",
            options: ["లోభి", "దాని", "దానం", "ధనవంతుడు"],
            correct: 0,
            explanation: "'దాత' అంటే ఇచ్చేవాడు, దానికి వ్యతిరేకం 'లోభి' (ఇవ్వని వాడు)."
          },
          {
            question: "'మానవ సేవే మాధవ సేవ' అనే వాక్యం ఏమి సూచిస్తుంది?",
            options: ["దేవుడిని మాత్రమే పూజించాలి", "మనుషులకు సేవ చేయడమే దేవుని సేవ", "సేవ అనవసరం", "మాధవుడిని మాత్రమే కొలవాలి"],
            correct: 1,
            explanation: "మనుషులకు సేవ చేయడమే నిజమైన దేవుని సేవ అని ఈ వాక్యం సూచిస్తుంది."
          },
          {
            question: "'దానగుణం' ఏ సమాసానికి ఉదాహరణ?",
            options: ["ద్వంద్వ సమాసం", "తత్పురుష సమాసం", "అవ్యయీభావ సమాసం", "ద్విగు సమాసం"],
            correct: 1,
            explanation: "'దానగుణం' = దానం యొక్క గుణం - ఇది తత్పురుష సమాసం."
          },
          {
            question: "పాఠం ప్రకారం దానం ఎవరు చేయాలి?",
            options: ["కేవలం ధనవంతులు", "కేవలం రాజులు", "ప్రతి ఒక్కరూ తమ శక్తి మేరకు", "కేవలం పెద్దవాళ్ళు"],
            correct: 2,
            explanation: "ప్రతి ఒక్కరూ తమ శక్తి మేరకు దానం చేయాలని పాఠం బోధిస్తుంది."
          },
          {
            question: "'కరుణ' అనే పదానికి సమానార్థక పదం ఏది?",
            options: ["క్రోధం", "దయ", "లోభం", "మోహం"],
            correct: 1,
            explanation: "'కరుణ' అంటే దయ, జాలి అని అర్థం."
          },
          {
            question: "పాఠంలో చెప్పిన ప్రకారం దానం ఎలా చేయాలి?",
            options: ["బహిరంగంగా, అందరికీ తెలిసేలా", "రహస్యంగా, ప్రచారం లేకుండా", "బలవంతంగా", "అయిష్టంగా"],
            correct: 1,
            explanation: "దానం ప్రచారం కోసం కాకుండా నిశ్శబ్దంగా చేయాలని పాఠం చెబుతుంది."
          },
          {
            question: "'శాశ్వతం' అనే పదానికి వ్యతిరేక పదం ఏది?",
            options: ["నిత్యం", "అశాశ్వతం", "స్థిరం", "చిరకాలం"],
            correct: 1,
            explanation: "'శాశ్వతం' అంటే ఎప్పటికీ ఉండేది, దానికి వ్యతిరేకం 'అశాశ్వతం' (తాత్కాలికం)."
          },
          {
            question: "'దానశీలుడు' అంటే ఎవరు?",
            options: ["దానం తీసుకునే వాడు", "దానం చేసే స్వభావం కలవాడు", "దానం అడిగే వాడు", "దానం చేయని వాడు"],
            correct: 1,
            explanation: "'దానశీలుడు' అంటే దానం చేసే స్వభావం (శీలం) కలిగిన వ్యక్తి."
          },
          {
            question: "పాఠం ఏ ప్రక్రియకు చెందినది?",
            options: ["కవిత", "కథ", "వ్యాసం", "నాటకం"],
            correct: 2,
            explanation: "'ఏది గొప్పదానం' అనేది వ్యాసం ప్రక్రియకు చెందినది."
          },
          {
            question: "'పరోపకారం' అనే పదంలో ఎన్ని అక్షరాలు ఉన్నాయి?",
            options: ["నాలుగు", "ఐదు", "ఆరు", "ఏడు"],
            correct: 1,
            explanation: "'ప-రో-ప-కా-రం' - ఐదు అక్షరాలు ఉన్నాయి."
          },
          {
            question: "దానం చేయడం వల్ల ఏమి లభిస్తుంది?",
            options: ["కేవలం పేరు", "ఆత్మ సంతృప్తి మరియు పుణ్యం", "ధనం", "అధికారం"],
            correct: 1,
            explanation: "దానం చేయడం వల్ల ఆత్మ సంతృప్తి మరియు పుణ్యం లభిస్తాయని పాఠం బోధిస్తుంది."
          },
          {
            question: "'సత్కార్యం' అనే పదంలోని 'సత్' అంటే ఏమిటి?",
            options: ["చెడు", "మంచి", "పెద్ద", "చిన్న"],
            correct: 1,
            explanation: "'సత్' అంటే మంచి అని అర్థం. 'సత్కార్యం' అంటే మంచి పని."
          },
          {
            question: "పాఠంలో ప్రస్తావించిన దాన వీరుల గురించి ఏమి చెప్పబడింది?",
            options: ["వారు గొప్ప యోధులు", "వారు నిస్వార్థంగా దానం చేశారు", "వారు రాజులు మాత్రమే", "వారు విదేశీయులు"],
            correct: 1,
            explanation: "పాఠంలో ప్రస్తావించిన దాన వీరులు నిస్వార్థంగా దానం చేసినవారని చెప్పబడింది."
          },
          {
            question: "'ఉదారత' అనే పదానికి అర్థం ఏమిటి?",
            options: ["పిసినారితనం", "దాతృత్వం, ఔదార్యం", "స్వార్థం", "అసూయ"],
            correct: 1,
            explanation: "'ఉదారత' అంటే దాతృత్వం, ఔదార్యం, ఇతరులకు ఇచ్చే గుణం అని అర్థం."
          }
        ]
      },
      {
        id: 2,
        name: "మనిషి మారాలి",
        description: "మనిషి మార్పు, సామాజిక బాధ్యత మరియు నైతిక విలువల గురించి పాఠం",
        questions: [
          {
            question: "'మనిషి మారాలి' పాఠం ప్రధాన ఆశయం ఏమిటి?",
            options: ["డబ్బు సంపాదించడం", "మనిషి తన ప్రవర్తనలో మార్పు తెచ్చుకోవాలి", "ఇతరులను మార్చడం", "ప్రకృతిని మార్చడం"],
            correct: 1,
            explanation: "పాఠం ప్రధాన ఆశయం మనిషి తన ప్రవర్తనలో, ఆలోచనలో సానుకూల మార్పు తెచ్చుకోవాలని."
          },
          {
            question: "'మారాలి' అనే క్రియాపదం ఏ కాలానికి చెందినది?",
            options: ["భూతకాలం", "వర్తమానకాలం", "భవిష్యత్కాలం", "సామాన్య కాలం"],
            correct: 2,
            explanation: "'మారాలి' అనేది భవిష్యత్కాలం / విధ్యర్థకం (must change) క్రియాపదం."
          },
          {
            question: "పాఠం ప్రకారం మనిషి ఏ విషయంలో మారాలి?",
            options: ["వేషధారణలో", "ఆలోచనా విధానంలో మరియు ప్రవర్తనలో", "ఉద్యోగంలో", "ఊరిలో"],
            correct: 1,
            explanation: "మనిషి ఆలోచనా విధానంలో మరియు ప్రవర్తనలో మారాలని పాఠం బోధిస్తుంది."
          },
          {
            question: "'సామాజిక బాధ్యత' అంటే ఏమిటి?",
            options: ["వ్యక్తిగత లాభం", "సమాజం పట్ల ఉన్న కర్తవ్యం", "కుటుంబ బాధ్యత", "ఆర్థిక బాధ్యత"],
            correct: 1,
            explanation: "'సామాజిక బాధ్యత' అంటే సమాజం పట్ల ఉన్న కర్తవ్యం, బాధ్యత అని అర్థం."
          },
          {
            question: "'నైతిక విలువలు' అనే పదబంధానికి అర్థం ఏమిటి?",
            options: ["ధన సంపద", "నీతికి సంబంధించిన ఆదర్శాలు", "భౌతిక విలువలు", "మార్కెట్ విలువలు"],
            correct: 1,
            explanation: "'నైతిక విలువలు' అంటే నీతికి సంబంధించిన ఆదర్శాలు, సద్గుణాలు."
          },
          {
            question: "పాఠంలో ఏ రకమైన మార్పు గురించి చెప్పబడింది?",
            options: ["భౌతిక మార్పు", "ఆంతరిక / మానసిక మార్పు", "రాజకీయ మార్పు", "వాతావరణ మార్పు"],
            correct: 1,
            explanation: "పాఠంలో ఆంతరిక / మానసిక మార్పు గురించి చెప్పబడింది."
          },
          {
            question: "'స్వార్థం' అనే పదానికి వ్యతిరేక పదం ఏది?",
            options: ["పరార్థం / నిస్వార్థం", "అర్థం", "ధనం", "లాభం"],
            correct: 0,
            explanation: "'స్వార్థం' (తన కోసం) అనే పదానికి వ్యతిరేకం 'పరార్థం / నిస్వార్థం' (ఇతరుల కోసం)."
          },
          {
            question: "'మనిషి' అనే పదానికి బహువచనం ఏది?",
            options: ["మనిషులు", "మనుషులు", "మనుష్యులు", "మానవులు"],
            correct: 1,
            explanation: "'మనిషి' అనే పదానికి బహువచనం 'మనుషులు'."
          },
          {
            question: "పాఠం ప్రకారం సమాజంలో మార్పు ఎలా వస్తుంది?",
            options: ["ప్రభుత్వం మార్చితే", "ప్రతి వ్యక్తి తనలో మార్పు తెచ్చుకుంటే", "చట్టాలు మారితే", "డబ్బు ఉంటే"],
            correct: 1,
            explanation: "ప్రతి వ్యక్తి తనలో మార్పు తెచ్చుకుంటే సమాజంలో మార్పు వస్తుందని పాఠం చెబుతుంది."
          },
          {
            question: "'ప్రవర్తన' అనే పదానికి సమానార్థక పదం ఏది?",
            options: ["నడవడిక", "ఆహారం", "వస్త్రం", "ఆశ్రయం"],
            correct: 0,
            explanation: "'ప్రవర్తన' అంటే నడవడిక, వర్తనం అని అర్థం."
          },
          {
            question: "'మానవత్వం' అనే పదంలో ఏ ప్రత్యయం ఉంది?",
            options: ["త్వం", "వం", "మం", "నం"],
            correct: 0,
            explanation: "'మానవ + త్వం = మానవత్వం' - ఇందులో 'త్వం' ప్రత్యయం ఉంది."
          },
          {
            question: "పాఠంలో చెప్పిన ప్రకారం మంచి మనిషి లక్షణాలు ఏమిటి?",
            options: ["ధనవంతుడు, అధికారవంతుడు", "దయ, కరుణ, సహాయ గుణం", "అందమైన వాడు", "బలవంతుడు"],
            correct: 1,
            explanation: "మంచి మనిషి లక్షణాలు దయ, కరుణ, సహాయ గుణం అని పాఠం చెబుతుంది."
          },
          {
            question: "'సహకారం' అనే పదంలో ఉన్న ఉపసర్గ ఏది?",
            options: ["సహ", "కా", "రం", "సం"],
            correct: 0,
            explanation: "'సహ + కారం = సహకారం' - ఇందులో 'సహ' అనే ఉపసర్గ ఉంది, దాని అర్థం 'కలిసి'."
          },
          {
            question: "పాఠం సారాంశం ఏమిటి?",
            options: ["ధనం సంపాదించాలి", "మనిషి మంచి గుణాలతో మారాలి", "చదువు అనవసరం", "ప్రకృతిని నాశనం చేయాలి"],
            correct: 1,
            explanation: "మనిషి మంచి గుణాలతో, నైతిక విలువలతో మారాలి అనేది పాఠం సారాంశం."
          },
          {
            question: "'సంస్కారం' అంటే ఏమిటి?",
            options: ["చెడు అలవాట్లు", "మంచి నడవడిక, సంస్కృతి", "ధనం", "అధికారం"],
            correct: 1,
            explanation: "'సంస్కారం' అంటే మంచి నడవడిక, సంస్కృతి, శుద్ధి అని అర్థం."
          },
          {
            question: "'దుర్గుణాలు' అనే పదంలో 'దుర్' అంటే ఏమిటి?",
            options: ["మంచి", "చెడు", "పెద్ద", "చిన్న"],
            correct: 1,
            explanation: "'దుర్' అంటే చెడు అని అర్థం. 'దుర్గుణాలు' అంటే చెడు గుణాలు."
          },
          {
            question: "పాఠం ప్రకారం మార్పు ఎక్కడి నుండి మొదలవ్వాలి?",
            options: ["ఇతరుల నుండి", "ప్రభుత్వం నుండి", "తన నుండి (ఆత్మపరిశీలన)", "పాఠశాల నుండి"],
            correct: 2,
            explanation: "మార్పు తన నుండే మొదలవ్వాలని, ఆత్మపరిశీలన ముఖ్యమని పాఠం బోధిస్తుంది."
          },
          {
            question: "'ఆదర్శం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["అద్దం", "ఆచరించదగిన నమూనా", "ఆశయం", "ఆనందం"],
            correct: 1,
            explanation: "'ఆదర్శం' అంటే ఆచరించదగిన నమూనా, మార్గదర్శకం అని అర్థం."
          },
          {
            question: "'సద్గుణాలు' అనే పదంలో 'సత్' అనే ఉపసర్గ అర్థం ఏమిటి?",
            options: ["చెడు", "మంచి", "చాలా", "తక్కువ"],
            correct: 1,
            explanation: "'సత్' అంటే మంచి అని అర్థం. 'సద్గుణాలు' అంటే మంచి గుణాలు."
          },
          {
            question: "పాఠంలో ఏ సమస్యలు ప్రస్తావించబడ్డాయి?",
            options: ["ఆర్థిక సమస్యలు మాత్రమే", "స్వార్థం, అసూయ, అవినీతి వంటి సామాజిక సమస్యలు", "వాతావరణ సమస్యలు", "రాజకీయ సమస్యలు"],
            correct: 1,
            explanation: "పాఠంలో స్వార్థం, అసూయ, అవినీతి వంటి సామాజిక సమస్యలు ప్రస్తావించబడ్డాయి."
          },
          {
            question: "'అవినీతి' అనే పదానికి వ్యతిరేక పదం ఏది?",
            options: ["నీతి", "వినీతి", "సునీతి", "అనీతి"],
            correct: 0,
            explanation: "'అవినీతి' అంటే నీతి లేకపోవడం, దానికి వ్యతిరేకం 'నీతి'."
          },
          {
            question: "'మార్పు' అనే పదం ఏ వాచకం?",
            options: ["నామవాచకం", "క్రియావాచకం", "విశేషణం", "అవ్యయం"],
            correct: 0,
            explanation: "'మార్పు' అనేది నామవాచకం (noun), ఒక స్థితిని సూచిస్తుంది."
          },
          {
            question: "పాఠం ఏ ప్రక్రియకు చెందినది?",
            options: ["పద్యం", "గద్యం / వ్యాసం", "నాటిక", "లేఖ"],
            correct: 1,
            explanation: "'మనిషి మారాలి' అనేది గద్యం / వ్యాసం ప్రక్రియకు చెందినది."
          },
          {
            question: "'సమాజ శ్రేయస్సు' అంటే ఏమిటి?",
            options: ["వ్యక్తిగత లాభం", "సమాజం యొక్క మేలు, అభివృద్ధి", "సంపద పెరుగుదల", "జనాభా తగ్గుదల"],
            correct: 1,
            explanation: "'సమాజ శ్రేయస్సు' అంటే సమాజం యొక్క మేలు, అభివృద్ధి, క్షేమం."
          },
          {
            question: "'విచక్షణ' అనే పదానికి అర్థం ఏమిటి?",
            options: ["అజ్ఞానం", "మంచి చెడులను గ్రహించే శక్తి", "భయం", "సంతోషం"],
            correct: 1,
            explanation: "'విచక్షణ' అంటే మంచి చెడులను గ్రహించే శక్తి, వివేకం అని అర్థం."
          }
        ]
      },      {
        id: 3,
        name: "ప్రియమైన నాన్నకు",
        description: "తండ్రి ప్రేమ, కుటుంబ బంధాలు మరియు భావోద్వేగాల గురించి లేఖ రూప పాఠం",
        questions: [
          {
            question: "'ప్రియమైన నాన్నకు' పాఠం ఏ ప్రక్రియకు చెందినది?",
            options: ["కవిత", "కథ", "లేఖ (ఉత్తరం)", "నాటకం"],
            correct: 2,
            explanation: "ఈ పాఠం లేఖ (ఉత్తరం) ప్రక్రియకు చెందినది. ఒక బిడ్డ తండ్రికి రాసిన లేఖ."
          },
          {
            question: "ఈ లేఖను ఎవరు ఎవరికి రాశారు?",
            options: ["తండ్రి కొడుకుకు", "బిడ్డ తండ్రికి", "గురువు శిష్యుడికి", "స్నేహితుడు స్నేహితుడికి"],
            correct: 1,
            explanation: "ఈ లేఖను బిడ్డ తన ప్రియమైన తండ్రికి రాశారు."
          },
          {
            question: "'ప్రియమైన' అనే పదంలో ఏ ప్రత్యయం ఉంది?",
            options: ["ఐన", "మైన", "అయిన", "గల"],
            correct: 1,
            explanation: "'ప్రియ + మైన = ప్రియమైన' - ఇందులో 'మైన' ప్రత్యయం ఉంది."
          },
          {
            question: "పాఠంలో తండ్రి ప్రేమ గురించి ఏమని చెప్పబడింది?",
            options: ["తండ్రి ప్రేమ అనవసరం", "తండ్రి ప్రేమ నిశ్శబ్దంగా ఉంటుంది కానీ గొప్పది", "తండ్రి ప్రేమ తల్లి ప్రేమ కంటే తక్కువ", "తండ్రి ప్రేమ చూపించకూడదు"],
            correct: 1,
            explanation: "తండ్రి ప్రేమ నిశ్శబ్దంగా ఉంటుంది కానీ చాలా గొప్పదని, లోతైనదని పాఠంలో చెప్పబడింది."
          },
          {
            question: "'కుటుంబ బంధాలు' ఏ సమాసానికి ఉదాహరణ?",
            options: ["తత్పురుష సమాసం", "ద్వంద్వ సమాసం", "కర్మధారయ సమాసం", "బహువ్రీహి సమాసం"],
            correct: 0,
            explanation: "'కుటుంబ బంధాలు' = కుటుంబం యొక్క బంధాలు - ఇది తత్పురుష సమాసం."
          },
          {
            question: "లేఖ రాయడంలో మొదట ఏమి రాయాలి?",
            options: ["సారాంశం", "సంబోధన (ప్రియమైన నాన్నకు)", "సంతకం", "తేదీ"],
            correct: 1,
            explanation: "లేఖలో మొదట సంబోధన రాయాలి, ఉదా: 'ప్రియమైన నాన్నకు'."
          },
          {
            question: "'భావోద్వేగం' అనే పదం విడదీస్తే?",
            options: ["భావ + ఉద్వేగం", "భావో + ద్వేగం", "భా + వోద్వేగం", "భావోద్ + వేగం"],
            correct: 0,
            explanation: "'భావోద్వేగం' = భావ + ఉద్వేగం (గుణ సంధి: అ + ఉ = ఓ)."
          },
          {
            question: "'నాన్న' అనే పదానికి గౌరవ వాచకం ఏది?",
            options: ["అయ్య", "తండ్రిగారు", "అప్ప", "బాబు"],
            correct: 1,
            explanation: "'నాన్న' అనే పదానికి గౌరవ వాచకం 'తండ్రిగారు'."
          },
          {
            question: "పాఠంలో బిడ్డ తండ్రి త్యాగాల గురించి ఏమి చెప్పారు?",
            options: ["త్యాగాలు చేయలేదు", "కుటుంబం కోసం ఎన్నో త్యాగాలు చేశారు", "త్యాగాలు అనవసరం", "త్యాగాలు తక్కువ చేశారు"],
            correct: 1,
            explanation: "తండ్రి కుటుంబం కోసం ఎన్నో త్యాగాలు చేశారని బిడ్డ లేఖలో రాశారు."
          },
          {
            question: "'కృతజ్ఞత' అంటే ఏమిటి?",
            options: ["మరచిపోవడం", "ఇతరులు చేసిన మేలును గుర్తుంచుకోవడం", "కోపం", "అసూయ"],
            correct: 1,
            explanation: "'కృతజ్ఞత' అంటే ఇతరులు చేసిన మేలును గుర్తుంచుకొని ధన్యవాదాలు తెలపడం."
          },
          {
            question: "లేఖ చివరలో ఏమి రాయాలి?",
            options: ["మరో లేఖ", "ఇట్లు / మీ ప్రేమతో మరియు సంతకం", "కథ", "పాట"],
            correct: 1,
            explanation: "లేఖ చివరలో 'ఇట్లు' లేదా 'మీ ప్రేమతో' అని రాసి సంతకం పెట్టాలి."
          },
          {
            question: "'త్యాగం' అనే పదానికి వ్యతిరేక పదం ఏది?",
            options: ["భోగం", "యోగం", "రాగం", "వేగం"],
            correct: 0,
            explanation: "'త్యాగం' (వదులుకోవడం) కి వ్యతిరేకం 'భోగం' (అనుభవించడం)."
          },
          {
            question: "పాఠంలో తండ్రి-బిడ్డ బంధం గురించి ఏమి తెలుస్తుంది?",
            options: ["బంధం బలహీనం", "బంధం చాలా బలమైనది, ప్రేమతో నిండినది", "బంధం అనవసరం", "బంధం లేదు"],
            correct: 1,
            explanation: "తండ్రి-బిడ్డ బంధం చాలా బలమైనది, ప్రేమతో నిండినదని పాఠం చెబుతుంది."
          },
          {
            question: "'ఆప్యాయత' అనే పదానికి అర్థం ఏమిటి?",
            options: ["కోపం", "ప్రేమ, అనురాగం", "భయం", "ద్వేషం"],
            correct: 1,
            explanation: "'ఆప్యాయత' అంటే ప్రేమ, అనురాగం, వాత్సల్యం అని అర్థం."
          },
          {
            question: "'సంబోధన' అంటే ఏమిటి?",
            options: ["చివరి మాట", "ఎవరినైనా పిలవడం / సంబోధించడం", "వీడ్కోలు", "ఆహ్వానం"],
            correct: 1,
            explanation: "'సంబోధన' అంటే ఎవరినైనా పిలవడం, ఉద్దేశించి మాట్లాడడం."
          },
          {
            question: "లేఖలో ఉపయోగించే విరామ చిహ్నం ఏది?",
            options: ["ఆశ్చర్య చిహ్నం (!)", "ప్రశ్నార్థక చిహ్నం (?)", "అల్పవిరామం (,)", "పూర్ణవిరామం (.)"],
            correct: 2,
            explanation: "లేఖలో సంబోధన తర్వాత అల్పవిరామం (,) ఉపయోగిస్తారు."
          },
          {
            question: "'వాత్సల్యం' అనే పదానికి సమానార్థక పదం ఏది?",
            options: ["ద్వేషం", "ప్రేమ", "కోపం", "భయం"],
            correct: 1,
            explanation: "'వాత్సల్యం' అంటే ప్రేమ, ఆప్యాయత అని అర్థం."
          },
          {
            question: "పాఠంలో బిడ్డ తండ్రి పట్ల ఏమి వ్యక్తం చేశారు?",
            options: ["కోపం", "కృతజ్ఞత మరియు ప్రేమ", "అసూయ", "నిరాశ"],
            correct: 1,
            explanation: "బిడ్డ తండ్రి పట్ల కృతజ్ఞత మరియు ప్రేమ వ్యక్తం చేశారు."
          },
          {
            question: "'అనురాగం' అనే పదంలో 'అను' ఉపసర్గ అర్థం ఏమిటి?",
            options: ["వ్యతిరేకం", "వెంట, తర్వాత", "ముందు", "పైన"],
            correct: 1,
            explanation: "'అను' అంటే వెంట, తర్వాత అని అర్థం. 'అనురాగం' అంటే ప్రేమ వెంట నడవడం."
          },
          {
            question: "'నాన్న' అనే పదం ఏ భాషా వర్గానికి చెందినది?",
            options: ["తత్సమం", "తద్భవం", "దేశ్యం", "అన్యదేశ్యం"],
            correct: 2,
            explanation: "'నాన్న' అనేది దేశ్యం (స్థానిక తెలుగు పదం)."
          },
          {
            question: "లేఖ రాయడంలో ఏ అంశాలు ఉండాలి?",
            options: ["సంబోధన, విషయం, ముగింపు, సంతకం", "కేవలం విషయం", "కేవలం సంతకం", "కేవలం తేదీ"],
            correct: 0,
            explanation: "లేఖలో సంబోధన, విషయం, ముగింపు, సంతకం ఉండాలి."
          },
          {
            question: "'హృదయం' అనే పదానికి తెలుగు పదం ఏది?",
            options: ["మనసు / గుండె", "తల", "కాలు", "చేయి"],
            correct: 0,
            explanation: "'హృదయం' అనే సంస్కృత పదానికి తెలుగులో 'మనసు' లేదా 'గుండె' అని అంటారు."
          },
          {
            question: "పాఠం నుండి మనం నేర్చుకునే నీతి ఏమిటి?",
            options: ["తల్లిదండ్రులను గౌరవించాలి, వారి త్యాగాలను గుర్తించాలి", "తల్లిదండ్రులను పట్టించుకోకూడదు", "ధనం ముఖ్యం", "చదువు అనవసరం"],
            correct: 0,
            explanation: "తల్లిదండ్రులను గౌరవించాలి, వారి త్యాగాలను గుర్తించాలి అనేది ఈ పాఠం నీతి."
          },
          {
            question: "'ఉత్తరం' అనే పదానికి సమానార్థక పదం ఏది?",
            options: ["జాబు / లేఖ", "దిక్కు", "పైన", "తర్వాత"],
            correct: 0,
            explanation: "'ఉత్తరం' అంటే జాబు లేదా లేఖ అని అర్థం (ఈ సందర్భంలో)."
          },
          {
            question: "'అమూల్యమైన' అనే పదానికి అర్థం ఏమిటి?",
            options: ["విలువ లేని", "విలువ కట్టలేని, అత్యంత విలువైన", "చౌకైన", "సాధారణమైన"],
            correct: 1,
            explanation: "'అమూల్యమైన' అంటే విలువ కట్టలేని, అత్యంత విలువైన అని అర్థం."
          }
        ]
      },
      {
        id: 4,
        name: "బతుకమ్మ పండుగ",
        description: "తెలంగాణ సంస్కృతి, బతుకమ్మ పండుగ సంప్రదాయాలు మరియు ప్రాముఖ్యత",
        questions: [
          {
            question: "బతుకమ్మ పండుగ ఏ రాష్ట్రంలో ప్రముఖంగా జరుపుకుంటారు?",
            options: ["ఆంధ్రప్రదేశ్", "తెలంగాణ", "కర్ణాటక", "తమిళనాడు"],
            correct: 1,
            explanation: "బతుకమ్మ పండుగ తెలంగాణ రాష్ట్రంలో ప్రముఖంగా జరుపుకుంటారు."
          },
          {
            question: "'బతుకమ్మ' అనే పదానికి అర్థం ఏమిటి?",
            options: ["చనిపోయిన అమ్మ", "బతికున్న అమ్మ / బ్రతుకమ్మా", "పూల అమ్మ", "నీటి అమ్మ"],
            correct: 1,
            explanation: "'బతుకమ్మ' అంటే 'బ్రతుకు + అమ్మ' = బతికి ఉన్న అమ్మ, బ్రతుకమ్మా అని అర్థం."
          },
          {
            question: "బతుకమ్మ పండుగ ఏ కాలంలో జరుపుకుంటారు?",
            options: ["వేసవి కాలంలో", "శరదృతువులో (ఆశ్వయుజ మాసం)", "శీతాకాలంలో", "వర్షాకాలంలో"],
            correct: 1,
            explanation: "బతుకమ్మ పండుగ శరదృతువులో ఆశ్వయుజ మాసంలో జరుపుకుంటారు."
          },
          {
            question: "బతుకమ్మను ఏ పువ్వులతో అలంకరిస్తారు?",
            options: ["గులాబీ పువ్వులు", "తంగేడు, గునుగు పువ్వులు", "మల్లె పువ్వులు", "కమలం పువ్వులు"],
            correct: 1,
            explanation: "బతుకమ్మను తంగేడు, గునుగు మొదలైన పువ్వులతో అలంకరిస్తారు."
          },
          {
            question: "బతుకమ్మ పండుగ ఎన్ని రోజులు జరుపుకుంటారు?",
            options: ["ఐదు రోజులు", "ఏడు రోజులు", "తొమ్మిది రోజులు", "పదకొండు రోజులు"],
            correct: 2,
            explanation: "బతుకమ్మ పండుగ తొమ్మిది రోజులు (నవరాత్రులతో పాటు) జరుపుకుంటారు."
          },
          {
            question: "బతుకమ్మను చివరగా ఏమి చేస్తారు?",
            options: ["ఇంట్లో ఉంచుతారు", "నీటిలో నిమజ్జనం చేస్తారు", "తగలబెడతారు", "ఆరబెడతారు"],
            correct: 1,
            explanation: "బతుకమ్మను చివరగా చెరువులో లేదా నీటిలో నిమజ్జనం చేస్తారు."
          },
          {
            question: "'సంప్రదాయం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["ఆధునికత", "తరతరాలుగా వస్తున్న ఆచారం", "కొత్త పద్ధతి", "విదేశీ అలవాటు"],
            correct: 1,
            explanation: "'సంప్రదాయం' అంటే తరతరాలుగా ఆచరిస్తున్న ఆచారం, పద్ధతి."
          },
          {
            question: "బతుకమ్మ పండుగలో స్త్రీలు ఏమి చేస్తారు?",
            options: ["ఉపవాసం ఉంటారు", "బతుకమ్మ చుట్టూ తిరుగుతూ పాటలు పాడతారు", "ఇంట్లో ఉంటారు", "యాత్రలు చేస్తారు"],
            correct: 1,
            explanation: "స్త్రీలు బతుకమ్మ చుట్టూ తిరుగుతూ బతుకమ్మ పాటలు పాడతారు."
          },
          {
            question: "'సంస్కృతి' అనే పదానికి సమానార్థక పదం ఏది?",
            options: ["సంస్కృతం", "నాగరికత", "భాష", "సాహిత్యం"],
            correct: 1,
            explanation: "'సంస్కృతి' అంటే నాగరికత, సాంస్కృతిక వారసత్వం అని అర్థం."
          },
          {
            question: "బతుకమ్మ పండుగ ఏ దేవతకు సంబంధించినది?",
            options: ["సరస్వతి", "గౌరీ దేవి / పార్వతి", "లక్ష్మి", "దుర్గ"],
            correct: 1,
            explanation: "బతుకమ్మ పండుగ గౌరీ దేవి (పార్వతి) కి సంబంధించినది."
          },
          {
            question: "'పండుగ' అనే పదానికి ఆంగ్ల పదం ఏది?",
            options: ["Holiday", "Festival", "Function", "Ceremony"],
            correct: 1,
            explanation: "'పండుగ' అనే పదానికి ఆంగ్లంలో 'Festival' అని అంటారు."
          },
          {
            question: "'తంగేడు పువ్వు' ఏ రంగులో ఉంటుంది?",
            options: ["ఎరుపు", "పసుపు", "తెలుపు", "నీలం"],
            correct: 1,
            explanation: "తంగేడు పువ్వు పసుపు రంగులో ఉంటుంది, ఇది బతుకమ్మ ప్రధాన పువ్వు."
          },
          {
            question: "'నిమజ్జనం' అంటే ఏమిటి?",
            options: ["ఎత్తడం", "నీటిలో ముంచడం", "తగలబెట్టడం", "ఆరబెట్టడం"],
            correct: 1,
            explanation: "'నిమజ్జనం' అంటే నీటిలో ముంచడం, మునకవేయడం అని అర్థం."
          },
          {
            question: "బతుకమ్మ పండుగ ఏ నెలలో వస్తుంది (ఆంగ్ల నెల)?",
            options: ["జనవరి-ఫిబ్రవరి", "సెప్టెంబర్-అక్టోబర్", "మార్చి-ఏప్రిల్", "జూన్-జూలై"],
            correct: 1,
            explanation: "బతుకమ్మ పండుగ సాధారణంగా సెప్టెంబర్-అక్టోబర్ నెలల్లో వస్తుంది."
          },
          {
            question: "'వారసత్వం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["కొత్తగా సృష్టించడం", "తరతరాలుగా అందిన సంపద / సంస్కృతి", "నాశనం చేయడం", "మరచిపోవడం"],
            correct: 1,
            explanation: "'వారసత్వం' అంటే తరతరాలుగా అందిన సంపద లేదా సాంస్కృతిక ఆస్తి."
          },
          {
            question: "బతుకమ్మను ఎలా తయారు చేస్తారు?",
            options: ["మట్టితో", "పువ్వులను రేకులతో పేర్చి తంబాలంలో", "కాగితంతో", "గుడ్డతో"],
            correct: 1,
            explanation: "పువ్వులను రేకులుగా పేర్చి తంబాలంలో (పళ్ళెంలో) బతుకమ్మను తయారు చేస్తారు."
          },
          {
            question: "'ఆచారం' అనే పదానికి సమానార్థక పదం ఏది?",
            options: ["సంప్రదాయం", "ఆధునికత", "మార్పు", "విప్లవం"],
            correct: 0,
            explanation: "'ఆచారం' అంటే సంప్రదాయం, ఆనవాయితీ అని అర్థం."
          },
          {
            question: "పాఠంలో బతుకమ్మ పండుగ ప్రాముఖ్యత ఏమిటి?",
            options: ["ఆర్థిక ప్రాముఖ్యత", "సాంస్కృతిక, ధార్మిక ప్రాముఖ్యత", "రాజకీయ ప్రాముఖ్యత", "శాస్త్రీయ ప్రాముఖ్యత"],
            correct: 1,
            explanation: "బతుకమ్మ పండుగకు సాంస్కృతిక, ధార్మిక ప్రాముఖ్యత ఉంది."
          },
          {
            question: "'తెలంగాణ' అనే పదం ఏ భాషా వర్గానికి చెందినది?",
            options: ["తత్సమం", "తద్భవం", "దేశ్యం", "అన్యదేశ్యం"],
            correct: 2,
            explanation: "'తెలంగాణ' అనేది దేశ్యం (స్థానిక పదం), ఒక ప్రాంత నామం."
          },
          {
            question: "బతుకమ్మ పాటలలో ఏ అంశాలు ఉంటాయి?",
            options: ["రాజకీయ అంశాలు", "పురాణ కథలు, ప్రకృతి, స్త్రీ జీవితం", "శాస్త్రీయ అంశాలు", "చారిత్రక యుద్ధాలు"],
            correct: 1,
            explanation: "బతుకమ్మ పాటలలో పురాణ కథలు, ప్రకృతి, స్త్రీ జీవితం వంటి అంశాలు ఉంటాయి."
          },
          {
            question: "'ప్రాముఖ్యత' అనే పదంలో మూల పదం ఏది?",
            options: ["ప్రముఖ", "ప్రా", "ముఖ్య", "ఖ్యత"],
            correct: 2,
            explanation: "'ముఖ్య' అనేది మూల పదం, 'ప్రాముఖ్యత' అంటే ముఖ్యమైన స్థానం."
          },
          {
            question: "బతుకమ్మ పండుగ చివరి రోజును ఏమని పిలుస్తారు?",
            options: ["చిన్న బతుకమ్మ", "పెద్ద బతుకమ్మ / సద్దుల బతుకమ్మ", "మధ్య బతుకమ్మ", "ఆఖరి బతుకమ్మ"],
            correct: 1,
            explanation: "చివరి రోజును 'సద్దుల బతుకమ్మ' లేదా 'పెద్ద బతుకమ్మ' అని పిలుస్తారు."
          },
          {
            question: "'సద్దుల బతుకమ్మ' రోజు ఏమి చేస్తారు?",
            options: ["ఉపవాసం ఉంటారు", "సద్దులు (నైవేద్యాలు) పెట్టి బతుకమ్మను నిమజ్జనం చేస్తారు", "నిద్ర పోతారు", "పనులు చేస్తారు"],
            correct: 1,
            explanation: "సద్దుల బతుకమ్మ రోజు సద్దులు (నైవేద్యాలు) పెట్టి బతుకమ్మను నిమజ్జనం చేస్తారు."
          },
          {
            question: "'ప్రకృతి' అనే పదానికి సమానార్థక పదం ఏది?",
            options: ["విరుద్ధం", "స్వభావం / సహజ పరిసరాలు", "కృత్రిమం", "మానవ నిర్మితం"],
            correct: 1,
            explanation: "'ప్రకృతి' అంటే సహజ పరిసరాలు, స్వభావం అని అర్థం."
          },
          {
            question: "బతుకమ్మ పండుగ తెలంగాణ ఏ అస్తిత్వానికి ప్రతీక?",
            options: ["ఆర్థిక అస్తిత్వం", "సాంస్కృతిక అస్తిత్వం మరియు గుర్తింపు", "రాజకీయ అస్తిత్వం", "భౌగోళిక అస్తిత్వం"],
            correct: 1,
            explanation: "బతుకమ్మ పండుగ తెలంగాణ సాంస్కృతిక అస్తిత్వానికి మరియు గుర్తింపుకు ప్రతీక."
          }
        ]
      },      {
        id: 5,
        name: "మధుర వచనములు",
        description: "మధురమైన వచనాలు, సూక్తులు మరియు నీతి వాక్యాలు",
        questions: [
          {
            question: "'మధుర వచనములు' పాఠం ఏ ప్రక్రియకు చెందినది?",
            options: ["కథ", "నీతి వాక్యాలు / సూక్తులు", "నాటకం", "నవల"],
            correct: 1,
            explanation: "'మధుర వచనములు' పాఠం నీతి వాక్యాలు / సూక్తులు ప్రక్రియకు చెందినది."
          },
          {
            question: "'మధురం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["చేదు", "తీపి / ఇంపైన", "పుల్లని", "ఉప్పని"],
            correct: 1,
            explanation: "'మధురం' అంటే తీపి, ఇంపైన, రుచికరమైన అని అర్థం."
          },
          {
            question: "'వచనం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["పద్యం", "గద్యంలో చెప్పిన మాట", "పాట", "కథ"],
            correct: 1,
            explanation: "'వచనం' అంటే గద్యంలో చెప్పిన మాట, ఉపదేశం అని అర్థం."
          },
          {
            question: "సూక్తులు ఏ ఉద్దేశంతో చెప్పబడతాయి?",
            options: ["వినోదం కోసం", "నీతిని బోధించడం కోసం", "కోపం కోసం", "భయపెట్టడం కోసం"],
            correct: 1,
            explanation: "సూక్తులు జీవితంలో నీతిని, మంచి మార్గాన్ని బోధించడం కోసం చెప్పబడతాయి."
          },
          {
            question: "'సూక్తి' అనే పదంలో 'సు' అంటే ఏమిటి?",
            options: ["చెడు", "మంచి", "చాలా", "తక్కువ"],
            correct: 1,
            explanation: "'సు' అంటే మంచి, 'ఉక్తి' అంటే మాట. 'సూక్తి' అంటే మంచి మాట."
          },
          {
            question: "'నోరు మంచిదైతే ఊరు మంచిది' - ఈ సూక్తి అర్థం ఏమిటి?",
            options: ["ఊరు బాగుంటే నోరు బాగుంటుంది", "మంచిగా మాట్లాడితే అందరూ మన వారే", "నోరు ఎప్పుడూ మూసుకోవాలి", "ఊరు వదిలి వెళ్ళాలి"],
            correct: 1,
            explanation: "మంచిగా మాట్లాడితే అందరూ మనకు అనుకూలంగా ఉంటారని ఈ సూక్తి అర్థం."
          },
          {
            question: "'వినయం విద్యకు అలంకారం' - ఈ వాక్యంలో అలంకారం అంటే?",
            options: ["ఆభరణం / అందం", "బరువు", "అడ్డంకి", "శత్రువు"],
            correct: 0,
            explanation: "'అలంకారం' అంటే ఆభరణం, అందం. విద్యకు వినయం అలంకారంగా ఉంటుందని అర్థం."
          },
          {
            question: "'నీతి' అనే పదానికి వ్యతిరేక పదం ఏది?",
            options: ["సునీతి", "అనీతి", "వినీతి", "ప్రనీతి"],
            correct: 1,
            explanation: "'నీతి' కి వ్యతిరేకం 'అనీతి' (నీతి లేకపోవడం)."
          },
          {
            question: "మధుర వచనాలు ఎందుకు ముఖ్యమైనవి?",
            options: ["పరీక్షల కోసం", "జీవితంలో మంచి మార్గదర్శకత్వం కోసం", "సినిమాల కోసం", "ఆటల కోసం"],
            correct: 1,
            explanation: "మధుర వచనాలు జీవితంలో మంచి మార్గదర్శకత్వం అందిస్తాయి."
          },
          {
            question: "'చదువు రాని వాడు వింత పశువు' - ఈ సూక్తి ఏమి బోధిస్తుంది?",
            options: ["చదువు అనవసరం", "చదువు చాలా ముఖ్యం", "పశువులు చదువుకోవాలి", "వింతగా ఉండాలి"],
            correct: 1,
            explanation: "చదువు లేని వాడు పశువుతో సమానమని, అందుకే చదువు చాలా ముఖ్యమని ఈ సూక్తి బోధిస్తుంది."
          },
          {
            question: "'ఓర్పు' అనే పదానికి సమానార్థక పదం ఏది?",
            options: ["క్రోధం", "సహనం", "అసహనం", "కోపం"],
            correct: 1,
            explanation: "'ఓర్పు' అంటే సహనం, ఓపిక అని అర్థం."
          },
          {
            question: "'వాక్యం' అనే పదం ఏ భాషా వర్గానికి చెందినది?",
            options: ["దేశ్యం", "తత్సమం", "తద్భవం", "అన్యదేశ్యం"],
            correct: 1,
            explanation: "'వాక్యం' అనేది సంస్కృతం నుండి వచ్చిన తత్సమ పదం."
          },
          {
            question: "'మాట మంటికంటే బరువు' - ఈ సూక్తి అర్థం ఏమిటి?",
            options: ["మాట బరువు ఉంటుంది", "ఇచ్చిన మాట నిలబెట్టుకోవాలి", "మాట్లాడకూడదు", "మంటి బరువు తక్కువ"],
            correct: 1,
            explanation: "ఇచ్చిన మాటకు విలువ ఉంటుంది, దానిని నిలబెట్టుకోవాలని ఈ సూక్తి అర్థం."
          },
          {
            question: "'ధర్మం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["అధర్మం", "న్యాయం, కర్తవ్యం", "అన్యాయం", "పాపం"],
            correct: 1,
            explanation: "'ధర్మం' అంటే న్యాయం, కర్తవ్యం, సరైన మార్గం అని అర్థం."
          },
          {
            question: "'పరోపకారమిదం శరీరం' అనే వాక్యం అర్థం ఏమిటి?",
            options: ["శరీరం బలంగా ఉండాలి", "ఈ శరీరం పరోపకారం కోసమే", "శరీరాన్ని పూజించాలి", "శరీరం శాశ్వతం"],
            correct: 1,
            explanation: "ఈ శరీరం ఇతరులకు ఉపకారం చేయడం కోసమే అని ఈ వాక్యం అర్థం."
          },
          {
            question: "'విద్య' అనే పదానికి వ్యతిరేక పదం ఏది?",
            options: ["అవిద్య", "సువిద్య", "పరవిద్య", "మహావిద్య"],
            correct: 0,
            explanation: "'విద్య' (జ్ఞానం) కి వ్యతిరేకం 'అవిద్య' (అజ్ఞానం)."
          },
          {
            question: "'సత్యం వద, ధర్మం చర' అనే వాక్యం అర్థం ఏమిటి?",
            options: ["అబద్ధం చెప్పు", "సత్యం మాట్లాడు, ధర్మాన్ని ఆచరించు", "ధర్మం వదులు", "సత్యం మరచిపో"],
            correct: 1,
            explanation: "'సత్యం వద' (సత్యం మాట్లాడు), 'ధర్మం చర' (ధర్మాన్ని ఆచరించు) అని అర్థం."
          },
          {
            question: "'ఉపదేశం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["శిక్ష", "బోధన, హితవు చెప్పడం", "కోపం", "ఆజ్ఞ"],
            correct: 1,
            explanation: "'ఉపదేశం' అంటే బోధన, హితవు చెప్పడం, మార్గదర్శకత్వం."
          },
          {
            question: "'అహింసా పరమో ధర్మః' అనే వాక్యం అర్థం ఏమిటి?",
            options: ["హింస గొప్పది", "అహింస గొప్ప ధర్మం", "ధర్మం అనవసరం", "హింస ధర్మం"],
            correct: 1,
            explanation: "అహింస (హింస చేయకపోవడం) అన్ని ధర్మాలలో గొప్ప ధర్మం అని అర్థం."
          },
          {
            question: "'గురువు' అనే పదానికి సమానార్థక పదం ఏది?",
            options: ["శిష్యుడు", "ఆచార్యుడు", "విద్యార్థి", "బాలుడు"],
            correct: 1,
            explanation: "'గురువు' అంటే ఆచార్యుడు, ఉపాధ్యాయుడు అని అర్థం."
          },
          {
            question: "'మాతృ దేవో భవ' అంటే ఏమిటి?",
            options: ["తల్లిని దేవతగా భావించు", "తండ్రిని దేవతగా భావించు", "గురువును దేవతగా భావించు", "అతిథిని దేవతగా భావించు"],
            correct: 0,
            explanation: "'మాతృ దేవో భవ' అంటే తల్లిని దేవతగా భావించు అని అర్థం."
          },
          {
            question: "'విజ్ఞానం' అనే పదంలో 'వి' ఉపసర్గ అర్థం ఏమిటి?",
            options: ["లేకపోవడం", "విశేషమైన", "వ్యతిరేకం", "చిన్నది"],
            correct: 1,
            explanation: "'వి' అంటే విశేషమైన. 'విజ్ఞానం' అంటే విశేషమైన జ్ఞానం."
          },
          {
            question: "'సత్సంగతి' అంటే ఏమిటి?",
            options: ["చెడ్డవారి సహవాసం", "మంచివారి సహవాసం", "ఒంటరిగా ఉండడం", "యాత్ర చేయడం"],
            correct: 1,
            explanation: "'సత్సంగతి' అంటే మంచివారి సహవాసం, సజ్జన సాంగత్యం."
          },
          {
            question: "మధుర వచనాలు ఎవరికి ఉపయోగపడతాయి?",
            options: ["కేవలం పిల్లలకు", "కేవలం పెద్దవారికి", "అందరికీ", "ఎవరికీ ఉపయోగపడవు"],
            correct: 2,
            explanation: "మధుర వచనాలు అందరికీ ఉపయోగపడతాయి, అవి సార్వకాలిక సత్యాలు."
          },
          {
            question: "'క్షమా గుణం' అంటే ఏమిటి?",
            options: ["కోపం చేయడం", "క్షమించే గుణం, ఓర్పు", "ప్రతీకారం తీర్చుకోవడం", "శత్రుత్వం పెంచడం"],
            correct: 1,
            explanation: "'క్షమా గుణం' అంటే క్షమించే గుణం, ఇతరుల తప్పులను మన్నించే స్వభావం."
          }
        ]
      },
      {
        id: 6,
        name: "ఐకమత్యం",
        description: "ఐకమత్యం యొక్క ప్రాముఖ్యత, సమైక్యత మరియు సహకారం గురించి పాఠం",
        questions: [
          {
            question: "'ఐకమత్యం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["విభేదం", "ఒకే మనసుతో కలిసి ఉండడం", "వేరుపడటం", "పోట్లాట"],
            correct: 1,
            explanation: "'ఐకమత్యం' అంటే ఒకే మనసుతో, ఏకాభిప్రాయంతో కలిసి ఉండడం."
          },
          {
            question: "'ఐకమత్యం' పాఠం ప్రధాన సందేశం ఏమిటి?",
            options: ["ఒంటరిగా ఉండాలి", "కలిసి ఉంటే కలదు సుఖం", "పోట్లాడాలి", "విడిపోవాలి"],
            correct: 1,
            explanation: "కలిసి ఉంటే సుఖం కలుగుతుంది, ఐకమత్యంలో బలం ఉంది అనేది ప్రధాన సందేశం."
          },
          {
            question: "'ఐక్యం' అనే పదానికి వ్యతిరేక పదం ఏది?",
            options: ["సమైక్యం", "అనైక్యం", "సంయుక్తం", "సంఘం"],
            correct: 1,
            explanation: "'ఐక్యం' (కలిసి ఉండటం) కి వ్యతిరేకం 'అనైక్యం' (విడిపోవడం)."
          },
          {
            question: "పాఠంలో ఐకమత్యం గురించి ఏ ఉదాహరణ ఇవ్వబడింది?",
            options: ["ఒంటరి కర్ర విరుగుతుంది, కట్ట విరగదు", "నీరు పల్లమెరుగు", "ఆకలి రుచి ఎరుగదు", "చేప నీటిలో ఉంటుంది"],
            correct: 0,
            explanation: "ఒంటరి కర్ర తేలికగా విరుగుతుంది, కానీ కర్రల కట్ట విరగదు - ఐకమత్యానికి ఉదాహరణ."
          },
          {
            question: "'సమైక్యత' అనే పదంలో 'సం' ఉపసర్గ అర్థం ఏమిటి?",
            options: ["వేరుగా", "కలిసి", "వ్యతిరేకం", "ముందు"],
            correct: 1,
            explanation: "'సం' అంటే కలిసి, బాగుగా అని అర్థం."
          },
          {
            question: "'బలం' అనే పదానికి సమానార్థక పదం ఏది?",
            options: ["బలహీనత", "శక్తి", "దుర్బలత్వం", "అశక్తత"],
            correct: 1,
            explanation: "'బలం' అంటే శక్తి, సామర్థ్యం అని అర్థం."
          },
          {
            question: "పాఠంలో ఐకమత్యం లేకపోతే ఏమి జరుగుతుందని చెప్పబడింది?",
            options: ["విజయం వస్తుంది", "నాశనం జరుగుతుంది", "సంతోషం వస్తుంది", "బలం పెరుగుతుంది"],
            correct: 1,
            explanation: "ఐకమత్యం లేకపోతే నాశనం జరుగుతుందని, ఓటమి తప్పదని పాఠం చెబుతుంది."
          },
          {
            question: "'సహకారం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["ఒంటరిగా పని చేయడం", "కలిసి పని చేయడం", "అడ్డుపడడం", "ఎదిరించడం"],
            correct: 1,
            explanation: "'సహకారం' అంటే కలిసి పని చేయడం, ఒకరికొకరు సహాయం చేసుకోవడం."
          },
          {
            question: "'ఏకం' అనే సంఖ్యావాచకం అర్థం ఏమిటి?",
            options: ["రెండు", "ఒకటి", "మూడు", "నాలుగు"],
            correct: 1,
            explanation: "'ఏకం' అంటే ఒకటి అని అర్థం. 'ఐకమత్యం' లో 'ఏక + మత్యం' ఉంది."
          },
          {
            question: "పాఠం ఏ ప్రక్రియకు చెందినది?",
            options: ["పద్యం", "కథ / గద్యం", "నాటకం", "లేఖ"],
            correct: 1,
            explanation: "'ఐకమత్యం' పాఠం కథ / గద్యం ప్రక్రియకు చెందినది."
          },
          {
            question: "'కలిసి ఉంటే కలదు సుఖం' - ఈ వాక్యంలో ఏ అలంకారం ఉంది?",
            options: ["ఉపమా అలంకారం", "ఆది ప్రాస అలంకారం", "రూపకం", "అతిశయోక్తి"],
            correct: 1,
            explanation: "'కలిసి', 'కలదు' - 'క' అక్షరం మొదట్లో పునరావృతమవడం ఆది ప్రాస అలంకారం."
          },
          {
            question: "'విభేదం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["ఐక్యం", "అభిప్రాయ భేదం, తగాదా", "ఒప్పందం", "స్నేహం"],
            correct: 1,
            explanation: "'విభేదం' అంటే అభిప్రాయ భేదం, తగాదా, వేర్వేరు అభిప్రాయాలు."
          },
          {
            question: "ఐకమత్యం ఎక్కడ అవసరం?",
            options: ["కేవలం కుటుంబంలో", "కేవలం దేశంలో", "జీవితంలోని ప్రతి రంగంలో", "కేవలం పాఠశాలలో"],
            correct: 2,
            explanation: "ఐకమత్యం జీవితంలోని ప్రతి రంగంలో - కుటుంబం, సమాజం, దేశం - అవసరం."
          },
          {
            question: "'సంఘటన' అనే పదానికి అర్థం ఏమిటి?",
            options: ["విడిపోవడం", "కలిసి ఏర్పడటం, సమూహం", "ఒంటరిగా ఉండడం", "పోరాడడం"],
            correct: 1,
            explanation: "'సంఘటన' అంటే కలిసి ఏర్పడటం, సమూహం, సంస్థ అని అర్థం."
          },
          {
            question: "'బలహీనత' అనే పదానికి వ్యతిరేక పదం ఏది?",
            options: ["దుర్బలత్వం", "బలం / శక్తి", "అశక్తత", "రోగం"],
            correct: 1,
            explanation: "'బలహీనత' కి వ్యతిరేకం 'బలం' లేదా 'శక్తి'."
          },
          {
            question: "పాఠంలో పక్షుల ఉదాహరణ ఎందుకు ఇవ్వబడింది?",
            options: ["పక్షులు అందంగా ఉంటాయి కాబట్టి", "పక్షులు కలిసి ఉంటే బలంగా ఉంటాయని చూపించడానికి", "పక్షులు ఎగరగలవు కాబట్టి", "పక్షులు తినగలవు కాబట్టి"],
            correct: 1,
            explanation: "పక్షులు కలిసి ఉంటే శత్రువులను ఎదుర్కోగలవని, ఐకమత్యంలో బలం ఉందని చూపించడానికి."
          },
          {
            question: "'ఏకాభిప్రాయం' అంటే ఏమిటి?",
            options: ["వేర్వేరు అభిప్రాయాలు", "ఒకే అభిప్రాయం", "అభిప్రాయం లేకపోవడం", "తప్పుడు అభిప్రాయం"],
            correct: 1,
            explanation: "'ఏకాభిప్రాయం' అంటే అందరికీ ఒకే అభిప్రాయం ఉండడం."
          },
          {
            question: "'సంఘ బలం' అంటే ఏమిటి?",
            options: ["వ్యక్తిగత బలం", "సమూహంలో ఉన్న బలం", "శారీరక బలం", "ఆర్థిక బలం"],
            correct: 1,
            explanation: "'సంఘ బలం' అంటే సమూహంలో, కలిసి ఉండడంలో ఉన్న బలం."
          },
          {
            question: "పాఠం నుండి మనం నేర్చుకునే ప్రధాన నీతి ఏమిటి?",
            options: ["ఒంటరిగా ఉండాలి", "ఐకమత్యంలో బలం ఉంది, కలిసి పనిచేయాలి", "విడిపోవడం మంచిది", "పోట్లాడడం సరైనది"],
            correct: 1,
            explanation: "ఐకమత్యంలో బలం ఉంది, కలిసి పనిచేయాలి అనేది ప్రధాన నీతి."
          },
          {
            question: "'శత్రువు' అనే పదానికి వ్యతిరేక పదం ఏది?",
            options: ["విరోధి", "మిత్రుడు", "ప్రత్యర్థి", "దుష్టుడు"],
            correct: 1,
            explanation: "'శత్రువు' (విరోధి) కి వ్యతిరేకం 'మిత్రుడు' (స్నేహితుడు)."
          },
          {
            question: "'ఐకమత్యంగా ఉంటే అన్ని సాధ్యమే' - ఈ వాక్యంలో క్రియ ఏది?",
            options: ["ఐకమత్యంగా", "ఉంటే", "అన్ని", "సాధ్యమే"],
            correct: 1,
            explanation: "'ఉంటే' అనేది క్రియ (verb), ఇది 'ఉండు' క్రియ యొక్క షరతు రూపం."
          },
          {
            question: "'సామరస్యం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["వైరం", "సయోధ్య, ఒప్పందం", "యుద్ధం", "పోటీ"],
            correct: 1,
            explanation: "'సామరస్యం' అంటే సయోధ్య, పరస్పర అవగాహన, హృదయ సామీప్యం."
          },
          {
            question: "'దేశభక్తి' ఏ సమాసానికి ఉదాహరణ?",
            options: ["ద్వంద్వ సమాసం", "తత్పురుష సమాసం", "కర్మధారయ సమాసం", "ద్విగు సమాసం"],
            correct: 1,
            explanation: "'దేశభక్తి' = దేశం పట్ల భక్తి - ఇది తత్పురుష సమాసం."
          },
          {
            question: "ఐకమత్యం విషయంలో భారతదేశ నినాదం ఏమిటి?",
            options: ["విభజించు పాలించు", "భిన్నత్వంలో ఏకత్వం", "ఒంటరిగా బ్రతుకు", "స్వార్థంగా ఉండు"],
            correct: 1,
            explanation: "'భిన్నత్వంలో ఏకత్వం' (Unity in Diversity) భారతదేశ నినాదం."
          },
          {
            question: "'పరస్పరం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["ఒంటరిగా", "ఒకరికొకరు", "వ్యతిరేకంగా", "దూరంగా"],
            correct: 1,
            explanation: "'పరస్పరం' అంటే ఒకరికొకరు, ఇద్దరి మధ్య అని అర్థం."
          }
        ]
      },      {
        id: 7,
        name: "అలంపురము",
        description: "అలంపురం చారిత్రక ప్రాముఖ్యత, దేవాలయాలు మరియు సాంస్కృతిక వారసత్వం",
        questions: [
          {
            question: "అలంపురం ఏ రాష్ట్రంలో ఉంది?",
            options: ["ఆంధ్రప్రదేశ్", "తెలంగాణ", "కర్ణాటక", "తమిళనాడు"],
            correct: 1,
            explanation: "అలంపురం తెలంగాణ రాష్ట్రంలోని జోగులాంబ గద్వాల జిల్లాలో ఉంది."
          },
          {
            question: "అలంపురం ఏ నది ఒడ్డున ఉంది?",
            options: ["గోదావరి", "కృష్ణా", "తుంగభద్ర", "నర్మద"],
            correct: 2,
            explanation: "అలంపురం తుంగభద్ర నది ఒడ్డున ఉంది."
          },
          {
            question: "అలంపురం దేవాలయాలను ఏ రాజవంశం నిర్మించింది?",
            options: ["చోళులు", "బాదామి చాళుక్యులు", "విజయనగర రాజులు", "మౌర్యులు"],
            correct: 1,
            explanation: "అలంపురం దేవాలయాలను బాదామి చాళుక్య రాజవంశం నిర్మించింది."
          },
          {
            question: "'చారిత్రక' అనే పదానికి అర్థం ఏమిటి?",
            options: ["భవిష్యత్తుకు సంబంధించిన", "చరిత్రకు సంబంధించిన", "వర్తమానానికి సంబంధించిన", "కల్పనకు సంబంధించిన"],
            correct: 1,
            explanation: "'చారిత్రక' అంటే చరిత్రకు సంబంధించిన, గతానికి చెందిన అని అర్థం."
          },
          {
            question: "అలంపురంలో ఉన్న ప్రసిద్ధ దేవాలయాల సముదాయాన్ని ఏమని పిలుస్తారు?",
            options: ["సప్తగిరి", "నవబ్రహ్మ దేవాలయాలు", "పంచారామాలు", "అష్టదిక్పాలకులు"],
            correct: 1,
            explanation: "అలంపురంలో ఉన్న ప్రసిద్ధ దేవాలయాల సముదాయాన్ని 'నవబ్రహ్మ దేవాలయాలు' అని పిలుస్తారు."
          },
          {
            question: "'దేవాలయం' అనే పదం విడదీస్తే?",
            options: ["దేవ + ఆలయం", "దేవా + లయం", "దే + వాలయం", "దేవాల + యం"],
            correct: 0,
            explanation: "'దేవాలయం' = దేవ + ఆలయం (సవర్ణదీర్ఘ సంధి: అ + ఆ = ఆ)."
          },
          {
            question: "'నవబ్రహ్మ' అనే పదంలో 'నవ' అంటే ఎంత?",
            options: ["ఏడు", "ఎనిమిది", "తొమ్మిది", "పది"],
            correct: 2,
            explanation: "'నవ' అంటే తొమ్మిది. నవబ్రహ్మ అంటే తొమ్మిది బ్రహ్మ దేవాలయాలు."
          },
          {
            question: "అలంపురం ఏ శైలికి ప్రసిద్ధి?",
            options: ["ద్రావిడ శైలి", "చాళుక్య శిల్పకళా శైలి", "మొఘల్ శైలి", "ఐరోపా శైలి"],
            correct: 1,
            explanation: "అలంపురం చాళుక్య శిల్పకళా శైలికి ప్రసిద్ధి చెందింది."
          },
          {
            question: "'శిల్పకళ' ఏ సమాసానికి ఉదాహరణ?",
            options: ["ద్వంద్వ సమాసం", "తత్పురుష సమాసం", "కర్మధారయ సమాసం", "ద్విగు సమాసం"],
            correct: 1,
            explanation: "'శిల్పకళ' = శిల్పం యొక్క కళ - ఇది తత్పురుష సమాసం."
          },
          {
            question: "అలంపురంను ఏమని పిలుస్తారు?",
            options: ["ఉత్తర కాశి", "దక్షిణ కాశి", "తూర్పు కాశి", "పశ్చిమ కాశి"],
            correct: 1,
            explanation: "అలంపురంను 'దక్షిణ కాశి' అని పిలుస్తారు, దాని ధార్మిక ప్రాముఖ్యత వల్ల."
          },
          {
            question: "'వారసత్వం' అనే పదం ఏ భాషా వర్గానికి చెందినది?",
            options: ["దేశ్యం", "తత్సమం", "తద్భవం", "అన్యదేశ్యం"],
            correct: 1,
            explanation: "'వారసత్వం' అనేది సంస్కృతం నుండి వచ్చిన తత్సమ పదం."
          },
          {
            question: "అలంపురం దేవాలయాల నిర్మాణ కాలం ఏది?",
            options: ["1వ శతాబ్దం", "7-8వ శతాబ్దాలు", "15వ శతాబ్దం", "20వ శతాబ్దం"],
            correct: 1,
            explanation: "అలంపురం దేవాలయాలు 7-8వ శతాబ్దాలలో నిర్మించబడ్డాయి."
          },
          {
            question: "'ప్రాచీనం' అనే పదానికి వ్యతిరేక పదం ఏది?",
            options: ["పురాతనం", "ఆధునికం", "ప్రాంతీయం", "విదేశీయం"],
            correct: 1,
            explanation: "'ప్రాచీనం' (పాతది) కి వ్యతిరేకం 'ఆధునికం' (కొత్తది)."
          },
          {
            question: "పాఠంలో అలంపురం ప్రాముఖ్యత ఏమిటి?",
            options: ["ఆర్థిక కేంద్రం", "చారిత్రక, ధార్మిక, సాంస్కృతిక ప్రాముఖ్యత", "రాజకీయ కేంద్రం", "వ్యాపార కేంద్రం"],
            correct: 1,
            explanation: "అలంపురానికి చారిత్రక, ధార్మిక, సాంస్కృతిక ప్రాముఖ్యత ఉంది."
          },
          {
            question: "'పురాతత్వ శాస్త్రం' అంటే ఏమిటి?",
            options: ["నక్షత్ర శాస్త్రం", "ప్రాచీన అవశేషాలను అధ్యయనం చేసే శాస్త్రం", "వైద్య శాస్త్రం", "గణిత శాస్త్రం"],
            correct: 1,
            explanation: "'పురాతత్వ శాస్త్రం' అంటే ప్రాచీన అవశేషాలను, శిథిలాలను అధ్యయనం చేసే శాస్త్రం."
          },
          {
            question: "'అలంపురం' ఏ జిల్లాలో ఉంది?",
            options: ["హైదరాబాద్", "జోగులాంబ గద్వాల", "వరంగల్", "నిజామాబాద్"],
            correct: 1,
            explanation: "అలంపురం తెలంగాణ రాష్ట్రంలోని జోగులాంబ గద్వాల జిల్లాలో ఉంది."
          },
          {
            question: "'స్మారక చిహ్నం' అంటే ఏమిటి?",
            options: ["మరచిపోవడం", "గుర్తుగా ఉంచిన నిర్మాణం / చిహ్నం", "కొత్త భవనం", "ఆధునిక కట్టడం"],
            correct: 1,
            explanation: "'స్మారక చిహ్నం' అంటే గతాన్ని గుర్తు చేసే నిర్మాణం లేదా చిహ్నం."
          },
          {
            question: "అలంపురం దేవాలయాలలో ఏ దేవుడి విగ్రహాలు ఉన్నాయి?",
            options: ["కేవలం విష్ణువు", "శివుడు, విష్ణువు, బ్రహ్మ", "కేవలం బ్రహ్మ", "కేవలం శివుడు"],
            correct: 1,
            explanation: "అలంపురం దేవాలయాలలో శివుడు, విష్ణువు, బ్రహ్మ దేవుళ్ళ విగ్రహాలు ఉన్నాయి."
          },
          {
            question: "'నిర్మాణం' అనే పదానికి సమానార్థక పదం ఏది?",
            options: ["నాశనం", "కట్టడం", "విధ్వంసం", "పతనం"],
            correct: 1,
            explanation: "'నిర్మాణం' అంటే కట్టడం, నిర్మించడం అని అర్థం."
          },
          {
            question: "పాఠం ఏ ప్రక్రియకు చెందినది?",
            options: ["కవిత", "యాత్రా చరిత్ర / వర్ణనాత్మక వ్యాసం", "నాటకం", "లేఖ"],
            correct: 1,
            explanation: "'అలంపురము' పాఠం యాత్రా చరిత్ర / వర్ణనాత్మక వ్యాసం ప్రక్రియకు చెందినది."
          },
          {
            question: "'సంరక్షణ' అనే పదానికి అర్థం ఏమిటి?",
            options: ["నాశనం చేయడం", "కాపాడటం, రక్షించడం", "విడిచిపెట్టడం", "మరచిపోవడం"],
            correct: 1,
            explanation: "'సంరక్షణ' అంటే కాపాడటం, రక్షించడం, భద్రపరచడం."
          },
          {
            question: "చాళుక్యుల రాజధాని ఏది?",
            options: ["హంపి", "బాదామి (వాతాపి)", "కంచి", "తంజావూరు"],
            correct: 1,
            explanation: "బాదామి చాళుక్యుల రాజధాని బాదామి (వాతాపి)."
          },
          {
            question: "'పర్యాటక స్థలం' అంటే ఏమిటి?",
            options: ["నివాస ప్రదేశం", "చూడదగిన / సందర్శించదగిన ప్రదేశం", "వ్యాపార ప్రదేశం", "వ్యవసాయ ప్రదేశం"],
            correct: 1,
            explanation: "'పర్యాటక స్థలం' అంటే చూడదగిన, సందర్శించదగిన ప్రదేశం."
          },
          {
            question: "అలంపురం యొక్క సాంస్కృతిక వారసత్వాన్ని కాపాడటం ఎవరి బాధ్యత?",
            options: ["కేవలం ప్రభుత్వం", "కేవలం స్థానికులు", "ప్రభుత్వం మరియు ప్రజలు ఇద్దరిదీ", "ఎవరి బాధ్యత కాదు"],
            correct: 2,
            explanation: "సాంస్కృతిక వారసత్వాన్ని కాపాడటం ప్రభుత్వం మరియు ప్రజలు ఇద్దరి బాధ్యత."
          },
          {
            question: "'విగ్రహం' అనే పదానికి సమానార్థక పదం ఏది?",
            options: ["చిత్రం", "ప్రతిమ / మూర్తి", "పటం", "రేఖ"],
            correct: 1,
            explanation: "'విగ్రహం' అంటే ప్రతిమ, మూర్తి, బొమ్మ అని అర్థం."
          }
        ]
      },
      {
        id: 8,
        name: "నా బాల్యం",
        description: "బాల్య జ్ఞాపకాలు, అనుభవాలు మరియు జీవిత పాఠాలు",
        questions: [
          {
            question: "'నా బాల్యం' పాఠం ఏ ప్రక్రియకు చెందినది?",
            options: ["కవిత", "ఆత్మకథ / స్మృతి చిత్రం", "నాటకం", "లేఖ"],
            correct: 1,
            explanation: "'నా బాల్యం' పాఠం ఆత్మకథ / స్మృతి చిత్రం ప్రక్రియకు చెందినది."
          },
          {
            question: "'బాల్యం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["వృద్ధాప్యం", "చిన్నతనం / పిల్లతనం", "యవ్వనం", "మధ్య వయసు"],
            correct: 1,
            explanation: "'బాల్యం' అంటే చిన్నతనం, పిల్లతనం, బాలుడిగా ఉన్న సమయం."
          },
          {
            question: "'జ్ఞాపకం' అనే పదానికి సమానార్థక పదం ఏది?",
            options: ["మరపు", "గుర్తు / స్మృతి", "కల", "ఊహ"],
            correct: 1,
            explanation: "'జ్ఞాపకం' అంటే గుర్తు, స్మృతి, గతం గుర్తు రావడం."
          },
          {
            question: "'ఆత్మకథ' అంటే ఏమిటి?",
            options: ["ఇతరుల కథ", "తన గురించి తాను రాసుకున్న కథ", "కల్పిత కథ", "జానపద కథ"],
            correct: 1,
            explanation: "'ఆత్మకథ' అంటే తన జీవితం గురించి తాను రాసుకున్న కథ."
          },
          {
            question: "పాఠంలో బాల్యం గురించి ఏమని చెప్పబడింది?",
            options: ["బాల్యం చెడ్డది", "బాల్యం అత్యంత మధురమైన, మరపురాని కాలం", "బాల్యం అనవసరం", "బాల్యం కష్టమైనది"],
            correct: 1,
            explanation: "బాల్యం అత్యంత మధురమైన, మరపురాని కాలం అని పాఠంలో చెప్పబడింది."
          },
          {
            question: "'అనుభవం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["కల", "తానే చవి చూసిన విషయం / అనుభూతి", "ఊహ", "కల్పన"],
            correct: 1,
            explanation: "'అనుభవం' అంటే తానే నేరుగా చవి చూసిన విషయం, అనుభూతి."
          },
          {
            question: "'బాల్యం' అనే పదానికి వ్యతిరేక పదం ఏది?",
            options: ["యవ్వనం", "వృద్ధాప్యం", "ఉత్సాహం", "ఆనందం"],
            correct: 1,
            explanation: "'బాల్యం' (చిన్నతనం) కి వ్యతిరేకం 'వృద్ధాప్యం' (ముసలితనం)."
          },
          {
            question: "పాఠంలో బాల్య క్రీడలు ఏమి సూచిస్తాయి?",
            options: ["సమయం వృథా", "ఆనందం, స్వేచ్ఛ మరియు అమాయకత్వం", "శిక్ష", "భయం"],
            correct: 1,
            explanation: "బాల్య క్రీడలు ఆనందం, స్వేచ్ఛ మరియు అమాయకత్వాన్ని సూచిస్తాయి."
          },
          {
            question: "'స్మృతి' అనే పదానికి వ్యతిరేక పదం ఏది?",
            options: ["జ్ఞాపకం", "విస్మృతి (మరపు)", "గుర్తు", "తలపు"],
            correct: 1,
            explanation: "'స్మృతి' (గుర్తు) కి వ్యతిరేకం 'విస్మృతి' (మరపు)."
          },
          {
            question: "'అమాయకత్వం' అంటే ఏమిటి?",
            options: ["తెలివి", "మోసం తెలియని నిష్కల్మష స్వభావం", "కుటిలత్వం", "స్వార్థం"],
            correct: 1,
            explanation: "'అమాయకత్వం' అంటే మోసం తెలియని, నిష్కల్మషమైన, కపటం లేని స్వభావం."
          },
          {
            question: "పాఠంలో బడి (పాఠశాల) జ్ఞాపకాలు ఏమి తెలియజేస్తాయి?",
            options: ["చదువు అనవసరం", "గురువులు, స్నేహితులతో గడిపిన మధుర క్షణాలు", "బడి భయంకరం", "చదువు కష్టం"],
            correct: 1,
            explanation: "బడి జ్ఞాపకాలు గురువులు, స్నేహితులతో గడిపిన మధుర క్షణాలను తెలియజేస్తాయి."
          },
          {
            question: "'స్వేచ్ఛ' అనే పదానికి అర్థం ఏమిటి?",
            options: ["బంధం", "ఇష్టం వచ్చినట్లు ఉండగలగడం", "శిక్ష", "నియమం"],
            correct: 1,
            explanation: "'స్వేచ్ఛ' అంటే ఇష్టం వచ్చినట్లు ఉండగలగడం, స్వతంత్రత."
          },
          {
            question: "'నా' అనే పదం ఏ సర్వనామం?",
            options: ["ప్రథమ పురుష సర్వనామం (ఉత్తమ పురుష)", "ద్వితీయ పురుష సర్వనామం", "తృతీయ పురుష సర్వనామం", "ప్రశ్నార్థక సర్వనామం"],
            correct: 0,
            explanation: "'నా' అనేది ప్రథమ పురుష (ఉత్తమ పురుష) సర్వనామం, 'నేను' యొక్క షష్ఠీ విభక్తి రూపం."
          },
          {
            question: "పాఠంలో గ్రామీణ జీవితం గురించి ఏమి చెప్పబడింది?",
            options: ["గ్రామీణ జీవితం చెడ్డది", "గ్రామీణ జీవితం ప్రకృతితో ముడిపడి ఆనందకరంగా ఉంటుంది", "గ్రామీణ జీవితం కష్టం మాత్రమే", "గ్రామీణ జీవితం నగర జీవితం కంటే తక్కువ"],
            correct: 1,
            explanation: "గ్రామీణ జీవితం ప్రకృతితో ముడిపడి ఆనందకరంగా ఉంటుందని పాఠం చెబుతుంది."
          },
          {
            question: "'మధురమైన' అనే పదంలో ఏ భాగం విశేషణం?",
            options: ["మధుర", "మైన", "మధురమైన (మొత్తం పదం)", "ధుర"],
            correct: 2,
            explanation: "'మధురమైన' మొత్తం పదం ఒక విశేషణం, ఇది నామవాచకాన్ని వర్ణిస్తుంది."
          },
          {
            question: "'ఆటపాటలు' ఏ సమాసానికి ఉదాహరణ?",
            options: ["తత్పురుష సమాసం", "ద్వంద్వ సమాసం", "కర్మధారయ సమాసం", "బహువ్రీహి సమాసం"],
            correct: 1,
            explanation: "'ఆటపాటలు' = ఆటలు + పాటలు - ఇది ద్వంద్వ సమాసం (రెండు సమాన పదాల కలయిక)."
          },
          {
            question: "పాఠం నుండి నేర్చుకునే జీవిత పాఠం ఏమిటి?",
            options: ["బాల్యం వృథా", "ప్రతి క్షణాన్ని ఆనందించాలి, బాల్య విలువలను గుర్తుంచుకోవాలి", "గతాన్ని మరచిపోవాలి", "భవిష్యత్తు మాత్రమే ముఖ్యం"],
            correct: 1,
            explanation: "ప్రతి క్షణాన్ని ఆనందించాలి, బాల్య విలువలను గుర్తుంచుకోవాలి అనేది జీవిత పాఠం."
          },
          {
            question: "'నిష్కల్మషం' అనే పదానికి అర్థం ఏమిటి?",
            options: ["మలినమైన", "స్వచ్ఛమైన, కపటం లేని", "అపవిత్రమైన", "కుటిలమైన"],
            correct: 1,
            explanation: "'నిష్కల్మషం' అంటే స్వచ్ఛమైన, కపటం లేని, శుద్ధమైన అని అర్థం."
          },
          {
            question: "'బాలుడు' అనే పదానికి స్త్రీలింగ రూపం ఏది?",
            options: ["బాలిక", "బాలికా", "బాలి", "బాలమ్మ"],
            correct: 0,
            explanation: "'బాలుడు' (మగ పిల్లవాడు) కి స్త్రీలింగ రూపం 'బాలిక' (ఆడ పిల్ల)."
          },
          {
            question: "పాఠంలో ప్రకృతి గురించి ఏమి చెప్పబడింది?",
            options: ["ప్రకృతి భయంకరం", "ప్రకృతి బాల్యంలో ఆట స్థలంగా, ఆనందంగా ఉంటుంది", "ప్రకృతి అనవసరం", "ప్రకృతిని నాశనం చేయాలి"],
            correct: 1,
            explanation: "ప్రకృతి బాల్యంలో ఆట స్థలంగా, ఆనందకరంగా ఉంటుందని పాఠంలో చెప్పబడింది."
          },
          {
            question: "'జీవితం' అనే పదంలో మూల పదం ఏది?",
            options: ["జీవి", "జీవ", "జీవిత", "జీ"],
            correct: 1,
            explanation: "'జీవ' అనేది మూల పదం, దాని నుండి 'జీవితం' (బ్రతుకు) ఏర్పడింది."
          },
          {
            question: "'అనుభూతి' అనే పదానికి అర్థం ఏమిటి?",
            options: ["మరపు", "అనుభవించిన భావన", "అజ్ఞానం", "నిర్లక్ష్యం"],
            correct: 1,
            explanation: "'అనుభూతి' అంటే అనుభవించిన భావన, అనుభవ జ్ఞానం."
          },
          {
            question: "పాఠంలో స్నేహం గురించి ఏమి చెప్పబడింది?",
            options: ["స్నేహం అనవసరం", "బాల్య స్నేహాలు అత్యంత స్వచ్ఛమైనవి, శాశ్వతమైనవి", "స్నేహం తాత్కాలికం", "స్నేహం హానికరం"],
            correct: 1,
            explanation: "బాల్య స్నేహాలు అత్యంత స్వచ్ఛమైనవి, శాశ్వతమైనవి అని పాఠంలో చెప్పబడింది."
          },
          {
            question: "'కాలం' అనే పదానికి సమానార్థక పదం ఏది?",
            options: ["స్థలం", "సమయం", "వస్తువు", "వ్యక్తి"],
            correct: 1,
            explanation: "'కాలం' అంటే సమయం, వేళ అని అర్థం."
          },
          {
            question: "పాఠం సారాంశం ఏమిటి?",
            options: ["బాల్యం మరచిపోవాలి", "బాల్య అనుభవాలు జీవితాన్ని తీర్చిదిద్దుతాయి, వాటిని గుర్తుంచుకోవాలి", "చదువు అనవసరం", "ఆటలు వృథా"],
            correct: 1,
            explanation: "బాల్య అనుభవాలు జీవితాన్ని తీర్చిదిద్దుతాయి, వాటిని గుర్తుంచుకోవాలి అనేది సారాంశం."
          }
        ]
      }    ]
  },
  ai: {
    name: "AI",
    color: "#10b981",
    icon: "Brain",
    chapters: [
      {
        id: 1,
        name: "Introduction to AI",
        description: "Understanding AI, its domains like Data Science, Computer Vision, and Natural Language Processing (NLP), types of AI, and real-world applications",
        questions: [
          {
            question: "Artificial Intelligence (AI) refers to:",
            options: ["Human intelligence", "Machine simulation of human intelligence", "Natural intelligence", "Animal intelligence"],
            correct: 1,
            explanation: "AI is the simulation of human intelligence processes by machines, especially computers."
          },
          {
            question: "Who is known as the father of Artificial Intelligence?",
            options: ["Alan Turing", "John McCarthy", "Bill Gates", "Steve Jobs"],
            correct: 1,
            explanation: "John McCarthy coined the term 'Artificial Intelligence' in 1956."
          },
          {
            question: "Which of the following is an example of AI in daily life?",
            options: ["A simple calculator", "Voice assistants like Alexa and Siri", "A light switch", "A pencil"],
            correct: 1,
            explanation: "Voice assistants use AI for speech recognition, NLP, and intelligent responses."
          },
          {
            question: "AI that can perform only specific tasks is called:",
            options: ["Strong AI", "General AI", "Narrow AI", "Super AI"],
            correct: 2,
            explanation: "Narrow (Weak) AI is designed to perform specific tasks like image recognition or language translation."
          },
          {
            question: "The Turing Test is used to:",
            options: ["Measure speed", "Determine if a machine can exhibit intelligent behaviour", "Test hardware", "Measure memory"],
            correct: 1,
            explanation: "The Turing Test evaluates whether a machine can exhibit intelligent behaviour indistinguishable from a human."
          },
          {
            question: "Which domain does AI NOT typically belong to?",
            options: ["Computer Science", "Linguistics", "Astrology", "Mathematics"],
            correct: 2,
            explanation: "AI is an interdisciplinary field involving computer science, mathematics, and linguistics, but not astrology."
          },
          {
            question: "AI systems learn from:",
            options: ["Magic", "Data and experience", "Random guesses", "Nothing"],
            correct: 1,
            explanation: "AI systems learn from data and experience to improve their performance over time."
          },
          {
            question: "An intelligent chatbot is an example of:",
            options: ["Robotics only", "AI application", "Simple programming", "Hardware design"],
            correct: 1,
            explanation: "Chatbots use AI technologies like NLP to understand and respond to human queries."
          },
          {
            question: "AI can be biased because:",
            options: ["It is always neutral", "It learns from data that may contain human biases", "It creates its own opinions", "It ignores data"],
            correct: 1,
            explanation: "AI can inherit biases present in the training data, leading to unfair outcomes."
          },
          {
            question: "Ethics in AI is important because:",
            options: ["AI is always perfect", "AI decisions can impact people's lives and must be fair", "AI does not need ethics", "Ethics slow down AI"],
            correct: 1,
            explanation: "AI ethics ensures that AI systems are fair, transparent, and do not harm people."
          },
          {
            question: "Machine Learning is a subset of AI where machines learn from:",
            options: ["Pre-written rules only", "Data without being explicitly programmed", "Human commands each time", "Random guessing"],
            correct: 1,
            explanation: "Machine Learning allows computers to learn and improve from data and experience without explicit programming."
          },
          {
            question: "General AI (Strong AI) refers to:",
            options: ["AI that can perform one specific task", "AI that can perform any intellectual task a human can", "AI that is physically strong", "AI that only plays games"],
            correct: 1,
            explanation: "General AI would be able to understand, learn, and apply intelligence across any domain, like a human mind."
          },
          {
            question: "Which of the following is NOT an application of AI?",
            options: ["Self-driving cars", "Email spam filtering", "A simple light bulb", "Recommendation systems on Netflix"],
            correct: 2,
            explanation: "A simple light bulb has no intelligence or decision-making capability and is not an AI application."
          },
          {
            question: "AI can be found in everyday devices such as:",
            options: ["Only supercomputers", "Smartphones, smart speakers, and navigation apps", "Only in laboratories", "Only in robots"],
            correct: 1,
            explanation: "AI is present in smartphones (assistants, cameras), smart speakers, navigation apps, and many daily-use devices."
          },
          {
            question: "The three domains of AI include:",
            options: ["Data, Computer Vision, and NLP", "Physics, Chemistry, and Biology", "Hardware, Software, and Networking", "Only robotics"],
            correct: 0,
            explanation: "The three major domains of AI studied are Data Science, Computer Vision, and Natural Language Processing."
          },
          {
            question: "What does AI stand for?",
            options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Integration", "Algorithmic Interface"],
            correct: 1,
            explanation: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence by machines."
          },
          {
            question: "Which type of AI is designed to perform a single specific task?",
            options: ["AGI", "ASI", "ANI", "General AI"],
            correct: 2,
            explanation: "ANI (Artificial Narrow Intelligence) is designed to perform a single specific task, like playing chess or voice recognition."
          },
          {
            question: "What is AGI?",
            options: ["Artificial General Intelligence — AI with human-level reasoning across all domains", "Automated General Interface", "Advanced Graphical Intelligence", "Artificial Gaming Intelligence"],
            correct: 0,
            explanation: "AGI (Artificial General Intelligence) refers to AI that can understand, learn, and apply knowledge across all domains like a human."
          },
          {
            question: "Which of the following is an example of ANI?",
            options: ["A robot that can do everything a human can", "A self-aware machine", "A spam filter in email", "A machine smarter than all humans combined"],
            correct: 2,
            explanation: "A spam filter is an example of ANI as it is designed to perform one specific task — filtering spam emails."
          },
          {
            question: "What is ASI?",
            options: ["Artificial Specific Intelligence", "Artificial Super Intelligence — AI surpassing human intelligence", "Automated System Integration", "Advanced Software Intelligence"],
            correct: 1,
            explanation: "ASI (Artificial Super Intelligence) refers to AI that surpasses human intelligence in all aspects including creativity and problem-solving."
          },
          {
            question: "Which of the following is a domain of AI?",
            options: ["Cooking recipes", "Computer Vision", "Carpentry", "Gardening"],
            correct: 1,
            explanation: "Computer Vision is a major domain of AI that deals with enabling machines to interpret and understand visual information."
          },
          {
            question: "Which of the following is NOT a domain of AI?",
            options: ["Natural Language Processing", "Computer Vision", "Data Science", "Manual Accounting"],
            correct: 3,
            explanation: "Manual Accounting is not an AI domain. NLP, Computer Vision, and Data Science are all recognized AI domains."
          },
          {
            question: "What is the Turing Test?",
            options: ["A test to check computer speed", "A test to determine if a machine can exhibit intelligent behavior indistinguishable from a human", "A test for software bugs", "A test for hardware quality"],
            correct: 1,
            explanation: "The Turing Test, proposed by Alan Turing, evaluates whether a machine can exhibit intelligent behavior indistinguishable from a human."
          },
          {
            question: "Who is known as the father of Artificial Intelligence?",
            options: ["Alan Turing", "John McCarthy", "Elon Musk", "Bill Gates"],
            correct: 1,
            explanation: "John McCarthy is known as the father of AI. He coined the term 'Artificial Intelligence' in 1956."
          },
          {
            question: "Which of the following best describes the current state of AI?",
            options: ["We have achieved ASI", "We have achieved AGI", "Most AI today is ANI", "AI does not exist yet"],
            correct: 2,
            explanation: "Most AI systems today are ANI (Narrow AI), designed for specific tasks. AGI and ASI have not been achieved yet."
          }
        ]
      },
      {
        id: 2,
        name: "AI Project Cycle",
        description: "Learning problem scoping, data acquisition, data exploration, modelling, and evaluation in AI projects",
        questions: [
          {
            question: "The first step in the AI project cycle is:",
            options: ["Data collection", "Problem scoping", "Model building", "Testing"],
            correct: 1,
            explanation: "Problem scoping is the first step where you define the problem AI needs to solve."
          },
          {
            question: "The AI project cycle includes:",
            options: ["Only coding", "Problem scoping, data acquisition, data exploration, modelling, and evaluation", "Only testing", "Only design"],
            correct: 1,
            explanation: "The AI project cycle includes problem scoping, data acquisition, data exploration, modelling, and evaluation."
          },
          {
            question: "Data acquisition means:",
            options: ["Deleting data", "Collecting relevant data for the AI project", "Ignoring data", "Hiding data"],
            correct: 1,
            explanation: "Data acquisition involves gathering relevant, quality data needed to train the AI model."
          },
          {
            question: "Data exploration involves:",
            options: ["Ignoring data", "Analysing and understanding collected data", "Deleting data", "Creating data"],
            correct: 1,
            explanation: "Data exploration involves analysing data to find patterns, outliers, and understand its structure."
          },
          {
            question: "In the AI project cycle, 'modelling' refers to:",
            options: ["Fashion modelling", "Building and training the AI algorithm", "3D modelling", "Role modelling"],
            correct: 1,
            explanation: "Modelling involves selecting and training an appropriate AI algorithm on the prepared data."
          },
          {
            question: "Evaluation in the AI project cycle tests:",
            options: ["The project budget", "How well the AI model performs on new data", "The team size", "The office space"],
            correct: 1,
            explanation: "Evaluation measures how accurately and effectively the AI model performs on unseen data."
          },
          {
            question: "A problem statement in an AI project should be:",
            options: ["Vague", "Clear, specific, and well-defined", "Very long", "Unrelated to data"],
            correct: 1,
            explanation: "A good problem statement is clear, specific, and defines exactly what the AI needs to accomplish."
          },
          {
            question: "Why is data quality important in AI projects?",
            options: ["It is not important", "Poor data leads to poor AI performance (garbage in, garbage out)", "Only quantity matters", "AI can work without data"],
            correct: 1,
            explanation: "The quality of data directly affects AI performance - poor data leads to poor results."
          },
          {
            question: "Iterating in the AI project cycle means:",
            options: ["Doing everything once", "Repeating and refining steps to improve results", "Giving up", "Skipping steps"],
            correct: 1,
            explanation: "Iteration involves repeating steps to refine and improve the AI model's performance."
          },
          {
            question: "Which is NOT a step in the AI project cycle?",
            options: ["Problem scoping", "Data acquisition", "Social media posting", "Evaluation"],
            correct: 2,
            explanation: "Social media posting is not part of the AI project cycle."
          },
          {
            question: "A good AI project should solve a:",
            options: ["Vague and broad problem", "Clearly defined and specific problem", "Problem that has no data", "Problem without any stakeholders"],
            correct: 1,
            explanation: "A successful AI project starts with a clearly defined, specific, and achievable problem statement."
          },
          {
            question: "Data can be collected through:",
            options: ["Only surveys", "Surveys, sensors, web scraping, databases, and APIs", "Only manual observation", "Only buying from companies"],
            correct: 1,
            explanation: "Data can be collected through various methods including surveys, sensors, web scraping, existing databases, and APIs."
          },
          {
            question: "Bias in AI training data can lead to:",
            options: ["Better results", "Unfair and discriminatory outcomes", "Faster processing", "More accurate predictions always"],
            correct: 1,
            explanation: "Biased training data causes the AI model to produce unfair, discriminatory, or inaccurate results."
          },
          {
            question: "The 4Ws framework in problem scoping stands for:",
            options: ["Who, What, Where, When", "Why, What, Where, Who", "Who, What, Why, When", "What, Where, Which, Why"],
            correct: 0,
            explanation: "The 4Ws (Who, What, Where, When) help define the problem clearly during the problem scoping phase."
          },
          {
            question: "After evaluation, if the AI model is not performing well, the next step is to:",
            options: ["Give up", "Go back and iterate on earlier steps like data or model selection", "Deploy it anyway", "Delete all data"],
            correct: 1,
            explanation: "The AI project cycle is iterative — poor performance means revisiting earlier steps to improve the model."
          },
          {
            question: "What is the first step in the AI Project Cycle?",
            options: ["Data Acquisition", "Problem Scoping", "Modelling", "Evaluation"],
            correct: 1,
            explanation: "Problem Scoping is the first step where we clearly define the problem that AI needs to solve."
          },
          {
            question: "What does problem scoping involve?",
            options: ["Writing code", "Clearly defining and understanding the problem to solve", "Buying hardware", "Testing the model"],
            correct: 1,
            explanation: "Problem scoping involves clearly defining the problem, understanding its scope, constraints, and desired outcomes."
          },
          {
            question: "What is data acquisition in the AI Project Cycle?",
            options: ["Deleting data", "Collecting and gathering relevant data for the AI model", "Selling data", "Ignoring data"],
            correct: 1,
            explanation: "Data acquisition is the process of collecting and gathering relevant data needed to train the AI model."
          },
          {
            question: "What is the correct order of the AI Project Cycle?",
            options: ["Modelling → Scoping → Data → Evaluation", "Problem Scoping → Data Acquisition → Modelling → Evaluation", "Evaluation → Modelling → Data → Scoping", "Data → Evaluation → Scoping → Modelling"],
            correct: 1,
            explanation: "The correct order is: Problem Scoping → Data Acquisition → Data Exploration → Modelling → Evaluation."
          },
          {
            question: "What happens during the modelling phase?",
            options: ["Data is collected", "The problem is defined", "An AI algorithm is selected and trained on data", "The project is abandoned"],
            correct: 2,
            explanation: "During the modelling phase, an appropriate AI algorithm is selected and trained using the collected data."
          },
          {
            question: "Why is evaluation important in the AI Project Cycle?",
            options: ["It is not important", "To check if the model performs accurately and meets requirements", "To delete the model", "To collect more data only"],
            correct: 1,
            explanation: "Evaluation is important to verify that the AI model performs accurately, is reliable, and meets the defined requirements."
          },
          {
            question: "What is a 4Ws canvas in problem scoping?",
            options: ["A painting technique", "A framework asking Who, What, Where, Why to define the problem", "A type of AI model", "A coding language"],
            correct: 1,
            explanation: "The 4Ws canvas (Who, What, Where, Why) is a framework used to clearly define and scope an AI problem."
          },
          {
            question: "Which of the following is a source of data acquisition?",
            options: ["Imagination", "Surveys, sensors, web scraping, databases", "Dreams", "Random guessing"],
            correct: 1,
            explanation: "Data can be acquired from surveys, sensors, web scraping, existing databases, APIs, and other real-world sources."
          },
          {
            question: "What should be done if the AI model does not perform well during evaluation?",
            options: ["Deploy it anyway", "Go back and improve data or model", "Ignore the results", "Delete the project"],
            correct: 1,
            explanation: "If the model doesn't perform well, we iterate — go back to improve data quality, try different algorithms, or refine the approach."
          },
          {
            question: "What is data exploration?",
            options: ["Ignoring data", "Analyzing and understanding the collected data before modelling", "Deleting data", "Encrypting data"],
            correct: 1,
            explanation: "Data exploration involves analyzing, visualizing, and understanding the collected data to find patterns before building the model."
          }
        ]
      },
      {
        id: 3,
        name: "Ethics & Bias",
        description: "Social impact of AI, ethical considerations, bias in data and algorithms, fairness, accountability, and responsible AI development",
        questions: [
          {
            question: "What is AI ethics?",
            options: ["Rules for programming speed", "A set of principles guiding the responsible design, development, and use of AI", "A type of AI algorithm", "Laws about computer hardware"],
            correct: 1,
            explanation: "AI ethics is a set of moral principles and guidelines that help ensure AI systems are developed and used responsibly, fairly, and without causing harm."
          },
          {
            question: "What is bias in AI?",
            options: ["A feature that makes AI faster", "A systematic error that causes unfair outcomes for certain groups", "A type of programming language", "An advantage of AI systems"],
            correct: 1,
            explanation: "Bias in AI is a systematic error in data or algorithms that produces unfair results, often disadvantaging certain groups based on race, gender, age, or other factors."
          },
          {
            question: "How can bias enter an AI system?",
            options: ["Through the power supply", "Through biased training data that reflects historical prejudices", "Through the computer screen", "Through the keyboard"],
            correct: 1,
            explanation: "AI systems learn from training data. If that data reflects historical biases, stereotypes, or under-represents certain groups, the AI will learn and reproduce those biases."
          },
          {
            question: "A facial recognition system that works well for light-skinned people but poorly for dark-skinned people is an example of:",
            options: ["Good AI design", "Algorithmic bias due to unrepresentative training data", "A hardware problem", "Normal AI behaviour"],
            correct: 1,
            explanation: "This is a well-documented example of AI bias where training datasets contained mostly light-skinned faces, causing the system to perform poorly on dark-skinned faces."
          },
          {
            question: "What does 'fairness' mean in the context of AI?",
            options: ["AI should be expensive", "AI systems should treat all individuals and groups equitably without discrimination", "AI should run quickly", "AI should use the latest hardware"],
            correct: 1,
            explanation: "Fairness in AI means that the system's decisions should not unfairly advantage or disadvantage any particular individual or group based on protected characteristics."
          },
          {
            question: "What is accountability in AI?",
            options: ["Counting AI systems", "Being responsible for the outcomes and decisions of AI systems", "Keeping accounts of AI sales", "Making AI count numbers"],
            correct: 1,
            explanation: "Accountability means that developers, organizations, and users of AI are responsible for the outcomes of AI systems and must answer for any harm caused."
          },
          {
            question: "What is transparency in AI?",
            options: ["Making AI invisible", "Being open about how an AI system works and makes decisions", "Using transparent computer screens", "Hiding AI algorithms"],
            correct: 1,
            explanation: "Transparency means making AI systems understandable by explaining how they work, what data they use, and how they make decisions."
          },
          {
            question: "An AI hiring tool that rejects candidates based on their gender is an example of:",
            options: ["Efficient hiring", "Discriminatory and unethical AI", "Good automation", "Normal AI function"],
            correct: 1,
            explanation: "An AI system that discriminates based on gender violates ethical principles of fairness. This happened with a real hiring tool that was biased against women because historical hiring data favoured men."
          },
          {
            question: "What is data privacy in the context of AI?",
            options: ["Deleting all data", "Protecting personal information from unauthorized access and misuse by AI systems", "Making data public", "Ignoring user consent"],
            correct: 1,
            explanation: "Data privacy means protecting individuals' personal information and ensuring AI systems collect, store, and use data only with proper consent and safeguards."
          },
          {
            question: "Why is informed consent important when collecting data for AI?",
            options: ["It is not important", "People should know and agree to how their data will be used", "It slows down AI development", "Only companies need consent"],
            correct: 1,
            explanation: "Informed consent ensures that individuals understand and agree to how their data will be collected, stored, and used, which is a fundamental ethical and legal requirement."
          },
          {
            question: "What is the social impact of AI on employment?",
            options: ["AI has no effect on jobs", "AI can automate tasks, potentially displacing some jobs while creating new ones", "AI will eliminate all jobs", "AI only creates jobs"],
            correct: 1,
            explanation: "AI automation can replace repetitive tasks and some jobs, but it also creates new roles in AI development, maintenance, and supervision. The net effect requires careful management."
          },
          {
            question: "What is an 'algorithmic bias'?",
            options: ["A bias in computer hardware", "A systematic and repeatable error in an algorithm that creates unfair outcomes", "A type of computer virus", "A programming shortcut"],
            correct: 1,
            explanation: "Algorithmic bias occurs when the logic or design of an algorithm systematically produces unfair results, often amplifying existing societal inequalities."
          },
          {
            question: "What is the 'black box' problem in AI?",
            options: ["AI systems are stored in black boxes", "Some AI models make decisions that are difficult for humans to understand or explain", "AI only works in dark rooms", "AI boxes are painted black"],
            correct: 1,
            explanation: "The black box problem refers to complex AI models (like deep neural networks) whose internal decision-making process is opaque and hard for humans to interpret or explain."
          },
          {
            question: "Which of the following is an example of responsible AI development?",
            options: ["Ignoring bias in training data", "Testing AI systems for fairness across different demographic groups before deployment", "Deploying AI without testing", "Collecting data without user consent"],
            correct: 1,
            explanation: "Responsible AI development includes testing for fairness, identifying biases, ensuring transparency, and getting proper consent before deploying AI systems."
          },
          {
            question: "What is 'deepfake' technology and why is it an ethical concern?",
            options: ["A type of deep-sea camera", "AI-generated fake videos or images that can spread misinformation and harm people", "A deep cleaning product", "A type of backup storage"],
            correct: 1,
            explanation: "Deepfakes use AI to create realistic but fake videos or images of people, raising serious ethical concerns about misinformation, fraud, identity theft, and harm to individuals."
          },
          {
            question: "What does 'explainability' mean in AI?",
            options: ["AI explaining jokes", "The ability to understand and describe how an AI system reaches its decisions", "AI writing explanations for homework", "Explaining how to use a computer"],
            correct: 1,
            explanation: "Explainability means that the reasoning behind an AI system's decisions can be understood and described in human terms, which is crucial for trust and accountability."
          },
          {
            question: "An AI system trained only on English text data may not work well for Hindi speakers. This is an example of:",
            options: ["Good AI design", "Representation bias due to lack of diverse data", "Normal AI behaviour", "A hardware limitation"],
            correct: 1,
            explanation: "When training data does not represent all user groups equally, the AI performs poorly for underrepresented groups. This is representation bias."
          },
          {
            question: "Why should AI decisions in healthcare be carefully monitored?",
            options: ["Healthcare is not important", "Wrong AI decisions can directly affect patients' health and lives", "Doctors do not use technology", "AI is always correct in healthcare"],
            correct: 1,
            explanation: "AI errors in healthcare — such as misdiagnosis or incorrect treatment recommendations — can have serious, even life-threatening, consequences for patients."
          },
          {
            question: "What is 'surveillance bias' in AI?",
            options: ["Bias in security camera quality", "When AI surveillance disproportionately targets certain communities or groups", "A camera manufacturing defect", "A type of AI model"],
            correct: 1,
            explanation: "Surveillance bias occurs when AI-powered surveillance systems disproportionately monitor or target certain communities, often based on race or socioeconomic status."
          },
          {
            question: "What role do diverse teams play in reducing AI bias?",
            options: ["No role at all", "Diverse teams bring varied perspectives that help identify and address biases others might miss", "They slow down development", "Diversity is unrelated to AI"],
            correct: 1,
            explanation: "Diverse teams include people from different backgrounds who can spot potential biases, consider impacts on various groups, and design more inclusive AI systems."
          },
          {
            question: "What is the ethical concern with AI collecting personal data from children?",
            options: ["There is no concern", "Children may not understand data privacy, and their data requires special protection", "Children do not use AI", "Only adults use the internet"],
            correct: 1,
            explanation: "Children are especially vulnerable because they may not understand how their data is being collected and used. Laws like COPPA provide special protections for children's data."
          },
          {
            question: "What is 'confirmation bias' in AI?",
            options: ["AI confirming your email address", "When an AI system reinforces existing beliefs or stereotypes in its results", "A way to verify AI accuracy", "A type of user login"],
            correct: 1,
            explanation: "Confirmation bias in AI occurs when the system reinforces existing beliefs or stereotypes, such as a search engine showing only one perspective on a topic."
          },
          {
            question: "What is 'inclusive AI'?",
            options: ["AI that includes all code", "AI designed to work fairly and effectively for people of all backgrounds, abilities, and demographics", "AI that includes many features", "AI that runs on all devices"],
            correct: 1,
            explanation: "Inclusive AI is designed and developed to serve all users fairly, regardless of their gender, race, age, ability, language, or socioeconomic background."
          },
          {
            question: "Why is it important to have regulations and guidelines for AI?",
            options: ["To make AI more expensive", "To prevent misuse, protect people's rights, and ensure AI is developed responsibly", "To slow down innovation", "Regulations are not needed"],
            correct: 1,
            explanation: "Regulations and guidelines help prevent AI misuse, protect individual rights and privacy, ensure safety, and promote responsible and ethical AI development."
          },
          {
            question: "If an AI-powered loan system denies loans mostly to people from a certain neighbourhood, this is an example of:",
            options: ["Efficient banking", "Discriminatory outcomes and potential redlining bias", "Good risk assessment", "Normal banking practice"],
            correct: 1,
            explanation: "Systematically denying loans based on neighbourhood (which may correlate with race or income) is discriminatory. This is a form of redlining bias that violates fairness principles."
          }
        ]
      },
      {
        id: 4,
        name: "Python Programming",
        description: "Practical coding skills for AI applications — variables, data types, loops, functions, lists, and basic libraries",
        questions: [
          {
            question: "What is a variable in Python?",
            options: ["A fixed value that never changes", "A named container that stores a value in memory", "A type of loop", "A Python library"],
            correct: 1,
            explanation: "A variable in Python is a named container used to store data values in memory. For example, age = 15 stores the value 15 in a variable called age."
          },
          {
            question: "What will be the output of: print(type(3.14))?",
            options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'bool'>"],
            correct: 2,
            explanation: "3.14 is a decimal number, which is a float (floating-point number) data type in Python."
          },
          {
            question: "Which of the following is a valid variable name in Python?",
            options: ["2name", "my-name", "my_name", "class"],
            correct: 2,
            explanation: "my_name is valid because it uses letters and underscores. Variable names cannot start with a number (2name), contain hyphens (my-name), or use reserved words (class)."
          },
          {
            question: "What is the output of: print(10 // 3)?",
            options: ["3.33", "3", "4", "10"],
            correct: 1,
            explanation: "The // operator performs floor division (integer division), which divides and rounds down to the nearest whole number. 10 // 3 = 3."
          },
          {
            question: "What data type is the value True in Python?",
            options: ["int", "str", "float", "bool"],
            correct: 3,
            explanation: "True and False are Boolean (bool) values in Python, used to represent truth values in logical operations."
          },
          {
            question: "What does the len() function do in Python?",
            options: ["Deletes items from a list", "Returns the number of items in a sequence like a list or string", "Adds items to a list", "Sorts a list"],
            correct: 1,
            explanation: "The len() function returns the number of items in an object. For example, len('hello') returns 5, and len([1, 2, 3]) returns 3."
          },
          {
            question: "What is the output of: print('Hello' + ' ' + 'World')?",
            options: ["HelloWorld", "Hello World", "Hello+World", "Error"],
            correct: 1,
            explanation: "The + operator concatenates (joins) strings together. 'Hello' + ' ' + 'World' produces 'Hello World' with a space in between."
          },
          {
            question: "Which of the following creates a list in Python?",
            options: ["fruits = (1, 2, 3)", "fruits = {1, 2, 3}", "fruits = [1, 2, 3]", "fruits = <1, 2, 3>"],
            correct: 2,
            explanation: "Lists in Python are created using square brackets []. Parentheses () create tuples, and curly braces {} create sets or dictionaries."
          },
          {
            question: "What is the index of the first element in a Python list?",
            options: ["1", "0", "-1", "None"],
            correct: 1,
            explanation: "Python uses zero-based indexing, so the first element of a list is at index 0. For example, in fruits = ['apple', 'banana'], fruits[0] is 'apple'."
          },
          {
            question: "What does the append() method do to a list?",
            options: ["Removes the last item", "Adds an item to the end of the list", "Sorts the list", "Reverses the list"],
            correct: 1,
            explanation: "The append() method adds a single item to the end of a list. For example, fruits.append('mango') adds 'mango' at the end."
          },
          {
            question: "What is the correct syntax for an if statement in Python?",
            options: ["if (x > 5) {}", "if x > 5:", "if x > 5 then", "IF x > 5 DO"],
            correct: 1,
            explanation: "In Python, an if statement uses a colon (:) after the condition and indentation for the body. No curly braces or 'then' keyword is needed."
          },
          {
            question: "What is the output of the following code?\nfor i in range(3):\n    print(i)",
            options: ["1 2 3", "0 1 2", "0 1 2 3", "1 2"],
            correct: 1,
            explanation: "range(3) generates numbers from 0 to 2 (3 is excluded). So the loop prints 0, 1, and 2 on separate lines."
          },
          {
            question: "What is a function in Python?",
            options: ["A variable that stores numbers", "A reusable block of code that performs a specific task", "A type of loop", "A data type"],
            correct: 1,
            explanation: "A function is a reusable block of code defined with the 'def' keyword that performs a specific task and can be called multiple times."
          },
          {
            question: "How do you define a function in Python?",
            options: ["function myFunc():", "def myFunc():", "create myFunc():", "func myFunc():"],
            correct: 1,
            explanation: "In Python, functions are defined using the 'def' keyword, followed by the function name, parentheses for parameters, and a colon."
          },
          {
            question: "What is the output of: print(5 ** 2)?",
            options: ["10", "7", "25", "52"],
            correct: 2,
            explanation: "The ** operator is the exponentiation (power) operator in Python. 5 ** 2 means 5 raised to the power of 2, which equals 25."
          },
          {
            question: "What does the input() function do in Python?",
            options: ["Displays output on screen", "Takes user input from the keyboard as a string", "Performs calculations", "Imports a library"],
            correct: 1,
            explanation: "The input() function pauses the program and waits for the user to type something on the keyboard. It always returns the input as a string."
          },
          {
            question: "What is the output of: print(10 % 3)?",
            options: ["3", "1", "0", "10"],
            correct: 1,
            explanation: "The % operator is the modulus operator, which returns the remainder after division. 10 divided by 3 gives a remainder of 1."
          },
          {
            question: "Which Python library is commonly used for data analysis?",
            options: ["Tkinter", "Pandas", "Flask", "Django"],
            correct: 1,
            explanation: "Pandas is a popular Python library used for data manipulation and analysis. It provides data structures like DataFrames for working with structured data."
          },
          {
            question: "What is a 'while' loop in Python?",
            options: ["A loop that runs a fixed number of times", "A loop that repeats as long as a condition is True", "A loop that never stops", "A function definition"],
            correct: 1,
            explanation: "A while loop repeatedly executes its block of code as long as the specified condition remains True. It stops when the condition becomes False."
          },
          {
            question: "What will happen if you try: print('Age: ' + 15)?",
            options: ["It prints 'Age: 15'", "It causes a TypeError because you cannot concatenate a string and an integer", "It prints 15", "It prints 'Age:'"],
            correct: 1,
            explanation: "Python does not automatically convert integers to strings. You need to use str(15) or f-strings like f'Age: {15}' to combine strings with numbers."
          },
          {
            question: "What is a comment in Python?",
            options: ["Code that runs first", "A line starting with # that is ignored by the interpreter and explains the code", "A type of variable", "An error message"],
            correct: 1,
            explanation: "Comments start with # and are ignored by Python when running the code. They are used to explain code and make it more readable for humans."
          },
          {
            question: "What is the output of: print(list(range(1, 6)))?",
            options: ["[1, 2, 3, 4, 5, 6]", "[0, 1, 2, 3, 4, 5]", "[1, 2, 3, 4, 5]", "[1, 6]"],
            correct: 2,
            explanation: "range(1, 6) generates numbers starting from 1 up to but not including 6. So the result is [1, 2, 3, 4, 5]."
          },
          {
            question: "What is the purpose of the 'return' statement in a function?",
            options: ["To print a value on screen", "To send a value back from the function to the code that called it", "To end the program", "To create a new variable"],
            correct: 1,
            explanation: "The return statement sends a value back from the function to the caller. For example, a function that calculates area can return the result for further use."
          },
          {
            question: "Which of the following is used to import a library in Python?",
            options: ["include numpy", "import numpy", "using numpy", "require numpy"],
            correct: 1,
            explanation: "The 'import' keyword is used to load libraries in Python. For example, 'import numpy' loads the NumPy library for numerical computations."
          },
          {
            question: "What does the following code print?\nx = [10, 20, 30]\nprint(x[1])",
            options: ["10", "20", "30", "Error"],
            correct: 1,
            explanation: "Python lists use zero-based indexing. x[0] is 10, x[1] is 20, and x[2] is 30. So x[1] prints 20."
          }
        ]
      },
      {
        id: 5,
        name: "Generative AI",
        description: "How generative AI works, large language models, tools like ChatGPT, image generators, prompt engineering, and limitations",
        questions: [
          {
            question: "What is Generative AI?",
            options: ["AI that only classifies data", "AI that can create new content such as text, images, music, and code", "AI that only deletes data", "AI that only stores data"],
            correct: 1,
            explanation: "Generative AI refers to AI systems that can create new content — including text, images, audio, video, and code — based on patterns learned from training data."
          },
          {
            question: "What does LLM stand for in the context of AI?",
            options: ["Low Level Memory", "Large Language Model", "Linear Logic Machine", "Local Learning Module"],
            correct: 1,
            explanation: "LLM stands for Large Language Model — a type of AI model trained on vast amounts of text data that can understand and generate human-like text."
          },
          {
            question: "ChatGPT is an example of:",
            options: ["A computer virus", "A generative AI chatbot powered by a large language model", "A search engine", "A programming language"],
            correct: 1,
            explanation: "ChatGPT is a generative AI chatbot developed by OpenAI, powered by a large language model (GPT), that can generate human-like text responses."
          },
          {
            question: "What is a 'prompt' in the context of generative AI?",
            options: ["A type of computer hardware", "The input text or instruction given to an AI model to generate a response", "A programming error", "A type of database"],
            correct: 1,
            explanation: "A prompt is the text input, question, or instruction that a user provides to a generative AI model. The quality of the prompt greatly affects the quality of the output."
          },
          {
            question: "What is 'prompt engineering'?",
            options: ["Building computer hardware", "The skill of crafting effective prompts to get better and more accurate responses from AI", "A type of software engineering", "Building robots"],
            correct: 1,
            explanation: "Prompt engineering is the practice of designing and refining input prompts to get the most useful, accurate, and relevant outputs from generative AI models."
          },
          {
            question: "Which of the following can generative AI create?",
            options: ["Only text", "Text, images, music, video, and code", "Only images", "Only music"],
            correct: 1,
            explanation: "Generative AI can create many types of content including text, images, music, video, code, and even 3D models, depending on the model used."
          },
          {
            question: "What is a limitation of generative AI models like ChatGPT?",
            options: ["They are always 100% accurate", "They can produce incorrect information confidently, known as 'hallucination'", "They have no limitations", "They can access live internet data at all times"],
            correct: 1,
            explanation: "AI hallucination occurs when generative AI produces information that sounds convincing but is factually incorrect. Users must verify AI outputs for accuracy."
          },
          {
            question: "What is AI 'hallucination'?",
            options: ["AI having dreams", "When an AI model generates false or made-up information that appears convincing", "AI seeing optical illusions", "A type of AI model"],
            correct: 1,
            explanation: "AI hallucination refers to when a generative AI model produces information that is fabricated, inaccurate, or nonsensical, but presents it as if it were true."
          },
          {
            question: "DALL-E and Midjourney are examples of AI tools that:",
            options: ["Write computer code", "Generate images from text descriptions", "Translate languages", "Create spreadsheets"],
            correct: 1,
            explanation: "DALL-E (by OpenAI) and Midjourney are generative AI tools that create images based on text prompts (descriptions) provided by users."
          },
          {
            question: "How do large language models learn?",
            options: ["By memorizing the entire internet", "By training on large amounts of text data to learn patterns in language", "By being programmed with every possible answer", "By copying other AI models"],
            correct: 1,
            explanation: "LLMs are trained on vast datasets of text, learning statistical patterns in language — such as which words and phrases commonly appear together — to generate coherent text."
          },
          {
            question: "What is a good practice when using generative AI for schoolwork?",
            options: ["Copy everything directly without checking", "Use it as a learning aid but verify the information and cite it properly", "Never use AI for any purpose", "Let AI do all your work without understanding it"],
            correct: 1,
            explanation: "Generative AI should be used as a learning tool. Students should verify AI-generated information, understand the content, and properly acknowledge AI assistance."
          },
          {
            question: "What is the difference between generative AI and traditional AI?",
            options: ["There is no difference", "Traditional AI classifies or predicts, while generative AI creates new content", "Generative AI is older", "Traditional AI is more creative"],
            correct: 1,
            explanation: "Traditional AI focuses on tasks like classification and prediction (e.g., spam detection), while generative AI can create new content like text, images, and music."
          },
          {
            question: "Why should you not share personal information with AI chatbots?",
            options: ["AI chatbots do not understand personal information", "Your data could be stored, used for training, or potentially accessed by others", "AI chatbots always delete your data", "Personal information makes AI work better"],
            correct: 1,
            explanation: "Data entered into AI chatbots may be stored, used to improve models, or potentially accessed by the company or others. Protect your privacy by not sharing sensitive information."
          },
          {
            question: "What is a 'token' in the context of large language models?",
            options: ["A type of coin", "A unit of text (word, part of a word, or character) that the model processes", "A login credential", "A type of computer memory"],
            correct: 1,
            explanation: "In LLMs, text is broken into tokens — small pieces like words, subwords, or characters. The model processes these tokens to understand and generate text."
          },
          {
            question: "What is 'training data' for a generative AI model?",
            options: ["Data used only for testing", "The large collection of text, images, or other data the model learns from", "Data created by the AI itself", "Data stored on USB drives"],
            correct: 1,
            explanation: "Training data is the large collection of examples (text, images, etc.) that a generative AI model learns patterns from during its training process."
          },
          {
            question: "Which of the following is an ethical concern about generative AI art?",
            options: ["AI art is always ugly", "AI may generate art based on copyrighted works without permission from original artists", "AI art uses too much paint", "There are no ethical concerns"],
            correct: 1,
            explanation: "A major ethical concern is that AI image generators are trained on images by human artists, often without consent or credit, raising copyright and intellectual property issues."
          },
          {
            question: "What makes a good prompt for generative AI?",
            options: ["A single word with no context", "A clear, specific, and detailed instruction with relevant context", "Random letters and numbers", "A very short and vague request"],
            correct: 1,
            explanation: "Good prompts are clear, specific, and provide enough context and detail so the AI can understand exactly what you want and produce a relevant, high-quality response."
          },
          {
            question: "What is the role of 'temperature' in a generative AI model?",
            options: ["It measures the computer's heat", "It controls how random or creative the AI's output is — higher means more creative, lower means more predictable", "It has nothing to do with AI", "It sets the room temperature"],
            correct: 1,
            explanation: "Temperature is a parameter that controls randomness in AI output. A low temperature makes responses more focused and deterministic, while a high temperature makes them more creative and varied."
          },
          {
            question: "Can generative AI replace human creativity entirely?",
            options: ["Yes, AI is always more creative than humans", "No, AI generates based on learned patterns and lacks true understanding, emotions, and original thought", "AI has already replaced all artists", "Creativity is not real"],
            correct: 1,
            explanation: "Generative AI creates content based on patterns learned from data, but it does not truly understand, feel emotions, or have original thoughts. Human creativity remains unique and irreplaceable."
          },
          {
            question: "What is a 'text-to-image' model?",
            options: ["A scanner that converts images to text", "An AI model that generates images based on written text descriptions", "A printer that prints text", "A camera that takes photos of text"],
            correct: 1,
            explanation: "Text-to-image models (like DALL-E and Stable Diffusion) are generative AI systems that create images from text descriptions provided as prompts."
          },
          {
            question: "What is the concern about generative AI and misinformation?",
            options: ["AI always tells the truth", "Generative AI can create convincing fake text, images, and videos that spread false information", "There is no concern", "AI cannot create fake content"],
            correct: 1,
            explanation: "Generative AI can create highly convincing but false content — such as fake news articles, deepfake videos, and manipulated images — which can be used to spread misinformation."
          },
          {
            question: "What is 'fine-tuning' in the context of generative AI?",
            options: ["Adjusting audio settings", "Further training a pre-trained model on specific data to specialize it for a particular task", "Tuning a musical instrument", "Fixing broken code"],
            correct: 1,
            explanation: "Fine-tuning involves taking a pre-trained model and training it further on a smaller, specific dataset so it performs better for a particular task or domain."
          },
          {
            question: "Why might two people get different responses from the same AI model using the same prompt?",
            options: ["AI is broken", "Generative AI uses randomness in its outputs, and conversation history may differ", "AI always gives the same response", "The computer speed affects the answer"],
            correct: 1,
            explanation: "Generative AI uses probabilistic methods (randomness) when choosing words, so responses can vary. Additionally, different conversation contexts and model versions can produce different results."
          },
          {
            question: "What is the environmental concern about training large AI models?",
            options: ["AI models pollute rivers", "Training large models requires enormous computing power and energy, contributing to carbon emissions", "AI creates physical waste", "There are no environmental concerns"],
            correct: 1,
            explanation: "Training large AI models requires massive computational resources and electricity, which contributes to significant carbon emissions and environmental impact."
          },
          {
            question: "What should you always do when using information from generative AI?",
            options: ["Trust it completely without checking", "Verify and fact-check the information from reliable sources before using it", "Share it immediately on social media", "Assume it is always wrong"],
            correct: 1,
            explanation: "Generative AI can produce inaccurate or fabricated information. Always verify AI-generated content against reliable sources before using or sharing it."
          }
        ]
      }    ]
  }
}

export default quizData
