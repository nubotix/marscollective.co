import React from 'react'

import Logo from '../../images/logo.svg'
import Nav from '../Nav'
import * as S from './styled'

const Footer = () => (
  <S.Wrapper>
    <img src={Logo} alt="Mars Collective" />
    <Nav />
    <S.CopyLeft>
      Mars Collective <S.CopyleftIcon /> 2020
    </S.CopyLeft>
  </S.Wrapper>
)

export default Footer
