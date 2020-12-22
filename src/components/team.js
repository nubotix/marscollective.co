import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'

import TeamMember from '@components/team-member'

const Team = ({ id, teamData }) => {
  const intl = useIntl().formatMessage
  return (
    <section className="container" id={id}>
      <h2 className="center mint" data-sal="slide-up">
        {intl({ id: 'team.title' })}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
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
    </section>
  )
}

export default Team

Team.propTypes = {
  id: PropTypes.string.isRequired,
  teamData: PropTypes.array.isRequired
}
