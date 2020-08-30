import styled from 'styled-components'
import { Copyleft } from '@styled-icons/remix-line/Copyleft'

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8rem 0 4rem;
`

export const CopyLeft = styled.div`
  font-weight: 600;
`

export const CopyleftIcon = styled(Copyleft)`
  width: 12px;
  margin-top: -2px;
`
