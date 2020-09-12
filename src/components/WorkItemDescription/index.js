import React from 'react'

import * as S from './styled'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

const WorkItemDescription = ({ title, description, role, team, date }) => {
  const intl = useIntl()

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <p>{description}</p>

      <S.ItemWrapper>
        <S.TitleItem>
          <FormattedMessage id="portfolio.itemPage.role" />
        </S.TitleItem>
        <p>
          {role
            .map(roleItem => intl.formatMessage({ id: roleItem }))
            .join(', ')}
        </p>
      </S.ItemWrapper>

      <S.ItemWrapper>
        <S.TitleItem>
          <FormattedMessage id="portfolio.itemPage.team" />
        </S.TitleItem>
        <p>{team.join(', ')}</p>
      </S.ItemWrapper>

      {date && (
        <S.ItemWrapper>
          <S.TitleItem>
            <FormattedMessage id="portfolio.itemPage.finishedDate" />
          </S.TitleItem>
          <p>{date}</p>
        </S.ItemWrapper>
      )}
    </S.Wrapper>
  )
}

export default WorkItemDescription
