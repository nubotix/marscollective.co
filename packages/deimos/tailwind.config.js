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
