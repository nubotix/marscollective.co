import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyles } from 'twin.macro'
import { Global } from '@emotion/react'

import ThemeBase from '@theme/theme-base'
import Header from '@components/header'
import Footer from '@components/footer'
import 'typeface-baloo-2'
import 'typeface-rubik'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Global styles={ThemeBase} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
