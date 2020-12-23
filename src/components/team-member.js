import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '@components/avatar'

const TeamMember = ({ image, member, position }) => (
  <div className="flex flex-col space-y-4 items-center" data-sal="fade">
    <Avatar image={image} alt={member} />
    <div>
      <h3 className="mint center">{member}</h3>
      <p className="lead center">{position}</p>
    </div>
  </div>
)

export default TeamMember

TeamMember.propTypes = {
  image: PropTypes.object.isRequired,
  member: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}
