import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponents from "../subComponents/LogoComponents";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang, ArrowDown, ArrowRight, ArrowLeft } from "./AllSvgs";
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

  @media (max-width: 500px) {
    font-size: 16px;
    top: 2.3rem;
  }
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  padding-top: 1.5rem;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  transform-origin: center;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  @media (max-width: 500px) {
    right: calc(0.5rem + 1.5vw);
    font-size: 16px;
  }
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  transform-origin: center;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: color 1.9s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  @media (max-width: 500px) {
    left: calc(0.5rem + 1.5vw);
    font-size: 16px;
  }
`;

const BottoBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 500px) {
    bottom: 4rem;
    width: 100%;
  }
`;
const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  transition: color 0.9s ease;

  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};

  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const rotates = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`;

const bounce = keyframes`
0%, 20%, 50%, 80%, 100% {
  transform: translateY(0);
}
40% {
  transform: translateY(-10px);
}
60% {
  transform: translateY(-5px);
}
`;

const bounceRight = keyframes`
0%, 20%, 50%, 80%, 100% {
  transform: translateX(0);
}
40% {
  transform: translateX(-10px);
}
60% {
  transform: translateX(-5px);
}
`;

const bounceLeft = keyframes`
0%, 20%, 50%, 80%, 100% {
  transform: translateX(0);
}
40% {
  transform: translateX(10px);
}
60% {
  transform: translateX(5px);
}
`;

const IconWrapper = styled.div`
  display: inline-block;

  & > svg {
    animation: ${rotates} infinite linear;
    animation-duration: ${(props) => props.animationDuration}s;
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
  transition: ${(props) =>
    props.click
      ? "top 1.5s ease-in-out 0.6s, left 1.5s ease-in-out 0.6s"
      : "top 1.5s ease-in-out 0.6s, left 1.5s ease-in-out 0.6s"};

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

const ArrowToBlog = styled.div`
  position: absolute;
  top: 50%;
  right: calc(2.5rem + 3vw);
  transform: translateY(-50%);
  z-index: 10;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    animation: ${bounceRight} 2s infinite;
    width: 25px;
    height: 25px;
  }

  @media (max-width: 500px) {
    right: calc(2rem + 2.5vw);
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ArrowToWork = styled.div`
  position: absolute;
  top: 50%;
  left: calc(2rem + 3vw);
  transform: translateY(-50%);
  z-index: 10;
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 1.9s ease;

  & > svg {
    animation: ${bounceLeft} 2s infinite;
    width: 25px;
    height: 25px;
  }

  @media (max-width: 500px) {
    left: calc(1.2rem + 2.5vw);
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ArrowToAbout = styled.div`
  position: absolute;
  bottom: calc(2.5rem + 0.5vh);
  left: 32%;
  transform: translateX(-50%);
  z-index: 10;
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.9s ease;

  & > svg {
    animation: ${bounce} 2s infinite;
    width: 25px;
    height: 25px;
  }

  @media (max-width: 500px) {
    bottom: calc(5rem + 0.5vh);
    left: 30.5%;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ArrowToSkills = styled.div`
  position: absolute;
  bottom: calc(2.5rem + 0.5vh);
  right: 32.5%;
  transform: translateX(50%);
  z-index: 10;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    animation: ${bounce} 2s infinite;
    width: 25px;
    height: 25px;
  }

  @media (max-width: 500px) {
    bottom: calc(5rem + 0.5vh);
    right: 30%;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const NameContainer = styled.span`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

const FirstName = styled.span`
  transition: all 0.3s ease;
  color: ${(props) => (props.hovered ? "#fff" : "currentColor")};
  background-color: ${(props) => (props.hovered ? "#000" : "transparent")};
  padding: ${(props) => (props.hovered ? "2px 4px" : "0")};
`;

const LastName = styled.span`
  transition: all 0.3s ease;
  color: ${(props) => (props.hovered ? "#000" : "#fff")};
  background-color: ${(props) => (props.hovered ? "#fff" : "#000")};
  padding: 2px 4px;
`;

const IntroOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  mask-image: ${(props) =>
    props.mouseX !== null && props.mouseY !== null
      ? `radial-gradient(circle 4rem at ${props.mouseX}px ${props.mouseY}px, black 0%, transparent 100%)`
      : "radial-gradient(circle 4rem at 50% 50%, transparent 0%, transparent 100%)"};
  -webkit-mask-image: ${(props) =>
    props.mouseX !== null && props.mouseY !== null
      ? `radial-gradient(circle 4rem at ${props.mouseX}px ${props.mouseY}px, black 0%, transparent 100%)`
      : "radial-gradient(circle 4rem at 50% 50%, transparent 0%, transparent 100%)"};
  mask-size: 100% 100%;
  -webkit-mask-size: 100% 100%;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  transition: mask-image 0.1s ease-out, -webkit-mask-image 0.1s ease-out;
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(1.5);
  const [nameHovered, setNameHovered] = useState(false);
  const [screenHovered, setScreenHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const animationRef = useRef(null);
  const rafRef = useRef(null);

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const smoothTransitionSpeed = (startSpeed, endSpeed, duration) => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      const currentSpeed = startSpeed + (endSpeed - startSpeed) * easedProgress;
      setAnimationDuration(currentSpeed);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  };

  const handleClick = () => {
    const newClickState = !click;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }

    setAnimationDuration(0.3);

    setClick(newClickState);

    animationRef.current = setTimeout(() => {
      smoothTransitionSpeed(0.3, 1.5, 800);
    }, 2100);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!click && screenHovered) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleTouchMove = (e) => {
      if (!click) {
        e.preventDefault();
        const touch = e.touches[0] || e.changedTouches[0];
        if (touch) {
          setMousePosition({ x: touch.clientX, y: touch.clientY });
          setScreenHovered(true);
        }
      }
    };

    const handleTouchStart = (e) => {
      if (!click) {
        const touch = e.touches[0];
        if (touch) {
          setMousePosition({ x: touch.clientX, y: touch.clientY });
          setScreenHovered(true);
        }
      }
    };

    const handleTouchEnd = () => {
      if (!click) {
        setScreenHovered(false);
        setMousePosition({ x: null, y: null });
      }
    };

    if (!click) {
      if (screenHovered) {
        window.addEventListener("mousemove", handleMouseMove);
      }
      window.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
    } else {
      setMousePosition({ x: null, y: null });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [click, screenHovered]);

  return (
    <MainContainer
      onMouseEnter={() => !click && setScreenHovered(true)}
      onMouseLeave={() => setScreenHovered(false)}
    >
      <DarkDiv click={click} />

      <ArrowToBlog>
        <ArrowRight fill="currentColor" />
      </ArrowToBlog>

      <ArrowToWork click={click}>
        <ArrowLeft fill="currentColor" />
      </ArrowToWork>

      <ArrowToAbout click={click}>
        <ArrowDown fill="currentColor" />
      </ArrowToAbout>

      <ArrowToSkills>
        <ArrowDown fill="currentColor" />
      </ArrowToSkills>

      <Container>
        <PowerButton />
        <LogoComponents theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center click={click} onClick={() => handleClick()}>
          <IconWrapper animationDuration={animationDuration}>
            <YinYang
              width={click ? "120" : "200"}
              height={click ? "120" : "200"}
              fill="currentColor"
              style={{ transition: "all 1.5s ease-in-out" }}
            />
          </IconWrapper>
          <NameContainer
            onMouseEnter={() => setNameHovered(true)}
            onMouseLeave={() => setNameHovered(false)}
          >
            <FirstName hovered={nameHovered}>Saeid</FirstName>{" "}
            <LastName hovered={nameHovered}>Atashin</LastName>
          </NameContainer>
        </Center>

        <Contact
          target="_blank"
          style={{ color: "black", textDecoration: "none" }}
          href="mailto:saeid.kase.atashin@gmail.com"
          rel="noreferrer"
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Mail Me...
          </motion.h2>
        </Contact>
        <BLOG to="/blog" rel="noreferrer">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Blog
          </motion.h2>
        </BLOG>
        <WORK click={click} to="/work" rel="noreferrer">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK>
        <BottoBar>
          <ABOUT click={click} to="/about" rel="noreferrer">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              About Me
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills" rel="noreferrer">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills
            </motion.h2>
          </SKILLS>
        </BottoBar>
      </Container>
      {click ? (
        <Intro click={click} />
      ) : (
        <IntroOverlay
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
          animate={{
            opacity: screenHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Intro click={click} masked={true} />
        </IntroOverlay>
      )}
    </MainContainer>
  );
};

export default Main;
