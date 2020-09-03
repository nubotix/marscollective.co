import styled from 'styled-components'
import { Copyleft } from '@styled-icons/remix-line/Copyleft'

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8rem 0 4rem;

  @media (max-width: 960px) {
    margin: 4rem 0 2rem;
  }

  @media (max-width: 460px) {
    flex-direction: column;

    img {
      height: 48px;
      margin-bottom: 2rem;
    }
  }
`

export const NavWrapper = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`

export const CopyLeft = styled.div`
  font-weight: 600;
`

export const CopyleftIcon = styled(Copyleft)`
  width: 12px;
  margin-top: -2px;
`
