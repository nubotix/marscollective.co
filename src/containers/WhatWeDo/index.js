import React from 'react'
import Fade from 'react-reveal/Fade'

import weDesign from '../../images/weDesign.svg'
import weDevelop from '../../images/weDevelop.svg'
import weWrite from '../../images/weWrite.svg'
import weLocalize from '../../images/weLocalize.svg'
import * as S from './styled'
import { Container } from '../../components/Container'
import { H2, H3, P } from '../../components/Typography'
import { translate } from '../../i18n/translate'

const WhatWeDo = ({ t }) => (
  <Container id="what-we-do">
    <S.Wrapper>
      <Fade bottom>
        <H2>{t('whatWeDo.title')}</H2>
      </Fade>
      <S.Itens>
        <Fade bottom>
          <S.Item>
            <img src={weDesign} alt={t('whatWeDo.weDesign.title')} />
            <S.TextWrapper>
              <H3>{t('whatWeDo.weDesign.title')}</H3>
              <P>{t('whatWeDo.weDesign.text')}</P>
            </S.TextWrapper>
          </S.Item>
        </Fade>
        <Fade bottom>
          <S.Item>
            <img src={weDevelop} alt={t('whatWeDo.weDevelop.title')} />
            <S.TextWrapper>
              <H3>{t('whatWeDo.weDevelop.title')}</H3>
              <P>{t('whatWeDo.weDevelop.text')}</P>
            </S.TextWrapper>
          </S.Item>
        </Fade>
        <Fade bottom>
          <S.Item>
            <img src={weWrite} alt={t('whatWeDo.weWrite.title')} />
            <S.TextWrapper>
              <H3>{t('whatWeDo.weWrite.title')}</H3>
              <P>{t('whatWeDo.weWrite.text')}</P>
            </S.TextWrapper>
          </S.Item>
        </Fade>
        <Fade bottom>
          <S.Item>
            <img src={weLocalize} alt={t('whatWeDo.weLocalize.title')} />
            <S.TextWrapper>
              <H3>{t('whatWeDo.weLocalize.title')}</H3>
              <P>{t('whatWeDo.weLocalize.text')}</P>
            </S.TextWrapper>
          </S.Item>
        </Fade>
      </S.Itens>
    </S.Wrapper>
  </Container>
)

export default translate(WhatWeDo)
