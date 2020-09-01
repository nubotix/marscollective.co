import React from 'react'

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
        <button>{t('welcome.primaryButton')}</button>
        <button className="ghost">{t('welcome.ghostButton')}</button>
      </S.ButtonsWrapper>
    </S.TextWrapper>
  </S.Wrapper>
)

export default translate(Welcome)
