const questions = [
  {
    "question": "The longest chord of a circle is the:",
    "options": [
      "Radius",
      "Arc",
      "Diameter",
      "Secant"
    ],
    "correct": 2,
    "explanation": "The diameter is the longest chord, passing through the centre of the circle."
  },
  {
    "question": "Equal chords of a circle are:",
    "options": [
      "Equidistant from the centre",
      "At different distances from the centre",
      "Parallel",
      "Perpendicular"
    ],
    "correct": 0,
    "explanation": "Equal chords are equidistant from the centre of the circle."
  },
  {
    "question": "The perpendicular from the centre of a circle to a chord:",
    "options": [
      "Trisects the chord",
      "Is parallel to the chord",
      "Bisects the chord",
      "Does not intersect the chord"
    ],
    "correct": 2,
    "explanation": "The perpendicular drawn from the centre to a chord bisects the chord."
  },
  {
    "question": "The angle subtended by a diameter on any point on the circle is:",
    "options": [
      "45°",
      "90°",
      "180°",
      "60°"
    ],
    "correct": 1,
    "explanation": "An angle in a semicircle (subtended by a diameter) is always 90°."
  },
  {
    "question": "How many circles can pass through three non-collinear points?",
    "options": [
      "None",
      "One",
      "Two",
      "Infinite"
    ],
    "correct": 1,
    "explanation": "Exactly one unique circle passes through three non-collinear points."
  },
  {
    "question": "Angles in the same segment of a circle are:",
    "options": [
      "Supplementary",
      "Complementary",
      "Equal",
      "Unequal"
    ],
    "correct": 2,
    "explanation": "Angles subtended by the same arc in the same segment are equal."
  },
  {
    "question": "A cyclic quadrilateral has all four vertices on a:",
    "options": [
      "Straight line",
      "Circle",
      "Parabola",
      "Triangle"
    ],
    "correct": 1,
    "explanation": "A cyclic quadrilateral has all its vertices lying on a circle."
  },
  {
    "question": "Opposite angles of a cyclic quadrilateral are:",
    "options": [
      "Equal",
      "Complementary",
      "Supplementary",
      "None of these"
    ],
    "correct": 2,
    "explanation": "Opposite angles of a cyclic quadrilateral add up to 180°."
  },
  {
    "question": "The angle subtended by an arc at the centre is how much of the angle at any point on the remaining circle?",
    "options": [
      "Equal",
      "Half",
      "Double",
      "Triple"
    ],
    "correct": 2,
    "explanation": "The angle at the centre is twice the angle subtended at any point on the remaining part of the circle."
  },
  {
    "question": "If two circles are concentric, they have:",
    "options": [
      "Same radius",
      "Same centre",
      "Same chord",
      "Same tangent"
    ],
    "correct": 1,
    "explanation": "Concentric circles share the same centre but have different radii."
  },
  {
    "question": "If the angle subtended by an arc at the centre is 60°, the angle subtended at any point on the remaining circle is:",
    "options": [
      "60°",
      "30°",
      "120°",
      "90°"
    ],
    "correct": 1,
    "explanation": "The angle at any point on the remaining circle is half the angle at the centre: 60°/2 = 30°."
  },
  {
    "question": "A chord that passes through the centre of a circle is called the:",
    "options": [
      "Radius",
      "Secant",
      "Diameter",
      "Tangent"
    ],
    "correct": 2,
    "explanation": "A chord passing through the centre of a circle is the diameter."
  },
  {
    "question": "The sum of opposite angles of a cyclic quadrilateral ABCD is:",
    "options": [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    "correct": 1,
    "explanation": "In a cyclic quadrilateral, each pair of opposite angles sums to 180°."
  },
  {
    "question": "If two chords of a circle are equal, then their corresponding arcs are:",
    "options": [
      "Unequal",
      "Equal",
      "Perpendicular",
      "Parallel"
    ],
    "correct": 1,
    "explanation": "Equal chords of a circle subtend equal arcs."
  },
  {
    "question": "Three collinear points can have how many circles passing through them?",
    "options": [
      "One",
      "Two",
      "Infinite",
      "None"
    ],
    "correct": 3,
    "explanation": "No circle can pass through three collinear points because a circle requires non-collinear points."
  },
  {
    "question": "The angle subtended by a diameter at any point on the circle is:",
    "options": [
      "45 degrees",
      "60 degrees",
      "90 degrees",
      "180 degrees"
    ],
    "correct": 2,
    "explanation": "An angle in a semicircle (subtended by a diameter at any point on the circle) is always 90 degrees. This is Thales' theorem."
  },
  {
    "question": "Equal chords of a circle subtend ______ angles at the centre.",
    "options": [
      "Supplementary",
      "Complementary",
      "Equal",
      "Unequal"
    ],
    "correct": 2,
    "explanation": "Equal chords of a circle subtend equal angles at the centre. This can be proved using the SSS congruence of the triangles formed by the radii and the chords."
  },
  {
    "question": "The perpendicular from the centre of a circle to a chord:",
    "options": [
      "Trisects the chord",
      "Bisects the chord",
      "Is equal to the chord",
      "Passes through an endpoint of the chord"
    ],
    "correct": 1,
    "explanation": "The perpendicular drawn from the centre of a circle to a chord always bisects the chord."
  },
  {
    "question": "In a cyclic quadrilateral ABCD, if angle A = 80 degrees, then angle C equals:",
    "options": [
      "80 degrees",
      "100 degrees",
      "160 degrees",
      "280 degrees"
    ],
    "correct": 1,
    "explanation": "In a cyclic quadrilateral, opposite angles are supplementary. So angle C = 180 - 80 = 100 degrees."
  },
  {
    "question": "The angle subtended by an arc at the centre is ______ the angle subtended at any point on the remaining circle.",
    "options": [
      "Half",
      "Equal to",
      "Twice",
      "Thrice"
    ],
    "correct": 2,
    "explanation": "The angle subtended by an arc at the centre is always twice the angle subtended by it at any point on the remaining part of the circle."
  },
  {
    "question": "A chord of length 24 cm is at a distance of 5 cm from the centre. The radius of the circle is:",
    "options": [
      "13 cm",
      "12 cm",
      "7 cm",
      "26 cm"
    ],
    "correct": 0,
    "explanation": "The perpendicular from the centre bisects the chord, so half-chord = 12 cm. By Pythagoras: radius = sqrt(12^2 + 5^2) = sqrt(144 + 25) = sqrt(169) = 13 cm."
  },
  {
    "question": "Two circles of radii 5 cm and 3 cm have their centres 4 cm apart. They are:",
    "options": [
      "External to each other",
      "Intersecting at two points",
      "Touching externally",
      "Touching internally"
    ],
    "correct": 1,
    "explanation": "Distance between centres d = 4. Since r1 - r2 = 2 < d = 4 < r1 + r2 = 8, the two circles intersect at two points."
  },
  {
    "question": "Angles in the same segment of a circle are:",
    "options": [
      "Supplementary",
      "Complementary",
      "Equal",
      "At right angles"
    ],
    "correct": 2,
    "explanation": "All angles subtended by the same arc (or chord) in the same segment of a circle are equal."
  },
  {
    "question": "If two chords of a circle are equidistant from the centre, then they are:",
    "options": [
      "Perpendicular",
      "Parallel",
      "Equal in length",
      "Unequal"
    ],
    "correct": 2,
    "explanation": "Chords equidistant from the centre of a circle are equal in length. This follows from the congruence of the right triangles formed by the perpendiculars from the centre."
  },
  {
    "question": "The sum of opposite angles of a cyclic quadrilateral is:",
    "options": [
      "90 degrees",
      "180 degrees",
      "270 degrees",
      "360 degrees"
    ],
    "correct": 1,
    "explanation": "The sum of each pair of opposite angles in a cyclic quadrilateral is 180 degrees (they are supplementary)."
  }
]

export default questions
