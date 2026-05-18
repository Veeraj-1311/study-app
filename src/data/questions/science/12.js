const questions = [
  {
    "question": "Biodiversity refers to:",
    "options": [
      "The study of biology",
      "The variety of living organisms in an area",
      "The classification of organisms",
      "The evolution of species"
    ],
    "correct": 1,
    "explanation": "Biodiversity (biological diversity) refers to the variety and variability of all living organisms in a particular area or on Earth, including diversity within species, between species, and of ecosystems."
  },
  {
    "question": "Taxonomy is the branch of biology that deals with:",
    "options": [
      "Study of fossils",
      "Classification, naming, and identification of organisms",
      "Study of cells",
      "Study of heredity"
    ],
    "correct": 1,
    "explanation": "Taxonomy is the science of classifying, naming, and identifying organisms based on their similarities, differences, and evolutionary relationships."
  },
  {
    "question": "Who is known as the 'Father of Taxonomy'?",
    "options": [
      "Charles Darwin",
      "Carolus Linnaeus",
      "Aristotle",
      "Robert Whittaker"
    ],
    "correct": 1,
    "explanation": "Carolus Linnaeus (Carl Linnaeus) is known as the Father of Taxonomy. He developed the system of binomial nomenclature and a hierarchical classification system."
  },
  {
    "question": "Binomial nomenclature means each organism is given:",
    "options": [
      "One name",
      "Two names (genus and species)",
      "Three names",
      "A common name only"
    ],
    "correct": 1,
    "explanation": "Binomial nomenclature gives each organism a two-part scientific name: the genus name (capitalised) and the species name (lowercase). For example, Homo sapiens for humans."
  },
  {
    "question": "In the scientific name Homo sapiens, 'Homo' represents the:",
    "options": [
      "Species",
      "Genus",
      "Family",
      "Order"
    ],
    "correct": 1,
    "explanation": "In binomial nomenclature, the first word is the genus name. So 'Homo' is the genus name and 'sapiens' is the species name for humans."
  },
  {
    "question": "The correct hierarchy of classification from largest to smallest is:",
    "options": [
      "Kingdom, Phylum, Class, Order, Family, Genus, Species",
      "Kingdom, Class, Phylum, Order, Family, Genus, Species",
      "Species, Genus, Family, Order, Class, Phylum, Kingdom",
      "Kingdom, Phylum, Order, Class, Family, Genus, Species"
    ],
    "correct": 0,
    "explanation": "The correct hierarchy from largest to smallest is: Kingdom > Phylum > Class > Order > Family > Genus > Species."
  },
  {
    "question": "The five-kingdom classification was proposed by:",
    "options": [
      "Carolus Linnaeus",
      "Robert Whittaker",
      "Charles Darwin",
      "Aristotle"
    ],
    "correct": 1,
    "explanation": "Robert Whittaker proposed the five-kingdom classification in 1969, dividing organisms into Monera, Protista, Fungi, Plantae, and Animalia."
  },
  {
    "question": "Kingdom Monera includes:",
    "options": [
      "All plants",
      "All animals",
      "Bacteria and blue-green algae (cyanobacteria)",
      "Fungi"
    ],
    "correct": 2,
    "explanation": "Kingdom Monera includes prokaryotic organisms such as bacteria and cyanobacteria (blue-green algae). They lack a membrane-bound nucleus."
  },
  {
    "question": "Kingdom Protista includes:",
    "options": [
      "Only bacteria",
      "Unicellular eukaryotic organisms",
      "All multicellular organisms",
      "Only fungi"
    ],
    "correct": 1,
    "explanation": "Kingdom Protista includes unicellular eukaryotic organisms such as Amoeba, Paramecium, Euglena, and some algae. They have membrane-bound organelles."
  },
  {
    "question": "Fungi differ from plants because fungi:",
    "options": [
      "Have chlorophyll and photosynthesise",
      "Are heterotrophic and lack chlorophyll",
      "Are prokaryotic",
      "Have roots and stems"
    ],
    "correct": 1,
    "explanation": "Fungi lack chlorophyll and cannot photosynthesise. They are heterotrophic and obtain nutrition by absorbing organic matter from their surroundings (saprophytic or parasitic)."
  },
  {
    "question": "The cell wall of fungi is made of:",
    "options": [
      "Cellulose",
      "Chitin",
      "Peptidoglycan",
      "Starch"
    ],
    "correct": 1,
    "explanation": "The cell wall of fungi is composed of chitin, a tough polysaccharide. This differs from plant cell walls, which are made of cellulose."
  },
  {
    "question": "Kingdom Plantae includes organisms that are:",
    "options": [
      "Heterotrophic and unicellular",
      "Autotrophic, multicellular, and have cell walls",
      "Prokaryotic",
      "All parasitic"
    ],
    "correct": 1,
    "explanation": "Kingdom Plantae includes multicellular, autotrophic organisms that have cell walls made of cellulose. They produce food through photosynthesis."
  },
  {
    "question": "Kingdom Animalia includes organisms that are:",
    "options": [
      "Autotrophic with cell walls",
      "Heterotrophic, multicellular, and lack cell walls",
      "Prokaryotic",
      "All unicellular"
    ],
    "correct": 1,
    "explanation": "Kingdom Animalia includes multicellular, heterotrophic organisms that lack cell walls. They obtain nutrition by ingesting food."
  },
  {
    "question": "Bryophytes are also called 'amphibians of the plant kingdom' because they:",
    "options": [
      "Live only in water",
      "Live on land but need water for reproduction",
      "Can fly",
      "Are found only in deserts"
    ],
    "correct": 1,
    "explanation": "Bryophytes (like mosses) are called amphibians of the plant kingdom because they live on land but require water for the transfer of male gametes during sexual reproduction."
  },
  {
    "question": "Gymnosperms are plants that:",
    "options": [
      "Have enclosed seeds in fruits",
      "Bear naked seeds not enclosed in fruits",
      "Do not produce seeds",
      "Are non-vascular"
    ],
    "correct": 1,
    "explanation": "Gymnosperms (like pine and cycads) are seed-bearing plants whose seeds are not enclosed within a fruit. The word gymnosperm means 'naked seed'."
  },
  {
    "question": "Angiosperms are plants that:",
    "options": [
      "Bear naked seeds",
      "Have seeds enclosed within fruits",
      "Do not produce flowers",
      "Reproduce only by spores"
    ],
    "correct": 1,
    "explanation": "Angiosperms are flowering plants that bear seeds enclosed within fruits. They are the most diverse and widespread group of plants."
  },
  {
    "question": "Vertebrates are animals that have:",
    "options": [
      "No backbone",
      "A backbone (vertebral column)",
      "No nervous system",
      "External skeleton only"
    ],
    "correct": 1,
    "explanation": "Vertebrates are animals that possess a backbone or vertebral column (spinal column). They include fish, amphibians, reptiles, birds, and mammals."
  },
  {
    "question": "Which phylum includes animals with a notochord?",
    "options": [
      "Arthropoda",
      "Mollusca",
      "Chordata",
      "Annelida"
    ],
    "correct": 2,
    "explanation": "Phylum Chordata includes animals that possess a notochord (a flexible rod-like structure) at some stage of their development. Vertebrates are a subgroup of chordates."
  },
  {
    "question": "Arthropoda is the largest phylum of the animal kingdom. Examples include:",
    "options": [
      "Earthworm and leech",
      "Insects, spiders, and crabs",
      "Starfish and sea urchin",
      "Snails and octopus"
    ],
    "correct": 1,
    "explanation": "Arthropoda is the largest animal phylum and includes insects, spiders, crabs, scorpions, and centipedes. They have jointed legs and an exoskeleton."
  },
  {
    "question": "Thallophyta includes:",
    "options": [
      "Mosses and liverworts",
      "Algae (plant body not differentiated into root, stem, leaves)",
      "Ferns",
      "Flowering plants"
    ],
    "correct": 1,
    "explanation": "Thallophyta includes algae and similar organisms whose body (thallus) is not differentiated into true roots, stems, or leaves. Examples include Spirogyra and Ulva."
  },
  {
    "question": "Pteridophytes are characterised by:",
    "options": [
      "Absence of vascular tissue",
      "Presence of vascular tissue but reproduction by spores",
      "Seed production",
      "Flower production"
    ],
    "correct": 1,
    "explanation": "Pteridophytes (ferns and horsetails) have vascular tissue (xylem and phloem) for transport but reproduce by spores instead of seeds."
  },
  {
    "question": "Cold-blooded (ectothermic) animals are those whose body temperature:",
    "options": [
      "Remains constant",
      "Varies with the environment",
      "Is always higher than the environment",
      "Is not measurable"
    ],
    "correct": 1,
    "explanation": "Cold-blooded (ectothermic) animals cannot regulate their body temperature internally. Their body temperature changes with the temperature of their environment. Examples include fish, amphibians, and reptiles."
  },
  {
    "question": "Mammals are characterised by:",
    "options": [
      "Laying eggs only",
      "Having feathers",
      "Having mammary glands that produce milk",
      "Having scales"
    ],
    "correct": 2,
    "explanation": "Mammals are warm-blooded vertebrates characterised by the presence of mammary glands that produce milk to nourish their young. Most mammals also have hair or fur."
  },
  {
    "question": "Aves (birds) are characterised by:",
    "options": [
      "Cold-blooded metabolism",
      "Feathers and hollow bones",
      "Mammary glands",
      "Moist skin without scales"
    ],
    "correct": 1,
    "explanation": "Birds (class Aves) are warm-blooded vertebrates characterised by feathers, beaks, hollow bones (which aid in flight), and the ability to lay hard-shelled eggs."
  },
  {
    "question": "The species is the basic unit of classification. Two organisms belong to the same species if they:",
    "options": [
      "Look similar",
      "Can interbreed and produce fertile offspring",
      "Live in the same habitat",
      "Have the same size"
    ],
    "correct": 1,
    "explanation": "A species is defined as a group of organisms that can interbreed among themselves and produce fertile offspring. This is the most fundamental unit of classification."
  }
]

export default questions
