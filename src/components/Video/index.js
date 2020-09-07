import React from 'react'

import * as S from './styled'

const Video = ({ videoSrcURL, videoTitle }) => (
  <S.Wrapper>
    <S.Iframe src={videoSrcURL} title={videoTitle} frameBorder="0" />
  </S.Wrapper>
)

export default Video
