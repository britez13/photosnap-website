import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
  font-size: 62.5%
  }

  html,
  body {
    color: ${({ theme }) => theme.colors.white};
    padding: 0;
    margin: 0;
    font-family: 'DM Sans', sans-serif;
    width: min(100%, 144rem);
    margin-inline: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, ul, p {
    margin: 0;
  }

  
  
  
  h1, h2, h3 {
    font-weight: 700;
  }

  p {
    font-weight: 400;
  }
  
  ul {
   padding: 0;
  }  

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
