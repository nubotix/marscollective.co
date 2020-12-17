import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'

const Button = ({ label, primary, small, ...props }) => (
  <button
    css={[
      tw`border-2 font-semibold leading-none rounded-lg transition-colors duration-500`,
      primary
        ? tw`bg-mint hover:bg-mint-light text-darker border-transparent`
        : tw`bg-transparent text-white hover:text-mint-light border-white hover:border-mint-light`,
      small ? tw`py-3 px-6` : tw`py-3 px-6 md:py-4 px-8`
    ]}
    {...props}
  >
    {label}
  </button>
)

export default Button

Button.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  small: PropTypes.bool
}
