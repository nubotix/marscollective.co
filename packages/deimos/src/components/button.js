import React from 'react'

const Button = ({ label, primary, small, ...props }) => {
  const isPrimary = primary
    ? `bg-mint hover:bg-mint-light text-darker border-transparent`
    : `bg-transparent text-white hover:text-mint-light border-white hover:border-mint-light`
  const isSmall = small ? `py-3 px-6` : `py-4 px-8`
  return (
    <button
      className={`${isPrimary} ${isSmall} border-2 font-semibold leading-none rounded-lg transition-colors duration-500`}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
