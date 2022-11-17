import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.text};
  font-family: "Pacifico", cursive;
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 3;
`;

const LogoComponents = () => {
  return <Logo>CB</Logo>;
};

export default LogoComponents;
