import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { Global } from '@emotion/react'
import Base from '../theme/base'
import 'typeface-baloo-2'
import 'typeface-rubik'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Global styles={Base} />
    <main>{children}</main>
  </>
)

export default Layout
