import React from 'react'

import weDesign from '../../images/weDesign.svg'
import weDevelop from '../../images/weDevelop.svg'
import weWrite from '../../images/weWrite.svg'
import weLocalize from '../../images/weLocalize.svg'
import * as S from './styled'
import { Container } from '../../components/Container'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

const WhatWeDo = () => {
  const intl = useIntl()

  return (
    <Container id={intl.formatMessage({ id: 'nav.services.url' })}>
      <S.Wrapper>
        <h2 data-sal="slide-up">
          <FormattedMessage id="services.title" />
        </h2>
        <S.Itens>
          <S.Item data-sal="slide-up">
            <img src={weDesign} alt={intl.formatMessage({ id: 'We design' })} />
            <S.TextWrapper>
              <h3>
                <FormattedMessage id="services.firstItem.title" />
              </h3>
              <p>
                <FormattedMessage id="services.firstItem.content" />
              </p>
            </S.TextWrapper>
          </S.Item>
          <S.Item data-sal="slide-up">
            <img
              src={weDevelop}
              alt={intl.formatMessage({ id: 'We develop' })}
            />
            <S.TextWrapper>
              <h3>
                <FormattedMessage id="services.secondItem.title" />
              </h3>
              <p>
                <FormattedMessage id="services.secondItem.content" />
              </p>
            </S.TextWrapper>
          </S.Item>
          <S.Item data-sal="slide-up">
            <img src={weWrite} alt={intl.formatMessage({ id: 'We write' })} />
            <S.TextWrapper>
              <h3>
                <FormattedMessage id="services.thirdItem.title" />
              </h3>
              <p>
                <FormattedMessage id="services.thirdItem.content" />
              </p>
            </S.TextWrapper>
          </S.Item>
          <S.Item data-sal="slide-up">
            <img
              src={weLocalize}
              alt={intl.formatMessage({ id: 'We localize' })}
            />
            <S.TextWrapper>
              <h3>
                <FormattedMessage id="services.fourthItem.title" />
              </h3>
              <p>
                <FormattedMessage id="services.fourthItem.content" />
              </p>
            </S.TextWrapper>
          </S.Item>
        </S.Itens>
      </S.Wrapper>
    </Container>
  )
}

export default WhatWeDo
