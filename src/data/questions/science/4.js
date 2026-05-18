const questions = [
  {
    "question": "The total path length covered by an object is called:",
    "options": [
      "Displacement",
      "Distance",
      "Velocity",
      "Acceleration"
    ],
    "correct": 1,
    "explanation": "Distance is the total path length covered by an object regardless of direction. It is a scalar quantity and is always positive."
  },
  {
    "question": "Displacement is defined as:",
    "options": [
      "Total path length covered",
      "The shortest distance between initial and final positions with direction",
      "Speed multiplied by time",
      "The rate of change of velocity"
    ],
    "correct": 1,
    "explanation": "Displacement is the shortest straight-line distance from the initial position to the final position of an object, along with the direction. It is a vector quantity."
  },
  {
    "question": "An object moving in a circular path returns to its starting point. Its displacement is:",
    "options": [
      "Equal to the circumference",
      "Zero",
      "Equal to the diameter",
      "Equal to the radius"
    ],
    "correct": 1,
    "explanation": "When an object returns to its starting point, its initial and final positions are the same, so the displacement is zero even though the distance travelled equals the circumference."
  },
  {
    "question": "Speed is a:",
    "options": [
      "Vector quantity",
      "Scalar quantity",
      "Neither scalar nor vector",
      "Dimensionless quantity"
    ],
    "correct": 1,
    "explanation": "Speed is a scalar quantity because it has only magnitude (how fast something moves) and no direction."
  },
  {
    "question": "The SI unit of speed is:",
    "options": [
      "km/h",
      "m/s",
      "cm/s",
      "miles/hour"
    ],
    "correct": 1,
    "explanation": "The SI unit of speed (and velocity) is metres per second (m/s)."
  },
  {
    "question": "Velocity is different from speed because velocity includes:",
    "options": [
      "Magnitude only",
      "Direction only",
      "Both magnitude and direction",
      "Neither magnitude nor direction"
    ],
    "correct": 2,
    "explanation": "Velocity is a vector quantity that includes both magnitude (how fast) and direction. Speed only has magnitude."
  },
  {
    "question": "An object covers 100 metres in 20 seconds. Its average speed is:",
    "options": [
      "2 m/s",
      "5 m/s",
      "20 m/s",
      "2000 m/s"
    ],
    "correct": 1,
    "explanation": "Average speed = Total distance / Total time = 100 m / 20 s = 5 m/s."
  },
  {
    "question": "Acceleration is defined as:",
    "options": [
      "Change in distance per unit time",
      "Change in speed per unit distance",
      "Change in velocity per unit time",
      "Velocity multiplied by time"
    ],
    "correct": 2,
    "explanation": "Acceleration is the rate of change of velocity with respect to time. It is given by a = (v - u) / t, where v is final velocity, u is initial velocity, and t is time."
  },
  {
    "question": "The SI unit of acceleration is:",
    "options": [
      "m/s",
      "m/s²",
      "km/h",
      "m²/s"
    ],
    "correct": 1,
    "explanation": "The SI unit of acceleration is metres per second squared (m/s²), which represents the change in velocity (m/s) per unit time (s)."
  },
  {
    "question": "When an object moves with uniform velocity, its acceleration is:",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Infinity"
    ],
    "correct": 2,
    "explanation": "When an object moves with uniform (constant) velocity, there is no change in velocity, so the acceleration is zero."
  },
  {
    "question": "Negative acceleration is also called:",
    "options": [
      "Uniform acceleration",
      "Retardation or deceleration",
      "Zero acceleration",
      "Variable acceleration"
    ],
    "correct": 1,
    "explanation": "Negative acceleration (when an object slows down) is called retardation or deceleration. The velocity decreases over time."
  },
  {
    "question": "In a distance-time graph, a straight line with a positive slope indicates:",
    "options": [
      "The object is stationary",
      "Uniform speed",
      "Non-uniform speed",
      "The object is decelerating"
    ],
    "correct": 1,
    "explanation": "A straight line with a positive slope on a distance-time graph indicates that the object is moving with uniform (constant) speed."
  },
  {
    "question": "In a distance-time graph, a horizontal line means the object is:",
    "options": [
      "Moving with constant speed",
      "Accelerating",
      "Stationary (at rest)",
      "Decelerating"
    ],
    "correct": 2,
    "explanation": "A horizontal line on a distance-time graph means the distance is not changing with time, indicating the object is stationary."
  },
  {
    "question": "The slope of a distance-time graph gives:",
    "options": [
      "Acceleration",
      "Distance",
      "Speed",
      "Time"
    ],
    "correct": 2,
    "explanation": "The slope (gradient) of a distance-time graph gives the speed of the object. Slope = change in distance / change in time = speed."
  },
  {
    "question": "The area under a velocity-time graph represents:",
    "options": [
      "Speed",
      "Acceleration",
      "Displacement",
      "Force"
    ],
    "correct": 2,
    "explanation": "The area under a velocity-time graph gives the displacement (or distance travelled) by the object during that time interval."
  },
  {
    "question": "The slope of a velocity-time graph gives:",
    "options": [
      "Speed",
      "Distance",
      "Acceleration",
      "Displacement"
    ],
    "correct": 2,
    "explanation": "The slope of a velocity-time graph gives the acceleration of the object. Slope = change in velocity / change in time = acceleration."
  },
  {
    "question": "An object starts from rest and accelerates uniformly at 2 m/s² for 5 seconds. Its final velocity is:",
    "options": [
      "2 m/s",
      "5 m/s",
      "10 m/s",
      "7 m/s"
    ],
    "correct": 2,
    "explanation": "Using v = u + at, where u = 0 (starts from rest), a = 2 m/s², t = 5 s: v = 0 + 2 x 5 = 10 m/s."
  },
  {
    "question": "Which equation of motion relates velocity, acceleration, and displacement without time?",
    "options": [
      "v = u + at",
      "s = ut + ½at²",
      "v² = u² + 2as",
      "s = (u + v)t / 2"
    ],
    "correct": 2,
    "explanation": "The third equation of motion, v² = u² + 2as, relates final velocity (v), initial velocity (u), acceleration (a), and displacement (s) without involving time."
  },
  {
    "question": "If a car travels 60 km in 2 hours, its average speed is:",
    "options": [
      "120 km/h",
      "30 km/h",
      "62 km/h",
      "58 km/h"
    ],
    "correct": 1,
    "explanation": "Average speed = Total distance / Total time = 60 km / 2 h = 30 km/h."
  },
  {
    "question": "Uniform circular motion has:",
    "options": [
      "Constant velocity",
      "Constant speed but changing velocity",
      "Constant acceleration in magnitude and direction",
      "Zero acceleration"
    ],
    "correct": 1,
    "explanation": "In uniform circular motion, the speed remains constant but the direction of motion continuously changes, so the velocity (which includes direction) keeps changing."
  },
  {
    "question": "A body is said to be in non-uniform motion when it covers:",
    "options": [
      "Equal distances in equal intervals of time",
      "Unequal distances in equal intervals of time",
      "No distance at all",
      "Equal distances in unequal intervals only"
    ],
    "correct": 1,
    "explanation": "Non-uniform motion occurs when an object covers unequal distances in equal intervals of time, meaning its speed is changing."
  },
  {
    "question": "The odometer of a vehicle measures:",
    "options": [
      "Speed",
      "Velocity",
      "Distance travelled",
      "Acceleration"
    ],
    "correct": 2,
    "explanation": "An odometer is a device in vehicles that measures the total distance travelled by the vehicle."
  },
  {
    "question": "The speedometer of a vehicle measures:",
    "options": [
      "Average speed",
      "Instantaneous speed",
      "Acceleration",
      "Distance"
    ],
    "correct": 1,
    "explanation": "A speedometer measures the instantaneous speed of a vehicle — the speed at a particular instant of time."
  },
  {
    "question": "A body moving with an initial velocity of 10 m/s is brought to rest in 5 seconds. The retardation is:",
    "options": [
      "2 m/s²",
      "50 m/s²",
      "0.5 m/s²",
      "10 m/s²"
    ],
    "correct": 0,
    "explanation": "Using a = (v - u)/t = (0 - 10)/5 = -2 m/s². The magnitude of retardation is 2 m/s²."
  },
  {
    "question": "Distance can never be:",
    "options": [
      "Positive",
      "Zero",
      "Negative",
      "Greater than displacement"
    ],
    "correct": 2,
    "explanation": "Distance is always positive or zero. It can never be negative because it is the total path length, which is a scalar quantity measured without regard to direction."
  }
]

export default questions
