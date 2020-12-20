import React, { useState } from 'react'
import { Link } from 'gatsby-plugin-intl'
import tw from 'twin.macro'
import { FiMenu } from 'react-icons/fi'

import Container from '@components/container'
import Logo from '@components/logo'
import Nav from '@components/nav'
import ThemeToggle from '@theme/theme-toggle'
import useSiteMetadata from '@hooks/use-site-metadata'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Container
      smaller
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <header css={[tw`flex justify-between`]}>
        <nav css={[tw`lg:(flex justify-between w-full)`]}>
          <div css={[tw`flex`]}>
            <button
              css={[tw`mr-4 -mt-1 outline-none focus:outline-none lg:hidden`]}
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
              <div css={[tw`w-16`]}>
                <Logo />
              </div>
            </Link>
          </div>
          <div
            css={[
              tw`transition lg:(opacity-100)`,
              menuOpen ? tw`opacity-100` : tw`opacity-0`
            ]}
          >
            <Nav />
          </div>
        </nav>
        <div css={[tw`ml-8`]}>
          <ThemeToggle />
        </div>
      </header>
    </Container>
  )
}

export default Header
