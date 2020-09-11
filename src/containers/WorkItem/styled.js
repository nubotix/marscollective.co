import styled from 'styled-components'
import Img from 'gatsby-image'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: var(--gutter);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

export const ImageWrapper = styled.div`
  @media (max-width: 860px) {
    order: 1;
  }
`

export const Image = styled(Img)`
  :nth-child(1) {
    border-radius: var(--doubleBorderRadius) var(--doubleBorderRadius) 0 0;
  }

  :last-child {
    border-radius: 0 0 var(--doubleBorderRadius) var(--doubleBorderRadius);
  }
`

export const DescriptionWrapper = styled.div``
