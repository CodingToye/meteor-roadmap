export const typescriptFundamentals = [
  {
    title: "Primitive Types",
    description:
      "Primitive types in TypeScript represent basic data types such as numbers, strings, booleans, nulls, undefined and symbols.",
    blocks: [
      {
        title: "Positives",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Efficiency",
            description:
              "Primitive types are lightweight and have predictable memory usage.",
          },
          {
            title: "Performance",
            description:
              "Operations involving primitive types are generally faster compared to complex types.",
          },
        ],
      },
      {
        title: "Negatives",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Limited Functionality",
            description:
              "Primitive types have limited built-in functionality compared to objects and complex types.",
          },
        ],
      },
    ],
    codeSample:
      "let num: number = 10;\nlet str: string = 'Hello';\nlet bool: boolean = true;\nlet nul: null = null;\nlet und: undefined = undefined;",
  },
  {
    title: "Union Types",
    description:
      "Union types in TypeScript allow a variable to have multiple possible types.",
    blocks: [
      {
        title: "Positives",
        description: "",
        meta: "positive",
        subBlocks: [
          {
            title: "Flexibility",
            description:
              "Union types provide flexibility by allowing variables to accept values of different types.",
          },
          {
            title: "Type Safety",
            description:
              "Helps handle scenarios where a value can be of multiple types, ensure type safety.",
          },
        ],
      },
      {
        title: "Negatives",
        description: "",
        meta: "negative",
        subBlocks: [
          {
            title: "Compexity",
            description:
              "Overuse of union types may lead to complex and less readable code.",
          },
        ],
      },
    ],
    codeSample:
      "let nurOrStr: number | string;\nnumOrStr = 10; // Valid\nnumOrStr = 'Hello'; // Valid",
  },
];
