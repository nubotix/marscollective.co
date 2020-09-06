import React from 'react'

import * as S from './styled'
import { Container } from '../../components/Container'
import WorkItemDescription from '../../components/WorkItemDescription'

const PortfolioItem = ({ title, description, content, role, team, date }) => (
  <Container>
    <S.Wrapper>
      <S.ImageWrapper>
        {content.map((contentItem, i) => (
          <S.Image key={i} fluid={contentItem.childImageSharp.fluid} />
        ))}
      </S.ImageWrapper>
      <WorkItemDescription
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
