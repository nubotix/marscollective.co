import React from 'react'

import Logo from '../../images/logo.svg'
// import Nav from '../Nav'
import * as S from './styled'
import { Container } from '../../components/Container'

const Footer = () => (
  <Container>
    <S.Wrapper>
      <Logo />
      {/* <S.NavWrapper>
      <Nav />
    </S.NavWrapper> */}
      <S.CopyLeft>
        Mars Collective <S.CopyleftIcon /> 2020
      </S.CopyLeft>
    </S.Wrapper>
  </Container>
)

export default Footer
