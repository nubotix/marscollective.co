import React from 'react'
import Headroom from 'react-headroom'

import Logo from '../../images/logo.svg'
import Nav from '../../components/Nav'
import * as S from './styled'
import { ContainerNM as Container } from '../../components/Container'

const Header = () => (
  <Headroom style={{ overflow: 'hidden' }}>
    <Container>
      <S.Wrapper>
        <Logo />
        <Nav />
      </S.Wrapper>
    </Container>
  </Headroom>
)

export default Header
