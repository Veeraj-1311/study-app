const questions = [
  {
    "question": "Financial literacy means:",
    "options": [
      "Being able to read financial newspapers",
      "Having the knowledge and skills to make informed financial decisions",
      "Being very wealthy",
      "Working in a bank"
    ],
    "correct": 1,
    "explanation": "Financial literacy is the ability to understand and effectively use financial skills including personal finance, budgeting, saving, investing, and managing debt."
  },
  {
    "question": "A budget is:",
    "options": [
      "A list of things to buy",
      "A plan for managing income and expenses over a period of time",
      "A bank account",
      "A type of loan"
    ],
    "correct": 1,
    "explanation": "A budget is a financial plan that estimates income and expenses over a specific period, helping individuals or organisations manage their money effectively."
  },
  {
    "question": "The primary purpose of saving money is to:",
    "options": [
      "Show off wealth",
      "Set aside money for future needs, emergencies, and goals",
      "Avoid spending completely",
      "Hide money from the government"
    ],
    "correct": 1,
    "explanation": "Saving money helps meet future financial needs, build an emergency fund, achieve financial goals, and provide financial security."
  },
  {
    "question": "A savings account in a bank:",
    "options": [
      "Does not earn any interest",
      "Earns interest on the deposited amount",
      "Charges fees for keeping money",
      "Is only for businesses"
    ],
    "correct": 1,
    "explanation": "A savings account earns interest on the money deposited, though the interest rate may be relatively low compared to other investment options."
  },
  {
    "question": "Compound interest means:",
    "options": [
      "Interest earned only on the principal amount",
      "Interest earned on both the principal and the accumulated interest",
      "No interest at all",
      "Interest that decreases over time"
    ],
    "correct": 1,
    "explanation": "Compound interest is calculated on both the initial principal and the accumulated interest from previous periods, making money grow faster over time."
  },
  {
    "question": "Which of the following is a need rather than a want?",
    "options": [
      "Latest smartphone",
      "Basic nutritious food",
      "Designer clothing",
      "Gaming console"
    ],
    "correct": 1,
    "explanation": "Basic nutritious food is a need essential for survival, while the latest smartphone, designer clothing, and gaming consoles are wants."
  },
  {
    "question": "A fixed deposit (FD) in a bank:",
    "options": [
      "Can be withdrawn at any time without penalty",
      "Locks money for a fixed period at a higher interest rate than a savings account",
      "Earns no interest",
      "Is the same as a current account"
    ],
    "correct": 1,
    "explanation": "A fixed deposit locks money for a predetermined period at a higher interest rate than a regular savings account. Early withdrawal may attract a penalty."
  },
  {
    "question": "Insurance is important because it:",
    "options": [
      "Makes you wealthy",
      "Provides financial protection against unforeseen risks and losses",
      "Is a way to avoid taxes",
      "Is required only for rich people"
    ],
    "correct": 1,
    "explanation": "Insurance provides financial protection against unforeseen events like illness, accidents, or property damage by transferring the financial risk to an insurance company."
  },
  {
    "question": "The Reserve Bank of India (RBI) is:",
    "options": [
      "A private bank",
      "The central bank of India that regulates the banking system",
      "A foreign bank",
      "A state government bank"
    ],
    "correct": 1,
    "explanation": "The RBI is India's central bank, responsible for regulating the banking system, controlling monetary policy, issuing currency, and maintaining financial stability."
  },
  {
    "question": "UPI stands for:",
    "options": [
      "Universal Payment Interface",
      "Unified Payments Interface",
      "United Payment Integration",
      "Unified Price Index"
    ],
    "correct": 1,
    "explanation": "UPI stands for Unified Payments Interface, a real-time payment system developed by NPCI that enables instant money transfer between bank accounts via mobile phones."
  },
  {
    "question": "A debit card allows you to:",
    "options": [
      "Borrow money from the bank",
      "Spend money directly from your bank account",
      "Get unlimited credit",
      "Withdraw money without having an account"
    ],
    "correct": 1,
    "explanation": "A debit card allows you to spend money directly from your bank account. The amount is immediately deducted from your account balance."
  },
  {
    "question": "A credit card allows you to:",
    "options": [
      "Only withdraw cash",
      "Buy now and pay later, essentially borrowing money from the bank",
      "Only check your balance",
      "Only save money"
    ],
    "correct": 1,
    "explanation": "A credit card allows you to make purchases on credit (buy now, pay later). The bank lends you the money, which you must repay, often with interest if not paid in full."
  },
  {
    "question": "The risk of using a credit card irresponsibly includes:",
    "options": [
      "Earning too much interest",
      "Accumulating debt due to high interest rates on unpaid balances",
      "Having too much savings",
      "Getting free money"
    ],
    "correct": 1,
    "explanation": "Irresponsible use of credit cards can lead to accumulating debt due to high interest rates on unpaid balances, leading to a cycle of debt."
  },
  {
    "question": "An emergency fund should ideally cover:",
    "options": [
      "One week of expenses",
      "3-6 months of living expenses",
      "Only one month of rent",
      "Only food expenses for a week"
    ],
    "correct": 1,
    "explanation": "Financial experts recommend an emergency fund covering 3-6 months of living expenses to handle unexpected events like job loss, medical emergencies, or repairs."
  },
  {
    "question": "Inflation affects savings by:",
    "options": [
      "Increasing the value of money",
      "Reducing the purchasing power of money over time",
      "Having no effect",
      "Making money more valuable"
    ],
    "correct": 1,
    "explanation": "Inflation reduces the purchasing power of money over time, meaning the same amount of money buys fewer goods and services in the future."
  },
  {
    "question": "Diversification in investment means:",
    "options": [
      "Putting all money in one investment",
      "Spreading investments across different types to reduce risk",
      "Avoiding all investments",
      "Only investing in gold"
    ],
    "correct": 1,
    "explanation": "Diversification means spreading investments across different asset types (stocks, bonds, real estate, etc.) to reduce the risk of losing money."
  },
  {
    "question": "A recurring deposit (RD) requires:",
    "options": [
      "A one-time large deposit",
      "Regular monthly deposits of a fixed amount for a set period",
      "No deposits at all",
      "Withdrawals every month"
    ],
    "correct": 1,
    "explanation": "A recurring deposit requires depositing a fixed amount every month for a predetermined period, earning interest similar to fixed deposits."
  },
  {
    "question": "Income tax is:",
    "options": [
      "A tax on goods purchased",
      "A tax levied by the government on individuals' and organisations' earnings",
      "A bank fee",
      "A type of loan"
    ],
    "correct": 1,
    "explanation": "Income tax is a direct tax levied by the government on the income earned by individuals and organisations, used to fund public services and infrastructure."
  },
  {
    "question": "GST (Goods and Services Tax) is:",
    "options": [
      "A direct tax on income",
      "An indirect tax on the supply of goods and services",
      "A bank interest rate",
      "A type of savings scheme"
    ],
    "correct": 1,
    "explanation": "GST is an indirect tax levied on the supply of goods and services in India, replacing multiple earlier indirect taxes with a unified tax system."
  },
  {
    "question": "Online banking fraud can be prevented by:",
    "options": [
      "Sharing passwords with friends",
      "Using strong passwords, enabling two-factor authentication, and not sharing OTPs",
      "Using public Wi-Fi for banking",
      "Clicking on unknown links in emails"
    ],
    "correct": 1,
    "explanation": "Protecting yourself from online banking fraud involves using strong passwords, enabling two-factor authentication, never sharing OTPs, and avoiding suspicious links."
  },
  {
    "question": "A Ponzi scheme is:",
    "options": [
      "A legitimate investment plan",
      "A fraudulent scheme that pays earlier investors using money from newer investors",
      "A government savings plan",
      "A type of mutual fund"
    ],
    "correct": 1,
    "explanation": "A Ponzi scheme is a fraudulent investment scam where returns to existing investors are paid using funds from new investors, rather than from legitimate profits."
  },
  {
    "question": "The rule of 72 helps you estimate:",
    "options": [
      "Your tax liability",
      "How long it takes for an investment to double at a given interest rate",
      "Your monthly expenses",
      "The inflation rate"
    ],
    "correct": 1,
    "explanation": "The rule of 72 is a quick formula: divide 72 by the annual interest rate to estimate the number of years it takes for an investment to double."
  },
  {
    "question": "KYC (Know Your Customer) in banking requires:",
    "options": [
      "No documents",
      "Identity and address verification documents to open an account",
      "Only a phone number",
      "Only an email address"
    ],
    "correct": 1,
    "explanation": "KYC requires customers to provide identity proof (like Aadhaar, PAN) and address proof documents to verify their identity when opening bank accounts."
  },
  {
    "question": "A mutual fund is:",
    "options": [
      "A personal savings account",
      "A pool of money collected from many investors to invest in diversified securities",
      "A government bond only",
      "A type of insurance"
    ],
    "correct": 1,
    "explanation": "A mutual fund pools money from many investors and invests it in a diversified portfolio of stocks, bonds, or other securities, managed by professional fund managers."
  },
  {
    "question": "The best financial habit for a student is to:",
    "options": [
      "Spend everything they receive",
      "Track expenses, save regularly, and distinguish between needs and wants",
      "Borrow money frequently",
      "Never think about money"
    ],
    "correct": 1,
    "explanation": "Good financial habits for students include tracking expenses, saving regularly, distinguishing between needs and wants, and learning about basic financial concepts."
  }
]

export default questions
