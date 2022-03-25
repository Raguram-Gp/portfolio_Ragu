import React, { useState, useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import { sectionContext } from "../../App";

import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { currentSection, setCurrentSection } = useContext(sectionContext);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.Raguram} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "contact"].map((item, index) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div
              style={{
                backgroundColor: currentSection === index ? "#313BAC" : "",
              }}
            />
            <a
              href={`#${item}`}
              onClick={(e) => {
                setCurrentSection(index);
              }}
              style={{
                color: currentSection === index ? "#313BAC" : "",
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
