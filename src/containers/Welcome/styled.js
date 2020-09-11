import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 30rem;
  gap: 5rem;

  img {
    align-self: center;

    @media (max-width: 960px) {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const TextWrapper = styled.section`
  display: grid;
  align-content: center;
  gap: 2rem;

  @media (max-width: 960px) {
    text-align: center;
  }
`

export const Big = styled.span`
  display: block;
  font-size: 8.75rem;
  color: var(--highLight);

  @media (max-width: 1200px) {
    font-size: 7rem;
  }
`

export const Lead = styled.p`
  font-size: 1.5rem;
  margin: -1rem 0 0 0;
`

export const ButtonsWrapper = styled.div`
  a {
    margin-right: 2rem;

    &:last-child {
      margin: 0;
    }
  }
`
