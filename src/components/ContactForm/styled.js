import styled from 'styled-components'
import { H3 } from '../Typography'

export const Wrapper = styled.div`
  border-radius: 2rem;
  padding: 2rem;
  background: var(--backgroundMedium);
`

export const Title = styled(H3)`
  color: var(--default);
  text-align: left;
  margin-bottom: var(--gutter);
`
