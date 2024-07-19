import React from "react";
import Icon from "./Icon";
import Tool from "./Tool";
import InlineCodeBlock from "./InlineCodeBlock";
import classnames from "classnames";

export interface SubBlockProps {
  title: string;
  children: React.ReactNode;
  tip?: boolean;
  tools?: string[];
  meta?: string;
  codeSample?: string;
  language?: string;
  notes?: string;
}

const SubBlock: React.FC<SubBlockProps> = ({
  title,
  children,
  tip,
  tools,
  meta,
  codeSample,
  language = "javascript",
  notes,
}) => {
  const subBlockClasses = classnames(
    "bg-neutral-base p-4 rounded transition ",
    {
      "!bg-context-info text-neutral-base": meta === "scenarios",
      "!bg-context-success-base text-context-success-dark":
        meta === "positive" || meta === "solution" || tip,
      "!bg-context-failure-base text-context-failure-dark":
        meta === "negative" || meta === "problem",
      "!bg-context-warning-base text-context-warning-dark italic font-signature":
        meta === "notes",
    }
  );
  const subBlockHeaderClasses = classnames(
    "font-bold text-lg text-neutral-lighter",
    {
      "!text-context-success-dark": meta === "positive" || tip,
      "!text-context-failure-dark": meta === "negative",
      "!text-neutral-base": meta === "scenarios",
      "!text-context-warning-dark": meta === "notes",
    }
  );

  return (
    <div className={subBlockClasses}>
      {meta === "notes" && <Icon iconName="stylus_note" />}
      <div className="">
        <header className="mb-4 flex justify-between">
          <h1 className={subBlockHeaderClasses}>{title}</h1>
          {tools && (
            <Icon iconName="handyman" extraClasses="text-context-tool-base" />
          )}
        </header>
        <main className="text-xs flex flex-col gap-4">
          {children}
          {codeSample && (
            <InlineCodeBlock sample={codeSample} language={language} />
          )}
          {notes && (
            <div className="bg-context-warning-base text-context-warning-dark font-signature p-2 rounded text-xs flex gap-4 items-center">
              <Icon iconName="stylus_note" />
              {notes}
            </div>
          )}

          {tools && (
            <div className="flex gap-2">
              {tools.map((tool, toolIndex) => (
                <Tool key={toolIndex} tool={tool} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SubBlock;
