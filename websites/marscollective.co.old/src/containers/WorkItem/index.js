import React from 'react'

import * as S from './styled'
import Video from '../../components/video'
import WorkItemDescription from '../../components/work-item-description'

const PortfolioItem = ({
  title,
  description,
  content,
  video,
  role,
  team,
  date
}) => (
  <div className="container">
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
      <S.DescriptionWrapper>
        <WorkItemDescription
          title={title}
          description={description}
          role={role}
          team={team}
          date={date}
        />
      </S.DescriptionWrapper>
    </S.Wrapper>
  </div>
)

export default PortfolioItem
