import React, { useState } from 'react'

import links from './content'
import * as S from './styled'
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next'

const Nav = () => {
  const { t } = useTranslation()
  const { languages, originalPath } = useI18next()
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>

      <S.List open={open} onClick={() => setOpen(!open)}>
        {links.map((link, i) => {
          const baseURL = {
            en: '/',
            es: '/es/',
            pt: '/pt/'
          }

          return (
            <S.ListItem key={i}>
              <S.ItemLink
                to={baseURL[t('Lang')] + link.url}
                alt={t(link.label)}
                activeClassName="active"
              >
                {t(link.label)}
              </S.ItemLink>
            </S.ListItem>
          )
        })}
        <S.ListItem>
          <S.LanguageSelectorWrapper>
            {languages.map(lng => (
              <S.LanguageSelectorItem key={lng}>
                <S.LanguageSelectorItemLink
                  to={originalPath}
                  language={lng}
                  activeClassName="active"
                >
                  [{lng}]
                </S.LanguageSelectorItemLink>
              </S.LanguageSelectorItem>
            ))}
          </S.LanguageSelectorWrapper>
        </S.ListItem>
      </S.List>
    </nav>
  )
}

export default Nav
