const questions = [
  {
    "question": "If two lines intersect, the vertically opposite angles are:",
    "options": [
      "Supplementary",
      "Complementary",
      "Equal",
      "Unequal"
    ],
    "correct": 2,
    "explanation": "Vertically opposite angles formed by two intersecting lines are always equal."
  },
  {
    "question": "Two supplementary angles add up to:",
    "options": [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    "correct": 1,
    "explanation": "Supplementary angles are pairs of angles whose sum is 180°."
  },
  {
    "question": "If one angle of a linear pair is 65°, the other angle is:",
    "options": [
      "25°",
      "65°",
      "115°",
      "295°"
    ],
    "correct": 2,
    "explanation": "Angles in a linear pair add up to 180°, so the other angle is 180° - 65° = 115°."
  },
  {
    "question": "Alternate interior angles are equal when lines are:",
    "options": [
      "Perpendicular",
      "Intersecting",
      "Parallel",
      "Skew"
    ],
    "correct": 2,
    "explanation": "Alternate interior angles are equal only when the lines are parallel."
  },
  {
    "question": "Two complementary angles add up to:",
    "options": [
      "45°",
      "90°",
      "180°",
      "360°"
    ],
    "correct": 1,
    "explanation": "Complementary angles are pairs of angles whose sum is 90°."
  },
  {
    "question": "A transversal intersects two parallel lines forming how many angles?",
    "options": [
      "4",
      "6",
      "8",
      "10"
    ],
    "correct": 2,
    "explanation": "A transversal cutting two lines creates 8 angles in total."
  },
  {
    "question": "An angle measuring 90° is called a:",
    "options": [
      "Acute angle",
      "Obtuse angle",
      "Right angle",
      "Straight angle"
    ],
    "correct": 2,
    "explanation": "An angle of exactly 90° is a right angle."
  },
  {
    "question": "Co-interior angles (same-side interior) are:",
    "options": [
      "Equal",
      "Complementary",
      "Supplementary",
      "None of these"
    ],
    "correct": 2,
    "explanation": "Co-interior angles formed by a transversal with parallel lines are supplementary (add to 180°)."
  },
  {
    "question": "If two parallel lines are cut by a transversal, corresponding angles are:",
    "options": [
      "Supplementary",
      "Complementary",
      "Equal",
      "Unequal"
    ],
    "correct": 2,
    "explanation": "Corresponding angles are equal when the lines are parallel."
  },
  {
    "question": "The sum of all angles around a point is:",
    "options": [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    "correct": 3,
    "explanation": "All angles around a point always sum to 360°."
  },
  {
    "question": "If two angles are supplementary and one is 40° more than the other, the angles are:",
    "options": [
      "60° and 120°",
      "70° and 110°",
      "80° and 100°",
      "50° and 130°"
    ],
    "correct": 1,
    "explanation": "Let angles be x and x + 40. Then x + x + 40 = 180, so 2x = 140, x = 70. The angles are 70° and 110°."
  },
  {
    "question": "An angle measuring between 0° and 90° is called:",
    "options": [
      "Obtuse angle",
      "Reflex angle",
      "Acute angle",
      "Straight angle"
    ],
    "correct": 2,
    "explanation": "An acute angle measures between 0° and 90°."
  },
  {
    "question": "A reflex angle measures between:",
    "options": [
      "0° and 90°",
      "90° and 180°",
      "180° and 360°",
      "Exactly 180°"
    ],
    "correct": 2,
    "explanation": "A reflex angle measures more than 180° but less than 360°."
  },
  {
    "question": "If a transversal intersects two lines and alternate interior angles are NOT equal, then the lines are:",
    "options": [
      "Parallel",
      "Perpendicular",
      "Not parallel",
      "Coincident"
    ],
    "correct": 2,
    "explanation": "Alternate interior angles are equal only when the lines are parallel. If they are unequal, the lines are not parallel."
  },
  {
    "question": "The complement of a 35° angle is:",
    "options": [
      "145°",
      "55°",
      "65°",
      "35°"
    ],
    "correct": 1,
    "explanation": "Complementary angles add up to 90°, so the complement is 90° − 35° = 55°."
  },
  {
    "question": "If two parallel lines are cut by a transversal, and one pair of co-interior angles measures 70 degrees and x degrees, then x equals:",
    "options": [
      "70",
      "110",
      "90",
      "180"
    ],
    "correct": 1,
    "explanation": "Co-interior (same-side interior) angles are supplementary when lines are parallel. So 70 + x = 180, giving x = 110 degrees."
  },
  {
    "question": "The supplement of 47 degrees is:",
    "options": [
      "43 degrees",
      "133 degrees",
      "137 degrees",
      "53 degrees"
    ],
    "correct": 1,
    "explanation": "Supplementary angles add up to 180 degrees. So the supplement of 47 degrees = 180 - 47 = 133 degrees."
  },
  {
    "question": "Two angles are complementary. If one angle is 2/3 of the other, the smaller angle is:",
    "options": [
      "36 degrees",
      "54 degrees",
      "30 degrees",
      "60 degrees"
    ],
    "correct": 0,
    "explanation": "Let the angles be x and (2/3)x. Then x + (2/3)x = 90, so (5/3)x = 90, giving x = 54. The other angle = 36. The smaller is 36 degrees."
  },
  {
    "question": "In a triangle, one exterior angle is 120 degrees. If one of the non-adjacent interior angles is 45 degrees, the other non-adjacent interior angle is:",
    "options": [
      "75 degrees",
      "60 degrees",
      "55 degrees",
      "35 degrees"
    ],
    "correct": 0,
    "explanation": "An exterior angle of a triangle equals the sum of the two non-adjacent interior angles. So 120 = 45 + x, giving x = 75 degrees."
  },
  {
    "question": "When two lines intersect, the vertically opposite angles are:",
    "options": [
      "Supplementary",
      "Complementary",
      "Equal",
      "Adjacent"
    ],
    "correct": 2,
    "explanation": "Vertically opposite angles (formed at the point of intersection of two lines) are always equal."
  },
  {
    "question": "If two parallel lines are cut by a transversal, which pair of angles are equal?",
    "options": [
      "Co-interior angles",
      "Adjacent angles on the same line",
      "Alternate interior angles",
      "Linear pair angles"
    ],
    "correct": 2,
    "explanation": "When parallel lines are cut by a transversal, alternate interior angles are equal. Co-interior angles are supplementary, not equal."
  },
  {
    "question": "The angles of a triangle are in the ratio 2:3:5. The largest angle is:",
    "options": [
      "90 degrees",
      "36 degrees",
      "54 degrees",
      "108 degrees"
    ],
    "correct": 0,
    "explanation": "Sum of angles = 180. Let the angles be 2k, 3k, 5k. Then 10k = 180, so k = 18. The largest angle = 5 * 18 = 90 degrees."
  },
  {
    "question": "If a transversal is perpendicular to one of two parallel lines, it is:",
    "options": [
      "Parallel to the other line",
      "Perpendicular to the other line as well",
      "At 45 degrees to the other line",
      "Not related to the other line"
    ],
    "correct": 1,
    "explanation": "If a transversal is perpendicular to one parallel line, it makes 90 degrees with it. Corresponding angles with the other parallel line are also 90 degrees, so it is perpendicular to both."
  },
  {
    "question": "The sum of all angles formed around a point is:",
    "options": [
      "90 degrees",
      "180 degrees",
      "270 degrees",
      "360 degrees"
    ],
    "correct": 3,
    "explanation": "The angles around a point form a complete revolution, which is 360 degrees."
  },
  {
    "question": "In the figure, lines PQ and RS intersect at O. If angle POR = 3x and angle QOS = 5x - 80, find x.",
    "options": [
      "40",
      "50",
      "60",
      "80"
    ],
    "correct": 0,
    "explanation": "Angle POR and angle QOS are vertically opposite, so they are equal. 3x = 5x - 80, giving 2x = 80, so x = 40."
  }
]

export default questions
