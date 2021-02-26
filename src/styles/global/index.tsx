import { createGlobalStyle } from 'styled-components';

import { THEME_CSS_VARIABLES } from './css-variables';

export const GlobalStyles = createGlobalStyle`
  ${THEME_CSS_VARIABLES}

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    list-style: none;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: auto;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  body, #root {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  #root {
    height: 100%;
  }

  body, input, button {
    font: 1rem/1.48 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 500;
  }

  h1, h2, h3, strong {
    font-weight: 700;
  }

  h4, h5, h6 {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    background: none;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }

  button {
    border: 0;
    cursor: pointer;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a, button {
    -webkit-tap-highlight-color: transparent
   }

  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`;
