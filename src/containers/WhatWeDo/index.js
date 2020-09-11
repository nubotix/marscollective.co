import React from 'react'

import weDesign from '../../images/weDesign.svg'
import weDevelop from '../../images/weDevelop.svg'
import weWrite from '../../images/weWrite.svg'
import weLocalize from '../../images/weLocalize.svg'
import * as S from './styled'
import { Container } from '../../components/Container'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const WhatWeDo = () => {
  const { t } = useTranslation()

  return (
    <Container id="what-we-do">
      <S.Wrapper>
        <h2 data-sal="slide-up">
          <Trans>What we do</Trans>
        </h2>
        <S.Itens>
          <S.Item data-sal="slide-up">
            <img src={weDesign} alt={t('We design')} />
            <S.TextWrapper>
              <h3>
                <Trans>We design</Trans>
              </h3>
              <p>
                <Trans>
                  Inspired by simplicity, we design elegant solutions in
                  branding, advertising and UI/UX, crafting the strong presence
                  your brand needs to make a difference.
                </Trans>
              </p>
            </S.TextWrapper>
          </S.Item>
          <S.Item data-sal="slide-up">
            <img src={weDevelop} alt={t('We develop')} />
            <S.TextWrapper>
              <h3>
                <Trans>We develop</Trans>
              </h3>
              <p>
                <Trans>
                  Your website on the first page. Using modern technologies, we
                  develop powerful websites optimized to your public and your
                  company needs.
                </Trans>
              </p>
            </S.TextWrapper>
          </S.Item>
          <S.Item data-sal="slide-up">
            <img src={weWrite} alt={t('We write')} />
            <S.TextWrapper>
              <h3>
                <Trans>We write</Trans>
              </h3>
              <p>
                <Trans>
                  Your company is what it does; your brand is what it speaks. We
                  craft strong, direct and compelling messages for all your
                  communication needs.
                </Trans>
              </p>
            </S.TextWrapper>
          </S.Item>
          <S.Item data-sal="slide-up">
            <img src={weLocalize} alt={t('We localize')} />
            <S.TextWrapper>
              <h3>
                <Trans>We localize</Trans>
              </h3>
              <p>
                <Trans>
                  Does your audience hablas español or fala português? We can
                  help you reach them. We do more than just a simple
                  translation: we adapt your tone to their native language.
                </Trans>
              </p>
            </S.TextWrapper>
          </S.Item>
        </S.Itens>
      </S.Wrapper>
    </Container>
  )
}

export default WhatWeDo
