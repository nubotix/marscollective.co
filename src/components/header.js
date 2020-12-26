import React, { useState } from 'react'
import { Link } from 'gatsby-plugin-intl'
import { FiMenu } from 'react-icons/fi'

import Logo from '@assets/logo'
import Nav from '@components/nav'
import ThemeToggle from '@theme/theme-toggle'
import useSiteMetadata from '@hooks/use-site-metadata'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header
      className="container flex justify-between items-center"
      data-sal="slide-up"
      data-sal-delay="300"
    >
      <nav className="lg:flex lg:justify-between lg:w-full">
        <div className="flex">
          <button
            className="mr-4 outline-none focus:outline-none lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <FiMenu size={24} />
          </button>
          <Link
            to="/"
            alt={useSiteMetadata().title}
            aria-label={useSiteMetadata().title}
          >
            <Logo className="w-16" />
          </Link>
        </div>
        <div
          className={`absolute inset-x-0 z-10 duration-1000 transform overflow-hidden ${
            menuOpen ? `top-32` : `-translate-y-full top-0`
          } lg:relative lg:translate-y-0 lg:top-0`}
        >
          <Nav />
        </div>
      </nav>
      <ThemeToggle />
    </header>
  )
}

export default Header
