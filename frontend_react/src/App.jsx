import React, { createContext, useState } from "react";
import { About, Footer, Header, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { NavigationDots } from "./components";

export const sectionContext = createContext();

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const value = {
    currentSection: currentSection,
    setCurrentSection: setCurrentSection,
  };
  return (
    <div className="app">
      <sectionContext.Provider value={value}>
        <NavigationDots />
        <Navbar />
        <Header />
        <About />
        <Work />
        <Footer />
      </sectionContext.Provider>
    </div>
  );
};

export default App;
