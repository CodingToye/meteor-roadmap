import React from "react";
import Icon from "./Icon";
import Tool from "./Tool";
import InlineCodeBlock from "./InlineCodeBlock";
import classnames from "classnames";

export interface SubBlockProps {
  title: string;
  children: React.ReactNode;
  tip: boolean;
  tools: string[];
  meta?: string;
  codeSample?: string;
  notes?: string;
}

const SubBlock: React.FC<SubBlockProps> = ({
  title,
  children,
  tip,
  tools,
  meta,
  codeSample,
  notes,
}) => {
  const subBlockClasses = classnames(
    "p-4 rounded transition flex gap-4 items-center",
    {
      "bg-black/40": !meta,
      "bg-context-info text-white": meta === "scenarios",
      "bg-context-success text-white":
        meta === "positive" || meta === "solution",
      "bg-context-failure text-white": meta === "negative",
      "bg-context-warning text-black italic font-signature": meta === "notes",
      "bg-primary": tip,
    }
  );

  return (
    <div className={subBlockClasses}>
      {meta === "notes" && <Icon iconName="stylus_note" />}
      <div>
        <header className="mb-4 flex justify-between">
          <h1
            className={`${
              meta === "scenarios" ? "text-white" : "text-neutral-base"
            } font-bold text-base`}
          >
            {title}
          </h1>
          {tools && <Icon iconName="construction" />}
        </header>
        <main className="text-xs  flex flex-col gap-4">
          {children}
          {codeSample && <InlineCodeBlock sample={codeSample} />}
          {notes && (
            <div className="bg-context-warning text-black font-signature p-2 rounded text-xs flex gap-4 items-center">
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
