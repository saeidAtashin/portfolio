import React , { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponents from "../subComponents/LogoComponents";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";

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
    font-wieght: 500;
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
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: 2.8rem;
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
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
  color: ${(props) => props.theme.text};

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
  top:  ${props => props.click ? '85%' : '50%'};
  left: ${props => props.click ? '92%' : '50%'};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :first-child {
    animation: ${rotates} infinite 1.5s linear;
  }
  & > :last-child {
    padding-top: 1rem;
  }
`;

const Main = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponents />
        <SocialIcons />

        <Center click={click} >
          <YinYang onClick={() => handleClick()} width={150} height={150} fill="currentColor" />
          <span>click here</span>
        </Center>

        <Contact
          target="_blank"
          style={{ color: "black", textDecoration: "none" }}
          href="mailto:saeid.kase.atashin@gmail.com"
          rel="noreferrer"
        >
          Message Me...
        </Contact>
        <BLOG to="/blog" rel="noreferrer">
          Blog
        </BLOG>
        <WORK to="/work" rel="noreferrer">
          Work
        </WORK>
        <BottoBar>
          <ABOUT to="/about" rel="noreferrer">
            About Me
          </ABOUT>
          <SKILLS to="/skills" rel="noreferrer">
            My Skills
          </SKILLS>
        </BottoBar>
      </Container>
    </MainContainer>
  );
};

export default Main;
