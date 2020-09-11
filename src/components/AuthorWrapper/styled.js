import styled from 'styled-components'
import Img from 'gatsby-image'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: var(--gutter);
  padding: var(--doubleGutter);
  border-radius: var(--doubleBorderRadius);
  background: var(--backgroundGray);
`

export const Image = styled(Img)`
  width: 160px;
  height: 160px;
  background: red;
  border-radius: 50%;
`

export const TextWrapper = styled.div``

export const Author = styled.h4`
  text-align: left;
`
