import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import "./App.css";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./data/GlobalStyle";

import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import Work from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import { AnimatePresence, motion } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

const TransitionWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
`;

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <TransitionWrapper>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
            <Route
              exact
              path="/"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Main />
                </motion.div>
              }
            />
            <Route
              exact
              path="/about"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ width: "100%", height: "100%" }}
                >
                  <AboutPage />
                </motion.div>
              }
            />
            <Route
              exact
              path="/blog"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ width: "100%", height: "100%" }}
                >
                  <BlogPage />
                </motion.div>
              }
            />
            <Route
              exact
              path="/work"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Work />
                </motion.div>
              }
            />
            <Route
              exact
              path="/skills"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ width: "100%", height: "100%" }}
                >
                  <MySkillsPage />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
        </TransitionWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
