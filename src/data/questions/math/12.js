const questions = [
  {
    "question": "Heron's formula for the area of a triangle is:",
    "options": [
      "√(s(s-a)(s-b)(s-c))",
      "s(s-a)(s-b)(s-c)",
      "½ × base × height",
      "a × b × c"
    ],
    "correct": 0,
    "explanation": "Heron's formula: Area = √(s(s-a)(s-b)(s-c)) where s is the semi-perimeter."
  },
  {
    "question": "The semi-perimeter of a triangle with sides 3, 4, and 5 is:",
    "options": [
      "5",
      "6",
      "7",
      "12"
    ],
    "correct": 1,
    "explanation": "Semi-perimeter s = (3 + 4 + 5)/2 = 12/2 = 6."
  },
  {
    "question": "The area of a triangle with sides 3, 4, and 5 using Heron's formula is:",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correct": 2,
    "explanation": "s = 6, Area = √(6 × 3 × 2 × 1) = √36 = 6 square units."
  },
  {
    "question": "Heron's formula is useful when which measurement is not known?",
    "options": [
      "Sides",
      "Perimeter",
      "Height",
      "Angles"
    ],
    "correct": 2,
    "explanation": "Heron's formula calculates area using only the three sides, without needing the height."
  },
  {
    "question": "The area of an equilateral triangle with side 'a' is:",
    "options": [
      "a²/2",
      "√3/4 × a²",
      "√3/2 × a²",
      "a²"
    ],
    "correct": 1,
    "explanation": "The area of an equilateral triangle is (√3/4) × a²."
  },
  {
    "question": "Can a triangle be formed with sides 1, 2, and 4?",
    "options": [
      "Yes",
      "No",
      "Sometimes",
      "Only if equilateral"
    ],
    "correct": 1,
    "explanation": "1 + 2 = 3 < 4, violating the triangle inequality, so no triangle can be formed."
  },
  {
    "question": "The semi-perimeter of an equilateral triangle with side 6 cm is:",
    "options": [
      "6 cm",
      "9 cm",
      "12 cm",
      "18 cm"
    ],
    "correct": 1,
    "explanation": "s = (6 + 6 + 6)/2 = 18/2 = 9 cm."
  },
  {
    "question": "Heron was a mathematician from:",
    "options": [
      "India",
      "Greece",
      "Egypt",
      "China"
    ],
    "correct": 2,
    "explanation": "Heron (Hero) of Alexandria was an ancient Egyptian-Greek mathematician."
  },
  {
    "question": "To find the area of a quadrilateral using Heron's formula, it is divided into:",
    "options": [
      "Two triangles",
      "Three triangles",
      "Four triangles",
      "It cannot be divided"
    ],
    "correct": 0,
    "explanation": "A quadrilateral is divided into two triangles by a diagonal, and Heron's formula is applied to each."
  },
  {
    "question": "If the sides of a triangle are 5 cm, 12 cm, and 13 cm, the area is:",
    "options": [
      "24 sq cm",
      "30 sq cm",
      "36 sq cm",
      "60 sq cm"
    ],
    "correct": 1,
    "explanation": "s = 15, Area = √(15 × 10 × 3 × 2) = √900 = 30 sq cm."
  },
  {
    "question": "For a triangle with sides 6 cm, 8 cm, and 10 cm, the semi-perimeter is:",
    "options": [
      "10 cm",
      "12 cm",
      "14 cm",
      "24 cm"
    ],
    "correct": 1,
    "explanation": "s = (6 + 8 + 10)/2 = 24/2 = 12 cm."
  },
  {
    "question": "The area of a triangle with sides 6 cm, 8 cm, and 10 cm is:",
    "options": [
      "20 sq cm",
      "24 sq cm",
      "30 sq cm",
      "48 sq cm"
    ],
    "correct": 1,
    "explanation": "s = 12. Area = √(12 × 6 × 4 × 2) = √576 = 24 sq cm. (This is also a right triangle: ½ × 6 × 8 = 24.)"
  },
  {
    "question": "Heron's formula requires knowledge of:",
    "options": [
      "Only the base and height",
      "All three sides of the triangle",
      "Only two sides and the included angle",
      "Only the perimeter"
    ],
    "correct": 1,
    "explanation": "Heron's formula uses the three sides of the triangle to calculate the area."
  },
  {
    "question": "If all three sides of a triangle are 4 cm, the area is:",
    "options": [
      "4√3 sq cm",
      "8 sq cm",
      "16 sq cm",
      "4 sq cm"
    ],
    "correct": 0,
    "explanation": "For an equilateral triangle, Area = (√3/4) × a² = (√3/4) × 16 = 4√3 sq cm."
  },
  {
    "question": "A triangle has sides 10 cm, 10 cm, and 12 cm. Its semi-perimeter is:",
    "options": [
      "12 cm",
      "14 cm",
      "16 cm",
      "32 cm"
    ],
    "correct": 2,
    "explanation": "s = (10 + 10 + 12)/2 = 32/2 = 16 cm."
  },
  {
    "question": "The semi-perimeter of a triangle with sides 13, 14, and 15 cm is:",
    "options": [
      "42 cm",
      "21 cm",
      "28 cm",
      "14 cm"
    ],
    "correct": 1,
    "explanation": "Semi-perimeter s = (a + b + c)/2 = (13 + 14 + 15)/2 = 42/2 = 21 cm."
  },
  {
    "question": "Using Heron's formula, the area of a triangle with sides 3, 4, 5 cm is:",
    "options": [
      "12 sq cm",
      "6 sq cm",
      "10 sq cm",
      "7.5 sq cm"
    ],
    "correct": 1,
    "explanation": "s = (3+4+5)/2 = 6. Area = sqrt(6*(6-3)*(6-4)*(6-5)) = sqrt(6*3*2*1) = sqrt(36) = 6 sq cm."
  },
  {
    "question": "A triangle has sides 10, 10, and 12 cm. Its area is:",
    "options": [
      "48 sq cm",
      "60 sq cm",
      "40 sq cm",
      "36 sq cm"
    ],
    "correct": 0,
    "explanation": "s = (10+10+12)/2 = 16. Area = sqrt(16*6*6*4) = sqrt(2304) = 48 sq cm."
  },
  {
    "question": "Heron's formula for the area of a triangle with sides a, b, c and semi-perimeter s is:",
    "options": [
      "sqrt(s(s-a)(s-b)(s-c))",
      "s(s-a)(s-b)(s-c)",
      "sqrt(s*a*b*c)",
      "1/2 * a * b"
    ],
    "correct": 0,
    "explanation": "Heron's formula states Area = sqrt(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2."
  },
  {
    "question": "An equilateral triangle has side 6 cm. Its area using Heron's formula is:",
    "options": [
      "9 sq cm",
      "9*sqrt(3) sq cm",
      "18 sq cm",
      "36 sq cm"
    ],
    "correct": 1,
    "explanation": "s = 18/2 = 9. Area = sqrt(9*3*3*3) = sqrt(243) = 9*sqrt(3) sq cm."
  },
  {
    "question": "A triangular field has sides 50 m, 60 m, and 70 m. The cost of levelling it at Rs 4 per sq m is approximately:",
    "options": [
      "Rs 4899",
      "Rs 5765",
      "Rs 5878",
      "Rs 6000"
    ],
    "correct": 2,
    "explanation": "s = 90. Area = sqrt(90*40*30*20) = sqrt(2160000) = 1469.69... Cost = 1469.69 * 4 = Rs 5878.78, approximately Rs 5878."
  },
  {
    "question": "The sides of a triangle are 5 cm, 12 cm, and 13 cm. This triangle is:",
    "options": [
      "Acute-angled",
      "Right-angled",
      "Obtuse-angled",
      "Equilateral"
    ],
    "correct": 1,
    "explanation": "5^2 + 12^2 = 25 + 144 = 169 = 13^2. Since the sum of squares of two sides equals the square of the third, it is a right-angled triangle."
  },
  {
    "question": "A rhombus has diagonals of length 16 cm and 12 cm. Its side length is:",
    "options": [
      "10 cm",
      "14 cm",
      "20 cm",
      "8 cm"
    ],
    "correct": 0,
    "explanation": "The diagonals of a rhombus bisect each other at right angles, forming right triangles with legs 8 and 6. Side = sqrt(8^2 + 6^2) = sqrt(64+36) = sqrt(100) = 10 cm."
  },
  {
    "question": "The area of triangle with sides 1 cm, 1 cm, and 1 cm is:",
    "options": [
      "1 sq cm",
      "sqrt(3)/2 sq cm",
      "sqrt(3)/4 sq cm",
      "1/2 sq cm"
    ],
    "correct": 2,
    "explanation": "s = 3/2. Area = sqrt((3/2)(1/2)(1/2)(1/2)) = sqrt(3/16) = sqrt(3)/4 sq cm."
  },
  {
    "question": "A quadrilateral has one diagonal of length 10 cm which divides it into two triangles with areas 24 sq cm and 30 sq cm. The area of the quadrilateral is:",
    "options": [
      "54 sq cm",
      "240 sq cm",
      "6 sq cm",
      "27 sq cm"
    ],
    "correct": 0,
    "explanation": "The area of the quadrilateral equals the sum of the areas of the two triangles formed by the diagonal: 24 + 30 = 54 sq cm."
  }
]

export default questions
