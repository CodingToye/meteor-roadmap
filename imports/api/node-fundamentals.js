export const nodeFundamentals = [
  {
    title: "Non-Blocking I/O and Asynchronous Programming",
    description:
      "Node.js is bult on an event-driven, non-blocking I/O model, which makes it lightweight and efficient. This allows Node.js to handle many operations concurrently without being blocked by a single operation.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const fs = require('fs');\n\n// Non-blocking I/O\nfs.readFile('example.txt, 'utf8', (err, data) => {\n    if (err) {\n        console.error(err);\n        return;\n    }\n    console.log(data);\n});\n\nconsole.log('This will run before the file is read');",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Efficient Resource Usage",
            description:
              "Handles many operations concurrently without blocking.",
          },
          {
            title: "Scalable",
            description: "Suitable for high-concurrency environments.",
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
              "Can lead to complex and difficult-to-maintain code if not managed properly.",
          },
          {
            title: "Debugging Complexity",
            description: "Asynchronous code can be harder to debug.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Reading files asynchronously",
            description: "",
            codeSample:
              "const fs = require('fs');\n\n// Non-blocking I/O\nfs.readFile('example.txt, 'utf8', (err, data) => {\n    if (err) {\n        console.error(err);\n        return;\n    }\n    console.log(data);\n});\n\nconsole.log('This will run before the file is read');",

            notes: "",
          },
          {
            title: "Making HTTP requests",
            description: "",
            codeSample:
              "const https = require('https');\n\nhttps.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {\n    let data = '';\n\n    resp.on('data', (chunk) => {\n        data += chunk;\n    });\n\n    resp.on('end', () => {\n        console.log(JSON.parse(data));\n    });\n\n}).on('error', (err) => {\n    console.log('Error: ' + err.message);\n});",
            notes: "",
          },
        ],
      },
    ],
  },
  {
    title: "Event Loop",
    description:
      "The event loop is the core mechanism that handles asynchronous operations in Node.js. It allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "console.log('Start');\n\nsetTimeout(() => {\n    console.log('Timeout');\n}, 0);\n\nPromise.resolve().then(() => {\n    console.log('Promise');\n});\n\nconsole.log('End')",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Non-blocking",
            description:
              "Allows handling multiple operations without waiting for each to complete",
          },
          {
            title: "Efficient I/O",
            description: "Optimised for I/O-bound tasks.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Single-threaded",
            description: "can be less efficient for CPU-bound tasks",
          },
          {
            title: "Requires Understanding",
            description:
              "Developers need to understand event loop mechanics to avoid pitfalls.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "handling multiple setTimeout calls",
            description: "",
            codeSample:
              "console.log('Start');\n\nsetTimeout(() => {\n    console.log('Timeout 1');\n}, 1000);\n\nsetTimeout(() => {\n    console.log('Timeout 2');\n}, 500);\n\nconsole.log('End;);",
            notes: "",
          },
          {
            title: "Processing mutliple I/O operations",
            description: "",
            codeSample:
              "const fs = require('fs');\n\nfs.readFile('file1.txt', 'utf8', (err, data) => {\n    if (err) throw err;\n    console.log(data);\n});\n\nfs.readFile('file2.txt', 'utf8', (err, data) => {\n    if (err) throw err;\n    console.log(data);\n});\n\nconsole.log('Reading files...');",
            notes: "",
          },
        ],
      },
    ],
  },
  {
    title: "Modules and Require",
    description:
      "Node.js uses a module system to organise code. Each file in Node.js is treated as a module. Modules can be included in other modules using the `require` function.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "// math.js\nconst add = (a, b) => a + b;\nmodule.exports = { add };\n\n// app.js\nconst math = require('./math');\nconsole.log(math.add(2, 3)); // Outputs: 5",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Code Organisation",
            description:
              "Helps in structuring the application into manageable pieces.",
          },
          {
            title: "Reusability",
            description: "Encourages reuse of code across different projects.",
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
            description: "Can become complex with many interdependent modules.",
          },
          {
            title: "Versioning",
            description: "Keeping track of module versions can be challenging",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Creating and using a utility module",
            description: "",
            codeSample:
              "// utils.js\nconst add = (a, b) => a + b;\nmodule.exports = { add };\n\n// app.js\nconst utils = require('./utils');\nconsole.log(utils.add(2, 3)); // Outputs: 5",
            notes: "",
          },
          {
            title: "Using a third-party module",
            description: "",
            codeSample:
              "const axios = require('axios');\n\naxios.get('https://jsonplaceholder.typicode.com/posts/1')\n    .then(response => {\n        console.log(response.data);\n    })\n    .catch(error => {\n        console.error(error);\n    });",
            notes: "",
          },
        ],
      },
    ],
  },
  {
    title: "Global Objects",
    description:
      "Node.js provides several global objects that are always available, such as `global`, `process`, `__dirname`, and `__filename`.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "console.log(__dirname); // Outputs the directory name of the current module\nconsole.log(__filename); // Outputs the file name of the current module",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Always Available",
            description: "No need to require or import them.",
          },
          {
            title: "Useful Utilities",
            description:
              "Provide useful properties and methods for global operations",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Global Scope Pollution",
            description:
              "Overuse can lead to conflicts and hard-to-debug issues.",
          },
          {
            title: "Less Modular",
            description: "Encourages less modular and more coupled code.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Using __dirname and __filename",
            description: "",
            codeSample:
              "console.log(__dirname); // Outputs the directory name of the current module\nconsole.log(__filename); // Outputs the file name of the current module",
            notes: "",
          },
          {
            title: "Accessing process properties",
            description: "",
            codeSample:
              "console.log(`Process ID: ${process.pid}`);\nconsole.log(`Node.js version: ${process.version}`);",
            notes: "",
          },
        ],
      },
    ],
  },
  {
    title: "Buffers",
    description:
      "Buffers are used to handle binary data. They are particularly useful for working with streams and reading/writing binary data.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const buffer = Buffer.from('Hello, World');\nconsole.log(buffer.toString()); // Outputs: Hello, World",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Efficient Binary Data Handling",
            description: "Directly manipulate binary data.",
          },
          {
            title: "Performance",
            description: "High performance for binary data operations.",
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
            description: "Requires understanding of binary data manipulation.",
          },
          {
            title: "Error-prone",
            description:
              "Mistakes in buffer handling can lead to difficult-to-debug issues.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Creating and manipulating a buffer",
            description: "",
            codeSample:
              "const buffer = Buffer.from('Hello, World');\nconsole.log(buffer.toString()); // Outputs: Hello, World",
            notes: "",
          },
          {
            title: "Reading a file into a buffer",
            description: "",
            codeSample:
              "const fs = require('fs');\n\nfs.readFile('example.txt', (err, data) => {\n    if (err) throw err;\n    console.log(data); // Outputs buffer data\n    console.log(data.toString()); // Outputs file content as string\n});",
            notes: "",
          },
        ],
      },
    ],
  },
  {
    title: "Streams",
    description:
      "Streams are used to handle streaming data. There are four types of streams in Node.js: Readable, Writable, Duplex and Transform.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const fs = require('fs');\n\nconst readableStream = fs.createdReadStream('example.txt', { encoding: 'utf8' });\nreadableStream.on('data', chunk => {\n    console.log(chunk);\n});",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Memory Efficient",
            description: "Process data chunk by chunk, reducing memory usage.",
          },
          {
            title: "Powerful",
            description: "Can handle large amounts of data efficiently.",
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
            description: "Requires understanding of stream APIs.",
          },
          {
            title: "Error Handling",
            description: "Needs careful handling of errors and edge cases.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Reading from a readable stream",
            description: "",
            codeSample:
              "const fs = require('fs');\n\nconst readableStream = fs.createdReadStream('example.txt', { encoding: 'utf8' });\nreadableStream.on('data', chunk => {\n    console.log(chunk);\n});",
            notes: "",
          },
          {
            title: "Writing to a writable stream",
            description: "",
            codeSample:
              "const fs = require('fs');\n\nconst writableStream = fs.createWriteStream('output.txt');\nwritableStream.write('Hello, World');\nwritableStream.end();",
            notes: "",
          },
        ],
      },
    ],
  },
  {
    title: "File System",
    description:
      "Node.js provides a `fs` module to interact with the file system. It supports both synchronous and asynchronous operations.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const fs = require('fs');\n\n// Asynchronous file read\nfs.readFile('example.txt', 'utf8', (err, data) => {\n    if (err) {\n        console.error(err);\n        return;\n    }\n    console.log(data);\n});",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Full-file System Access",
            description: "Provides robust APIs for file operations.",
          },
          {
            title: "Asynchronous and Synchronous Methods",
            description:
              "Offers flexibility in how file operations are handled.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Asynchronous Complexity",
            description:
              "Asynchronous file operations require proper handling of callbacks/promise.",
          },
          {
            title: "Blocking Potential",
            description:
              "Synchronous methods can block the event loop if not used carefully.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Asynchronous file read",
            description: "",
            codeSample:
              "const fs = require('fs');\n\nfs.readFile('example.txt', 'utf8', (err, data) => {\n    if (err) {\n        console.error(err);\n        return;\n    }\n    console.log(data);\n});",
            notes: "",
          },
          {
            title: "Asynchronous file write",
            description: "",
            codeSample:
              "const fs = require('fs');\n\nfs.writeFile('example.txt', 'utf8', (err) => {\n    if (err) {\n        console.error(err);\n        return;\n    }\n    console.log('File written successfully');\n});",
            notes: "",
          },
        ],
      },
    ],
  },
  {
    title: "HTTP Module",
    description:
      "Node.js ihas a built-in HTTP module for creating web servers and handling HTTP requests and responses.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n    res.statusCode = 200;\n    res.setHeader('Content-Type', 'text/plain');\n    res.end('Hello, World');\n});\n\nserver.listen(3000, '127.0.0.1', () => {\n    console.log('Server running at http://127.0.0.1:3000');\n});",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Built-in Server Capabilities",
            description:
              "No need for external libraries to create basic web servers.",
          },
          {
            title: "Flexible",
            description: "Supports both HTTP and HTTPS.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Low-level",
            description:
              "More basic and requires more setup compared to frameworks like Express.",
          },
          {
            title: "Limited",
            description:
              "Not as feature-rich as dedicated web server software.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Creating a simple HTTP server",
            description: "",
            codeSample:
              "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n    res.statusCode = 200;\n    res.setHeader('Content-Type', 'text/plain');\n    res.end('Hello, World');\n});\n\nserver.listen(3000, '127.0.0.1', () => {\n    console.log('Server running at http://127.0.0.1:3000');\n});",
            notes: "",
          },
          {
            title: "Handling different request methods",
            description: "",
            codeSample:
              "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n    if (req.method === 'GET') {\n        res.writeHead(200, { 'Content-Type': 'text/plain' });\n        res.end('GET request received');\n    } else if (req.method === 'POST') {\n        res.writeHead(200, { 'Content-Type': 'text/plain' }};\n        res.end('POST request received');\n    }\n});\n\nserver.listen(3000, '127.0.0.1', () => {\n    console.log('Server running at http://127.0.0.1:3000');\n});",
            notes: "",
          },
        ],
      },
    ],
  },
  {
    title: "Event Emitters",
    description:
      "Node.js has an event-driven architecture and provides the `events` module for working with events.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "const EventEmitter = require('events');\n\nclass MyEmitter extends EventEmitter {}\nconst myEmitter = new MyEmitter();\n\nmyEmitter.on('event', () => {\n    console.log('An event occurred!');\n});\n\nmyEmitter.emit('event');",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Event-driven",
            description: "Enables a decoupled and responsive architecture.",
          },
          {
            title: "Flexible",
            description: "Can handle custom events easily.",
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
              "Improper handling can lead to memory leaks (e.g. not removing listeners).",
          },
          {
            title: "Debugging",
            description: "Can be harder to trace and debug events.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Custom event emitter",
            description: "",
            codeSample:
              "const EventEmitter = require('events');\n\nclass MyEmitter extends EventEmitter {}\nconst myEmitter = new MyEmitter();\n\nmyEmitter.on('event', () => {\n    console.log('An event occurred!');\n});\n\nmyEmitter.emit('event');",
            notes: "",
          },
          {
            title: "Handling multiple events",
            description: "",
            codeSample:
              "const EventEmitter = require('events');\n\nclass MyEmitter extends EventEmitter {}\nconst myEmitter = new MyEmitter();\n\nmyEmitter.on('event1', () => {\n    console.log('Event 1 occurred!');\n});\n\nmyEmitter.on('event2', () => {\n    console.log('Event 2 occurred!');\n});\n\nmyEmitter.emit('event1');\nmyEmitter.emit('event2');",
            notes: "",
          },
        ],
      },
    ],
  },
  {
    title: "NPM (Node Package Manager)",
    description:
      "NPM is the default package manager for Node.js and is used to manage dependencies and modules. It allows developers to install, share, and distribute code.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        language: "shell-session",
        codeSample:
          "# Initialise a new Node.js project\nnpm init -y\n\n# Install a package (e.g., Express)\nnpm install express",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Dependency Management",
            description: "Simplifies management of third-party packages.",
          },
          {
            title: "Community",
            description: "Large ecosystem of modules and libraries.",
          },
        ],
      },
      {
        title: "Cons",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Security",
            description:
              "Risk of introducing vulnerabilities through third-party packages.",
          },
          {
            title: "Version Conflicts",
            description: "Can lead to versioning issues and conflicts.",
          },
        ],
      },
    ],
  },
  {
    title: "Process Object",
    description:
      "The `process` object provides information and control over the current Node.js process. It can be used to interact with the environment and handle signals.",
    blocks: [
      {
        title: "Code Signature",
        meta: "signature",
        codeSample:
          "console.log(`Process ID: ${process.pid}`);\nconsole.log(`Node.js version: ${process.version}`);\n\nprocess.on('exit', (code) => {\n    console.log(`About to exit with code: ${code}`);\n});",
      },
      {
        title: "Pros",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Control",
            description: "Provides control over the current Node.js process.",
          },
          {
            title: "Environment Access",
            description:
              "Access to environment variables and system information.",
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
            description: "Can add complexity if overused.",
          },
          {
            title: "Platform Differences",
            description:
              "Some properties and methods may behave differently on different platforms.",
          },
        ],
      },
      {
        title: "Real World Scenarios",
        description: "",
        meta: "scenarios",
        subBlocks: [
          {
            title: "Reading environmental variables",
            description: "",
            codeSample: "console.log(`Environment: ${process.env.NODE_ENV}`);",
            notes: "",
          },
          {
            title: "Handling process events",
            description: "",
            codeSample:
              "process.on('exit', (code) => {\n    console.log(`About to exit with code: ${code}`);\n});\n\nconsole.log('This message is displayed first');\nprocess.exit(0);",
            notes: "",
          },
        ],
      },
    ],
  },
];
