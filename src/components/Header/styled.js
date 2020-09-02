import styled from 'styled-components'
import Headroom from 'react-headroom'

export const Wrapper = styled(Headroom)`
  .headroom--scrolled {
    img {
      width: 64px;
      margin: 1rem 0;
    }
  }
`

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  background: var(--background);

  img {
    height: 60px;
    margin: 4rem 0;
  }
`
