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
  language?: string;
  subBlocks?: SubBlockType[];
  codeSample?: string;
  notes?: string;
}

const Block: React.FC<BlockProps> = ({
  title,
  children,
  subBlocks = [],
  meta,
  language = "javascript",
  codeSample,
}) => {
  const blockIconClasses = classnames(
    "bg-context-info text-neutral-base text-base   p-1 shadow-lg border-t border-white/20",
    {
      "!bg-context-success-base text-context-success-dark":
        meta === "positive" || meta === "solution",
      "!bg-context-failure-base !text-context-failure-dark":
        meta === "negative" || meta === "problem",
      "!bg-context-warning-base !text-context-warning-dark": meta === "notes",
      "!bg-code-javascript !text-black": meta === "signature",
      "!bg-primary": meta === "info",
      "p-1 rounded shadow-lg": meta,
    }
  );

  const blockIcon = (meta: string | undefined) => {
    switch (meta) {
      case "scenarios":
        return "deployed_code";
      case "positive":
        return "check";
      case "negative":
        return "close";
      case "problem":
        return "local_fire_department";
      case "solution":
        return "lightbulb";
      case "notes":
        return "description";
      case "signature":
        return "deployed_code";
      case "tool":
        return "handyman";
      case "component":
        return "widgets";
      case "security":
        return "lock";
      case "performance":
        return "trending_up";
      case "lifecycle":
        return "cycle";
      case "architecture":
        return "family_history";
      case "info":
        return "description";
      default:
        return "radio_button_checked";
    }
  };

  const iconName = blockIcon(meta);

  return (
    <section
      className={`relative  flex flex-col lg:flex-row gap-4 lg:gap-0  items-center transition`}
    >
      <div
        className={`p-4 rounded w-full ${
          meta === "signature"
            ? "bg-code-javascript text-black"
            : "bg-neutral-light"
        }`}
      >
        {meta !== "signature" && (
          <header className="-top-1 relative mb-4 flex items-center gap-4">
            <Icon iconName={iconName} extraClasses={blockIconClasses} />
            <h1 className="text-base">{title}</h1>
          </header>
        )}
        <main
          className={`text-white/50 text-sm flex flex-col ${
            meta !== "signature" && "gap-4"
          }`}
        >
          {children}
          {codeSample && (
            <InlineCodeBlock
              sample={codeSample}
              meta={meta}
              language={language}
            />
          )}
          <div
            className={`grid grid-cols-1 lg:grid-cols-${
              subBlocks?.length! >= 4 ? 4 : subBlocks?.length
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
