import React from "react";

export interface ToolProps {
  tool: string;
}

const Tool: React.FC<ToolProps> = ({tool}) => {
  return (
    <div className="bg-context-tool-base text-context-tool-dark font-bold px-2 py-1 rounded text-xs">
      {tool}
    </div>
  );
};

export default Tool;
