import React, { useContext } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

import { ThemeContext } from '@theme/theme-context'

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  function isDark() {
    return theme === 'dark'
  }

  return (
    <button
      className="focus:outline-none fill-current"
      onClick={() => setTheme(isDark() ? 'light' : 'dark')}
      aria-label="Theme toggle"
    >
      {isDark() ? <BiSun size={22} /> : <BiMoon size={22} />}
    </button>
  )
}

export default ThemeToggle
