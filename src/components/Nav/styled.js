import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrapper = styled.nav``

export const List = styled.ul`
  display: inline-flex;
  list-style: none;
  margin: 0;
`

export const Item = styled.li`
  margin: 0 2rem 0 0;
`

export const ItemLanguage = styled.li`
  margin: 0 0.5rem 0 0;

  &:last-child {
    margin: 0;
  }
`

export const LinkItem = styled(Link)`
  color: var(--default);
  font-weight: 600;
  text-decoration: none;
  border: none;

  :hover {
    color: var(--highLight);
  }

  :active {
    color: var(--highLight);
  }
`
