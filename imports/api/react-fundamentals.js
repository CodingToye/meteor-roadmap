export const reactFundamentals = [
  {
    title: "Components",
    description:
      "These are the building blocks of a React application. They can be class-based or function-based and encapsulate a piece of the UI.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "import React from 'react';\n\nconst MyComponent = () => {\n  return (\n    <div>\n      <h1>Hello, Functional Component!</h1>\n    </div>\n  );\n};\n\nexport default MyComponent;",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Reusability",
            description:
              "Can reuse components across different parts of the application.",
          },
          {
            title: "Modularity",
            description: "Encourages a modular approach to building UIs.",
          },
          {
            title: "Maintenance",
            description:
              "Easier to maintain and update parts of the application.",
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
              "Deeply nested components can make the codebase hard to manage.",
          },
          {
            title: "Overhead",
            description:
              "Can lead to over-engineering for simple applications.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "User Profile Component",
            description:
              "Creating a reusable component to display user profile information.",
            codeSample:
              "import React from 'react';\n\nfunction UserProfile({ user }) {\n  return (\n    <div className='user-profile'>\n      <img src={user.avatar} alt={`${user.name}'s avatar`} />\n      <h2>{user.name}</h2>\n      <p>{user.bio}</p>\n    </div>\n  );\n}\n\nexport default UserProfile;\n\n// Usage in another component\nimport React from 'react';\nimport UserProfile from './UserProfile';\n\nfunction App() {\n  const user = {\n    name: 'John Doe',\n    avatar: 'https://example.com/avatar.jpg',\n    bio: 'Software engineer with 10 years of experience in web development.'\n  };\n\n  return (\n    <div className='app'>\n      <h1>Welcome to the User Profile App</h1>\n      <UserProfile user={user} />\n    </div>\n  );\n}\n\nexport default App;",
          },
          {
            title: "Todo List Component",
            description:
              "Creating a component to manage a todo list, including adding and displaying tasks.",
            codeSample:
              "import React, { useState } from 'react';\n\nfunction TodoList() {\n  const [tasks, setTasks] = useState([]);\n  const [task, setTask] = useState('');\n\n  const handleAddTask = () => {\n    setTasks([...tasks, task]);\n    setTask('');\n  };\n\n  return (\n    <div className='todo-list'>\n      <h2>Todo List</h2>\n      <input\n        type='text'\n        value={task}\n        onChange={(e) => setTask(e.target.value)}\n        placeholder='Add a new task'\n      />\n      <button onClick={handleAddTask}>Add Task</button>\n      <ul>\n        {tasks.map((task, index) => (\n          <li key={index}>{task}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nexport default TodoList;\n\n// Usage in another component\nimport React from 'react';\nimport TodoList from './TodoList';\n\nfunction App() {\n  return (\n    <div className='app'>\n      <h1>Welcome to the Todo List App</h1>\n      <TodoList />\n    </div>\n  );\n}\n\nexport default App;",
          },
        ],
      },
    ],
  },
  {
    title: "State",
    description:
      "State is a built-in object that allows components to create and manage their own data. When state changes, the component re-renders.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "import React, { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setCount(count + 1);\n  };\n\n  return (\n    <div>\n      <h2>Counter: {count}</h2>\n      <button onClick={increment}>Increment</button>\n    </div>\n  );\n};\n\nexport default Counter;",
      },
      {
        title: "Positive",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Dynamic",
            description: "Enables dynamic and interactive components.",
          },
          {
            title: "Encapsulation",
            description: "State is encapsulated within the component.",
          },
        ],
      },
      {
        title: "Negative",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Complexity",
            description:
              "Managing state can become complex in large applications",
          },
          {
            title: "Performance",
            description: "Frequent state updates can impact performance.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Counter Component",
            description:
              "Creating a simple counter component that increments and decrements a value.",
            codeSample:
              "import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => setCount(count + 1);\n  const decrement = () => setCount(count - 1);\n\n  return (\n    <div className='counter'>\n      <h2>Counter: {count}</h2>\n      <button onClick={increment}>Increment</button>\n      <button onClick={decrement}>Decrement</button>\n    </div>\n  );\n}\n\nexport default Counter;\n\n// Usage in another component\nimport React from 'react';\nimport Counter from './Counter';\n\nfunction App() {\n  return (\n    <div className='app'>\n      <h1>Welcome to the Counter App</h1>\n      <Counter />\n    </div>\n  );\n}\n\nexport default App;",
          },
          {
            title: "Toggle Component",
            description:
              "Creating a component that toggles between showing and hiding content.",
            codeSample:
              "import React, { useState } from 'react';\n\nfunction Toggle() {\n  const [isToggled, setIsToggled] = useState(false);\n\n  const toggle = () => setIsToggled(!isToggled);\n\n  return (\n    <div className='toggle'>\n      <button onClick={toggle}>{isToggled ? 'Hide' : 'Show'} Content</button>\n      {isToggled && <p>This is the toggled content!</p>}\n    </div>\n  );\n}\n\nexport default Toggle;\n\n// Usage in another component\nimport React from 'react';\nimport Toggle from './Toggle';\n\nfunction App() {\n  return (\n    <div className='app'>\n      <h1>Welcome to the Toggle App</h1>\n      <Toggle />\n    </div>\n  );\n}\n\nexport default App;",
          },
        ],
      },
    ],
  },
  {
    title: "Props",
    description:
      "Props are read-only inputs to a React component that allow data to be passed from parent to child components.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "import React from 'react';\n\nconst Greeting = (props) => {\n  return (\n    <div>\n      <h1>Hello, {props.name}!</h1>\n    </div>\n  );\n};\n\nexport default Greeting;",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Data Flow",
            description: "Enables a clear flow of data between components.",
          },
          {
            title: "Reusability",
            description:
              "Makes components more reusable by allowing them to receive data.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Read-Only",
            description: "Props cannot be modified by the receiving component.",
          },
          {
            title: "Boilerplate",
            description:
              "Can result in a lot of boilerplate code for passing props",
          },
          {
            title: "Dependency",
            description:
              "Child components depend on props provided by parent components.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Greeting Component",
            description:
              "Creating a reusable component that displays a personalised greeting message based on props.",
            codeSample:
              "import React from 'react';\n\nfunction Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\nexport default Greeting;\n\n// Usage in another component\nimport React from 'react';\nimport Greeting from './Greeting';\n\nfunction App() {\n  return (\n    <div className='app'>\n      <Greeting name='John' />\n      <Greeting name='Jane' />\n    </div>\n  );\n}\n\nexport default App;",
          },
          {
            title: "Product Component",
            description:
              "Creating a component to display product details using props.",
            codeSample:
              "import React from 'react';\n\nfunction Product({ name, price, description }) {\n  return (\n    <div className='product'>\n      <h2>{name}</h2>\n      <p>Price: ${price}</p>\n      <p>{description}</p>\n    </div>\n  );\n}\n\nexport default Product;\n\n// Usage in another component\nimport React from 'react';\nimport Product from './Product';\n\nfunction App() {\n  return (\n    <div className='app'>\n      <Product name='Laptop' price={999.99} description='A high-performance laptop for gaming and work.' />\n      <Product name='Mouse' price={19.99} description='A wireless mouse with ergonomic design.' />\n    </div>\n  );\n}\n\nexport default App;",
          },
        ],
      },
    ],
  },
  {
    title: "Hooks",
    description:
      "Hooks are functions that let you use state and other React features in functional components. The most commonly used are useState and useEffect.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "import React, { useState, useEffect } from 'react';\n\nconst Timer = () => {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    const intervalId = setInterval(() => {\n      setSeconds(prevSeconds => prevSeconds + 1);\n    }, 1000);\n\n    return () => clearInterval(intervalId);\n  }, []);\n\n  return (\n    <div>\n      <h2>Timer: {seconds} seconds</h2>\n    </div>\n  );\n};\n\nexport default Timer;",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Functional Components",
            description:
              "Allows using state and lifecycle features without writing class components.",
          },
          {
            title: "Simplicity",
            description: "Can lead to cleaner and more concise code.",
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
            description: "Requires understanding new concepts and patterns.",
          },
          {
            title: "Performance",
            description: "Improper use can lead to performance issues.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "useState",
            description: "Managing state in a functional component",
            codeSample:
              "import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => setCount(count + 1);\n  const decrement = () => setCount(count - 1);\n\n  return (\n    <div className='counter'>\n      <h2>Counter: {count}</h2>\n      <button onClick={increment}>Increment</button>\n      <button onClick={decrement}>Decrement</button>\n    </div>\n  );\n}\n\nexport default Counter;\n\n// Usage in another component\nimport React from 'react';\nimport Counter from './Counter';\n\nfunction App() {\n  return (\n    <div className='app'>\n      <h1>Welcome to the Counter App</h1>\n      <Counter />\n    </div>\n  );\n}\n\nexport default App;",
          },
          {
            title: "useEffect",
            description:
              "Performing side effects in a functional component, such as fetching data.",
            codeSample:
              "import React, { useState, useEffect } from 'react';\n\nfunction FetchData() {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch('https://api.example.com/data')\n      .then(response => response.json())\n      .then(data => setData(data));\n  }, []);\n\n  return (\n    <div className='fetch-data'>\n      <h2>Fetched Data</h2>\n      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}\n    </div>\n  );\n}\n\nexport default FetchData;\n\n// Usage in another component\nimport React from 'react';\nimport FetchData from './FetchData';\n\nfunction App() {\n  return (\n    <div className='app'>\n      <h1>Welcome to the Data Fetch App</h1>\n      <FetchData />\n    </div>\n  );\n}\n\nexport default App;",
          },
          {
            title: "useContext",
            description:
              "Using context to share data between components without passing props.",
            codeSample:
              "import React, { useContext } from 'react';\n\nconst ThemeContext = React.createContext('light');\n\nfunction ThemeButton() {\n  const theme = useContext(ThemeContext);\n  return <button className={theme}>I am styled by theme context!</button>;\n}\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value='dark'>\n      <div className='app'>\n        <h1>Welcome to the Theme Context App</h1>\n        <ThemeButton />\n      </div>\n    </ThemeContext.Provider>\n  );\n}\n\nexport default App;",
          },
          {
            title: "useReducer",
            description:
              "Managing a complex state logic in a functional component.",
            codeSample:
              "import React, { useReducer } from 'react';\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    default:\n      return state;\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n\n  return (\n    <div className='counter'>\n      <h2>Counter: {state.count}</h2>\n      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>\n    </div>\n  );\n}\n\nexport default Counter;\n\n// Usage in another component\nimport React from 'react';\nimport Counter from './Counter';\n\nfunction App() {\n  return (\n    <div className='app'>\n      <h1>Welcome to the Counter App</h1>\n      <Counter />\n    </div>\n  );\n}\n\nexport default App;",
          },
          {
            title: "useRef",
            description: "Accessing and manipulating DOM elements directly.",
            codeSample:
              "import React, { useRef } from 'react';\n\nfunction TextInput() {\n  const inputRef = useRef(null);\n\n  const focusInput = () => {\n    inputRef.current.focus();\n  };\n\n  return (\n    <div className='text-input'>\n      <input ref={inputRef} type='text' />\n      <button onClick={focusInput}>Focus the input</button>\n    </div>\n  );\n}\n\nexport default TextInput;\n\n// Usage in another component\nimport React from 'react';\nimport TextInput from './TextInput';\n\nfunction App() {\n  return (\n    <div className='app'>\n      <h1>Welcome to the Text Input App</h1>\n      <TextInput />\n    </div>\n  );\n}\n\nexport default App;",
          },
          {
            title: "useMemo",
            description:
              "Optimising performance by memoising expensive calculations.",
            codeSample:
              "import React, { useState, useMemo } from 'react';\n\nfunction ExpensiveComponent({ num }) {\n  const expensiveCalculation = (num) => {\n    console.log('Calculating...');\n    return num * 2;\n  };\n\n  const result = useMemo(() => expensiveCalculation(num), [num]);\n\n  return <div>Result: {result}</div>;\n}\n\nfunction App() {\n  const [num, setNum] = useState(0);\n\n  return (\n    <div className='app'>\n      <h1>Welcome to the Memoized Calculation App</h1>\n      <input type='number' value={num} onChange={(e) => setNum(parseInt(e.target.value))} />\n      <ExpensiveComponent num={num} />\n    </div>\n  );\n}\n\nexport default App;",
          },
          {
            title: "useCallback",
            description:
              "Optimising performance by memoising callback functions.",
            codeSample:
              "import React, { useState, useCallback } from 'react';\n\nfunction Button({ onClick }) {\n  console.log('Button rendered');\n  return <button onClick={onClick}>Click me</button>;\n}\n\nconst MemoizedButton = React.memo(Button);\n\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  const handleClick = useCallback(() => {\n    setCount((prevCount) => prevCount + 1);\n  }, []);\n\n  return (\n    <div className='app'>\n      <h1>Welcome to the Callback Optimization App</h1>\n      <p>Count: {count}</p>\n      <MemoizedButton onClick={handleClick} />\n    </div>\n  );\n}\n\nexport default App;",
          },
        ],
      },
    ],
  },
  {
    title: "Lifecycle Methods (Class Components)",
    description:
      "Lifecycle methods are special methods in class components that allow you to hook into different phases of a components lifecycle, such as mounting, updating and unmounting.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "class MyComponent extends React.Component {\n  componentDidMount() {\n    console.log('Component mounted');\n  }\n\n  componentWillUnmount() {\n    console.log('Component will unmount');\n  }\n\n  render() {\n    return (\n      <div>\n        <h1>Hello, Class Component!</h1>\n      </div>\n    );\n  }\n}\n\nexport default MyComponent;",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Control",
            description:
              "Provides fine-grained control over component behaviour during its lifecycle.",
          },
          {
            title: "Initalisation",
            description:
              "Allows performing tasks at specific stages of the components lifecycle.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Deprecated",
            description:
              "With the introduction of Hooks, lifecycle methods in class components are less commonly used.",
          },
          {
            title: "Complexity",
            description:
              "Managing lifecycle methods can be complex, especially with multiple components.",
          },
        ],
      },
    ],
  },
  {
    title: "Context",
    description:
      "Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "import React, { createContext, useContext } from 'react';\n\n// Create a context\nconst ThemeContext = createContext('light');\n\n// Create a provider component\nconst ThemeProvider = ({ children }) => {\n  return <ThemeContext.Provider value='dark'>{children}</ThemeContext.Provider>;\n};\n\n// A child component that consumes the context\nconst ThemedComponent = () => {\n  const theme = useContext(ThemeContext);\n  return <div>Current theme: {theme}</div>;\n};\n\nexport { ThemeProvider, ThemedComponent };",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Global State",
            description: "Useful for global state management.",
          },
          {
            title: "Avoids Prop Drilling",
            description:
              "Reduces the need to pass props through multiple layers",
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
            description: "Can make components less reusable.",
          },
          {
            title: "Performance",
            description:
              "Frequent updates to context can lead to performance issues.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Theme Context",
            description:
              "Creating a context to manage and apply a theme (light or dark) throughout the application.",
            codeSample:
              "import React, { createContext, useContext, useState } from 'react';\n\nconst ThemeContext = createContext();\n\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n\n  const toggleTheme = () => {\n    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));\n  };\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nfunction ThemedButton() {\n  const { theme, toggleTheme } = useContext(ThemeContext);\n  return (\n    <button\n      onClick={toggleTheme}\n      style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}\n    >\n      Toggle Theme\n    </button>\n  );\n}\n\nfunction App() {\n  return (\n    <ThemeProvider>\n      <div className='app'>\n        <h1>Welcome to the Theme Context App</h1>\n        <ThemedButton />\n      </div>\n    </ThemeProvider>\n  );\n}\n\nexport default App;",
          },
          {
            title: "Authentication Context",
            description:
              "Creating a context to manage user authentication state and provide it to various parts of the application.",
            codeSample:
              "import React, { createContext, useContext, useState } from 'react';\n\nconst AuthContext = createContext();\n\nfunction AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n\n  const login = (username) => {\n    setUser({ username });\n  };\n\n  const logout = () => {\n    setUser(null);\n  };\n\n  return (\n    <AuthContext.Provider value={{ user, login, logout }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n\nfunction UserProfile() {\n  const { user, logout } = useContext(AuthContext);\n  return (\n    <div>\n      {user ? (\n        <div>\n          <p>Welcome, {user.username}!</p>\n          <button onClick={logout}>Logout</button>\n        </div>\n      ) : (\n        <p>Please log in.</p>\n      )}\n    </div>\n  );\n}\n\nfunction LoginButton() {\n  const { login } = useContext(AuthContext);\n  return <button onClick={() => login('JohnDoe')}>Login</button>;\n}\n\nfunction App() {\n  return (\n    <AuthProvider>\n      <div className='app'>\n        <h1>Welcome to the Authentication Context App</h1>\n        <UserProfile />\n        <LoginButton />\n      </div>\n    </AuthProvider>\n  );\n}\n\nexport default App;",
          },
        ],
      },
    ],
  },
  {
    title: "useState",
    description:
      "The useState hook is a function provided by React that allows functional components to manage local state.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "import React, { useState } from 'react';\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setCount(count + 1);\n  };\n\n  const decrement = () => {\n    setCount(count - 1);\n  };\n\n  return (\n    <div>\n      <h2>Counter: {count}</h2>\n      <button onClick={increment}>Increment</button>\n      <button onClick={decrement}>Decrement</button>\n    </div>\n  );\n};\n\nexport default Counter;",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Simplified State Management",
            description:
              "Enables state management in functional components without the need for class components.",
          },
          {
            title: "Easy to Use",
            description:
              "Provides a simple and intuitive API for declaring and updating state variables.",
          },
          {
            title: "Performance Optimised",
            description:
              "React effciently re-renders components when state changes occur, improving performance.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Functional Component Limitation",
            description:
              "Limited to functional components, cannot be used in class components.",
          },
          {
            title: "No Lifecycle Methods",
            description:
              "Does not provide lifecycle methods like componentDidMount or componentDidUpdate for side effects.",
          },
        ],
      },
    ],
  },
  {
    title: "useEffect",
    description:
      "The useEffect hook is a function provided by React that allows functional components to perform side effects.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "import React, { useState, useEffect } from 'react';\n\nconst Timer = () => {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    const intervalId = setInterval(() => {\n      setSeconds(prevSeconds => prevSeconds + 1);\n    }, 1000);\n\n    return () => clearInterval(intervalId);\n  }, []);\n\n  return (\n    <div>\n      <h2>Timer: {seconds} seconds</h2>\n    </div>\n  );\n};\n\nexport default Timer;",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Unified Side Effect Handling",
            description:
              "Offers a unified way to handle side effects such as data fetching, subscriptions, and DOM manipulation.",
          },
          {
            title: "Declarative Side Effects",
            description:
              "Enables developers to express side effects directly inside functional components, improving readability.",
          },
          {
            title: "Dependency Management",
            description:
              "Allows fine-grained control over when effects run using the dependency array.",
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
              "Managing side effects in functional components may introduce complexity, especially in components with multiple effects.",
          },
          {
            title: "Initial Render Issue",
            description:
              "Effects run after the initial render, which may cause flickering or other UI issues.",
          },
          {
            title: "Cleanup Required",
            description:
              "Cleanup functions are necessary to prevent memory leaks or resource exhaustion.",
          },
        ],
      },
    ],
  },
  {
    title: "useContext",
    description:
      "The `useContext` hook is a powerful tool in React for managing state and passing data through the component tree without prop drilling, but it should be used judiciously to avoid performance pitfalls and maintain code readability.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "import React, { useContext } from 'react';\n\nconst ThemeContext = React.createContext('light');\n\nfunction ThemeButton() {\n  const theme = useContext(ThemeContext);\n  return <button className={theme}>I am styled by theme context!</button>;\n}\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value='dark'>\n      <div className='app'>\n        <h1>Welcome to the Theme Context App</h1>\n        <ThemeButton />\n      </div>\n    </ThemeContext.Provider>\n  );\n}\n\nexport default App;",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Simplifies Context Consumption",
            description:
              "The `useContext` hook provides a simpler and more concise way to consume context compared to the older `Context.Consumer` component.",
            codeSample:
              "const myContext = React.createContext();\n\nfunction MyComponent() {\n  const value = useContext(MyContext);\n  return <div>{value}</div>;\n}",
          },
          {
            title: "Improves Readability",
            description:
              "By using hooks, the code becomes cleaner and more readable, especially in functional components.",
            codeSample:
              "const ThemeContext = React.createContext('light');\n\nfunction ThemeComponent() {\n  const theme = useContext(ThemeContext);\n  return <div>Current theme: {theme}</div>;\n}",
          },
          {
            title: "Better Composition",
            description:
              "Works seamlessly with other hooks, allowing for better composition of logic in functional components.",
            codeSample:
              "const AuthContext = React.createContext();\n\nfunction Profile() {\n  const auth = useContext(AuthContext);\n  const isAuthenticated = auth.user !== null;\n  return <div>{isAuthenticated ? 'Logged In' : 'Logged Out'}</div>;\n}",
          },
          {
            title: "Avoids Prop Drilling",
            description:
              "Helps avoid prop drilling by providing a way to share values across the component tree without passing props down manually at every level.",
            codeSample:
              "const UserContext = React.createContext();\n\nfunction ParentComponent() {\n  const user = { name: 'Alice' };\n  return {\n    <UserContext.Provider value={user}>\n      <ChildComponent />\n    </UserContext.Provider>\n  );\n}\n\nfunction ChildComponent() {\n  const user = useContext(UserContext);\n  return <div>User: {user.name}</div>;\n}",
          },
          {
            title: "Reactivity",
            description:
              "Automatically re-renders components that consume context values when the context value changes.",
            codeSample:
              "const CounterContext = React.createContext();\n\nfunction CounterProvider({ children }) {\n  const [count, setCount] = useState(0);\n  return (\n    <CounterContext.Provider value={{ count, setCount }}>\n      {children}\n    </CounterContext.Provider>\n  );\n}\n\nfunction CounterDisplay() {\n  const { count } = useContext(CounterContext);\n  return <div>Count: {count}</div>;\n}\n\nfunction App() {\n  return (\n    <CounterProvider>\n      <CounterDisplay />\n    </CounterProvider>\n  );\n}",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Performance Issues",
            description:
              "Frequent updates to context values can cause performance issues as all component consuming the context will re-render, even if only a small part of the data changes.",
            codeSample:
              "const DataContext = React.createContext();\n\nfunction Parent() {\n  const [data, setData] = useState({ field1: 'value1', field2: 'value2' });\n  return (\n    <DataContext.Provider value={data}>\n      <Child />\n    <DataContext.Provider>\n  );\n}\n\nfunction Child() {\n  const data = useContext(DataContext);\n  // Re-renders on any change to 'data'\n  return <div>{data.field1}</div>;\n}",
          },
          {
            title: "Encourages Overuse",
            description:
              "May encourage overuse of context, leading to tightly coupled components and harder-to maintain code.",
            codeSample:
              "const ConfiContext = React.createContext();\n\nfunction ComponentA() {\n  const config = useContext(ConfigContext);\n  // Overusing context for data that could be passed as props\n  return <div>{config.setting}</div>;\n}",
          },
          {
            title: "Complexity in Large Applications",
            description:
              "Managing context in large applications can become complex, especially if multiple contexts are used and their updates need to be coordinated.",
            codeSample:
              "const ThemeContext = React.createContext();\nconst UserContext = React.createContext();\n\nfunction Component() {\n  const theme = useContext(ThemeContext);\n  const user = useContext(UserContext);\n  // Managing multiple contexts\n  return (\n    <div style={{ color: theme.color }}>\n      User: {user.name}\n    </div>\n  );\n}",
          },
          {
            title: "Limited to Synchronous Updates",
            description:
              "The `useContext` hook only updates components synchronously, which can be limiting in certain scenarios where asynchronous updates are required.",
            codeSample:
              "const AsynContext = React.createContext();\n\nfunction AsynComponent() {\n  const value = useContext(AsyncContext);\n  // Cannot handle async updates directly\n  return <div>{value}</div>;\n}",
          },
        ],
      },
    ],
  },
  {
    title: "useReducer",
    description:
      "The `useReducer` hook is a powerful tool for managing complex state and state transitions in React applications. However, it should be used judiciously, especially in cases where simpler state management solutions like `useState` would suffice.",
    blocks: [
      {
        title: "Code signature",
        meta: "signature",
        codeSample:
          "import React, { useReducer } from 'react';\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    default:\n      return state;\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n\n  return (\n    <div className='counter'>\n      <h2>Counter: {state.count}</h2>\n      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>\n    </div>\n  );\n}\n\nexport default Counter;\n\n// Usage in another component\nimport React from 'react';\nimport Counter from './Counter';\n\nfunction App() {\n  return (\n    <div className='app'>\n      <h1>Welcome to the Counter App</h1>\n      <Counter />\n    </div>\n  );\n}\n\nexport default App;",
      },
      {
        title: "Pros",
        meta: "positive",
        subBlocks: [
          {
            title: "Complex State Management",
            description:
              "`useReducer` is well-suited for managing complex state logic, especially when state transitions involve multiple steps or conditions.",
            codeSample:
              "const initialState = { count: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    default:\n      return state;\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <div>\n      Count: {state.count}\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>-></button>\n    </div>\n  );\n}",
          },
          {
            title: "Predictable State Transitions",
            description:
              "The reducer function ensures that state transitions are predictable and easier to trace, which can improve debugging and maintainability.",
            codeSample:
              "function reducer(state, action) {\n  switch (action.type) {\n    case 'add':\n      return { items: [...state.items, action.payload] };\n    case 'remove':\n      return { items: state.items.filter(item => item !== action.payload) };\n    default:\n      throw new Error('Unknown action type');\n  }\n}",
          },
          {
            title: "Encapsulation of State Logic",
            description:
              "Encourages encapsulation of state logic in a single function (the reducer), promoting separation of concerns and cleaner component code.",
            codeSample:
              "const initialState = { items: [] };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'add':\n      return { items: [...state.items, action.payload] };\n    case 'remove':\n      return { items: state.items.filter(item => item !== action.payload) }\n    default:\n      throw new Error('Unknown action type');\n  }\n}\n\nfunction itemList() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  const addItem = (item) => dispatch({ type: 'add', payload: item });\n  const removeItem = (item) => dispatch({ type: 'remove', payload: item )};\n\n  return (\n    <div>\n      <button onClick={() => addItem('NewItem')}>Add Item</button>\n      <ul>\n        {state.items.map((item, index) => (\n          <li key={index}>\n             {item} <button onClick={() => removeItem(item)}>Remove</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}",
          },
          {
            title: "Consistency with Redux",
            description:
              "For those familiar with Redux, `useReducer` provides a simpler pattern for managing state, making it easier to understand and integrate into applications that might already use Redux.",
            codeSample:
              "// Similar to Redux reducer pattern\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    default:\n      throw new Error('Unknown action type);\n  }\n}",
          },
          {
            title: "Performance Optimisation",
            description:
              "When dealing with nested state or complex updates, `useReducer` can help optimise performance by reducing the need to create new objects or arrays on each state update.",
            codeSample:
              "const initialState = [ counter: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { counter: state.counter + 1 };\n    case 'decrement':\n      return { counter: state.counter - 1 }\n    default:\n      return state;\n  }\n}\n\nfunction Counter() {\n  const [ state, dispatch ] = useReducer(reducer, initialState);\n  return (\n    <div>\n      Count: {state.counter}\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n    <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n    </div>\n  );\n}",
          },
        ],
      },
      {
        title: "Cons",
        meta: "negative",
        subBlocks: [
          {
            title: "Boilerplate Code",
            description:
              "`useReducer` often requires more boilerplate code compared to `useState`, which can make the code more verbose and harder to read for simple state management needs.",
            codeSample:
              "const initialState = [ counter: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { counter: state.counter + 1 };\n    case 'decrement':\n      return { counter: state.counter - 1 }\n    default:\n      return state;\n  }\n}\n\nfunction Counter() {\n  const [ state, dispatch ] = useReducer(reducer, initialState);\n  return (\n    <div>\n      Count: {state.counter}\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n    <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n    </div>\n  );\n}",
          },
          {
            title: "Learning Curve",
            description:
              "The concept of reducers and dispatching actions might be more challenging for begineers to grasp compared to the simpler `useState` hook.",
            codeSample: "// See Boilerplate Code example",
          },
          {
            title: "Overkill for Simple State",
            description:
              "Using `useReducer` can be overkill for simple state management, where `useState` would suffice and result in cleaner, simpler code.",
            codeSample:
              "// Using useState\nfunction SimpleCounter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      Count: {count}\n      <button onClick={() => setCount(count + 1)}>+</button>\n<button onClick={() => setCount(count - 1)}>-</button>\n    </div>\n  );\n}",
          },
          {
            title: "Debugging Complexity",
            description:
              "Debugging can be more complex, especially when dealing with nested state or multiple actions, as it requires understanding the entire state transition logic within the reducer function.",
            codeSample: "// See Boilerplate Code example",
          },
          {
            title: "Verbosity",
            description:
              "The combination of action types and the reducer function can make the code more verbose, especially for developers more accustomed to more concise state management patterns.",
            codeSample: "// See Boilerplate Code example",
          },
        ],
      },
    ],
  },
  {
    title: "useRef",
    description:
      "The `useRef` hook is a powerful tool in React for managing multiple mutatable values and directly interacting with DOM elements. However, it should be used judiciously to avoid pitfalls associated with imperative code and missed re-renders.",
    blocks: [
      {
        title: "Code Signature",
        description: "...",
        meta: "signature",
        codeSample:
          "import React, { useRef } from 'react';\n\nfunction TextInput() {\n  const inputRef = useRef(null);\n\n  const focusInput = () => {\n    inputRef.current.focus();\n  };\n\n  return (\n    <div className='text-input'>\n      <input ref={inputRef} type='text' />\n      <button onClick={focusInput}>Focus the input</button>\n    </div>\n  );\n}\n\nexport default TextInput;\n\n// Usage in another component\nimport React from 'react';\nimport TextInput from './TextInput';\n\nfunction App() {\n  return (\n    <div className='app'>\n      <h1>Welcome to the Text Input App</h1>\n      <TextInput />\n    </div>\n  );\n}\n\nexport default App;",
      },
      {
        title: "Pros",
        meta: "positive",
        subBlocks: [
          {
            title: "Direct Access to DOM Elements",
            description:
              "`useRef` provides a way to directly access and manipulate DOM elements without using traditional document query methods",
            codeSample:
              "function FocusInput() {\n  const inputRef = useRef(null);\n\n  const focusInput = () => {\n    inputRef.current.focus();\n  };\n\n  return (\n    <div>\n      <input ref={inputRef} type='text' />\n    <button onClick={focusInput}>Focus Input</button>\n    </div>\n  );\n}",
          },
          {
            title: "Persistent Values",
            description:
              "The `useRef` hook allows you to store persistent values that don't trigger re-renders when updated. This is useful for storing mutable values or instances.",
            codeSample:
              "function Timer() {\n  const timerId = useRef(null);\n\n  useEffect(() => {\n    timerId.current = setInterval(() => {\n      console.log('Timer tick');\n    }, 1000);\n  }, []);\n\n  return <div>Check the console for timer ticks</div>;\n}",
          },
          {
            title: "Avoiding Re-renders",
            description:
              "`useRef` can be used to avoid re-renders by holding values that don't need to be rendered. This helps in opimtising performance.",
            codeSample:
              "function Component() {\n  const renderCount = useRef(0);\n  renderCount.current += 1;\n\n  return <div>Render Count: {renderCount.current}</div>;\n}",
          },
          {
            title: "Storing Previous Values",
            description:
              "Useful for storing previous state or props values to compare with current values.",
            codeSample:
              "function PreviousValue({ value }_ {\n  const prevValue = useRef();\n\n  useEffect(() => {\n    prevValue.current = value;\n  }, [value]);\n\n  return (\n    <div>\n      <div>Current Value: {value}</div>\n      <div>Previous Value: {prevValue.current}</div>\n    </div>\n  );\n}",
          },
          {
            title: "Integration with Third-Party Libraries",
            description:
              "`useRef` is useful for integrating with third-party libraries that require direct DOM access or need to store multiple values.",
            codeSample:
              "function Canvas() {\n  const canvasRef = useRef(null);\n\n  useEffect(() => {\n    const ctx = canvasRef.current.getContext('2d');\n    ctx.fillReact(0, 0, 100, 100);\n  }, []);\n\n  return <canvas ref={canvasRef} width={200} height={200} />;\n}",
          },
        ],
      },
      {
        title: "Cons",
        meta: "negative",
        subBlocks: [
          {
            title: "Imperative Code",
            description:
              "Using `useRef` can lead to more imperative code, which may go against React's declarative nature and make the code harder to understand and maintain.",
            codeSample:
              "function ImperativeExample() {\n  const divRef = useRef(null);\n\n  useEffect(() => {\n    divRef.current.style.backgroundColor = 'blue';\n  }, []);\n\n  return <div ref={divRef}>This div is styled imperatively</div>;\n}",
          },
          {
            title: "Overuse and Misuse",
            description:
              "Overuse of `useRef` to store values instead of state can lead to missing re-renders and bugs since `useRef` does not trigger re-renders.",
            codeSample:
              "function IncorrectExample() {\n  const countRef = useRef(0);\n\n  const increment = () => {\n    countRef.current += 1;\n    console.log(countRef.current);\n  };\n\n  return <button onClick={increment}>Increment</button>;\n}\n// The componnet will not re-render to show the updated count.",
          },
          {
            title: "Inconsistent Updates",
            description:
              "Since `useRef` does not trigger re-renders, it might lead to inconsistencies in the UI if used to manage state-like values.",
            codeSample:
              "function InconsistentExample() {\n  const countRef = useRef(0);\n\n  const incrememnt = () => {\n    countRef.current += 1;\n  };\n\n  useEffect(() => {\n    const intervalId = setInterval(() => {\n      console.log(countRef.current); // Logs updated count\n    }, 1000);\n    return () => clearInterval(intervalId);\n  }, []);\n\n  return <button onClick={increment}>Increment</button>;\n}",
          },
          {
            title: "Lack of Re-render on Change",
            description:
              "Any change in the `useRef` value does not cause the component to re-render which might not be the desired behaviour if the UI needs to update in response to changes.",
            codeSample:
              "function NoReRender() {\n  const countRef = useRef(0);\n\n  const increment = () => {\n    countRef.current += 1;\n  };\n\n  return (\n    <div>\n      <button onClick={increment}>Increment</button>\n      <div>Count: {countRef.current}</div> {/* This won't update */}\n    </div>\n  );\n}",
          },
          {
            title: "Difficulty in Debugging",
            description:
              "Debugging issues related to `useRef` can be more difficult because changes to refs are not reflected in the components's render output.",
            codeSample:
              "function DebuggingExample() {\n  const inputRef = useRef(null);\n\n  const handleClick = () => {\n    inputRef.current.value = 'New Value';\n    console.log(inputRef.current.value); // Difficult to trace changes\n  };\n\n  return <input ref={inputRef} onClick={handleClick} />;\n}",
          },
        ],
      },
    ],
  },
  {
    title: "useMemo",
    description:
      "The `useMemo` hook is a powerful too for optimising performance in React applications by memoising expensive calculations. However, it should be used judiciously to avoid unnecessary complexity and overhead.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "import React, { useState, useMemo } from 'react';\n\nfunction ExpensiveComponent({ num }) {\n  const expensiveCalculation = (num) => {\n    console.log('Calculating...');\n    return num * 2;\n  };\n\n  const result = useMemo(() => expensiveCalculation(num), [num]);\n\n  return <div>Result: {result}</div>;\n}\n\nfunction App() {\n  const [num, setNum] = useState(0);\n\n  return (\n    <div className='app'>\n      <h1>Welcome to the Memoized Calculation App</h1>\n      <input type='number' value={num} onChange={(e) => setNum(parseInt(e.target.value))} />\n      <ExpensiveComponent num={num} />\n    </div>\n  );\n}\n\nexport default App;",
      },
      {
        title: "Pros",
        meta: "positive",
        subBlocks: [
          {
            title: "Performance Optimisation",
            description:
              "`useMemo` can significantly improve performance by memoising expensive calculations, preventing unnecessary re-calculations on every render.",
            codeSample:
              "const ExpensiveCalculationComponent = ({ input }) => {\n  const calculateExpensiveValue = (num) => {\n    console.log('Calculating...');\n    // Simulate an expensive calculation\n    return num * 2;\n  };\n\n  const memoisedValue = usememo(() => calculateExpensiveValue(input), [input]);\n\n  return <div>Calculated Value: {memoisedValue}</div>;\n};",
          },
          {
            title: "Avoids Unnecessary Re-renders",
            description:
              "Helps to avoid unnecessary re-renders by memoising the result of a computation and only recalculating it when its dependencies change.",
            codeSample:
              "const ListComponent = ({ items }) => {\n  const sortedItems = useMemo(() => {\n    console.log('Sorting items...');\n    return [...items].sort();\n  }, [items]);\n\n  return (\n    <ul>\n      {sortedItems.map((item, index) => (\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  );\n};",
          },
          {
            title: "Enhanced Readability",
            description:
              "Makes the code more readable by clearly indicating that a certain computation is memoised, which helps other developers understand the optimisation intent.",
            codeSample:
              "const FilteredList = ({ list, filter }) => {\n  const filteredList = useMemo(() => {\n    return list.filter(item => item.includes(filter));\n  }, [list, filter]);l\n\n  return (\n    <ul>\n      {filteredList.map((item, index) =>\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  );\n};",
          },
          {
            title: "Effective with Pure Functions",
            description:
              "Works best with pure functions, ensuring that the memoised result is reliable and consistent as long as the dependencies unchanged.",
            codeSample:
              "const PureFunctionComponent = ({ a, b }) => {\n  const sum = useMemo(() => a + b, [a, b]);\n\n  return <div>Sum: {sum}</div>;\n};",
          },
          {
            title: "Encapsulates Expensive Logic",
            description:
              "Encapsulated expensive logic within the component, keeping the render function clean and focused on rendering rather than on logic.",
            codeSample:
              "const PrimeNumbers = ({ limit }) => {\n  const generatePrimes = (max) => {\n    // Expensive logic to generate prime numbers\n    const primes = []\n    for (let i = 2; i <= max; i++) {\n      if (primes.every(p => i % p !== 0)) {\n        primes.push(i);\n      }\n    }\n    return primes;\n  };\n\nconst primes = useMemo(() => generatePrimes(limit, [limit]);\n\n  return (\n    <div>\n      <h3>Prime Numbers up to {limit}</h3>\n      <ul>\n        {primes.map((prime, index) => {\n          <li key={index}>{prime}</li>\n        ))}\n      </ul>\n    </div>\n  );\n};",
          },
        ],
      },
      {
        title: "Cons",
        meta: "negative",
        subBlocks: [
          {
            title: "Overhead",
            description:
              "Adding `useMemo` introduces some overhead due to the initial calculation and storage of the memoised value, which might be unnecessary for trivial calculations.",
            codeSample:
              "const SimpleCalculation = ({ num )} => {\n  const double = useMemo(() => num * 2, [num]); // Overhead for a simple calculation\n\n  return <div>Double: {double}</div>;\n};",
          },
          {
            title: "Premature Optimisation",
            description:
              "It can lead to premature optimisation, where developers might use `useMemo` unnecessarily, adding complexity without significant performance benefits.",
            codeSample:
              "const PrematureOptimisation = ({ num }) => {\n  const square = useMemo(() => num * num, [num]); // Premature optimisation\n\n  return <div>Square: {square}</div>\n};",
          },
          {
            title: "Dependency Management",
            description:
              "Managing dependencies correctly is crucial. If dependencies are not specified correctly, it can lead to bugs and stale values being used.",
            codeSample:
              "const DependencyError = ({ a, b, c }) => {\n  const product = useMemo(() => a * b, [a]); // Missing dependency 'b'\n\n  return <div>Product: {product}</div>\n};",
          },
          {
            title: "Memory Consumption",
            description:
              "Memoised values are stored in memory. In applications with many memoised values, this can lead to increased memory consumption.",
            codeSample:
              "const MemoryUsage = ({ items }) => {\n  const memoisedItems = useMemo(() => items.map(item => ({ ...item })), [items]); // Increased memory usage\n\n  return (\n    <ul>\n      {memoisedItems.map((item, index) => (\n        <li key={index}>{item.name}</li>\n      ))}\n    </ul>\n  );\n};",
          },
          {
            title: "Complexity",
            description:
              "Can add complexity to the codebase, making it harder for new developers to understand the logic, especially if used excessively or inappropriately.",
            codeSample:
              "const ComplexComponent = ({ a, b, c }) => {\n  const result = useMemo(() => {\n    const intermediate = a + b;\n    return intermediate * c;\n  }, [a, b, c]);\n\n  return <div>Result: {result}</div>;\n};",
          },
        ],
      },
    ],
  },
  {
    title: "useCallback",
    description:
      "useCallback is a Hook that returns a memoized callback. It is useful for optimising performance by preventing unnecessary re-creations of functions.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "import React, { useState, useCallback } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  const increment = useCallback(() => {\n    setCount((c) => c + 1);\n  }, []);\n\n  return (\n    <div>\n      <button onClick={increment}>Increment</button>\n      <p>Count: {count}</p>\n    </div>\n  );\n}\n\nexport default Counter;\n",
      },
      {
        title: "Pros",
        meta: "positive",
        subBlocks: [
          {
            title: "Prevents Unnecessary Re-renders",
            description:
              "`useCallback` helps prevent unnecessary re-renders of child components by memoising callback functions, ensuring they retain the same reference between renders if their dependencies to not change.",
            codeSample:
              "const ParentComponent = () => {\n  const [count, setCount] = useState(0);\n  const incremement = useCallback(() => setCount(prevCount => prevCount + 1), []);\n\n  return (\n    <div>\n      <ChildComponent increment={increment} />\n      <button onClick={increment}>Increment</button>\n      <p>Count: {count}</p>\n    </div>\n  );\n};\n\nconst ChildComponent = React.memo(({ increment }) => {\n  console.log('ChildComponent rendered');\n  return <button onClick={increment}>Increment from Child</button>;\n});",
          },
          {
            title: "Optimised Performance",
            description:
              "By memoising functions, `useCallback` can optimise performance in functional components, especially when passing callback functions to deeply nested or memoised child components.",
            codeSample:
              "const ListComponent = ({ items, onItemClick }) => {\n  return (\n    <ul>\n      {items.map((item, index) => (\n        <li key={index} onClick={() => onItemClick(item)}>\n          {item}\n        </li>\n      ))}\n    </ul>\n  );\n};\n\nconst MemoisedListComponent = React.memo(ListComponent);\n\nconst ParentComponent = () => {\n  const [items] = useState(['Item1', 'Item2', 'Item3']);\n  const handleClick = useCallback(item => console.log(item), []);\n\n  return <MemoisedListComponent items={items} onItemClick={handleClick} />;\n};",
          },
          {
            title: "Enhanced Readability",
            description:
              "Makes the code more readable by clearly indicating which functions are memoised and under what conditions they will be recomputed.",
            codeSample:
              "const SearchComponent = ({ query }) => {\n  const fetchData = useCallback(() => {\n    // Fetch data based on the query\n    console.log('Fetching data for', query);\n  }, [query]);\n\n  useEffect(() => {\n    fetchData();\n  }, [fetchData]);\n\n  return <div>Searching for: {query}</div>;\n};",
          },
          {
            title: "Consistency",
            description:
              "Ensures consistent function references, which can be crucial when dealing with event handlers or callback props that depend on stable references.",
            codeSample:
              "const ClickTracker = () => {\n  const [count, setCount] = useState(0);\n\n  const handleClick = useCallback(() => {\n    setCount(prevCount => prevCount + 1);\n  }, []);\n\n  useEffect(() => {\n    document.addEventListener('click', handleClick);\n    return () => {\n      document.removeEventListener('click', handleClick);\n    };\n  }, [handleClick]);\n\n  return <div>Document Click Count: {count}</div>;\n};",
          },
          {
            title: "Useful with useEffect and useMemo",
            description:
              "Works well with `useEffect` and `useMemo` to manage dependencies, ensuring that effects and memoisations are only triggered when necessary.",
            codeSample:
              "const DataFetcher = ({ url }) => {\n  const fetchData = useCallback(async () => {\n    const response = await fetch(url);\n    const data = await response.json();\n    console.log(data);\n  }, [url]);\n\n  useEffect(() => {\n    fetchData();\n  }, [fetchData]);\n\n  return <div>Fetching data from {url}</div>\n};",
          },
        ],
      },
      {
        title: "Cons",
        meta: "negative",
        subBlocks: [
          {
            title: "Overhead",
            description:
              "Using `useCallback` adds overhead due to the additional function creations, which might not be necessary for simple or infrequently updated components.",
            codeSample:
              "const SimpleComponent = () => {\n  const handleClick = () => console.log('Clicked');\n\n  return <button onClick={handleClick}>Click Me</button>; // No need for useCallback\n};",
          },
          {
            title: "Premature Optimisation",
            description:
              "It can lead to premature optimisation, where developers use `useCallback` unnecessarily, adding complexity without significant performance benefits.",
            codeSample:
              "const PrematureOptimisation = () => {\n  const [count, setCount] = useState(0);\n  const increment = useCallback(() => setCount(count + 1), [count]); // Not necessary for simple state updates\n\n  return <button onClick={increment}>Increment</button>\n};",
          },
          {
            title: "Dependency Management",
            description:
              "Managing dependencies correctly is crucial. Incorrect dependencies can lead to stale closures or excessive re-creations of the callback.",
            codeSample:
              "const IncorrectDependencies = ({ user }) => {\n  const handleClick = useCallback(() => {\n    console.log(user.name); // Missing user dependency can lead to stale closure\n  }, []);\n\n  return <button onClick={handleClick}>Click Me</button>;\n};",
          },
          {
            title: "Code Complexity",
            description:
              "Overuse of `useCallback` can lead to code that is harder to understand and maintain, especially for developers who are not familiar with hooks.",
            codeSample:
              "const ComplexComponent = ({ items }) => {\n  const processItem = useCallback(item => {\n    // Complex logic here\n    console.log(item);\n  }, [items]);\n\n  return (\n    <div>\n      {items.map((item, index) => (\n        <div key={index} onClick={() => processItem(item)}>\n          {item}\n        </div>\n      ))}\n    </div>\n  );\n};",
          },
          {
            title: "Potential Memory Issues",
            description:
              "If not used correctly, `useCallback` can potentially cause memory leaks by holding onto references longer than necessary.",
            codeSample:
              "const MemoryLeakExample = () => {\n  const [data, setData] = useState(null);\n  const fetchData = useCallback(() => {\n    fetch('/api/data')\n      .then(response => response.json())\n      .then(result => setData(result));\n  }, []; // Potential memory leak if dependencies are not managed correctly\n\n  useEffect(() => {\n    fetchData();\n  }, [fetchData]);\n\n  return <div>Data: {JSON.stringify(data)}</div>;\n};",
          },
        ],
      },
    ],
  },
  {
    title: "Forms",
    description:
      "Forms in React are used to collect user input. React provides controlled components to manage form inputs.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample: "...",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Control",
            description: "Provides complete control over form inputs and data.",
          },
          {
            title: "Integration",
            description: "Easily integrates with state management.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Boilerplate",
            description:
              "Requires a lot of boilerplate code to manage state and handle events.",
          },
          {
            title: "Complexity",
            description:
              "Can become complex with many form inputs and validations.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Simple Login Form",
            description:
              "Creating a simple login form with controlled components to handle user input.",
            codeSample:
              "import React, { useState } from 'react';\n\nfunction LoginForm() {\n  const [username, setUsername] = useState('');\n  const [password, setPassword] = useState('');\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    console.log('Logging in with', { username, password });\n    // Perform login logic here\n  };\n\n  return (\n    <form onSubmit={handleSubmit} className='login-form'>\n      <h2>Login</h2>\n      <div>\n        <label htmlFor='username'>Username:</label>\n        <input\n          type='text'\n          id='username'\n          value={username}\n          onChange={(e) => setUsername(e.target.value)}\n        />\n      </div>\n      <div>\n        <label htmlFor='password'>Password:</label>\n        <input\n          type='password'\n          id='password'\n          value={password}\n          onChange={(e) => setPassword(e.target.value)}\n        />\n      </div>\n      <button type='submit'>Login</button>\n    </form>\n  );\n}\n\nexport default LoginForm;\n\n// Usage in another component\nimport React from 'react';\nimport LoginForm from './LoginForm';\n\nfunction App() {\n  return (\n    <div className='app'>\n      <h1>Welcome to the Login App</h1>\n      <LoginForm />\n    </div>\n  );\n}\n\nexport default App;",
          },
          {
            title: "Contact Form with Validation",
            description:
              "Creating a contact form with input validation and controlled components.",
            codeSample:
              "import React, { useState } from 'react';\n\nfunction ContactForm() {\n  const [name, setName] = useState('');\n  const [email, setEmail] = useState('');\n  const [message, setMessage] = useState('');\n  const [errors, setErrors] = useState({});\n\n  const validate = () => {\n    const newErrors = {};\n    if (!name) newErrors.name = 'Name is required';\n    if (!email) newErrors.email = 'Email is required';\n    if (!message) newErrors.message = 'Message is required';\n    setErrors(newErrors);\n    return Object.keys(newErrors).length === 0;\n  };\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    if (validate()) {\n      console.log('Submitting form with', { name, email, message });\n      // Perform form submission logic here\n    }\n  };\n\n  return (\n    <form onSubmit={handleSubmit} className='contact-form'>\n      <h2>Contact Us</h2>\n      <div>\n        <label htmlFor='name'>Name:</label>\n        <input\n          type='text'\n          id='name'\n          value={name}\n          onChange={(e) => setName(e.target.value)}\n        />\n        {errors.name && <span className='error'>{errors.name}</span>}\n      </div>\n      <div>\n        <label htmlFor='email'>Email:</label>\n        <input\n          type='email'\n          id='email'\n          value={email}\n          onChange={(e) => setEmail(e.target.value)}\n        />\n        {errors.email && <span className='error'>{errors.email}</span>}\n      </div>\n      <div>\n        <label htmlFor='message'>Message:</label>\n        <textarea\n          id='message'\n          value={message}\n          onChange={(e) => setMessage(e.target.value)}\n        />\n        {errors.message && <span className='error'>{errors.message}</span>}\n      </div>\n      <button type='submit'>Submit</button>\n    </form>\n  );\n}\n\nexport default ContactForm;\n\n// Usage in another component\nimport React from 'react';\nimport ContactForm from './ContactForm';\n\nfunction App() {\n  return (\n    <div className='app'>\n      <h1>Welcome to the Contact Us App</h1>\n      <ContactForm />\n    </div>\n  );\n}\n\nexport default App;",
          },
        ],
      },
    ],
  },
  {
    title: "Error Boundaries",
    description:
      "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire component tree.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "import React, { Component } from 'react';\n\nclass ErrorBoundary extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.error('Error caught by ErrorBoundary:', error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Something went wrong</h1>;\n    }\n\n    return this.props.children;\n  }\n}\n\nexport default ErrorBoundary;\n\n// Usage\n<ErrorBoundary>\n  <ComponentThatMayError />\n</ErrorBoundary>",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Error Isolation",
            description:
              "Prevents the entire application from crashing due to errors in a specific component.",
          },
          {
            title: "Graceful UI Handling",
            description: "Allows for graceful error handling and fallback UIs.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Limited Scope",
            description:
              "Only catches errors during rendering, not during event handlers, async code, etc.",
          },
          {
            title: "Asynchronous Limitation",
            description:
              "Doesn't handle errors within itself or its children if they are asynchronous.",
          },
        ],
      },
    ],
  },
  {
    title: "React Router",
    description:
      "React Router is a library for routing React applications. It enables navigation between different components and pages.",
    blocks: [
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Declarative",
            description: "Easy to define routes and navigation.",
          },
          {
            title: "Integration",
            description:
              "Integrates well with React's component-based architecture.",
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
            description: "Requires learning the router-specific API.",
          },
          {
            title: "Complexity",
            description:
              "Complex routing scenarios can become difficult to manage.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Basic Navigation",
            description:
              "Creating a basic navigation system with multiple pages using React Router",
            codeSample:
              "import React from 'react';\nimport { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';\n\nfunction Home() {\n  return <h2>Home Page</h2>;\n}\n\nfunction About() {\n  return <h2>About Page</h2>;\n}\n\nfunction Contact() {\n  return <h2>Contact Page</h2>;\n}\n\nfunction App() {\n  return (\n    <Router>\n      <div className='app'>\n        <nav>\n          <ul>\n            <li><Link to='/'>Home</Link></li>\n            <li><Link to='/about'>About</Link></li>\n            <li><Link to='/contact'>Contact</Link></li>\n          </ul>\n        </nav>\n        <Switch>\n          <Route path='/' exact component={Home} />\n          <Route path='/about' component={About} />\n          <Route path='/contact' component={Contact} />\n        </Switch>\n      </div>\n    </Router>\n  );\n}\n\nexport default App;",
          },
          {
            title: "Nested Routes",
            description:
              "Creating a nested routing structure for a blog application using React Router.",
            codeSample:
              "import React from 'react';\nimport { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';\n\nfunction Blog() {\n  const { path, url } = useRouteMatch();\n  return (\n    <div>\n      <h2>Blog</h2>\n      <ul>\n        <li><Link to={`${url}/post1`}>Post 1</Link></li>\n        <li><Link to={`${url}/post2`}>Post 2</Link></li>\n      </ul>\n      <Switch>\n        <Route path={`${path}/post1`} component={() => <h3>Post 1 Content</h3>} />\n        <Route path={`${path}/post2`} component={() => <h3>Post 2 Content</h3>} />\n      </Switch>\n    </div>\n  );\n}\n\nfunction Home() {\n  return <h2>Home Page</h2>;\n}\n\nfunction App() {\n  return (\n    <Router>\n      <div className='app'>\n        <nav>\n          <ul>\n            <li><Link to='/'>Home</Link></li>\n            <li><Link to='/blog'>Blog</Link></li>\n          </ul>\n        </nav>\n        <Switch>\n          <Route path='/' exact component={Home} />\n          <Route path='/blog' component={Blog} />\n        </Switch>\n      </div>\n    </Router>\n  );\n}\n\nexport default App;",
          },
        ],
      },
    ],
  },

  {
    title: "Redux (State Management Library)",
    description:
      "Redux is a predictable state container for JavaScript apps, often used with React to manage complex state logic.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "// Import necessary libraries\nimport React from 'react';\nimport { configureStore, createSlice } from '@reduxjs/toolkit';\nimport { Provider, useDispatch, useSelector } from 'react-redux';\n\n// Create actions and reducers using createSlice\nconst exampleSlice = createSlice({\n  name: 'example',\n  initialState: { /* initial state */ },\n  reducers: {\n    // Define actions\n    actionOne: (state, action) => { /* reducer logic for actionOne */ },\n    actionTwo: (state, action) => { /* reducer logic for actionTwo */ },\n  },\n});\n\n// Extract actions and reducer\nconst { actions, reducer } = exampleSlice;\n\n// Configure the store\nconst store = configureStore({ reducer });\n\n// Example component using useSelector and useDispatch\nfunction ExampleComponent() {\n  // Access state\n  const exampleState = useSelector((state) => state.example);\n  // Access dispatch\n  const dispatch = useDispatch();\n\n  return (\n    <div className='example'>\n      {/* Use state and dispatch actions */}\n      <h2>Example State: {exampleState}</h2>\n      <button onClick={() => dispatch(actions.actionOne(/* payload */))}>Action One</button>\n      <button onClick={() => dispatch(actions.actionTwo(/* payload */))}>Action Two</button>\n    </div>\n  );\n}\n\n// Main App component\nfunction App() {\n  return (\n    <Provider store={store}>\n      <div className='app'>\n        <h1>Redux Toolkit Scaffold</h1>\n        <ExampleComponent />\n      </div>\n    </Provider>\n  );\n}\n\nexport default App;",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Predictable State",
            description:
              "Centralised state management makes state predictable and easier to debug.",
          },
          {
            title: "DevTools",
            description:
              "Provides powerful development tools for inspecting state changes.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Boilerplate",
            description: "Requires a lot of boilerplate code.",
          },
          {
            title: "Learning Curve",
            description: "Steeper learning curve due to its complex concepts.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Basic Counter with Redux",
            description:
              "Creating a simple counter application with Redux to manage the state.",
            codeSample:
              "import React from 'react';\nimport { createStore } from 'redux';\nimport { Provider, useDispatch, useSelector } from 'react-redux';\n\n// Actions\nconst increment = () => ({ type: 'INCREMENT' });\nconst decrement = () => ({ type: 'DECREMENT' });\n\n// Reducer\nconst counter = (state = 0, action) => {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1;\n    case 'DECREMENT':\n      return state - 1;\n    default:\n      return state;\n  }\n};\n\n// Store\nconst store = createStore(counter);\n\nfunction Counter() {\n  const count = useSelector((state) => state);\n  const dispatch = useDispatch();\n\n  return (\n    <div className='counter'>\n      <h2>Counter: {count}</h2>\n      <button onClick={() => dispatch(increment())}>Increment</button>\n      <button onClick={() => dispatch(decrement())}>Decrement</button>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Provider store={store}>\n      <div className='app'>\n        <h1>Welcome to the Redux Counter App</h1>\n        <Counter />\n      </div>\n    </Provider>\n  );\n}\n\nexport default App;",
          },
          {
            title: "Todo List with Redux",
            description:
              "Creating a todo list application with Redux to manage the state of the todos.",
            codeSample:
              "import React, { useState } from 'react';\nimport { createStore } from 'redux';\nimport { Provider, useDispatch, useSelector } from 'react-redux';\n\n// Actions\nconst addTodo = (todo) => ({ type: 'ADD_TODO', payload: todo });\nconst toggleTodo = (index) => ({ type: 'TOGGLE_TODO', payload: index });\n\n// Reducer\nconst todos = (state = [], action) => {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return [...state, { text: action.payload, completed: false }];\n    case 'TOGGLE_TODO':\n      return state.map((todo, idx) =>\n        idx === action.payload ? { ...todo, completed: !todo.completed } : todo\n      );\n    default:\n      return state;\n  }\n};\n\n// Store\nconst store = createStore(todos);\n\nfunction TodoApp() {\n  const [input, setInput] = useState('');\n  const todos = useSelector((state) => state);\n  const dispatch = useDispatch();\n\n  const handleAddTodo = () => {\n    if (input.trim()) {\n      dispatch(addTodo(input));\n      setInput('');\n    }\n  };\n\n  return (\n    <div className='todo-app'>\n      <h2>Todo List</h2>\n      <input\n        type='text'\n        value={input}\n        onChange={(e) => setInput(e.target.value)}\n        placeholder='Add a new todo'\n      />\n      <button onClick={handleAddTodo}>Add Todo</button>\n      <ul>\n        {todos.map((todo, index) => (\n          <li\n            key={index}\n            onClick={() => dispatch(toggleTodo(index))}\n            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}\n          >\n            {todo.text}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Provider store={store}>\n      <div className='app'>\n        <h1>Welcome to the Redux Todo App</h1>\n        <TodoApp />\n      </div>\n    </Provider>\n  );\n}\n\nexport default App;",
          },
          {
            title: "Basic Counter with Redux Toolkit",
            description:
              "Creating a simple counter application with Redux Toolkit to manage the state.",
            codeSample:
              "import React from 'react';\nimport { configureStore, createSlice } from '@reduxjs/toolkit';\nimport { Provider, useDispatch, useSelector } from 'react-redux';\n\n// Slice\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: 0,\n  reducers: {\n    increment: (state) => state + 1,\n    decrement: (state) => state - 1,\n  },\n});\n\nconst { actions, reducer } = counterSlice;\nconst store = configureStore({ reducer });\n\nfunction Counter() {\n  const count = useSelector((state) => state);\n  const dispatch = useDispatch();\n\n  return (\n    <div className='counter'>\n      <h2>Counter: {count}</h2>\n      <button onClick={() => dispatch(actions.increment())}>Increment</button>\n      <button onClick={() => dispatch(actions.decrement())}>Decrement</button>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Provider store={store}>\n      <div className='app'>\n        <h1>Welcome to the Redux Toolkit Counter App</h1>\n        <Counter />\n      </div>\n    </Provider>\n  );\n}\n\nexport default App;",
            notes:
              "Redux Toolkit simplifies the process of creating actions and reducers and configuring the store.",
          },
          {
            title: "Todo List with Redux Toolkit",
            description:
              "Creating a todo list application with Redux Toolkit slices to manage the state of the todos.",
            codeSample:
              "import React, { useState } from 'react';\nimport { configureStore, createSlice } from '@reduxjs/toolkit';\nimport { Provider, useDispatch, useSelector } from 'react-redux';\n\n// Slice\nconst todosSlice = createSlice({\n  name: 'todos',\n  initialState: [],\n  reducers: {\n    addTodo: (state, action) => {\n      state.push({ text: action.payload, completed: false });\n    },\n    toggleTodo: (state, action) => {\n      const todo = state[action.payload];\n      if (todo) {\n        todo.completed = !todo.completed;\n      }\n    },\n  },\n});\n\nconst { actions, reducer } = todosSlice;\nconst store = configureStore({ reducer });\n\nfunction TodoApp() {\n  const [input, setInput] = useState('');\n  const todos = useSelector((state) => state);\n  const dispatch = useDispatch();\n\n  const handleAddTodo = () => {\n    if (input.trim()) {\n      dispatch(actions.addTodo(input));\n      setInput('');\n    }\n  };\n\n  return (\n    <div className='todo-app'>\n      <h2>Todo List</h2>\n      <input\n        type='text'\n        value={input}\n        onChange={(e) => setInput(e.target.value)}\n        placeholder='Add a new todo'\n      />\n      <button onClick={handleAddTodo}>Add Todo</button>\n      <ul>\n        {todos.map((todo, index) => (\n          <li\n            key={index}\n            onClick={() => dispatch(actions.toggleTodo(index))}\n            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}\n          >\n            {todo.text}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Provider store={store}>\n      <div className='app'>\n        <h1>Welcome to the Redux Toolkit Todo App</h1>\n        <TodoApp />\n      </div>\n    </Provider>\n  );\n}\n\nexport default App;",
            notes:
              "Redux Toolkit simplifies the process of creating actions and reducers and configuring the store.",
          },
        ],
      },
    ],
  },
  {
    title: "Higher-Order Components (HOCs)",
    description:
      "Higher-Order Components (HOCs) are functions that take a component and return a new component with additional props or behaviours.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const withLogger = (WrappedComponent) => {\n  return class extends React.Component {\n    componentDidMount() {\n      console.log(`Component ${wrappedComponent.name} mounted`);\n    }\n    render() {\n      return <WrappedComponent {...this.props} />;\n    }\n  };\n};\n\n// Usage\nconst ComponentWithLogger = withLogger(SomeComponent);\n\n// As a functional component\nconst withLogger = (WrappedComponent) => {\n  return (props) => {\n    useEffect(() => {\n      console.log(`Component ${WrappedComponent.name} mounted`);\n    }, []);\n    return <WrappedComponent {...props} />;\n  };\n};\n\n// Usage\nconst ComponentWithLogger = withLogger(SomeComponent);",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Code Reusability",
            description:
              "Enables code reuse and composability by separating concerns.",
          },
          {
            title: "Cross-Cutting Concerns",
            description:
              "Allows for cross-cutting concerns like authentication, logging or data fetching to be applied to multiple components.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Prop Conflicts",
            description:
              "Can lead to prop conflicts or naming collisions if not used carefully.",
          },
          {
            title: "Component Structure",
            description:
              "May result in a more deeply nested component structure, making debugging and tracing component hierarchies more complex.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Authentication HOC",
            description:
              "Creating a HOC to handle authentication, wrapping components that require authentication to access.",
            codeSample:
              "import React from 'react';\nimport { Redirect } from 'react-router-dom';\n\n// Authentication HOC\nfunction withAuth(WrappedComponent) {\n  return class extends React.Component {\n    isAuthenticated() {\n      // Replace with real authentication check logic\n      return !!localStorage.getItem('authToken');\n    }\n\n    render() {\n      if (!this.isAuthenticated()) {\n        return <Redirect to='/login' />;\n      }\n      return <WrappedComponent {...this.props} />;\n    }\n  };\n}\n\n// Example component that requires authentication\nfunction Dashboard() {\n  return <h2>Welcome to your Dashboard</h2>;\n}\n\n// Wrap the component with the HOC\nconst AuthenticatedDashboard = withAuth(Dashboard);\n\nfunction App() {\n  return (\n    <div className='app'>\n      <h1>My App</h1>\n      <AuthenticatedDashboard />\n    </div>\n  );\n}\n\nexport default App;",
            notes:
              "The !! converts the value from a `truthy` or `falsy` to an actual boolean `true` or `false`.  A truthy or falsy can be anything that if converted to a boolean would return true or false.",
          },
          {
            title: "Logging HOC",
            description:
              "Creating an HOC to log props and state changes, wrapping component to provide logging functionality.",
            codeSample:
              "import React from 'react';\n\n// Logging HOC\nfunction withLogging(WrappedComponent) {\n  return class extends React.Component {\n    componentDidUpdate(prevProps, prevState) {\n      console.log('Previous Props:', prevProps);\n      console.log('Current Props:', this.props);\n    }\n\n    render() {\n      return <WrappedComponent {...this.props} />;\n    }\n  };\n}\n\n// Example component to log props\nfunction UserProfile({ name, age }) {\n  return (\n    <div>\n      <h2>User Profile</h2>\n      <p>Name: {name}</p>\n      <p>Age: {age}</p>\n    </div>\n  );\n}\n\n// Wrap the component with the HOC\nconst LoggedUserProfile = withLogging(UserProfile);\n\nfunction App() {\n  return (\n    <div className='app'>\n      <h1>My App</h1>\n      <LoggedUserProfile name='John Doe' age={30} />\n    </div>\n  );\n}\n\nexport default App;",
          },
        ],
      },
    ],
  },
  {
    title: "Render Props",
    description:
      "Render props is a technique for sharing code between React components using a prop whose value is a function.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "import React, { useState } from 'react';\n\nconst Mouse = ({ children }) => {\n  const [position, setPosition] = useState({ x: 0, y: 0 });\n\n  const handleMouseMove = (event) => {\n    setPosition({ x: event.clientX, y: event.clientY });\n  };\n\n  return (\n    <div style={{ height: '100%; }} onMouseMove={handleMouseMove}>\n      {children(position)}\n    </div>\n  );\n};\n\n// Usage\nconst App = () => (\n  <div style={{ height: '100%' }}>\n    <h1>Move the mouse around</h1>\n    <Mouse>\n      {(mouse) => (\n        <div>\n          The mouse position is ({mouse.x}, {mouse.y})\n        </div>\n      )}\n    </Mouse>\n  </div>\n);\n\nexport default App;",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Code Reusability",
            description:
              "Promotes code reusability and composability by allowing components to share logic within inheritance.",
          },
          {
            title: "Customisable Behaviour",
            description:
              "Provides a flexible and intuitive way to customise component behaviour based on props.",
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
              "Can introduce additional complexity, especially when multiple render prop components are nested.",
          },
          {
            title: "Verbosity",
            description: "May lead to verbose code if not used judiciously.",
          },
        ],
      },
    ],
  },
  {
    title: "ref",
    description:
      "Refs provide a way to access DOM nodes or React elements created in the render method. They can be used to store a reference to an element and directly manipulate it.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "import React, { useRef } from 'react';\n\nfunction TextInputWithFocusButton() {\n  const inputEl = useRef(null);\n\n  const onButtonClick = () => {\n    inputEl.current.focus();\n  };\n\n  return (\n    <div>\n      <input ref={inputEl} type='text' />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </div>\n  );\n}\n\nexport default TextInputWithFocusButton;",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Direct Access",
            description: "Allows direct manipulation of DOM elements.",
          },
          {
            title: "Use Cases",
            description:
              "Useful for integrating with third-party libraries and handle focus, text selection and media playback.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Imperative Code",
            description:
              "Can lead to imperative code, which is generally discourages in React.",
          },
          {
            title: "Complexity",
            description:
              "May introduce complexity by mixing declarative and imperative approaches.",
          },
        ],
      },
    ],
  },
  {
    title: "Portals",
    description:
      "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component, allowing for more flexible rendering scenarios.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const Modal = ({ children )} => {\n  const modalRoot = document.getElementById('modal-root');\n  return modalRoot ? ReactDOM.createPortal(children, modalRoot) : null;\n};\n\n// Usage\n<Modal>\n  <div>This content will be rendered outside the current DOM hierarchy.</div>\n</Modal>",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Flexible Rendering",
            description:
              "Useful for scenarios like modals, tooltips, and popovers where you want the component to render outside the current DOM hierarchy.",
          },
          {
            title: "Simplified Styling",
            description:
              "Simplifies styling and positioning for overlay components.",
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
              "May introduce complexity in managing focus, accessibility, and event bubbling.",
          },
          {
            title: "Debugging Challenges",
            description: "Can make debugging and testing more challenging.",
          },
        ],
      },
    ],
  },
];
