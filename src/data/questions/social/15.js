const questions = [
  {
    "question": "An entrepreneur is a person who:",
    "options": [
      "Only works for a salary",
      "Starts a business, takes risks, and innovates to create value",
      "Only invests money in banks",
      "Only buys products"
    ],
    "correct": 1,
    "explanation": "An entrepreneur is someone who identifies opportunities, starts a business venture, takes financial risks, and innovates to create products, services, or value."
  },
  {
    "question": "Innovation in business refers to:",
    "options": [
      "Copying existing products",
      "Introducing new ideas, products, methods, or processes",
      "Avoiding all change",
      "Only reducing costs"
    ],
    "correct": 1,
    "explanation": "Innovation means introducing new or significantly improved ideas, products, services, methods, or processes that create value for customers and society."
  },
  {
    "question": "A startup is typically:",
    "options": [
      "A large established corporation",
      "A newly established business venture, often technology-driven, designed to grow rapidly",
      "A government organisation",
      "A non-profit charity"
    ],
    "correct": 1,
    "explanation": "A startup is a newly established business, often driven by technology and innovation, designed to grow rapidly and solve problems in new ways."
  },
  {
    "question": "Which of the following is a quality of a successful entrepreneur?",
    "options": [
      "Fear of taking risks",
      "Creativity and willingness to take calculated risks",
      "Avoiding all problems",
      "Following others blindly"
    ],
    "correct": 1,
    "explanation": "Successful entrepreneurs are creative, willing to take calculated risks, resilient in the face of failure, and able to identify opportunities."
  },
  {
    "question": "A business plan is:",
    "options": [
      "Not necessary for any business",
      "A document outlining business goals, strategies, market analysis, and financial projections",
      "Only needed for large companies",
      "A government regulation"
    ],
    "correct": 1,
    "explanation": "A business plan is a document that outlines the business idea, goals, target market, marketing strategy, financial projections, and operational plans."
  },
  {
    "question": "The 'Startup India' initiative was launched by the Government of India to:",
    "options": [
      "Discourage entrepreneurship",
      "Promote and support startups through policies, funding, and simplification of regulations",
      "Only support large corporations",
      "Increase taxes on small businesses"
    ],
    "correct": 1,
    "explanation": "Startup India was launched in 2016 to build a strong ecosystem for nurturing innovation and startups through policy support, funding, and reduced regulatory burden."
  },
  {
    "question": "Venture capital is:",
    "options": [
      "A loan from a bank",
      "Funding provided by investors to startups and small businesses with high growth potential",
      "Government grant",
      "Personal savings only"
    ],
    "correct": 1,
    "explanation": "Venture capital is funding provided by investors (venture capitalists) to startups and early-stage companies that show high growth potential, in exchange for equity."
  },
  {
    "question": "A business idea should solve:",
    "options": [
      "No problems",
      "A problem or fulfil an unmet need in the market",
      "Only the entrepreneur's personal problems",
      "Problems that don't exist"
    ],
    "correct": 1,
    "explanation": "A good business idea should identify and solve a real problem or fulfil an unmet need in the market, creating value for customers."
  },
  {
    "question": "Market research is important for a startup because it helps to:",
    "options": [
      "Ignore customer preferences",
      "Understand customer needs, competition, and market trends",
      "Avoid all planning",
      "Copy competitors exactly"
    ],
    "correct": 1,
    "explanation": "Market research helps entrepreneurs understand customer needs and preferences, assess competition, identify market trends, and make informed business decisions."
  },
  {
    "question": "The term 'bootstrapping' in startups means:",
    "options": [
      "Getting large bank loans",
      "Starting and growing a business using personal funds and revenue without external investment",
      "Receiving government funding",
      "Selling shares on the stock market"
    ],
    "correct": 1,
    "explanation": "Bootstrapping means starting and growing a business using personal savings and the company's own revenue, without relying on external investors or loans."
  },
  {
    "question": "An MVP (Minimum Viable Product) is:",
    "options": [
      "The final, perfect version of a product",
      "A basic version of a product with core features to test the idea with early customers",
      "A product that is too expensive to make",
      "A government-approved product"
    ],
    "correct": 1,
    "explanation": "An MVP is a basic version of a product with just enough features to test the business idea with early customers and gather feedback for improvement."
  },
  {
    "question": "Social entrepreneurship focuses on:",
    "options": [
      "Only making maximum profit",
      "Creating business solutions to social, cultural, or environmental problems",
      "Avoiding social issues",
      "Only government contracts"
    ],
    "correct": 1,
    "explanation": "Social entrepreneurship uses business principles and innovation to create solutions for social, cultural, or environmental problems while being financially sustainable."
  },
  {
    "question": "Intellectual property rights (IPR) protect:",
    "options": [
      "Physical property like land",
      "Creations of the mind such as inventions, designs, and brand names",
      "Only government property",
      "Only agricultural products"
    ],
    "correct": 1,
    "explanation": "IPR protects creations of the mind including inventions (patents), literary/artistic works (copyrights), designs, symbols, and brand names (trademarks)."
  },
  {
    "question": "A patent protects:",
    "options": [
      "A company's brand name",
      "An invention or new process from being copied",
      "A book or song",
      "A website design"
    ],
    "correct": 1,
    "explanation": "A patent protects an invention or new process, giving the inventor exclusive rights to make, use, or sell the invention for a specified period."
  },
  {
    "question": "A trademark protects:",
    "options": [
      "An invention",
      "A brand name, logo, or symbol that distinguishes a product or company",
      "A software code",
      "A manufacturing process"
    ],
    "correct": 1,
    "explanation": "A trademark protects brand names, logos, symbols, or slogans that distinguish a company's products or services from others in the market."
  },
  {
    "question": "Crowdfunding is:",
    "options": [
      "Funding from one large investor",
      "Raising small amounts of money from a large number of people, usually via the internet",
      "Government funding",
      "Bank loans"
    ],
    "correct": 1,
    "explanation": "Crowdfunding involves raising small amounts of money from a large number of people, typically through online platforms, to fund a business idea or project."
  },
  {
    "question": "A business incubator provides:",
    "options": [
      "Nothing useful to startups",
      "Support services like workspace, mentoring, and networking to early-stage startups",
      "Only financial support",
      "Only legal advice"
    ],
    "correct": 1,
    "explanation": "Business incubators provide startups with support services including workspace, mentoring, training, networking opportunities, and sometimes funding."
  },
  {
    "question": "The break-even point in business is when:",
    "options": [
      "The business makes a huge profit",
      "Total revenue equals total costs, and the business neither profits nor loses",
      "The business closes down",
      "The business first starts"
    ],
    "correct": 1,
    "explanation": "The break-even point is when a business's total revenue equals its total costs, meaning it is neither making a profit nor incurring a loss."
  },
  {
    "question": "E-commerce refers to:",
    "options": [
      "Only physical stores",
      "Buying and selling goods and services over the internet",
      "Government commerce only",
      "Only wholesale trade"
    ],
    "correct": 1,
    "explanation": "E-commerce refers to commercial transactions conducted electronically over the internet, including online shopping, digital payments, and online services."
  },
  {
    "question": "Which of the following is an example of a successful Indian startup?",
    "options": [
      "Tata Steel",
      "Flipkart",
      "Indian Railways",
      "Reserve Bank of India"
    ],
    "correct": 1,
    "explanation": "Flipkart is a well-known example of a successful Indian startup, founded in 2007 as an online bookstore and growing into one of India's largest e-commerce platforms."
  },
  {
    "question": "Profit in a business is calculated as:",
    "options": [
      "Total revenue minus total costs",
      "Total costs minus total revenue",
      "Total revenue plus total costs",
      "Total revenue divided by total costs"
    ],
    "correct": 0,
    "explanation": "Profit is calculated by subtracting total costs (expenses) from total revenue (income). If revenue exceeds costs, the business makes a profit."
  },
  {
    "question": "Risk-taking is important in entrepreneurship because:",
    "options": [
      "It always guarantees success",
      "Starting something new inherently involves uncertainty and potential for failure",
      "There is no risk in business",
      "Only failed businesses take risks"
    ],
    "correct": 1,
    "explanation": "Risk-taking is inherent in entrepreneurship because starting a new venture involves uncertainty. Successful entrepreneurs take calculated risks after careful analysis."
  },
  {
    "question": "A franchise business model involves:",
    "options": [
      "Starting an entirely new concept",
      "Buying the right to use an established brand's name and business model",
      "Only government businesses",
      "Only online businesses"
    ],
    "correct": 1,
    "explanation": "A franchise involves buying the right to operate a business using an established brand's name, products, and business model, such as McDonald's or Subway."
  },
  {
    "question": "Self-employment means:",
    "options": [
      "Working for a large company",
      "Working for oneself by running one's own business or profession",
      "Being unemployed",
      "Working for the government"
    ],
    "correct": 1,
    "explanation": "Self-employment means working for oneself rather than being employed by someone else, by running one's own business, trade, or profession."
  },
  {
    "question": "Entrepreneurship contributes to economic development by:",
    "options": [
      "Increasing unemployment",
      "Creating jobs, driving innovation, generating wealth, and boosting economic growth",
      "Reducing production",
      "Increasing imports only"
    ],
    "correct": 1,
    "explanation": "Entrepreneurship drives economic development by creating employment, fostering innovation, generating wealth, increasing competition, and contributing to GDP growth."
  }
]

export default questions
