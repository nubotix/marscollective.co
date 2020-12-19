import React, { useContext } from 'react'
import tw from 'twin.macro'
import { BiMoon, BiSun } from 'react-icons/bi'

import { ThemeContext } from '@theme/theme-context'

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  function isDark() {
    return theme === 'dark'
  }

  return (
    <button
      css={[
        tw`focus:outline-none fill-current hover:text-mint transition duration-500`
      ]}
      onClick={() => setTheme(isDark() ? 'light' : 'dark')}
    >
      {isDark() ? <BiSun size={20} /> : <BiMoon size={20} />}
    </button>
  )
}

export default ThemeToggle
