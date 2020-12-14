import styled from 'styled-components'

export const Wrapper = styled.div`
  position: sticky;
  top: var(--halfMargin);
  padding: var(--doubleGutter) 0;

  @media (max-width: 860px) {
    position: unset;
    padding: 0;
  }
`

export const Title = styled.h3`
  text-align: left;
`

export const ItemWrapper = styled.div`
  padding: var(--halfGutter) 0;
  border-top: 2px solid var(--highLight);
`

export const TitleItem = styled.h3`
  text-align: left;
`
