import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

export const Wrapper = styled.nav``

export const List = styled.ul`
  display: inline-flex;
  list-style: none;
  margin: 0;
`

export const Item = styled.li`
  margin: 0 2rem 0 0;
`

export const ItemLink = styled(AnchorLink)`
  color: var(--default);
  font-weight: 600;
  text-decoration: none;
  border: none;

  :hover {
    color: var(--highLight);
  }

  &.active {
    color: var(--highLight);
  }
`
