import React, {useState, useEffect} from "react";
import Block from "./Block";
import Icon from "./Icon";
import {fundamentals} from "../../api/fundamentals";

const Fundamentals = () => {
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
    <section className="flex flex-col w-full items-center">
      <div className="w-full flex flex-col gap-10 relative">
        <div className="hidden border-l border-white/50 absolute top-6 lg:flex h-full"></div>
        {fundamentals.map((fundamental, fundamentalIndex) => (
          <div
            key={fundamentalIndex}
            className="relative flex flex-col gap-10 mb-10"
          >
            <header className="bg-neutral-base flex flex-col lg:flex-row lg:justify-between items-start lg:items-end gap-4 py-4 lg:-ml-12 lg:p-4 sticky top-0 z-10">
              <div className="lg:pl-4">
                <div className="pl-4">
                  <h1 className="text-2xl text-primary cursor-pointer">
                    {fundamental.title}
                  </h1>
                  <p className="text-white/50 text-sm">
                    {fundamental.description}
                  </p>
                </div>
              </div>
            </header>
            <div className="blocks flex flex-col gap-8 lg:gap-4 transition">
              {fundamental.blocks.map((block, blockIndex) => (
                <Block
                  key={blockIndex}
                  title={block.title}
                  subBlocks={block.subBlocks}
                  meta={block.meta}
                >
                  {renderDescription(block.description)}
                </Block>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fundamentals;
