import React from 'react'

import ContactForm from '../ContactForm'
import * as S from './styled'

const Contact = () => (
  <S.Wrapper>
    <div>
      <S.Title>LET'S BUILD AMAZING THINGS TOGETHER</S.Title>
      <p>
        Rua Parque Antârtica, 329 <br /> Morumbi, Foz do Iguaçu - PR, Brazil
      </p>
      <p>hia@marscollective.co</p>
      <p>+55 (45) 99132-8593</p>
    </div>
    <ContactForm />
  </S.Wrapper>
)

export default Contact
