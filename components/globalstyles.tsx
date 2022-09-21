import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
  font-size: 62.5%
  }

  html,
  body {
    color: ${({ theme }) => theme.colors.white};
    padding: 0;
    margin: 0;
    font-family: 'DM Sans', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
