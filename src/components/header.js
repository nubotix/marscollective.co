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
    <header className="container" data-sal="slide-up" data-sal-delay="300">
      <div className="flex justify-between">
        <nav className="lg:flex lg:justify-between lg:w-full">
          <div className="flex">
            <button
              className="mr-4 -mt-1 outline-none focus:outline-none lg:hidden"
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
              <div className="w-16">
                <Logo />
              </div>
            </Link>
          </div>
          <div
            className={`transition lg:opacity-100 ${
              menuOpen ? `opacity-100` : `opacity-0`
            }`}
          >
            <Nav />
          </div>
        </nav>
        <div className="ml-8">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
