import styled from 'styled-components'
import Img from 'gatsby-image'

export const Wrapper = styled.section`
  margin: 8rem 0;
`

export const Itens = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`

export const Item = styled.div`
  display: grid;
  gap: 2rem;
`

export const Image = styled(Img)`
  justify-self: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`

export const TextWrapper = styled.div``
