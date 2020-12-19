import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'

import Avatar from '@components/avatar'

const TeamMember = ({ image, member, position }) => (
  <div css={[tw`grid gap-4 justify-items-center`]} data-sal="slide-up">
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
