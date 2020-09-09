import React from 'react'
import showdown from 'showdown'

import * as S from './styled'

const converter = new showdown.Converter()

const BlogItemBody = ({ html }) => (
  <S.Body
    dangerouslySetInnerHTML={{
      __html: converter.makeHtml(html)
    }}
  />
)

export default BlogItemBody
