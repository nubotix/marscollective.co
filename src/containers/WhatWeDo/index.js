import React from 'react'

import weDesign from '../../images/weDesign.svg'
import weDevelop from '../../images/weDevelop.svg'
import weWrite from '../../images/weWrite.svg'
import weLocalize from '../../images/weLocalize.svg'
import * as S from './styled'
import { Container } from '../../components/Container'
import { H2, H3, P } from '../../components/Typography'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const WhatWeDo = () => {
  const { t } = useTranslation()

  return (
    <Container id="what-we-do">
      <S.Wrapper>
        <H2 data-sal="slide-up">
          <Trans>What we do</Trans>
        </H2>
        <S.Itens>
          <S.Item data-sal="slide-up">
            <img src={weDesign} alt={t('We design')} />
            <S.TextWrapper>
              <H3>
                <Trans>We design</Trans>
              </H3>
              <P>
                <Trans>
                  Inspired by simplicity, we design elegant solutions in
                  branding, advertising and UI/UX, crafting the strong presence
                  your brand needs to make a difference.
                </Trans>
              </P>
            </S.TextWrapper>
          </S.Item>
          <S.Item data-sal="slide-up">
            <img src={weDevelop} alt={t('We develop')} />
            <S.TextWrapper>
              <H3>
                <Trans>We develop</Trans>
              </H3>
              <P>
                <Trans>
                  Your website on the first page. Using modern technologies, we
                  develop powerful websites optimized to your public and your
                  company needs.
                </Trans>
              </P>
            </S.TextWrapper>
          </S.Item>
          <S.Item data-sal="slide-up">
            <img src={weWrite} alt={t('We write')} />
            <S.TextWrapper>
              <H3>
                <Trans>We write</Trans>
              </H3>
              <P>
                <Trans>
                  Your company is what it does; your brand is what it speaks. We
                  craft strong, direct and compelling messages for all your
                  communication needs.
                </Trans>
              </P>
            </S.TextWrapper>
          </S.Item>
          <S.Item data-sal="slide-up">
            <img src={weLocalize} alt={t('We localize')} />
            <S.TextWrapper>
              <H3>
                <Trans>We localize</Trans>
              </H3>
              <P>
                <Trans>
                  Does your audience hablas español or fala português? We can
                  help you reach them. We do more than just a simple
                  translation: we adapt your tone to their native language.
                </Trans>
              </P>
            </S.TextWrapper>
          </S.Item>
        </S.Itens>
      </S.Wrapper>
    </Container>
  )
}

export default WhatWeDo
