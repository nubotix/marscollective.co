import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'

const Button = ({ label, primary, ...props }) => (
  <button
    css={[
      tw`p-3 md:py-4 md:px-8 border-2 font-semibold leading-none rounded-lg transition-colors duration-500`,
      primary
        ? tw`bg-mint hover:bg-mint-light text-darker border-transparent`
        : tw`bg-transparent text-white hover:text-mint-light border-white hover:border-mint-light`
    ]}
    {...props}
  >
    {label}
  </button>
)

export default Button

Button.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool
}
