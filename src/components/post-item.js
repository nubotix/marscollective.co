import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import tw from 'twin.macro'

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
    <header css={[tw`grid gap-8 lg:(grid-cols-2 items-center)`]}>
      <div css={[tw`space-y-8`]}>
        <h1 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
          {title}
        </h1>
        <div
          css={[tw`flex space-x-2`]}
          data-sal="slide-up"
          data-sal-delay="600"
          data-sal-easing="ease"
        >
          <Avatar image={authorImage} alt={authorName} small />
          <div>
            <p className="lead">{authorName}</p>
            <span css={[tw`text-sm`]}>{date}</span>
          </div>
        </div>
      </div>
      <div data-sal="slide-up" data-sal-delay="900" data-sal-easing="ease">
        <Img fluid={image} css={[tw`h-96 rounded-3xl`]} />
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
