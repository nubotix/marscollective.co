import React from 'react'
import Headroom from 'react-headroom'
import Logo from '../../images/logo.svg'
import Nav from '../../components/Nav'

const Header = () => (
  <Headroom>
    <div className="container">
      <div
        className="flex justify-between items-center bg"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <Logo className="w-16 my-4" />
        <Nav />
      </div>
    </div>
  </Headroom>
)

export default Header
