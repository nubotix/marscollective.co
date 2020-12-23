import React from 'react'

import TeamMember from '@components/team-member'
import TeamMemberBio from '@components/team-member-bio'

const TeamMemberPreview = ({ entry, getAsset }) => {
  const { bio, image, name, position, social } = entry.getIn(['data']).toJS()
  const lorem =
    'Lorem ipsum dolor sit. Quisque faucibus ex sapien. In id cursus mi. Tempus leo eu aenean. Pulvinar vivamus fringilla lacus. Iaculis massa nisl malesuada. Ut hendrerit semper vel. Ad litora torquent per.'

  const positionData = [
    { position: position?.en || 'Lorem ipsum' },
    { position: position?.es || 'Lorem ipsum' },
    { position: position?.pt || 'Lorem ipsum' }
  ]

  const bioData = [
    { bio: bio?.en || lorem },
    { bio: bio?.es || lorem },
    { bio: bio?.pt || lorem }
  ]

  return (
    <div className="container grid gap-16 light">
      <div className="grid gap-8 md:grid-cols-3 md:ml-20 md:mr-20 lg:ml-28 lg:mr-28">
        {positionData.map(({ position }, i) => (
          <TeamMember
            image={getAsset(image)}
            member={name}
            position={position}
            key={i}
          />
        ))}
      </div>
      <div className="grid gap-8">
        {bioData.map(({ bio }, i) => (
          <TeamMemberBio
            bio={bio}
            image={getAsset(image)}
            name={name}
            social={social}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default TeamMemberPreview
