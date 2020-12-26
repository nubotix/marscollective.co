import React from 'react'
import { RiCopyleftLine } from 'react-icons/ri'

import Logo from '@assets/logo'
import Nav from '@components/nav'

const Footer = () => (
  <footer
    className="container grid gap-4 justify-items-center lg:flex lg:justify-between lg:items-center"
    data-sal="fade"
  >
    <Logo className="w-16" />
    <div className="hidden xl:block">
      <Nav />
    </div>
    <span className="flex items-center font-semibold">
      Mars Collective <RiCopyleftLine size={12} className="mx-1" />
      {new Date().getFullYear()}
    </span>
  </footer>
)

export default Footer
