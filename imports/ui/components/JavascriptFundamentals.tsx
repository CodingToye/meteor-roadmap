import React, {useState, useEffect} from "react";
import Block from "./Block";
import CodeBlock from "./CodeBlock";
import Icon from "./Icon";
import {javascriptFundamentals} from "../../api/javascript-fundamentals";

const JavascriptFundamentals = () => {
  const [hiddenSections, setHiddenSections] = useState<boolean[]>([]);

  // useEffect(() => {
  //   const sections = document.querySelectorAll(".section");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("lg:opacity-100");
  //           entry.target.classList.remove("lg:opacity-10");
  //         } else {
  //           entry.target.classList.remove("lg:opacity-100");
  //           entry.target.classList.add("lg:opacity-10");
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.32,
  //     }
  //   );

  //   sections.forEach((section) => {
  //     observer.observe(section);
  //   });

  //   return () => {
  //     sections.forEach((section) => {
  //       observer.unobserve(section);
  //     });
  //   };
  // }, []);

  const handleUnderstand = (index: number) => {
    setHiddenSections((prevHiddenSections) => {
      const newHiddenSections = prevHiddenSections.map((hidden, idx) =>
        idx === index ? !hidden : hidden
      );
      localStorage.setItem("hiddenSections", JSON.stringify(newHiddenSections));
      return newHiddenSections;
    });
  };

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
        <h1 className="text-2xl text-primary">JavaScript Fundamentals</h1>
        <div className="text-white/50 text-sm">
          <p className="mb-4">
            JavaScript Fundamentals encompasses the core concepts and features
            of JavaScript, a leading programming language in web development.
          </p>
          <p>
            This section addresses key topics such as variables, functions,
            control structures, and other essential elements that form the
            foundation of JavaScript. Understanding these fundamentals is
            crucial for writing efficient and effective JavaScript code and is
            beneficial for both novice and experienced developers.
          </p>
        </div>
      </header>
      <div className="w-full flex flex-col gap-10 relative">
        <div className="hidden border-l border-white/20 absolute top-6 lg:flex h-full pipe"></div>
        {javascriptFundamentals.map(
          (javascriptFundamental, javascriptFundamentalIndex) => (
            <div
              key={javascriptFundamentalIndex}
              className="relative flex flex-col gap-10 mb-10"
            >
              <header className="bg-neutral-base flex flex-col lg:flex-row lg:justify-between items-start lg:items-end gap-4 py-4 lg:-ml-12 lg:p-4 sticky top-0 z-10">
                <div className="lg:pl-4">
                  <h1 className="text-2xl text-primary cursor-pointer">
                    {javascriptFundamental.title}
                  </h1>
                  <p className="text-white/50 text-sm">
                    {javascriptFundamental.description}
                  </p>
                </div>
                <button
                  className={`${
                    hiddenSections[javascriptFundamentalIndex]
                      ? "bg-context-success"
                      : "bg-neutral-light"
                  } border-t border-white/20 px-2 py-1 flex items-center gap-4 rounded text-sm transition`}
                  onClick={() => handleUnderstand(javascriptFundamentalIndex)}
                >
                  {hiddenSections[javascriptFundamentalIndex]
                    ? "Understood"
                    : "Understand"}
                  <Icon
                    iconName={`${
                      hiddenSections[javascriptFundamentalIndex]
                        ? "check"
                        : "question_mark"
                    }`}
                    extraClasses="text-sm"
                  />
                </button>
              </header>
              <div
                className={`blocks flex flex-col gap-8 lg:gap-4  transition ${
                  hiddenSections[javascriptFundamentalIndex]
                    ? "hidden"
                    : "section"
                }`}
              >
                {javascriptFundamental.blocks.map((block, blockIndex) => (
                  <Block
                    key={blockIndex}
                    title={block.title}
                    subBlocks={block.subBlocks}
                    meta={block.meta}
                    codeSample={block.codeSample}
                  >
                    {block.description ?? renderDescription(block.description)}
                  </Block>
                ))}
                {javascriptFundamental.codeSample && (
                  <CodeBlock sample={javascriptFundamental?.codeSample} />
                )}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default JavascriptFundamentals;
