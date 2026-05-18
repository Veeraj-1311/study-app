const questions = [
  {
    "question": "Which gas makes up the largest percentage of the Earth's atmosphere?",
    "options": [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen",
      "Argon"
    ],
    "correct": 2,
    "explanation": "Nitrogen makes up approximately 78% of the Earth's atmosphere, making it the most abundant gas."
  },
  {
    "question": "What is the approximate percentage of oxygen in the atmosphere?",
    "options": [
      "78%",
      "21%",
      "0.04%",
      "1%"
    ],
    "correct": 1,
    "explanation": "Oxygen constitutes approximately 21% of the Earth's atmosphere, making it the second most abundant gas after nitrogen."
  },
  {
    "question": "Weather refers to:",
    "options": [
      "The average atmospheric conditions over a long period",
      "The day-to-day condition of the atmosphere at a specific place and time",
      "Only the temperature of a place",
      "The annual rainfall pattern"
    ],
    "correct": 1,
    "explanation": "Weather refers to the short-term, day-to-day condition of the atmosphere at a specific place and time, including temperature, humidity, precipitation, and wind."
  },
  {
    "question": "Climate is defined as:",
    "options": [
      "Yesterday's weather",
      "The average weather conditions of a place over 25-30 years or more",
      "Today's temperature",
      "A single weather event"
    ],
    "correct": 1,
    "explanation": "Climate is the average of weather conditions measured over a long period, typically 25-30 years or more, for a particular region."
  },
  {
    "question": "Which layer of the atmosphere contains the ozone layer?",
    "options": [
      "Troposphere",
      "Stratosphere",
      "Mesosphere",
      "Thermosphere"
    ],
    "correct": 1,
    "explanation": "The ozone layer is found in the stratosphere, approximately 15-35 km above Earth's surface. It absorbs harmful ultraviolet radiation from the Sun."
  },
  {
    "question": "The troposphere is important because:",
    "options": [
      "It contains the ozone layer",
      "All weather phenomena occur in this layer",
      "It is the hottest layer",
      "It is the outermost layer"
    ],
    "correct": 1,
    "explanation": "The troposphere is the lowest layer of the atmosphere where all weather phenomena like rain, clouds, storms, and wind occur."
  },
  {
    "question": "Which of the following is NOT a factor affecting the climate of a place?",
    "options": [
      "Latitude",
      "Altitude",
      "Population density",
      "Distance from the sea"
    ],
    "correct": 2,
    "explanation": "Population density is not a direct factor affecting climate. Latitude, altitude, and distance from the sea are major factors that influence the climate of a place."
  },
  {
    "question": "As altitude increases, temperature generally:",
    "options": [
      "Increases",
      "Decreases",
      "Remains the same",
      "Fluctuates randomly"
    ],
    "correct": 1,
    "explanation": "Temperature generally decreases with increasing altitude at a rate of about 6.5 degrees Celsius per 1000 metres in the troposphere."
  },
  {
    "question": "Places near the equator have:",
    "options": [
      "Very cold climate",
      "Hot and humid climate",
      "Dry desert climate",
      "Polar climate"
    ],
    "correct": 1,
    "explanation": "Places near the equator receive direct sunlight throughout the year, resulting in a hot and humid climate with high temperatures and rainfall."
  },
  {
    "question": "The instrument used to measure atmospheric pressure is called a:",
    "options": [
      "Thermometer",
      "Rain gauge",
      "Barometer",
      "Hygrometer"
    ],
    "correct": 2,
    "explanation": "A barometer is the instrument used to measure atmospheric pressure. Changes in atmospheric pressure help in weather forecasting."
  },
  {
    "question": "Which type of rainfall occurs when air is forced to rise over a mountain?",
    "options": [
      "Convectional rainfall",
      "Orographic rainfall",
      "Cyclonic rainfall",
      "Frontal rainfall"
    ],
    "correct": 1,
    "explanation": "Orographic rainfall (also called relief rainfall) occurs when moist air is forced to rise over a mountain barrier, cools, condenses, and precipitates."
  },
  {
    "question": "The greenhouse effect is caused by:",
    "options": [
      "Oxygen in the atmosphere",
      "Gases like CO2 and methane trapping heat in the atmosphere",
      "The ozone layer",
      "Wind patterns"
    ],
    "correct": 1,
    "explanation": "The greenhouse effect is caused by gases like carbon dioxide and methane trapping heat in the atmosphere, keeping the Earth warm enough to support life."
  },
  {
    "question": "Land breeze blows from:",
    "options": [
      "Sea to land during the day",
      "Land to sea during the night",
      "North to south always",
      "East to west always"
    ],
    "correct": 1,
    "explanation": "Land breeze blows from land to sea during the night because land cools faster than water, creating higher pressure over land."
  },
  {
    "question": "Sea breeze blows from:",
    "options": [
      "Land to sea during the day",
      "Sea to land during the day",
      "Land to sea during the night",
      "North to south"
    ],
    "correct": 1,
    "explanation": "Sea breeze blows from sea to land during the day because land heats up faster than water, creating lower pressure over land."
  },
  {
    "question": "Which climate zone lies between the Tropic of Cancer and the Tropic of Capricorn?",
    "options": [
      "Temperate zone",
      "Frigid zone",
      "Torrid zone",
      "Polar zone"
    ],
    "correct": 2,
    "explanation": "The Torrid zone (tropical zone) lies between the Tropic of Cancer (23.5 degrees N) and the Tropic of Capricorn (23.5 degrees S), receiving the most direct sunlight."
  },
  {
    "question": "A hygrometer is used to measure:",
    "options": [
      "Temperature",
      "Wind speed",
      "Humidity",
      "Atmospheric pressure"
    ],
    "correct": 2,
    "explanation": "A hygrometer is an instrument used to measure the humidity or moisture content in the air."
  },
  {
    "question": "Wind speed is measured using a:",
    "options": [
      "Barometer",
      "Thermometer",
      "Wind vane",
      "Anemometer"
    ],
    "correct": 3,
    "explanation": "An anemometer is used to measure wind speed. A wind vane measures wind direction, not speed."
  },
  {
    "question": "Precipitation includes:",
    "options": [
      "Only rainfall",
      "Only snowfall",
      "Rain, snow, sleet, and hail",
      "Only hail"
    ],
    "correct": 2,
    "explanation": "Precipitation includes all forms of water that fall from the atmosphere to the Earth's surface, including rain, snow, sleet, and hail."
  },
  {
    "question": "Which of the following increases the moderating effect on climate?",
    "options": [
      "Being far from the sea",
      "Being close to the sea",
      "High altitude only",
      "Low latitude only"
    ],
    "correct": 1,
    "explanation": "Being close to the sea has a moderating effect on climate because water heats and cools more slowly than land, keeping coastal temperatures more stable."
  },
  {
    "question": "Global warming is primarily caused by:",
    "options": [
      "Decrease in oxygen levels",
      "Increase in greenhouse gas emissions",
      "Decrease in nitrogen levels",
      "Increase in ozone"
    ],
    "correct": 1,
    "explanation": "Global warming is primarily caused by the increase in greenhouse gas emissions (mainly CO2 from burning fossil fuels), which trap more heat in the atmosphere."
  },
  {
    "question": "The temperate zone lies between:",
    "options": [
      "The Equator and Tropic of Cancer",
      "The Tropic of Cancer/Capricorn and the Arctic/Antarctic Circle",
      "The Arctic Circle and the North Pole",
      "0 degrees and 23.5 degrees latitude"
    ],
    "correct": 1,
    "explanation": "The temperate zones lie between the Tropics (23.5 degrees) and the Arctic/Antarctic Circles (66.5 degrees) in both hemispheres, experiencing moderate climates."
  },
  {
    "question": "Condensation is the process by which:",
    "options": [
      "Water turns into ice",
      "Water vapour turns into liquid water",
      "Ice turns into water vapour",
      "Liquid water turns into vapour"
    ],
    "correct": 1,
    "explanation": "Condensation is the process by which water vapour in the air cools and changes into tiny droplets of liquid water, forming clouds and dew."
  },
  {
    "question": "Clouds are formed when:",
    "options": [
      "Temperature increases rapidly",
      "Water vapour condenses around tiny particles in the air",
      "Wind speed increases",
      "Atmospheric pressure increases"
    ],
    "correct": 1,
    "explanation": "Clouds form when warm, moist air rises, cools, and the water vapour condenses around tiny dust or pollen particles in the atmosphere."
  },
  {
    "question": "The frigid zone is characterised by:",
    "options": [
      "Very hot temperatures year-round",
      "Extremely cold temperatures with ice and snow",
      "Moderate rainfall",
      "Tropical forests"
    ],
    "correct": 1,
    "explanation": "The frigid zones (polar regions) experience extremely cold temperatures, ice, and snow because they receive very slanted rays of the Sun throughout the year."
  },
  {
    "question": "Insolation refers to:",
    "options": [
      "Insulation of buildings",
      "Incoming solar radiation received by the Earth",
      "Internal heat of the Earth",
      "Infrared radiation from the ground"
    ],
    "correct": 1,
    "explanation": "Insolation refers to the incoming solar radiation received by the Earth's surface. It is the primary source of energy that drives weather and climate."
  }
]

export default questions
