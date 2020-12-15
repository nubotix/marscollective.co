import React from 'react'
import Logo from '../../images/logo.svg'
import { RiCopyleftLine } from 'react-icons/ri'
import Nav from '../../components/Nav'

const Footer = () => (
  <div className="container">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <Logo data-sal="slide-up" />
      <div className="hidden lg:block">
        <Nav data-sal="slide-up" />
      </div>
      <div className="font-semibold" data-sal="slide-up">
        Mars Collective <RiCopyleftLine className="w-3" /> 2020
      </div>
    </div>
  </div>
)

export default Footer
