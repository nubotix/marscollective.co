import React, { useState } from 'react'

import links from './content'
import LanguageSelector from '../LanguageSelector'
import * as S from './styled'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Nav = () => {
  const { t } = useTranslation()
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
                <Trans>{link.label}</Trans>
              </S.ItemLink>
            </S.ListItem>
          )
        })}
        <S.ListItem>
          <LanguageSelector />
        </S.ListItem>
      </S.List>
    </nav>
  )
}

export default Nav
