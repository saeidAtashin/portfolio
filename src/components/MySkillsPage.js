import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, DarkTheme } from "./Themes";
import { Design } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponents";
import SocilIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

const Box = styled.div`
  /* background-color: ${(props) => props.theme.text}; */
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.9em + 0.5vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};

  font-size: calc(0.6em + 0.5vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocilIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        {/* <ParticleComponent theme="dark" /> */}
        <Main>
          <Title>
            <Design width={40} height={40} /> React & Libraries:
          </Title>
          <Description>
            - JSX, Class-Based Component, Functional Component, Lifecycle,
            Hooks, Context API, Form Validations, HOC, Container-Presentational,
            Component Architecture, Prop Types
            <br />
            - Material-UI, UIKits, Styled Component, CSS Modules, Page
            Animations
            <br />
            - Redux, React Router
            <br />- Environments Variables, React Dev Tools
          </Description>
        </Main>
        <Main>
          <Title>
            <Design width={40} height={40} /> JavaScript , HTML & CSS:
          </Title>
          <Description>
            - ES6, Async Programming, OOP in JS - Pure JS SPA, Templating, DOM
            Manipulation
            {/* <br /> */}- HTML5, CSS3, RWD (Responsive Web Design), SVG, LESS,
            SASS
            {/* <br /> */}- Form Validation
          </Description>
          <strong style={{ fontSize: "1.1rem" }}>SIDE SKILLS</strong>
          <Description>
            -AJAX: REST API, HTTP -JQUERY, BOOTSTRAP 4/5 NPM, CRA, Express
            <br />
            -git,gitflow
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
