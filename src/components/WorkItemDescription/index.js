import React from 'react'

import * as S from './styled'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const WorkItemDescription = ({ title, description, role, team, date }) => {
  const { t } = useTranslation()

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <p>{description}</p>

      <S.ItemWrapper>
        <S.TitleItem>
          <Trans>Role</Trans>
        </S.TitleItem>
        <p>{role.map(roleItem => t(roleItem)).join(', ')}</p>
      </S.ItemWrapper>

      <S.ItemWrapper>
        <S.TitleItem>
          <Trans>Team</Trans>
        </S.TitleItem>
        <p>{team.join(', ')}</p>
      </S.ItemWrapper>

      {date && (
        <S.ItemWrapper>
          <S.TitleItem>
            <Trans>Finished date</Trans>
          </S.TitleItem>
          <p>{date}</p>
        </S.ItemWrapper>
      )}
    </S.Wrapper>
  )
}

export default WorkItemDescription
