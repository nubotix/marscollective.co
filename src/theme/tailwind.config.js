module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          md: '2rem'
        }
      },
      backgroundColor: {
        default: 'var(--bg-default)',
        gray: 'var(--bg-gray)',
        mint: 'var(--bg-mint)',
        'mint-hover': 'var(--bg-mint-hover)',
        'mint-secondary': 'var(--bg-mint-secondary)'
      },
      borderColor: {
        default: 'var(--color-default)',
        mint: 'var(--color-mint)',
        'mint-hover': 'var(--color-mint-hover)',
        reverse: 'var(--color-reverse)'
      },
      fontFamily: {
        default: 'var(--font-default)',
        heading: 'var(--font-heading)'
      },
      textColor: {
        default: 'var(--color-default)',
        mint: 'var(--color-mint)',
        'mint-hover': 'var(--color-mint-hover)',
        reverse: 'var(--color-reverse)'
      }
    }
  },
  variants: {
    extend: {
      margin: ['first', 'last']
    }
  }
}
