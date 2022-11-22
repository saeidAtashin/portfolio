import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 100;

  & > *:not(:last-child) {
    margin: 0.2rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  transition: background-color 1.9s ease;
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink target="_blank">
          <a
            style={{ color: "black" }}
            href="https://github.com/saeidAtashin"
            target="_blank"
            rel="noreferrer"
          >
            <Github
              width={30}
              height={30}
              fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            />
          </a>
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank">
          <a
            style={{ color: "black" }}
            href="https://github.com/saeidAtashin"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter
              width={30}
              height={30}
              fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            />
          </a>
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank">
          <a
            style={{ color: "black" }}
            href="https://github.com/saeidAtashin"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook
              width={30}
              height={30}
              fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            />
          </a>
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank">
          <a
            style={{ color: "black" }}
            href="https://github.com/saeidAtashin"
            target="_blank"
            rel="noreferrer"
          >
            <YouTube
              width={30}
              height={30}
              fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            />
          </a>
        </NavLink>
      </div>
      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
