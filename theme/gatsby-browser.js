import React from 'react'
import { ThemeProvider } from '@theme/theme-context'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
