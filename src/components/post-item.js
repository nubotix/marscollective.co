import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Avatar from '@components/avatar'
import TeamMemberBio from '@components/team-member-bio'

const PostItem = ({
  authorName,
  authorImage,
  authorBio,
  authorSocial,
  date,
  html,
  image,
  title
}) => (
  <article>
    <header className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="space-y-8">
        <h1 data-sal="slide-up" data-sal-delay="300">
          {title}
        </h1>
        <div
          className="flex space-x-2"
          data-sal="slide-up"
          data-sal-delay="600"
        >
          <Avatar image={authorImage} alt={authorName} small />
          <div>
            <p className="lead">{authorName}</p>
            <span className="text-sm">{date}</span>
          </div>
        </div>
      </div>
      <div data-sal="slide-up" data-sal-delay="900">
        <Img fluid={image} className="h-96 rounded-3xl" />
      </div>
    </header>
    <main className="post">{html}</main>
    <footer data-sal="slide-up">
      <TeamMemberBio
        bio={authorBio}
        image={authorImage}
        name={authorName}
        social={authorSocial}
      />
    </footer>
  </article>
)

export default PostItem

PostItem.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorImage: PropTypes.object.isRequired,
  authorBio: PropTypes.string.isRequired,
  authorSocial: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  html: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}
