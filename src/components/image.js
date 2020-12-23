import React from 'react'
import Img from 'gatsby-image'

export const Image = ({ alt, className, src }) =>
  !!src.childImageSharp ? (
    <Img fluid={src.childImageSharp.fluid} alt={alt} className={className} />
  ) : (
    <div className={`${className} overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        className="object-cover object-center w-full h-full"
      />
    </div>
  )
