import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'
import { useIntl } from 'gatsby-plugin-intl'

import Container from '@components/container'
import TeamMember from '@components/team-member'

const Team = ({ teamData }) => {
  const intl = useIntl().formatMessage
  const title = {
    en: teamData.title.en,
    es: teamData.title.es,
    pt: teamData.title.pt
  }
  return (
    <Container data-sal="slide-up">
      <h2 className="center mint">{title[intl({ id: 'lang' })]}</h2>
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
