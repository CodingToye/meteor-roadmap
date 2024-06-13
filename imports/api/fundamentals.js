export const fundamentals = [
  {
    title: "Frontend Tooling",
    description:
      "How module bundlers like Webpack work, how they are configured and how they fit into the roadmap.",
    blocks: [
      {
        title: "Module Bundlers",
        meta: "tool",
        description:
          "Module bundlers are tools that combine JavaScript code and its dependencies into a single file or a set of files for easier and efficient loading in web applications.\nExamples being Webpack, Vite, Parcel, Rollup",
        subBlocks: [
          {
            title: "Tree Shaking",
            description:
              "Tree shaking is a form of dead code elimination.\nIt helps remove unused code from the final bundle.",
          },
          {
            title: "Code Splitting",
            description:
              "Code splitting allows you to split your code into various bundles.\nThis can be loaded on demand or in parallel.",
          },
          {
            title: "Polyfills",
            description:
              "Polyfills are used to add support for features that are not natively supported by certain browsers.",
          },
          {
            title: "Bundle Analysis",
            description:
              "Bundle analysis tools help you understand what code is in your bundles.\nThey can help you optimize your application's performance.",
          },
        ],
      },
      {
        title: "Linting and Code Quality",
        description:
          "Linting tools ensure that coding standards are adhered to.",
        meta: "tool",
        subBlocks: [
          {
            title: "Linting",
            description:
              "A static code analysis tool for identifying and fixing problems in JavaScript code, ensuring code quality and consistency.",
            tools: [
              {
                tool: "ESLint",
              },
            ],
          },
          {
            title: "Formatting",
            description:
              "An opinionated code formatter that enforces consistent style by reprinting code with its own rules.",
            tools: [
              {
                tool: "Prettier",
              },
            ],
          },
          {
            title: "Automating Tasks",
            description:
              "Scripts that run at specific points in the Git workflow to automate tasks like linting and testing.",
            tools: [
              {
                tool: "Git Hooks",
              },
            ],
          },
          {
            title: "Hook Management",
            description:
              "A tool that simplifies managing Git hooks to automate tasks such as linting, testing, and formatting code before commits and pushes.",
            tools: [
              {
                tool: "Husky",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Component Driven Development",
    description:
      "A core pattern used in JavaScript frameworks is encapsulating code in small bite-size pieces called components.",
    blocks: [
      {
        title: "State Management",
        description:
          "The process of managing state of an application, ensuring that it is consistently updated and shared across components.",
        meta: "component",
        subBlocks: [
          {
            title: "State Machine Pattern",
            description:
              "A design pattern where an object's behaviour is determined by its current state and a predefined set of transitions between states, often represented as a finite set of states and events triggering state transitions.",
          },
          {
            title: "Essential State",
            description:
              "The core state that is crucial for the application's operation and directly managed by user actions or events.",
          },
          {
            title: "Derived State",
            description:
              "State that is computed from other state variables, often using a combination of existing state values.",
          },
          {
            title: "Hierarchy of States",
            description:
              "An organised structure of states in a component tree where higher-level components manage broad states and pass relevant data down to lower-level components.",
          },
          {
            title: "Data Fetching",
            description:
              "The process of retrieving data from external sources, such as APIs or databases, to be used within an application.",
          },
          {
            title: "Prop Drilling",
            description:
              "The practice of passing data from a parent component to deeply nested child components through intermediate components via props.",
          },
          {
            title: "Reducer Pattern",
            description:
              "A state management pattern where a reducer function takes the current state and an action, and returns a new state based on the action's type and payload.",
          },
        ],
      },
      {
        title: "Frontend Design Patterns",
        description:
          "Reusable solutions to common design problems in frontend development, facilitating maintainability, scalability, and code organisation in user interfaces.",
        meta: "component",

        subBlocks: [
          {
            title: "Virtual DOM",
            description:
              "A technique used in frontend libraries like React to improve performance by maintaining a lightweight, in-memory representation of the DOM structure, allowing efficient updates and minimising direct manipulation of the actual DOM.",
          },
          {
            title: "Senior Dev Tip",
            description:
              "You can answer why React is so fast by explaining the Virtual DOM",
            tip: true,
          },
          {
            title: "MVC (Model-View-Controller)",
            description:
              "A design pattern for organising code in applications, where the Model represents the data and business logic, the View displays the data to the user, and the Controller handles user input, acting as an intermediary between the Model and View.",
          },
          {
            title: "Observer Pattern",
            description:
              "A behavioural pattern where an object (the subject) maintains a list of its dependents (observers) and notifies them of any changes in state, enabling a loosely copupled communication between objects.",
          },
        ],
      },
      {
        title: "Browser APIs",
        description:
          "Interfaces provided by web browsers that allow developers to interact with various functionalities of the browser and the environment.",
        meta: "component",
        subBlocks: [
          {
            title: "DOM (Document Object Model)",
            description:
              "Represents the structure of HTML and XML documents, allowing JavaScript to manipulate their content, structure and style.",
          },
          {
            title: "XHR (XMLHttpRequest)",
            description:
              "Enables making HTTP requests from the browser, commonly used for AJAX and fetching data from servers.",
          },
          {
            title: "Fetch API",
            description:
              "A modern replacement for XHR, providing a more powerful and flexible interface for making network requests.",
          },
          {
            title: "Web Storage (localStorage and sessionStorage)",
            description:
              "Allows storing key-value pairs locally in the browser, persisting across sessions (localStorage) or only for the duration of the session (sessionStorage).",
          },
          {
            title: "IndexedDB",
            description:
              "A low-level API for client-side storage of large amounts of structured data, providing a more advanced alternative to Web Storage.",
          },
          {
            title: "Web Workers",
            description:
              "Enables running scripts in background threads, improving performance by offloading CPU-intensive tasks from the main thread.",
          },
          {
            title: "Service Workers",
            description:
              "Scripts that run in the background, intercepting and controlling network requests, enabling features like offline support and push notifications.",
          },
          {
            title: "WebSockets",
            description:
              "Provides a full-duplex communication channel over a single TCP connection, enabling real-time, bidirectional communication between the client and server.",
          },
          {
            title: "WebRTC (Web Real-Time Communication)",
            description:
              "Enables peer-to-peer communication in web applications, allowing for audio, video and data sharing without plugins or additional software.",
          },
          {
            title: "GeoLocation API",
            description:
              "Allows accessing the user's geographical location, providing location information based on GPS or network signals.",
          },
          {
            title: "Canvas API",
            description:
              "Enables drawing graphics and animations dynamically on web pages using JavaScript",
          },
          {
            title: "History API",
            description:
              "Allows web developers to manipulate the browser's session history, enabling programmatic navigation without page reloads, and providing control over the browser's back and forward buttons.",
          },
          {
            title: "Senior Dev Tip",
            description:
              "Understanding the History API and routing will make the difference between spending 5 minutes or 5 days debugging a blank page error.",
            tip: true,
          },
        ],
      },
      {
        title: "Accessibility",
        description:
          "The practice of ensuring that websites, applications and digital content are usable and understandable by all people, including those with disabilities, through design, development and testing conditions.",
        meta: "component",
        subBlocks: [
          {
            title: "WCAG (Web Content Accessibility Guidelines)",
            description:
              "A set of internationally recognised guidlines developed by the W3C to make web content more accessible to people with disabilities.  It provides recommendations for creating accessible content, covering areas such as preceivability, operability, understandability and robustness.",
          },
          {
            title: "Semantic HTML",
            description:
              "Using HTML markup that conveys meaning and structure to both users and assistive technologies, making web content more accessible and understandable. It involves using appropriate HTML elements to represent the different parts of a web page.",
          },
        ],
      },
      {
        title: "CSS Fundamentals",
        description:
          "The foundational concepts and syntax of Cascading Style Sheets, including selectors, properties, values, and how they are used to style HTML elements on digital content.",
        meta: "component",
        subBlocks: [
          {
            title: "Flexbox",
            description:
              "A layout model in CSS that provides a more efficient way to design, align and distribute space among items in a container, allowing for flexible and dynamic layouts without relying on floats or positioning.",
          },
          {
            title: "Box Model",
            description:
              "A fundamental concept in CSS that describes how every element is represented as a rectangular box, consisting of content, padding, borders and margins, each of which can be styled and manipulated independently.",
          },
          {
            title: "Specificity",
            description:
              "The rules that determine which CSS styles are applied to an element when multiple conflicting styles are defined. Specificity is calculated based on the combination of selectors used in the CSS rules.",
          },
          {
            title: "Critical CSS",
            description:
              "The minimum CSS required to render the above-the-fold content of a web page, aimed at optimising page load performance by prioritising the delivery of essential styles needed for initial rendering.",
          },
          {
            title: "Tailwind CSS",
            description:
              "A utility-first CSS framework that provides a set of pre-designed utility classes to style HTML elements, enabling rapid development and consistent styling by composing utilities rather than writing custom CSS.",
          },
        ],
      },
      {
        title: "HTTP Status Codes",
        description:
          "Codes returned by the server to inform the client of the current state.",
        meta: "component",
        subBlocks: [
          {
            title: "200 - OK",
            description:
              "Indicates that the request has succeeded and the server has returned the requested resource.",
          },
          {
            title: "404 - Not Found",
            description:
              "Indicates that the server cannot find the requested resource. It is a standard response for a missing webpage or file.",
          },
          {
            title: "500 - Internal Server Error",
            description:
              "Indicates that the server encountered an unexpected condition that prevented it from fulfilling the request. It typically signifies an issue on the server side.",
          },
          {
            title: "301 - Moved Permanently",
            description:
              "Indicates that the resource has been permanently moved to a new URL. It informs client browsers to update their bookmarks or links accordingly.",
          },
          {
            title: "302 - Found (or Moved Temporarily)",
            description:
              "Indicates that the requested resource has been temporarily moved to a different URL. It instructs the client browser to retrieve the resource from the new URL temporarily.",
          },
          {
            title: "400 - Bad Request",
            description:
              "Indicates that the server cannot process the client's request due to a malformed syntax or invalid parameters.",
          },
          {
            title: "401 - Unauthorised",
            description:
              "Indicates that the client needs to be authenticate itself to access the requested resource, but has not provided valid credentials.",
          },
          {
            title: "403 - Forbidden",
            description:
              "Indicates that the server understood the client's request but refuses to authorise access to the requested resource.",
          },
          {
            title: "405 - Method Not Allowed",
            description:
              "Indicates that the method specified in the request line is not allowed for the resource identified by the request URI.",
          },
          {
            title: "429 - Too Many Requests",
            description:
              "Indicates that the client has sent too many request in a given amount of time, exceeding the rate limit imposed by the server.",
          },
          {
            title: "503 - Service Unavailable",
            description:
              "Indicates that the server is currently unable to handle the request due to temporary overload or maintenance, and the client should try again later.",
          },
        ],
      },
    ],
  },
  {
    title: "Web Security & Authentication",
    description:
      "The practice of safeguarding web applications and services from unauthorised access, data breaches, and other security threats.",
    blocks: [
      {
        title: "Authentication",
        description:
          "The process of verifying the identity of a user or entity before granting access to a system or resouce.",
        meta: "security",
        subBlocks: [
          {
            title: "Password-Based Authentication",
            description:
              "Using usernames and passwords to verify user identity.",
          },
          {
            title: "Multi-Factor Authentication (MFA)",
            description:
              "Adding extra layers of security, such as SMS codes or authenticator apps.",
          },
          {
            title: "OAuth",
            description:
              "A protocol for token-based authorisation, often used for single sign-on (SSO).",
          },
          {
            title: "OpenID Connect",
            description:
              "An identity later on top of OAuth 2.0 for verifying user identity.",
          },
          {
            title: "JWT (JSON Web Tokens)",
            description:
              "A compact, URL-safe means of representing claims to be transferred between two parties.",
          },
        ],
      },
      {
        title: "Authorisation",
        description:
          "The process of determining what permissions an authenticated user or entity has within a system, controlling access to resources based on roles or policies.",
        meta: "security",
        subBlocks: [
          {
            title: "Role-Based Access Control (RBAC)",
            description: "Assigning permissions based on user roles.",
          },
          {
            title: "Access Control Lists (ACLs)",
            description:
              "Specifying individual user or group permissions for accessing resources.",
          },
        ],
      },
      {
        title: "Secure Communication",
        description:
          "Ensuring that data transmitted between users and servers is encrypted and secure from eavesdropping or tampering, typically achieved using protocols like HTTPS and SSL/TTS.",
        meta: "security",
        subBlocks: [
          {
            title: "HTTPS",
            description:
              "Ensuring secure communication over the network by encrypting data.",
          },
          {
            title: "SSL/TTS",
            description:
              "Protocols for establishing encrypted links between a web server and a browser.",
          },
        ],
      },
      {
        title: "Data Protection",
        description:
          "Measures and processes to safeguard sensitive information from unauthorised access, breaches, or theft, including encryption, hasing and secure storage practices.",
        meta: "security",
        subBlocks: [
          {
            title: "Encryption",
            description:
              "Converting data into a secure format that cannot be easily ready by unauthorised users.",
          },
          {
            title: "Hashing",
            description:
              "Generating a fixed-size string or number from input data, typically used for storing passwords securely.",
          },
          {
            title: "Salt and Pepper",
            description:
              "Adding extra random data to passwords before hashing to enhance security.",
          },
        ],
      },
      {
        title: "Security Practices",
        description:
          "A set of methods and techniques to ensure the security of a system, such as input validation, implementing least privilege, and regular security audits.",
        meta: "security",
        subBlocks: [
          {
            title: "Input Validation",
            description:
              "Ensuring that data entered into forms or received from users is correct and secure.",
          },
          {
            title: "CSRF (Cross-Site Request Forgery) Protection",
            description:
              "Preventing unauthorised commands from being transmitted from a user that the web application trusts.",
          },
          {
            title: "CORS (Cross-Origin Resource Sharing)",
            description:
              "Managing cross-origin requests and interactions between different domains.",
          },
          {
            title: "Rate Limiting",
            description:
              "Limiting the number of requests a user can make to protect against brute force attacks.",
          },
        ],
      },
      {
        title: "Vulnerability Mitigation",
        description:
          "Strategies and actions to identify, access an reduce the risk of vulnerabilities in a system, including measures like XSS and SQL injection prevention, and the implementation of Content Security Policy (CSP).",
        meta: "security",
        subBlocks: [
          {
            title: "XSS (Cross-Site Scripting) Prevention",
            description:
              "Protecting against attacks where mailicious scripts are injected into web pages viewed by others.",
          },
          {
            title: "SQL Injection Prevention",
            description:
              "Protecting against attacks that involve inserting malicious SQL code into queries.",
          },
          {
            title: "Content Security Policy (CSP)",
            description:
              "A security measure to prevent a variety of attacks, such as XSS and data injection.",
          },
        ],
      },
      {
        title: "Monitoring and Incident Response",
        description:
          "Continuous observation of system activities and events to detect security threats and breaches, along with established procedures to respond to and mitigate incidents when they occur.",
        meta: "security",
        subBlocks: [
          {
            title: "Logging and Monitoring",
            description:
              "Keeping track of security-related events and activities to detect and respond to incidents.",
          },
          {
            title: "Intrusion Detection Systems (IDS)",
            description:
              "Monitoring network or system activities for malicious activities or policy violations.",
          },
        ],
      },
      {
        title: "Compliance",
        description:
          "Adhering to laws, regulations, and standards that govern data protection and privacy, such as GDPR and HIPAA, to ensure legal and ethical handling of user data.",
        meta: "security",
        subBlocks: [
          {
            title: "GDPR (General Data Protection Regulation)",
            description:
              "A regulation in EU law on data protection and privacy.",
          },
          {
            title:
              "HIPAA (Health Insurance Portability and Accountability Act)",
            description:
              "US legislation that provides data privacy and security provisions for safeguarding medical information.",
          },
        ],
      },
    ],
  },
  {
    title: "Web Performance",
    description:
      "Techniques used within the scope of the browser to enhance performance.",
    blocks: [
      {
        title: "Server Optimisation",
        description:
          "Enhancing server configuration and capabilities to handle requests efficiently, reduce latency, and improve response times through various techniques.",
        meta: "performance",
        subBlocks: [
          {
            title: "Caching",
            description:
              "Storing copies of files or data in temporary storage locations to quickly retrieve them on subsequent requests, reducing server load and speeding up content delivery.",
          },
          {
            title: "Load Balancing",
            description:
              "Distributing incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, improving responsiveness and reliability of web services.",
          },
          {
            title: "Database Query Optimisation",
            description:
              "Enhancing the efficiency of database queries by indexing relevant columns, rewriting queries for better performance, and minimising the number of queries to reduce latency and improve response times.",
          },
        ],
      },
      {
        title: "Images Optimisation",
        description:
          "Reducing image file sizes without compromising quality by using appropriate formats, compressing images, and implementing responsive images to ensure faster loading times.",
        meta: "performance",
        subBlocks: [
          {
            title: "Image Compression",
            description:
              "Reducing the file size of images without significantly affecting their quality to improve web page load times and reduce bandwidth usage.",
          },
          {
            title: "WebP Conversion",
            description:
              "Converting images to the WebP format, which provides superior compression for both lossless and lossy images, resulting in faster load times.",
          },
          {
            title: "srcset Attribute",
            description:
              "An HTML attribute that allows specifying multiple image sources for an `<img>` element, enabling responsive images by selecting the most appropriate image based on the screen size and resolution.",
          },
        ],
      },
      {
        title: "Fonts Optimisation",
        description:
          "Minimising font file sizes and loading times by using modern web font formats, subsetting fonts to include only necessary characters, and implementing strategies like font-display: swap to avoid rendering delays.",
        meta: "performance",
      },
      {
        title: "CSS Optimisation",
        description:
          "Streamlining CSS by removing unused styles, minifying CSS files, and using critical CSS to load essential styles first, which speeds up the initial render of web pages.",
        meta: "performance",
      },
      {
        title: "JavaScript Optimisation",
        description:
          "Improving JavaScript performance by minifying code, deferring non-essential scripts, using tree shaking to remove unused code, and optimising the execution and loading of scripts to reduce blocking of the main thread.",
        meta: "performance",
        subBlocks: [
          {
            title: "Minification",
            description:
              "The process of removing unnecessary characters (like whitespace, comments, and newlines) from JavaScript code to reduce its file size and improve load times.",
          },
          {
            title: "Uglification",
            description:
              "The process of transforming JavaScript code into a more compact and less readable form, often by shortening variable name and removing whitespace, to reduce file size and improve performance.",
          },
          {
            title: "Compression Techniques",
            description:
              "Methods such as gzip or Brotli that compress JavaScript files on the server before they are sent to the client's browser, which then decompresses them, leading to faster data transfer and reduced load times.",
          },
        ],
      },
      {
        title: "Framework Optimisation",
        description:
          "Enhancing the performance of web applications built with frameworks by following best practices, such as code splitting, lazy loading components and leveraging framework-specific optimisation tools and techniques.",
        meta: "performance",
        subBlocks: [
          {
            title: "React.lazy",
            description:
              "A function that enables code-splitting by allowing components to be loaded lazily, which means they are only loaded when they are needed, reducing the initial load time.",
          },
          {
            title: "React.memo",
            description:
              "A higher-order component that memoizes a component, preventing it from re-rendering if its props haven't changed, thus improving performance by reducing unnecessary renders.",
          },
          {
            title: "useCallback",
            description:
              "A React hook that returns a memoized callback function, which is useful for passing stable callback references to optimised child components that rely on reference equality to prevent unnecessary renders.",
          },
          {
            title: "useMemo",
            description:
              " A React hook that memoizes a value or a computed result, recalculating it only when one of its dependencies change, thereby avoiding expensive calculations on every render.",
          },
        ],
      },
    ],
  },
  {
    title: "CI/CD",
    description: "Complete Software Lifecycle.",
    blocks: [
      {
        title: "Continuous Integration (CI)",
        description:
          "Continuous Integration is a development practice where code changes are automatically tested and merged into a shared repository frequently, ensuring that new code integrates smoothly and reducing the risk of integration issues.",
        meta: "lifecycle",
      },
      {
        title: "Continuous Deployment/Delivery (CD)",
        description:
          "Continuous Deployment/Delivery is an extension of Continuous Integration that automates the release process, allowing code changes to be automatically deployed to a production-like environment after passing all tests, ensuring that software can be reliably released at any time.",
        meta: "lifecycle",
      },
      {
        title: "CI in Cloud Computing",
        description:
          "Continuous Integration in cloud computing involved using cloud-based CI tools and platforms to automate the process of integrating code changes from multiple developers. These tools typically offer scalable infrastructure, allowing for efficient execution of build and test pipelines.",
        meta: "lifecycle",
        subBlocks: [
          {
            title: "GitHub Actions",
            description:
              "Integrates with GitHub repositories to automatically build and test code changes in a cloud environment.",
            tools: [
              {
                tool: "GitHub Actions",
              },
            ],
          },
          {
            title: "Travis CI",
            description:
              "A cloud-based CI service that automatically tests code changes in various environments.",
            tools: [
              {
                tool: "Travis CI",
              },
            ],
          },
          {
            title: "CircleCI",
            description:
              "Provides cloud infrastructure to build, test and deploy code efficiently.",
            tools: [
              {
                tool: "CircleCI",
              },
            ],
          },
          {
            title: "Scalability",
            description: "Dynamically scale resources to handle various loads.",
          },
          {
            title: "Speed",
            description:
              "Rapid execution of tests and builds due to distributed cloud infrastructure.",
          },
          {
            title: "Accessibility",
            description:
              "Accessible from anywhere, facilitiating collaboration among distributed teams.",
          },
          {
            title: "Maintenance-Free",
            description:
              "No need to maintain physical servers or CI infrastructure.",
          },
        ],
      },
      {
        title: "CD in Cloud Computing",
        description:
          "Continuos Delivery in cloud-computing extends the CI process by automating the deployment of code changes to production-like environments. Cloud-based CD tools streamline the release process, ensuring new features and updates can be deployed rapidly and reliably.",
        meta: "lifecycle",
        subBlocks: [
          {
            title: "Automated Deployment",
            description:
              "Tools like AWS CodePipeline, Azure DevOps, and Google Cloud Build automate the deployment process, pushing code changes to staging and production environments.",
            tools: [
              {
                tool: "AWS CodePipeline",
              },
              {
                tool: "Azure DevOps",
              },
              {
                tool: "Google Cloud Build",
              },
            ],
          },
          {
            title: "Infrastructure as Code (IaC)",
            description:
              "Tools such as Terraform and AWS CloudFormation manage cloud infrastructure using code, allowing for reproducible and scalable deployments.",
            tools: [
              {
                tool: "Terraform",
              },
              {
                tool: "AWS CloudFormation",
              },
            ],
          },
          {
            title: "Monitoring and Rollback",
            description:
              "Integration with monitoring tools such as AWS CloudWatch and Google StackDriver, to detect issues and enable quick rollbacks if needed.",
            tools: [
              {
                tool: "AWS CloudWatch",
              },
              {
                tool: "Google StackDriver",
              },
            ],
          },
          {
            title: "Consistency",
            description:
              "Automated deployment pipelines ensure consistent release processes.",
          },
          {
            title: "Speed",
            description:
              "Rapid deployment of changes to production environments.",
          },
          {
            title: "Reliability",
            description:
              "Reduced risk of human error with automated processes.",
          },
          {
            title: "Scalability",
            description:
              "Easily scalable deployment processes to handle increased workloads.",
          },
        ],
      },
    ],
  },
  {
    title: "Frontend Architecture",
    description: "Specifically Micro Frontends and Server Side Rendering.",
    blocks: [
      {
        title: "Micro Frontends",
        description:
          "This is an architectual pattern where a web application is decomposed into smaller, independently deployable units, each responsible for a specific feature or functonality.\nThese units, or micro frontends, can be developed, deployed, and maintained by different teams, allowing for greater scalability, flexibility, and isolation.",
        meta: "architecture",
      },
      {
        title: "Server Side Rendering (SSR)",
        description:
          "SSR is a technique used in web development where a web server generates HTML pages dynamically during runtime and sends them to the client's browser. This allows the initial page content to be rendered on the server before being sent to the client, improving perceived performance and SEO.",
        meta: "architecture",
      },
      {
        title: "Backend for Frontend (BFF)",
        description:
          "BFF is an architectual pattern where a separate backend service is developed specifically to serve frontend clients. The BFF acts as an intermediary between the frontend and the backend services, providing tailored APIs and data structures optimised for the frontend's needs.\nThis approach helps improve frontend development efficiency and enables better separation of concerns between frontend and backend teams.",
        meta: "architecture",
      },
    ],
  },
];
