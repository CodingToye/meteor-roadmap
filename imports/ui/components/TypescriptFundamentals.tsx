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
    <section className="flex flex-col items-center">
      <div className="w-full flex flex-col gap-10 relative">
        <div className="border-l border-white/50 absolute top-6 flex h-full"></div>
        {typescriptFundamentals.map(
          (typescriptFundamental, typescriptFundamentalIndex) => (
            <div
              key={typescriptFundamentalIndex}
              className="relative flex flex-col gap-10 mb-10"
            >
              <header className="flex items-center">
                <Icon
                  iconName="radio_button_checked"
                  extraClasses="text-primary relative -left-3"
                />
                <div className="pl-4">
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
