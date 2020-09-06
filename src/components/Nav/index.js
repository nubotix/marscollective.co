import React, { useState } from 'react'

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
        <S.ListItem>
          <S.ItemLink to="/#home" alt={t('Home')} activeClassName="active">
            <Trans>Home</Trans>
          </S.ItemLink>
        </S.ListItem>
        <S.ListItem>
          <S.ItemLink
            to="/#what-we-do"
            alt={t('What we do')}
            activeClassName="active"
          >
            <Trans>What we do</Trans>
          </S.ItemLink>
        </S.ListItem>
        <S.ListItem>
          <S.ItemLink
            to="/#our-work"
            alt={t('Our work')}
            activeClassName="active"
          >
            <Trans>Our work</Trans>
          </S.ItemLink>
        </S.ListItem>
        <S.ListItem>
          <S.ItemLink
            to="/#who-we-are"
            alt={t('Who we are')}
            activeClassName="active"
          >
            <Trans>Who we are</Trans>
          </S.ItemLink>
        </S.ListItem>
        {/* <S.ListItem>
          <S.ItemLink to="/#blog" alt={t('Blog')} activeClassName="active">
            <Trans>Blog</Trans>
          </S.ItemLink>
        </S.ListItem> */}
        <S.ListItem>
          <S.ItemLink
            to="/#contact"
            alt={t('Contact')}
            activeClassName="active"
          >
            <Trans>Contact</Trans>
          </S.ItemLink>
        </S.ListItem>
        <S.ListItem>
          <LanguageSelector />
        </S.ListItem>
      </S.List>
    </nav>
  )
}

export default Nav
