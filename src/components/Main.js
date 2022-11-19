import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponents from "../subComponents/LogoComponents";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};

  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1;
  font-size: 22px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: 2.8rem;
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: color 1.9s ease;
`;

const BottoBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;
const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  transition: color 0.9s ease;

  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};

  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
`;

const rotates = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "calc(-2.7rem + 95%)" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1.5s ease-in-out;

  & > :first-child {
    animation: ${rotates} infinite 1.5s linear;
  }
  & > :last-child {
    padding-top: 1rem;
    font-size: ${(props) => (props.click ? "0" : "16px")};
    opacity: ${(props) => (props.click ? "0" : "1")};
    transition: all 1.5s ease-in-out;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;

  z-index: 1;
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />

      <Container>
        <PowerButton />
        <LogoComponents theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center click={click} onClick={() => handleClick()}>
          <YinYang
            width={click ? "120" : "200"}
            height={click ? "120" : "200"}
            fill="currentColor"
            style={{ transition: "all 1.5s ease-in-out" }}
          />
          <span>click here</span>
        </Center>

        <Contact
          target="_blank"
          style={{ color: "black", textDecoration: "none" }}
          href="mailto:saeid.kase.atashin@gmail.com"
          rel="noreferrer"
        >
          <motion.h2 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            Mail Me...
          </motion.h2>
        </Contact>
        <BLOG to="/blog" rel="noreferrer">
          <motion.h2 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            Blog
          </motion.h2>
        </BLOG>
        <WORK click={click} to="/work" rel="noreferrer">
          <motion.h2 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            Work
          </motion.h2>
        </WORK>
        <BottoBar>
          <ABOUT click={click} to="/about" rel="noreferrer">
          <motion.h2 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            About Me
          </motion.h2>
          </ABOUT>
          <SKILLS to="/skills" rel="noreferrer">
          <motion.h2 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            My Skills
          </motion.h2>
          </SKILLS>
        </BottoBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
