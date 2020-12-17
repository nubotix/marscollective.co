import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import tw from 'twin.macro'
import Container from '@components/container'
import { H2 } from '@components/heading'
import TeamMember from '@components/team-member'

const Team = ({ teamData }) => {
  const intl = useIntl()
  const title = {
    en: teamData.title.en,
    es: teamData.title.es,
    pt: teamData.title.pt
  }
  return (
    <Container>
      <div css={[tw`space-y-8`]}>
        <H2 center mint>
          {title[intl.formatMessage({ id: 'lang' })]}
        </H2>
        <div css={[tw`grid gap-8`]}>
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
                position={position[intl.formatMessage({ id: 'lang' })]}
                key={i}
              />
            )
          })}
        </div>
      </div>
    </Container>
  )
}

export default Team
