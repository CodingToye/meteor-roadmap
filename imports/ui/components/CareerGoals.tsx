import React from "react";
import Goal from "./Goal";
import {goals} from "../../api/goals";

const CareerGoals = () => {
  return (
    <div>
      <main className="grid lg:grid-flow-col grid-cols-1 lg:auto-cols-max gap-4">
        {goals.map((goal, goalIndex) => (
          <Goal
            key={goalIndex}
            goal={goal.goal}
            current={goal.current}
            target={goal.target}
            unit={goal.unit}
          />
        ))}
      </main>
    </div>
  );
};

export default CareerGoals;
