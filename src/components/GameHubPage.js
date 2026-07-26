import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponents";
import SocilIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import BigTitle from "../subComponents/BigTitle";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import { Games } from "../data/GamesData";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
`;

const Main = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  flex-direction: column;
`;

const OverlayBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-bottom: 1px solid ${(props) => props.theme.text};
`;

const OverlayTitle = styled.h2`
  margin: 0;
  font-size: calc(0.9em + 0.4vw);
  font-family: "Source Sans Pro", "Vazirmatn", sans-serif;
`;

const OverlayActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const OverlayLink = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-size: calc(0.8em + 0.3vw);
  font-weight: 600;
  border: 1px solid ${(props) => props.theme.text};
  padding: 0.35rem 0.75rem;
  border-radius: 0 0 0 16px;

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const CloseButton = styled.button`
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  border: none;
  cursor: pointer;
  font-size: calc(0.8em + 0.3vw);
  font-weight: 700;
  padding: 0.35rem 0.9rem;
  border-radius: 0 0 0 16px;
  font-family: inherit;
`;

const Frame = styled.iframe`
  flex: 1;
  width: 100%;
  border: none;
  background: #000;
`;

const GameHubPage = () => {
  const yingyang = useRef(null);
  const [activeGame, setActiveGame] = useState(null);

  useEffect(() => {
    const rotate = () => {
      if (yingyang.current) {
        const scrollY = window.scrollY || window.pageYOffset;
        yingyang.current.style.transform = `rotate(${scrollY}deg)`;
      }
    };

    window.addEventListener("scroll", rotate, { passive: true });

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  useEffect(() => {
    if (!activeGame) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeGame]);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocilIcons theme="dark" />
        <PowerButton />
        <Main variants={container} initial="hidden" animate="show">
          {Games.map((game) => (
            <Card
              key={game.id}
              data={game}
              variant="gameHub"
              onPlay={setActiveGame}
            />
          ))}
        </Main>
        <Rotate ref={yingyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
      </Box>
      <BigTitle text="GAME HUB" top="70%" left="10%" />
      <BigTitle text="GAME HUB" top="30%" right="5%" />

      {activeGame ? (
        <Overlay>
          <OverlayBar>
            <OverlayTitle>{activeGame.name}</OverlayTitle>
            <OverlayActions>
              <OverlayLink
                href={activeGame.demo}
                target="_blank"
                rel="noreferrer"
              >
                Open site
              </OverlayLink>
              <CloseButton type="button" onClick={() => setActiveGame(null)}>
                Close
              </CloseButton>
            </OverlayActions>
          </OverlayBar>
          <Frame
            title={activeGame.name}
            src={activeGame.demo}
            allow="fullscreen; gamepad; autoplay"
            allowFullScreen
          />
        </Overlay>
      ) : null}
    </ThemeProvider>
  );
};

export default GameHubPage;
