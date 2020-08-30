import React from 'react'

import Logo from '../../images/logo.svg'
import Nav from '../Nav'
import * as S from './styled'

const Header = () => (
  <S.Wrapper>
    <img src={Logo} alt="Mars Collective" />
    <Nav />
  </S.Wrapper>
)

export default Header
