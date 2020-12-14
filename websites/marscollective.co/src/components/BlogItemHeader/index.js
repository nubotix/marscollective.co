import React from 'react'
import Img from 'gatsby-image'

const BlogItemHeader = ({ image, title, avatar, author, date }) => (
  <div className="grid grid-cols-5 gap-16 items-center">
    <Img fluid={image} className="col-span-3 rounded-3xl" />
    <div className="col-span-2 py-16">
      <h1 className="text-5xl">{title}</h1>
      <div className="flex items-center space-x-4 mt-8">
        <Img fixed={avatar} className="flex-grow-0 w-16 h-16 rounded-full" />
        <div className="flex-grow">
          <h4 className="text-left">{author}</h4>
          {date}
        </div>
      </div>
    </div>
  </div>
)

export default BlogItemHeader
