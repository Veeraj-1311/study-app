const questions = [
  {
    "question": "A tissue is defined as a group of cells that:",
    "options": [
      "Are different in structure but perform the same function",
      "Have similar structure and function",
      "Are randomly arranged",
      "Exist only in animals"
    ],
    "correct": 1,
    "explanation": "A tissue is a group of cells that are similar in structure and work together to perform a specific function."
  },
  {
    "question": "Which plant tissue is responsible for growth at the tips of roots and stems?",
    "options": [
      "Permanent tissue",
      "Meristematic tissue",
      "Protective tissue",
      "Vascular tissue"
    ],
    "correct": 1,
    "explanation": "Meristematic tissue is found at the growing tips (apices) of roots and shoots. These cells divide actively and are responsible for the growth in length of the plant."
  },
  {
    "question": "Parenchyma tissue in plants primarily functions in:",
    "options": [
      "Protection",
      "Support",
      "Storage and photosynthesis",
      "Transport of water"
    ],
    "correct": 2,
    "explanation": "Parenchyma is a simple permanent tissue that stores food, provides support, and in leaves (as chlorenchyma) performs photosynthesis."
  },
  {
    "question": "Which tissue provides flexibility to plants and is found in leaf stalks?",
    "options": [
      "Sclerenchyma",
      "Collenchyma",
      "Parenchyma",
      "Meristematic tissue"
    ],
    "correct": 1,
    "explanation": "Collenchyma tissue provides flexibility and mechanical support to growing plant parts. It is found in leaf stalks (petioles) and stems, allowing them to bend without breaking."
  },
  {
    "question": "Sclerenchyma tissue is characterised by:",
    "options": [
      "Thin cell walls and living cells",
      "Thick, lignified cell walls and dead cells",
      "Cells with chloroplasts",
      "Cells that divide actively"
    ],
    "correct": 1,
    "explanation": "Sclerenchyma cells have thick cell walls hardened with lignin and are dead at maturity. They provide rigidity and strength to plant parts like nutshells and seed coats."
  },
  {
    "question": "Which vascular tissue transports water and minerals in plants?",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    "correct": 1,
    "explanation": "Xylem is the vascular tissue responsible for transporting water and dissolved minerals from the roots upward to the rest of the plant."
  },
  {
    "question": "Phloem transports:",
    "options": [
      "Water from roots to leaves",
      "Food from leaves to other parts",
      "Minerals from soil",
      "Gases in and out of the plant"
    ],
    "correct": 1,
    "explanation": "Phloem transports prepared food (mainly sucrose) from the leaves (where photosynthesis occurs) to other parts of the plant. This process is called translocation."
  },
  {
    "question": "The protective covering on the outside of a plant is called:",
    "options": [
      "Cortex",
      "Epidermis",
      "Pith",
      "Endodermis"
    ],
    "correct": 1,
    "explanation": "The epidermis is the outermost layer of cells that forms a protective covering on the surface of leaves, stems, and roots of plants."
  },
  {
    "question": "Cork (bark) in older stems replaces the epidermis and is formed by:",
    "options": [
      "Apical meristem",
      "Lateral meristem (cork cambium)",
      "Intercalary meristem",
      "Parenchyma"
    ],
    "correct": 1,
    "explanation": "Cork is formed by the lateral meristem called cork cambium (phellogen). It replaces the epidermis in older stems and roots, providing protection against water loss, infection, and mechanical injury."
  },
  {
    "question": "Epithelial tissue in animals covers:",
    "options": [
      "Only internal organs",
      "Only external body surfaces",
      "Both external body surfaces and internal organ linings",
      "Only bones and muscles"
    ],
    "correct": 2,
    "explanation": "Epithelial tissue covers the external body surface (skin) and lines internal organs and cavities such as the mouth, stomach, and blood vessels."
  },
  {
    "question": "Which type of animal tissue is specialised for contraction and movement?",
    "options": [
      "Epithelial tissue",
      "Connective tissue",
      "Muscular tissue",
      "Nervous tissue"
    ],
    "correct": 2,
    "explanation": "Muscular tissue is composed of cells that can contract and relax, enabling movement of body parts and internal organs."
  },
  {
    "question": "Voluntary muscles are also called:",
    "options": [
      "Smooth muscles",
      "Cardiac muscles",
      "Striated (skeletal) muscles",
      "Involuntary muscles"
    ],
    "correct": 2,
    "explanation": "Striated or skeletal muscles are called voluntary muscles because they are under conscious control. They are attached to bones and are responsible for body movements."
  },
  {
    "question": "Cardiac muscle tissue is found in the:",
    "options": [
      "Stomach",
      "Lungs",
      "Heart",
      "Biceps"
    ],
    "correct": 2,
    "explanation": "Cardiac muscle is a specialised type of muscle found only in the heart. It contracts rhythmically and involuntarily throughout life to pump blood."
  },
  {
    "question": "Smooth muscles are found in the walls of:",
    "options": [
      "Skeletal system",
      "Internal organs like intestines and blood vessels",
      "Heart only",
      "Skull"
    ],
    "correct": 1,
    "explanation": "Smooth (unstriated) muscles are found in the walls of internal organs such as the intestines, stomach, blood vessels, and urinary bladder. They are involuntary muscles."
  },
  {
    "question": "The connective tissue that connects bone to bone is called:",
    "options": [
      "Tendon",
      "Ligament",
      "Cartilage",
      "Areolar tissue"
    ],
    "correct": 1,
    "explanation": "Ligaments are strong, elastic connective tissue bands that connect bones to other bones at joints, providing stability."
  },
  {
    "question": "Tendons connect:",
    "options": [
      "Bone to bone",
      "Muscle to bone",
      "Muscle to muscle",
      "Nerve to muscle"
    ],
    "correct": 1,
    "explanation": "Tendons are tough, fibrous connective tissues that attach muscles to bones, allowing the force of muscle contraction to move bones."
  },
  {
    "question": "Blood is classified as a type of:",
    "options": [
      "Epithelial tissue",
      "Muscular tissue",
      "Connective tissue",
      "Nervous tissue"
    ],
    "correct": 2,
    "explanation": "Blood is a fluid connective tissue. It has a liquid matrix called plasma in which blood cells (RBCs, WBCs, and platelets) are suspended, and it connects different parts of the body."
  },
  {
    "question": "The fluid matrix of blood is called:",
    "options": [
      "Serum",
      "Plasma",
      "Lymph",
      "Cytoplasm"
    ],
    "correct": 1,
    "explanation": "Plasma is the fluid matrix of blood. It is a pale yellow liquid that makes up about 55% of blood volume and contains water, proteins, salts, and other dissolved substances."
  },
  {
    "question": "Which tissue transmits electrical impulses in the body?",
    "options": [
      "Muscular tissue",
      "Epithelial tissue",
      "Connective tissue",
      "Nervous tissue"
    ],
    "correct": 3,
    "explanation": "Nervous tissue is composed of neurons (nerve cells) that generate and transmit electrical impulses, enabling communication and coordination throughout the body."
  },
  {
    "question": "The basic unit of nervous tissue is the:",
    "options": [
      "Myocyte",
      "Neuron",
      "Nephron",
      "Osteocyte"
    ],
    "correct": 1,
    "explanation": "The neuron (nerve cell) is the basic structural and functional unit of nervous tissue. It consists of a cell body, dendrites, and an axon."
  },
  {
    "question": "Bone tissue is a type of connective tissue that is:",
    "options": [
      "Soft and flexible",
      "Hard due to calcium and phosphorus deposits",
      "Fluid in nature",
      "Found only in the skull"
    ],
    "correct": 1,
    "explanation": "Bone is a hard connective tissue. Its matrix is rich in calcium and phosphorus salts, making it rigid and strong enough to support the body and protect internal organs."
  },
  {
    "question": "Cartilage is found in:",
    "options": [
      "The tip of the nose and ear",
      "Only inside bones",
      "Only in the skull",
      "The heart"
    ],
    "correct": 0,
    "explanation": "Cartilage is a flexible connective tissue found in the tip of the nose, ear pinna, trachea, and between vertebrae. It provides support and flexibility."
  },
  {
    "question": "Adipose tissue stores:",
    "options": [
      "Water",
      "Fat",
      "Calcium",
      "Iron"
    ],
    "correct": 1,
    "explanation": "Adipose tissue is a specialised connective tissue that stores fat. It acts as an insulator, cushions organs, and serves as an energy reserve."
  },
  {
    "question": "Which type of meristematic tissue is found at the base of leaves or internodes?",
    "options": [
      "Apical meristem",
      "Lateral meristem",
      "Intercalary meristem",
      "Cork cambium"
    ],
    "correct": 2,
    "explanation": "Intercalary meristem is found at the base of leaves or internodes (e.g., in grasses). It helps in the elongation and regrowth of parts like grass blades after cutting."
  },
  {
    "question": "Simple epithelium consists of:",
    "options": [
      "Multiple layers of cells",
      "A single layer of cells",
      "Only cuboidal cells",
      "Only squamous cells"
    ],
    "correct": 1,
    "explanation": "Simple epithelium is made of a single layer of cells. It is found in areas where absorption, secretion, or filtration occurs, such as the lining of blood vessels and air sacs of lungs."
  }
]

export default questions
