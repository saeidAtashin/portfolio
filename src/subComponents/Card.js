import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import IMG1 from "../assets/Images/first.jpg";
import { Github } from "../components/AllSvgs";




const Box = styled(motion.li)`
--bg-image: url('https://picsum.photos/200/300');
--bg-image-opacity: 0.55;

/* height: 200rem; */
width: 16rem;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 1.5rem 2rem;
margin-top: 8rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;
gap: 2rem;
position: relative;
isolation: isolate;

&::after{
  content: '';
  position: absolute;
  
  z-index: -1;
  inset: 0;
  opacity: var(--bg-image-opacity);
  background-image: var(--bg-image);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 0 50px 0 50px;
  
}

&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
border: 1px solid ${props => props.theme.text};
--bg-image-opacity: 0.15;
transition: all 0.5s ease;
}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
`
const Tags = styled.div`
border-top: 2px solid ${props =>props.theme.body};
padding-top: 0.5rem;
display:flex;
${Box}:hover &{
border-top: 2px solid ${props =>props.theme.text};
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled(NavLink)`
background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size:calc(1em + 0.5vw);

${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};

}
`

const Git = styled(NavLink)`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:${props =>props.theme.text};
    }
}

`

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {id, name, description, tags, demo, github} = props.data;

    return (
        <Box key={id} variants={Item}>
            <Title>{name}
            {/* <img src={IMG1} width={"50%"} />*/}
            </Title>
            <Description>
                {description}
            </Description>
            <Tags>
            {
                    tags.map((t,id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>
            <Footer>
                <Link to={{pathname: `${demo}`}} target="_blank">
                    Visit
                </Link>
                <Git to={{pathname: `${github}`}} target="_blank">
                    <Github width={30} height={30} />
                </Git>
            </Footer>
        </Box>
    )
}

export default Card
