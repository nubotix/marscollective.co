import styled from 'styled-components'

export const Wrapper = styled.ul`
  display: flex;
  /* justify-content: space-between; */
  margin: 0;
  list-style: none;
`

export const Item = styled.li`
  margin-right: 1rem;

  &:last-child {
    margin: 0;
  }
`

export const ItemLink = styled.a`
  color: var(--default);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highLight);
  }
`

export const IconWrapper = styled.div`
  width: 24px;
`
