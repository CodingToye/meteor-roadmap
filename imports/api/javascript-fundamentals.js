export const javascriptFundamentals = [
  {
    title: "Variables",
    description:
      "Variables are used to store data that can be referenced and manipulated in a program. In JavaScript, variables can be declared using 'var', 'let', or 'const'",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "let name = 'Alice'; // block-scoped variable\nconst age = 30; // block-scoped constant\nvar greeting = 'Hello'; // function-scoped variable",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Dynamic Typing",
            description:
              "Allows flexibility in storing different types of data.",
          },
          {
            title: "Scoping",
            description:
              "'let' and 'const' provide block scope, reducing errors compared to 'var'.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Dynamic Typing",
            description: "Can lead to runtime errors due to unexpected types.",
          },
          {
            title: "'var' Issues",
            description: "'var' has function scope which can lead to bugs",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "var",
            description:
              "Declaring a variable that needs to be function-scoped or has to be available globally.  Main characteristics are that it is Function-scoped, can be redeclared, and hoisted.",
            codeSample:
              "function oldFunction() {\n  var x = 10;\n  if (true) {\n    var x = 20; // Same variable\n    console.log(x); // 20\n  }\n  console.log(x); \\ 20\n}\n\noldFunction();",
            notes:
              "Use when you need a function-scoped variable or if you are working with legacy code.",
          },
          {
            title: "let",
            description:
              "Declaring a variable that needs to be block-scoped and may change its value.  Characteristics are it is Block-scoped, cannot be redeclared in the same scope, and not hoisted to the top of its block.",
            codeSample:
              "// Block Scope example\nfunction modernFunction() {\n  let x = 10;\n  if (true) {\n    let x = 20;\n    console.log(x); // 20\n  }\n  console.log(x); // 10\n}\n\nmodernFunction();\n\n// Loop Variable\nfor (let i = 0; i < 5; i++) {\n  setTimeout(() => {\n    console.log(i); // Outputs: 0, 1, 2, 3, 4\n  }, 100);\n}",
            notes:
              "Use for block-scoped variables that might need to be reassigned.",
          },
          {
            title: "const",
            description:
              "Declaring a constant variable that will not change its reference.  Characteristics are that it is Block-scoped, must be initialised at declaration, and its reference cannot change.",
            codeSample:
              "// Constant Primitive\nconst pi = 3.14158;\nconsole.log(pi); // 3.14159\n// pi = 3.14; // Error: Assignment to constant variable\n\n// Constant Object (mutable contents)\nconst person = {\n  name: 'Alice',\n  age: 25\n};\nperson.age = 26; // Allowed\nconsole.log(person.age); // 26\nperson = {}; // Error: Assignment to constant variable",
            notes:
              "Use for constants or variables whose references should not change, but not the contents of objects and array assigned to `const` can still be modified.",
          },
        ],
      },
      {
        title: "Notes",
        description: "",
        meta: "notes",
        subBlocks: [
          {
            title: "const",
            description:
              "If you assign a const to an object, the reference of that object cannot change, but the values within it can.",
          },
        ],
      },
    ],
  },
  {
    title: "Data Types",
    description:
      "JavaScript supports various data types including primitive types ('string', 'number', 'boolean', 'null', 'undefined', 'symbol') and objects.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "let isActive = true; // boolean\nlet total = 100.5; // number\nlet name = 'Alice'; // string\nlet user = { name: 'Alice', age: 30 }; // object",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Versatile",
            description:
              "Supports a range of data types for different use cases.",
          },
          {
            title: "Built-in Methods",
            description:
              "Provides useful methods for strings, numbers, and arrays.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Type Coercion",
            description:
              "Automatic type conversion can lead to unexpected results.",
          },
          {
            title: "Complex Objects",
            description: "Objects can be complex to handle due to references.",
          },
        ],
      },
    ],
  },
  {
    title: "Functions",
    description:
      "Functions are reusable blocks of code that can be executed when called. JavaScript supports regular functions, arrow functions, and function expressions.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2, 3));",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Reusable",
            description: "Encourages code reuse and modularity.",
          },
          {
            title: "Encapsulation",
            description:
              "Helps in encapsulating logic, making code more modular and maintainable.",
          },
          {
            title: "Readability",
            description:
              "Functions can improve readability by abstracting complex logic into simpler parts.",
          },
          {
            title: "Closures",
            description: "Can create closures, useful for maintaining state.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "'this' Keyword'",
            description:
              "'this' behaves differently in regular and arrow functions.",
          },
          {
            title: "Overhead",
            description: "Function calls have a performance overhead.",
          },
          {
            title: "Hoisting",
            description:
              "Function declarations are hoisted, which can be confusing.",
          },
        ],
      },
    ],
  },
  {
    title: "Regular Functions",
    description:
      "Functions defined with the 'function' keyword, with their own 'this' and 'arguments' context.",
    blocks: [
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Dynamic 'this'",
            description:
              "'this' context changes based on how the function is called.",
          },
          {
            title: "Hoisting",
            description:
              "Function declarations are hoisted, allowing them to be used before they are defined in code.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Dynamic 'this'",
            description:
              "Can cause confusion and errors if not properly managed.",
          },
          {
            title: "Verbose Syntax",
            description:
              "More verbose compared to arrow functions for simpler cases.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Utility Functions",
            description:
              "Utility functions are reusable pieces of code that perform common tasks. Regular functions are perfect for this as they can be defined and then called from various parts of your application.",
            codeSample:
              "function formatDate(date) {\n  const options = { year: 'numeric', month: 'long', day: 'numeric' };\n  return new Date(date).toLocaleDateString(undefined, options);\n}\n\nconst today = formatDate(new Date(();\nconsole.log(today); \\ Output: June 7, 2024",
            notes:
              "Use when you need to keep your code DRY by encapsulating functionality that would otherwise be repeated.",
          },
          {
            title: "Event Handlers",
            description:
              "In web development, event handlers are functions that are called in response to user actions, such as clicks, keypresses, or form submissions.",
            codeSample:
              "document.getElementById('myButton').addEventListener('click, function() {\n  alert('Button clicked');\n});",
            notes: "",
          },
          {
            title: "Object Methods",
            description:
              "When defining methods for objects, regular functions are often used, especially if you need to use the `this` keyword to refer to the object.",
            codeSample:
              "const person = {\n  firstName: 'John',\n  lastName: 'Doe',\n  fullName: function() {\n    return this.firstName + ' ' + this.lastName;\n  }};\n\nconsole.log(person.fullName()); // Output: John Doe",
            notes:
              "Use for situations where you need to leverage `this` keyword.",
          },
          {
            title: "Constructor Functions",
            description:
              "Constructor functions are used to create objects with the same properties and methods. They are called with the `new` keyword.",
            codeSample:
              "function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.fullName = function () {\n    return this.firstName + ' ' + this.lastName;\n  };\n}\n\nconst john = new Person('John', 'Doe');\nconsole.log(john.fullName()); // Output: John Doe",
          },
          {
            title: "Recursion",
            description:
              "Regular functions can be used for recursion, where a function calls itself to solve a problem that can be broken down into smaller, similar problems.",
            codeSample:
              "function factorial(n) {\n  if (n === 0) {\n    return 1;\n  }\n  return n * factorial(n - 1);\n}\n\nconsole.log(factorial(5)); // Output: 120",
            notes:
              "Recursion functions can be used when a loop for example would be less intuitive or cumbersome, often used to traverse the DOM tree.",
          },
          {
            title: "Callback Functions",
            description:
              "Regular functions can be used as callbacks, which are functions passed as arguments to other functions to be executed later.",
            codeSample:
              "const numbers = [1, 2, 3, 4, 5];\n// function(number) {...} is the callback function passed as the argument to the map function\nconst squares = numbers.map(function(number) {\n  return number * number;\n});\n\nconsole.log(squares); \\ Output: [1, 4, 9, 16, 25]",
          },
          {
            title: "IIFE (Immediately Invoked Function Expressions)",
            description:
              "IIFEs are regular functions that are executed immediately after they are defined. They are useful for avoiding global variables and creating isolated scopes.",
            codeSample:
              "(function() {\n  const message = 'Hello, world';\n  console.log(message); // Output: Hello, world\n})();\n\n// console.log(message); Error: message is not defined",
            notes: "For when you want to create a private scope.",
          },
        ],
      },
    ],
  },
  {
    title: "Arrow Functions",
    description:
      "Arrow functions are a concise way to write functions and do not have their own 'this', 'arguments', or 'super'.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const multiply = (a, b) => a * b;\nconsole.log(multiply(5,3)); // 15\n\nconst logArguments = (...args) => {\n  console.log(args); // Logs all arguments as an array\n};\n\nlogArguments(1, 2, 3); // Output: [1, 2, 3]",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Concise Syntax",
            description: "Shorter and cleaner function syntax.",
          },
          {
            title: "Lexical 'this'",
            description:
              "Inherits 'this' from the surrounding scope, avoiding common pitfalls with 'this' in regular functions.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "No Hoisting",
            description:
              "Arrow functions are not hoisted, and must be defined before use.",
          },
          {
            title: "No Own 'arguments' Object",
            description:
              "Cannot access arguments object directly; use parameters or rest parameters.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Array Manipulation",
            description:
              "Arrow functions are often used with array methods like `map`, `filter`, `reduce`, and `forEach`.",
            codeSample:
              "// Mapping an Array to its Squares\nconst numbers = [1, 2, 3, 4, 5];\nconst squares = numbers.map(number => number * number);\nconsole.log(squares)' // Output: [1, 4, 9, 16, 25]",
            notes: "",
          },
          {
            title: "Event Handlers",
            description:
              "In React, arrow functions are frequently used as event handlers to ensure that `this` refers to the correct context.",
            codeSample:
              "// Event handler in React\nimport React, { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n\n  const increment = () => setCount(count + 1);\n\n  return (\n    <div>\n      <h2>Count: {count}</h2>\n      <button onClick={increment}>Increment</button>\n    </div>\n  );\n};\n\nexport default Counter;",
            notes: "",
          },
          {
            title: "Short Inline Functions",
            description:
              "Arrow functions are perfect for writing short, inline functions that are easy to read.",
            codeSample:
              "// Sorting an Array of Objects\nconst users = [\n  { name: 'Alice', age: 25 },\n  { name: 'Bob', age: 22 },\n  { name: 'Charlie', age: 23 }\n];\n\nconst sortedUsers = users.sort((a, b) => a.age = b.age);\nconsole.log(sortedUsers);",
            notes: "",
          },
          {
            title: "Lexical `this`",
            description:
              "Arrow functions do not have their own `this` context; they inherit `this` from the parent scope. This behaviour is useful in scenarios where you want to ensure `this` remains consistent.",
            codeSample:
              "// Using Arrow Functions with `this`\nfunction Timer() {\n  this.seconds = 0;\n\n  setInterval(() => {\n    this.seconds++;\n    console.log(this.seconds);\n  }, 1000);\n}\n\nconst timer = New Timer();",
          },
          {
            title: "Default Parameters",
            description:
              "Arrow functions can be used with default parameters to make functions more flexible.",
            codeSample:
              "// Arrow functions with Default Parameters\nconst greet = (name = 'Guest') => `Hello, ${name}`;\n\nconsole.log(greet()); // Output: Hello, Guest\nconsole.log(greet('Alice')); // Output: Hello, Alice",
            notes: "",
          },
          {
            title: "Object Methods",
            description:
              "Arrow functions can be used as methods within objects, but be cautious as `this` will refer to the global object (or `undefined` in strict mode).",
            codeSample:
              "// Object Method\nconst person = {\n  name: 'Alice',\n  greet: () => `Hello, ${this.name}`\n};\n\nconsole.log(person.greet()); // Output: Hello, undefined",
            notes: "In this case, it is better to use Regular Functions.",
          },
        ],
      },
    ],
  },
  {
    title: "Function Expressions",
    description:
      "Functions defined within expressions, such as assigning them to variables or using them in expressions.  They can be anonymous or named.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const subtract = function(a, b) {\n  return a - b;\n};\nconsole.log(subtract(10, 4)); // 6",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Flexibility",
            description:
              "Can be used as anonymous functions, closures, or callbacks.",
          },
          {
            title: "Encapsulation",
            description:
              "Useful for creating functions on the fly, especially within expressions.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "No Hoisting",
            description: "Must be defined before they are used in the code.",
          },
          {
            title: "Verbose",
            description:
              "Can be more verbose compared to arrow functions for simpler tasks.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Callback Functions",
            description:
              "Function expressions are frequently used as callback functions, especially when passing functions as arguments to higher-order functions or event handlers.",
            codeSample:
              "// Using a Function Expression as a Callback\nconst numbers = [1, 2, 3, 4, 5];\nconst squares = numbers.map(function(number) {\n  return number * number;\n});\nconsole.log(squares); // Output: [1, 4, 9, 16, 25]",
            notes: "",
          },
          {
            title: "IIFE (Immediately Invoked Function Expressions)",
            description:
              "IIFE is a common pattern used for encapsulating code and preventing pollution of the global namespace.",
            codeSample:
              "// IIFE for Encapsulation\n(function() {\n   // Encapsulated code...\n})();",
            notes: "",
          },
          {
            title: "As Object Methods",
            description:
              "Function expressions can be assigned as methods within objects, providing a way to organise and structure code.",
            codeSample:
              "// Object with Function Expression Method\nconst calculator = {\n  add: function(a, b) {\n    return a + b;\n  },\n  subtract: function(a, b) {\n    return a -  b;\n  }\n};\nconsole.log(calculator.add(5, 3)); // Output: 8\nconsole.log(calculator.subtract(5, 3)); // Output: 2",
            notes: "",
          },
          {
            title: "Dynamic Functions",
            description:
              "Function expressions allow for the creation of functions dynamically based on certain conditions or parameters.",
            codeSample:
              "// Dynamically Created Function\nconst operation = (operationType) => {\n  return operationType === 'add' ? (a, b) => a + b : (a, b) => a -b;\n};\n\nconst addFunction = operation('add');\nconsole.log(addFunction(5, 3)); // Output: 8",
          },
          {
            title: "Higher-Order Functions",
            description:
              "Function expressions can be passed as arguments to higher-order functions or returned from them.",
            codeSample:
              "// Higher-Order Function\nconst operate = (operation, a, b) => {\n  return operation(a, b);\n};\n\nconst add = (a, b) => a + b;\nconsole.log(operate(add, 5, 3)); // Output: 8",
            notes: "",
          },
        ],
      },
    ],
  },
  {
    title: "Closures",
    description:
      "A closure is a function that captures variables from its lexical scope, enabling it to access those variables even after the outer function has finished execution.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "function outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\n\nconst increment = outer();\nconsole.log(increment()); // 1\nconsole.log(increment()); // 2",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Data Encapsulation",
            description: "Helps in creating private variables and functions.",
          },
          {
            title: "State Management",
            description: "Useful for maintaining state in a functional style.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Memory Leaks",
            description:
              "Improper use can lead to memory leaks if closures retain unnecessary variables.",
          },
          {
            title: "Debugging Complexity",
            description:
              "Can make debugging more complex due to retained state and variables.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Data Encapsulation and Information Hiding",
            description:
              "Closures enable the creation of private variables and functions, providing a way to encapsulate data and restrict access to certain parts of code.",
            codeSample:
              "// Encapsulating Data with Closures\nfunction createCount() {\n  let count = 0;\n  return function() {\n    return ++count;\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter()); // Output: 1\nconsole.log(counter((); // Output: 2",
            notes:
              "`function() { return ++count }` is where the Closure aspect is demonstrated.",
          },
          {
            title: "Event Handlers",
            description:
              "Closures are often used in event handling to maintain access to variables within the event listener's scope.",
            codeSample:
              "// Event Handling with Closures\nfunction setupButton() {\n  const button = document.getElementById('myButton');\n  let clickCount = 0'\n\nbutton.addEventListener('click', function() {\n    console.log(`Button clicked ${++clickCount} times`);\n  });\n}\n\nsetupButton();",
            notes:
              "Closure aspect is here demonstrated by the anonymous function passed to `addEventListener`, it retains access to the `clickCount` variable declared in outer function `setupButton()`.",
          },
          {
            title: "Memoisation",
            description:
              "Closures can be used for memoisation, caching the results of expensive function calls for improved performance.",
            codeSample:
              "// Memoisation with Closures\nfunction memoise(func) {\n  const cache = {};\n  return function(arg) {\n    if (!(arg in cache)) {\n      cache[arg] = func(arg);\n    }\n    return cache[arg];\n  };\n}\n\nconst expensiveFunction = memoise((n) => {\n  console.log('Expensive calculation performed');\n  return n * 2;\n});\n\nconsole.log(expensiveFunction(5)); // Output: Expensive calculation performed, 10\nconsole.log(expensiveFunction(5)); // Output: 10 (value retrieved from cache)",
            notes:
              "In this example, the closure aspect is illustrated by the inner function returned by `memoise`, this forms a closure over the `cache` object, allowing it to retain access to `cache`.",
          },
          {
            title: "Currying",
            description:
              "Closures enable currying, a technique where a function with multiple arguments is transforned into a sequence of functions, each taking a single argument.",
            codeSample:
              "// Currying with Closures\nfunction add(a) {\n  return function(b) {\n    return a + b;\n  };\n}\n\nconst addFive = add(5);\nconsole.log(addFive(3)); // Output: 8",
            notes:
              "The closure aspect is demonstrated by the inner function returned by `add`. This inner function forms a closure over the `a` parameter of the outer function `add()`.",
          },
          {
            title: "Module Pattern",
            description:
              "Closures are commonly used to create modules in JavaScript, allowing for the organisation of code into private and public components.",
            codeSample:
              "// Module Pattern with Closures\nconst myModule = (function() {\n  let privateData = 'I am private';\n\n  function privateFunction() {\n    console.log('Private function called');\n  }\n\n  return {\n    publicFunction: function() {\n      console.log('Public functions are called');\n      privateFunction();\n    },\n    getPrivateData: function() {\n      return privateData;\n    }\n  };\n})();\n\nmyModule.publicFunction)_; // Output: Public function called, Provate function called\nconsole.log(myModule.getPrivateData()); // Output: I am private",
            notes:
              "In this example, the closure aspect is evident in the functions `privateFunction()` and `getPrivateData()`, retuned by the immediately IIFE function. These functions form a closure over the `privateData` variable, allowing to access and manipulate `privateData`, whilst also keeping it private from outside of the module.",
          },
        ],
      },
    ],
  },
  {
    title: "Objects",
    description:
      "Objects are collections of key-value pairs. They are used to store data and functionality together.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "let user = {\n  name: 'Alice',\n  age: 30,\n  greet() {\n    return `Hello, ${name}`;\n  }\n};\n\nconsole.log(user.greet());",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Flexible",
            description: "Can represent complex data structures.",
          },
          {
            title: "Method Support",
            description: "Can contain methods for behaviour.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Memory",
            description: "Large objects can consume a lot of memory.",
          },
          {
            title: "References",
            description: "Can lead to side effects if not carefully managed.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Representing Data Structures",
            description:
              "Objects are ideal for representing complex data structures like user profiles, products or settings.",
            codeSample:
              "const userProfile = {\n  name: 'John Doe',\n  age: 30,\n  email: 'johndoe@example.com',\n  address: {\n    street: '123 Main St.',\n    city: 'Anytown',\n    zip: '12345'\n  }\n};\n\nconsole.log(userProfile.name); // Output: John Doe\nconsole.log(userProfile.address.city); // Output: Anytown",
            notes: "Also used to represent Configurations and Settings.",
          },
          {
            title: "Grouping Related Functions",
            description:
              "Objects can be used to group related functions together, creating a simple module-like structure.",
            codeSample:
              "const mathOperations = {\n  add: function(a, b) {\n    return a + b;\n  },\n  subtract: function(a, b) {\n    return a - b;\n  },\nmultiply: function(a, b) {\n    return a * b;\n  },\n  divide: function(a, b) {\n    return a / b;\n  }\n};\n\nconsole.log(mathOperations.add(5, 3)); // Output: 8\nconsole.log(mathOperations.divide(10, 2)); // Output: 5",
            notes: "",
          },
          {
            title: "Event Handling and State Management",
            description:
              "Objects are used to manage state and handle events in user interfaces.",
            codeSample:
              "const button = {\n  text: 'Click Me',\n  isDisabled: false,\n  onClick: function() {\n    console.log('button clicked');\n  }\n};\n\n// Simulating a button click\nif (!button.isDisabled) {\n  button.onClick(); // Output: button clicked\n}",
            notes: "",
          },
          {
            title: "Storing Data in Local Storage",
            description:
              "Objects are often serialised and stored in local storage for persistent data management.",
            codeSample:
              "const userSettings = {\n  theme: 'light',\n  notifications: true,\n  language: 'en'\n};\n\n// Save to local storage\nlocalStorage.setItem('userSettings', JSON.stringify(userSettings));\n\n// Retrieve from local storage\nconst savedSettings = JSON.parse(localStorage.getItem('userSettings'));\n\nconsole.log(savedSettings.theme); // Output: light",
            notes: "",
          },
          {
            title: "API Responses",
            description:
              "Objects are used to parse and manipulate data received from APIs",
            codeSample:
              "fetch('https://api.example.com/user/1')\n  .then(response => response.json())\n  .then(data => {\n    const user = {\n      id: data.id,\n      name: data.name,\n      email: data.email\n    };\n    console.log(user.name); // Output: User's name from the API response\n  });",
          },
          {
            title: "DOM Manipulation",
            description:
              "Objects can be used to represent and manipulate elements in the Document Object Model (DOM).",
            codeSample:
              "const element = {\n  tagName: 'div',\n  attributes: {\n    id: 'myDiv',\n    class: 'container'\n  },\n  innerHTML: 'Hello, World',\n  appendTo: function(parent) {\n    const el = document.createElement(this.tagName);\n    for (let attr in this.attributes) {\n      el.setAttributes(attr, this.attribute[attr]);\n    el.innerHTML = this.innerHTML;\n    document.querySelector(parent).appendChild(el);\n  }\n};\n\n// Adding the element to the DOM\nelement.appendTo('body');",
          },
        ],
      },
    ],
  },
  {
    title: "Arrays",
    description:
      "Arrays are ordered collection of values. They are used to store lists of data.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "let numbers = [1, 2, 3, 4, 5];\nnumbers.push(6);\n\nconsole.log(numbers) // [1, 2, 3, 4, 5, 6]",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Indexed",
            description: "Efficiently access elements using indices.",
          },
          {
            title: "Methods",
            description:
              "Provides useful methods like `map`, `filter`, and `reduce`.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Sparse Arrays",
            description: "Can lead to unexpected behaviours.",
          },
          {
            title: "Mutability",
            description:
              "Array mutations can lead to bugs if not managed properly",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Managing Lists of Data",
            description:
              "Arrays are perfect for managing collections of related data, such as lists of users, products, or items.",
            codeSample:
              "const users = ['John', 'Jane', 'Jack', 'Jill'];\nconsole.log(users[0]); // Output: John\n\nconst products = [\n  { id: 1, name: 'Laptop', price: 1000 },\n  { id: 2, name: 'Phone', price: 500 },\n];\nconsole.log(products[1].name); // Output: Phone",
          },
          {
            title: "Iterating Over Data",
            description:
              "Arrays can be iterated over using loops to perform actions on each element.",
            codeSample:
              "const numbers = [1, 2, 3, 4, 5];\nnumbers.forEach(number => console.log(number * 2)); // Output: 2, 4, 6, 8",
          },
          {
            title: "Filtering Data",
            description:
              "Arrays can be used to filter data based on certain conditions.",
            codeSample:
              "const ages = [18, 25, 30, 15, 21];\nconst adults = ages.filter(age => age >= 18);\nconsole.log(adults); // Output: [18, 25, 30, 21]",
          },
          {
            title: "Transforming Data",
            description:
              "Arrays can be transformed into new arrays using methods like `map`.",
            codeSample:
              "const names = ['john', 'jane', 'jack'];\nconst capitalisedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));\nconsole.log(capitalisedNames); // Output: ['John', 'Jane', 'Jack']",
          },
          {
            title: "Finding Data",
            description:
              "Arrays can be searched to find elements that match certain criteria.",
            codeSample:
              "const people = [\n  { name: 'John', age: 25 },\n  { name: 'Jane', age: 22},\n  { name: 'Jack'm age: 30}\n];\nconst person = person.find([ => p.name === 'Jane');\nconsole.log(person); // Output: { name: 'Jane', age: 22 }",
          },
          {
            title: "Sorting Data",
            description: "Arrays can be sorted using the `sort` method.",
            codeSample:
              "const numbers = [4, 2, 5, 1, 3];\nnumbers.sort((a, b) => a - b);\nconsole.log(numbers); // Output: [1, 2, 3, 4, 5]",
          },
          {
            title: "Aggregating Data",
            description:
              "Arrays can be used to aggregate data using methods like `reduce`.",
            codeSample:
              "const expenses = [200, 300, 150, 400];\nconst total = expenses.reduce((sum, expemse) => sum + expense, 0);\nconsole.log(total); // Outout 1050",
          },
          {
            title: "Working with API Responses",
            description:
              "Arrays are often used to handle data retrieved from APIs.",
            codeSample:
              "fetch('https://api.example.com/user/1')\n  .then(response => response.json())\n  .then(data => {\n    const productNames = data.map(product => product.name);\n    };\n    console.log(productNames); // Output: Array of product names from the API  });\n  });",
          },
          {
            title: "Managing State in React",
            description:
              "In React, arrays are commonly used to manage lists of items in state.",
            codeSample:
              "import React, { useState } from 'react';\n\nconst TodoList = () => {\n  const [todos, setTodos] = useState(['Buy groceries', 'Walk the dog', 'Finish project]);\n\n  const addTodo = (todo) = {\n    setTodos([...todos, todo])'\n\n  return (\n    <div>\n      <h2>Todo List</h2>\n      <ul>\n        {todos.map((todo, index) => (\n          <li key={index}>{todo}</li>\n        ))}\n      </ul>\n      <button onClick={() => addTodo('New task')}>Add Todo</button>\n    </div>\n  );\n};\n\nexport default TodoList; ",
          },
          {
            title: "Handling DOM Elements",
            description:
              "Arrays can be used to handle collectoions of DOM elements.",
            codeSample:
              "const buttons = Array.from(document.getQuerySelectorAll('button'));\nbuttons.forEach(button) => {button.addEventListener(click', () => {\n    console.log('Button clicked');\n  });\n});",
          },
        ],
      },
    ],
  },
  {
    title: "Loops",
    description:
      "Loops are used to execute a block of code repeatedly. JavaScript supports `for`, `while`, and `do...while` loops.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Iterative Operations",
            description: "Ideal for iterating over arrays and collections.",
          },
          {
            title: "Control Structures",
            description: "Supports break and continue for control flow.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Infinite Loops",
            description:
              "Can result in infinite loops if conditions are not handled properly.",
          },
          {
            title: "Performance",
            description: "Complex loops can impact performance.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Iterating Over Arrays",
            description:
              "Loops are often used to iterate over elements in an array.",
            codeSample:
              "// Printing each item in an inventory list\nconst inventory = ['Apple','Banana','Orange','Grape'];\nfor (let i = 0; i < inventory.length; i++) {\n  console.log(inventory[i]);\n}\n// Output: Apple, Banana, Orange, Grape",
          },
          {
            title: "Summing Array Elements",
            description: "Calculating the sum of all numbers in an array.",
            codeSample:
              "// Finding the total cost of items in a shopping cart\nconst prices = [10, 20, 30, 40];\nlet total = 0;\nfor (let i = 0; i < prices.length; i++) {\n  total += prices[i];\n}\nconsole.log(`Total cost: £${total}`); // Output: Total cost: £100",
          },
          {
            title: "Processing Data from APIs",
            description:
              "Loops can be used to process data received from an API call.",
            codeSample:
              "// Fetching and displaying a list of users from an API\nfetch('https://api.example.com/user/1')\n  .then(response => response.json())\n  .then(users => {\n    for (let i = 0; i < users.length; i++) {\n      console.log(users[i].name);\n    }\n  });\n// Output: List of user names from the API",
          },
          {
            title: "Searching Data",
            description:
              "Loops are useful for searching through arrays or collections.",
            codeSample:
              "// Finding the first even number in an array\nconst numbers = [1, 3, 7, 4, 9, 6];\nlet firstEven = null;\nfor (let i = 0; i < numbers.length; i++) {\n  if (numbers[i] % 2 === 0) {\n    firstEven = numbers[i];\n    break;\n  }\n}\nconsole.log(`First even number: ${firstEven}`); // Output: First even number: 4",
          },
          {
            title: "Process Multidimensional Arrays",
            description:
              "Loops can handle complex data structure like multidimensional arrays.",
            codeSample:
              "// Calculating the sum of all elements in a 2D array\nconst materix = [\n  [1, 2, 3],\n  [4, 5, 6],\n  [7, 8, 9]\n];\nlet sum = 0;\nfor (let i = 0; i < matrix.length; i++) {\n  for (let j = 0; j < matrix[i].length; j++) {\n    sum += matrix[i][j];\n  }\n}\nconsole.log(`Sum of all elements: ${sum}`); // Output: Sum of all elements: 45",
          },
          {
            title: "Animations",
            description:
              "Loops can be used to create animations by repeatedly updating the state.",
            codeSample:
              "// Moving an object across the screen\nlet position = 0;\nconst element = document.getElementById('animate');\nconst intervalId = setInterval(() => {\n  if (position >= 350) {\n    clearInterval(intervalId);\n  } else {\n    position++;\n    element.style.left = position + 'px';\n  }\n}, 10);\n// Output: Moves am HTML element to the right by 1px every 10ms until it reaches position 350",
          },
        ],
      },
    ],
  },
  {
    title: "Conditional Statements",
    description:
      "Conditional statements (`if`, `else if`, `else`, and `switch`) are used to perform different actions based on different conditions.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "let age = 20;\nif (age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Control Flow",
            description:
              "Provides control over the execution flow of the program.",
          },
          {
            title: "Readability",
            description: "Makes code more readable and logical.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Complex Conditons",
            description: "Can become hard to manage with multiple conditions.",
          },
          {
            title: "Nested Conditions",
            description: "Deeply nested conditions can reduce readability.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "User Authentication",
            description: "Checking if a user is logged in.",
            codeSample:
              "const user = {\n  isLoggedIn: true,\n  name: 'John Doe'\n};\n\nif (user.isLoggedIn) {\n  console.log(`Welcome, ${user.name}`);\n} else {\n  console.log('Please log in');\n}\n// Output: Welcome, John Doe",
          },
          {
            title: "Feature Toggles",
            description: "Enabling or disabling a feature based on user role.",
            codeSample:
              "const userRole = 'admin';\n\nif (userRole === 'admin') {\n  console.log('Admin dashboard is accessible');\n } else if (userRole === 'user') {\n  console.log('User dashboard is accessible.');\n} else {\n  console.log('Access denied.');\n}",
          },
          {
            title: "Form Validation",
            description: "Validating user input in a form.",
            codeSample:
              "const email = 'test@example.com';\n\nif (email.includes('@')) {\n  console.log('Valid email address.');\n} else {\n  console.log('Invalid email address.');\n}",
          },
          {
            title: "Displaying Different UI Elements",
            description: "Showing different buttons based on the device type.",
            codeSample:
              "const isMobileDevice = true;\n\nif (isMobileDevice) {\n  console.log('<button>Tap Here</button>');\n} else {\n  cnsole.log('<button>Click here</button>');\n}",
          },
          {
            title: "Inventory Management",
            description: "Checking if an item is in stock.",
            codeSample:
              "const inventory = {\n  apples: 10,\n  bananas: 0,\n  oranges: 5\n};\n\nconst item = 'bananas';\n\nif (inventory[item] > 0) {\n  console.log(`${item} are in stock.`);\n} else {\n  console.log(`${item} are out of stock.`);\n}",
          },
          {
            title: "Payment Processing",
            description: "Handling different payment methods.",
            codeSample:
              "const paymentMethod = 'credit card';\n\nif (paymentMethod === 'credit card') {\n  console.log('Processing credit card payment.) {\n} else if (paymentMethod === 'paypal') {\n  console.log('Processing PayPal payment.');\n} else {\n  console.log('Unknown payment method.');\n}",
          },
          {
            title: "Age Verification",
            description: "Checking if a user is old enough to access content.",
            codeSample:
              "const age = 20;\n\nif (age >= 180 {\n  console.log('Access granted');\n} else {\n  console.log('Access denied');\n}",
          },
          {
            title: "Shipping Cost Calculation",
            description: "Calculating shipping cost based on location.",
            codeSample:
              "const location = 'international';\n\nif (location === 'domestic') {\n  console.log('Shipping cost is £5')'\n} else if (location === 'International') {\n  console.log('Shipping cost is £15.);\n} else {\n  console.log('Invalid location.);\n}",
          },
          {
            title: "Conditional Rendering in React",
            description: "Rendering components conditionally based on state.",
            codeSample:
              "import React, { useState } from 'react';\n\nconst myComponent = () => {\n  const [isLoggedIn, setIsLoggedIn] = useState(false);\n\n  return (\n    <div>\n      {isLoggedIn ? (\n        <p>Welcome back</p>\n      ) : (\n        <p>Please log in.</p>\n      )}\n      <button onClick={() => setIsLoggedIn(!isloggedeIn)}>\n        {isLoggedIn ? 'Log Out' : 'Log In'}\n      </button>\n    </div>\n  );\n};\n\nexport default MyComponent;\n// Output: Between 'Welcome back' and 'Pleae log in.",
          },
          {
            title: "API Response Handling",
            description: "Handling different responses from an API.",
            codeSample:
              "fetch('https://api.example.com/data')\n  .then(response => {\n    if (response.ok) {\n      return response.json();\n    } else {\n      throw new Error('Network response was not ok.');\n    }\n  })\n  .then(data => {\n    console.log('Data fetched successfully:', data);\n  })\n  .catch(error => {\n    console.error('There has been a problem with your fetch operation:', error);\n  });\n// Output will vary depending on the API response",
          },
        ],
      },
    ],
  },
  {
    title: "Switch Statements",
    description:
      "The `switch` statement evaluates an expression, matching its value against a series of `case` clauses. If a match is found, the corrosponding block of code is executed.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const fruit = 'apple';\n\nswitch (fruit) {\n  case 'apple':\n    console.log('This is an apple.');\n    break;\n  case 'banana':\n    console.log('This is a banana.');\n    break;\n  case 'cherry':\n    console.log('This is a cherry.');\n    break;\n  default:\n    console.log('Unknown fruit.');\n}",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Readability",
            description: "Makes code more readable and logical.",
          },
          {
            title: "Organisation",
            description:
              "Keeps complex branching logic more organised than multiple `if-else` statements.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Break Requirement",
            description:
              "Each `case` must explicitly end with a `break` to prevent fall-through which can lead to errors if omitted.",
          },
          {
            title: "Limited Conditions",
            description:
              "Only works well with discrete values and equality checks, not complex conditions or ranges.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "User Role-Based Access Control",
            description:
              "Different user roles have different access rights, a switch statement can be used to execute different code blocks based on the user role.",
            codeSample:
              "const role = 'admin';\nswitch (role) {\n  case 'admin':\n    console.log('Full access granted.');\n    break;\n  case 'editor':\n    console.log('Edit access granted.');\n    break;\n  case 'viewer':\n    console.log('Read-only access granted.');\n    break;\n  default:\n    console.log('No access granted.');\n}",
          },
          {
            title: "Handling HTTP Response Status Codes",
            description:
              "When handling HTTP responses, different actions can be taken based on the status code of the response.",
            codeSample:
              "const statusCode = 404;\nswitch (statusCode) {\n  case 200:\n    console.log('OK: The request was successful.');\n    break;\n  case 201:\n    console.log('Created: The request was successful and a resource was created.');\n    break;\n  case 400:\n    console.log('Bad Request: The request could not be understood or was missing required parameters.');\n    break;\n  case 401:\n    console.log('Unauthorized: Authentication failed or user does not have permissions for the desired action.');\n    break;\n  case 404:\n    console.log('Not Found: The requested resource could not be found.');\n    break;\n  case 500:\n    console.log('Internal Server Error: An error occurred on the server.');\n    break;\n  default:\n    console.log('Unexpected status code.');\n}",
          },
        ],
      },
    ],
  },
  {
    title: "Ternary Operator",
    description:
      "The ternary operator evaluates a condition and returns one of two values depending on whether the condition is `true` or `false`. It is written as `condition ? exprIfTrue : exprIfFalse`.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const age = 18;\nconst canVote = age >= 18 ? 'Yes' : 'No';\n\nconsole.log(`Can vote: ${canVote}`); // Output: Can vote: Yes",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Conciseness",
            description:
              "Reduces the verbosity of `if-else` statements for simple conditional assignments.",
          },
          {
            title: "Inline Use",
            description:
              "Can be used directly within expressions, making it suitable for inline conditions in JSX or other contexts.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Readability",
            description:
              "Can reduce readability if overused or applied to complex conditions.",
          },
          {
            title: "Complexity",
            description:
              "Not ideal for multiple branches or complex logic due to its inline nature..",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Conditional Rendering in React",
            description:
              "Displaying different content based on whether a user is logged in or not.",
            codeSample:
              "const isLoggedIn = true;\nconst greeting = isLoggedIn ? 'Welcome back!' : 'Please log in.';\nconsole.log(greeting); // Output: Welcome back!",
          },
          {
            title: "Setting Default Values",
            description:
              "Assigning a default value if a certain variable is `null` or `undefined`.",
            codeSample:
              "const userName = null;\nconst displayName = userName ? userName : 'Guest';\nconsole.log(displayName); // Output: Guest",
          },
          {
            title: "Simplifying Conditional Assignments",
            description:
              "Assigning a value to a variable based on a condition.",
            codeSample:
              "const age = 20;\nconst canVote = age >= 18 ? 'Yes' : 'No';\nconsole.log(canVote); // Output: Yes",
          },
          {
            title: "Conditional CSS Class Assignment",
            description:
              "Applying a CSS class based on a condition in a React component.",
            codeSample:
              "const isActive = false;\nconst buttonClass = isActive ? 'button-active' : 'button-inactive';\nconsole.log(buttonClass); // Output: button-inactive",
            notes:
              "Or use Jed Watson's Classnames utility package - https://github.com/JedWatson/classnames",
          },
          {
            title: "Displaying Fallback Text",
            description:
              "Showing a fallback text when a value is empty or null.",
            codeSample:
              "const message = '';\nconst displayMessage = message ? message : 'No new messages';\nconsole.log(displayMessage); // Output: No new messages",
          },
          {
            title: "Calculating Discounts",
            description: "Applying a discount based on the total amount.",
            codeSample:
              "const totalAmount = 150;\nconst discount = totalAmount > 100 ? '10%' : '5%';\nconsole.log(discount); // Output: 10%",
          },
        ],
      },
    ],
  },
  {
    title: "Asynchronous Programming",
    description:
      "JavaScript handles asynchronous operations using callbacks, promises and async/await.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "function fetchData() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve('Data Fetched'), 1000);\n  });\n}\n\nasync function getData() {\n  const data = await fetchData();\n  console.log(data);\n}\n\ngetData();",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Non-Blocking",
            description:
              "Enables non-blocking operations, improving performance.",
          },
          {
            title: "Promises",
            description: "Promises and async/await simplify asynchronous code.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Callback Hell",
            description: "Nested callbacks can make code hard to read.",
          },
          {
            title: "Error Handling",
            description: "Requires careful handling of asynchronous errors.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Fetching Data from an API",
            description:
              "Making network requests to fetch data from a remote server without blocking the main thread.",
            codeSample:
              "async function fetchData(url) {\n  try {\n    const response = await fetch(url);\n    if (!response.ok) {\n      throw new Error('Network response was not ok');\n    }\n    const data = await response.json();\n    console.log('Data fetched successfully:', data);\n  } catch (error) {\n    console.error('Fetching data failed:', error);\n  }\n}\nfetchData('https://api.example.com/data');",
          },
          {
            title: "Delaying Execution with setTimeout",
            description:
              "Performing an action after a specified delay without blocking the main thread.",
            codeSample:
              "console.log('Start');\nsetTimeout(() => {\n  console.log('Executed after 2 seconds');\n}, 2000);\nconsole.log('End');",
          },
          {
            title: "Real-Time Data with WebSockets",
            description:
              "Establish a WebSocket connection to receive real-time updates from a server.",
            codeSample:
              "const socket = new WebSocket('wss://example.com/socket');\n\nsocket.addEventListener('open', () => {\n  console.log('WebSocket connection opened');\n});\n\nsocket.addEventListener('message', event => {\n  console.log('Message from server:', event.data);\n});\n\nsocket.addEventListener('close', () => {\n  console.log('WebSocket connection closed');\n});",
          },
          {
            title: "Reading Files with FileReader",
            description: "Reading files asynchronously in the browser.",
            codeSample:
              "const fileInput = document.getElementById('fileInput');\nfileInput.addEventListener('change', () => {\n  const file = fileInput.files[0];\n  const reader = new FileReader();\n  reader.onload = () => {\n    console.log('File content:', reader.result);\n  };\n  reader.onerror = () => {\n    console.error('Error reading file');\n  };\n  reader.readAsText(file);\n});",
          },
          {
            title: "Handling User Inputs",
            description:
              "Debouncing user input in a search field to avoid excessive API calls.",
            codeSample:
              "let timeoutId;\nconst searchInput = document.getElementById('searchInput');\nsearchInput.addEventListener('input', () => {\n  clearTimeout(timeoutId);\n  timeoutId = setTimeout(() => {\n    const query = searchInput.value;\n    fetchSearchResults(query);\n  }, 300);\n});\n\nasync function fetchSearchResults(query) {\n  try {\n    const response = await fetch(`https://api.example.com/search?q=${query}`);\n    const results = await response.json();\n    console.log('Search results:', results);\n  } catch (error) {\n    console.error('Error fetching search results:', error);\n  }\n}",
          },
          {
            title: "Image Loading",
            description:
              "Loading images asynchronously to improve page load performance.",
            codeSample:
              "function loadImage(url) {\n  return new Promise((resolve, reject) => {\n    const img = new Image();\n    img.onload = () => resolve(img);\n    img.onerror = () => reject(new Error('Image load error'));\n    img.src = url;\n  });\n}\n\nloadImage('https://example.com/image.jpg')\n  .then(img => {\n    document.body.appendChild(img);\n    console.log('Image loaded successfully');\n  })\n  .catch(error => {\n    console.error(error);\n  });",
          },
          {
            title: "Periodic Tasks with setInterval",
            description:
              "Running a function periodically, such as updating a clock.",
            codeSample:
              "function updateClock() {\n  const now = new Date();\n  const hours = now.getHours();\n  const minutes = now.getMinutes();\n  const seconds = now.getSeconds();\n  console.log(`Current time: ${hours}:${minutes}:${seconds}`);\n}\nsetInterval(updateClock, 1000);",
          },
          {
            title: "Background Sync with Service Workers",
            description:
              "Syncing data in the background using service workers.",
            codeSample:
              "self.addEventListener('sync', event => {\n  if (event.tag === 'sync-data') {\n    event.waitUntil(syncData());\n  }\n});\n\nasync function syncData() {\n  try {\n    const data = await fetch('/offline-data');\n    await sendToServer(data);\n    console.log('Data synced successfully');\n  } catch (error) {\n    console.error('Error syncing data:', error);\n  }\n}",
          },
        ],
      },
    ],
  },
  {
    title: "Event Handling",
    description:
      "JavaScript handles user interactions through event handling, allowing functions to be called in response to events.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "document.getElementById('myButton').addEventListener('click', () => {\n  alert('Button clicked);\n});",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Interactive",
            description: "Allows creating interactive web applications.",
          },
          {
            title: "Versatile",
            description:
              "Supports a wide range of events like clicks, keypresses, etc.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Event Bubbling",
            description: "Requires understanding event propagation.",
          },
          {
            title: "Performance",
            description:
              "Poorly managed event handlers can impact performance.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Button Click Event",
            description: "Performing an action when a button is clicked.",
            codeSample:
              "document.getElementById('myButton').addEventListener('click', () => {\n  console.log('Button clicked!');\n});",
          },
          {
            title: "Form Submission",
            description: "Validating form data before submission.",
            codeSample:
              "document.getElementById('myForm').addEventListener('submit', (event) => {\n  event.preventDefault();\n  const formData = new FormData(event.target);\n  console.log('Form submitted with data:', Object.fromEntries(formData.entries()));\n});",
          },
          {
            title: "Input Field Change",
            description:
              "Updating the UI when the value of an input field changes.",
            codeSample:
              "document.getElementById('myInput').addEventListener('input', (event) => {\n  const value = event.target.value;\n  document.getElementById('display').textContent = value;\n});",
          },
          {
            title: "Window Resize",
            description:
              "Adjusting the layout when the browser window is resized.",
            codeSample:
              "window.addEventListener('resize', () => {\n  const width = window.innerWidth;\n  const height = window.innerHeight;\n  console.log(`Window size: ${width}x${height}`);\n});",
          },
          {
            title: "Mouse Hover",
            description:
              "Highlighting an element when the mouse hovers over it.",
            codeSample:
              "document.getElementById('myElement').addEventListener('mouseover', () => {\n  document.getElementById('myElement').classList.add('highlight');\n});\ndocument.getElementById('myElement').addEventListener('mouseout', () => {\n  document.getElementById('myElement').classList.remove('highlight');\n});",
          },
          {
            title: "Keyboard Events",
            description: "Performing actions based on key presses.",
            codeSample:
              "document.addEventListener('keydown', (event) => {\n  if (event.key === 'Enter') {\n    console.log('Enter key pressed');\n  }\n});",
          },
          {
            title: "Drag and Drop",
            description: "Handling drag and drop operations.",
            codeSample:
              "const draggable = document.getElementById('draggable');\nconst dropzone = document.getElementById('dropzone');\ndraggable.addEventListener('dragstart', (event) => {\n  event.dataTransfer.setData('text', event.target.id);\n});\ndropzone.addEventListener('dragover', (event) => {\n  event.preventDefault();\n});\ndropzone.addEventListener('drop', (event) => {\n  event.preventDefault();\n  const data = event.dataTransfer.getData('text');\n  const draggedElement = document.getElementById(data);\n  dropzone.appendChild(draggedElement);\n});",
          },
          {
            title: "Context Menu",
            description: "Customising the right-click context menu.",
            codeSample:
              "document.addEventListener('contextmenu', (event) => {\n  event.preventDefault();\n  console.log('Custom context menu');\n});",
          },
          {
            title: "Focus and Blur",
            description: "Handling focus and blur events on input fields.",
            codeSample:
              "const inputField = document.getElementById('myInput');\ninputField.addEventListener('focus', () => {\n  console.log('Input field focused');\n});\ninputField.addEventListener('blur', () => {\n  console.log('Input field blurred');\n});",
          },
          {
            title: "Page Load Event",
            description: "Executing code when the page is fully loaded.",
            codeSample:
              "window.addEventListener('load', () => {\n  console.log('Page fully loaded');\n});",
          },
        ],
      },
    ],
  },
  {
    title: "Modules",
    description:
      "JavaScript modules allow code to be separated into reusable pieces, facilitating maintainablt code through `import` and `export` statements.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "// math.js\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\n\n// main.js\nimport { add, subtract } from './math.js';\nconsole.log(add(5, 3));\nconsole.log(subtract(5, 3));",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Encapsulation",
            description:
              "Encapsulates code and avoids global namespace pollution.",
          },
          {
            title: "Reuse",
            description:
              "Promotes code reuse across different parts of an application.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Dependency Management",
            description: "Managing dependencies can be complex.",
          },
          {
            title: "Browser Support",
            description:
              "Requires a build step or transpililation for older browsers.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Utility Functions",
            description:
              "Creating a module for utility functions that can be reused across different parts of the application.",
            codeSample:
              "// utils.js\nexport function add(a, b) {\n  return a + b;\n}\n\nexport function subtract(a, b) {\n  return a - b;\n}\n\n// main.js\nimport { add, subtract } from './utils.js';\n\nconsole.log(add(5, 3)); // Output: 8\nconsole.log(subtract(5, 3)); // Output: 2",
          },
          {
            title: "Configuration Management",
            description:
              "Creating a configuration module to manage different environment settings.",
            codeSample:
              "// config.js\nconst config = {\n  apiEndpoint: 'https://api.example.com',\n  timeout: 5000\n};\n\nexport default config;\n\n// app.js\nimport config from './config.js';\n\nconsole.log(`API Endpoint: ${config.apiEndpoint}`); // Output: API Endpoint: https://api.example.com\nconsole.log(`Timeout: ${config.timeout}`); // Output: Timeout: 5000",
          },
          {
            title: "Service Layer",
            description:
              "Creating a module for interacting with an external API.",
            codeSample:
              "// apiService.js\nconst API_URL = 'https://api.example.com';\n\nexport async function fetchData(endpoint) {\n  const response = await fetch(`${API_URL}/${endpoint}`);\n  if (!response.ok) {\n    throw new Error('Network response was not ok');\n  }\n  return response.json();\n}\n\n// main.js\nimport { fetchData } from './apiService.js';\n\nfetchData('data').then(data => {\n  console.log(data);\n}).catch(error => {\n  console.error('Error fetching data:', error);\n});",
          },
          {
            title: "UI Components",
            description:
              "Creating a module for reusable UI components in a React application.",
            codeSample:
              "// Button.js\nimport React from 'react';\n\nfunction Button({ onClick, children }) {\n  return <button onClick={onClick}>{children}</button>;\n}\n\nexport default Button;\n\n// App.js\nimport React from 'react';\nimport Button from './Button';\n\nfunction App() {\n  return (\n    <div>\n      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>\n    </div>\n  );\n}\n\nexport default App;",
          },
          {
            title: "State Managment",
            description:
              "Creating a module for managing the application state using a simple store pattern.",
            codeSample:
              "// store.js\nconst state = {\n  user: null,\n  settings: {}\n};\n\nexport function setUser(user) {\n  state.user = user;\n}\n\nexport function getUser() {\n  return state.user;\n}\n\nexport function setSettings(settings) {\n  state.settings = settings;\n}\n\nexport function getSettings() {\n  return state.settings;\n}\n\n// main.js\nimport { setUser, getUser, setSettings, getSettings } from './store.js';\n\nsetUser({ name: 'John Doe' });\nsetSettings({ theme: 'dark' });\n\nconsole.log(getUser()); // Output: { name: 'John Doe' }\nconsole.log(getSettings()); // Output: { theme: 'dark' }",
          },
          {
            title: "Authentication",
            description: "Creating a module to handle user authentication.",
            codeSample:
              "// auth.js\nexport function login(username, password) {\n  // Simulate an API call\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (username === 'user' && password === 'pass') {\n        resolve('Login successful');\n      } else {\n        reject('Invalid credentials');\n      }\n    }, 1000);\n  });\n}\n\nexport function logout() {\n  console.log('User logged out');\n}\n\n// main.js\nimport { login, logout } from './auth.js';\n\nlogin('user', 'pass').then(message => {\n  console.log(message); // Output: Login successful\n  logout();\n}).catch(error => {\n  console.error(error); // Output: Invalid credentials\n});",
          },
          {
            title: "Logging",
            description:
              "Creating a logging module to standardise how logs are handled in the application.",
            codeSample:
              "// logger.js\nexport function logInfo(message) {\n  console.log(`INFO: ${message}`);\n}\n\nexport function logError(message) {\n  console.error(`ERROR: ${message}`);\n}\n\nexport function logWarning(message) {\n  console.warn(`WARNING: ${message}`);\n}\n\n// main.js\nimport { logInfo, logError, logWarning } from './logger.js';\n\nlogInfo('Application started');\nlogWarning('Low disk space');\nlogError('Unhandled exception');",
          },
        ],
      },
    ],
  },
  {
    title: "Error Handling",
    description:
      "JavaScript handles errors using `try`, `catch`, `finally` blocks, allowing for graceful error management and debugging.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "try {\n  let result = someFunction();\n  console.log(result);\n} catch (error) {\n  console.error('An error occurred:', error);\n} finally {\n  console.log('Execution finished.);\n}",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Robustness",
            description:
              "Helps in writing robust code by catching and managing errors.",
          },
          {
            title: "Debugging",
            description: "Simplifies debugging and error tracing.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Overhead",
            description: "Can add complexity and overhead if overused.",
          },
          {
            title: "Silent Failures",
            description:
              "Errors might be caught but not properly handled, leading to silent failures.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Fetching Data from an API with Error Handling",
            description:
              "Fetching data from an external API and handling potential errors such as networl issues or non-OK responses.",
            codeSample:
              "async function fetchData(url) {\n  try {\n    const response = await fetch(url);\n    if (!response.ok) {\n      throw new Error('Network response was not ok');\n    }\n    const data = await response.json();\n    console.log('Data fetched successfully:', data);\n  } catch (error) {\n    console.error('Fetching data failed:', error);\n  }\n}\nfetchData('https://api.example.com/data');",
          },
          {
            title: "Form Submission with Validation and Error Handling",
            description:
              "Handling form submission, validating user input, and providing feedback for validation errors or submission failures.",
            codeSample:
              "document.getElementById('myForm').addEventListener('submit', async (event) => {\n  event.preventDefault();\n  const formData = new FormData(event.target);\n  const email = formData.get('email');\n  if (!validateEmail(email)) {\n    console.error('Invalid email address');\n    return;\n  }\n  try {\n    const response = await fetch('/submit-form', {\n      method: 'POST',\n      body: formData\n    });\n    if (!response.ok) {\n      throw new Error('Form submission failed');\n    }\n    const result = await response.json();\n    console.log('Form submitted successfully:', result);\n  } catch (error) {\n    console.error('Error during form submission:', error);\n  }\n});\n\nfunction validateEmail(email) {\n  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return re.test(email);\n}",
          },
        ],
      },
    ],
  },
  {
    title: "Promises",
    description:
      "Promises provide a cleaner and more manageable way to handle asynchronous operations compared to traditional callback-based approaches. They allow chaining of asynchronous actions and handle of errors in a structured manner.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const fetchData = (url) => { \n  return new Promise((resolve, reject) => { \n    setTimeout(() => { \n      // Simulate fetching data \n      if (url) { \n        resolve(`Data from ${url}`); \n      } else { \n        reject('URL not provided'); \n      } \n    }, 1000); \n  }); \n}; \n\nfetchData('https://api.example.com') \n  .then((data) => { \n    console.log(data); // Output: Data from https://api.example.com \n  }) \n  .catch((error) => { \n    console.error(error); // Output: URL not provided \n  });",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Manageable Asynchrony",
            description:
              "Promises make it easier to write and maintain asynchronous code by avoiding 'callback hell'.",
          },
          {
            title: "Chaining",
            description:
              "They allow for chaining multiple asynchronous operations in a sequential manner using `.then()`.",
          },
          {
            title: "Centralised Error Handling",
            description:
              "Errors can be caught in a single `.catch()` block, making it easier to manage exceptions.",
          },
          {
            title: "States",
            description:
              "Promises have states (`pending`, `fulfilled`, `rejected`), which help in understanding and managing the lifecycle of asynchronous operations.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Learning Curve",
            description:
              "The concept of Promises can be initially confusing for those new to asynchronous programming.",
          },
          {
            title: "Verbosity",
            description:
              "Handling complex sequences of asynchronous tasks can still be verbose especially without async/await.",
          },
          {
            title: "Compatability",
            description:
              "Older browsers or environments may not support Promises without polyfills.",
          },
          {
            title: "Overhead",
            description:
              "Can add complexity in cases where simple callbacks would suffice.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Fetching Data from an API",
            description:
              "Making a network request to fetch data from an external API.",
            codeSample:
              "function fetchData(url) {\n  return new Promise((resolve, reject) => {\n    fetch(url)\n      .then(response => {\n        if (!response.ok) {\n          throw new Error('Network response was not ok');\n        }\n        return response.json();\n      })\n      .then(data => {\n        resolve(data);\n      })\n      .catch(error => {\n        reject('Fetching data failed:', error);\n      });\n  });\n}\n\nfetchData('https://api.example.com/data')\n  .then(data => {\n    console.log('Data fetched successfully:', data);\n  })\n  .catch(error => {\n    console.error(error);\n  });",
          },
          {
            title: "Reading Files with FileReader",
            description: "Reading a file's content using the FileReader API.",
            codeSample:
              "function readFile(file) {\n  return new Promise((resolve, reject) => {\n    const reader = new FileReader();\n    reader.onload = () => resolve(reader.result);\n    reader.onerror = () => reject(new Error('Error reading file'));\n    reader.readAsText(file);\n  });\n}\n\nconst fileInput = document.getElementById('fileInput');\nfileInput.addEventListener('change', () => {\n  const file = fileInput.files[0];\n  readFile(file)\n    .then(content => {\n      console.log('File content:', content);\n    })\n    .catch(error => {\n      console.error(error);\n    });\n});",
          },
          {
            title: "Sequential Asynchronous Operations",
            description:
              "Performing a series of dependent asynchronous operations.",
            codeSample:
              "function authenticateUser() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve({ userId: 1 }), 1000);\n  });\n}\n\nfunction fetchUserProfile(userId) {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve({ userId, name: 'John Doe' }), 1000);\n  });\n}\n\nauthenticateUser()\n  .then(user => fetchUserProfile(user.userId))\n  .then(profile => {\n    console.log('User profile:', profile);\n  })\n  .catch(error => {\n    console.error('Error:', error);\n  });",
          },
          {
            title: "Running Multiple Promises Concurrently with Promise.All",
            description: "Fetchinf data from multiple APIs concurrently.",
            codeSample:
              "const fetchUserData = fetch('https://api.example.com/user');\nconst fetchPostsData = fetch('https://api.example.com/posts');\n\nPromise.all([fetchUserData, fetchPostsData])\n  .then(responses => Promise.all(responses.map(response => response.json())))\n  .then(([userData, postsData]) => {\n    console.log('User data:', userData);\n    console.log('Posts data:', postsData);\n  })\n  .catch(error => {\n    console.error('Error fetching data:', error);\n  });",
          },
          {
            title: "Timer-Based Operations",
            description: "Executing a function after a delay using Promises.",
            codeSample:
              "function delay(milliseconds) {\n  return new Promise(resolve => setTimeout(resolve, milliseconds));\n}\n\ndelay(2000).then(() => {\n  console.log('Executed after 2 seconds');\n});",
          },
        ],
      },
    ],
  },
  {
    title: "Callbacks",
    description:
      "Callbacks allow functions to be executed asynchronously after the completion of another function. They are essential for non-blocking code, allowing JavaScript to continue executing while waiting for an asynchronous operation to complete.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "function doSomething(callback) {\n  console.log('Doing something...');\n  callback();\n}\n\nfunction myCallback() {\n  console.log('Callback function executed.');\n}\n\ndoSomething(myCallback);",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Ease of Use",
            description:
              "Callbacks are straightforward to implement and understand, especially for simple asynchronous tasks.",
          },
          {
            title: "Flexibilty",
            description:
              "They provide a flexible way to handle a variety of asynchronous tasks and events.",
          },
          {
            title: "Immediate Execution",
            description:
              "Callbacks can be executed as soon as the asynchronous operation completed, without waiting for any wrapping mechanism like Promises.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Callback Hell",
            description:
              "Nested callbacks can lead to complicated and difficult-to-read code structures, often referred to as 'callback hell'.",
          },
          {
            title: "Maintenance",
            description:
              "Managing and debugging deeply nested callbacks can be cumbersome and error-prone.",
          },
          {
            title: "Complex Error Management",
            description:
              "Handling errors across multiple layers of callbacks can be complex and often requires additional logic.",
          },
          {
            title: "Difficult to Chain",
            description:
              "Chaining asynchronous operations with callbacks can be tricky and less intuitive than using Promises or `async/await`.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Asynchronous Programming",
            description:
              "Callbacks are often used in asynchronous programming to handle tasks that take some time to complete, (e.g network requests, database operations).",
            codeSample:
              "function fetchData(url, callback) {\n  setTimeout(() => {\n    if (url) {\n      callback(null, `Data from ${url}`);\n    } else {\n      callback('URL not provided');\n    }\n  }, 1000);\n}\n\nfetchData('https://api.example.com', (error, data) => {\n  if (error) {\n    console.error(error); // Output: URL not provided\n  } else {\n    console.log(data); // Output: Data from https:api.example.com\n  }\n});",
          },
          {
            title: "Event Handling",
            description:
              "Callbacks are used to handle events, such as user interactions (clicks, form submissions) and other DOM events.",
            codeSample:
              "document.getElementById('myButton').addEventListener('click', function() {\n  alert('Button was clicked');\n});",
          },
          {
            title: "Timers",
            description:
              "Functions like `setTimeout` and `setInterval` use callbacks to execute code after a specified delay.",
            codeSample:
              "setTimeout(() => {\n  console.log('This message is displayed after 2 seasons');\n}, 2000);",
          },
          {
            title: "Array Methods",
            description:
              "Array methods like `forEach`, `map`, `filter`, and `reduce` use callbacks to process each element of the array.",
            codeSample:
              "const numbers = [1, 2, 3, 4, 5];\n\n// Using forEach to log each number\nnumbers.forEach((number) => {\n  console.log(number);\n});\n\n// Using map to create a new array with doubled values\nconst doubled = numbers.map((number) => number * 2);\nconsole.log(doubled); // Output: [2, 4, 6, 8, 10]",
          },
        ],
      },
      {
        title: "Callback Hell",
        description:
          "Callback hell occurs when multiple asynchronous operations are nested within each other, leading to deeply nested and hard-to-read code.",
        meta: "problem",
        codeSample:
          "function firstTask(callback) {\n  setTimeout(() => {\n    console.log('First task completed');\n    callback();\n  }, 1000);\n}\n\nfunction secondTask(callback) {\n  setTimeout(() => {\n    console.log('Second task completed');\n    callback();\n  }, 1000);\n}\n\nfunction thirdTask(callback) {\n  setTimeout(() => {\n    console.log('Third task completed');\n    callback();\n  }, 1000);\n}\n\n// Nesting callbacks leading to callback hell\nfirstTask(() => {\n  secondTask(() => {\n    thirdTask(() => {\n      console.log('All tasks completed');\n    });\n  });\n});",
      },
      {
        title: "Potential Solutions for Callback Hell",
        description: "",
        meta: "solution",
        subBlocks: [
          {
            title: "Modularisation",
            description:
              "Break down complex callbacks into smaller, reusable functions.",
            codeSample:
              "function firstTask() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      console.log('First task completed');\n      resolve();\n    }, 1000);\n  });\n}\n\nfunction secondTask() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      console.log('Second task completed');\n      resolve();\n    }, 1000);\n  });\n}\n\nfunction thirdTask() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      console.log('Third task completed');\n      resolve();\n    }, 1000);\n  });\n}\n\n// Using Promises to avoid callback hell\nfirstTask()\n  .then(() => secondTask())\n  .then(() => thirdTask())\n  .then(() => {\n    console.log('All tasks completed');\n  });\n\nasync function runTasks() {\n  await firstTask();\n  await secondTask();\n  await thirdTask();\n  console.log('All tasks completed');\n\nrunTasks();",
          },
          {
            title: "Promises",
            description:
              "Use Promises to handle asynchronous operations more cleanly.",
            codeSample:
              "function firstTask() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      console.log('First task completed');\n      resolve();\n    }, 1000);\n  });\n}\n\nfunction secondTask() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      console.log('Second task completed');\n      resolve();\n    }, 1000);\n  });\n}\n\nfunction thirdTask() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      console.log('Third task completed');\n      resolve();\n    }, 1000);\n  });\n}\n\n// Using Promises to avoid callback hell\nfirstTask()\n  .then(() => secondTask())\n  .then(() => thirdTask())\n  .then(() => {\n    console.log('All tasks completed');\n  });",
          },
          {
            title: "Async/Await",
            description:
              "Use async/await syntax for more readable and maintainable asynchronous code.",
            codeSample:
              "async function runTasks() {\n  await firstTask();\n  await secondTask();\n  await thirdTask();\n  console.log('All tasks completed');\n}\n\nrunTasks();",
          },
        ],
      },
    ],
  },
  {
    title: "Math",
    description:
      "The `Math` object in JavaScript provides a collection of mathematical functions and constants.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const radius = 5; \nconst area = Math.PI * Math.pow(radius, 2); // Calculate area of a circle \nconsole.log(`Area: ${area}`); \n\nconst randomValue = Math.random() * 100; // Generate a random number between 0 and 100 \nconsole.log(`Random Value: ${randomValue}`); \n\nconst roundedValue = Math.round(3.6); // Round 3.6 to the nearest integer \nconsole.log(`Rounded Value: ${roundedValue}`);",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Comprehensive",
            description:
              "Offers a broad range of functions for mathematical calculations, including `Math.random()`, `Math.round()`, etc....",
          },
          {
            title: "Precision",
            description:
              "Supports high-precision calculations for complex mathematical operations.",
          },
          {
            title: "Built-in",
            description:
              "No need for additional libraries or modules; `Math` is built into JavaScript and ready to use.",
          },
          {
            title: "Consistency",
            description:
              "Provides consistent results across different JavaScript environments.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "No Customisation",
            description:
              "Limited to the functions provided by the `Math` object, which may not cover all advanced mathematical needs.",
          },
          {
            title: "Lack of Advanced Features",
            description:
              "Does not support some advanced mathematical concepts and functions out-of-the-box.",
          },
          {
            title: "Pseudo-Random",
            description:
              "`Math.round()` generates pseudo-random numbers, which may not be suitable for cryptographic or highly sensitive applications.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Calculating Total Price with Tax",
            description:
              "Calculating the total price of items in a shopping cart including tax.",
            codeSample:
              "function calculateTotalPrice(items, taxRate) {\n  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);\n  const tax = subtotal * taxRate;\n  const total = subtotal + tax;\n  return total.toFixed(2);\n}\n\nconst items = [\n  { name: 'Laptop', price: 999.99, quantity: 1 },\n  { name: 'Mouse', price: 19.99, quantity: 2 },\n];\nconst taxRate = 0.08;\nconsole.log(`Total Price: $${calculateTotalPrice(items, taxRate)}`); // Output: Total Price: $1138.37",
          },
          {
            title: "BMI Calculation",
            description:
              "Calculating the Body Mass Index (BMI) based on a person's height and weight.",
            codeSample:
              "function calculateBMI(weight, height) {\n  const bmi = weight / (height * height);\n  return bmi.toFixed(2);\n}\n\nconst weight = 70; // in kilograms\nconst height = 1.75; // in meters\nconsole.log(`BMI: ${calculateBMI(weight, height)}`); // Output: BMI: 22.86",
          },
        ],
      },
    ],
  },
  {
    title: "Text/Strings",
    description:
      "Text or strings in JavaScript are sequences of characters used to represent textual data. JavaScript provides a range of methods for manipulating strings, such as concatenations, slicing and searching.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          'const greeting = "Hello"; \nconst name = "World"; \nconst message = `${greeting}, ${name}!`; // Concatenate strings using template literals \nconsole.log(message); // Output: Hello, World! \n\nconst upperCaseMessage = message.toUpperCase(); // Convert string to uppercase \nconsole.log(upperCaseMessage); // Output: HELLO, WORLD! \n\nconst substring = message.substring(7, 12); // Extract substring "World" \nconsole.log(substring); // Output: World',
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Comprehensive Methods",
            description:
              "Includes methods for slicing, searching, replacing and concatenating strings.",
          },
          {
            title: "Template Literals",
            description:
              "Supports template literals for easier string inerpolation and multi-line strings.",
          },
          {
            title: "Built-in",
            description:
              "No need for additional libraries or modules; string methids are built into JavaScript and ready to use.",
          },
          {
            title: "Unicode Support",
            description:
              "Supports Unicode, allowing for international text manipulation.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Immutability",
            description:
              "Strings are immutable in JavaScript, meaning every modification creates a new string, which can impact performance for large-scale manipulations.",
          },
          {
            title: "Limited Built-in Formatting",
            description:
              "Lacks built-in methods for more advanced text formatting and localisation without external libraries.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Formatting User Input for Display",
            description:
              "Cleaning and formatting user input before rendering on a web page/application.",
            codeSample:
              "function formatUserName(input) {\n  const trimmedInput = input.trim();\n  const capitalizedInput = trimmedInput.charAt(0).toUpperCase() + trimmedInput.slice(1).toLowerCase();\n  return capitalizedInput;\n}\n\nconst userInput = '  jOhN doE  ';\nconst formattedName = formatUserName(userInput);\nconsole.log(`Hello, ${formattedName}!`); // Output: Hello, John doe!",
          },
          {
            title: "Generating a URL Slug",
            description: "Creating a URL-friendly slug from a blog post.",
            codeSample:
              "function generateSlug(title) {\n  return title\n    .toLowerCase()\n    .trim()\n    .replace(/[^a-z0-9]+/g, '-')\n    .replace(/(^-|-$)/g, '');\n}\n\nconst title = 'How to Use JavaScript for Beginners!';\nconst slug = generateSlug(title);\nconsole.log(`Generated slug: ${slug}`); // Output: Generated slug: how-to-use-javascript-for-beginners",
          },
        ],
      },
    ],
  },
  {
    title: "Fetch()",
    description:
      "`fetch()` is a modern JavaScript function for making HTTP requests. It returns a `Promise` that resolves to the response object representing the response to the request.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "fetch('https://api.example.com/data') \n  .then(response => { \n    if (!response.ok) { \n      throw new Error('Network response was not ok'); \n    } \n    return response.json(); \n  }) \n  .then(data => { \n    console.log(data); // Handle the data from the API \n  }) \n  .catch(error => { \n    console.error('Fetch error:', error); // Handle errors \n  });",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Promise-Based",
            description:
              "Returns a `Promise`, allowing for easier handling of asynchronous requests compared to older methods like `XMLHttpRequest`.",
          },
          {
            title: "Flexible",
            description:
              "Supports various HTTP methods (`GET`, `POST`, etc.), and can handle JSON, text and more.",
          },
          {
            title: "Native Support Built-in",
            description:
              "Available natively in modern browsers, no need for external libraries for basic HTTP requests.",
          },
          {
            title: "Readable Syntax",
            description:
              "Provides a cleaner and more readable syntax for making HTTP requests.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Not Universal",
            description:
              "Not supported in all browsers, especially older ones, requiring polyfills or alternative methods.",
          },
          {
            title: "Response Handling",
            description:
              "The `fetch()` API does not automatically reject HTTP errors; additional checks are required to handle non-2xx responses.",
          },
          {
            title: "Cross-Origin Requests",
            description:
              "Subject to Cross-Origin Resource Sharing (CORS) policies, which can restrict requests to certain resources.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Fetching Data from a Weather API",
            description:
              "Retrieving the current weather information for a specific location from an external weather API.",
            codeSample:
              "function fetchWeather(city) {\n  const apiKey = 'your_api_key_here';\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;\n  fetch(url)\n    .then(response => {\n      if (!response.ok) {\n        throw new Error('Network response was not ok');\n      }\n      return response.json();\n    })\n    .then(data => {\n      console.log('Weather data:', data);\n      const temperature = data.main.temp;\n      const description = data.weather[0].description;\n      console.log(`Temperature: ${temperature}, Description: ${description}`);\n    })\n    .catch(error => {\n      console.error('Fetching weather data failed:', error);\n    });\n}\n\nfetchWeather('London');",
          },
          {
            title: "Submitting a Contact Form",
            description:
              "Submitting a contact form to a server and handling the response.",
            codeSample:
              "function submitContactForm(formData) {\n  fetch('https://example.com/contact', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(formData)\n  })\n    .then(response => {\n      if (!response.ok) {\n        throw new Error('Network response was not ok');\n      }\n      return response.json();\n    })\n    .then(data => {\n      console.log('Form submission successful:', data);\n    })\n    .catch(error => {\n      console.error('Form submission failed:', error);\n    });\n}\n\nconst formData = {\n  name: 'John Doe',\n  email: 'johndoe@example.com',\n  message: 'Hello, this is a test message!'\n};\nsubmitContactForm(formData);",
          },
        ],
      },
    ],
  },
  {
    title: "Working with JSON",
    description:
      "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy to read and write. It is widely used for transmitting data in web applications.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          '// Convert JavaScript object to JSON string \nconst obj = { name: "John", age: 30 }; \nconst jsonString = JSON.stringify(obj); \nconsole.log(jsonString); // Output: {"name":"John","age":30} \n\n// Parse JSON string to JavaScript object \nconst parsedObj = JSON.parse(jsonString); \nconsole.log(parsedObj); // Output: { name: "John", age: 30 }',
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Human-Readable",
            description:
              "JSON format is easy for humans to read and write, and for machines to parse and generate.",
          },
          {
            title: "Compact",
            description:
              "More compact than XML, making it efficient for transmitting data over the web.",
          },
          {
            title: "JavaScript Integtation",
            description:
              "Directly supported by JavaScript with `JSON.parse()` and `JSON.stringify()` methods.",
          },
          {
            title: "Cross-Platform",
            description:
              "Supported across various programming languages and platforms, facilitating data exchange.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "No Functions",
            description:
              "JSON does not support functions or methods, making it less suitable for complex data structures.",
          },
          {
            title: "Only Text-Based",
            description:
              "Only supports text-based encoding, which can limit performance for large or binary data.",
          },
          {
            title: "Parsing Errors",
            description:
              "Parsing invalid JSON strings can lead to errors, requiring proper error handling.",
          },
          {
            title: "Security Risks",
            description:
              "Directly executing JSON data from untrusted sources can lead to security vulnerabilities.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Parsing JSON Data from an API",
            description:
              "Fetching data from a API and parsing the JSON response to display user information.",
            codeSample:
              "function fetchUserData(userId) {\n  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)\n    .then(response => {\n      if (!response.ok) {\n        throw new Error('Network response was not ok');\n      }\n      return response.json();\n    })\n    .then(userData => {\n      console.log('User Data:', userData);\n      const userElement = document.createElement('div');\n      userElement.innerHTML = `<h2>${userData.name}</h2><p>Email: ${userData.email}</p><p>Phone: ${userData.phone}</p>`;\n      document.body.appendChild(userElement);\n    })\n    .catch(error => {\n      console.error('Fetching user data failed:', error);\n    });\n}\n\nfetchUserData(1);",
          },
          {
            title: "Storing and Retrieving Data in Local Storage",
            codeSample:
              "function saveUserPreferences(preferences) {\n  localStorage.setItem('userPreferences', JSON.stringify(preferences));\n}\n\nfunction getUserPreferences() {\n  const preferences = localStorage.getItem('userPreferences');\n  return preferences ? JSON.parse(preferences) : {};\n}\n\nconst userPreferences = {\n  theme: 'dark',\n  fontSize: '16px',\n  language: 'en'\n};\nsaveUserPreferences(userPreferences);\n\nwindow.addEventListener('load', () => {\n  const savedPreferences = getUserPreferences();\n  console.log('Loaded User Preferences:', savedPreferences);\n  document.body.style.fontSize = savedPreferences.fontSize;\n  document.body.classList.add(savedPreferences.theme);\n});",
          },
        ],
      },
    ],
  },
  {
    title: ".map()",
    description:
      "The `.map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const array = [1, 2, 3, 4];\nconst mappedArray = array.map(element => {\n  return element * 2;\n});\nconsole.log(mappedArray); // Output: [2, 4, 6, 8]",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Transformation",
            description: "Transforms each element in the array.",
          },
          {
            title: "Non-destructive",
            description:
              "Returns a new array, leaving the original array unchanged.",
          },
          {
            title: "Chainable",
            description: "Can be chained with other array methods.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Performance Overhead",
            description:
              "May result in performance overhead for large arrays as it creates a new array.",
          },
          {
            title: "No Filtering/Reduction",
            description:
              "Cannot be used for filtering out elements or reducing them to a single value.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Converting Temperatures",
            description:
              "Converting an array of temperatures from Celsius to Fahrenheit.",
            codeSample:
              "const celsiusTemperatures = [0, 20, 30, 40];\nconst fahrenheitTemperatures = celsiusTemperatures.map(temp => (temp * 9/5) + 32);\nconsole.log(fahrenheitTemperatures); // Output: [32, 68, 86, 104]",
          },
        ],
      },
    ],
  },
  {
    title: ".filter()",
    description:
      "The `.filter()` method creates a new array with all the elements that pass the test implemented by the provided function.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const array = [1, 2, 3, 4];\nconst filteredArray = array.filter(element => {\n  return element > 2;\n});\nconsole.log(filteredArray); // Output: [3, 4]",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Conditional Selection",
            description: "Filters elements based on a condition.",
          },
          {
            title: "Non-destructive",
            description:
              "Returns a new array, leaving the original array unchanged.",
          },
          {
            title: "Chainable",
            description: "Can be chained with other array methods.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Performance Overhead",
            description:
              "May result in performance overhead for large arrays as it creates a new array.",
          },
          {
            title: "No Transformation/Reduction",
            description:
              "Cannot be used for transforming elements or reducing them to a single value.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Filtering Inactive Users",
            description:
              "Filtering out inactive users from an array of user objects.",
            codeSample:
              "const users = [\n  { name: 'Alice', active: true },\n  { name: 'Bob', active: false },\n  { name: 'Charlie', active: true }\n];\nconst activeUsers = users.filter(user => user.active);\nconsole.log(activeUsers); // Output: [{ name: 'Alice', active: true }, { name: 'Charlie', active: true }]",
          },
        ],
      },
    ],
  },
  {
    title: ".reduce()",
    description:
      "The `.reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single value.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const array = [1, 2, 3, 4];\nconst sum = array.reduce((accumulator, currentValue) => {\n  return accumulator + currentValue;\n}, 0);\nconsole.log(sum); // Output: 10",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Versatility",
            description:
              "Can be used to accumulate values, transform arrays, and more.",
          },
          {
            title: "Powerful",
            description:
              "Very versatile and powerful for various data processing tasks.",
          },
          {
            title: "Aggregation",
            description:
              "Can be used to flatten arrays, count occurrences, and aggregate data.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Complexity",
            description:
              "Can be complex and less readable compared to `.map()` or `.filter()` for simple transformations.",
          },
          {
            title: "Initial Value Requirement",
            description: "Requires an initial value for the accumulator.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Calculating Total Price",
            description:
              "Calculating the total price of items in a shopping cart.",
            codeSample:
              "const cart = [\n  { item: 'Laptop', price: 999.99 },\n  { item: 'Mouse', price: 19.99 },\n  { item: 'Keyboard', price: 49.99 }\n];\nconst totalPrice = cart.reduce((total, item) => total + item.price, 0);\nconsole.log(totalPrice); // Output: 1069.97",
          },
        ],
      },
    ],
  },
];
