import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: grey;
`

export const TextWrapper = styled.section`
  display: grid;
  gap: 2rem;
  padding: 4rem 0;
`

export const Lead = styled.p`
  margin: 0;
`

export const ButtonsWrapper = styled.div`
  button {
    margin-right: 2rem;

    &:last-child {
      margin: 0;
    }
  }
`
