import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --highLight: #00d1b7;
    --default: #fff;
    --background: #262626;
    --backgroundGray: #353535;
    --backgroundGreen: #25796f;

    /* @media screen and (prefers-color-scheme: light) {
      --highLight: #25796f;
      --default: #262626;
      --background: #fff;
      --backgroundGray: #f1f1f1;
      --backgroundGreen: #00d1b7;
    } */

    --maxWidth: calc(1200px + var(--gutter) * 2);
    --gutter: 2rem;
    --halfGutter: calc(var(--gutter) / 2);
    --doubleGutter: calc(var(--gutter) * 2);
    --margin: 8rem;
    --halfMargin: calc(var(--margin) / 2);
    --titleFont: 'Rubik', sans-serif;
    --bodyFont: 'Baloo 2', sans-serif;
    --bodyFontSize: 16px;
    --borderSize: 2px;
    --borderRadius: 1rem;
    --halfBorderRadius: calc(var(--borderRadius) / 2);
    --doubleBorderRadius: calc(var(--borderRadius) * 2);
  }

  html {
    background: var(--background);
  }

  body {
    font-family: var(--bodyFont);
    font-size: var(--bodyFontSize);
    line-height: 1;
    text-rendering: optimizeLegibility;
    color: var(--default);
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyles
