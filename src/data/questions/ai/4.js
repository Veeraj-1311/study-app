const questions = [
  {
    "question": "What is a variable in Python?",
    "options": [
      "A fixed value that never changes",
      "A named container that stores a value in memory",
      "A type of loop",
      "A Python library"
    ],
    "correct": 1,
    "explanation": "A variable in Python is a named container used to store data values in memory. For example, age = 15 stores the value 15 in a variable called age."
  },
  {
    "question": "What will be the output of: print(type(3.14))?",
    "options": [
      "<class 'int'>",
      "<class 'str'>",
      "<class 'float'>",
      "<class 'bool'>"
    ],
    "correct": 2,
    "explanation": "3.14 is a decimal number, which is a float (floating-point number) data type in Python."
  },
  {
    "question": "Which of the following is a valid variable name in Python?",
    "options": [
      "2name",
      "my-name",
      "my_name",
      "class"
    ],
    "correct": 2,
    "explanation": "my_name is valid because it uses letters and underscores. Variable names cannot start with a number (2name), contain hyphens (my-name), or use reserved words (class)."
  },
  {
    "question": "What is the output of: print(10 // 3)?",
    "options": [
      "3.33",
      "3",
      "4",
      "10"
    ],
    "correct": 1,
    "explanation": "The // operator performs floor division (integer division), which divides and rounds down to the nearest whole number. 10 // 3 = 3."
  },
  {
    "question": "What data type is the value True in Python?",
    "options": [
      "int",
      "str",
      "float",
      "bool"
    ],
    "correct": 3,
    "explanation": "True and False are Boolean (bool) values in Python, used to represent truth values in logical operations."
  },
  {
    "question": "What does the len() function do in Python?",
    "options": [
      "Deletes items from a list",
      "Returns the number of items in a sequence like a list or string",
      "Adds items to a list",
      "Sorts a list"
    ],
    "correct": 1,
    "explanation": "The len() function returns the number of items in an object. For example, len('hello') returns 5, and len([1, 2, 3]) returns 3."
  },
  {
    "question": "What is the output of: print('Hello' + ' ' + 'World')?",
    "options": [
      "HelloWorld",
      "Hello World",
      "Hello+World",
      "Error"
    ],
    "correct": 1,
    "explanation": "The + operator concatenates (joins) strings together. 'Hello' + ' ' + 'World' produces 'Hello World' with a space in between."
  },
  {
    "question": "Which of the following creates a list in Python?",
    "options": [
      "fruits = (1, 2, 3)",
      "fruits = {1, 2, 3}",
      "fruits = [1, 2, 3]",
      "fruits = <1, 2, 3>"
    ],
    "correct": 2,
    "explanation": "Lists in Python are created using square brackets []. Parentheses () create tuples, and curly braces {} create sets or dictionaries."
  },
  {
    "question": "What is the index of the first element in a Python list?",
    "options": [
      "1",
      "0",
      "-1",
      "None"
    ],
    "correct": 1,
    "explanation": "Python uses zero-based indexing, so the first element of a list is at index 0. For example, in fruits = ['apple', 'banana'], fruits[0] is 'apple'."
  },
  {
    "question": "What does the append() method do to a list?",
    "options": [
      "Removes the last item",
      "Adds an item to the end of the list",
      "Sorts the list",
      "Reverses the list"
    ],
    "correct": 1,
    "explanation": "The append() method adds a single item to the end of a list. For example, fruits.append('mango') adds 'mango' at the end."
  },
  {
    "question": "What is the correct syntax for an if statement in Python?",
    "options": [
      "if (x > 5) {}",
      "if x > 5:",
      "if x > 5 then",
      "IF x > 5 DO"
    ],
    "correct": 1,
    "explanation": "In Python, an if statement uses a colon (:) after the condition and indentation for the body. No curly braces or 'then' keyword is needed."
  },
  {
    "question": "What is the output of the following code?\nfor i in range(3):\n    print(i)",
    "options": [
      "1 2 3",
      "0 1 2",
      "0 1 2 3",
      "1 2"
    ],
    "correct": 1,
    "explanation": "range(3) generates numbers from 0 to 2 (3 is excluded). So the loop prints 0, 1, and 2 on separate lines."
  },
  {
    "question": "What is a function in Python?",
    "options": [
      "A variable that stores numbers",
      "A reusable block of code that performs a specific task",
      "A type of loop",
      "A data type"
    ],
    "correct": 1,
    "explanation": "A function is a reusable block of code defined with the 'def' keyword that performs a specific task and can be called multiple times."
  },
  {
    "question": "How do you define a function in Python?",
    "options": [
      "function myFunc():",
      "def myFunc():",
      "create myFunc():",
      "func myFunc():"
    ],
    "correct": 1,
    "explanation": "In Python, functions are defined using the 'def' keyword, followed by the function name, parentheses for parameters, and a colon."
  },
  {
    "question": "What is the output of: print(5 ** 2)?",
    "options": [
      "10",
      "7",
      "25",
      "52"
    ],
    "correct": 2,
    "explanation": "The ** operator is the exponentiation (power) operator in Python. 5 ** 2 means 5 raised to the power of 2, which equals 25."
  },
  {
    "question": "What does the input() function do in Python?",
    "options": [
      "Displays output on screen",
      "Takes user input from the keyboard as a string",
      "Performs calculations",
      "Imports a library"
    ],
    "correct": 1,
    "explanation": "The input() function pauses the program and waits for the user to type something on the keyboard. It always returns the input as a string."
  },
  {
    "question": "What is the output of: print(10 % 3)?",
    "options": [
      "3",
      "1",
      "0",
      "10"
    ],
    "correct": 1,
    "explanation": "The % operator is the modulus operator, which returns the remainder after division. 10 divided by 3 gives a remainder of 1."
  },
  {
    "question": "Which Python library is commonly used for data analysis?",
    "options": [
      "Tkinter",
      "Pandas",
      "Flask",
      "Django"
    ],
    "correct": 1,
    "explanation": "Pandas is a popular Python library used for data manipulation and analysis. It provides data structures like DataFrames for working with structured data."
  },
  {
    "question": "What is a 'while' loop in Python?",
    "options": [
      "A loop that runs a fixed number of times",
      "A loop that repeats as long as a condition is True",
      "A loop that never stops",
      "A function definition"
    ],
    "correct": 1,
    "explanation": "A while loop repeatedly executes its block of code as long as the specified condition remains True. It stops when the condition becomes False."
  },
  {
    "question": "What will happen if you try: print('Age: ' + 15)?",
    "options": [
      "It prints 'Age: 15'",
      "It causes a TypeError because you cannot concatenate a string and an integer",
      "It prints 15",
      "It prints 'Age:'"
    ],
    "correct": 1,
    "explanation": "Python does not automatically convert integers to strings. You need to use str(15) or f-strings like f'Age: {15}' to combine strings with numbers."
  },
  {
    "question": "What is a comment in Python?",
    "options": [
      "Code that runs first",
      "A line starting with # that is ignored by the interpreter and explains the code",
      "A type of variable",
      "An error message"
    ],
    "correct": 1,
    "explanation": "Comments start with # and are ignored by Python when running the code. They are used to explain code and make it more readable for humans."
  },
  {
    "question": "What is the output of: print(list(range(1, 6)))?",
    "options": [
      "[1, 2, 3, 4, 5, 6]",
      "[0, 1, 2, 3, 4, 5]",
      "[1, 2, 3, 4, 5]",
      "[1, 6]"
    ],
    "correct": 2,
    "explanation": "range(1, 6) generates numbers starting from 1 up to but not including 6. So the result is [1, 2, 3, 4, 5]."
  },
  {
    "question": "What is the purpose of the 'return' statement in a function?",
    "options": [
      "To print a value on screen",
      "To send a value back from the function to the code that called it",
      "To end the program",
      "To create a new variable"
    ],
    "correct": 1,
    "explanation": "The return statement sends a value back from the function to the caller. For example, a function that calculates area can return the result for further use."
  },
  {
    "question": "Which of the following is used to import a library in Python?",
    "options": [
      "include numpy",
      "import numpy",
      "using numpy",
      "require numpy"
    ],
    "correct": 1,
    "explanation": "The 'import' keyword is used to load libraries in Python. For example, 'import numpy' loads the NumPy library for numerical computations."
  },
  {
    "question": "What does the following code print?\nx = [10, 20, 30]\nprint(x[1])",
    "options": [
      "10",
      "20",
      "30",
      "Error"
    ],
    "correct": 1,
    "explanation": "Python lists use zero-based indexing. x[0] is 10, x[1] is 20, and x[2] is 30. So x[1] prints 20."
  }
]

export default questions
