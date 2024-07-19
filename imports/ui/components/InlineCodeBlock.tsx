import React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {materialDark} from "react-syntax-highlighter/dist/esm/styles/prism";

export interface CodeBlockProps {
  sample: string;
  meta?: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({sample, meta, language}) => {
  return (
    <div className="flex items-center overflow">
      <div className="w-full relative">
        <SyntaxHighlighter
          language={language}
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
