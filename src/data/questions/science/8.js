const questions = [
  {
    "question": "Who proposed the first atomic model, often called the 'plum pudding model'?",
    "options": [
      "Niels Bohr",
      "Ernest Rutherford",
      "J.J. Thomson",
      "John Dalton"
    ],
    "correct": 2,
    "explanation": "J.J. Thomson proposed the plum pudding model in 1904. He suggested the atom is a sphere of positive charge with electrons embedded in it, like plums in a pudding."
  },
  {
    "question": "J.J. Thomson discovered the:",
    "options": [
      "Proton",
      "Neutron",
      "Electron",
      "Nucleus"
    ],
    "correct": 2,
    "explanation": "J.J. Thomson discovered the electron in 1897 through cathode ray experiments. He determined that electrons are negatively charged subatomic particles."
  },
  {
    "question": "Rutherford's gold foil experiment led to the discovery of the:",
    "options": [
      "Electron",
      "Neutron",
      "Nucleus",
      "Proton orbit"
    ],
    "correct": 2,
    "explanation": "Rutherford's alpha particle scattering experiment (gold foil experiment) in 1911 led to the discovery of the atomic nucleus — a small, dense, positively charged centre of the atom."
  },
  {
    "question": "In Rutherford's experiment, most alpha particles:",
    "options": [
      "Were deflected at large angles",
      "Bounced back",
      "Passed straight through the gold foil",
      "Were absorbed by the foil"
    ],
    "correct": 2,
    "explanation": "Most alpha particles passed straight through the gold foil, showing that most of the atom is empty space. Only a very few were deflected or bounced back."
  },
  {
    "question": "According to Rutherford's model, electrons revolve around the nucleus in:",
    "options": [
      "Fixed energy levels",
      "Circular orbits",
      "Random paths",
      "Stationary positions"
    ],
    "correct": 1,
    "explanation": "Rutherford proposed that electrons revolve around the small, dense, positively charged nucleus in circular orbits, similar to planets orbiting the sun."
  },
  {
    "question": "A major limitation of Rutherford's model was that it could not explain:",
    "options": [
      "The existence of the nucleus",
      "Why electrons do not spiral into the nucleus",
      "The positive charge of protons",
      "The mass of the atom"
    ],
    "correct": 1,
    "explanation": "According to classical physics, a revolving charged particle should continuously emit radiation, lose energy, and spiral into the nucleus. Rutherford's model could not explain the stability of the atom."
  },
  {
    "question": "Bohr's model of the atom proposed that electrons move in:",
    "options": [
      "Random orbits",
      "Definite circular orbits called energy levels",
      "Elliptical orbits only",
      "Straight lines"
    ],
    "correct": 1,
    "explanation": "Niels Bohr proposed that electrons revolve around the nucleus in specific circular orbits called energy levels or shells (K, L, M, N...), and each shell has a fixed energy."
  },
  {
    "question": "The maximum number of electrons that can be accommodated in the nth shell is:",
    "options": [
      "2n",
      "n²",
      "2n²",
      "2n + 1"
    ],
    "correct": 2,
    "explanation": "The maximum number of electrons in the nth shell is 2n². So K-shell (n=1) holds 2, L-shell (n=2) holds 8, M-shell (n=3) holds 18, and so on."
  },
  {
    "question": "The atomic number of an element is equal to the number of:",
    "options": [
      "Neutrons",
      "Protons",
      "Electrons and neutrons",
      "Mass number"
    ],
    "correct": 1,
    "explanation": "The atomic number (Z) equals the number of protons in the nucleus. It is also equal to the number of electrons in a neutral atom."
  },
  {
    "question": "The mass number of an atom is the sum of:",
    "options": [
      "Protons and electrons",
      "Protons and neutrons",
      "Neutrons and electrons",
      "All subatomic particles"
    ],
    "correct": 1,
    "explanation": "Mass number (A) = number of protons (Z) + number of neutrons (N). Electrons are not included because their mass is negligible compared to protons and neutrons."
  },
  {
    "question": "An element has atomic number 11 and mass number 23. The number of neutrons is:",
    "options": [
      "11",
      "23",
      "12",
      "34"
    ],
    "correct": 2,
    "explanation": "Number of neutrons = Mass number - Atomic number = 23 - 11 = 12."
  },
  {
    "question": "Isotopes are atoms of the same element that have:",
    "options": [
      "Different atomic numbers",
      "Same mass number but different atomic numbers",
      "Same atomic number but different mass numbers",
      "Different number of electrons"
    ],
    "correct": 2,
    "explanation": "Isotopes have the same atomic number (same number of protons) but different mass numbers (different number of neutrons). For example, hydrogen has three isotopes: protium, deuterium, and tritium."
  },
  {
    "question": "Which subatomic particle has no electric charge?",
    "options": [
      "Proton",
      "Electron",
      "Neutron",
      "Alpha particle"
    ],
    "correct": 2,
    "explanation": "The neutron is electrically neutral (has no charge). Protons are positively charged and electrons are negatively charged."
  },
  {
    "question": "The neutron was discovered by:",
    "options": [
      "J.J. Thomson",
      "Ernest Rutherford",
      "James Chadwick",
      "Niels Bohr"
    ],
    "correct": 2,
    "explanation": "James Chadwick discovered the neutron in 1932. He found that the nucleus contains neutral particles with mass approximately equal to that of protons."
  },
  {
    "question": "The charge on an electron is:",
    "options": [
      "+1.6 x 10⁻¹⁹ C",
      "-1.6 x 10⁻¹⁹ C",
      "Zero",
      "+1 C"
    ],
    "correct": 1,
    "explanation": "The charge on an electron is -1.6 x 10⁻¹⁹ coulombs. This is the fundamental unit of negative charge."
  },
  {
    "question": "The valence shell is the:",
    "options": [
      "Innermost shell of an atom",
      "Shell closest to the nucleus",
      "Outermost shell of an atom",
      "Shell with the most electrons"
    ],
    "correct": 2,
    "explanation": "The valence shell is the outermost electron shell of an atom. The electrons in this shell, called valence electrons, determine the chemical properties and bonding behaviour of the element."
  },
  {
    "question": "An atom with 2 electrons in K-shell, 8 in L-shell, and 1 in M-shell has a valency of:",
    "options": [
      "2",
      "8",
      "1",
      "11"
    ],
    "correct": 2,
    "explanation": "Valency is determined by the number of electrons in the outermost shell (valence shell). This atom has 1 electron in its outermost M-shell, so its valency is 1."
  },
  {
    "question": "Isobars are atoms of different elements that have:",
    "options": [
      "Same atomic number",
      "Same mass number",
      "Same number of neutrons",
      "Same number of electrons"
    ],
    "correct": 1,
    "explanation": "Isobars are atoms of different elements that have the same mass number but different atomic numbers. For example, calcium-40 and argon-40 are isobars."
  },
  {
    "question": "The nucleus of an atom contains:",
    "options": [
      "Only protons",
      "Only neutrons",
      "Protons and neutrons",
      "Protons and electrons"
    ],
    "correct": 2,
    "explanation": "The nucleus contains protons (positively charged) and neutrons (neutral). Together, they are called nucleons. Electrons orbit outside the nucleus."
  },
  {
    "question": "Which of the following elements has isotopes used in nuclear power plants?",
    "options": [
      "Carbon",
      "Uranium",
      "Oxygen",
      "Nitrogen"
    ],
    "correct": 1,
    "explanation": "Uranium-235 is the isotope used as fuel in nuclear power plants. It undergoes nuclear fission, releasing a large amount of energy."
  },
  {
    "question": "An atom is electrically neutral because:",
    "options": [
      "It has no charged particles",
      "The number of protons equals the number of neutrons",
      "The number of protons equals the number of electrons",
      "Neutrons cancel out the charge"
    ],
    "correct": 2,
    "explanation": "An atom is electrically neutral because the number of positively charged protons equals the number of negatively charged electrons, so the charges balance out."
  },
  {
    "question": "The K shell can hold a maximum of:",
    "options": [
      "2 electrons",
      "8 electrons",
      "18 electrons",
      "32 electrons"
    ],
    "correct": 0,
    "explanation": "Using the formula 2n², where n=1 for K shell: 2(1)² = 2. The K shell (innermost shell) can hold a maximum of 2 electrons."
  },
  {
    "question": "The L shell can hold a maximum of:",
    "options": [
      "2 electrons",
      "8 electrons",
      "18 electrons",
      "32 electrons"
    ],
    "correct": 1,
    "explanation": "Using the formula 2n², where n=2 for L shell: 2(2)² = 8. The L shell can hold a maximum of 8 electrons."
  },
  {
    "question": "Dalton's atomic theory stated that atoms:",
    "options": [
      "Can be divided into smaller particles",
      "Of the same element are identical in mass and properties",
      "Are made of protons and neutrons",
      "Can be created and destroyed in reactions"
    ],
    "correct": 1,
    "explanation": "Dalton proposed that all atoms of a given element are identical in mass and properties, atoms of different elements differ in mass and properties, and atoms cannot be created or destroyed in chemical reactions."
  },
  {
    "question": "An element has electronic configuration 2, 8, 7. Its valency is:",
    "options": [
      "7",
      "1",
      "8",
      "2"
    ],
    "correct": 1,
    "explanation": "This atom has 7 electrons in its outermost shell. Since it needs only 1 more electron to complete the octet (8 electrons), its valency is 8 - 7 = 1."
  }
]

export default questions
