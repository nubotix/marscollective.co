import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'

const base = tw`block border-none rounded-lg bg-white text-black w-full p-3 focus:outline-none focus:border-none`

export const Input = ({ label, name, ...props }) => (
  <input
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
    css={[base, tw`h-36 resize-none`]}
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
