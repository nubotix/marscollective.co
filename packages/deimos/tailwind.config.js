const theme = require(`${__dirname}/src/theme`)

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
      backgroundColor: theme.colors,
      borderColor: theme.colors,
      fontFamily: theme.fonts,
      textColor: theme.colors
    }
  }
}
