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
    {to: "/", label: "Fundamentals of Frontend Development", end: true},
    {to: "/javascript-fundamentals", label: "JavaScript Fundamentals"},
    {to: "/react-fundamentals", label: "React Fundamentals"},
    {to: "/typescript-fundamentals", label: "TypeScript Fundamentals"},
    {to: "/career-goals", label: "Career Goals"},
  ];

  return (
    <div className="p-4 flex flex-col items-center gap-8">
      <header className="flex flex-col items-center mb-4">
        <h1 className="text-2xl">Roadmap</h1>
        <p className="text-white/50 text-sm">
          A roadmap towards Senior Frontend Developer
        </p>
      </header>

      <Router>
        <div className="overflow-x-auto w-full whitespace-nowrap">
          <nav className="flex justify-center gap-4 mb-8 text-sm">
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
          <Route path="/career-goals" element={<CareerGoals />} />
        </Routes>
      </Router>
    </div>
  );
};
