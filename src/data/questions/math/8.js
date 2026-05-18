const questions = [
  {
    "question": "The sum of all angles of a triangle is:",
    "options": [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    "correct": 1,
    "explanation": "The angle sum property states that angles of a triangle add up to 180°."
  },
  {
    "question": "Which congruence criterion uses two sides and the included angle?",
    "options": [
      "SSS",
      "SAS",
      "ASA",
      "RHS"
    ],
    "correct": 1,
    "explanation": "SAS (Side-Angle-Side) uses two sides and the angle between them."
  },
  {
    "question": "In an equilateral triangle, each angle measures:",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correct": 2,
    "explanation": "All angles in an equilateral triangle are equal and each measures 60°."
  },
  {
    "question": "If two triangles are congruent, their corresponding parts are:",
    "options": [
      "Unequal",
      "Proportional",
      "Equal",
      "Supplementary"
    ],
    "correct": 2,
    "explanation": "CPCT: Corresponding Parts of Congruent Triangles are equal."
  },
  {
    "question": "The side opposite to the largest angle is:",
    "options": [
      "The smallest side",
      "The largest side",
      "Equal to other sides",
      "Cannot be determined"
    ],
    "correct": 1,
    "explanation": "In a triangle, the side opposite the largest angle is the longest side."
  },
  {
    "question": "RHS congruence rule is applicable to:",
    "options": [
      "All triangles",
      "Right triangles only",
      "Equilateral triangles",
      "Isosceles triangles"
    ],
    "correct": 1,
    "explanation": "RHS (Right angle-Hypotenuse-Side) applies only to right-angled triangles."
  },
  {
    "question": "An isosceles triangle has:",
    "options": [
      "No equal sides",
      "Two equal sides",
      "Three equal sides",
      "Four equal sides"
    ],
    "correct": 1,
    "explanation": "An isosceles triangle has exactly two sides of equal length."
  },
  {
    "question": "In triangle ABC, if AB = AC, then:",
    "options": [
      "∠B = ∠C",
      "∠A = ∠B",
      "∠A = ∠C",
      "All angles are equal"
    ],
    "correct": 0,
    "explanation": "Angles opposite to equal sides are equal, so ∠B = ∠C."
  },
  {
    "question": "The sum of any two sides of a triangle is always:",
    "options": [
      "Equal to the third side",
      "Less than the third side",
      "Greater than the third side",
      "None of these"
    ],
    "correct": 2,
    "explanation": "The Triangle Inequality states that the sum of any two sides exceeds the third."
  },
  {
    "question": "How many congruence criteria are there for triangles?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 2,
    "explanation": "There are 4 congruence criteria: SSS, SAS, ASA (or AAS), and RHS."
  },
  {
    "question": "An exterior angle of a triangle is equal to:",
    "options": [
      "The sum of all interior angles",
      "The sum of the two non-adjacent interior angles",
      "The adjacent interior angle",
      "Half the sum of all angles"
    ],
    "correct": 1,
    "explanation": "The Exterior Angle Theorem states that an exterior angle equals the sum of the two non-adjacent interior angles."
  },
  {
    "question": "In a triangle, if all three sides are unequal, the triangle is called:",
    "options": [
      "Equilateral",
      "Isosceles",
      "Scalene",
      "Right-angled"
    ],
    "correct": 2,
    "explanation": "A scalene triangle has all three sides of different lengths."
  },
  {
    "question": "ASA congruence rule means two triangles are congruent if:",
    "options": [
      "All three sides are equal",
      "Two angles and the included side are equal",
      "Two sides and the included angle are equal",
      "All three angles are equal"
    ],
    "correct": 1,
    "explanation": "ASA (Angle-Side-Angle): Two angles and the side between them are equal in both triangles."
  },
  {
    "question": "If ∠A = 50° and ∠B = 60° in triangle ABC, then ∠C is:",
    "options": [
      "50°",
      "60°",
      "70°",
      "80°"
    ],
    "correct": 2,
    "explanation": "∠C = 180° − 50° − 60° = 70° (angle sum property of a triangle)."
  },
  {
    "question": "In a right-angled triangle, the side opposite the right angle is called the:",
    "options": [
      "Base",
      "Perpendicular",
      "Hypotenuse",
      "Median"
    ],
    "correct": 2,
    "explanation": "The hypotenuse is the longest side of a right triangle, opposite the 90° angle."
  },
  {
    "question": "In triangles ABC and DEF, AB = DE, BC = EF, and angle B = angle E. The two triangles are congruent by which criterion?",
    "options": [
      "SSS",
      "SAS",
      "ASA",
      "RHS"
    ],
    "correct": 1,
    "explanation": "Two sides and the included angle of one triangle are equal to two sides and the included angle of the other. This is the SAS (Side-Angle-Side) congruence criterion."
  },
  {
    "question": "In an isosceles triangle PQR with PQ = PR, the angle opposite to PQ is:",
    "options": [
      "angle P",
      "angle Q",
      "angle R",
      "Cannot be determined"
    ],
    "correct": 2,
    "explanation": "In triangle PQR, the side PQ is opposite to angle R. The angle opposite to a side is the angle at the vertex not on that side."
  },
  {
    "question": "If in a triangle, two angles are equal, then the sides opposite to them are:",
    "options": [
      "Unequal",
      "Equal",
      "Perpendicular",
      "Parallel"
    ],
    "correct": 1,
    "explanation": "This is the converse of the isosceles triangle theorem: if two angles of a triangle are equal, the sides opposite those angles are also equal."
  },
  {
    "question": "The three angles of a triangle are 60, 60, and 60 degrees. The triangle is:",
    "options": [
      "Isosceles but not equilateral",
      "Scalene",
      "Right-angled",
      "Equilateral"
    ],
    "correct": 3,
    "explanation": "All three angles are equal (60 degrees each), so all three sides must be equal. Such a triangle is equilateral."
  },
  {
    "question": "In a right triangle with hypotenuse 13 cm and one leg 5 cm, the other leg is:",
    "options": [
      "8 cm",
      "12 cm",
      "10 cm",
      "18 cm"
    ],
    "correct": 1,
    "explanation": "By Pythagoras theorem: other leg = sqrt(13^2 - 5^2) = sqrt(169 - 25) = sqrt(144) = 12 cm."
  },
  {
    "question": "Which congruence criterion is used when the hypotenuse and one side of two right triangles are equal?",
    "options": [
      "SAS",
      "ASA",
      "SSS",
      "RHS"
    ],
    "correct": 3,
    "explanation": "When the hypotenuse and one leg of two right triangles are equal, the triangles are congruent by the RHS (Right angle-Hypotenuse-Side) criterion."
  },
  {
    "question": "In triangle ABC, if AB > AC, then which angle is greater?",
    "options": [
      "angle A > angle B",
      "angle B > angle C",
      "angle C > angle B",
      "angle A > angle C"
    ],
    "correct": 2,
    "explanation": "The angle opposite the longer side is greater. AB > AC means the angle opposite AB (angle C) is greater than the angle opposite AC (angle B)."
  },
  {
    "question": "Two sides of a triangle are 7 cm and 10 cm. The third side must be:",
    "options": [
      "Greater than 17 cm",
      "Between 3 cm and 17 cm",
      "Exactly 12 cm",
      "Less than 3 cm"
    ],
    "correct": 1,
    "explanation": "By the triangle inequality, the third side must be greater than |10-7| = 3 cm and less than 10+7 = 17 cm."
  },
  {
    "question": "The SSA condition (two sides and a non-included angle) is:",
    "options": [
      "A valid congruence criterion",
      "Not a valid congruence criterion",
      "Same as SAS",
      "Same as ASA"
    ],
    "correct": 1,
    "explanation": "SSA is not a valid congruence criterion because it can lead to two different triangles (the ambiguous case). Only SAS, ASA, AAS, SSS, and RHS are valid."
  },
  {
    "question": "In triangle ABC, the bisector of angle A meets BC at D. If AB = AC, then BD is:",
    "options": [
      "Greater than DC",
      "Less than DC",
      "Equal to DC",
      "Twice DC"
    ],
    "correct": 2,
    "explanation": "In an isosceles triangle, the angle bisector from the vertex angle also bisects the base. Since AB = AC, the bisector of angle A is also the median, so BD = DC."
  }
]

export default questions
