const questions = [
  {
    "question": "The mean of the first 5 natural numbers is:",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 1,
    "explanation": "Mean = (1+2+3+4+5)/5 = 15/5 = 3."
  },
  {
    "question": "The mode of the data set {2, 3, 4, 3, 5, 3, 6} is:",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 1,
    "explanation": "3 appears most frequently (3 times), making it the mode."
  },
  {
    "question": "The median of {1, 3, 5, 7, 9} is:",
    "options": [
      "3",
      "5",
      "7",
      "9"
    ],
    "correct": 1,
    "explanation": "For an odd number of values, the median is the middle value, which is 5."
  },
  {
    "question": "A frequency polygon is drawn using:",
    "options": [
      "Bar graph",
      "Histogram",
      "Pie chart",
      "Pictograph"
    ],
    "correct": 1,
    "explanation": "A frequency polygon is drawn by joining the midpoints of the tops of histogram bars."
  },
  {
    "question": "Class mark equals:",
    "options": [
      "Upper limit - Lower limit",
      "(Upper limit + Lower limit) / 2",
      "Upper limit + Lower limit",
      "Upper limit × Lower limit"
    ],
    "correct": 1,
    "explanation": "Class mark is the average of the upper and lower limits of a class interval."
  },
  {
    "question": "In a grouped frequency distribution, the sum of all frequencies gives:",
    "options": [
      "Mean",
      "Mode",
      "Total number of observations",
      "Median"
    ],
    "correct": 2,
    "explanation": "The sum of all frequencies equals the total number of observations."
  },
  {
    "question": "If the mean of 5 observations is 10, their sum is:",
    "options": [
      "15",
      "50",
      "25",
      "2"
    ],
    "correct": 1,
    "explanation": "Sum = Mean × Number of observations = 10 × 5 = 50."
  },
  {
    "question": "The range of the data set {4, 7, 8, 12, 15} is:",
    "options": [
      "4",
      "7",
      "11",
      "15"
    ],
    "correct": 2,
    "explanation": "Range = Maximum - Minimum = 15 - 4 = 11."
  },
  {
    "question": "An ogive is also known as a:",
    "options": [
      "Bar graph",
      "Cumulative frequency curve",
      "Line graph",
      "Scatter plot"
    ],
    "correct": 1,
    "explanation": "An ogive is a cumulative frequency curve."
  },
  {
    "question": "Which measure of central tendency is affected most by extreme values?",
    "options": [
      "Mean",
      "Median",
      "Mode",
      "None of these"
    ],
    "correct": 0,
    "explanation": "The mean is most affected by outliers or extreme values."
  },
  {
    "question": "The median of {2, 4, 6, 8} is:",
    "options": [
      "4",
      "5",
      "6",
      "3"
    ],
    "correct": 1,
    "explanation": "For an even number of values, median = average of middle two values = (4 + 6)/2 = 5."
  },
  {
    "question": "The data set {5, 5, 5, 5, 5} has a range of:",
    "options": [
      "5",
      "25",
      "0",
      "1"
    ],
    "correct": 2,
    "explanation": "Range = Maximum − Minimum = 5 − 5 = 0."
  },
  {
    "question": "A histogram is used to represent:",
    "options": [
      "Individual data points",
      "Continuous frequency distribution",
      "Qualitative data only",
      "Scatter data"
    ],
    "correct": 1,
    "explanation": "A histogram is used to represent continuous frequency distribution with no gaps between bars."
  },
  {
    "question": "If the mean of 10, 12, x, 16, 18 is 14, the value of x is:",
    "options": [
      "12",
      "14",
      "16",
      "10"
    ],
    "correct": 1,
    "explanation": "Mean = (10 + 12 + x + 16 + 18)/5 = 14. So 56 + x = 70, hence x = 14."
  },
  {
    "question": "A bar graph uses rectangular bars where the height represents:",
    "options": [
      "The class interval",
      "The frequency of the data",
      "The range",
      "The median"
    ],
    "correct": 1,
    "explanation": "In a bar graph, the height (or length) of each bar represents the frequency of the category."
  },
  {
    "question": "The mean of the first five natural numbers is:",
    "options": [
      "2",
      "2.5",
      "3",
      "5"
    ],
    "correct": 2,
    "explanation": "Mean = (1+2+3+4+5)/5 = 15/5 = 3."
  },
  {
    "question": "The mode of the data set {2, 3, 5, 3, 7, 3, 8, 3, 9} is:",
    "options": [
      "2",
      "3",
      "5",
      "9"
    ],
    "correct": 1,
    "explanation": "Mode is the value that occurs most frequently. The number 3 appears 4 times, more than any other value."
  },
  {
    "question": "The median of 13, 16, 12, 14, 19, 12, 14, 13, 14 is:",
    "options": [
      "13",
      "14",
      "13.5",
      "12"
    ],
    "correct": 1,
    "explanation": "Arranging in order: 12, 12, 13, 13, 14, 14, 14, 16, 19. There are 9 values, so the median is the 5th value = 14."
  },
  {
    "question": "The mean of 20 observations is 15. If each observation is multiplied by 4, the new mean is:",
    "options": [
      "15",
      "60",
      "75",
      "35"
    ],
    "correct": 1,
    "explanation": "When each observation is multiplied by a constant k, the mean is also multiplied by k. New mean = 15 * 4 = 60."
  },
  {
    "question": "In a frequency distribution, the class mark of a class 10-20 is:",
    "options": [
      "10",
      "15",
      "20",
      "30"
    ],
    "correct": 1,
    "explanation": "Class mark = (lower limit + upper limit)/2 = (10 + 20)/2 = 15."
  },
  {
    "question": "If the mean of x, x+2, x+4, x+6, x+8 is 11, then x equals:",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correct": 1,
    "explanation": "Mean = (x + x+2 + x+4 + x+6 + x+8)/5 = (5x+20)/5 = x+4. Setting x+4 = 11 gives x = 7."
  },
  {
    "question": "A data set has two modes. It is called:",
    "options": [
      "Unimodal",
      "Bimodal",
      "Trimodal",
      "No mode"
    ],
    "correct": 1,
    "explanation": "A data set with exactly two modes is called bimodal. Uni- means one, bi- means two, and tri- means three."
  },
  {
    "question": "The range of the data 25, 18, 20, 22, 16, 6, 17, 15 is:",
    "options": [
      "19",
      "25",
      "6",
      "15"
    ],
    "correct": 0,
    "explanation": "Range = Maximum - Minimum = 25 - 6 = 19."
  },
  {
    "question": "The mean of 8 numbers is 25. If one number is excluded, the mean of the remaining 7 numbers becomes 22. The excluded number is:",
    "options": [
      "46",
      "3",
      "50",
      "25"
    ],
    "correct": 0,
    "explanation": "Sum of 8 numbers = 8*25 = 200. Sum of 7 numbers = 7*22 = 154. Excluded number = 200 - 154 = 46."
  },
  {
    "question": "For a grouped frequency distribution, the modal class is the class with:",
    "options": [
      "The smallest frequency",
      "The largest frequency",
      "Frequency equal to the mean",
      "The middle class mark"
    ],
    "correct": 1,
    "explanation": "The modal class is the class interval that has the highest frequency in a grouped frequency distribution."
  }
]

export default questions
