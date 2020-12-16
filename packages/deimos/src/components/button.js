import React from 'react'

const Button = ({ label, link, primary, small, ...props }) => (
  <a href={link} alt={label}>
    <button
      className={`${
        primary
          ? `bg-mint hover:bg-mint-light text-darker border-transparent`
          : `bg-transparent text-white hover:text-mint-light border-white hover:border-mint-light`
      } ${
        small ? `py-3 px-6` : `py-4 px-8`
      } border-2 font-semibold leading-none rounded-lg transition-colors duration-500`}
      {...props}
    >
      {label}
    </button>
  </a>
)

export default Button
