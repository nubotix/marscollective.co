import React from 'react'

import Social from '../Social'
import ContactForm from '../ContactForm'
import * as S from './styled'

const Contact = () => (
  <S.Wrapper>
    <S.TextWrapper>
      <S.Title>LET'S BUILD AMAZING THINGS TOGETHER</S.Title>
      <S.InfoWrapper>
        <S.MapIcon /> Rua Parque Antârtica, 329 <br /> Morumbi, Foz do Iguaçu -
        PR, Brazil
      </S.InfoWrapper>
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
)

export default Contact
