const questions = [
  {
    "question": "A homogeneous mixture is also known as a:",
    "options": [
      "Suspension",
      "Colloid",
      "Solution",
      "Compound"
    ],
    "correct": 2,
    "explanation": "A solution is a homogeneous mixture where the solute is uniformly distributed throughout the solvent at the molecular level."
  },
  {
    "question": "In a solution of sugar and water, sugar is the:",
    "options": [
      "Solvent",
      "Solute",
      "Suspension",
      "Residue"
    ],
    "correct": 1,
    "explanation": "In a sugar-water solution, sugar is the solute (the substance that is dissolved) and water is the solvent (the substance that does the dissolving)."
  },
  {
    "question": "Which of the following is a heterogeneous mixture?",
    "options": [
      "Salt water",
      "Air",
      "Sand and iron filings",
      "Vinegar"
    ],
    "correct": 2,
    "explanation": "Sand and iron filings form a heterogeneous mixture because the components are not uniformly distributed and can be visually distinguished."
  },
  {
    "question": "A colloid differs from a solution because colloid particles:",
    "options": [
      "Are larger than solution particles and scatter light",
      "Settle down on standing",
      "Cannot be seen under any microscope",
      "Are smaller than solution particles"
    ],
    "correct": 0,
    "explanation": "Colloid particles (1-1000 nm) are larger than solution particles and can scatter light (Tyndall effect), but they do not settle down on standing."
  },
  {
    "question": "The Tyndall effect is the scattering of light by particles in a:",
    "options": [
      "True solution",
      "Colloid",
      "Pure solvent",
      "Element"
    ],
    "correct": 1,
    "explanation": "The Tyndall effect is the scattering of a beam of light by colloidal particles. This effect is not observed in true solutions because their particles are too small."
  },
  {
    "question": "Milk is an example of a:",
    "options": [
      "True solution",
      "Suspension",
      "Colloid (emulsion)",
      "Pure substance"
    ],
    "correct": 2,
    "explanation": "Milk is a colloid, specifically an emulsion, where tiny fat droplets are dispersed in water. It shows the Tyndall effect."
  },
  {
    "question": "In a suspension, particles:",
    "options": [
      "Are invisible to the naked eye",
      "Do not settle on standing",
      "Are visible and settle on standing",
      "Pass through filter paper"
    ],
    "correct": 2,
    "explanation": "Suspension particles are large enough to be visible to the naked eye and settle down on standing due to gravity. They can be separated by filtration."
  },
  {
    "question": "Which separation technique is used to separate a mixture of sand and water?",
    "options": [
      "Evaporation",
      "Filtration",
      "Distillation",
      "Sublimation"
    ],
    "correct": 1,
    "explanation": "Filtration is used to separate an insoluble solid (sand) from a liquid (water). The sand remains on the filter paper as residue while water passes through as filtrate."
  },
  {
    "question": "Evaporation is used to separate:",
    "options": [
      "Two immiscible liquids",
      "A dissolved solid from a liquid",
      "Two miscible liquids",
      "A gas from a liquid"
    ],
    "correct": 1,
    "explanation": "Evaporation is used to separate a dissolved solid (solute) from a liquid (solvent) by heating until the solvent evaporates, leaving the solid behind."
  },
  {
    "question": "Distillation is used to separate liquids that have:",
    "options": [
      "The same boiling points",
      "Different boiling points",
      "The same density",
      "Different colours"
    ],
    "correct": 1,
    "explanation": "Distillation separates miscible liquids based on differences in their boiling points. The liquid with the lower boiling point evaporates first and is condensed separately."
  },
  {
    "question": "Chromatography is used to separate:",
    "options": [
      "Insoluble solids from liquids",
      "Components of a mixture based on differential movement through a medium",
      "Immiscible liquids",
      "Gases from liquids"
    ],
    "correct": 1,
    "explanation": "Chromatography separates the components of a mixture based on their different rates of movement through a stationary medium, often used to separate dyes and pigments."
  },
  {
    "question": "Sublimation is the process by which a substance changes from:",
    "options": [
      "Solid to liquid",
      "Liquid to gas",
      "Solid directly to gas",
      "Gas to liquid"
    ],
    "correct": 2,
    "explanation": "Sublimation is the direct conversion of a solid into a gas without passing through the liquid state. Examples include camphor, naphthalene, and dry ice."
  },
  {
    "question": "A separating funnel is used to separate:",
    "options": [
      "Miscible liquids",
      "Immiscible liquids",
      "Dissolved solids",
      "Gases"
    ],
    "correct": 1,
    "explanation": "A separating funnel is used to separate immiscible liquids (liquids that do not mix), such as oil and water, based on the difference in their densities."
  },
  {
    "question": "To obtain pure water from salt water, which method is most appropriate?",
    "options": [
      "Filtration",
      "Evaporation",
      "Distillation",
      "Sedimentation"
    ],
    "correct": 2,
    "explanation": "Distillation is the best method to obtain pure water from salt water. The water evaporates and is condensed and collected, leaving the salt behind."
  },
  {
    "question": "Which technique is used to separate a mixture of common salt and ammonium chloride?",
    "options": [
      "Filtration",
      "Distillation",
      "Sublimation",
      "Chromatography"
    ],
    "correct": 2,
    "explanation": "Sublimation is used because ammonium chloride sublimes (converts directly from solid to gas on heating) while common salt does not, allowing separation."
  },
  {
    "question": "A saturated solution is one that:",
    "options": [
      "Can dissolve more solute at the same temperature",
      "Cannot dissolve any more solute at a given temperature",
      "Has no solute dissolved",
      "Is always hot"
    ],
    "correct": 1,
    "explanation": "A saturated solution is one in which no more solute can be dissolved at a given temperature. Any additional solute will remain undissolved."
  },
  {
    "question": "The concentration of a solution can be increased by:",
    "options": [
      "Adding more solvent",
      "Adding more solute",
      "Decreasing temperature",
      "Filtering the solution"
    ],
    "correct": 1,
    "explanation": "The concentration of a solution increases when more solute is added (or solvent is removed), as concentration is the ratio of solute to solvent."
  },
  {
    "question": "Centrifugation is used to separate:",
    "options": [
      "Miscible liquids",
      "Fine suspended particles from a liquid",
      "Gases from liquids",
      "Two solids of different sizes"
    ],
    "correct": 1,
    "explanation": "Centrifugation uses rapid spinning to separate fine suspended particles from a liquid. The denser particles are pushed to the bottom."
  },
  {
    "question": "Which method is used to separate cream from milk?",
    "options": [
      "Filtration",
      "Centrifugation",
      "Sublimation",
      "Distillation"
    ],
    "correct": 1,
    "explanation": "Centrifugation is used to separate cream from milk. When milk is spun rapidly, the lighter cream collects at the centre and the heavier skimmed milk moves outward."
  },
  {
    "question": "An alloy is an example of a:",
    "options": [
      "Compound",
      "Element",
      "Homogeneous mixture",
      "Heterogeneous mixture"
    ],
    "correct": 2,
    "explanation": "An alloy is a homogeneous mixture of two or more metals (or a metal and a non-metal). For example, brass is an alloy of copper and zinc."
  },
  {
    "question": "Air is an example of a:",
    "options": [
      "Compound",
      "Homogeneous mixture",
      "Heterogeneous mixture",
      "Pure substance"
    ],
    "correct": 1,
    "explanation": "Air is a homogeneous mixture of gases (mainly nitrogen, oxygen, carbon dioxide, and trace gases). Its composition is fairly uniform."
  },
  {
    "question": "Crystallisation is a technique used to:",
    "options": [
      "Separate immiscible liquids",
      "Purify solids from impure solutions",
      "Separate gases",
      "Separate colloids"
    ],
    "correct": 1,
    "explanation": "Crystallisation is used to obtain pure solid crystals from an impure solution. The solution is heated to saturation and then slowly cooled, allowing pure crystals to form."
  },
  {
    "question": "Which of the following is a pure substance?",
    "options": [
      "Air",
      "Sea water",
      "Distilled water",
      "Milk"
    ],
    "correct": 2,
    "explanation": "Distilled water is a pure substance because it contains only water molecules (H2O). Air, sea water, and milk are all mixtures."
  },
  {
    "question": "Sedimentation and decantation are used to separate:",
    "options": [
      "Dissolved salts from water",
      "Heavier insoluble particles from a liquid",
      "Two miscible liquids",
      "Gases from liquids"
    ],
    "correct": 1,
    "explanation": "Sedimentation allows heavier insoluble particles to settle at the bottom of a liquid, and decantation involves pouring off the clear liquid above the sediment."
  },
  {
    "question": "A solution that contains less solute than it can dissolve at a given temperature is called:",
    "options": [
      "Saturated",
      "Unsaturated",
      "Supersaturated",
      "Concentrated"
    ],
    "correct": 1,
    "explanation": "An unsaturated solution can still dissolve more solute at the given temperature. It has less solute than the maximum amount that can be dissolved."
  }
]

export default questions
