const questions = [
  {
    "question": "Sound is produced by:",
    "options": [
      "Reflection of light",
      "Vibration of objects",
      "Flow of electric current",
      "Chemical reactions"
    ],
    "correct": 1,
    "explanation": "Sound is produced by the vibration of objects. When an object vibrates, it creates disturbances (compressions and rarefactions) in the surrounding medium."
  },
  {
    "question": "Sound requires a medium for propagation. It cannot travel through:",
    "options": [
      "Air",
      "Water",
      "Steel",
      "Vacuum"
    ],
    "correct": 3,
    "explanation": "Sound is a mechanical wave that requires a material medium (solid, liquid, or gas) to propagate. It cannot travel through a vacuum because there are no particles to transmit the vibrations."
  },
  {
    "question": "Sound travels fastest through:",
    "options": [
      "Gases",
      "Liquids",
      "Solids",
      "Vacuum"
    ],
    "correct": 2,
    "explanation": "Sound travels fastest through solids because the particles are closely packed and can transmit vibrations quickly. Speed of sound: solids > liquids > gases."
  },
  {
    "question": "The speed of sound in air at room temperature is approximately:",
    "options": [
      "3 x 10⁸ m/s",
      "340 m/s",
      "1500 m/s",
      "5000 m/s"
    ],
    "correct": 1,
    "explanation": "The speed of sound in air at room temperature (about 20°C) is approximately 340 m/s. It increases with temperature."
  },
  {
    "question": "Sound waves are:",
    "options": [
      "Transverse waves",
      "Longitudinal waves",
      "Electromagnetic waves",
      "Surface waves"
    ],
    "correct": 1,
    "explanation": "Sound waves are longitudinal waves where the particles of the medium vibrate parallel to the direction of wave propagation, creating compressions and rarefactions."
  },
  {
    "question": "The frequency of a sound wave is measured in:",
    "options": [
      "Metres",
      "Seconds",
      "Hertz (Hz)",
      "Decibels"
    ],
    "correct": 2,
    "explanation": "Frequency is measured in Hertz (Hz). One hertz means one vibration (cycle) per second."
  },
  {
    "question": "The range of hearing for a normal human ear is:",
    "options": [
      "1 Hz to 100 Hz",
      "20 Hz to 20,000 Hz",
      "20,000 Hz to 100,000 Hz",
      "0 Hz to 20 Hz"
    ],
    "correct": 1,
    "explanation": "The audible range for humans is approximately 20 Hz to 20,000 Hz (20 kHz). Sounds below 20 Hz are infrasound and above 20,000 Hz are ultrasound."
  },
  {
    "question": "Pitch of a sound is determined by its:",
    "options": [
      "Amplitude",
      "Frequency",
      "Speed",
      "Wavelength only"
    ],
    "correct": 1,
    "explanation": "Pitch is the perception of how high or low a sound is and is determined by its frequency. Higher frequency means higher pitch."
  },
  {
    "question": "Loudness of a sound depends on its:",
    "options": [
      "Frequency",
      "Wavelength",
      "Amplitude",
      "Speed"
    ],
    "correct": 2,
    "explanation": "Loudness is determined by the amplitude of the sound wave. Greater amplitude means louder sound. Loudness is measured in decibels (dB)."
  },
  {
    "question": "The unit of loudness is:",
    "options": [
      "Hertz",
      "Decibel (dB)",
      "Metre",
      "Newton"
    ],
    "correct": 1,
    "explanation": "Loudness is measured in decibels (dB). Normal conversation is about 60 dB, while sounds above 80 dB can be harmful with prolonged exposure."
  },
  {
    "question": "An echo is produced due to:",
    "options": [
      "Refraction of sound",
      "Reflection of sound",
      "Absorption of sound",
      "Diffraction of sound"
    ],
    "correct": 1,
    "explanation": "An echo is the repetition of a sound caused by the reflection of sound waves from a hard surface back to the listener."
  },
  {
    "question": "To hear a distinct echo, the minimum distance between the source and reflecting surface should be approximately:",
    "options": [
      "8.5 metres",
      "17 metres",
      "34 metres",
      "1 metre"
    ],
    "correct": 1,
    "explanation": "For a distinct echo, the minimum distance should be about 17 metres. This ensures the reflected sound reaches the ear at least 0.1 seconds after the original sound (the persistence of hearing)."
  },
  {
    "question": "Ultrasound is sound with frequency:",
    "options": [
      "Below 20 Hz",
      "Between 20 Hz and 20,000 Hz",
      "Above 20,000 Hz",
      "Exactly 20,000 Hz"
    ],
    "correct": 2,
    "explanation": "Ultrasound refers to sound waves with frequencies above 20,000 Hz (20 kHz), which is above the upper limit of human hearing."
  },
  {
    "question": "Which of the following is an application of ultrasound?",
    "options": [
      "Playing music",
      "Medical imaging (ultrasonography)",
      "Telephone communication",
      "Radio broadcasting"
    ],
    "correct": 1,
    "explanation": "Ultrasound is used in medical imaging (ultrasonography/sonography) to produce images of internal organs and to monitor fetal development during pregnancy."
  },
  {
    "question": "SONAR stands for:",
    "options": [
      "Sound Navigation And Ranging",
      "Sonic Navigation And Recording",
      "Sound Natural And Reflected",
      "Sonic Navigation And Ranging"
    ],
    "correct": 0,
    "explanation": "SONAR stands for Sound Navigation And Ranging. It uses ultrasound waves to measure distances, detect objects underwater, and map the ocean floor."
  },
  {
    "question": "The quality or timbre of sound depends on:",
    "options": [
      "Only frequency",
      "Only amplitude",
      "The waveform (combination of frequencies)",
      "Only speed"
    ],
    "correct": 2,
    "explanation": "Timbre (quality) depends on the waveform of the sound, which is determined by the combination of fundamental frequency and overtones. It helps us distinguish between different instruments playing the same note."
  },
  {
    "question": "Infrasound is sound with frequency:",
    "options": [
      "Above 20,000 Hz",
      "Between 20 Hz and 20,000 Hz",
      "Below 20 Hz",
      "Exactly 20 Hz"
    ],
    "correct": 2,
    "explanation": "Infrasound refers to sound waves with frequencies below 20 Hz, which is below the lower limit of human hearing. Some animals like elephants and whales can hear infrasound."
  },
  {
    "question": "The wavelength of a sound wave is:",
    "options": [
      "The distance between two consecutive compressions",
      "The amplitude of the wave",
      "The speed of the wave",
      "The frequency of the wave"
    ],
    "correct": 0,
    "explanation": "Wavelength is the distance between two consecutive compressions (or two consecutive rarefactions) in a longitudinal sound wave. It is represented by the Greek letter lambda."
  },
  {
    "question": "The relationship between speed (v), frequency (f), and wavelength (lambda) is:",
    "options": [
      "v = f / lambda",
      "v = f x lambda",
      "v = lambda / f",
      "f = v x lambda"
    ],
    "correct": 1,
    "explanation": "The wave equation states that speed = frequency x wavelength (v = f x lambda). This applies to all types of waves."
  },
  {
    "question": "Reverberation is caused by:",
    "options": [
      "Single reflection of sound",
      "Multiple reflections of sound",
      "Refraction of sound",
      "Absorption of sound"
    ],
    "correct": 1,
    "explanation": "Reverberation is the persistence of sound in a space due to multiple reflections from walls, ceiling, and floor. The reflected sounds reach the listener so quickly that the original sound seems to be prolonged."
  },
  {
    "question": "To reduce reverberation in auditoriums, the walls and ceilings are covered with:",
    "options": [
      "Hard tiles",
      "Metal sheets",
      "Sound-absorbing materials like curtains and carpets",
      "Glass panels"
    ],
    "correct": 2,
    "explanation": "Sound-absorbing materials like curtains, carpets, and acoustic panels are used to reduce reverberation by absorbing sound energy rather than reflecting it."
  },
  {
    "question": "A sound wave with higher frequency has:",
    "options": [
      "Longer wavelength",
      "Shorter wavelength",
      "Same wavelength",
      "No wavelength"
    ],
    "correct": 1,
    "explanation": "Since v = f x lambda, and the speed of sound in a medium is constant, a higher frequency results in a shorter wavelength, and vice versa."
  },
  {
    "question": "Which animal uses ultrasound for navigation?",
    "options": [
      "Dog",
      "Bat",
      "Cat",
      "Eagle"
    ],
    "correct": 1,
    "explanation": "Bats use ultrasound for navigation through a process called echolocation. They emit ultrasonic waves and listen for the echoes to detect obstacles and prey in the dark."
  },
  {
    "question": "The time period of a sound wave is:",
    "options": [
      "The time taken for one complete oscillation",
      "The number of oscillations per second",
      "The distance between two compressions",
      "The speed of the wave"
    ],
    "correct": 0,
    "explanation": "Time period (T) is the time taken for one complete oscillation or cycle of the wave. It is the reciprocal of frequency: T = 1/f."
  },
  {
    "question": "If a sound wave has a frequency of 500 Hz and a wavelength of 0.68 m, its speed is:",
    "options": [
      "170 m/s",
      "340 m/s",
      "500 m/s",
      "735 m/s"
    ],
    "correct": 1,
    "explanation": "Using v = f x lambda = 500 Hz x 0.68 m = 340 m/s."
  }
]

export default questions
