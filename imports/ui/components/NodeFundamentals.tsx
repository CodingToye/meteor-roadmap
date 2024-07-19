import React, {useState} from "react";
import Block from "./Block";
import CodeBlock from "./CodeBlock";
import {nodeFundamentals} from "../../api/node-fundamentals";

const NodeFundamentals = () => {
  const [hiddenSections, setHiddenSections] = useState<boolean[]>([]);
  const renderDescription = (description: string | undefined) => {
    return description?.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
        <br />
      </React.Fragment>
    ));
  };
  return (
    <section className="flex flex-col w-full">
      <header className="mb-12 max-w-5xl lg:-ml-8 lg:p-4">
        <h1 className="text-2xl text-primary">Node Fundamentals</h1>
        <div className="text-white/50 text-sm">
          <p className="mb-4">
            Node.js is a powerful, open-source, server-side runtime environment
            built on Chrome's V8 JavaScript engine. It enables developers to
            build scalable and efficient network applications using JavaScript.
          </p>
        </div>
      </header>
      <div className="w-full flex flex-col gap-10 relative">
        <div className="hidden border-l border-white/20 absolute top-6 lg:flex h-full pipe"></div>
        {nodeFundamentals.map((nodeFundamental, nodeFundamentalIndex) => (
          <div
            key={nodeFundamentalIndex}
            className="relative flex flex-col gap-10 mb-10"
          >
            <header className="bg-neutral-base flex flex-col lg:flex-row lg:justify-between items-start lg:items-end gap-4 py-4 lg:-ml-12 lg:p-4 sticky top-0 z-10">
              <div className="lg:pl-4">
                <h1 className="text-2xl text-primary cursor-pointer">
                  {nodeFundamental.title}
                </h1>
                <p className="text-white/50 text-sm">
                  {nodeFundamental.description}
                </p>
              </div>
            </header>
            <div
              className={`blocks flex flex-col gap-8 lg:gap-4  transition ${
                hiddenSections[nodeFundamentalIndex] ? "hidden" : "section"
              }`}
            >
              {nodeFundamental.blocks.map((block, blockIndex) => (
                <Block
                  key={blockIndex}
                  title={block.title}
                  subBlocks={block.subBlocks}
                  meta={block.meta || nodeFundamental.meta}
                  language={block?.language || nodeFundamental.language}
                  codeSample={block.codeSample}
                >
                  {block.description ?? renderDescription(block.description)}
                </Block>
              ))}
              {nodeFundamental.codeSample && (
                <CodeBlock sample={nodeFundamental?.codeSample} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NodeFundamentals;
