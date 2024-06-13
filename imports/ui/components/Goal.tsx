import React from "react";

export interface GoalProps {
  goal: string;
  target: string | number;
  current: string | number;
  unit?: string;
}
const Goal: React.FC<GoalProps> = ({goal, target, current, unit}) => {
  const difference = (t: number, c: number) => {
    return c - t;
  };

  function getClassName(number: number) {
    return number < 0
      ? "text-context-failure-base"
      : "text-context-success-base";
  }

  return (
    <div className="min-w-80 flex flex-col gap-4 p-4 bg-neutral-light rounded">
      <header>
        <h1 className="text-lg text-primary">{goal}</h1>
      </header>
      <main className="flex flex-col gap-4 justify-between">
        <div className="flex justify-between items-center text-sm bg-context-success-base text-neutral-base p-4 rounded">
          <p>Target: </p>
          <p>
            {unit && unit}
            {target}
          </p>
        </div>
        <div
          className={`flex justify-between items-center text-sm ${
            typeof target === "number" && typeof current === "number"
              ? current >= target
                ? "bg-context-success-base"
                : "bg-context-warning-base"
              : current === target
              ? "bg-context-success-base"
              : "bg-context-warning-base"
          } text-neutral-base p-4 rounded`}
        >
          <p>Current:</p>
          <p>
            {unit && unit}
            {current}
          </p>
        </div>
        {/* {typeof target === "number" && typeof current === "number" && (
            <div className="flex justify-between items-center text-sm">
              <p>Difference:</p>
              <span className={getClassName(difference(target, current))}>
                {unit && unit}
                {Math.abs(difference(target, current))}
              </span>
            </div>
          )} */}
      </main>
    </div>
  );
};

export default Goal;
