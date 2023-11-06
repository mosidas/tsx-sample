/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
    <Global
        styles={css`
            *, *:before, *:after {
            box-sizing: border-box;
        }
    `}
    />
);

export default GlobalStyle;
