import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import Image from '../../images/welcome.svg'
import * as S from './styled'
import { translate } from '../../i18n/translate'

const Welcome = ({ t }) => (
  <S.Wrapper>
    <img src={Image} alt="We are Mars" />
    <S.TextWrapper>
      <h1>
        {t('welcome.weAre')} <span className="big">Mars</span>
      </h1>
      <p className="lead">{t('welcome.text')}</p>
      <S.ButtonsWrapper>
        <AnchorLink to="/#contact" alt={t('welcome.primaryButton')}>
          <button>{t('welcome.primaryButton')}</button>
        </AnchorLink>
        <AnchorLink to="/#our-work" alt={t('welcome.ghostButton')}>
          <button className="ghost">{t('welcome.ghostButton')}</button>
        </AnchorLink>
      </S.ButtonsWrapper>
    </S.TextWrapper>
  </S.Wrapper>
)

export default translate(Welcome)
