import React from 'react'
import Img from 'gatsby-image'
import Social from './social'

const AuthorWrapper = ({ avatar, author, bio, socialLinks }) => (
  <div className="flex items-center space-x-8 p-16 rounded-3xl bg-gray">
    <Img fluid={avatar} className="w-40 h-40 rounded-full" />
    <div className="flex-1">
      <h4 className="text-left">{author}</h4>
      <p>{bio}</p>
      <Social socialLinks={socialLinks} />
    </div>
  </div>
)

export default AuthorWrapper
