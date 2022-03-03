import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const works = [
  {
    name: "UI design",
    title: "Byggr Devs",
    description: "Our Team Portfolio",
    imgurl: images.about01,
    codeLink: "https://www.google.com",
    projectLink: "https://www.byggrdevs.com",
  },
  {
    name: "UI design",
    title: "Camaford - Mobile App",
    description: "For Photographic Community",
    imgurl: images.about04,
    codeLink: "www.google.com",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.byggr.camaford",
  },
  {
    name: "UI design",
    title: "Hoods - Website",
    description: "Landing Website For Hoods",
    imgurl: images.about04,
    codeLink: "www.google.com",
    projectLink: "https://www.joinhoods.com",
  },
  {
    name: "UI design",
    title: "Camaford - Website",
    description: "Landing Website for Camaford",
    imgurl: images.about04,
    codeLink: "www.google.com",
    projectLink: "https://www.camaford.com",
  },
  {
    name: "UI design",
    title: "Ushaarify - Mobile App",
    description: "Chat Application for our friends",
    imgurl: images.about03,
    codeLink: "www.google.com",
    projectLink: "www.google.com",
  },
];

const Work = () => {
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter"></div>

      <motion.div
        // animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgurl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              {/* <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div> */}
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
