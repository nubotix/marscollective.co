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
        <S.Img src={Logo} alt="Mars Collective" />
        <Nav />
      </S.Wrapper>
    </Container>
  </Headroom>
)

export default Header
