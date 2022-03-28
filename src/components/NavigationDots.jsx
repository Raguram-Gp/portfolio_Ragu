import React from "react";
import { useContext } from "react";
import { sectionContext } from "../App";
const NavigationDots = () => {
  const { currentSection, setCurrentSection } = useContext(sectionContext);
  return (
    <div className="app__navigation">
      {["home", "about", "work", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={index}
          className="app__navigation-dot"
          style={{ backgroundColor: currentSection === index ? "#313BAC" : "" }}
          onClick={(e) => {
            setCurrentSection(index);
          }}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
