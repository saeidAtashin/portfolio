import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponents";
import SocilIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  width: 95%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5rem;
  gap: 2rem;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  z-index: 3;
  line-height: 1.5;
  width: 23%;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;

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
        <BigTitle text="MY SKILLS" top="80%" right="30%" />

        <Main>
          <Title>
            <Design width={40} height={40} /> HTML & CSS:
          </Title>
          <Description>
            - Semantic HTML5, Accessibility (ARIA)
            <br />
            - CSS3, Flexbox, Grid, Animations & Transitions
            <br />
            - Responsive & Mobile-First Design
            <br />
            - CSS Modules, Styled Components, JSS, UI Kits
            <br />- TailwindCSS, Material-UI, Ant Design, React Bootstrap
          </Description>
        </Main>

        <Main>
          <Title>
            <Design width={40} height={40} /> JavaScript:
          </Title>
          <Description>
            - ES6+ (let/const, arrow functions, template literals,
            destructuring)
            <br />
            - DOM Manipulation, Event Handling
            <br />
            - Functional Programming, Array & Object Methods
            <br />
            - Promises, Async/Await, Fetch / Axios
            <br />- Error Handling, Debugging & Dev Tools
          </Description>
        </Main>

        <Main>
          <Title>
            <Design width={40} height={40} /> React & Libraries:
          </Title>
          <Description>
            - JSX, Functional Components, Class Components
            <br />
            - Lifecycle Methods, Hooks (useState, useEffect, useReducer,
            useMemo, useCallback, useRef)
            <br />
            - Context API, Redux, Redux Toolkit, Zustand (optional)
            <br />
            - React Router, Higher-Order Components (HOC),
            Container-Presentational Pattern
            <br />
            - Custom Hooks, Form Validations (Formik, Yup, React Hook Form)
            <br />
            - React Templates (JS & TS), Page Animations, Framer Motion
            <br />- Socket.IO / WebSockets, REST & GraphQL Integration
          </Description>
        </Main>

        <Main>
          <Title>
            <Design width={40} height={40} /> Next.js:
          </Title>
          <Description>
            - Server-Side Rendering (SSR), Static Site Generation (SSG),
            Incremental Static Regeneration (ISR)
            <br />
            - API Routes, Middleware, Dynamic Routing
            <br />
            - Environment Variables, Next.js Image Optimization
            <br />- Authentication & Authorization (JWT, NextAuth)
          </Description>
        </Main>

        <Main>
          <Title>
            <Design width={40} height={40} /> TypeScript:
          </Title>
          <Description>
            - Strong Typing for React & Node.js
            <br />
            - Interfaces & Types, Generics
            <br />
            - Type-safe Props, State & Context
            <br />- Integration with Redux Toolkit, Formik & React Hook Form
          </Description>
        </Main>

        <Main>
          <Title>
            <Design width={40} height={40} /> React Native:
          </Title>
          <Description>
            - Core Components (View, Text, ScrollView, FlatList, etc.)
            <br />
            - Navigation (React Navigation)
            <br />
            - State Management (Redux, Context API)
            <br />
            - Styling (StyleSheet, Styled Components, TailwindCSS with
            Nativewind)
            <br />
            - API Integration (REST, GraphQL), AsyncStorage
            <br />
            - Animations (Reanimated, Lottie)
            <br />- Debugging & Performance Optimization
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
