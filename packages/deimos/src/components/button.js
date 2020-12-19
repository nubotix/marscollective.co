import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'

const Button = ({ label, primary, ...props }) => (
  <button
    css={[
      tw`p-3 md:(py-4 px-8) border-2 font-semibold leading-none rounded-lg transition duration-500`,
      primary
        ? tw`bg-mint hover:bg-mint-hover text-reverse border-transparent`
        : tw`bg-transparent text-default border-default hover:(text-mint-hover border-mint-hover)`
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
