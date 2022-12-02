import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'



const Power = styled.button`
position: fixed;
top: 2rem;
left:50vw;
transform: translate(-50% ,0);
padding: 0.3rem;
background-color: #FCF6F4;
border-radius: 50%;
border:1px solid #000;
width: 2.5rem;
height: 2.5rem;

display:flex;
justify-content:center;
align-items:center;
z-index:3;
cursor: pointer;

&:hover{
position: fixed;
    background-color: rgba(167,126,126, 0.7);
}
&>*:first-child {
  text-decoration: none;
  color: inherit;
}
`

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/"><PowerBtn width={30} height={30} fill='currentColor' /></NavLink>
      
    </Power>
  )
}

export default PowerButton
