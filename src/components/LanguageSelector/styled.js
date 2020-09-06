import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'

export const Item = styled.li`
  display: inline-flex;
  margin: 0 0.5rem 0 0;
  font-weight: 600;

  :last-child {
    margin: 0;
  }
`

export const ItemLink = styled(Link)`
  color: var(--default);
  text-decoration: none;

  :hover {
    color: var(--highLight);
  }

  &.active {
    color: var(--highLight);
  }
`
