import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '@components/avatar'
import Social from '@components/social'

const TeamMemberBio = ({ bio, image, name, social }) => (
  <div className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8 bg-gray rounded-3xl p-8 md:ml-20 md:mr-20 lg:ml-28 lg:mr-28">
    <Avatar image={image} alt={name} className="flex-1" />
    <div className="flex-1 space-y-4">
      <p className="lead">{name}</p>
      <p className="text-sm">{bio}</p>
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
