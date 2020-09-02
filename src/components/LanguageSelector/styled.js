import styled from 'styled-components'

export const Wrapper = styled.div``

export const Item = styled.button`
  padding: 0;
  margin: 0 0.5rem 0 0;
  color: var(--default);
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  :hover {
    color: var(--highLight);
  }

  :last-child {
    margin: 0;
  }

  &.en:lang(en),
  &.es:lang(es),
  &.pt:lang(pt) {
    color: var(--highLight);
  }
`
