import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,300;1,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none
  }

  body, html, #root {
    height: 100%;
    width: 100%;
  }

  body, #root {
    background: #F2f2f2;
    
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    display: flex;    
  }
  
  button {
    cursor: pointer;
    border: none;

  }
`;

export default GlobalStyle;
