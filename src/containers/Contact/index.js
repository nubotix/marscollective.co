import React from 'react'

import Social from '../../components/Social'
import ContactForm from '../../components/ContactForm'
import * as S from './styled'
import { Container } from '../../components/Container'
import { Trans } from 'gatsby-plugin-react-i18next'

const Contact = () => (
  <Container id="contact">
    <S.Wrapper>
      <S.TextWrapper>
        <S.Title>
          <Trans>Let's build amazing things together</Trans>
        </S.Title>
        {/* <S.InfoWrapper>
        <S.MapIcon /> Rua Parque Antârtica, 329 <br /> Morumbi, Foz do Iguaçu -
        PR, Brazil
      </S.InfoWrapper> */}
        <S.InfoWrapper>
          <S.EnvelopeIcon /> hi@marscollective.co
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.PhoneIcon /> +55 (45) 99132-8593
        </S.InfoWrapper>
        <Social />
      </S.TextWrapper>
      <ContactForm />
    </S.Wrapper>
  </Container>
)

export default Contact
