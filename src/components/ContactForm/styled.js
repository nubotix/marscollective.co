import styled from 'styled-components'
import { H3 } from '../Typography'

export const Wrapper = styled.div`
  border-radius: var(--doubleBorderRadius);
  padding: var(--gutter);
  background: var(--backgroundGreen);
`

export const Title = styled(H3)`
  color: var(--default);
  text-align: left;
  margin-bottom: var(--gutter);
`

export const Form = styled.form`
  display: grid;
  gap: var(--gutter);
`

export const SubmitWrapper = styled.div`
  display: flex;
`

export const Alert = styled.span`
  flex: 1;
  margin-right: var(--gutter);
`
