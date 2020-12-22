import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Avatar = ({ alt, image, small }) => (
  <Img
    fluid={image.childImageSharp.fluid}
    alt={alt}
    className={`rounded-full ${small ? `w-14 h-14` : `w-40 h-40`}`}
  />
)

export default Avatar

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  small: PropTypes.bool
}
