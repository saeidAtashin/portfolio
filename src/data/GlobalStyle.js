import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,*::befor,*::after.h1,h2,h3,h4,h5,h6{
    margin:0 ;
    color: red
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    color: red
    display: inline-block;
    
}

body{
    margin:0 ;
    padding: 0;
    color: red
    overflow-x:h hidden;
    font-family: 'Source Sans Pro' , sans-serif;
}

`

export default GlobalStyle