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
import { Work as LocalWorks } from "../data/WorkData";

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

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
`;

const WorkPage = () => {
  const ref = useRef(null);
  const yingyang = useRef(null);
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch(
          "https://heuristic-proskuriakova-61zoksgo6.liara.run/works"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch works");
        }
        const data = await response.json();
        
        // Check if API data is empty or invalid, use local data as fallback
        if (!data || data.length === 0 || !Array.isArray(data)) {
          setWorks(LocalWorks);
        } else {
          setWorks(data);
        }
      } catch (err) {
        // On error, use local data as fallback
        setWorks(LocalWorks);
        setError(null); // Clear error since we have fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

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

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocilIcons theme="dark" />
        <PowerButton />
        <Main ref={ref}>
          {loading ? (
            <Loading>Loading...</Loading>
          ) : error ? (
            <Loading>Error: {error}</Loading>
          ) : (
            works.map((d) => <Card key={d.id} data={d} image2={d.img}></Card>)
          )}
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
