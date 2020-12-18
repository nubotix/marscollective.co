import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'
import { H3 } from '@components/heading'

const ServicesItem = ({ content, image, title }) => (
  <div css={[tw`grid gap-4 justify-items-center`]}>
    <img src={image} alt={title} css={[tw`w-40 h-40`]} />
    <div css={[tw`md:space-y-2`]}>
      <H3 center mint>
        {title}
      </H3>
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
