import React, { useState } from 'react'

import LanguageSelector from '../LanguageSelector'
import * as S from './styled'
import { translate } from '../../i18n/translate'

const Nav = ({ t }) => {
  const [open, setOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>

      <S.List open={open} onClick={() => setOpen(!open)}>
        <S.Item>
          <S.ItemLink to="/#home" alt={t('nav.home')} activeClassName="active">
            {t('nav.home')}
          </S.ItemLink>
        </S.Item>

        <S.Item>
          <S.ItemLink
            to="/#what-we-do"
            alt={t('nav.whatWeDo')}
            activeClassName="active"
          >
            {t('nav.whatWeDo')}
          </S.ItemLink>
        </S.Item>

        <S.Item>
          <S.ItemLink
            to="/#our-work"
            alt={t('nav.ourWork')}
            activeClassName="active"
          >
            {t('nav.ourWork')}
          </S.ItemLink>
        </S.Item>

        <S.Item>
          <S.ItemLink
            to="/#who-we-are"
            alt={t('nav.whoWeAre')}
            activeClassName="active"
          >
            {t('nav.whoWeAre')}
          </S.ItemLink>
        </S.Item>

        <S.Item>
          <S.ItemLink to="/#blog" alt={t('nav.blog')} activeClassName="active">
            {t('nav.blog')}
          </S.ItemLink>
        </S.Item>

        <S.Item>
          <S.ItemLink
            to="/#contact"
            alt={t('nav.contact')}
            activeClassName="active"
          >
            {t('nav.contact')}
          </S.ItemLink>
        </S.Item>

        <LanguageSelector />
      </S.List>
    </S.Wrapper>
  )
}

export default translate(Nav)
