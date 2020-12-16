const colors = {
  darker: 'var(--darker)',
  dark: 'var(--dark)',
  mint: 'var(--mint)',
  'mint-dark': 'var(--mint-dark)',
  'mint-light': 'var(--mint-light)'
}

module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem'
        }
      },
      backgroundColor: colors,
      borderColor: colors,
      fontFamily: {
        body: 'var(--font-body)',
        heading: 'var(--font-heading)'
      },
      textColor: colors
    }
  }
}
