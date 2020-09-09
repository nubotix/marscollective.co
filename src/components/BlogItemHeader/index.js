import React from 'react'

import * as S from './styled'

const BlogItemHeader = ({ image, title, avatar, author, date }) => (
  <S.Wrapper>
    <S.Image fluid={image} />
    <S.TitleWrapper>
      <S.Title>{title}</S.Title>
      <S.MetaWrapper>
        <S.Avatar fixed={avatar} />
        <S.Meta>
          <S.Author>{author}</S.Author>
          {date}
        </S.Meta>
      </S.MetaWrapper>
    </S.TitleWrapper>
  </S.Wrapper>
)

export default BlogItemHeader
