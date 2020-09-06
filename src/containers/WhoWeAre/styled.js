import styled from 'styled-components'
import Img from 'gatsby-image'

export const Wrapper = styled.section``

export const Itens = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--doubleGutter);

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.div`
  display: grid;
  gap: var(--gutter);
`

export const Image = styled(Img)`
  justify-self: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`

export const TextWrapper = styled.div``
