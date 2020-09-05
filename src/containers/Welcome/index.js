import React from 'react'
import Fade from 'react-reveal/Fade'
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
    <Container>
      <S.Wrapper>
        <img src={Image} alt="We are Mars" />
        <S.TextWrapper>
          <Fade top cascade>
            <H1>
              <Trans>We are</Trans>
              <Big>Mars</Big>
            </H1>
          </Fade>
          <Lead>
            <Trans>
              A collective of creative minds located in Brazil with an
              international mindset.
            </Trans>
          </Lead>
          <Fade bottom cascade>
            <S.ButtonsWrapper>
              <AnchorLink to="/#contact" alt={t('Get in touch')}>
                <Button>
                  <Trans>Get in touch</Trans>
                </Button>
              </AnchorLink>
              <AnchorLink to="/#our-work" alt={t('Our work')}>
                <ButtonGhost>
                  <Trans>Our work</Trans>
                </ButtonGhost>
              </AnchorLink>
            </S.ButtonsWrapper>
          </Fade>
        </S.TextWrapper>
      </S.Wrapper>
    </Container>
  )
}

export default Welcome
