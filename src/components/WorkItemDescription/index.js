import React from 'react'

import * as S from './styled'
import { P } from '../Typography'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const WorkItemDescription = ({ title, description, role, team, date }) => {
  const { t } = useTranslation()

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <P>{description}</P>

      <S.ItemWrapper>
        <S.TitleItem>
          <Trans>Role</Trans>
        </S.TitleItem>
        <P>{role.map(roleItem => t(roleItem)).join(', ')}</P>
      </S.ItemWrapper>

      <S.ItemWrapper>
        <S.TitleItem>
          <Trans>Team</Trans>
        </S.TitleItem>
        <P>{team.join(', ')}</P>
      </S.ItemWrapper>

      {date && (
        <S.ItemWrapper>
          <S.TitleItem>
            <Trans>Finished date</Trans>
          </S.TitleItem>
          <P>{date}</P>
        </S.ItemWrapper>
      )}
    </S.Wrapper>
  )
}

export default WorkItemDescription
