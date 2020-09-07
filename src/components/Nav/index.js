import React, { useState } from 'react'
import { Location } from '@reach/router'

import LanguageSelector from '../LanguageSelector'
import * as S from './styled'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Nav = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <Location>
      {({ location }) => (
        <nav>
          <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </S.StyledBurger>

          <S.List open={open} onClick={() => setOpen(!open)}>
            <S.ListItem>
              <S.ItemLink
                to={location.pathname + '#home'}
                alt={t('Home')}
                activeClassName="active"
              >
                <Trans>Home</Trans>
              </S.ItemLink>
            </S.ListItem>
            <S.ListItem>
              <S.ItemLink
                to={location.pathname + '#what-we-do'}
                alt={t('What we do')}
                activeClassName="active"
              >
                <Trans>What we do</Trans>
              </S.ItemLink>
            </S.ListItem>
            {/* <S.ListItem>
              <S.ItemLink
                to={location.pathname + '#our-work'}
                alt={t('Our work')}
                activeClassName="active"
              >
                <Trans>Our work</Trans>
              </S.ItemLink>
            </S.ListItem> */}
            <S.ListItem>
              <S.ItemLink
                to={location.pathname + '#who-we-are'}
                alt={t('Who we are')}
                activeClassName="active"
              >
                <Trans>Who we are</Trans>
              </S.ItemLink>
            </S.ListItem>
            {/* <S.ListItem>
          <S.ItemLink to={location.pathname + '#blog'} alt={t('Blog')} activeClassName="active">
            <Trans>Blog</Trans>
          </S.ItemLink>
        </S.ListItem> */}
            <S.ListItem>
              <S.ItemLink
                to={location.pathname + '#contact'}
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
      )}
    </Location>
  )
}

export default Nav
