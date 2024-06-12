export const reactFundamentals = [
  {
    title: "Components",
    description:
      "These are the building blocks of a React application. They can be class-based or function-based and encapsulate a piece of the UI.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    ],
    codeSample:
      "import React from 'react';\n\nconst MyComponent = () => {\n  return (\n    <div>\n      <h1>Hello, Functional Component!</h1>\n    </div>\n  );\n};\n\nexport default MyComponent;",
  },
  {
    title: "State",
    description:
      "State is a built-in object that allows components to create and manage their own data. When state changes, the component re-renders.",
    blocks: [
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
    ],
    codeSample:
      "import React, { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setCount(count + 1);\n  };\n\n  return (\n    <div>\n      <h2>Counter: {count}</h2>\n      <button onClick={increment}>Increment</button>\n    </div>\n  );\n};\n\nexport default Counter;",
  },
  {
    title: "Props",
    description:
      "Props are read-only inputs to a React component that allow data to be passed from parent to child components.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    ],
    codeSample:
      "import React from 'react';\n\nconst Greeting = (props) => {\n  return (\n    <div>\n      <h1>Hello, {props.name}!</h1>\n    </div>\n  );\n};\n\nexport default Greeting;",
  },
  {
    title: "Hooks",
    description:
      "Hooks are functions that let you use state and other React features in functional components. The most commonly used are useState and useEffect.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    ],
    codeSample:
      "import React, { useState, useEffect } from 'react';\n\nconst Timer = () => {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    const intervalId = setInterval(() => {\n      setSeconds(prevSeconds => prevSeconds + 1);\n    }, 1000);\n\n    return () => clearInterval(intervalId);\n  }, []);\n\n  return (\n    <div>\n      <h2>Timer: {seconds} seconds</h2>\n    </div>\n  );\n};\n\nexport default Timer;",
  },
  {
    title: "Lifecycle Methods (Class Components)",
    description:
      "Lifecycle methods are special methods in class components that allow you to hook into different phases of a components lifecycle, such as mounting, updating and unmounting.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    codeSample:
      "class MyComponent extends React.Component {\n  componentDidMount() {\n    console.log('Component mounted');\n  }\n\n  componentWillUnmount() {\n    console.log('Component will unmount');\n  }\n\n  render() {\n    return (\n      <div>\n        <h1>Hello, Class Component!</h1>\n      </div>\n    );\n  }\n}\n\nexport default MyComponent;",
  },
  {
    title: "Context",
    description:
      "Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    ],
    codeSample:
      "import React, { createContext, useContext } from 'react';\n\n// Create a context\nconst ThemeContext = createContext('light');\n\n// Create a provider component\nconst ThemeProvider = ({ children }) => {\n  return <ThemeContext.Provider value='dark'>{children}</ThemeContext.Provider>;\n};\n\n// A child component that consumes the context\nconst ThemedComponent = () => {\n  const theme = useContext(ThemeContext);\n  return <div>Current theme: {theme}</div>;\n};\n\nexport { ThemeProvider, ThemedComponent };",
  },
  {
    title: "useState",
    description:
      "The useState hook is a function provided by React that allows functional components to manage local state.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    codeSample:
      "import React, { useState } from 'react';\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setCount(count + 1);\n  };\n\n  const decrement = () => {\n    setCount(count - 1);\n  };\n\n  return (\n    <div>\n      <h2>Counter: {count}</h2>\n      <button onClick={increment}>Increment</button>\n      <button onClick={decrement}>Decrement</button>\n    </div>\n  );\n};\n\nexport default Counter;",
  },
  {
    title: "useEffect",
    description:
      "The useEffect hook is a function provided by React that allows functional components to perform side effects.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    codeSample:
      "import React, { useState, useEffect } from 'react';\n\nconst Timer = () => {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    const intervalId = setInterval(() => {\n      setSeconds(prevSeconds => prevSeconds + 1);\n    }, 1000);\n\n    return () => clearInterval(intervalId);\n  }, []);\n\n  return (\n    <div>\n      <h2>Timer: {seconds} seconds</h2>\n    </div>\n  );\n};\n\nexport default Timer;",
  },
  {
    title: "Forms",
    description:
      "Forms in React are used to collect user input. React provides controlled components to manage form inputs.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    ],
  },
  {
    title: "Error Boundaries",
    description:
      "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire component tree.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    codeSample:
      "import React, { Component } from 'react';\n\nclass ErrorBoundary extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.error('Error caught by ErrorBoundary:', error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Something went wrong</h1>;\n    }\n\n    return this.props.children;\n  }\n}\n\nexport default ErrorBoundary;\n\n// Usage\n<ErrorBoundary>\n  <ComponentThatMayError />\n</ErrorBoundary>",
  },
  {
    title: "React Router",
    description:
      "React Router is a library for routing React applications. It enables navigation between different components and pages.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    ],
  },

  {
    title: "Redux (State Management Library)",
    description:
      "Redux is a predictable state container for JavaScript apps, often used with React to manage complex state logic.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    ],
  },
  {
    title: "Higher-Order Components (HOCs)",
    description:
      "Higher-Order Components (HOCs) are functions that take a component and return a new component with additional props or behaviours.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    ],
    codeSample:
      "const withLogger = (WrappedComponent) => {\n  return class extends React.Component {\n    componentDidMount() {\n      console.log(`Component ${wrappedComponent.name} mounted`);\n    }\n    render() {\n      return <WrappedComponent {...this.props} />;\n    }\n  };\n};\n\n// Usage\nconst ComponentWithLogger = withLogger(SomeComponent);\n\n// As a functional component\nconst withLogger = (WrappedComponent) => {\n  return (props) => {\n    useEffect(() => {\n      console.log(`Component ${WrappedComponent.name} mounted`);\n    }, []);\n    return <WrappedComponent {...props} />;\n  };\n};\n\n// Usage\nconst ComponentWithLogger = withLogger(SomeComponent);",
  },
  {
    title: "Render Props",
    description:
      "Render props is a technique for sharing code between React components using a prop whose value is a function.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    codeSample:
      "import React, { useState } from 'react';\n\nconst Mouse = ({ children }) => {\n  const [position, setPosition] = useState({ x: 0, y: 0 });\n\n  const handleMouseMove = (event) => {\n    setPosition({ x: event.clientX, y: event.clientY });\n  };\n\n  return (\n    <div style={{ height: '100%; }} onMouseMove={handleMouseMove}>\n      {children(position)}\n    </div>\n  );\n};\n\n// Usage\nconst App = () => (\n  <div style={{ height: '100%' }}>\n    <h1>Move the mouse around</h1>\n    <Mouse>\n      {(mouse) => (\n        <div>\n          The mouse position is ({mouse.x}, {mouse.y})\n        </div>\n      )}\n    </Mouse>\n  </div>\n);\n\nexport default App;",
  },
  {
    title: "ref",
    description:
      "Refs provide a way to access DOM nodes or React elements created in the render method. They can be used to store a reference to an element and directly manipulate it.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    codeSample:
      "import React, { useRef } from 'react';\n\nfunction TextInputWithFocusButton() {\n  const inputEl = useRef(null);\n\n  const onButtonClick = () => {\n    inputEl.current.focus();\n  };\n\n  return (\n    <div>\n      <input ref={inputEl} type='text' />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </div>\n  );\n}\n\nexport default TextInputWithFocusButton;",
  },
  {
    title: "useCallback",
    description:
      "useCallback is a Hook that returns a memoized callback. It is useful for optimising performance by preventing unnecessary re-creations of functions.",
    blocks: [
      {
        title: "Positives",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Performance",
            description:
              "Reduces unnecessary re-rendering by memoising functions.",
          },
          {
            title: "Stability",
            description:
              "Ensures stable references for functions passed to dependant components or Hooks.",
          },
        ],
      },
      {
        title: "Negatives",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Overhead",
            description:
              "Using useCallback unnecessary can add overhead and complexity.",
          },
          {
            title: "Dependencies",
            description:
              "Requires careful management of dependency arrays to avoid bugs.",
          },
        ],
      },
    ],
    codeSample:
      "import React, { useState, useCallback } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  const increment = useCallback(() => {\n    setCount((c) => c + 1);\n  }, []);\n\n  return (\n    <div>\n      <button onClick={increment}>Increment</button>\n      <p>Count: {count}</p>\n    </div>\n  );\n}\n\nexport default Counter;\n",
  },
  {
    title: "useMemo",
    description:
      "useMemo is a Hook that returns a memoised value. It is useful for optimising performance by memoising expensive calculations.",
    blocks: [
      {
        title: "Positives",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Performance",
            description: "Avoids expensive recalculations by memoising values.",
          },
          {
            title: "Efficiency",
            description:
              "Enhances efficiency for computationally intensive tasks.",
          },
        ],
      },
      {
        title: "Negatives",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Overhead",
            description:
              "Using useMemo unnecessary can add overhead and complexity.",
          },
          {
            title: "Dependencies",
            description:
              "Requires careful management of dependency arrays to ensure correct memoisation.",
          },
        ],
      },
    ],
    codeSample:
      "import React, { useState, useMemo } from 'react';\n\nfunction ExpensiveCalculation({ number }) {\n  const computeFactorial = (n) => {\n    console.log('Computing factorial...');\n    return n <=1 ? 1 : n * computeFactorial(n - 1);\n  };\n\n  const factorial = useMemo(() => computeFactorial(number), [number]);\n\n  return <div>Factorial of {number} is {factorial}</div>;\n}\n\nfunction App() {\n  const [count, setCount] = useState(1);\n\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Incrememnt</button>\n      <ExpensiveCalculation number={count} />\n    </div>\n  );\n}\n\nexport default App;",
  },

  {
    title: "Portals",
    description:
      "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component, allowing for more flexible rendering scenarios.",
    blocks: [
      {
        title: "Positives",
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
        title: "Negatives",
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
    codeSample:
      "const Modal = ({ children )} => {\n  const modalRoot = document.getElementById('modal-root');\n  return modalRoot ? ReactDOM.createPortal(children, modalRoot) : null;\n};\n\n// Usage\n<Modal>\n  <div>This content will be rendered outside the current DOM hierarchy.</div>\n</Modal>",
  },
];
