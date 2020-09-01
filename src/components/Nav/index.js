import React from 'react'

import * as S from './styled'
import { translate } from '../../i18n/translate'

const Nav = ({ t }) => (
  <S.Wrapper>
    <S.List>
      <S.Item>
        <S.LinkItem to="/#home" alt={t('nav.home')} activeClassName="active">
          {t('nav.home')}
        </S.LinkItem>
      </S.Item>

      <S.Item>
        <S.LinkItem
          to="/#what-we-do"
          alt={t('nav.whatWeDo')}
          activeClassName="active"
        >
          {t('nav.whatWeDo')}
        </S.LinkItem>
      </S.Item>

      <S.Item>
        <S.LinkItem
          to="/#our-work"
          alt={t('nav.ourWork')}
          activeClassName="active"
        >
          {t('nav.ourWork')}
        </S.LinkItem>
      </S.Item>

      <S.Item>
        <S.LinkItem
          to="/#who-we-are"
          alt={t('nav.whoWeAre')}
          activeClassName="active"
        >
          {t('nav.whoWeAre')}
        </S.LinkItem>
      </S.Item>

      <S.Item>
        <S.LinkItem to="/#blog" alt={t('nav.blog')} activeClassName="active">
          {t('nav.blog')}
        </S.LinkItem>
      </S.Item>

      <S.Item>
        <S.LinkItem
          to="/#contact"
          alt={t('nav.contact')}
          activeClassName="active"
        >
          {t('nav.contact')}
        </S.LinkItem>
      </S.Item>

      <S.ItemLanguage>
        <S.LinkItem to="" activeClassName="active">
          [en]
        </S.LinkItem>

        <S.LinkItem to="" activeClassName="active">
          [es]
        </S.LinkItem>

        <S.LinkItem to="" activeClassName="active">
          [pt]
        </S.LinkItem>
      </S.ItemLanguage>
    </S.List>
  </S.Wrapper>
)

export default translate(Nav)
