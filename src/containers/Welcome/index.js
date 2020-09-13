import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import Image from '../../images/welcome.svg'
import * as S from './styled'
import { Container } from '../../components/Container'
// import { Button, ButtonGhost } from '../../components/Buttons'
import { Button } from '../../components/Buttons'
import { baseURL } from '../../utils'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

const Welcome = () => {
  const intl = useIntl()

  return (
    <Container id={intl.formatMessage({ id: 'nav.home.url' })}>
      <S.Wrapper>
        <img
          src={Image}
          alt="We are Mars"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
        />
        <S.TextWrapper>
          <h1 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            <FormattedMessage id="welcome.title" />
            <S.Big
              data-sal="slide-up"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              Mars
            </S.Big>
          </h1>
          <S.Lead
            data-sal="slide-up"
            data-sal-delay="900"
            data-sal-easing="ease"
          >
            <FormattedMessage id="welcome.lead" />
          </S.Lead>
          <S.ButtonsWrapper
            data-sal="slide-up"
            data-sal-delay="900"
            data-sal-easing="ease"
          >
            <AnchorLink
              to={
                baseURL[intl.formatMessage({ id: 'lang' })] +
                intl.formatMessage({ id: 'welcome.primaryButton.url' })
              }
              alt={intl.formatMessage({ id: 'welcome.primaryButton.label' })}
            >
              <Button>
                <FormattedMessage id="welcome.primaryButton.label" />
              </Button>
            </AnchorLink>
            {/* <AnchorLink
              to={
                baseURL[intl.formatMessage({ id: 'lang' })] +
                intl.formatMessage({ id: 'welcome.ghostButton.url' })
              }
              alt={intl.formatMessage({ id: 'welcome.ghostButton.url' })}
            >
              <ButtonGhost>
                <FormattedMessage id="welcome.ghostButton.label" />
              </ButtonGhost>
            </AnchorLink> */}
          </S.ButtonsWrapper>
        </S.TextWrapper>
      </S.Wrapper>
    </Container>
  )
}

export default Welcome
