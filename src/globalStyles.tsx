import { injectGlobal } from "@emotion/css";
import { Global, css } from "@emotion/react";

injectGlobal`
  @font-face {
    font-family: "SFProText Regular";
    src: local("SFProText Regular"), local("SFProText-Regular"),
    url("SFProText-Regular.ttf") format('truetype');
  }
  @font-face {
    font-family: "SFProText Medium";
    src: local("SFProText Medium"), local("SFProText-Medium"),
    url("SFProText-Medium.ttf") format('truetype');
  }
  @font-face {
    font-family: "SFProText Semibold";
    src: local("SFProText Semibold"), local("SFProText-Semibold"),
    url("SFProText-Semibold.ttf");
  }

  * {
    outline: none;
    box-sizing: border-box;
    font-family:  SFProText Regular, sans-serif;

    &::after,
    &::before {
      box-sizing: border-box;
    }
  }

  html {
    font-size: 1rem;
    scroll-behavior: smooth;
  }

  body, ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  #root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
  }
`;

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          color: #000000;
        }
      `}
    />
  );
};
