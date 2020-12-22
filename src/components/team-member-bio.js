import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'

import Avatar from '@components/avatar'
import Social from '@components/social'

const TeamMemberBio = ({ bio, image, name, social }) => (
  <div
    css={[
      tw`flex flex-col items-center space-y-8 sm:(flex-row space-y-0 space-x-8) bg-gray rounded-3xl p-8 md:(ml-20 mr-20) lg:(ml-28 mr-28)`
    ]}
  >
    <Avatar image={image} alt={name} css={[tw`flex-1`]} />
    <div css={[tw`flex-1 space-y-4`]}>
      <p className="lead">{name}</p>
      <p css={[tw`text-sm`]}>{bio}</p>
      <Social socialData={social} />
    </div>
  </div>
)

export default TeamMemberBio

TeamMemberBio.propTypes = {
  bio: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  social: PropTypes.array.isRequired
}
