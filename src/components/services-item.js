import React from 'react'
import PropTypes from 'prop-types'

const ServicesItem = ({ children, content, title }) => (
  <div className="grid gap-4 justify-items-center" data-sal="fade">
    <div className="w-40 h-40">{children}</div>
    <div>
      <h3 className="center mint">{title}</h3>
      <p>{content}</p>
    </div>
  </div>
)

export default ServicesItem

ServicesItem.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
