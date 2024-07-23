import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Fundamentals from "./components/Fundamentals";
import JavascriptFundamentals from "./components/JavascriptFundamentals";
import ReactFundamentals from "./components/ReactFundamentals";
import TypescriptFundamentals from "./components/TypescriptFundamentals";
import NodeFundamentals from "./components/NodeFundamentals";
import NextJsFundamentals from "./components/NextJsFundamentals";
import OtherLibraries from "./components/OtherLibraries";
import CssModules from "./components/CssModules";

export const App = () => {
  const navLinks = [
    {to: "/", label: "Fundamentals of Frontend Development"},
    {to: "/javascript-fundamentals", label: "JavaScript Fundamentals"},
    {to: "/react-fundamentals", label: "React Fundamentals"},
    {to: "/typescript-fundamentals", label: "TypeScript Fundamentals"},
    {to: "/node-fundamentals", label: "Node Fundamentals"},
    {to: "/nextjs-fundamentals", label: "Next JS Fundamentals"},
    {to: "/other-libraries", label: "Other Libraries"},
    {to: "/css-modules", label: "CSS Modules"},
  ];

  return (
    <div className="p-4 flex flex-col items-center gap-8">
      <header className="flex flex-col items-center mb-4">
        <h1 className="text-2xl">Roadmap</h1>
        <p className="text-white/50 text-sm">
          A roadmap towards Senior Fullstack Frontend Engineer
        </p>
      </header>

      <Router>
        <div className="overflow-x-auto w-full whitespace-nowrap">
          <nav className="flex lg:justify-center gap-4 mb-8 text-sm">
            {navLinks.map((link, index) => {
              return (
                <NavLink
                  key={index}
                  to={link.to}
                  className={({isActive}) =>
                    `transition hover:text-white ${
                      isActive
                        ? "text-primary hover:text-primary"
                        : "text-white/50"
                    }`
                  }
                  end={link.end}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Fundamentals />} />
          <Route
            path="/javascript-fundamentals"
            element={<JavascriptFundamentals />}
          />
          <Route path="/react-fundamentals" element={<ReactFundamentals />} />
          <Route
            path="/typescript-fundamentals"
            element={<TypescriptFundamentals />}
          />
          <Route path="/node-fundamentals" element={<NodeFundamentals />} />
          <Route path="/nextjs-fundamentals" element={<NextJsFundamentals />} />
          <Route path="/other-libraries" element={<OtherLibraries />} />
          <Route path="/css-modules" element={<CssModules />} />
        </Routes>
      </Router>
    </div>
  );
};
