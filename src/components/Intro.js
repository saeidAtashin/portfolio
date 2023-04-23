import React from "react";
import styled from "styled-components";
import Me from "../assets/Images/profile-img.png";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  @media (max-width: 800px) {
    /* background-color: red; */
  width: 55vw;

  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 80%;
    height: auto;
  }
  @media (max-width: 800px) {
    position: relative;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    .pic {
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translate(-60%, 0%);
      width: 100%;
      height: auto;
    }
    /* flex-direction: column; */
    /* background-color: red; */
    /* display: flex; */
  }
`;
const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h6 {
    font-size: large;
    font-weight: 600 !important;

    h6 {
      color: black !important;
      text-align: center;
      font-size: larger;
      font-weight: 800 !important;
      display: none !important;
    }
  }

  @media (max-width: 800px) {
    h6 {
      /* background-color: red; */
      color: black !important;
      /* text-align: center;
      font-size: large;
      font-weight: 600 !important; */
    }
    h5 {
      display: none;
    }
  }

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem +1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Saeid Atashin</h3>
          <h5>I code react js websites beautiful</h5>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Text>
            <h6>I code react js websites beautiful</h6>
          </Text>

          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
