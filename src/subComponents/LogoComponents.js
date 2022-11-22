import React from "react";
import styled from "styled-components";
import {DarkTheme} from '../components/Themes';

const Logo = styled.h1`
  display: inline-block;
  font-family: "Pacifico", cursive;
  color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 4;
`;

const LogoComponents = (props) => {
  return <Logo color = {props.theme} >CB</Logo>;
}; 

export default LogoComponents;
