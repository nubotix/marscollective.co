import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby-plugin-intl'
import BackgroundImage from 'gatsby-background-image'
import tw from 'twin.macro'

const PostsItem = ({ date, image, slug, title }) => (
  <Link to={slug}>
    <BackgroundImage
      fluid={image.childImageSharp.fluid}
      css={[tw`relative h-96 rounded-3xl overflow-hidden`]}
      data-sal="slide-up"
    >
      <div
        css={[tw`h-full bg-black bg-opacity-10 bg-gradient-to-t from-black`]}
      >
        <div css={[tw`absolute p-8 bottom-0 w-full`]}>
          <h3
            css={[tw`text-white hover:text-mint mb-4 transition duration-500`]}
          >
            {title}
          </h3>
          <span css={[tw`text-white`]}>{date}</span>
        </div>
      </div>
    </BackgroundImage>
  </Link>
)

export default PostsItem

PostsItem.propTypes = {
  date: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
