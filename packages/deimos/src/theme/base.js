import tw, { css } from 'twin.macro'

const Base = css`
  :root {
    --darker: #262626;
    --dark: #353535;
    --mint: #00d1b7;
    --mint-dark: #25796f;
    --mint-light: #8cfff1;

    --font-body: 'Baloo 2', sans-serif;
    --font-heading: Rubik, sans-serif;
  }
  body {
    ${tw`bg-darker font-body text-white m-4`}
  }
`

export default Base
