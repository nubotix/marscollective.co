import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label, primary, ...props }) => (
  <button
    className={`p-3 md:py-4 md:px-8 border-2 font-semibold leading-none rounded-lg transition duration-500 ${
      primary
        ? `bg-mint hover:bg-mint-hover text-reverse border-transparent`
        : `bg-transparent text-default border-default hover:text-mint-hover hover:border-mint-hover`
    }`}
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
