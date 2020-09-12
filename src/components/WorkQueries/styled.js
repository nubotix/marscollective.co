import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'
import Img from 'gatsby-image'

export const LinkItem = styled(Link)`
  :nth-child(1),
  :nth-child(4) {
    grid-column: span 2;
  }
`

export const Image = styled(Img)`
  height: 280px;
  border-radius: var(--borderRadius);
`
