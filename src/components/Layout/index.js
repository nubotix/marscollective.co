import React from 'react'

// import Header from '../../containers/Header'
import Footer from '../../containers/Footer'
import GlobalStyles from './global'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {/* <Header id="home" /> */}
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
