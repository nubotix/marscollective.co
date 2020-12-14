import styled from 'styled-components'
import Logo from '../../images/logo.svg'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--background);
`

export const LogoSVG = styled(Logo)`
  width: 64px;
  margin: var(--tinyMargin) 0;
`
