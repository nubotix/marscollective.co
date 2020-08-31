import React from 'react'

import Logo from '../../images/logo.svg'
import Nav from '../Nav'
import * as S from './styled'

const Header = () => (
  <S.Wrapper pinStart={300}>
    <S.NavBar>
      <img src={Logo} alt="Mars Collective" />
      <Nav />
    </S.NavBar>
  </S.Wrapper>
)

export default Header
