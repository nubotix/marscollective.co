import React from 'react'
import { AnchorLink as Link } from 'gatsby-plugin-anchor-links'
import {
  injectIntl,
  IntlContextConsumer,
  changeLocale
} from 'gatsby-plugin-intl'

const links = [
  {
    label: 'nav.home.label',
    url: '', // Link to home
    anchor: false
  },
  {
    label: 'nav.services.label',
    url: 'nav.services.url',
    anchor: true
  },
  {
    label: 'nav.portfolio.label',
    url: 'nav.portfolio.url',
    anchor: true
  },
  {
    label: 'nav.about.label',
    url: 'nav.about.url',
    anchor: true
  },
  {
    label: 'nav.blog.label',
    url: 'nav.blog.url',
    anchor: true
  },
  {
    label: 'nav.contact.label',
    url: 'nav.contact.url',
    anchor: true
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

const Nav = ({ intl }) => (
  <ul className="bg-default p-6 space-y-8 font-semibold md:space-y-12 md:py-20 lg:bg-transparent lg:p-0 lg:space-y-0 lg:space-x-8  lg:flex">
    {links.map(({ anchor, label, url }, i) => (
      <li className="md:text-center" key={i}>
        <Link
          to={`${baseURL[intl.formatMessage({ id: 'lang' })]}${
            anchor ? '#' : ''
          }${url && intl.formatMessage({ id: url })}`}
          alt={intl.formatMessage({ id: label })}
          className="text-default hover:text-mint"
        >
          {intl.formatMessage({ id: label })}
        </Link>
      </li>
    ))}
    <li>
      <ul className="flex space-x-4 md:justify-center md:space-x-6 lg:space-x-4">
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) =>
            languages.map(language => (
              <li
                key={language}
                onClick={() => changeLocale(language)}
                aria-hidden="true"
                className={`hover:text-mint duration-500 cursor-pointer ${
                  currentLocale === language ? `text-mint` : `text-default`
                }`}
              >
                {languageName[language]}
              </li>
            ))
          }
        </IntlContextConsumer>
      </ul>
    </li>
  </ul>
)

export default injectIntl(Nav)
