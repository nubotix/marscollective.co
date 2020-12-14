import React from 'react'
import Headroom from 'react-headroom'

import Nav from '../../components/Nav'
import * as S from './styled'

const Header = () => (
  <Headroom>
    <div className="container">
      <S.Wrapper
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <S.LogoSVG />
        <Nav />
      </S.Wrapper>
    </div>
  </Headroom>
)

export default Header
