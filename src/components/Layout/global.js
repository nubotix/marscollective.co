import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --highLight: #00d1b7;
    --default: #fff;
    --background: #262626;
    --backgroundMedium: #1c8c7f;
  }

  body {
    font-family: 'Baloo 2', 'sans-serif';
    font-size: 16px;
    text-rendering: optimizeLegibility;
    color: var(--default);
    background: var(--background);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  h1,
  h2 {
    font-display: 'Rubik', 'sans-serif';
    font-weight: 900;
  }

  h1 {
    font-size: 5rem;

    .big {
      font-size: 8.75rem;
      color: var(--highLight);
    }
  }

  h2 {
    font-size: 3rem;
    color: var(--highLight);
    margin-bottom: 2rem;
  }

  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }

  h3 {
    font-size: 2rem;
    color: var(--highLight);
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  p {
    line-height: 1.5;
    margin-bottom: 1rem;

    .lead {
      font-size: 1.5rem;
    }

    :last-child {
      margin-bottom: 0;
    }
  }

  button {
    font-weight: 700;
    color: var(--background);
    background: var(--highLight);
    padding: 1rem 2rem;
    border-radius: 10px;

    .ghost {
      color: var(--highLight);
      background: transparent;
      border: 2px solid var(--highLight);
    }
  }
`

export default GlobalStyles
