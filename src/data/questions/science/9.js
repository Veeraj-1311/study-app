const questions = [
  {
    "question": "The smallest particle of an element that retains its chemical properties is called:",
    "options": [
      "Molecule",
      "Atom",
      "Ion",
      "Compound"
    ],
    "correct": 1,
    "explanation": "An atom is the smallest particle of an element that retains the chemical properties of that element. It may or may not exist independently."
  },
  {
    "question": "A molecule is defined as:",
    "options": [
      "A single atom of any element",
      "The smallest particle of a substance that can exist independently",
      "An ion with a charge",
      "A mixture of atoms"
    ],
    "correct": 1,
    "explanation": "A molecule is the smallest particle of an element or compound that can exist independently and retains all the chemical properties of that substance."
  },
  {
    "question": "The chemical formula of water is H2O. This means each molecule of water contains:",
    "options": [
      "1 hydrogen atom and 2 oxygen atoms",
      "2 hydrogen atoms and 1 oxygen atom",
      "2 hydrogen atoms and 2 oxygen atoms",
      "1 hydrogen atom and 1 oxygen atom"
    ],
    "correct": 1,
    "explanation": "H2O indicates that each water molecule contains 2 atoms of hydrogen (H) and 1 atom of oxygen (O)."
  },
  {
    "question": "The atomicity of ozone (O3) is:",
    "options": [
      "1",
      "2",
      "3",
      "6"
    ],
    "correct": 2,
    "explanation": "Atomicity is the number of atoms in a molecule. Ozone (O3) has 3 oxygen atoms in each molecule, so its atomicity is 3."
  },
  {
    "question": "The valency of an element is:",
    "options": [
      "Its atomic number",
      "Its mass number",
      "The combining capacity of its atom",
      "The number of neutrons"
    ],
    "correct": 2,
    "explanation": "Valency is the combining capacity of an atom. It represents the number of electrons an atom can lose, gain, or share to form chemical bonds."
  },
  {
    "question": "The chemical formula of carbon dioxide is:",
    "options": [
      "CO",
      "CO2",
      "C2O",
      "C2O2"
    ],
    "correct": 1,
    "explanation": "Carbon dioxide has the formula CO2, meaning each molecule consists of 1 carbon atom and 2 oxygen atoms. Carbon has valency 4 and oxygen has valency 2."
  },
  {
    "question": "One mole of any substance contains:",
    "options": [
      "6.022 x 10²⁰ particles",
      "6.022 x 10²³ particles",
      "6.022 x 10²⁶ particles",
      "6.022 x 10¹⁹ particles"
    ],
    "correct": 1,
    "explanation": "One mole contains Avogadro's number (6.022 x 10²³) of particles (atoms, molecules, or ions). This is known as Avogadro's constant."
  },
  {
    "question": "The molar mass of an element is the mass of:",
    "options": [
      "One atom of the element",
      "One mole of atoms of the element",
      "One molecule of the element",
      "One gram of the element"
    ],
    "correct": 1,
    "explanation": "The molar mass is the mass of one mole (6.022 x 10²³ atoms) of an element, expressed in grams per mole (g/mol). It is numerically equal to the atomic mass in atomic mass units."
  },
  {
    "question": "The atomic mass unit (amu or u) is defined as:",
    "options": [
      "The mass of one hydrogen atom",
      "1/12th the mass of a carbon-12 atom",
      "The mass of one oxygen atom",
      "The mass of one electron"
    ],
    "correct": 1,
    "explanation": "One atomic mass unit (1 u) is defined as exactly 1/12th the mass of one atom of carbon-12. It is approximately 1.66 x 10⁻²⁴ grams."
  },
  {
    "question": "The molecular mass of H2O is (H = 1 u, O = 16 u):",
    "options": [
      "17 u",
      "18 u",
      "19 u",
      "16 u"
    ],
    "correct": 1,
    "explanation": "Molecular mass of H2O = (2 x 1) + (1 x 16) = 2 + 16 = 18 u."
  },
  {
    "question": "The molecular mass of CO2 is (C = 12 u, O = 16 u):",
    "options": [
      "28 u",
      "32 u",
      "44 u",
      "40 u"
    ],
    "correct": 2,
    "explanation": "Molecular mass of CO2 = (1 x 12) + (2 x 16) = 12 + 32 = 44 u."
  },
  {
    "question": "An ion is formed when an atom:",
    "options": [
      "Shares electrons",
      "Gains or loses electrons",
      "Gains or loses protons",
      "Splits into smaller atoms"
    ],
    "correct": 1,
    "explanation": "An ion is a charged particle formed when an atom gains electrons (becoming a negative ion or anion) or loses electrons (becoming a positive ion or cation)."
  },
  {
    "question": "A positively charged ion is called a:",
    "options": [
      "Anion",
      "Cation",
      "Molecule",
      "Radical"
    ],
    "correct": 1,
    "explanation": "A cation is a positively charged ion formed when an atom loses one or more electrons. For example, Na+ is a sodium cation."
  },
  {
    "question": "A negatively charged ion is called an:",
    "options": [
      "Cation",
      "Anion",
      "Isotope",
      "Neutron"
    ],
    "correct": 1,
    "explanation": "An anion is a negatively charged ion formed when an atom gains one or more electrons. For example, Cl⁻ is a chloride anion."
  },
  {
    "question": "The chemical formula of sodium chloride is:",
    "options": [
      "NaCl2",
      "Na2Cl",
      "NaCl",
      "Na2Cl2"
    ],
    "correct": 2,
    "explanation": "Sodium (Na) has valency 1 and chlorine (Cl) has valency 1. They combine in a 1:1 ratio, giving the formula NaCl."
  },
  {
    "question": "The formula mass of NaCl is (Na = 23 u, Cl = 35.5 u):",
    "options": [
      "58.5 u",
      "57.5 u",
      "59.5 u",
      "56.5 u"
    ],
    "correct": 0,
    "explanation": "Formula mass of NaCl = 23 + 35.5 = 58.5 u. For ionic compounds we use formula mass instead of molecular mass."
  },
  {
    "question": "Which of the following represents a diatomic molecule?",
    "options": [
      "He",
      "O2",
      "O3",
      "Ne"
    ],
    "correct": 1,
    "explanation": "O2 (oxygen gas) is a diatomic molecule consisting of two oxygen atoms bonded together. Helium (He) and neon (Ne) are monatomic, and ozone (O3) is triatomic."
  },
  {
    "question": "The number of moles in 36 g of water (H2O, molar mass = 18 g/mol) is:",
    "options": [
      "1",
      "2",
      "3",
      "0.5"
    ],
    "correct": 1,
    "explanation": "Number of moles = mass / molar mass = 36 g / 18 g/mol = 2 moles."
  },
  {
    "question": "The chemical formula of calcium oxide is CaO. The valency of calcium is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "explanation": "In CaO, oxygen has valency 2. Since calcium and oxygen combine in a 1:1 ratio, calcium must also have valency 2."
  },
  {
    "question": "Polyatomic ions are:",
    "options": [
      "Single atoms with a charge",
      "Groups of atoms carrying a charge",
      "Neutral molecules",
      "Atoms without electrons"
    ],
    "correct": 1,
    "explanation": "Polyatomic ions are groups of atoms that carry a net charge and act as a single unit in chemical reactions. Examples include SO4²⁻ (sulphate), NH4+ (ammonium), and CO3²⁻ (carbonate)."
  },
  {
    "question": "The chemical formula of aluminium oxide is:",
    "options": [
      "AlO",
      "Al2O3",
      "Al3O2",
      "AlO3"
    ],
    "correct": 1,
    "explanation": "Aluminium has valency 3 and oxygen has valency 2. By cross-multiplying valencies: Al2O3. This gives 2 aluminium atoms and 3 oxygen atoms."
  },
  {
    "question": "The number of atoms in 1 mole of helium gas is:",
    "options": [
      "6.022 x 10²³",
      "12.044 x 10²³",
      "3.011 x 10²³",
      "1 x 10²³"
    ],
    "correct": 0,
    "explanation": "Helium is a monatomic gas, so 1 mole of helium contains 6.022 x 10²³ atoms (Avogadro's number)."
  },
  {
    "question": "The mass of 1 mole of oxygen gas (O2) is:",
    "options": [
      "16 g",
      "32 g",
      "48 g",
      "8 g"
    ],
    "correct": 1,
    "explanation": "Oxygen gas exists as O2 molecules. Molar mass of O2 = 2 x 16 = 32 g/mol. So 1 mole of O2 has a mass of 32 g."
  },
  {
    "question": "The number of molecules in 2 moles of water is:",
    "options": [
      "6.022 x 10²³",
      "12.044 x 10²³",
      "3.011 x 10²³",
      "18.066 x 10²³"
    ],
    "correct": 1,
    "explanation": "Number of molecules = number of moles x Avogadro's number = 2 x 6.022 x 10²³ = 12.044 x 10²³ molecules."
  },
  {
    "question": "The molecular formula of glucose is C6H12O6. The molecular mass is (C=12, H=1, O=16):",
    "options": [
      "160 u",
      "170 u",
      "180 u",
      "190 u"
    ],
    "correct": 2,
    "explanation": "Molecular mass of C6H12O6 = (6 x 12) + (12 x 1) + (6 x 16) = 72 + 12 + 96 = 180 u."
  }
]

export default questions
