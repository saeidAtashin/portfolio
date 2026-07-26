import { motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";
import { Github } from "../components/AllSvgs";

const gameHubBox = css`
  width: 100%;
  max-width: 22rem;
  margin-top: 0;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.accent || "#2ee6c5"};
  background-color: rgba(${(props) => props.theme.bodyRgba || "11, 18, 24"}, 0.72);
  color: ${(props) => props.theme.text};

  &::after {
    border-radius: 12px;
  }

  &:hover {
    background-color: rgba(${(props) => props.theme.accentRgba || "46, 230, 197"}, 0.12);
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.accent || "#2ee6c5"};
    --bg-image-opacity: 0.2;
  }

  @media (max-width: 500px) {
    width: 100%;
    max-width: 18rem;
  }
`;

const Box = styled(motion.li)`
  --bg-image: url("https://picsum.photos/200/300");
  --bg-image2: url("https://downloadr2.apkmirror.com/wp-content/uploads/2022/10/87/6358e536e4385-384x384.png");
  --bg-image-opacity: 0.55;

  width: 16rem;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-top: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
  gap: 2rem;
  position: relative;
  isolation: isolate;
  list-style: none;

  @media (max-width: 500px) {
    width: 11rem;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    opacity: var(--bg-image-opacity);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 0 50px 0 50px;
  }

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
    --bg-image-opacity: 0.15;
    transition: all 0.5s ease;
  }

  ${(props) => props.$gameHub && gameHubBox}
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
  font-family: "Source Sans Pro", "Vazirmatn", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", "Vazirmatn", sans-serif;
  font-weight: 500;
  line-height: 1.6;
`;

const Tags = styled.div`
  border-top: 2px solid
    ${(props) =>
      props.$gameHub
        ? props.theme.accent || "#2ee6c5"
        : props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Box}:hover & {
    border-top: 2px solid
      ${(props) =>
        props.$gameHub
          ? props.theme.accent || "#2ee6c5"
          : props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Link2 = styled.a`
  background-color: ${(props) =>
    props.$gameHub ? "transparent" : props.theme.body};
  color: ${(props) =>
    props.$gameHub ? props.theme.accent || "#2ee6c5" : props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(1.2rem + 1vw);
  border-radius: ${(props) => (props.$gameHub ? "8px" : "0 0 0 50px")};
  font-size: calc(0.85em + 0.4vw);
  border: ${(props) =>
    props.$gameHub
      ? `1px solid ${props.theme.accent || "#2ee6c5"}`
      : "none"};
  cursor: pointer;
  font-family: inherit;

  ${Box}:hover & {
    background-color: ${(props) =>
      props.$gameHub
        ? props.theme.accent || "#2ee6c5"
        : props.theme.text};
    color: ${(props) =>
      props.$gameHub ? props.theme.body : props.theme.body};
  }
`;

const PlayButton = styled.button`
  background-color: ${(props) => props.theme.accent || "#2ee6c5"};
  color: ${(props) => props.theme.body};
  text-decoration: none;
  padding: 0.5rem calc(1.2rem + 1vw);
  border-radius: 8px;
  font-size: calc(0.85em + 0.4vw);
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 700;

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  ${Box}:hover & {
    & > * {
      fill: ${(props) =>
        props.$gameHub
          ? props.theme.accent || "#2ee6c5"
          : props.theme.text};
    }
  }
`;

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

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  inset: 0;
  opacity: var(--bg-image-opacity);
  border-radius: ${(props) => (props.$gameHub ? "12px" : "0 50px 0 50px")};
`;

const Card = (props) => {
  const { id, name, description, tags, demo, github, img } = props.data;
  const isGameHub = props.variant === "gameHub";

  return (
    <Box key={id} variants={Item} $gameHub={isGameHub}>
      <Title>
        {name}
        <Img src={img} alt="" $gameHub={isGameHub} />
      </Title>
      <Description>{description}</Description>
      <Tags $gameHub={isGameHub}>
        {tags.map((t, tagId) => {
          return <Tag key={tagId}>#{t}</Tag>;
        })}
      </Tags>
      <Footer>
        {isGameHub ? (
          <Actions>
            <PlayButton type="button" onClick={() => props.onPlay?.(props.data)}>
              Play
            </PlayButton>
            <Link2 href={demo} target="_blank" rel="noreferrer" $gameHub>
              Open site
            </Link2>
          </Actions>
        ) : (
          <Link2 href={demo} target="_blank" rel="noreferrer">
            Visit
          </Link2>
        )}
        {github ? (
          <Git href={github} target="_blank" rel="noreferrer" $gameHub={isGameHub}>
            <Github width={30} height={30} />
          </Git>
        ) : null}
      </Footer>
    </Box>
  );
};

export default Card;
