import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--background);

  @media (max-width: 1200px) {
    flex-direction: row-reverse;
  }
`

export const Img = styled.img`
  width: 64px;
  margin: calc(var(--halfMargin) / 2) 0;
`
