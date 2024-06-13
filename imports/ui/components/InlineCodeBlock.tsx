import React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {materialDark} from "react-syntax-highlighter/dist/esm/styles/prism";

export interface CodeBlockProps {
  sample: string;
  meta?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({sample, meta}) => {
  return (
    <div className="flex items-center">
      <div className="w-full relative">
        <SyntaxHighlighter
          language="tsx"
          style={materialDark}
          PreTag="div"
          children={sample}
          className="rounded-xl text-sm shadow-inner"
          codeTagProps={{style: {fontFamily: "Playpen Sans"}}}
        />
      </div>
    </div>
  );
};

export default CodeBlock;
