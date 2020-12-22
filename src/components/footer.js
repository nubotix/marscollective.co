import React from 'react'
import { RiCopyleftLine } from 'react-icons/ri'

import Logo from '@components/logo'
import Nav from '@components/nav'

const Footer = () => (
  <section className="container">
    <footer
      className="grid gap-4 justify-items-center lg:flex lg:justify-between lg:items-center"
      data-sal="slide-up"
    >
      <div className="w-28">
        <Logo />
      </div>
      <div className="hidden xl:block">
        <Nav />
      </div>
      <span className="flex items-center font-semibold">
        Mars Collective <RiCopyleftLine size={12} className="mx-1" />
        {new Date().getFullYear()}
      </span>
    </footer>
  </section>
)

export default Footer
