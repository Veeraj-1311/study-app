const questions = [
  {
    "question": "Newton's first law of motion is also called the law of:",
    "options": [
      "Acceleration",
      "Inertia",
      "Action and reaction",
      "Gravitation"
    ],
    "correct": 1,
    "explanation": "Newton's first law is also called the law of inertia. It states that an object at rest stays at rest and an object in motion stays in uniform motion unless acted upon by an unbalanced force."
  },
  {
    "question": "Inertia is the tendency of an object to:",
    "options": [
      "Accelerate",
      "Resist a change in its state of motion",
      "Move in a circle",
      "Fall towards the Earth"
    ],
    "correct": 1,
    "explanation": "Inertia is the natural tendency of an object to resist any change in its state of rest or uniform motion. The greater the mass, the greater the inertia."
  },
  {
    "question": "When balanced forces act on an object, the object:",
    "options": [
      "Accelerates",
      "Decelerates",
      "Remains in its current state of motion",
      "Changes direction"
    ],
    "correct": 2,
    "explanation": "Balanced forces have a net force of zero. They do not change the state of motion of an object — a stationary object stays stationary, and a moving object continues at the same speed and direction."
  },
  {
    "question": "An unbalanced force acting on an object will:",
    "options": [
      "Keep it stationary",
      "Change its state of motion",
      "Have no effect",
      "Only change its shape"
    ],
    "correct": 1,
    "explanation": "An unbalanced (net) force causes a change in the state of motion of an object. It can cause the object to start moving, stop, speed up, slow down, or change direction."
  },
  {
    "question": "Newton's second law of motion states that force equals:",
    "options": [
      "Mass divided by acceleration",
      "Mass times velocity",
      "Mass times acceleration",
      "Weight times speed"
    ],
    "correct": 2,
    "explanation": "Newton's second law states F = ma, where F is force, m is mass, and a is acceleration. The acceleration of an object is directly proportional to the net force and inversely proportional to mass."
  },
  {
    "question": "The SI unit of force is:",
    "options": [
      "Kilogram",
      "Newton",
      "Joule",
      "Watt"
    ],
    "correct": 1,
    "explanation": "The SI unit of force is the Newton (N). One Newton is the force needed to accelerate a 1 kg mass by 1 m/s². Named after Sir Isaac Newton."
  },
  {
    "question": "Momentum of an object is the product of its:",
    "options": [
      "Mass and acceleration",
      "Mass and velocity",
      "Force and time",
      "Weight and speed"
    ],
    "correct": 1,
    "explanation": "Momentum (p) = mass (m) x velocity (v). It is a vector quantity that depends on both the mass and velocity of the object."
  },
  {
    "question": "The SI unit of momentum is:",
    "options": [
      "kg m/s",
      "N/s",
      "kg m/s²",
      "N m"
    ],
    "correct": 0,
    "explanation": "The SI unit of momentum is kilogram metre per second (kg m/s), since momentum = mass x velocity."
  },
  {
    "question": "Newton's third law of motion states that:",
    "options": [
      "Force equals mass times acceleration",
      "Every action has an equal and opposite reaction",
      "Objects at rest stay at rest",
      "Momentum is always conserved"
    ],
    "correct": 1,
    "explanation": "Newton's third law states that for every action force, there is an equal and opposite reaction force. These forces act on different objects."
  },
  {
    "question": "A passenger in a bus tends to fall backward when the bus starts suddenly. This is due to:",
    "options": [
      "Momentum",
      "Inertia of rest",
      "Inertia of motion",
      "Friction"
    ],
    "correct": 1,
    "explanation": "The passenger's body tends to remain at rest (inertia of rest) while the bus moves forward, causing the passenger to fall backward."
  },
  {
    "question": "A force of 10 N acts on a body of mass 2 kg. The acceleration produced is:",
    "options": [
      "20 m/s²",
      "5 m/s²",
      "12 m/s²",
      "8 m/s²"
    ],
    "correct": 1,
    "explanation": "Using F = ma, we get a = F/m = 10 N / 2 kg = 5 m/s²."
  },
  {
    "question": "The rate of change of momentum of an object is equal to:",
    "options": [
      "The mass of the object",
      "The velocity of the object",
      "The applied unbalanced force",
      "The inertia of the object"
    ],
    "correct": 2,
    "explanation": "According to Newton's second law, the rate of change of momentum of an object is equal to the net applied force: F = dp/dt = (mv - mu)/t."
  },
  {
    "question": "Conservation of momentum states that in the absence of external forces:",
    "options": [
      "Momentum increases",
      "Momentum decreases",
      "Total momentum remains constant",
      "Only kinetic energy is conserved"
    ],
    "correct": 2,
    "explanation": "The law of conservation of momentum states that the total momentum of a system remains constant if no external unbalanced force acts on it."
  },
  {
    "question": "A cricket player moves his hands backward while catching a ball to:",
    "options": [
      "Increase the force on the ball",
      "Increase the time of impact and reduce the force",
      "Decrease the momentum of the ball",
      "Increase the velocity of the ball"
    ],
    "correct": 1,
    "explanation": "Moving hands backward increases the time over which the momentum changes, which reduces the force on the hands (F = change in momentum / time)."
  },
  {
    "question": "The momentum of a stationary object is:",
    "options": [
      "Infinite",
      "Depends on mass",
      "Zero",
      "Cannot be determined"
    ],
    "correct": 2,
    "explanation": "Since momentum = mass x velocity, and the velocity of a stationary object is zero, the momentum is zero regardless of the mass."
  },
  {
    "question": "Friction is a force that:",
    "options": [
      "Always helps motion",
      "Opposes the relative motion between surfaces",
      "Acts only on moving objects",
      "Is always harmful"
    ],
    "correct": 1,
    "explanation": "Friction is a contact force that opposes the relative motion (or tendency of motion) between two surfaces in contact."
  },
  {
    "question": "A rocket works on the principle of:",
    "options": [
      "Newton's first law",
      "Newton's second law only",
      "Newton's third law",
      "Law of gravitation"
    ],
    "correct": 2,
    "explanation": "A rocket works on Newton's third law. The exhaust gases are expelled downward (action), and the rocket is pushed upward (reaction)."
  },
  {
    "question": "Which has more inertia: a 1 kg ball or a 10 kg ball?",
    "options": [
      "1 kg ball",
      "10 kg ball",
      "Both have equal inertia",
      "Neither has inertia"
    ],
    "correct": 1,
    "explanation": "Inertia is directly proportional to mass. The 10 kg ball has more mass and therefore more inertia, making it harder to change its state of motion."
  },
  {
    "question": "Two objects of masses 5 kg and 10 kg are moving with the same velocity. Which has greater momentum?",
    "options": [
      "5 kg object",
      "10 kg object",
      "Both have equal momentum",
      "Cannot be determined"
    ],
    "correct": 1,
    "explanation": "Momentum = mass x velocity. Since both have the same velocity, the 10 kg object has double the momentum of the 5 kg object."
  },
  {
    "question": "When a bullet is fired from a gun, the gun recoils. This is an example of:",
    "options": [
      "Newton's first law",
      "Newton's second law",
      "Newton's third law",
      "Law of inertia"
    ],
    "correct": 2,
    "explanation": "The recoil of a gun is a classic example of Newton's third law. The bullet moves forward (action) and the gun pushes backward (equal and opposite reaction)."
  },
  {
    "question": "A passenger in a moving bus falls forward when the bus stops suddenly due to:",
    "options": [
      "Inertia of rest",
      "Inertia of motion",
      "Gravity",
      "Balanced forces"
    ],
    "correct": 1,
    "explanation": "The passenger's body tends to continue moving forward (inertia of motion) even though the bus has stopped, causing the passenger to fall forward."
  },
  {
    "question": "The product of force and time is called:",
    "options": [
      "Momentum",
      "Impulse",
      "Power",
      "Work"
    ],
    "correct": 1,
    "explanation": "Impulse is the product of force and the time for which it acts (Impulse = F x t). It equals the change in momentum of the object."
  },
  {
    "question": "If the mass of an object is doubled and velocity remains the same, its momentum will:",
    "options": [
      "Remain the same",
      "Be halved",
      "Be doubled",
      "Be quadrupled"
    ],
    "correct": 2,
    "explanation": "Since momentum = mass x velocity, doubling the mass while keeping velocity constant will double the momentum."
  },
  {
    "question": "Which of the following is an example of Newton's first law?",
    "options": [
      "A ball rolling on a rough surface slows down",
      "A coin on cardboard falls into a glass when the cardboard is flicked",
      "A rocket launching into space",
      "A heavier object being harder to push"
    ],
    "correct": 1,
    "explanation": "When the cardboard is flicked away, the coin remains in place due to inertia (Newton's first law) and then falls into the glass due to gravity."
  },
  {
    "question": "The net force on an object moving with constant velocity is:",
    "options": [
      "Greater than zero",
      "Less than zero",
      "Equal to zero",
      "Equal to its weight"
    ],
    "correct": 2,
    "explanation": "An object moving with constant velocity has zero acceleration, so by Newton's second law (F = ma), the net force acting on it must be zero."
  }
]

export default questions
