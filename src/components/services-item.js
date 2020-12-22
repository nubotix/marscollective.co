import React from 'react'
import PropTypes from 'prop-types'

const ServicesItem = ({ content, image, title }) => (
  <div className="grid gap-4 justify-items-center" data-sal="slide-up">
    <img src={image} alt={title} className="w-40 h-40" />
    <div>
      <h3 className="center mint">{title}</h3>
      <p>{content}</p>
    </div>
  </div>
)

export default ServicesItem

ServicesItem.propTypes = {
  content: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string
}
