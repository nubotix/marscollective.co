import React from 'react'

import Social from '../Social'
import ContactForm from '../ContactForm'
import * as S from './styled'

const Contact = () => (
  <S.Wrapper>
    <div>
      <S.Title>LET'S BUILD AMAZING THINGS TOGETHER</S.Title>
      <Social />
    <ContactForm />
  </S.Wrapper>
)

export default Contact
