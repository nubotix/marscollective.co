import styled from 'styled-components'
import { H3, H4 } from '../Typography'

export const Wrapper = styled.div`
  position: sticky;
  top: var(--halfMargin);
  /* remover */
  height: 450px;
  padding: var(--doubleGutter) 0;
`

export const Title = styled(H3)`
  text-align: left;
`

export const TitleItem = styled(H4)`
  text-align: left;
`
