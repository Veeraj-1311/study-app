const questions = [
  {
    "question": "Who discovered cells by observing thin slices of cork under a microscope?",
    "options": [
      "Anton van Leeuwenhoek",
      "Robert Hooke",
      "Matthias Schleiden",
      "Rudolf Virchow"
    ],
    "correct": 1,
    "explanation": "Robert Hooke discovered cells in 1665 by examining thin slices of cork under a microscope. He saw small compartments that reminded him of monks' rooms (cells)."
  },
  {
    "question": "Which organelle is known as the 'powerhouse of the cell'?",
    "options": [
      "Nucleus",
      "Ribosome",
      "Mitochondria",
      "Golgi apparatus"
    ],
    "correct": 2,
    "explanation": "Mitochondria are called the powerhouse of the cell because they produce ATP (adenosine triphosphate), the main energy currency of the cell, through cellular respiration."
  },
  {
    "question": "Which of the following is present in plant cells but absent in animal cells?",
    "options": [
      "Nucleus",
      "Cell membrane",
      "Cell wall",
      "Mitochondria"
    ],
    "correct": 2,
    "explanation": "Plant cells have a rigid cell wall made of cellulose outside the cell membrane, which provides structural support. Animal cells lack a cell wall."
  },
  {
    "question": "The cell membrane is also known as the:",
    "options": [
      "Nuclear membrane",
      "Plasma membrane",
      "Cell wall",
      "Tonoplast"
    ],
    "correct": 1,
    "explanation": "The cell membrane is also called the plasma membrane. It is a selectively permeable membrane that controls the movement of substances in and out of the cell."
  },
  {
    "question": "Which organelle contains the genetic material DNA?",
    "options": [
      "Ribosome",
      "Lysosome",
      "Nucleus",
      "Vacuole"
    ],
    "correct": 2,
    "explanation": "The nucleus contains the cell's genetic material (DNA) organised into chromosomes. It controls cell activities and is essential for cell division."
  },
  {
    "question": "Prokaryotic cells differ from eukaryotic cells because they lack:",
    "options": [
      "Cell membrane",
      "Ribosomes",
      "A well-defined nucleus",
      "DNA"
    ],
    "correct": 2,
    "explanation": "Prokaryotic cells lack a well-defined, membrane-bound nucleus. Their DNA is located in a region called the nucleoid, which is not enclosed by a nuclear membrane."
  },
  {
    "question": "Which organelle is responsible for photosynthesis in plant cells?",
    "options": [
      "Mitochondria",
      "Chloroplast",
      "Ribosome",
      "Endoplasmic reticulum"
    ],
    "correct": 1,
    "explanation": "Chloroplasts contain the green pigment chlorophyll and are the site of photosynthesis, where plants convert light energy into chemical energy (glucose)."
  },
  {
    "question": "Lysosomes are often called the 'suicide bags' of the cell because they:",
    "options": [
      "Produce energy",
      "Store food",
      "Contain digestive enzymes that can break down the cell",
      "Help in cell division"
    ],
    "correct": 2,
    "explanation": "Lysosomes contain powerful digestive enzymes. When a cell is damaged or dies, the lysosome membrane bursts and the enzymes digest the cell's own components, hence the name 'suicide bags'."
  },
  {
    "question": "Which part of the cell is selectively permeable?",
    "options": [
      "Cell wall",
      "Cell membrane",
      "Nucleus",
      "Cytoplasm"
    ],
    "correct": 1,
    "explanation": "The cell membrane (plasma membrane) is selectively permeable, meaning it allows only certain molecules to pass through while blocking others."
  },
  {
    "question": "The jelly-like substance that fills the cell is called:",
    "options": [
      "Nucleoplasm",
      "Cytoplasm",
      "Protoplasm",
      "Cell sap"
    ],
    "correct": 1,
    "explanation": "Cytoplasm is the jelly-like substance that fills the cell between the cell membrane and the nucleus. It contains various organelles and is the site of many metabolic reactions."
  },
  {
    "question": "Which of the following is an example of a prokaryotic organism?",
    "options": [
      "Amoeba",
      "Mushroom",
      "Bacterium",
      "Human"
    ],
    "correct": 2,
    "explanation": "Bacteria are prokaryotic organisms. They lack a membrane-bound nucleus and other membrane-bound organelles. Amoeba, mushrooms, and humans are all eukaryotic."
  },
  {
    "question": "The endoplasmic reticulum that has ribosomes on its surface is called:",
    "options": [
      "Smooth endoplasmic reticulum",
      "Rough endoplasmic reticulum",
      "Golgi apparatus",
      "Nuclear envelope"
    ],
    "correct": 1,
    "explanation": "Rough endoplasmic reticulum (RER) has ribosomes attached to its surface, giving it a 'rough' appearance. It is involved in protein synthesis and transport."
  },
  {
    "question": "Which organelle is involved in packaging and dispatching materials from the cell?",
    "options": [
      "Ribosome",
      "Mitochondria",
      "Golgi apparatus",
      "Lysosome"
    ],
    "correct": 2,
    "explanation": "The Golgi apparatus (Golgi body) modifies, packages, and dispatches proteins and lipids to their destinations inside or outside the cell."
  },
  {
    "question": "Ribosomes are the site of:",
    "options": [
      "Photosynthesis",
      "Respiration",
      "Protein synthesis",
      "Lipid synthesis"
    ],
    "correct": 2,
    "explanation": "Ribosomes are small organelles responsible for protein synthesis. They translate the genetic instructions from mRNA into chains of amino acids (proteins)."
  },
  {
    "question": "A large central vacuole is a characteristic feature of:",
    "options": [
      "Animal cells",
      "Plant cells",
      "Bacterial cells",
      "Viral particles"
    ],
    "correct": 1,
    "explanation": "Plant cells typically have a large central vacuole filled with cell sap that maintains turgor pressure, stores nutrients, and helps maintain the cell's shape."
  },
  {
    "question": "Cell theory states that:",
    "options": [
      "Only plants are made of cells",
      "All living organisms are composed of cells",
      "Cells arise from non-living matter",
      "Viruses are made of cells"
    ],
    "correct": 1,
    "explanation": "Cell theory states that all living organisms are composed of one or more cells, the cell is the basic unit of life, and all cells arise from pre-existing cells."
  },
  {
    "question": "Which scientist proposed that all cells arise from pre-existing cells?",
    "options": [
      "Robert Hooke",
      "Matthias Schleiden",
      "Rudolf Virchow",
      "Theodore Schwann"
    ],
    "correct": 2,
    "explanation": "Rudolf Virchow proposed in 1855 that 'Omnis cellula e cellula' (all cells arise from pre-existing cells), which became the third tenet of cell theory."
  },
  {
    "question": "The outermost boundary of a plant cell is the:",
    "options": [
      "Cell membrane",
      "Cell wall",
      "Nuclear membrane",
      "Cytoplasm"
    ],
    "correct": 1,
    "explanation": "The outermost boundary of a plant cell is the cell wall, which is a rigid structure made of cellulose. The cell membrane lies just inside the cell wall."
  },
  {
    "question": "Which organelle is not found in animal cells?",
    "options": [
      "Mitochondria",
      "Plastids",
      "Ribosomes",
      "Golgi apparatus"
    ],
    "correct": 1,
    "explanation": "Plastids (such as chloroplasts, chromoplasts, and leucoplasts) are found only in plant cells, not in animal cells. They play roles in photosynthesis and storage."
  },
  {
    "question": "The process by which water moves through a selectively permeable membrane is called:",
    "options": [
      "Diffusion",
      "Osmosis",
      "Active transport",
      "Endocytosis"
    ],
    "correct": 1,
    "explanation": "Osmosis is the movement of water molecules from a region of higher water concentration to a region of lower water concentration through a selectively permeable membrane."
  },
  {
    "question": "Which type of endoplasmic reticulum is involved in lipid synthesis?",
    "options": [
      "Rough endoplasmic reticulum",
      "Smooth endoplasmic reticulum",
      "Golgi apparatus",
      "Nucleus"
    ],
    "correct": 1,
    "explanation": "Smooth endoplasmic reticulum (SER) lacks ribosomes and is involved in the synthesis of lipids, detoxification of drugs, and storage of calcium ions."
  },
  {
    "question": "The nuclear membrane has tiny pores that allow:",
    "options": [
      "Only water to pass",
      "Transfer of materials between nucleus and cytoplasm",
      "Only DNA to leave the nucleus",
      "Nothing to pass through"
    ],
    "correct": 1,
    "explanation": "Nuclear pores are tiny openings in the nuclear membrane that regulate the transport of materials such as RNA, proteins, and ribosomal subunits between the nucleus and cytoplasm."
  },
  {
    "question": "An organism made of a single cell is called:",
    "options": [
      "Multicellular",
      "Unicellular",
      "Acellular",
      "Colonial"
    ],
    "correct": 1,
    "explanation": "A unicellular organism consists of a single cell that carries out all life processes. Examples include bacteria, amoeba, and paramecium."
  },
  {
    "question": "Chromatin material in the nucleus consists of:",
    "options": [
      "RNA and proteins",
      "DNA and proteins",
      "Lipids and carbohydrates",
      "Only DNA"
    ],
    "correct": 1,
    "explanation": "Chromatin is composed of DNA and histone proteins. During cell division, chromatin condenses to form visible chromosomes."
  },
  {
    "question": "Which of the following is common to both plant and animal cells?",
    "options": [
      "Cell wall",
      "Chloroplasts",
      "Large central vacuole",
      "Mitochondria"
    ],
    "correct": 3,
    "explanation": "Mitochondria are present in both plant and animal cells as they are essential for cellular respiration and energy production. Cell walls, chloroplasts, and large central vacuoles are typically found only in plant cells."
  }
]

export default questions
