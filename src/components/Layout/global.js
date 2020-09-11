import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --highLight: #00d1b7;
    --hover: #8cfff1;
    --default: #fff;
    --background: #262626;
    --backgroundGray: #353535;
    --backgroundGreen: #25796f;

    @media screen and (prefers-color-scheme: light) {
      --highLight: #25796f;
      --hover: #00d1b7;
      --default: #262626;
      --background: #fff;
      --backgroundGray: #f1f1f1;
      --backgroundGreen: #00d1b7;
    }

    --maxWidth: calc(1200px + var(--gutter) * 2);
    --gutter: 2rem;
    --halfGutter: calc(var(--gutter) / 2);
    --doubleGutter: calc(var(--gutter) * 2);
    --margin: 8rem;
    --halfMargin: calc(var(--margin) / 2);
    --tinyMargin: 1rem;
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
    overflow-x: hidden;
  }

  img {
    max-width: 100%;
  }

  h1 {
    font-family: var(--titleFont);
    font-size: 5rem;
    font-weight: 900;
    text-transform: uppercase;
    color: var(--default);

    .big {
      display: block;
      font-size: 8.75rem;
      color: var(--highLight);

      @media (max-width: 1200px) {
        font-size: 7rem;
      }
    }

    @media (max-width: 1200px) {
      font-size: 3.8rem;
    }
  }



  h2 {
    font-size: 3rem;
    font-family: var(--titleFont);
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.1;
    color: var(--highLight);
    margin-bottom: var(--doubleGutter);

    @media (max-width: 960px) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.1;
    color: var(--highLight);
    margin-bottom: calc(var(--halfGutter) / 2);
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.1;
    margin-bottom: calc(var(--halfGutter) / 2);

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }

  h5 {
    font-weight: 600;
    text-align: center;
    line-height: 1.1;
    margin-bottom: calc(var(--halfGutter) / 2);
  }

  h6 {
    font-weight: 600;
    text-align: center;
    line-height: 1.1;
    margin-bottom: calc(var(--halfGutter) / 2);
  }

  p {
    line-height: 1.5;
    margin-bottom: 1rem;

    &.lead {
      font-size: 1.5rem;
      margin: -1rem 0 0 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default GlobalStyles
