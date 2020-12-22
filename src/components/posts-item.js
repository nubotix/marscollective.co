import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby-plugin-intl'
import BackgroundImage from 'gatsby-background-image'

const PostsItem = ({ date, image, slug, title }) => (
  <Link to={slug}>
    <BackgroundImage
      fluid={image.childImageSharp.fluid}
      className="relative h-96 rounded-3xl overflow-hidden"
      data-sal="fade"
    >
      <div className="h-full bg-black bg-opacity-10 bg-gradient-to-t from-black">
        <div className="absolute p-8 bottom-0 w-full">
          <h3 className="text-white hover:text-mint mb-4 transition duration-500">
            {title}
          </h3>
          <span className="text-white">{date}</span>
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
