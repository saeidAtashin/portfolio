import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;

const SocialIcons = () => {
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
            <Github width={30} height={30} fill="currentColor" />
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
            <Twitter width={30} height={30} fill="currentColor" />
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
            <Facebook width={30} height={30} fill="currentColor" />
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
            <YouTube width={30} height={30} fill="currentColor" />
          </a>
        </NavLink>
      </div>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
