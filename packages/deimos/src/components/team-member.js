import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'
import { H3, Lead } from './heading'

const Wrapper = tw.div`grid gap-4 justify-items-center`
const Image = tw.div`w-40 h-40 bg-red-600 rounded-full`
const Text = tw.div`space-y-0`

const TeamMember = ({ member, position }) => {
  return (
    <Wrapper>
      <Image />
      <Text>
        <H3 mint center>
          {member}
        </H3>
        <Lead center>{position}</Lead>
      </Text>
    </Wrapper>
  )
}

export default TeamMember

TeamMember.propTypes = {
  member: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}
