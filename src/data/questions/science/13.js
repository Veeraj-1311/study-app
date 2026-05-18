const questions = [
  {
    "question": "The four main spheres of the Earth system are:",
    "options": [
      "Atmosphere, hydrosphere, lithosphere, and biosphere",
      "Atmosphere, stratosphere, mesosphere, and thermosphere",
      "Crust, mantle, outer core, and inner core",
      "Troposphere, ozone layer, ionosphere, and exosphere"
    ],
    "correct": 0,
    "explanation": "Earth's four main spheres are the atmosphere (air), hydrosphere (water), lithosphere (land/rocks), and biosphere (living organisms). These interact to support life on Earth."
  },
  {
    "question": "The biosphere is the zone of Earth where:",
    "options": [
      "Only water exists",
      "Only air exists",
      "Life exists",
      "Only rocks exist"
    ],
    "correct": 2,
    "explanation": "The biosphere is the global ecological system integrating all living beings and their relationships. It includes parts of the atmosphere, hydrosphere, and lithosphere where life is found."
  },
  {
    "question": "The atmosphere is mainly composed of:",
    "options": [
      "Oxygen and carbon dioxide",
      "Nitrogen and oxygen",
      "Carbon dioxide and water vapour",
      "Hydrogen and helium"
    ],
    "correct": 1,
    "explanation": "The atmosphere is mainly composed of nitrogen (about 78%) and oxygen (about 21%). The remaining 1% includes carbon dioxide, water vapour, argon, and trace gases."
  },
  {
    "question": "The biogeochemical cycle that involves the movement of water through the environment is called:",
    "options": [
      "Carbon cycle",
      "Water cycle (hydrological cycle)",
      "Nitrogen cycle",
      "Oxygen cycle"
    ],
    "correct": 1,
    "explanation": "The water cycle (hydrological cycle) describes the continuous movement of water through evaporation, condensation, precipitation, and collection in oceans, lakes, and groundwater."
  },
  {
    "question": "In the carbon cycle, plants absorb carbon dioxide during:",
    "options": [
      "Respiration",
      "Photosynthesis",
      "Transpiration",
      "Decomposition"
    ],
    "correct": 1,
    "explanation": "During photosynthesis, plants absorb carbon dioxide from the atmosphere and use it along with water and sunlight to produce glucose and oxygen."
  },
  {
    "question": "Nitrogen fixation is the process of converting atmospheric nitrogen into:",
    "options": [
      "Nitrogen gas",
      "Usable nitrogen compounds (like nitrates and ammonia)",
      "Carbon dioxide",
      "Oxygen"
    ],
    "correct": 1,
    "explanation": "Nitrogen fixation converts atmospheric nitrogen (N2) into usable forms like ammonia (NH3) and nitrates (NO3⁻) that plants can absorb. This is done by certain bacteria and lightning."
  },
  {
    "question": "Which bacteria are responsible for biological nitrogen fixation?",
    "options": [
      "E. coli",
      "Rhizobium",
      "Lactobacillus",
      "Streptococcus"
    ],
    "correct": 1,
    "explanation": "Rhizobium bacteria live in the root nodules of leguminous plants and fix atmospheric nitrogen into ammonia, which the plants can use."
  },
  {
    "question": "The ozone layer protects Earth by absorbing:",
    "options": [
      "Infrared radiation",
      "Visible light",
      "Harmful ultraviolet (UV) radiation",
      "Radio waves"
    ],
    "correct": 2,
    "explanation": "The ozone layer in the stratosphere absorbs most of the sun's harmful ultraviolet (UV) radiation, protecting living organisms from DNA damage and skin cancer."
  },
  {
    "question": "The greenhouse effect is caused by gases that:",
    "options": [
      "Reflect sunlight back to space",
      "Trap heat (infrared radiation) in the atmosphere",
      "Produce oxygen",
      "Absorb ultraviolet radiation"
    ],
    "correct": 1,
    "explanation": "Greenhouse gases (like CO2, methane, and water vapour) trap heat (infrared radiation) in the atmosphere, warming the Earth. While essential for life, excess greenhouse gases cause global warming."
  },
  {
    "question": "Which of the following is a major greenhouse gas?",
    "options": [
      "Nitrogen",
      "Oxygen",
      "Carbon dioxide",
      "Argon"
    ],
    "correct": 2,
    "explanation": "Carbon dioxide (CO2) is a major greenhouse gas. Other greenhouse gases include methane (CH4), nitrous oxide (N2O), and water vapour."
  },
  {
    "question": "The primary source of energy for Earth's ecosystems is:",
    "options": [
      "Wind energy",
      "Geothermal energy",
      "Solar energy (sunlight)",
      "Nuclear energy"
    ],
    "correct": 2,
    "explanation": "The sun is the primary source of energy for almost all ecosystems on Earth. Solar energy drives photosynthesis, which forms the basis of most food chains."
  },
  {
    "question": "In a food chain, the organisms that make their own food are called:",
    "options": [
      "Consumers",
      "Decomposers",
      "Producers (autotrophs)",
      "Scavengers"
    ],
    "correct": 2,
    "explanation": "Producers (autotrophs) are organisms like green plants and algae that make their own food through photosynthesis. They form the first trophic level in a food chain."
  },
  {
    "question": "Decomposers play a vital role in ecosystems by:",
    "options": [
      "Producing food through photosynthesis",
      "Hunting prey",
      "Breaking down dead organisms and recycling nutrients",
      "Fixing nitrogen"
    ],
    "correct": 2,
    "explanation": "Decomposers (like bacteria and fungi) break down dead organisms and organic waste, releasing nutrients back into the soil and atmosphere for reuse by producers."
  },
  {
    "question": "The process by which water vapour in the atmosphere condenses to form clouds is called:",
    "options": [
      "Evaporation",
      "Condensation",
      "Precipitation",
      "Transpiration"
    ],
    "correct": 1,
    "explanation": "Condensation is the process by which water vapour cools and changes back into tiny water droplets, forming clouds and fog."
  },
  {
    "question": "Rain, snow, and hail are forms of:",
    "options": [
      "Evaporation",
      "Condensation",
      "Precipitation",
      "Transpiration"
    ],
    "correct": 2,
    "explanation": "Precipitation is any form of water falling from clouds to the Earth's surface, including rain, snow, sleet, and hail."
  },
  {
    "question": "Transpiration is the process by which:",
    "options": [
      "Animals release carbon dioxide",
      "Plants release water vapour through their leaves",
      "Water evaporates from oceans",
      "Rain falls from clouds"
    ],
    "correct": 1,
    "explanation": "Transpiration is the process by which plants release water vapour through tiny pores (stomata) in their leaves into the atmosphere."
  },
  {
    "question": "Soil is formed from rocks by the process of:",
    "options": [
      "Erosion only",
      "Weathering",
      "Volcanic activity only",
      "Condensation"
    ],
    "correct": 1,
    "explanation": "Weathering is the process by which rocks are broken down into smaller particles (soil) by physical, chemical, and biological agents over long periods of time."
  },
  {
    "question": "The oxygen cycle is closely linked to the:",
    "options": [
      "Nitrogen cycle only",
      "Carbon cycle",
      "Rock cycle only",
      "Water cycle only"
    ],
    "correct": 1,
    "explanation": "The oxygen cycle is closely linked to the carbon cycle. Photosynthesis produces oxygen while consuming CO2, and respiration consumes oxygen while producing CO2."
  },
  {
    "question": "Fossil fuels are formed from:",
    "options": [
      "Volcanic eruptions",
      "Ancient buried organisms over millions of years",
      "Atmospheric gases",
      "Ocean water"
    ],
    "correct": 1,
    "explanation": "Fossil fuels (coal, petroleum, natural gas) are formed from the remains of ancient organisms buried under sediment and subjected to heat and pressure over millions of years."
  },
  {
    "question": "Burning of fossil fuels increases atmospheric levels of:",
    "options": [
      "Nitrogen",
      "Oxygen",
      "Carbon dioxide",
      "Ozone"
    ],
    "correct": 2,
    "explanation": "Burning fossil fuels releases carbon dioxide (CO2) into the atmosphere, increasing its concentration. This contributes to the enhanced greenhouse effect and global warming."
  },
  {
    "question": "Deforestation contributes to climate change because:",
    "options": [
      "Trees produce carbon dioxide",
      "Fewer trees means less CO2 is absorbed from the atmosphere",
      "Trees block sunlight",
      "Trees increase rainfall"
    ],
    "correct": 1,
    "explanation": "Trees absorb CO2 during photosynthesis. When forests are cleared, less CO2 is removed from the atmosphere, and the carbon stored in trees is released, contributing to increased greenhouse gas levels."
  },
  {
    "question": "The nitrogen cycle involves the conversion of nitrogen between:",
    "options": [
      "Only two forms",
      "Only atmospheric nitrogen and nitrates",
      "Various forms including N2, NH3, NO3⁻, and organic nitrogen",
      "Only nitrogen gas and proteins"
    ],
    "correct": 2,
    "explanation": "The nitrogen cycle involves multiple conversions: atmospheric N2 is fixed to NH3, converted to nitrites and nitrates (nitrification), absorbed by plants, passed through food chains, and returned to the atmosphere by denitrifying bacteria."
  },
  {
    "question": "Denitrification is the process by which:",
    "options": [
      "Nitrogen is fixed into ammonia",
      "Nitrates are converted back to atmospheric nitrogen gas",
      "Plants absorb nitrogen from soil",
      "Lightning fixes nitrogen"
    ],
    "correct": 1,
    "explanation": "Denitrification is carried out by denitrifying bacteria that convert nitrates in the soil back into nitrogen gas (N2), releasing it into the atmosphere and completing the nitrogen cycle."
  },
  {
    "question": "The balance of oxygen in the atmosphere is maintained mainly by:",
    "options": [
      "Volcanic eruptions",
      "Photosynthesis by plants and algae",
      "Burning of fuels",
      "Respiration by animals"
    ],
    "correct": 1,
    "explanation": "Photosynthesis by plants, algae, and cyanobacteria is the main process that replenishes oxygen in the atmosphere, maintaining the balance despite consumption by respiration and combustion."
  },
  {
    "question": "An increase in the average temperature of Earth due to excess greenhouse gases is called:",
    "options": [
      "Ozone depletion",
      "Acid rain",
      "Global warming",
      "Eutrophication"
    ],
    "correct": 2,
    "explanation": "Global warming is the long-term increase in Earth's average temperature due to the enhanced greenhouse effect caused by excess greenhouse gases from human activities like burning fossil fuels and deforestation."
  }
]

export default questions
