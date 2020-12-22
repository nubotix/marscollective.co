import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'
import { useIntl } from 'gatsby-plugin-intl'

import Container from '@components/container'
import TeamMember from '@components/team-member'

const Team = ({ id, teamData }) => {
  const intl = useIntl().formatMessage
  return (
    <Container id={id}>
      <h2 className="center mint" data-sal="slide-up">
        {intl({ id: 'team.title' })}
      </h2>
      <div css={[tw`grid gap-8 sm:grid-cols-2 lg:(grid-cols-4 gap-10)`]}>
        {teamData.map(({ node: { frontmatter } }, i) => {
          const position = {
            en: frontmatter.position.en,
            es: frontmatter.position.es,
            pt: frontmatter.position.pt
          }
          return (
            <TeamMember
              image={frontmatter.image}
              member={frontmatter.name}
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
  id: PropTypes.string.isRequired,
  teamData: PropTypes.array.isRequired
}
