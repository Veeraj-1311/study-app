const questions = [
  {
    "question": "What percentage of the Earth's surface is covered by oceans?",
    "options": [
      "About 50%",
      "About 61%",
      "About 71%",
      "About 90%"
    ],
    "correct": 2,
    "explanation": "Approximately 71% of the Earth's surface is covered by oceans and seas, making water the dominant feature of our planet."
  },
  {
    "question": "Which is the largest ocean in the world?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean"
    ],
    "correct": 2,
    "explanation": "The Pacific Ocean is the largest ocean, covering about one-third of the Earth's surface and larger than all the land areas combined."
  },
  {
    "question": "Which is the smallest and shallowest ocean?",
    "options": [
      "Indian Ocean",
      "Atlantic Ocean",
      "Pacific Ocean",
      "Arctic Ocean"
    ],
    "correct": 3,
    "explanation": "The Arctic Ocean is the smallest and shallowest of the five oceans, located around the North Pole and largely covered by sea ice."
  },
  {
    "question": "Ocean currents are caused by:",
    "options": [
      "Only wind",
      "Wind, differences in water temperature and salinity, and Earth's rotation",
      "Only the moon's gravity",
      "Only underwater volcanoes"
    ],
    "correct": 1,
    "explanation": "Ocean currents are caused by a combination of factors including wind, differences in water temperature and salinity, and the Coriolis effect due to Earth's rotation."
  },
  {
    "question": "Tides are primarily caused by:",
    "options": [
      "Wind",
      "Earthquakes",
      "The gravitational pull of the Moon and Sun",
      "Ocean currents"
    ],
    "correct": 2,
    "explanation": "Tides are primarily caused by the gravitational pull of the Moon and, to a lesser extent, the Sun on Earth's water bodies."
  },
  {
    "question": "A spring tide occurs when:",
    "options": [
      "Only the Moon affects tides",
      "The Sun, Moon, and Earth are in a straight line",
      "The Moon is farthest from Earth",
      "Only during spring season"
    ],
    "correct": 1,
    "explanation": "Spring tides occur when the Sun, Moon, and Earth are aligned (during full moon and new moon), creating the highest high tides and lowest low tides."
  },
  {
    "question": "A neap tide occurs when:",
    "options": [
      "The Sun and Moon are at right angles to each other relative to Earth",
      "The Sun and Moon are aligned",
      "During volcanic eruptions",
      "Only at the equator"
    ],
    "correct": 0,
    "explanation": "Neap tides occur when the Sun and Moon are at right angles to each other relative to Earth (during quarter moons), producing the smallest tidal range."
  },
  {
    "question": "Waves are caused primarily by:",
    "options": [
      "Earthquakes",
      "Wind blowing over the ocean surface",
      "Fish movement",
      "Underwater volcanoes"
    ],
    "correct": 1,
    "explanation": "Ocean waves are primarily caused by wind blowing over the surface of the water, transferring energy to the water."
  },
  {
    "question": "A tsunami is a large ocean wave caused by:",
    "options": [
      "Strong winds",
      "Underwater earthquakes, volcanic eruptions, or landslides",
      "Normal tides",
      "Monsoons"
    ],
    "correct": 1,
    "explanation": "A tsunami is a series of large, powerful ocean waves caused by underwater disturbances such as earthquakes, volcanic eruptions, or submarine landslides."
  },
  {
    "question": "The Gulf Stream is an example of:",
    "options": [
      "A cold ocean current",
      "A warm ocean current",
      "A river",
      "A type of tide"
    ],
    "correct": 1,
    "explanation": "The Gulf Stream is a warm ocean current that flows from the Gulf of Mexico along the east coast of North America and across the Atlantic, moderating European climate."
  },
  {
    "question": "Warm ocean currents generally flow:",
    "options": [
      "From poles towards the equator",
      "From the equator towards the poles",
      "Only in the Pacific Ocean",
      "Only east to west"
    ],
    "correct": 1,
    "explanation": "Warm ocean currents generally flow from equatorial regions towards the poles, carrying warm water and moderating the climate of coastal areas."
  },
  {
    "question": "Cold ocean currents generally flow:",
    "options": [
      "From the equator towards the poles",
      "From polar regions towards the equator",
      "Only in a circular pattern",
      "Only in the Atlantic"
    ],
    "correct": 1,
    "explanation": "Cold ocean currents generally flow from polar regions towards the equator, bringing cold water that can affect local climates."
  },
  {
    "question": "The Mariana Trench is:",
    "options": [
      "The highest mountain on Earth",
      "The deepest point in the ocean",
      "A type of coral reef",
      "An island chain"
    ],
    "correct": 1,
    "explanation": "The Mariana Trench in the Pacific Ocean is the deepest point in the ocean, reaching approximately 11,034 metres (36,201 feet) at its deepest point."
  },
  {
    "question": "Coral reefs are formed by:",
    "options": [
      "Volcanic eruptions only",
      "Tiny marine organisms called coral polyps",
      "River deposits",
      "Wind erosion"
    ],
    "correct": 1,
    "explanation": "Coral reefs are formed by colonies of tiny marine organisms called coral polyps that secrete calcium carbonate to form hard, rock-like structures over time."
  },
  {
    "question": "Which of the following is a marine resource?",
    "options": [
      "Coal from mines",
      "Fish and petroleum from the ocean floor",
      "Iron ore from mountains",
      "Timber from forests"
    ],
    "correct": 1,
    "explanation": "Marine resources include fish, seaweed, petroleum, natural gas, minerals, and salt obtained from oceans and seas."
  },
  {
    "question": "Salinity of ocean water refers to:",
    "options": [
      "Its temperature",
      "The amount of dissolved salts in the water",
      "Its depth",
      "Its colour"
    ],
    "correct": 1,
    "explanation": "Salinity refers to the amount of dissolved salts (mainly sodium chloride) in ocean water, typically expressed in parts per thousand (ppt)."
  },
  {
    "question": "The average salinity of ocean water is approximately:",
    "options": [
      "15 ppt",
      "25 ppt",
      "35 ppt",
      "55 ppt"
    ],
    "correct": 2,
    "explanation": "The average salinity of ocean water is approximately 35 parts per thousand (ppt), meaning about 35 grams of salt per litre of water."
  },
  {
    "question": "The continental shelf is:",
    "options": [
      "The deepest part of the ocean",
      "The gently sloping shallow area extending from the coastline",
      "An island in the ocean",
      "A type of coral reef"
    ],
    "correct": 1,
    "explanation": "The continental shelf is the gently sloping, shallow underwater extension of a continent, typically extending to a depth of about 200 metres."
  },
  {
    "question": "Oceans are important because they:",
    "options": [
      "Only provide fish",
      "Regulate climate, provide food, facilitate trade, and are a source of minerals",
      "Only serve as boundaries between continents",
      "Have no significant importance"
    ],
    "correct": 1,
    "explanation": "Oceans are vital for climate regulation, food supply (fish and seafood), maritime trade, mineral resources, and maintaining the water cycle."
  },
  {
    "question": "Plankton are important in the ocean because they:",
    "options": [
      "Create waves",
      "Form the base of the marine food chain and produce oxygen",
      "Cause tsunamis",
      "Have no ecological importance"
    ],
    "correct": 1,
    "explanation": "Plankton form the base of the marine food chain and phytoplankton produce approximately 50% of the world's oxygen through photosynthesis."
  },
  {
    "question": "The Indian Ocean is bordered by:",
    "options": [
      "Only Asia",
      "Asia, Africa, Australia, and Antarctica",
      "Only Europe and Africa",
      "Only North and South America"
    ],
    "correct": 1,
    "explanation": "The Indian Ocean is bordered by Asia to the north, Africa to the west, Australia to the east, and Antarctica to the south."
  },
  {
    "question": "Ocean pollution is mainly caused by:",
    "options": [
      "Natural sea currents",
      "Oil spills, plastic waste, industrial discharge, and sewage",
      "Marine animals",
      "Tidal movements"
    ],
    "correct": 1,
    "explanation": "Ocean pollution is mainly caused by human activities including oil spills, plastic waste dumping, industrial discharge, agricultural runoff, and untreated sewage."
  },
  {
    "question": "The Exclusive Economic Zone (EEZ) extends up to:",
    "options": [
      "12 nautical miles from the coast",
      "200 nautical miles from the coast",
      "500 nautical miles from the coast",
      "50 nautical miles from the coast"
    ],
    "correct": 1,
    "explanation": "The Exclusive Economic Zone extends up to 200 nautical miles from a country's coast, within which the country has special rights to explore and exploit marine resources."
  },
  {
    "question": "Which ocean current keeps the western coast of Europe warm?",
    "options": [
      "Labrador Current",
      "North Atlantic Drift",
      "Benguela Current",
      "Peru Current"
    ],
    "correct": 1,
    "explanation": "The North Atlantic Drift (an extension of the Gulf Stream) carries warm water to the western coast of Europe, keeping it warmer than other regions at similar latitudes."
  },
  {
    "question": "The process by which ocean water becomes water vapour is called:",
    "options": [
      "Condensation",
      "Evaporation",
      "Precipitation",
      "Transpiration"
    ],
    "correct": 1,
    "explanation": "Evaporation is the process by which ocean water is heated by the Sun and turns into water vapour, which rises into the atmosphere as part of the water cycle."
  }
]

export default questions
