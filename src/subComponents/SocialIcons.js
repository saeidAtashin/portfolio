import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Linkedin, Github, Instagram, Whatsapp } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 100;

  & > *:not(:last-child) {
    margin: 0.2rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  transition: background-color 1.9s ease;
  /* transition: height 1.9s ease; */

  /* 
  @media (max-width: 800px) {

  height: 60px !important;
} */
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a target="_blank" href="https://github.com/saeidAtashin">
          <Github
            width={30}
            height={30}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a target="_blank" href="https://www.instagram.com/saeidaatashin">
          <Instagram
            width={30}
            height={30}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          target="_blank"
          href="https://www.linkedin.com/in/saeid-kase-atashin-84ba52197/"
        >
          <Linkedin
            width={30}
            height={30}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=9368165125"
        >
          <Whatsapp
            width={30}
            height={30}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "3rem",
        }}
        transition={{
          type: "spring",
          duration: 1.9,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
