import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled(NavLink)`
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

`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
`;
const Title = styled.h3`
  color: ${(props) => props.theme.text};
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  position: absolute;
  top: 60%;
border-bottom: 1px solid ${(props) => props.theme.text};
`;

const Hashtags = styled.div`
padding: 0.5rem 0;
/* border-top: 1px solid ${(props) => props.theme.text}; */
position: absolute;
left: 1rem;
bottom: 7%;
`
const Tag = styled.span`
padding-right: 0.5rem;
`

const Date = styled.span`
padding: 0.5rem 0;
position: absolute ;
left: 1rem;
bottom: 0;
`

const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <Box target="_blank" to={{ pathname: link }}>
      <Image img={imgSrc} />
      <Title>{name}</Title>
      {/* <hr/> */}
      <Hashtags>
        {tags.map((t, id) => {
          return(
          <Tag key={id}>#{t}</Tag>)
        })}
      </Hashtags>
      <Date>
        {date}
      </Date>
    </Box>
  );
};

export default BlogComponent;
