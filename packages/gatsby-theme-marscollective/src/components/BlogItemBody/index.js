import React from 'react'

import * as S from './styled'

const BlogItemBody = ({ html }) => (
  <S.Body
    dangerouslySetInnerHTML={{
      __html: html
    }}
  />
)

export default BlogItemBody
