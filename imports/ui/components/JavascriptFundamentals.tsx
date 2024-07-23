import React from "react";
import withLayout from "./withLayout";
import {javascriptFundamentals} from "../../api/javascript-fundamentals";
import Content from "./Content";

const JavascriptFundamentalsPage = withLayout(Content, javascriptFundamentals);

const JavascriptFundamentals: React.FC = () => (
  <JavascriptFundamentalsPage
    title="JavaScript Fundamentals"
    description="JavaScript Fundamentals encompasses the core concepts and features of JavaScript, a leading programming language in web development."
    sections={javascriptFundamentals}
  />
);

export default JavascriptFundamentals;
