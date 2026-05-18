const questions = [
  {
    "question": "Work is done when a force:",
    "options": [
      "Is applied but no displacement occurs",
      "Causes a displacement in its direction",
      "Is perpendicular to displacement",
      "Is balanced by another force"
    ],
    "correct": 1,
    "explanation": "Work is done when a force causes a displacement of the object in the direction of the applied force. W = F x d x cos(theta)."
  },
  {
    "question": "The SI unit of work is:",
    "options": [
      "Newton",
      "Watt",
      "Joule",
      "Pascal"
    ],
    "correct": 2,
    "explanation": "The SI unit of work is the Joule (J). One joule is the work done when a force of 1 Newton moves an object through 1 metre in the direction of the force."
  },
  {
    "question": "When a force is applied perpendicular to the direction of displacement, the work done is:",
    "options": [
      "Maximum",
      "Minimum but not zero",
      "Zero",
      "Negative"
    ],
    "correct": 2,
    "explanation": "When force is perpendicular to displacement, W = F x d x cos(90°) = 0. No work is done. For example, a coolie carrying a load on his head while walking horizontally."
  },
  {
    "question": "Energy is defined as the:",
    "options": [
      "Rate of doing work",
      "Capacity to do work",
      "Force times distance",
      "Mass times acceleration"
    ],
    "correct": 1,
    "explanation": "Energy is the capacity or ability to do work. An object that has energy can exert a force on another object and cause it to move."
  },
  {
    "question": "The SI unit of energy is:",
    "options": [
      "Newton",
      "Joule",
      "Watt",
      "Kilogram"
    ],
    "correct": 1,
    "explanation": "The SI unit of energy is the Joule (J), the same as the unit of work, since energy is the capacity to do work."
  },
  {
    "question": "Kinetic energy is the energy possessed by an object due to its:",
    "options": [
      "Position",
      "Shape",
      "Motion",
      "Temperature"
    ],
    "correct": 2,
    "explanation": "Kinetic energy is the energy an object possesses due to its motion. It is given by KE = ½mv², where m is mass and v is velocity."
  },
  {
    "question": "The kinetic energy of an object of mass 2 kg moving at 3 m/s is:",
    "options": [
      "3 J",
      "6 J",
      "9 J",
      "18 J"
    ],
    "correct": 2,
    "explanation": "KE = ½mv² = ½ x 2 x 3² = ½ x 2 x 9 = 9 J."
  },
  {
    "question": "Potential energy is the energy stored in an object due to its:",
    "options": [
      "Motion",
      "Position or configuration",
      "Speed",
      "Acceleration"
    ],
    "correct": 1,
    "explanation": "Potential energy is stored energy due to an object's position (gravitational PE) or configuration (elastic PE). It has the potential to be converted into kinetic energy."
  },
  {
    "question": "The gravitational potential energy of an object is given by:",
    "options": [
      "½mv²",
      "mgh",
      "Fd",
      "mv"
    ],
    "correct": 1,
    "explanation": "Gravitational potential energy = mgh, where m is mass, g is acceleration due to gravity, and h is the height above the reference level."
  },
  {
    "question": "The law of conservation of energy states that energy:",
    "options": [
      "Can be created but not destroyed",
      "Can be destroyed but not created",
      "Can neither be created nor destroyed, only transformed",
      "Is always lost as heat"
    ],
    "correct": 2,
    "explanation": "The law of conservation of energy states that energy can neither be created nor destroyed. It can only be transformed from one form to another. The total energy of an isolated system remains constant."
  },
  {
    "question": "A ball thrown upward has maximum potential energy at:",
    "options": [
      "The point of throwing",
      "The highest point",
      "While coming down",
      "When it hits the ground"
    ],
    "correct": 1,
    "explanation": "At the highest point, the ball momentarily stops (KE = 0) and all its energy is converted to gravitational potential energy (PE = mgh is maximum)."
  },
  {
    "question": "Power is defined as the:",
    "options": [
      "Total work done",
      "Rate of doing work",
      "Force times displacement",
      "Energy stored in a body"
    ],
    "correct": 1,
    "explanation": "Power is the rate of doing work or the rate of energy transfer. P = W/t, where W is work and t is time."
  },
  {
    "question": "The SI unit of power is:",
    "options": [
      "Joule",
      "Newton",
      "Watt",
      "Pascal"
    ],
    "correct": 2,
    "explanation": "The SI unit of power is the Watt (W). One watt is equal to one joule of work done per second (1 W = 1 J/s)."
  },
  {
    "question": "1 kilowatt is equal to:",
    "options": [
      "100 watts",
      "1000 watts",
      "10000 watts",
      "10 watts"
    ],
    "correct": 1,
    "explanation": "1 kilowatt (kW) = 1000 watts (W). It is a commonly used unit for measuring power of electrical appliances and engines."
  },
  {
    "question": "The commercial unit of energy is:",
    "options": [
      "Joule",
      "Watt",
      "Kilowatt-hour (kWh)",
      "Calorie"
    ],
    "correct": 2,
    "explanation": "The kilowatt-hour (kWh) is the commercial unit of energy, commonly used in electricity bills. 1 kWh = 3.6 x 10⁶ J."
  },
  {
    "question": "If a person does 500 J of work in 10 seconds, the power is:",
    "options": [
      "5000 W",
      "50 W",
      "5 W",
      "0.02 W"
    ],
    "correct": 1,
    "explanation": "Power = Work / Time = 500 J / 10 s = 50 W."
  },
  {
    "question": "A lever is an example of a:",
    "options": [
      "Complex machine",
      "Simple machine",
      "Compound machine",
      "Electrical machine"
    ],
    "correct": 1,
    "explanation": "A lever is one of the six classical simple machines. It consists of a rigid bar that rotates around a fixed point (fulcrum) and is used to multiply force or change its direction."
  },
  {
    "question": "The fixed point around which a lever rotates is called the:",
    "options": [
      "Load",
      "Effort",
      "Fulcrum",
      "Pivot arm"
    ],
    "correct": 2,
    "explanation": "The fulcrum is the fixed point around which a lever pivots. The position of the fulcrum relative to the load and effort determines the type of lever."
  },
  {
    "question": "An inclined plane reduces the effort needed to lift an object by:",
    "options": [
      "Eliminating friction",
      "Increasing the distance over which force is applied",
      "Reducing the weight of the object",
      "Increasing gravity"
    ],
    "correct": 1,
    "explanation": "An inclined plane reduces effort by increasing the distance over which force is applied. While less force is needed, the total work done remains the same."
  },
  {
    "question": "When the velocity of an object is doubled, its kinetic energy becomes:",
    "options": [
      "Double",
      "Triple",
      "Four times",
      "Half"
    ],
    "correct": 2,
    "explanation": "KE = ½mv². If velocity is doubled: KE = ½m(2v)² = ½m(4v²) = 4 x ½mv². The kinetic energy becomes four times the original."
  },
  {
    "question": "A freely falling object has:",
    "options": [
      "Only kinetic energy",
      "Only potential energy",
      "Both kinetic and potential energy that interchange",
      "No energy"
    ],
    "correct": 2,
    "explanation": "A freely falling object converts potential energy to kinetic energy as it falls. At any point during the fall, it possesses both KE and PE, and their sum remains constant."
  },
  {
    "question": "Which of the following is NOT a simple machine?",
    "options": [
      "Pulley",
      "Wedge",
      "Motor",
      "Screw"
    ],
    "correct": 2,
    "explanation": "A motor is not a simple machine. The six classical simple machines are the lever, wheel and axle, pulley, inclined plane, wedge, and screw."
  },
  {
    "question": "A pulley is used to:",
    "options": [
      "Store energy",
      "Change the direction of force",
      "Increase the weight of an object",
      "Measure force"
    ],
    "correct": 1,
    "explanation": "A simple pulley changes the direction of the applied force, making it easier to lift objects. A system of pulleys can also multiply force."
  },
  {
    "question": "The work done against gravity in lifting a 5 kg object to a height of 2 m is (g = 10 m/s²):",
    "options": [
      "10 J",
      "25 J",
      "100 J",
      "50 J"
    ],
    "correct": 2,
    "explanation": "Work done against gravity = mgh = 5 kg x 10 m/s² x 2 m = 100 J."
  },
  {
    "question": "Mechanical advantage of a simple machine is the ratio of:",
    "options": [
      "Effort to load",
      "Load to effort",
      "Work input to work output",
      "Distance to force"
    ],
    "correct": 1,
    "explanation": "Mechanical advantage (MA) = Load / Effort. It tells us how many times a machine multiplies the effort force. A MA greater than 1 means the machine multiplies force."
  }
]

export default questions
