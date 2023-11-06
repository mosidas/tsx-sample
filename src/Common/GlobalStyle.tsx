
import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
    <Global
        styles={css`
        *, *:before, *:after {
            box-sizing: border-box;
        }
        html, body {
            height: 100vh;
            width: 100vw;
            margin: 0;
            padding: 0;
    `}
    />
);

export default GlobalStyle;
