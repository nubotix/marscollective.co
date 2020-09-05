import React from 'react'
import Img from 'gatsby-image'

import * as S from './styled'
import { Container } from '../../components/Container'
import PortfolioItemDescription from '../../components/PortfolioItemDescription'

const PortfolioItem = ({ title, description, content, role, team, date }) => (
  <Container>
    <S.Wrapper>
      <div>
        {content.map((contentItem, i) => (
          <Img key={i} fluid={contentItem.childImageSharp.fluid} />
        ))}
      </div>
      <PortfolioItemDescription
        title={title}
        description={description}
        role={role}
        team={team}
        date={date}
      />
    </S.Wrapper>
  </Container>
)

export default PortfolioItem
