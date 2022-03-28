import React from "react";
import { BsInstagram, BsGithub, BsTelephoneForwardFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { MdEmail } from "react-icons/md";
import "./Footer.scss";

const Footer = ({ setCurrentSection }) => {
  return (
    <div className="footer-class">
      <h2 className="head-text">
        Say <span>hello</span> and
        <span> lets have a Chat</span>
      </h2>

      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.8 }}
        className="app__footer-imgs"
      >
        <img src={images.contact1} alt="profile_bg" />
      </motion.div>
      <motion.div whileInView={{ scale: [0, 1] }} transition={{ duration: 1 }}>
        <div className="footer__row">
          <h4 className="Social-text">
            <a href="mailto:raguram10hb@gmail.com" className="link-text">
              <div className="svg">
                <MdEmail />
              </div>
            </a>
            Email
          </h4>

          <h4 className="Social-text">
            <a href="tel:+91 6374392765" className="link-text">
              <div className="svg">
                <BsTelephoneForwardFill />
              </div>
            </a>
            Call
          </h4>

          <h4 className="Social-text">
            <a
              href="https://www.instagram.com/raguram_hb"
              className="link-text"
            >
              <div className="svg">
                <BsInstagram />
              </div>
            </a>
            Instagram
          </h4>

          <h4 className="Social-text">
            <a href=" https://www.github.com/raguram-gp" className="link-text">
              <div className="svg">
                <BsGithub />
              </div>
            </a>
            Github
          </h4>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Footer, "contact", 3);
