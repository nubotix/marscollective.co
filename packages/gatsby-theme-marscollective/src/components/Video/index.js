import React from 'react'

import * as S from './styled'

const Video = ({ videoID, videoTitle }) => (
  <S.Wrapper>
    <S.Iframe
      src={'https://www.youtube.com/embed/' + videoID}
      title={videoTitle}
      frameBorder="0"
    />
  </S.Wrapper>
)

export default Video
