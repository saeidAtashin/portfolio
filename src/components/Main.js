import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoComponents from "../subComponents/LogoComponents";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";

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
  
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  z-index: 1;
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponents />
        <SocialIcons />
        <Contact
          target="_blank"
          style={{ color: "black", textDecoration: "none" }}
          href="mailto:saeid.kase.atashin@gmail.com"
          rel="noreferrer"
        >
          Message Me
        </Contact>
        <BLOG to="/blog" rel="noreferrer">
          Blog
          
        </BLOG>
      </Container>
    </MainContainer>
  );
};

export default Main;
