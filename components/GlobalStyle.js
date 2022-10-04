import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #000;
    --secondary: #333;
    --gray: #efefef;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #__next {
    width: 100%;
    min-height: 100vh;
  }
  #__next {
    display: grid;
    grid-template-rows: 80px 1fr 40px;
  }
`;

export default GlobalStyle;
