import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --font-color: #222222;
        --font-color-tint: #22222f;
        --blue-main: cornflowerblue;
        --blue-light: rgb(219, 223, 255);
        --pink-main: mediumorchid;
        --pink-light: rgb(242, 217, 255);
    }
    div#__next, html, body {
        margin: 0;
        font-size: 10px;
        font-family: 'Open Sans', sans-serif;
        color: var(--font-color-tint);
    }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
