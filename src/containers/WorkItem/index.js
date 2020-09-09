import React from 'react'

import * as S from './styled'
import { Container } from '../../components/Container'
import Video from '../../components/Video'
import WorkItemDescription from '../../components/WorkItemDescription'

const PortfolioItem = ({
  title,
  description,
  content,
  video,
  role,
  team,
  date
}) => (
  <Container>
    <S.Wrapper>
      <S.ImageWrapper>
        {content && (
          <>
            {content.map((contentItem, i) => (
              <S.Image key={i} fluid={contentItem.childImageSharp.fluid} />
            ))}
          </>
        )}
        {video && <Video videoID={video} videoTitle={title} />}
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
