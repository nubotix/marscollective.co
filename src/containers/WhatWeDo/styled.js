import styled from 'styled-components'

export const Wrapper = styled.section``

export const Itens = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.div`
  display: grid;
  align-content: start;
  gap: 2rem;

  img {
    justify-self: center;
    max-width: 60%;
  }
`

export const TextWrapper = styled.div``
