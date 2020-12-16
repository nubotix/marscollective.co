import React from 'react'
import PropTypes from 'prop-types'
import { H3, H4 } from './heading'
import 'twin.macro'

const TeamMember = ({ member, position }) => {
  return (
    <div tw="grid gap-8 justify-items-center">
      <div tw="w-40 h-40 bg-red-600 rounded-full" />
      <div>
        <H3 mint center tw="mb-4">
          {member}
        </H3>
        <H4 center>{position}</H4>
      </div>
    </div>
  )
}

export default TeamMember

TeamMember.propTypes = {
  member: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}
