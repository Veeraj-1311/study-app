const questions = [
  {
    "question": "Reproduction is the biological process by which organisms:",
    "options": [
      "Grow in size",
      "Produce offspring of their own kind",
      "Obtain energy from food",
      "Respond to stimuli"
    ],
    "correct": 1,
    "explanation": "Reproduction is the biological process by which organisms produce new individuals (offspring) of their own kind, ensuring the continuation of the species."
  },
  {
    "question": "Asexual reproduction involves:",
    "options": [
      "Two parents",
      "Fusion of gametes",
      "A single parent",
      "Cross-pollination"
    ],
    "correct": 2,
    "explanation": "Asexual reproduction involves only one parent and does not require the fusion of gametes. The offspring are genetically identical to the parent (clones)."
  },
  {
    "question": "Binary fission is a type of asexual reproduction seen in:",
    "options": [
      "Humans",
      "Amoeba",
      "Flowering plants",
      "Birds"
    ],
    "correct": 1,
    "explanation": "Binary fission occurs in unicellular organisms like Amoeba and bacteria. The parent cell divides into two equal daughter cells."
  },
  {
    "question": "Budding is a mode of reproduction found in:",
    "options": [
      "Amoeba",
      "Hydra and yeast",
      "Fern",
      "Mango tree"
    ],
    "correct": 1,
    "explanation": "Budding occurs in organisms like Hydra and yeast. A small outgrowth (bud) develops on the parent's body, grows, and eventually detaches to form a new organism."
  },
  {
    "question": "Spore formation is a method of asexual reproduction in:",
    "options": [
      "Amoeba",
      "Hydra",
      "Fungi like bread mould (Rhizopus)",
      "Earthworm"
    ],
    "correct": 2,
    "explanation": "Fungi like bread mould (Rhizopus) reproduce asexually through spore formation. Spores are tiny, resistant structures that germinate into new organisms under favourable conditions."
  },
  {
    "question": "Vegetative propagation is a type of asexual reproduction in:",
    "options": [
      "Animals only",
      "Plants",
      "Bacteria",
      "Fungi only"
    ],
    "correct": 1,
    "explanation": "Vegetative propagation is a method of asexual reproduction in plants where new plants grow from vegetative parts like roots, stems, or leaves."
  },
  {
    "question": "Which of the following plants reproduces by vegetative propagation through leaves?",
    "options": [
      "Potato",
      "Bryophyllum",
      "Ginger",
      "Onion"
    ],
    "correct": 1,
    "explanation": "Bryophyllum (also called Kalanchoe) reproduces through leaf margins. Small plantlets develop from the notches on the leaf edges and fall to grow into new plants."
  },
  {
    "question": "Potato reproduces vegetatively through:",
    "options": [
      "Seeds",
      "Eyes (buds) on tubers",
      "Leaf cuttings",
      "Root tips"
    ],
    "correct": 1,
    "explanation": "Potatoes reproduce vegetatively through the eyes (buds) present on the tuber surface. Each eye can sprout and grow into a new potato plant."
  },
  {
    "question": "Fragmentation is a mode of reproduction seen in:",
    "options": [
      "Spirogyra",
      "Humans",
      "Mango tree",
      "Amoeba"
    ],
    "correct": 0,
    "explanation": "Fragmentation occurs in organisms like Spirogyra (a filamentous alga). The organism breaks into fragments, and each fragment grows into a new individual."
  },
  {
    "question": "Regeneration is the ability to:",
    "options": [
      "Reproduce by seeds",
      "Grow back lost or damaged body parts",
      "Undergo binary fission",
      "Produce spores"
    ],
    "correct": 1,
    "explanation": "Regeneration is the ability of certain organisms to regrow lost or damaged body parts. In some organisms like Planaria and Hydra, cut pieces can regenerate into complete organisms."
  },
  {
    "question": "Sexual reproduction involves the fusion of:",
    "options": [
      "Two somatic cells",
      "Male and female gametes",
      "Two identical cells",
      "Spores"
    ],
    "correct": 1,
    "explanation": "Sexual reproduction involves the fusion of male gamete (sperm) and female gamete (egg/ovum) to form a zygote. This process is called fertilisation."
  },
  {
    "question": "The male reproductive part of a flower is called the:",
    "options": [
      "Pistil",
      "Stamen",
      "Sepal",
      "Petal"
    ],
    "correct": 1,
    "explanation": "The stamen is the male reproductive part of a flower. It consists of the anther (which produces pollen grains containing male gametes) and the filament."
  },
  {
    "question": "The female reproductive part of a flower is called the:",
    "options": [
      "Stamen",
      "Sepal",
      "Pistil (carpel)",
      "Petal"
    ],
    "correct": 2,
    "explanation": "The pistil (or carpel) is the female reproductive part. It consists of the stigma (receives pollen), style (tube connecting stigma to ovary), and ovary (contains ovules)."
  },
  {
    "question": "Pollination is the transfer of pollen grains from:",
    "options": [
      "Ovary to stigma",
      "Anther to stigma",
      "Stigma to anther",
      "Ovule to anther"
    ],
    "correct": 1,
    "explanation": "Pollination is the transfer of pollen grains from the anther (male part) to the stigma (female part) of a flower. It can occur by wind, water, insects, or other agents."
  },
  {
    "question": "Self-pollination occurs when pollen is transferred:",
    "options": [
      "From one flower to another on a different plant",
      "From anther to stigma of the same flower or another flower on the same plant",
      "Only by wind",
      "Only by insects"
    ],
    "correct": 1,
    "explanation": "Self-pollination occurs when pollen from the anther lands on the stigma of the same flower or another flower on the same plant."
  },
  {
    "question": "Cross-pollination occurs when pollen is transferred:",
    "options": [
      "Within the same flower",
      "From one flower to another on a different plant of the same species",
      "Between different species",
      "Without any agent"
    ],
    "correct": 1,
    "explanation": "Cross-pollination is the transfer of pollen from the anther of a flower to the stigma of a flower on a different plant of the same species. It promotes genetic diversity."
  },
  {
    "question": "After fertilisation, the ovule develops into a:",
    "options": [
      "Fruit",
      "Seed",
      "Flower",
      "Pollen grain"
    ],
    "correct": 1,
    "explanation": "After fertilisation, the ovule develops into a seed. The seed contains the embryo, which can grow into a new plant."
  },
  {
    "question": "After fertilisation, the ovary develops into a:",
    "options": [
      "Seed",
      "Fruit",
      "Leaf",
      "Root"
    ],
    "correct": 1,
    "explanation": "After fertilisation, the ovary wall matures and develops into a fruit, which encloses and protects the seeds."
  },
  {
    "question": "The zygote is formed by the fusion of:",
    "options": [
      "Two sperm cells",
      "Two egg cells",
      "Sperm and egg",
      "Pollen and ovary"
    ],
    "correct": 2,
    "explanation": "A zygote is formed by the fusion (fertilisation) of the male gamete (sperm) and the female gamete (egg/ovum). It is the first cell of the new organism."
  },
  {
    "question": "Which of the following organisms can reproduce both asexually and sexually?",
    "options": [
      "Humans",
      "Hydra",
      "Birds",
      "Fish"
    ],
    "correct": 1,
    "explanation": "Hydra can reproduce both asexually (by budding) and sexually (by producing gametes). Many organisms switch between modes depending on conditions."
  },
  {
    "question": "In humans, the male gamete is called:",
    "options": [
      "Ovum",
      "Sperm",
      "Zygote",
      "Embryo"
    ],
    "correct": 1,
    "explanation": "The male gamete in humans is the sperm cell, produced in the testes. It is small, motile, and has a tail for swimming to the egg."
  },
  {
    "question": "In humans, the female gamete is called:",
    "options": [
      "Sperm",
      "Ovum (egg)",
      "Zygote",
      "Embryo"
    ],
    "correct": 1,
    "explanation": "The female gamete in humans is the ovum (egg cell), produced in the ovaries. It is larger than the sperm and non-motile."
  },
  {
    "question": "An advantage of sexual reproduction over asexual reproduction is:",
    "options": [
      "It is faster",
      "It requires only one parent",
      "It produces genetic variation in offspring",
      "Offspring are identical to parents"
    ],
    "correct": 2,
    "explanation": "Sexual reproduction produces genetic variation because offspring receive genetic material from two parents. This variation helps species adapt to changing environments."
  },
  {
    "question": "Grafting is an artificial method of:",
    "options": [
      "Sexual reproduction",
      "Vegetative propagation",
      "Spore formation",
      "Binary fission"
    ],
    "correct": 1,
    "explanation": "Grafting is an artificial method of vegetative propagation where a part (scion) of one plant is joined to the stem (stock) of another plant. It combines desirable traits of both plants."
  },
  {
    "question": "Which of the following is an agent of pollination?",
    "options": [
      "Gravity",
      "Wind",
      "Soil",
      "Roots"
    ],
    "correct": 1,
    "explanation": "Wind is a common agent of pollination (anemophily). Other agents include insects (entomophily), birds (ornithophily), water (hydrophily), and bats."
  }
]

export default questions
