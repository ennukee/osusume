import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --font-color: #222222;
        --font-color-tint: #22222f;
        --color-primary: #419ee1;
        --color-primary-light: #7cb6e1;
        --color-secondary: #a2e362;
        --color-secondary-light: #b9e58f;
    }
    div#__next, html, body {
        margin: 0;
        font-size: 10px;
        font-family: 'Noto Sans', sans-serif;
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
