import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import CareerGoals from "./components/CareerGoals";
import Fundamentals from "./components/Fundamentals";
import JavascriptFundamentals from "./components/JavascriptFundamentals";
import ReactFundamentals from "./components/ReactFundamentals";
import TypescriptFundamentals from "./components/TypescriptFundamentals";

export const App = () => {
  const navLinks = [
    {to: "/", label: "Career Goals", end: true},
    {to: "/fundamentals", label: "Fundamentals of Frontend Development"},
    {to: "/javascript-fundamentals", label: "JavaScript Fundamentals"},
    {to: "/react-fundamentals", label: "React Fundamentals"},
    {to: "/typescript-fundamentals", label: "TypeScript Fundamentals"},
  ];

  return (
    <div className="p-4 flex flex-col gap-8">
      <header className="flex flex-col items-center mb-12">
        <h1 className="text-xl">Roadmap</h1>
        <p className="text-white/50">
          A roadmap towards Senior Frontend Developer
        </p>
      </header>
      <Router>
        <nav className="flex gap-4">
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
        <Routes>
          <Route path="/" element={<CareerGoals />} />
          <Route path="/fundamentals" element={<Fundamentals />} />
          <Route
            path="/javascript-fundamentals"
            element={<JavascriptFundamentals />}
          />
          <Route path="/react-fundamentals" element={<ReactFundamentals />} />
          <Route
            path="/typescript-fundamentals"
            element={<TypescriptFundamentals />}
          />
        </Routes>
      </Router>
    </div>
  );
};
