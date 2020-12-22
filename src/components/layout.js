import React from 'react'
import PropTypes from 'prop-types'

import Header from '@components/header'
import Footer from '@components/footer'
import '@theme/theme-base.css'
import 'typeface-baloo-2'
import 'typeface-rubik'

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
