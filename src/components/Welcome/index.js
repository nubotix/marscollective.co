import React from 'react'

import Image from '../../images/welcome.svg'
import * as S from './styled'

const Welcome = () => (
  <S.Wrapper>
    <img src={Image} alt="We are Mars" />
    <S.TextWrapper>
      <h1>
        We are <span className="big">Mars</span>
      </h1>
      <p className="lead">
        A collective of creative minds located in Brazil with an international
        mindset.
      </p>
      <S.ButtonsWrapper>
        <button>Get in touch</button>
        <button className="ghost">See our work</button>
      </S.ButtonsWrapper>
    </S.TextWrapper>
  </S.Wrapper>
)

export default Welcome
