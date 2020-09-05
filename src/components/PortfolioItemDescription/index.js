import React from 'react'

import * as S from './styled'
import { P } from '../Typography'
import { HR } from '../HR'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const PortfolioItemDescription = ({ title, description, role, team, date }) => {
  const { t } = useTranslation()

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <P>{description}</P>

      <HR />

      <S.TitleItem>
        <Trans>Role</Trans>
      </S.TitleItem>
      <P>{role.map(roleItem => t(roleItem)).join(', ')}</P>

      <HR />

      <S.TitleItem>
        <Trans>Team</Trans>
      </S.TitleItem>
      <P>{team.join(', ')}</P>

      <HR />
      {date && (
        <>
          <S.TitleItem>
            <Trans>Finished date</Trans>
          </S.TitleItem>
          <P>{date}</P>
        </>
      )}
    </S.Wrapper>
  )
}

export default PortfolioItemDescription
