import React from 'react'

import Social from '../Social'
import * as S from './styled'

const AuthorWrapper = ({ avatar, author, bio, socialLinks }) => (
  <S.Wrapper>
    <S.Image fixed={avatar} />
    <S.TextWrapper>
      <S.Author>{author}</S.Author>
      <p>{bio}</p>
      <Social socialLinks={socialLinks} />
    </S.TextWrapper>
  </S.Wrapper>
)

export default AuthorWrapper
