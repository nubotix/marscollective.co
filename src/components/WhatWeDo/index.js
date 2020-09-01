import React from 'react'

import weDesign from '../../images/weDesign.svg'
import weDevelop from '../../images/weDevelop.svg'
import weWrite from '../../images/weWrite.svg'
import weLocalize from '../../images/weLocalize.svg'
import * as S from './styled'
import { translate } from '../../i18n/translate'

const WhatWeDo = ({ t }) => (
  <S.Wrapper id="what-we-do">
    <h2>{t('whatWeDo.title')}</h2>
    <S.Itens>
      <S.Item>
        <img src={weDesign} alt={t('whatWeDo.weDesign.title')} />
        <S.TextWrapper>
          <h3>{t('whatWeDo.weDesign.title')}</h3>
          <p>{t('whatWeDo.weDesign.text')}</p>
        </S.TextWrapper>
      </S.Item>
      <S.Item>
        <img src={weDevelop} alt={t('whatWeDo.weDevelop.title')} />
        <S.TextWrapper>
          <h3>{t('whatWeDo.weDevelop.title')}</h3>
          <p>{t('whatWeDo.weDevelop.text')}</p>
        </S.TextWrapper>
      </S.Item>
      <S.Item>
        <img src={weWrite} alt={t('whatWeDo.weWrite.title')} />
        <S.TextWrapper>
          <h3>{t('whatWeDo.weWrite.title')}</h3>
          <p>{t('whatWeDo.weWrite.text')}</p>
        </S.TextWrapper>
      </S.Item>
      <S.Item>
        <img src={weLocalize} alt={t('whatWeDo.weLocalize.title')} />
        <S.TextWrapper>
          <h3>{t('whatWeDo.weLocalize.title')}</h3>
          <p>{t('whatWeDo.weLocalize.text')}</p>
        </S.TextWrapper>
      </S.Item>
    </S.Itens>
  </S.Wrapper>
)

export default translate(WhatWeDo)
