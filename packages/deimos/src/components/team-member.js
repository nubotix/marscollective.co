import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import tw from 'twin.macro'
import { H3, Lead } from './heading'

const TeamMember = ({ image, member, position }) => {
  return (
    <div css={[tw`grid gap-4 justify-items-center`]}>
      <Img fluid={image} css={[tw`w-40 h-40 rounded-full`]} />
      <div css={[tw`space-y-0`]}>
        <H3 mint center>
          {member}
        </H3>
        <Lead center>{position}</Lead>
      </div>
    </div>
  )
}

export default TeamMember

TeamMember.propTypes = {
  member: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}
