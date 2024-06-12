import React from "react";
import Icon from "./Icon";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {cb} from "react-syntax-highlighter/dist/esm/styles/prism";

export interface CodeBlockProps {
  sample: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({sample}) => {
  return (
    <div className="relative pl-6 flex items-center">
      <Icon
        iconName="code"
        extraClasses="bg-code-base p-1 rounded shadow-lg border-t border-white/20 text-base relative -left-9"
      />
      <div className="w-full relative">
        <SyntaxHighlighter
          language="tsx"
          style={cb}
          PreTag="div"
          children={sample}
          className="rounded text-xs"
        />
      </div>
    </div>
  );
};

export default CodeBlock;
