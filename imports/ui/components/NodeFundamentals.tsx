import React from "react";
import withLayout from "./withLayout";
import {nodeFundamentals} from "../../api/node-fundamentals";
import Content from "./Content";

const NodeFundamentalsPage = withLayout(Content, nodeFundamentals);

const NodeFundamentals: React.FC = () => (
  <NodeFundamentalsPage
    title="Node Fundamentals"
    description="Node.js is a powerful, open-source, server-side runtime environment built on Chrome's V8 JavaScript engine. It enables developers to build scalable and efficient network applications using JavaScript."
    sections={nodeFundamentals}
  />
);

export default NodeFundamentals;
