import React from "react";
import withLayout from "./withLayout";
import {fundamentals} from "../../api/fundamentals";
import Content from "./Content";

const FundamentalsPage = withLayout(Content, fundamentals);

const Fundamentals: React.FC = () => (
  <FundamentalsPage
    title="Fundamentals of Frontend Development"
    description="Content..."
    sections={fundamentals}
  />
);

export default Fundamentals;
