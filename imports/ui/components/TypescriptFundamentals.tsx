import React from "react";
import io from "socket.io-client";
import Block from "./Block";
import CodeBlock from "./CodeBlock";
import Icon from "./Icon";
import {typescriptFundamentals} from "../../api/typescript-fundamentals";

const TypescriptFundamentals = () => {
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
      <div className="w-full flex flex-col gap-10 relative">
        <div className="hidden border-l border-white/50 absolute top-6 lg:flex h-full"></div>
        {typescriptFundamentals.map(
          (typescriptFundamental, typescriptFundamentalIndex) => (
            <div
              key={typescriptFundamentalIndex}
              className="relative flex flex-col gap-10 mb-10"
            >
              <header className="bg-neutral-base flex flex-col lg:flex-row lg:justify-between items-start lg:items-end gap-4 py-4 lg:-ml-12 lg:p-4 sticky top-0 z-10">
                <div className="lg:pl-4">
                  <h1 className="text-2xl text-primary cursor-pointer">
                    {typescriptFundamental.title}
                  </h1>
                  <p className="text-white/50 text-sm">
                    {typescriptFundamental.description}
                  </p>
                </div>
              </header>
              <div className="blocks flex flex-col gap-4">
                {typescriptFundamental.blocks.map((block, blockIndex) => (
                  <Block
                    key={blockIndex}
                    title={block.title}
                    subBlocks={block.subBlocks}
                    meta={block.meta}
                  >
                    {block.description ?? renderDescription(block.description)}
                  </Block>
                ))}
                {typescriptFundamental.codeSample && (
                  <CodeBlock sample={typescriptFundamental.codeSample} />
                )}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TypescriptFundamentals;
