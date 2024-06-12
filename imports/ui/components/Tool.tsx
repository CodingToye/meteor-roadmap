import React from "react";

export interface ToolProps {
  tool: string;
}

const Tool: React.FC<ToolProps> = ({tool}) => {
  return (
    <div className="bg-secondary text-neutral-base p-2 rounded text-xs">
      {tool}
    </div>
  );
};

export default Tool;
