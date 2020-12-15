import React from 'react'

const BlogItemBody = ({ html }) => (
  <div
    className="m-16"
    dangerouslySetInnerHTML={{
      __html: html
    }}
  />
)

export default BlogItemBody
