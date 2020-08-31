import styled from 'styled-components'
import Headroom from 'react-headroom'

export const Wrapper = styled(Headroom)`
  margin: 4rem 0;

  .headroom--scrolled {
    img {
      width: 64px;
    }
  }
`

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  background: var(--background);
`
