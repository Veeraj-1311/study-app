const questions = [
  {
    "question": "What is the first step in the scientific method?",
    "options": [
      "Forming a hypothesis",
      "Making an observation",
      "Conducting an experiment",
      "Drawing a conclusion"
    ],
    "correct": 1,
    "explanation": "The scientific method begins with making an observation about the natural world, which then leads to asking questions and forming hypotheses."
  },
  {
    "question": "A hypothesis is best described as:",
    "options": [
      "A proven fact",
      "A testable prediction or explanation",
      "The final result of an experiment",
      "A question about nature"
    ],
    "correct": 1,
    "explanation": "A hypothesis is a testable prediction or proposed explanation for an observation. It must be something that can be tested through experimentation."
  },
  {
    "question": "Which branch of science deals with the study of living organisms?",
    "options": [
      "Physics",
      "Chemistry",
      "Biology",
      "Geology"
    ],
    "correct": 2,
    "explanation": "Biology is the branch of science that studies living organisms, their structure, function, growth, and evolution."
  },
  {
    "question": "The variable that is deliberately changed in an experiment is called the:",
    "options": [
      "Dependent variable",
      "Independent variable",
      "Controlled variable",
      "Constant variable"
    ],
    "correct": 1,
    "explanation": "The independent variable is the one that the experimenter deliberately changes to observe its effect on the dependent variable."
  },
  {
    "question": "Which of the following is NOT a branch of Earth science?",
    "options": [
      "Meteorology",
      "Oceanography",
      "Botany",
      "Geology"
    ],
    "correct": 2,
    "explanation": "Botany is a branch of biology that deals with the study of plants. Meteorology, oceanography, and geology are all branches of Earth science."
  },
  {
    "question": "A controlled experiment tests only:",
    "options": [
      "Multiple variables at once",
      "One variable at a time",
      "No variables",
      "Random variables"
    ],
    "correct": 1,
    "explanation": "A controlled experiment changes only one variable at a time (the independent variable) while keeping all other variables constant, so that any observed effect can be attributed to that single change."
  },
  {
    "question": "What is the purpose of repeating an experiment multiple times?",
    "options": [
      "To waste time",
      "To ensure reliability of results",
      "To change the hypothesis",
      "To use more materials"
    ],
    "correct": 1,
    "explanation": "Repeating an experiment multiple times ensures that the results are reliable and reproducible, reducing the chance of errors or anomalies affecting conclusions."
  },
  {
    "question": "Which instrument is used to measure the volume of a liquid accurately?",
    "options": [
      "Beam balance",
      "Graduated cylinder",
      "Thermometer",
      "Spring balance"
    ],
    "correct": 1,
    "explanation": "A graduated cylinder is a common laboratory instrument used to accurately measure the volume of a liquid."
  },
  {
    "question": "Physics is the study of:",
    "options": [
      "Living organisms",
      "Chemical reactions",
      "Matter, energy, and their interactions",
      "Earth's structure"
    ],
    "correct": 2,
    "explanation": "Physics is the branch of science that deals with matter, energy, force, motion, and their interactions in the natural world."
  },
  {
    "question": "Which of the following is a qualitative observation?",
    "options": [
      "The temperature is 25°C",
      "The liquid is blue",
      "The mass is 50 grams",
      "The length is 10 cm"
    ],
    "correct": 1,
    "explanation": "A qualitative observation describes qualities or characteristics (such as color, texture, or smell) without using numbers. 'The liquid is blue' describes a quality."
  },
  {
    "question": "What does a dependent variable represent in an experiment?",
    "options": [
      "What you keep the same",
      "What you change",
      "What you measure or observe",
      "What you ignore"
    ],
    "correct": 2,
    "explanation": "The dependent variable is the factor that is measured or observed in an experiment. It depends on or responds to changes in the independent variable."
  },
  {
    "question": "Which of these is an example of technology, not science?",
    "options": [
      "Studying cell division",
      "Observing star patterns",
      "Developing a new medicine",
      "Classifying organisms"
    ],
    "correct": 2,
    "explanation": "Technology is the application of scientific knowledge for practical purposes. Developing a new medicine applies scientific knowledge, while the other options are scientific investigations."
  },
  {
    "question": "A scientific theory is:",
    "options": [
      "A random guess",
      "A well-tested explanation supported by evidence",
      "The same as a hypothesis",
      "An opinion of a scientist"
    ],
    "correct": 1,
    "explanation": "A scientific theory is a well-substantiated explanation of natural phenomena, supported by a large body of evidence gathered through repeated experimentation and observation."
  },
  {
    "question": "The SI unit of length is:",
    "options": [
      "Centimetre",
      "Metre",
      "Kilometre",
      "Foot"
    ],
    "correct": 1,
    "explanation": "The metre (m) is the SI (International System of Units) base unit of length."
  },
  {
    "question": "What is the SI unit of mass?",
    "options": [
      "Gram",
      "Kilogram",
      "Pound",
      "Ounce"
    ],
    "correct": 1,
    "explanation": "The kilogram (kg) is the SI base unit of mass."
  },
  {
    "question": "Which of the following best describes chemistry?",
    "options": [
      "Study of forces and motion",
      "Study of the composition, structure, and properties of matter",
      "Study of living things",
      "Study of weather patterns"
    ],
    "correct": 1,
    "explanation": "Chemistry is the branch of science that studies the composition, structure, properties, and changes of matter."
  },
  {
    "question": "A scientific law describes:",
    "options": [
      "Why something happens",
      "A consistent pattern observed in nature",
      "An untested idea",
      "A single experiment's result"
    ],
    "correct": 1,
    "explanation": "A scientific law describes a consistent, observed pattern in nature. Unlike theories, laws describe what happens but do not explain why it happens."
  },
  {
    "question": "What is the function of a control group in an experiment?",
    "options": [
      "To add more variables",
      "To serve as a standard for comparison",
      "To make the experiment longer",
      "To prove the hypothesis wrong"
    ],
    "correct": 1,
    "explanation": "A control group serves as a baseline or standard for comparison. It is not exposed to the independent variable, so the experimenter can compare results between the control and experimental groups."
  },
  {
    "question": "Which tool is used to measure temperature?",
    "options": [
      "Barometer",
      "Thermometer",
      "Anemometer",
      "Hygrometer"
    ],
    "correct": 1,
    "explanation": "A thermometer is the instrument used to measure temperature. A barometer measures atmospheric pressure, an anemometer measures wind speed, and a hygrometer measures humidity."
  },
  {
    "question": "Botany is the study of:",
    "options": [
      "Animals",
      "Rocks",
      "Plants",
      "Stars"
    ],
    "correct": 2,
    "explanation": "Botany is the branch of biology that deals with the scientific study of plants, including their structure, growth, reproduction, and classification."
  },
  {
    "question": "Data collected during an experiment should be:",
    "options": [
      "Changed to match the hypothesis",
      "Recorded accurately and honestly",
      "Memorised and not written down",
      "Shared only if it supports the hypothesis"
    ],
    "correct": 1,
    "explanation": "Scientific data must always be recorded accurately and honestly, regardless of whether it supports the hypothesis. Altering data is unethical and unscientific."
  },
  {
    "question": "Which of the following is a quantitative observation?",
    "options": [
      "The flower smells sweet",
      "The rock is rough",
      "The solution has a mass of 120 grams",
      "The sky looks cloudy"
    ],
    "correct": 2,
    "explanation": "A quantitative observation involves a measurement with a number and unit. 'The solution has a mass of 120 grams' includes a numerical measurement."
  },
  {
    "question": "Zoology is the study of:",
    "options": [
      "Plants",
      "Animals",
      "Minerals",
      "Weather"
    ],
    "correct": 1,
    "explanation": "Zoology is the branch of biology that deals with the study of animals, including their behaviour, structure, physiology, and classification."
  },
  {
    "question": "After analysing data, a scientist should:",
    "options": [
      "Immediately publish results",
      "Draw conclusions based on evidence",
      "Change the hypothesis to match data",
      "Discard data that does not fit"
    ],
    "correct": 1,
    "explanation": "After analysing data, a scientist draws conclusions based on the evidence collected. These conclusions may support or refute the original hypothesis."
  },
  {
    "question": "Which of the following represents a correct order in the scientific method?",
    "options": [
      "Conclusion → Experiment → Hypothesis → Observation",
      "Observation → Hypothesis → Experiment → Conclusion",
      "Experiment → Observation → Conclusion → Hypothesis",
      "Hypothesis → Conclusion → Observation → Experiment"
    ],
    "correct": 1,
    "explanation": "The correct general order is: Observation → Hypothesis → Experiment → Conclusion. Scientists first observe, then hypothesize, test through experiments, and finally draw conclusions."
  }
]

export default questions
