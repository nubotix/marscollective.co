import React from 'react'
import PropTypes from 'prop-types'

const base =
  'block border-none rounded-lg bg-white text-black w-full p-3 focus:outline-none focus:border-none'

export const Input = ({ label, name, ...props }) => (
  <input
    className={base}
    css={[base]}
    placeholder={label}
    aria-label={label}
    name={name}
    id={name}
    {...props}
  />
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export const TextArea = ({ label, name, ...props }) => (
  <textarea
    className={`${base} h-36 resize-none`}
    placeholder={label}
    aria-label={label}
    name={name}
    id={name}
    {...props}
  />
)

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
