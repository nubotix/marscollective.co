import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import Image from '../../images/welcome.svg'
import * as S from './styled'
import { Container } from '../../components/Container'
import { H1, Big, Lead } from '../../components/Typography'
import { Button, ButtonGhost } from '../../components/Buttons'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Welcome = () => {
  const { t } = useTranslation()

  return (
    <Container id="home">
      <S.Wrapper>
        <img
          src={Image}
          alt="We are Mars"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
        />
        <S.TextWrapper>
          <H1 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            <Trans>We are</Trans>
            <Big
              data-sal="slide-up"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              Mars
            </Big>
          </H1>
          <Lead data-sal="slide-up" data-sal-delay="900" data-sal-easing="ease">
            <Trans>
              A collective of creative minds located in Brazil with an
              international mindset.
            </Trans>
          </Lead>
          <S.ButtonsWrapper
            data-sal="slide-up"
            data-sal-delay="1200"
            data-sal-easing="ease"
          >
            <AnchorLink to="/#contact" alt={t('Get in touch')}>
              <Button>
                <Trans>Get in touch</Trans>
              </Button>
            </AnchorLink>
            {/* <AnchorLink to="/#our-work" alt={t('Our work')}>
              <ButtonGhost>
                <Trans>Our work</Trans>
              </ButtonGhost>
            </AnchorLink> */}
          </S.ButtonsWrapper>
        </S.TextWrapper>
      </S.Wrapper>
    </Container>
  )
}

export default Welcome
