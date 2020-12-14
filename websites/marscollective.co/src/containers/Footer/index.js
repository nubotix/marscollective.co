import React from 'react'

import Nav from '../../components/Nav'
import * as S from './styled'

const Footer = () => (
  <div className="container">
    <S.Wrapper>
      <S.LogoSVG data-sal="slide-up" />
      <S.NavWrapper>
        <Nav data-sal="slide-up" />
      </S.NavWrapper>
      <S.CopyLeft data-sal="slide-up">
        Mars Collective <S.CopyleftIcon /> 2020
      </S.CopyLeft>
    </S.Wrapper>
  </div>
)

export default Footer
