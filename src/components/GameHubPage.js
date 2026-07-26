import React, { useEffect, useState } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { GameHubTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponents";
import SocilIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import BigTitle from "../subComponents/BigTitle";
import Card from "../subComponents/Card";
import { Flash } from "./AllSvgs";
import { Games } from "../data/GamesData";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  background-image: radial-gradient(
      ellipse 80% 55% at 15% 10%,
      rgba(${(props) => props.theme.accentRgba}, 0.22),
      transparent 55%
    ),
    radial-gradient(
      ellipse 70% 50% at 90% 80%,
      rgba(${(props) => props.theme.accentRgba}, 0.12),
      transparent 50%
    );
  min-height: 100vh;
  position: relative;
  padding: 6rem 1.5rem 120px;
`;

const Main = styled(motion.ul)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-items: center;
  align-items: stretch;
  color: ${(props) => props.theme.text};
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 56rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.5rem;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.85;
    filter: drop-shadow(0 0 6px rgba(46, 230, 197, 0.35));
  }
  50% {
    transform: scale(1.12);
    opacity: 1;
    filter: drop-shadow(0 0 14px rgba(46, 230, 197, 0.7));
  }
`;

const FlashAccent = styled.span`
  display: block;
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  width: 64px;
  height: 64px;
  z-index: 1;
  animation: ${pulse} 1.8s ease-in-out infinite;
  color: ${(props) => props.theme.accent};
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      duration: 0.5,
    },
  },
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(11, 18, 24, 0.96);
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
  border-bottom: 1px solid ${(props) => props.theme.accent};
`;

const OverlayTitle = styled.h2`
  margin: 0;
  font-size: calc(0.9em + 0.4vw);
  font-family: "Source Sans Pro", "Vazirmatn", sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.accent};
`;

const OverlayActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const OverlayLink = styled.a`
  color: ${(props) => props.theme.accent};
  text-decoration: none;
  font-size: calc(0.8em + 0.3vw);
  font-weight: 600;
  border: 1px solid ${(props) => props.theme.accent};
  padding: 0.35rem 0.75rem;
  border-radius: 8px;

  &:hover {
    background: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.body};
  }
`;

const CloseButton = styled.button`
  background: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.body};
  border: none;
  cursor: pointer;
  font-size: calc(0.8em + 0.3vw);
  font-weight: 700;
  padding: 0.35rem 0.9rem;
  border-radius: 8px;
  font-family: inherit;
`;

const Frame = styled.iframe`
  flex: 1;
  width: 100%;
  border: none;
  background: #000;
`;

const GameHubPage = () => {
  const [activeGame, setActiveGame] = useState(null);

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
    <ThemeProvider theme={GameHubTheme}>
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
        <FlashAccent>
          <Flash width={64} height={64} fill={GameHubTheme.accent} />
        </FlashAccent>
      </Box>
      <BigTitle text="GAME HUB" top="70%" left="10%" />
      <BigTitle text="GAME HUB" top="30%" right="5%" />

      {activeGame ? (
        <Overlay>
          <OverlayBar>
            <OverlayTitle>
              <Flash width={18} height={18} fill={GameHubTheme.accent} />
              {activeGame.name}
            </OverlayTitle>
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
