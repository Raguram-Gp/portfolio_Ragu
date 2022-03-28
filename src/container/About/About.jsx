// import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./About.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const abouts = [
  {
    title: "UI/UX",
    description: "I am a good UI/UX Designer",
    imgurl: images.UiDesign,
  },

  {
    title: "Mobile App Development",
    description: "I am a good Mobile App Developer",
    imgurl: images.MobileDev,
  },
  {
    title: "Web Development",
    description: "I am a good Web Developer",
    imgurl: images.WebDev,
  },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know that
        <span> Good design</span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgurl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="about-text">
        <center>
          <h2 className="skill-text">Skills</h2>
        </center>
        <Carousel
          autoPlay={true}
          infinite={true}
          arrows={false}
          responsive={responsive}
          autoPlaySpeed={1000}
          transitionDuration={1000}
          style={{ innerWidth: "100vw" }}
        >
          <div className="card">
            <img src={images.python} alt="html" />
          </div>
          <div className="card">
            <img src={images.javascript} alt="html" />
          </div>
          <div className="card">
            <img src={images.html} alt="html" />
          </div>
          <div className="card">
            <img src={images.css} alt="html" />
          </div>
          <div className="card">
            <img src={images.react} alt="html" />
          </div>

          <div className="card">
            <img src={images.flutter} alt="html" />
          </div>

          <div className="card">
            <img src={images.Dart} alt="html" />
          </div>
          <div className="card">
            <img src={images.firebase} alt="html" />
          </div>
          <div className="card">
            <img src={images.aws} alt="html" />
          </div>
          <div className="card">
            <img src={images.figma} alt="html" />
          </div>
          <div className="card">
            <img src={images.adobexd} alt="html" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default AppWrap(About, "about", 1);
