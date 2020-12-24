import React from 'react'
import PropTypes from 'prop-types'

import { Image } from '@components/image'
import Avatar from '@components/avatar'
import TeamMemberBio from '@components/team-member-bio'

const BlogItem = ({
  authorName,
  authorImage,
  authorBio,
  authorSocial,
  date,
  html,
  image,
  title
}) => (
  <article className="container">
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
          {authorImage && <Avatar image={authorImage} alt={authorName} small />}
          <div>
            <p className="lead">{authorName}</p>
            <span className="text-sm">{date}</span>
          </div>
        </div>
      </div>
      <div data-sal="slide-up" data-sal-delay="900">
        <Image src={image} className="h-96 rounded-3xl" />
      </div>
    </header>
    <main className="blog">{html}</main>
    <footer data-sal="slide-up">
      {authorBio && (
        <TeamMemberBio
          bio={authorBio}
          image={authorImage}
          name={authorName}
          social={authorSocial}
        />
      )}
    </footer>
  </article>
)

export default BlogItem

BlogItem.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorImage: PropTypes.object.isRequired,
  authorBio: PropTypes.string.isRequired,
  authorSocial: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  html: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}
