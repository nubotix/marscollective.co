import React from 'react'
import tw from 'twin.macro'
import Container from './container'
import { H2 } from './heading'
import TeamMember from './team-member'

const Wrapper = tw.div`space-y-8`
const AllTeam = tw.div`grid gap-8`

const Team = ({ teamData, title }) => (
  <Container>
    <Wrapper>
      <H2 center mint>
        {title}
      </H2>
      <AllTeam>
        {teamData.map((item, i) => (
          <TeamMember member={item.member} position={item.position} key={i} />
        ))}
      </AllTeam>
    </Wrapper>
  </Container>
)

export default Team
