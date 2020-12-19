import tw, { css } from 'twin.macro'

const ThemeBase = css`
  :root {
    --font-default: 'Baloo 2', sans-serif;
    --font-heading: Rubik, sans-serif;
  }

  .light {
    --bg-default: #ffffff;
    --bg-gray: #f1f1f1;
    --bg-mint: #25796f;
    --bg-mint-hover: #00d1b7;
    --bg-mint-secondary: #25796f;
    --color-default: #262626;
    --color-mint: #25796f;
    --color-mint-hover: #00d1b7;
    --color-reverse: #ffffff;
  }

  .dark {
    --bg-default: #262626;
    --bg-gray: #353535;
    --bg-mint: #00d1b7;
    --bg-mint-hover: #8cfff1;
    --bg-mint-secondary: #25796f;
    --color-default: #ffffff;
    --color-mint: #00d1b7;
    --color-mint-hover: #8cfff1;
    --color-reverse: #262626;
  }

  body {
    ${tw`bg-default font-default text-default transition-colors`}
  }
`

export default ThemeBase
