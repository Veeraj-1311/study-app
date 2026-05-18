const questions = [
  {
    "question": "Demand in economics refers to:",
    "options": [
      "Just wanting something",
      "The quantity of a good a consumer is willing and able to buy at a given price",
      "Only the supply of goods",
      "Government orders for goods"
    ],
    "correct": 1,
    "explanation": "Demand refers to the quantity of a good or service that consumers are both willing and able to purchase at a given price during a specific period."
  },
  {
    "question": "According to the law of demand, when the price of a good increases:",
    "options": [
      "Demand also increases",
      "Demand decreases",
      "Demand remains the same",
      "Supply decreases"
    ],
    "correct": 1,
    "explanation": "The law of demand states that, all other factors being equal, as the price of a good increases, the quantity demanded decreases, and vice versa."
  },
  {
    "question": "Supply refers to:",
    "options": [
      "How much consumers want",
      "The quantity of a good a producer is willing and able to sell at a given price",
      "Government regulations",
      "The total money in the market"
    ],
    "correct": 1,
    "explanation": "Supply refers to the quantity of a good or service that producers are willing and able to offer for sale at a given price during a specific period."
  },
  {
    "question": "According to the law of supply, when the price of a good increases:",
    "options": [
      "Supply decreases",
      "Supply remains the same",
      "Supply increases",
      "Demand increases"
    ],
    "correct": 2,
    "explanation": "The law of supply states that, all other factors being equal, as the price of a good increases, the quantity supplied also increases, and vice versa."
  },
  {
    "question": "Market equilibrium occurs when:",
    "options": [
      "Demand is greater than supply",
      "Supply is greater than demand",
      "The quantity demanded equals the quantity supplied",
      "The government sets the price"
    ],
    "correct": 2,
    "explanation": "Market equilibrium occurs at the price point where the quantity demanded by consumers equals the quantity supplied by producers."
  },
  {
    "question": "The equilibrium price is also called the:",
    "options": [
      "Maximum price",
      "Minimum price",
      "Market-clearing price",
      "Government price"
    ],
    "correct": 2,
    "explanation": "The equilibrium price is called the market-clearing price because at this price, all goods supplied are purchased, and the market clears."
  },
  {
    "question": "When demand exceeds supply, it creates a:",
    "options": [
      "Surplus",
      "Shortage",
      "Equilibrium",
      "Recession"
    ],
    "correct": 1,
    "explanation": "When demand exceeds supply, it creates a shortage (excess demand), which typically causes prices to rise."
  },
  {
    "question": "When supply exceeds demand, it creates a:",
    "options": [
      "Shortage",
      "Surplus",
      "Equilibrium",
      "Inflation"
    ],
    "correct": 1,
    "explanation": "When supply exceeds demand, it creates a surplus (excess supply), which typically causes prices to fall."
  },
  {
    "question": "Which of the following can cause an increase in demand?",
    "options": [
      "Decrease in consumer income",
      "Increase in the price of the good",
      "Increase in consumer income or preference",
      "Decrease in population"
    ],
    "correct": 2,
    "explanation": "An increase in consumer income or a shift in consumer preference towards a good can cause an increase in demand for that good."
  },
  {
    "question": "A market is:",
    "options": [
      "Only a physical place like a shop",
      "Any arrangement where buyers and sellers come together to exchange goods and services",
      "Only an online platform",
      "Only a government institution"
    ],
    "correct": 1,
    "explanation": "A market is any arrangement or mechanism that brings buyers and sellers together for the exchange of goods and services, whether physical or virtual."
  },
  {
    "question": "Inflation refers to:",
    "options": [
      "A decrease in the general price level",
      "A sustained increase in the general price level",
      "Prices remaining constant",
      "A decrease in production"
    ],
    "correct": 1,
    "explanation": "Inflation is a sustained increase in the general price level of goods and services in an economy over a period of time."
  },
  {
    "question": "Which of the following is a substitute good for tea?",
    "options": [
      "Sugar",
      "Coffee",
      "Milk",
      "A teacup"
    ],
    "correct": 1,
    "explanation": "Coffee is a substitute good for tea because it can be consumed in place of tea. Substitute goods fulfil similar needs."
  },
  {
    "question": "Complementary goods are:",
    "options": [
      "Goods that replace each other",
      "Goods that are used together",
      "Goods that are not related",
      "Goods produced by the government"
    ],
    "correct": 1,
    "explanation": "Complementary goods are products that are typically used together, such as bread and butter, or a phone and a phone case."
  },
  {
    "question": "If the price of petrol increases, the demand for cars is likely to:",
    "options": [
      "Increase",
      "Decrease",
      "Remain the same",
      "Double"
    ],
    "correct": 1,
    "explanation": "Since petrol and cars are complementary goods, an increase in petrol price increases the cost of using a car, likely decreasing the demand for cars."
  },
  {
    "question": "A price ceiling is:",
    "options": [
      "A minimum price set by the government",
      "A maximum price set by the government below the equilibrium",
      "The equilibrium price",
      "The highest price a seller charges"
    ],
    "correct": 1,
    "explanation": "A price ceiling is a maximum price set by the government below the equilibrium price, usually to make essential goods affordable for consumers."
  },
  {
    "question": "A price floor is:",
    "options": [
      "A maximum price set by the government",
      "A minimum price set by the government above the equilibrium",
      "The lowest market price",
      "The cost of production"
    ],
    "correct": 1,
    "explanation": "A price floor is a minimum price set by the government above the equilibrium price, often used to protect producers, like minimum support prices for crops."
  },
  {
    "question": "The Minimum Support Price (MSP) in India is an example of:",
    "options": [
      "Price ceiling",
      "Price floor",
      "Equilibrium price",
      "Market price"
    ],
    "correct": 1,
    "explanation": "MSP is a price floor set by the government to protect farmers by ensuring they receive a minimum guaranteed price for their crops."
  },
  {
    "question": "When the price of a product falls, consumers tend to buy more. This is because of:",
    "options": [
      "The law of supply",
      "The law of demand",
      "Inflation",
      "Government regulation"
    ],
    "correct": 1,
    "explanation": "The law of demand states that when the price of a product falls, consumers tend to buy more of it, showing an inverse relationship between price and demand."
  },
  {
    "question": "Which factor does NOT typically affect the supply of a good?",
    "options": [
      "Cost of production",
      "Technology",
      "Consumer taste",
      "Government policies"
    ],
    "correct": 2,
    "explanation": "Consumer taste affects demand, not supply. Supply is affected by cost of production, technology, government policies, and input prices."
  },
  {
    "question": "Hoarding of essential goods typically leads to:",
    "options": [
      "Decrease in prices",
      "Artificial shortage and price increase",
      "Increase in supply",
      "Market equilibrium"
    ],
    "correct": 1,
    "explanation": "Hoarding creates an artificial shortage by restricting supply, which drives up prices and hurts consumers, especially during emergencies."
  },
  {
    "question": "A monopoly market has:",
    "options": [
      "Many sellers",
      "Only one seller",
      "Only one buyer",
      "Perfect competition"
    ],
    "correct": 1,
    "explanation": "A monopoly market has only one seller who controls the entire supply of a product or service, giving them significant power over pricing."
  },
  {
    "question": "Perfect competition is characterised by:",
    "options": [
      "One dominant seller",
      "Many buyers and sellers with identical products",
      "Government control of all prices",
      "Only two sellers"
    ],
    "correct": 1,
    "explanation": "Perfect competition features many buyers and sellers trading identical products, where no single buyer or seller can influence the market price."
  },
  {
    "question": "The Consumer Price Index (CPI) measures:",
    "options": [
      "Industrial production",
      "Changes in the average price level of consumer goods and services",
      "Stock market performance",
      "Government spending"
    ],
    "correct": 1,
    "explanation": "The Consumer Price Index (CPI) measures changes in the average price level of a basket of consumer goods and services, indicating inflation."
  },
  {
    "question": "Black marketing refers to:",
    "options": [
      "Legal selling of goods",
      "Selling goods at prices higher than the legally permitted price",
      "Selling goods online",
      "Government-controlled selling"
    ],
    "correct": 1,
    "explanation": "Black marketing refers to the illegal practice of selling goods at prices higher than the legally permitted or official price, exploiting shortages."
  },
  {
    "question": "When demand for a product is high but supply is low, the price will:",
    "options": [
      "Decrease",
      "Remain the same",
      "Increase",
      "Become zero"
    ],
    "correct": 2,
    "explanation": "When demand is high and supply is low, competition among buyers pushes the price upward until a new equilibrium is reached."
  }
]

export default questions
