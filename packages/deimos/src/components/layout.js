import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { Global } from '@emotion/react'
import Theme from '@theme'
import Header from '@components/header'
import Footer from '@components/footer'
import 'typeface-baloo-2'
import 'typeface-rubik'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Global styles={Theme} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
