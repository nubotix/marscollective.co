import styled from 'styled-components'
import Img from 'gatsby-image'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: var(--gutter);
`

export const ImageWrapper = styled.div``

export const Image = styled(Img)`
  :nth-child(1) {
    border-radius: var(--doubleBorderRadius) var(--doubleBorderRadius) 0 0;
  }

  :last-child {
    border-radius: 0 0 var(--doubleBorderRadius) var(--doubleBorderRadius);
  }
`
