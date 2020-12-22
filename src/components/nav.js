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
  // {
  //   label: 'nav.portfolio.label',
  //   url: 'nav.portfolio.url',
  //   anchor: true
  // },
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
  <div className="nav absolute bg-default z-10 transition lg:relative lg:bg-transparent lg:w-auto">
    <ul className="font-semibold list-none py-10 space-y-10 lg:inline-flex lg:py-0 lg:space-y-0 lg:space-x-8">
      {links.map(({ anchor, label, url }, i) => (
        <li key={i}>
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
        <ul className="flex space-x-4">
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
  </div>
)

export default injectIntl(Nav)
