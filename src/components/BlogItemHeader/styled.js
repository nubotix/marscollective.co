import styled from 'styled-components'
import Img from 'gatsby-image'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: var(--doubleGutter);
`

export const Image = styled(Img)`
  border-radius: var(--doubleBorderRadius);
`

export const TitleWrapper = styled.div`
  align-self: center;
  padding: var(--doubleGutter) 0;
`

export const Title = styled.h1`
  font-size: 3.2rem;
  line-height: 1.1;
`

export const MetaWrapper = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 1rem;
  margin-top: var(--gutter);
`

export const Meta = styled.div`
  align-self: center;
`

export const Author = styled.h4`
  text-align: left;
`

export const Avatar = styled(Img)`
  max-width: 64px;
  max-height: 64px;
  border-radius: 50%;
`
