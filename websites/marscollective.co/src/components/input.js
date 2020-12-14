import React from 'react'

const style = 'p-4 rounded-lg'

export const Input = ({ label, ...props }) => (
  <input placeholder={label} aria-label={label} className={style} {...props} />
)

export const TextArea = ({ label, ...props }) => (
  <textarea
    placeholder={label}
    aria-label={label}
    className={`${style} h-36 resize-none`}
    {...props}
  />
)
