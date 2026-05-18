const questions = [
  {
    "question": "The first step in the AI project cycle is:",
    "options": [
      "Data collection",
      "Problem scoping",
      "Model building",
      "Testing"
    ],
    "correct": 1,
    "explanation": "Problem scoping is the first step where you define the problem AI needs to solve."
  },
  {
    "question": "The AI project cycle includes:",
    "options": [
      "Only coding",
      "Problem scoping, data acquisition, data exploration, modelling, and evaluation",
      "Only testing",
      "Only design"
    ],
    "correct": 1,
    "explanation": "The AI project cycle includes problem scoping, data acquisition, data exploration, modelling, and evaluation."
  },
  {
    "question": "Data acquisition means:",
    "options": [
      "Deleting data",
      "Collecting relevant data for the AI project",
      "Ignoring data",
      "Hiding data"
    ],
    "correct": 1,
    "explanation": "Data acquisition involves gathering relevant, quality data needed to train the AI model."
  },
  {
    "question": "Data exploration involves:",
    "options": [
      "Ignoring data",
      "Analysing and understanding collected data",
      "Deleting data",
      "Creating data"
    ],
    "correct": 1,
    "explanation": "Data exploration involves analysing data to find patterns, outliers, and understand its structure."
  },
  {
    "question": "In the AI project cycle, 'modelling' refers to:",
    "options": [
      "Fashion modelling",
      "Building and training the AI algorithm",
      "3D modelling",
      "Role modelling"
    ],
    "correct": 1,
    "explanation": "Modelling involves selecting and training an appropriate AI algorithm on the prepared data."
  },
  {
    "question": "Evaluation in the AI project cycle tests:",
    "options": [
      "The project budget",
      "How well the AI model performs on new data",
      "The team size",
      "The office space"
    ],
    "correct": 1,
    "explanation": "Evaluation measures how accurately and effectively the AI model performs on unseen data."
  },
  {
    "question": "A problem statement in an AI project should be:",
    "options": [
      "Vague",
      "Clear, specific, and well-defined",
      "Very long",
      "Unrelated to data"
    ],
    "correct": 1,
    "explanation": "A good problem statement is clear, specific, and defines exactly what the AI needs to accomplish."
  },
  {
    "question": "Why is data quality important in AI projects?",
    "options": [
      "It is not important",
      "Poor data leads to poor AI performance (garbage in, garbage out)",
      "Only quantity matters",
      "AI can work without data"
    ],
    "correct": 1,
    "explanation": "The quality of data directly affects AI performance - poor data leads to poor results."
  },
  {
    "question": "Iterating in the AI project cycle means:",
    "options": [
      "Doing everything once",
      "Repeating and refining steps to improve results",
      "Giving up",
      "Skipping steps"
    ],
    "correct": 1,
    "explanation": "Iteration involves repeating steps to refine and improve the AI model's performance."
  },
  {
    "question": "Which is NOT a step in the AI project cycle?",
    "options": [
      "Problem scoping",
      "Data acquisition",
      "Social media posting",
      "Evaluation"
    ],
    "correct": 2,
    "explanation": "Social media posting is not part of the AI project cycle."
  },
  {
    "question": "A good AI project should solve a:",
    "options": [
      "Vague and broad problem",
      "Clearly defined and specific problem",
      "Problem that has no data",
      "Problem without any stakeholders"
    ],
    "correct": 1,
    "explanation": "A successful AI project starts with a clearly defined, specific, and achievable problem statement."
  },
  {
    "question": "Data can be collected through:",
    "options": [
      "Only surveys",
      "Surveys, sensors, web scraping, databases, and APIs",
      "Only manual observation",
      "Only buying from companies"
    ],
    "correct": 1,
    "explanation": "Data can be collected through various methods including surveys, sensors, web scraping, existing databases, and APIs."
  },
  {
    "question": "Bias in AI training data can lead to:",
    "options": [
      "Better results",
      "Unfair and discriminatory outcomes",
      "Faster processing",
      "More accurate predictions always"
    ],
    "correct": 1,
    "explanation": "Biased training data causes the AI model to produce unfair, discriminatory, or inaccurate results."
  },
  {
    "question": "The 4Ws framework in problem scoping stands for:",
    "options": [
      "Who, What, Where, When",
      "Why, What, Where, Who",
      "Who, What, Why, When",
      "What, Where, Which, Why"
    ],
    "correct": 0,
    "explanation": "The 4Ws (Who, What, Where, When) help define the problem clearly during the problem scoping phase."
  },
  {
    "question": "After evaluation, if the AI model is not performing well, the next step is to:",
    "options": [
      "Give up",
      "Go back and iterate on earlier steps like data or model selection",
      "Deploy it anyway",
      "Delete all data"
    ],
    "correct": 1,
    "explanation": "The AI project cycle is iterative — poor performance means revisiting earlier steps to improve the model."
  },
  {
    "question": "What is the first step in the AI Project Cycle?",
    "options": [
      "Data Acquisition",
      "Problem Scoping",
      "Modelling",
      "Evaluation"
    ],
    "correct": 1,
    "explanation": "Problem Scoping is the first step where we clearly define the problem that AI needs to solve."
  },
  {
    "question": "What does problem scoping involve?",
    "options": [
      "Writing code",
      "Clearly defining and understanding the problem to solve",
      "Buying hardware",
      "Testing the model"
    ],
    "correct": 1,
    "explanation": "Problem scoping involves clearly defining the problem, understanding its scope, constraints, and desired outcomes."
  },
  {
    "question": "What is data acquisition in the AI Project Cycle?",
    "options": [
      "Deleting data",
      "Collecting and gathering relevant data for the AI model",
      "Selling data",
      "Ignoring data"
    ],
    "correct": 1,
    "explanation": "Data acquisition is the process of collecting and gathering relevant data needed to train the AI model."
  },
  {
    "question": "What is the correct order of the AI Project Cycle?",
    "options": [
      "Modelling → Scoping → Data → Evaluation",
      "Problem Scoping → Data Acquisition → Modelling → Evaluation",
      "Evaluation → Modelling → Data → Scoping",
      "Data → Evaluation → Scoping → Modelling"
    ],
    "correct": 1,
    "explanation": "The correct order is: Problem Scoping → Data Acquisition → Data Exploration → Modelling → Evaluation."
  },
  {
    "question": "What happens during the modelling phase?",
    "options": [
      "Data is collected",
      "The problem is defined",
      "An AI algorithm is selected and trained on data",
      "The project is abandoned"
    ],
    "correct": 2,
    "explanation": "During the modelling phase, an appropriate AI algorithm is selected and trained using the collected data."
  },
  {
    "question": "Why is evaluation important in the AI Project Cycle?",
    "options": [
      "It is not important",
      "To check if the model performs accurately and meets requirements",
      "To delete the model",
      "To collect more data only"
    ],
    "correct": 1,
    "explanation": "Evaluation is important to verify that the AI model performs accurately, is reliable, and meets the defined requirements."
  },
  {
    "question": "What is a 4Ws canvas in problem scoping?",
    "options": [
      "A painting technique",
      "A framework asking Who, What, Where, Why to define the problem",
      "A type of AI model",
      "A coding language"
    ],
    "correct": 1,
    "explanation": "The 4Ws canvas (Who, What, Where, Why) is a framework used to clearly define and scope an AI problem."
  },
  {
    "question": "Which of the following is a source of data acquisition?",
    "options": [
      "Imagination",
      "Surveys, sensors, web scraping, databases",
      "Dreams",
      "Random guessing"
    ],
    "correct": 1,
    "explanation": "Data can be acquired from surveys, sensors, web scraping, existing databases, APIs, and other real-world sources."
  },
  {
    "question": "What should be done if the AI model does not perform well during evaluation?",
    "options": [
      "Deploy it anyway",
      "Go back and improve data or model",
      "Ignore the results",
      "Delete the project"
    ],
    "correct": 1,
    "explanation": "If the model doesn't perform well, we iterate — go back to improve data quality, try different algorithms, or refine the approach."
  },
  {
    "question": "What is data exploration?",
    "options": [
      "Ignoring data",
      "Analyzing and understanding the collected data before modelling",
      "Deleting data",
      "Encrypting data"
    ],
    "correct": 1,
    "explanation": "Data exploration involves analyzing, visualizing, and understanding the collected data to find patterns before building the model."
  }
]

export default questions
