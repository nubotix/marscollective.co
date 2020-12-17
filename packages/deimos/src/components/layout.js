import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { Global } from '@emotion/react'
import Theme from '@theme'
import 'typeface-baloo-2'
import 'typeface-rubik'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Global styles={Theme} />
    <main>{children}</main>
  </>
)

export default Layout
