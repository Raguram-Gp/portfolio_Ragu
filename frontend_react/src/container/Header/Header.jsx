import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";

import "./Header.scss";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInout",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 3 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👨‍💻</span>
            <div style={{ marginleft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Raguram</h1>
            </div>
          </div>
          <div className="tag-cmp app-flex">
            <p className="p-text">web Developer</p>
            <p className="p-text">Mobile App Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 3, delayChildren: 0.8 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />;
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="app__header-img"
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        ></motion.img>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
