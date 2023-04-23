import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled(motion.a)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 23rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  opacity: 0.8;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
    opacity: 1;
  }
`;
const Title = styled.h3`
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  position: absolute;
  top: 60%;
  border-bottom: 1px solid ${(props) => props.theme.text};
  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const Hashtags = styled.div`
  padding: 0.5rem 0;
  /* border-top: 1px solid ${(props) => props.theme.text}; */
  position: absolute;
  left: 1rem;
  bottom: 7%;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;

const Date = styled.span`
  padding: 0.5rem 0;
  position: absolute;
  left: 1rem;
  bottom: 0;
`;

const Container = styled(motion.div)``;
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link, id } = props.blog;
  return (
    <Container variants={Item}>
      <Box target="_blank" href={link}>
        {name === "This is my PORTFOLIO. A animated site using styled component and framer-motion" ? (
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_xv6jIJkWzo.json"
            background="transparent"
            speed="1"
 
            hover
            loop
            autoplay
          ></lottie-player>
        ) : (
          <Image img={imgSrc} />
        )}
        <Title>{name}</Title>
        <Hashtags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </Hashtags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;
