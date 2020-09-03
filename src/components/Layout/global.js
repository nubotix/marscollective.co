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
    --backgroundMedium: #25796f;

    /* @media screen and (prefers-color-scheme: light) {
      --highLight: #25796f;
      --default: #262626;
      --background: #fff;
      --backgroundGray: #f1f1f1;
      --backgroundMedium: #00d1b7;
    } */

    --gutter: 2rem;
    --halfGutter: calc(var(--gutter) / 2);
    --doubleGutter: calc(var(--gutter) * 2);
    --titleFont: 'Rubik', sans-serif;
    --bodyFont: 'Baloo 2', sans-serif;
    --bodyFontSize: 16px;
    --borderSize: 2px;
    --borderRadius: 10px;
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

  h1,
  h2 {
    font-family: var(--titleFont);
    font-weight: 900;
    text-transform: uppercase;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  h1 {
    font-size: 5rem;
    color: var(--default);

    @media (max-width: 1200px) {
      font-size: 3.8rem;
    }

    .big {
      display: block;
      font-size: 8.75rem;
      color: var(--highLight);

      @media (max-width: 1200px) {
        font-size: 7rem;
      }
    }
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    color: var(--highLight);
    margin-bottom: var(--doubleGutter);

    @media (max-width: 960px) {
      font-size: 2.5rem;
      margin-bottom: var(--gutter);
    }
  }

  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    text-align: center;
    margin-bottom: calc(var(--halfGutter) / 2);
  }

  h3 {
    font-size: 2rem;
    color: var(--highLight);

    @media (max-width: 1200px) {
      font-size: 1.4rem;
    }
  }

  h4 {
    font-size: 1.5rem;

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
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

  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: 600;
    color: var(--background);
    background: var(--highLight);
    padding: calc(var(--halfGutter) - 2px) var(--gutter);
    border: var(--borderSize) solid var(--highLight);
    border-radius: 10px;
    cursor: pointer;

    &.ghost {
      color: var(--highLight);
      background: transparent;

      &.white {
        color: var(--default);
        border-color: var(--default);
      }
    }
  }

  img {
    max-width: 100%;
  }

  input,
  textarea {
    display: block;
    font-family: inherit;
    font-size: var(--bodyFont);
    border: none;
    border-radius: var(--borderRadius);
    width: 100%;
    padding: var(--halfGutter);
    margin-bottom: var(--halfGutter);

  }

  textarea {
    height: 9rem;
    margin-bottom: var(--gutter);
  }
`

export default GlobalStyles
