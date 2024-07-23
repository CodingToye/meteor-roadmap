import React from "react";
import Block from "./Block";
import CodeBlock from "./CodeBlock";
import {
  Section as SectionType,
  Block as BlockType,
  SubBlock as SubBlockType,
} from "../types";

interface ContentProps {
  sections: SectionType[];
  sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const Content: React.FC<ContentProps> = ({sections, sectionRefs}) => {
  console.log("Content Component Props", sections);

  // Render description
  const renderDescription = (desc: string) => {
    return desc.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
        <br />
      </React.Fragment>
    ));
  };

  const renderSubBlocks = (subBlocks: SubBlockType[]) => {
    return subBlocks.map((subBlock, index) => (
      <div key={index} className="sub-block">
        <h3 className="text-lg font-semibold">{subBlock.title}</h3>
        {subBlock.description && renderDescription(subBlock.description)}
        {subBlock.codeSample && <CodeBlock sample={subBlock.codeSample} />}
        {subBlock.notes && <p>{subBlock.notes}</p>}
      </div>
    ));
  };

  // Function to render blocks
  const renderBlocks = (blocks: SectionType["blocks"]) => {
    return blocks.map((block, index) => {
      return (
        <Block
          key={index}
          title={block.title}
          subBlocks={block.subBlocks}
          meta={block.meta}
          codeSample={block.codeSample}
        >
          {block.description}
        </Block>
      );
    });
  };

  return (
    <div className="flex flex-col gap-10 relative">
      {sections.map((section, index) => (
        <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
          <header className="bg-neutral-base flex flex-col lg:flex-row lg:justify-between items-start lg:items-end gap-4 py-4 lg:-ml-6 lg:p-4 sticky top-0 z-10">
            <div className="lg:pl-4">
              <h1 className="text-2xl text-primary cursor-pointer">
                {section.title}
              </h1>
              <p className="text-white/50 text-sm">{section.description}</p>
            </div>
          </header>
          <div className="blocks flex flex-col gap-8 lg:gap-4 transition">
            {section.blocks.length > 0 ? (
              renderBlocks(section.blocks)
            ) : (
              <p>No data available...</p>
            )}

            {/* {codeSample && <CodeBlock sample={codeSample} />} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
