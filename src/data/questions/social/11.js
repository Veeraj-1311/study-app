const questions = [
  {
    "question": "The biosphere is:",
    "options": [
      "Only the atmosphere",
      "The zone of life on Earth where the lithosphere, hydrosphere, and atmosphere interact",
      "Only the oceans",
      "Only the land surface"
    ],
    "correct": 1,
    "explanation": "The biosphere is the zone of life on Earth, encompassing all ecosystems where the lithosphere (land), hydrosphere (water), and atmosphere (air) interact."
  },
  {
    "question": "An ecosystem consists of:",
    "options": [
      "Only living organisms",
      "Only non-living components",
      "Both living organisms and their non-living environment interacting together",
      "Only plants"
    ],
    "correct": 2,
    "explanation": "An ecosystem is a community of living organisms (biotic) interacting with their non-living (abiotic) environment, including air, water, soil, and sunlight."
  },
  {
    "question": "Which of the following is a biotic component of an ecosystem?",
    "options": [
      "Water",
      "Sunlight",
      "Plants",
      "Soil"
    ],
    "correct": 2,
    "explanation": "Plants are biotic (living) components of an ecosystem. Water, sunlight, and soil are abiotic (non-living) components."
  },
  {
    "question": "Which of the following is an abiotic component of an ecosystem?",
    "options": [
      "Trees",
      "Animals",
      "Temperature",
      "Bacteria"
    ],
    "correct": 2,
    "explanation": "Temperature is an abiotic (non-living) component. Trees, animals, and bacteria are all biotic (living) components of an ecosystem."
  },
  {
    "question": "Producers in a food chain are:",
    "options": [
      "Animals that eat other animals",
      "Green plants that make their own food through photosynthesis",
      "Decomposers",
      "Consumers"
    ],
    "correct": 1,
    "explanation": "Producers are green plants and algae that make their own food through photosynthesis, forming the base of the food chain."
  },
  {
    "question": "Primary consumers are:",
    "options": [
      "Carnivores",
      "Herbivores that eat plants",
      "Decomposers",
      "Top predators"
    ],
    "correct": 1,
    "explanation": "Primary consumers are herbivores (plant-eating animals) that feed directly on producers (plants), forming the second level of the food chain."
  },
  {
    "question": "A food chain shows:",
    "options": [
      "How animals sleep",
      "The transfer of energy from one organism to another",
      "Only plant growth",
      "Weather patterns"
    ],
    "correct": 1,
    "explanation": "A food chain shows the linear transfer of energy and nutrients from one organism to another, starting from producers to various levels of consumers."
  },
  {
    "question": "A food web is:",
    "options": [
      "A single food chain",
      "An interconnected network of multiple food chains",
      "A spider's web",
      "A type of fishing net"
    ],
    "correct": 1,
    "explanation": "A food web is a complex, interconnected network of multiple food chains in an ecosystem, showing how organisms are linked through feeding relationships."
  },
  {
    "question": "Decomposers are important because they:",
    "options": [
      "Produce food through photosynthesis",
      "Break down dead organisms and recycle nutrients back to the soil",
      "Hunt other animals",
      "Produce oxygen"
    ],
    "correct": 1,
    "explanation": "Decomposers like bacteria and fungi break down dead plants and animals, recycling nutrients back into the soil for producers to use."
  },
  {
    "question": "Biodiversity refers to:",
    "options": [
      "Only the number of animal species",
      "The variety of all living organisms in an ecosystem or on Earth",
      "Only marine life",
      "Only plant species"
    ],
    "correct": 1,
    "explanation": "Biodiversity refers to the variety of all living organisms, including the diversity of species, genes, and ecosystems on Earth."
  },
  {
    "question": "Deforestation leads to:",
    "options": [
      "Increase in biodiversity",
      "Loss of habitat, soil erosion, and climate change",
      "More rainfall",
      "Improved air quality"
    ],
    "correct": 1,
    "explanation": "Deforestation leads to loss of habitat for wildlife, soil erosion, disruption of the water cycle, and contributes to climate change by releasing stored carbon."
  },
  {
    "question": "A terrestrial ecosystem is one that exists on:",
    "options": [
      "Water",
      "Land",
      "In the air only",
      "Underground only"
    ],
    "correct": 1,
    "explanation": "A terrestrial ecosystem is one that exists on land, such as forests, grasslands, deserts, and tundra."
  },
  {
    "question": "An aquatic ecosystem is one that exists in:",
    "options": [
      "Deserts",
      "Mountains",
      "Water bodies like oceans, rivers, and lakes",
      "Forests"
    ],
    "correct": 2,
    "explanation": "An aquatic ecosystem exists in water bodies, including freshwater ecosystems (rivers, lakes, ponds) and marine ecosystems (oceans, seas, coral reefs)."
  },
  {
    "question": "The tropical rainforest biome is characterised by:",
    "options": [
      "Cold temperatures and little rainfall",
      "High temperatures, heavy rainfall, and high biodiversity",
      "Dry conditions and sparse vegetation",
      "Extreme cold and ice"
    ],
    "correct": 1,
    "explanation": "Tropical rainforests have high temperatures and heavy rainfall year-round, supporting the highest biodiversity of any land biome."
  },
  {
    "question": "Endangered species are:",
    "options": [
      "Species that are very common",
      "Species that are at risk of extinction",
      "Species that are already extinct",
      "Species that are not affected by humans"
    ],
    "correct": 1,
    "explanation": "Endangered species are those facing a very high risk of extinction in the wild due to factors like habitat loss, poaching, and climate change."
  },
  {
    "question": "A national park is established to:",
    "options": [
      "Build houses",
      "Protect and conserve wildlife and natural habitats",
      "Develop industries",
      "Create farmland"
    ],
    "correct": 1,
    "explanation": "National parks are established to protect and conserve wildlife, natural habitats, and biodiversity from human interference and exploitation."
  },
  {
    "question": "The energy in most ecosystems ultimately comes from:",
    "options": [
      "Soil",
      "Water",
      "The Sun",
      "Wind"
    ],
    "correct": 2,
    "explanation": "The Sun is the ultimate source of energy for most ecosystems. Plants capture solar energy through photosynthesis, which then flows through the food chain."
  },
  {
    "question": "Which of the following is a greenhouse gas?",
    "options": [
      "Nitrogen",
      "Oxygen",
      "Carbon dioxide",
      "Argon"
    ],
    "correct": 2,
    "explanation": "Carbon dioxide (CO2) is a major greenhouse gas that traps heat in the atmosphere. Other greenhouse gases include methane and nitrous oxide."
  },
  {
    "question": "Overgrazing by livestock can lead to:",
    "options": [
      "Improved soil quality",
      "Soil degradation and desertification",
      "Increased forest cover",
      "Higher biodiversity"
    ],
    "correct": 1,
    "explanation": "Overgrazing removes vegetation cover, leading to soil degradation, erosion, and eventually desertification in severe cases."
  },
  {
    "question": "The ozone layer protects life on Earth by:",
    "options": [
      "Trapping heat",
      "Absorbing harmful ultraviolet radiation from the Sun",
      "Producing oxygen",
      "Creating wind patterns"
    ],
    "correct": 1,
    "explanation": "The ozone layer in the stratosphere absorbs most of the Sun's harmful ultraviolet (UV) radiation, protecting living organisms from its damaging effects."
  },
  {
    "question": "Which of the following practices helps in conserving biodiversity?",
    "options": [
      "Deforestation",
      "Poaching",
      "Creating wildlife sanctuaries and protected areas",
      "Pollution"
    ],
    "correct": 2,
    "explanation": "Creating wildlife sanctuaries and protected areas helps conserve biodiversity by providing safe habitats for endangered species and natural ecosystems."
  },
  {
    "question": "An omnivore is an organism that eats:",
    "options": [
      "Only plants",
      "Only animals",
      "Both plants and animals",
      "Only dead matter"
    ],
    "correct": 2,
    "explanation": "An omnivore is an organism that eats both plants and animals. Humans, bears, and crows are examples of omnivores."
  },
  {
    "question": "The water cycle involves:",
    "options": [
      "Only evaporation",
      "Evaporation, condensation, precipitation, and collection",
      "Only rainfall",
      "Only groundwater flow"
    ],
    "correct": 1,
    "explanation": "The water cycle involves evaporation (water to vapour), condensation (vapour to droplets), precipitation (rain/snow), and collection (in water bodies and ground)."
  },
  {
    "question": "Acid rain is caused by:",
    "options": [
      "Excessive sunshine",
      "Emissions of sulphur dioxide and nitrogen oxides from burning fossil fuels",
      "Too much oxygen in the atmosphere",
      "Natural forest fires only"
    ],
    "correct": 1,
    "explanation": "Acid rain is caused by emissions of sulphur dioxide (SO2) and nitrogen oxides (NOx) from burning fossil fuels, which react with water vapour in the atmosphere."
  },
  {
    "question": "Sustainable development means:",
    "options": [
      "Using all resources as fast as possible",
      "Meeting present needs without compromising the ability of future generations to meet their needs",
      "Stopping all development",
      "Only focusing on economic growth"
    ],
    "correct": 1,
    "explanation": "Sustainable development means meeting the needs of the present generation without compromising the ability of future generations to meet their own needs."
  }
]

export default questions
