import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponents";
import SocilIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import { Work } from "../data/WorkData";

import BigTitle from "../subComponents/BigTitle";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 300vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
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

const WorkPage = () => {
  const ref = useRef(null);
  const yingyang = useRef(null);

  useEffect(() => {
    const rotate = () => {
      yingyang.current.style.transform = `translateY(${-window.pageYOffset}%)`;
      yingyang.current.style.transform = `rotate(${-window.pageYOffset}deg)`;
    };

    return () => window.addEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocilIcons theme="dark" />
        <PowerButton />
        <Main ref={ref}>
          {Work.map((d) => (
            <Card key={d.id} data={d} image2={d.img}></Card>
          ))}
        </Main>
        <Rotate
          ref={yingyang}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
      </Box>
      <BigTitle text="WORK" top="70%" left="15%" />
      <BigTitle text="WORK" top="30%" right="10%" />
    </ThemeProvider>
  );
};

export default WorkPage;
