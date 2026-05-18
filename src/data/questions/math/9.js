const questions = [
  {
    "question": "The sum of interior angles of a quadrilateral is:",
    "options": [
      "180°",
      "270°",
      "360°",
      "540°"
    ],
    "correct": 2,
    "explanation": "The sum of interior angles of a quadrilateral is always 360°."
  },
  {
    "question": "A quadrilateral with both pairs of opposite sides parallel is called a:",
    "options": [
      "Trapezium",
      "Rhombus",
      "Parallelogram",
      "Kite"
    ],
    "correct": 2,
    "explanation": "A parallelogram has both pairs of opposite sides parallel."
  },
  {
    "question": "In a parallelogram, opposite angles are:",
    "options": [
      "Complementary",
      "Supplementary",
      "Equal",
      "Unequal"
    ],
    "correct": 2,
    "explanation": "Opposite angles of a parallelogram are always equal."
  },
  {
    "question": "The diagonals of a rectangle are:",
    "options": [
      "Unequal",
      "Equal",
      "Perpendicular",
      "None of these"
    ],
    "correct": 1,
    "explanation": "A rectangle has equal diagonals that bisect each other."
  },
  {
    "question": "A rhombus has all sides:",
    "options": [
      "Unequal",
      "Parallel",
      "Equal",
      "Perpendicular"
    ],
    "correct": 2,
    "explanation": "All four sides of a rhombus are of equal length."
  },
  {
    "question": "The diagonals of a rhombus:",
    "options": [
      "Are equal",
      "Bisect each other at right angles",
      "Do not bisect each other",
      "Are parallel"
    ],
    "correct": 1,
    "explanation": "The diagonals of a rhombus bisect each other at 90°."
  },
  {
    "question": "A square is a special case of:",
    "options": [
      "Only a rectangle",
      "Only a rhombus",
      "Both rectangle and rhombus",
      "Trapezium"
    ],
    "correct": 2,
    "explanation": "A square has all properties of both a rectangle and a rhombus."
  },
  {
    "question": "In a parallelogram, consecutive angles are:",
    "options": [
      "Equal",
      "Complementary",
      "Supplementary",
      "None of these"
    ],
    "correct": 2,
    "explanation": "Consecutive (adjacent) angles of a parallelogram are supplementary (add to 180°)."
  },
  {
    "question": "A trapezium has exactly how many pairs of parallel sides?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correct": 1,
    "explanation": "A trapezium has exactly one pair of parallel sides."
  },
  {
    "question": "The line segment joining the midpoints of two sides of a triangle is:",
    "options": [
      "Equal to the third side",
      "Half of the third side",
      "Twice the third side",
      "Perpendicular to the third side"
    ],
    "correct": 1,
    "explanation": "The Midpoint Theorem states the segment is parallel to and half the length of the third side."
  },
  {
    "question": "The diagonals of a parallelogram:",
    "options": [
      "Are always equal",
      "Are always perpendicular",
      "Bisect each other",
      "Do not intersect"
    ],
    "correct": 2,
    "explanation": "The diagonals of a parallelogram always bisect each other, though they need not be equal or perpendicular."
  },
  {
    "question": "A quadrilateral with one pair of equal and parallel opposite sides is a:",
    "options": [
      "Trapezium",
      "Parallelogram",
      "Kite",
      "Rhombus"
    ],
    "correct": 1,
    "explanation": "If one pair of opposite sides is both equal and parallel, the quadrilateral is a parallelogram."
  },
  {
    "question": "In a quadrilateral ABCD, if ∠A = 90°, ∠B = 70°, and ∠C = 110°, then ∠D is:",
    "options": [
      "80°",
      "90°",
      "100°",
      "70°"
    ],
    "correct": 1,
    "explanation": "Sum of angles = 360°. So ∠D = 360° − 90° − 70° − 110° = 90°."
  },
  {
    "question": "A kite has:",
    "options": [
      "All sides equal",
      "Two pairs of consecutive equal sides",
      "Opposite sides parallel",
      "No equal sides"
    ],
    "correct": 1,
    "explanation": "A kite has two pairs of adjacent (consecutive) sides that are equal."
  },
  {
    "question": "The diagonals of a square:",
    "options": [
      "Are unequal",
      "Bisect each other at right angles and are equal",
      "Are parallel",
      "Do not bisect each other"
    ],
    "correct": 1,
    "explanation": "A square's diagonals are equal in length, bisect each other, and intersect at right angles."
  },
  {
    "question": "The sum of the interior angles of a quadrilateral is:",
    "options": [
      "180 degrees",
      "270 degrees",
      "360 degrees",
      "540 degrees"
    ],
    "correct": 2,
    "explanation": "A quadrilateral can be divided into two triangles, so the sum of its interior angles = 2 * 180 = 360 degrees."
  },
  {
    "question": "In a parallelogram ABCD, if angle A = 65 degrees, then angle B equals:",
    "options": [
      "65 degrees",
      "115 degrees",
      "130 degrees",
      "90 degrees"
    ],
    "correct": 1,
    "explanation": "In a parallelogram, consecutive angles are supplementary. So angle B = 180 - 65 = 115 degrees."
  },
  {
    "question": "The diagonals of a rectangle are:",
    "options": [
      "Perpendicular and equal",
      "Equal but not necessarily perpendicular",
      "Perpendicular but not equal",
      "Neither equal nor perpendicular"
    ],
    "correct": 1,
    "explanation": "The diagonals of a rectangle are always equal in length but they are perpendicular only if the rectangle is a square."
  },
  {
    "question": "A quadrilateral whose diagonals bisect each other at right angles is a:",
    "options": [
      "Rectangle",
      "Parallelogram",
      "Rhombus",
      "Trapezium"
    ],
    "correct": 2,
    "explanation": "In a rhombus, the diagonals bisect each other at right angles. A rectangle's diagonals bisect each other but not at right angles (unless it is a square)."
  },
  {
    "question": "In a trapezium ABCD with AB parallel to CD, if AB = 12 cm and CD = 8 cm, the length of the line segment joining the midpoints of AD and BC is:",
    "options": [
      "10 cm",
      "20 cm",
      "4 cm",
      "14 cm"
    ],
    "correct": 0,
    "explanation": "The line joining the midpoints of the non-parallel sides of a trapezium equals the average of the parallel sides: (12 + 8)/2 = 10 cm."
  },
  {
    "question": "Which of the following is NOT always true for a parallelogram?",
    "options": [
      "Opposite sides are equal",
      "Opposite angles are equal",
      "Diagonals are equal",
      "Diagonals bisect each other"
    ],
    "correct": 2,
    "explanation": "In a general parallelogram, opposite sides are equal, opposite angles are equal, and diagonals bisect each other. However, diagonals are equal only in special cases like a rectangle."
  },
  {
    "question": "The mid-point theorem states that the line segment joining the midpoints of two sides of a triangle is:",
    "options": [
      "Equal to the third side",
      "Parallel to the third side and half its length",
      "Perpendicular to the third side",
      "Twice the third side"
    ],
    "correct": 1,
    "explanation": "The mid-point theorem states that the segment joining midpoints of two sides of a triangle is parallel to the third side and equal to half of it."
  },
  {
    "question": "A square is always a:",
    "options": [
      "Rhombus but not a rectangle",
      "Rectangle but not a rhombus",
      "Both a rhombus and a rectangle",
      "Neither a rhombus nor a rectangle"
    ],
    "correct": 2,
    "explanation": "A square has all properties of a rhombus (all sides equal, diagonals bisect at right angles) and all properties of a rectangle (all angles 90 degrees, diagonals equal). So it is both."
  },
  {
    "question": "The angles of a quadrilateral are in the ratio 1:2:3:4. The smallest angle is:",
    "options": [
      "36 degrees",
      "72 degrees",
      "108 degrees",
      "144 degrees"
    ],
    "correct": 0,
    "explanation": "Let the angles be k, 2k, 3k, 4k. Sum = 10k = 360, so k = 36. The smallest angle is 36 degrees."
  },
  {
    "question": "If one angle of a rhombus is 50 degrees, the other three angles are:",
    "options": [
      "50, 130, 130",
      "130, 50, 130",
      "50, 50, 210",
      "130, 130, 50"
    ],
    "correct": 1,
    "explanation": "A rhombus is a parallelogram, so opposite angles are equal and consecutive angles are supplementary. If one angle is 50, the opposite is 50 and the other two are 180-50 = 130 each. The order is 130, 50, 130."
  }
]

export default questions
