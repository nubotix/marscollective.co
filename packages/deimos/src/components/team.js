import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'
import { useIntl } from 'gatsby-plugin-intl'

import Container from '@components/container'
import { H2 } from '@components/heading'
import TeamMember from '@components/team-member'

const Team = ({ teamData }) => {
  const intl = useIntl().formatMessage
  const title = {
    en: teamData.title.en,
    es: teamData.title.es,
    pt: teamData.title.pt
  }
  return (
    <Container>
      <H2 center mint data-sal="slide-up">
        {title[intl({ id: 'lang' })]}
      </H2>
      <div css={[tw`grid gap-8 sm:grid-cols-2 lg:(grid-cols-4 gap-10)`]}>
        {teamData.members.map((member, i) => {
          const position = {
            en: member.position.en,
            es: member.position.es,
            pt: member.position.pt
          }
          return (
            <TeamMember
              image={member.image.childImageSharp.fluid}
              member={member.name}
              position={position[intl({ id: 'lang' })]}
              key={i}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default Team

Team.propTypes = {
  teamData: PropTypes.object.isRequired
}
