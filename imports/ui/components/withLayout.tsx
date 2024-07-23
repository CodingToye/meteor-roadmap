import React from "react";
import AsideNavigation from "./AsideNavigation";
import {Section} from "../types";

const withLayout = (
  ContentComponent: React.FC<{
    sections: Section[];
    sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  }>,
  apiData: Section[]
) => {
  return ({
    title,
    description,
    sections,
  }: {
    title: string;
    description: string;
    sections: Section[];
  }) => {
    const sectionRefs = React.useRef<(HTMLDivElement | null)[]>([]);
    return (
      <section className="flex flex-col w-full">
        {/* <header className="mb-12 max-w-5xl lg:-ml-8 lg:p-4">
          <h1 className="text-2xl text-primary">{title}</h1>
          <div className="text-white/50 text-sm">
            <p className="mb-4">{description}</p>
          </div>
        </header> */}
        <div className="w-full grid grid-cols-main gap-10 relative">
          <AsideNavigation
            data={apiData}
            sectionRefs={sectionRefs}
            title={title}
          />
          <ContentComponent sections={sections} sectionRefs={sectionRefs} />
        </div>
      </section>
    );
  };
};

export default withLayout;
