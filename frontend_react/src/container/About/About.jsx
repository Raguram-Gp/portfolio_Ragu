// import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { images } from "../../constants";
// import { urlFor, client } from "../../client";

import "./About.scss";
const abouts = [
  {
    title: "Web Development",
    description: "I am a good Web Developer",
    imgurl: images.about01,
  },
  {
    title: "UI/UX",
    description: "I am a good UI/UX Developer",
    imgurl: images.about04,
  },
  {
    title: "Mobile App Development",
    description: "I am a good Mobile App Developer",
    imgurl: images.about03,
  },
];

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type =="abouts"]';
  //   client.fetch(query).then(() => setAbouts(data));
  // }, []);
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
    </>
  );
};

export default About;
