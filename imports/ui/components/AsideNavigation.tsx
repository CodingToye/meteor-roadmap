import React, {useState, useEffect, useRef} from "react";
import {Section as SectionType} from "../types";

interface AsideNavigationProps {
  data: SectionType[];
  sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  title: string;
}

const AsideNavigation: React.FC<AsideNavigationProps> = ({
  data,
  sectionRefs,
  title,
}) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number | null>(
    null
  );
  const scrollTimeout = useRef<number | null>(null);

  const handleScrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({behavior: "smooth"});
    }
  };

  useEffect(() => {
    const handleScrollEnd = () => {
      if (scrollTimeout.current !== null) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = window.setTimeout(() => {
        const index = sectionRefs.current.findIndex(
          (section) =>
            section?.getBoundingClientRect().top! >= 0 &&
            section?.getBoundingClientRect().top! < window.innerHeight / 2
        );
        setActiveSectionIndex(index);
      }, 100);
    };

    window.addEventListener("scroll", handleScrollEnd);

    return () => {
      if (scrollTimeout.current !== null) {
        clearTimeout(scrollTimeout.current);
      }
      window.removeEventListener("scroll", handleScrollEnd);
    };
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            setActiveSectionIndex(index);
          }
        });
      },
      {threshold: 0.75}
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <aside className="bg-neutral-light rounded-lg sticky top-16 z-10">
        <header className="p-4 bg-black/20 border-b border-white/10">
          <h1>{title}</h1>
        </header>
        <ul className="flex flex-col p-4 ">
          {data.map((item: any, index: number) => (
            <li
              key={index}
              className={`text-xs mb-4 cursor-pointer transition ${
                activeSectionIndex === index ? "text-primary" : ""
              }`}
              onClick={() => handleScrollToSection(index)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default AsideNavigation;
