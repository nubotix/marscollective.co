module.exports = {
  purge: [`${__dirname}/src/**/*.js`, `src/**/*.js`],
  darkMode: false,
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem'
        }
      },
      backgroundColor: {
        DEFAULT: '#262626',
        gray: '#353535',
        green: '#25796f',
        highlight: '#00d1b7',
        hover: '#8cfff1'
      },
      borderColor: {
        hover: '#8cfff1'
      },
      textColor: {
        DEFAULT: '#fff',
        dark: '#262626',
        highlight: '#00d1b7',
        hover: '#8cfff1'
      }
    }
  }
}
