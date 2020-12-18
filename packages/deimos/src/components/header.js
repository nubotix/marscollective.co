import React, { useState } from 'react'
import { Link } from 'gatsby'
import {
  injectIntl,
  IntlContextConsumer,
  changeLocale
} from 'gatsby-plugin-intl'
import { FiMenu } from 'react-icons/fi'
import tw, { css } from 'twin.macro'
import Container from '@components/container'
import Logo from '@components/logo'

const links = [
  {
    label: 'nav.home.label',
    url: 'nav.home.url'
  },
  {
    label: 'nav.services.label',
    url: 'nav.services.url'
  },
  {
    label: 'nav.portfolio.label',
    url: 'nav.portfolio.url'
  },
  {
    label: 'nav.about.label',
    url: 'nav.about.url'
  },
  {
    label: 'nav.blog.label',
    url: 'nav.blog.url'
  },
  {
    label: 'nav.contact.label',
    url: 'nav.contact.url'
  }
]

const baseURL = {
  en: '/en/',
  es: '/es/',
  pt: '/pt/'
}

const languageName = {
  en: '[en]',
  es: '[es]',
  pt: '[pt]'
}

const Header = ({ intl }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Container smaller>
      <header>
        <nav>
          <div css={[tw`lg:flex lg:justify-between`]}>
            <div css={[tw`flex`]}>
              <button
                css={[tw`mr-4 -mt-1 outline-none focus:outline-none lg:hidden`]}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FiMenu size={24} />
              </button>
              <Link to="/" alt="Home">
                <div css={[tw`w-16`]}>
                  <Logo />
                </div>
              </Link>
            </div>
            <ul
              css={[
                tw`bg-darker font-semibold hover:text-mint py-10 list-none space-y-10 lg:inline-flex lg:space-y-0 lg:space-x-8 lg:m-0 absolute lg:relative lg:opacity-100 transition duration-500`,
                menuOpen ? tw`opacity-100` : tw`opacity-0`,
                css({ width: 'calc(100% - 3rem)' })
              ]}
            >
              {links.map(({ label, url }, i) => (
                <li key={i}>
                  <Link
                    to={`${
                      baseURL[intl.formatMessage({ id: 'lang' })]
                    }#${intl.formatMessage({ id: url })}`}
                    alt={intl.formatMessage({ id: label })}
                  >
                    {intl.formatMessage({ id: label })}
                  </Link>
                </li>
              ))}
              <li>
                <ul css={[tw`flex space-x-6`]}>
                  <IntlContextConsumer>
                    {({ languages, language: currentLocale }) =>
                      languages.map(language => (
                        <li
                          key={language}
                          onClick={() => changeLocale(language)}
                          aria-hidden="true"
                          style={{
                            color:
                              currentLocale === language
                                ? `var(--highLight)`
                                : `var(--default)`
                          }}
                        >
                          {languageName[language]}
                        </li>
                      ))
                    }
                  </IntlContextConsumer>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Container>
  )
}

export default injectIntl(Header)
