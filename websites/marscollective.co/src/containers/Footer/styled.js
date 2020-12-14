import styled from 'styled-components'
import Logo from '../../images/logo.svg'
import { RiCopyleftLine } from 'react-icons/ri'

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 460px) {
    flex-direction: column;
  }
`

export const LogoSVG = styled(Logo)`
  @media (max-width: 460px) {
    height: 48px;
    margin-bottom: var(--gutter);
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

export const CopyleftIcon = styled(RiCopyleftLine)`
  width: 12px;
  margin-top: -2px;
`
