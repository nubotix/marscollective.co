import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label, primary, ...props }) => {
  const mode = primary
    ? 'bg-highlight hover:bg-hover text-dark'
    : 'border-2 hover:border-hover hover:text-hover'

  return (
    <button
      type="button"
      className={`font-semibold rounded-lg py-4 px-8 transition duration-500 ${mode}`}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired
}

Button.defaultProps = {
  primary: false
}
