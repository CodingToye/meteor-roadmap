import React from "react";
import classnames from "classnames";
import Icon from "./Icon";
import {SubBlockType} from "../types";
import SubBlock from "./SubBlock";
import InlineCodeBlock from "./InlineCodeBlock";

export interface BlockProps {
  title: string;
  children: React.ReactNode;
  meta: string | undefined;
  subBlocks?: SubBlockType[];
  codeSample?: string;
  notes?: string;
}

const Block: React.FC<BlockProps> = ({
  title,
  children,
  subBlocks,
  meta,
  codeSample,
}) => {
  const blockIconClasses = classnames(
    "text-base relative -left-9 p-1 shadow-lg border-t border-white/20",
    {
      "bg-context-info": meta === "scenarios",
      "bg-context-success": meta === "positive" || meta === "solution",
      "bg-context-failure": meta === "negative",
      "bg-context-disaster": meta === "problem",
      "bg-context-warning text-neutral-base": meta === "notes",
      "bg-code-javascript text-black": meta === "signature",
      "p-1 rounded shadow-lg": meta,
      // "-left-9 p-1": !meta,
    }
  );

  const blockIcon = (meta: string | undefined) => {
    switch (meta) {
      case (meta = "scenarios"):
        return "deployed_code";
      case (meta = "positive"):
        return "check";
      case (meta = "negative"):
        return "close";
      case (meta = "problem"):
        return "local_fire_department";
      case (meta = "solution"):
        return "lightbulb";
      case (meta = "notes"):
        return "description";
      case (meta = "signature"):
        return "deployed_code";
      default:
        return "radio_button_checked";
    }
  };

  const iconName = blockIcon(meta);

  return (
    <section className={`relative pl-6 flex items-center transition`}>
      <Icon iconName={iconName} extraClasses={blockIconClasses} />
      <div
        className={`p-4 rounded w-full ${
          meta === "signature"
            ? "bg-code-javascript text-black"
            : "bg-neutral-light"
        }`}
      >
        {meta !== "signature" && (
          <header className="-top-1 relative mb-4">
            <h1 className="text-base">{title}</h1>
          </header>
        )}
        <main
          className={`text-white/50 text-sm flex flex-col ${
            meta !== "signature" && "gap-4"
          }`}
        >
          {children}
          {codeSample && <InlineCodeBlock sample={codeSample} meta={meta} />}
          <div
            className={`grid grid-cols-${
              meta === "scenarios" || meta === "solution" ? 2 : 4
            } gap-4`}
          >
            {subBlocks?.map((subBlock, subBlockIndex) => (
              <SubBlock
                key={subBlockIndex}
                title={subBlock.title}
                tip={subBlock.tip}
                tools={subBlock?.tools?.map((tool) => tool.tool)}
                meta={meta}
                codeSample={subBlock?.codeSample}
                notes={subBlock?.notes}
              >
                {subBlock.description}
              </SubBlock>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Block;
