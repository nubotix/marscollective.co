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

  h1,
  h2 {
    ${tw`font-black font-heading! uppercase`}
  }

  h3,
  h4,
  h5,
  h6 {
    ${tw`font-default! font-semibold leading-6`}
  }

  h1 {
    ${tw`text-4xl sm:text-5xl md:text-6xl`}
  }

  h1 span {
    ${tw`text-7xl sm:text-8xl md:text-9xl block`}
  }

  h2 {
    ${tw`mb-8 text-3xl sm:mb-12 md:(mb-16 text-4xl) lg:(mb-20 text-5xl)`}
  }

  h3 {
    ${tw`text-2xl md:mb-2 lg:text-3xl`}
  }

  h4 {
    ${tw`text-lg`}
  }

  .lead {
    ${tw`text-xl lg:text-2xl font-normal`}
  }

  .center {
    ${tw`text-center`}
  }

  .mint {
    ${tw`text-mint`}
  }
`

export default ThemeBase
