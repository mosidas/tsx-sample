/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const style = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html,
  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
