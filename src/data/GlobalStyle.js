import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,*::befor,*::after.h1,h2,h3,h4,h5,h6{
    margin:0 ;
    color: "#FCF6F4";
    padding: 0;
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
h1,h2,h3,h4,h5,h6{
    color: "#FCF6F4";
    display: inline-block;
    margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
    margin:0 ;
    padding: 0;
    color: "#FCF6F4";
    overflow-x:h hidden;
    font-family: 'Source Sans Pro' , sans-serif;
    margin: 0;
  padding: 0;
  box-sizing: border-box;



}


`

export default GlobalStyle