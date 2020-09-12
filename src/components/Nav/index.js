import React, { useState } from 'react'

import links from './content'
import { baseURL } from '../../utils'
import * as S from './styled'
import {
  injectIntl,
  IntlContextConsumer,
  changeLocale
} from 'gatsby-plugin-intl'

const Nav = ({ intl }) => {
  const [open, setOpen] = useState(false)
  const languageName = {
    en: '[en]',
    es: '[es]',
    pt: '[pt]'
  }

  return (
    <nav>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>

      <S.List open={open} onClick={() => setOpen(!open)}>
        {links.map((link, i) => {
          return (
            <S.ListItem key={i}>
              <S.ItemLink
                to={
                  `${baseURL[intl.formatMessage({ id: 'lang' })]}` +
                  `#${intl.formatMessage({ id: link.url })}`
                }
                alt={intl.formatMessage({ id: link.label })}
                activeClassName="active"
              >
                {intl.formatMessage({ id: link.label })}
              </S.ItemLink>
            </S.ListItem>
          )
        })}
        <S.ListItem>
          {/* <S.LanguageSelectorWrapper>
          <IntlContextConsumer>
            {languages.map(lng => (
              <S.LanguageSelectorItem key={lng}>
                <Link
                  to={originalPath}
                >
                  [{lng}]
                </Link>
              </S.LanguageSelectorItem>
            ))}
            </IntlContextConsumer>
          </S.LanguageSelectorWrapper> */}

          <S.LanguageSelectorWrapper>
            <IntlContextConsumer>
              {({ languages, language: currentLocale }) =>
                languages.map(language => (
                  <S.LanguageSelectorItem
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
                  </S.LanguageSelectorItem>
                ))
              }
            </IntlContextConsumer>
          </S.LanguageSelectorWrapper>
        </S.ListItem>
      </S.List>
    </nav>
  )
}

export default injectIntl(Nav)
