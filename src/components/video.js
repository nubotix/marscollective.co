import React from 'react'

const Video = ({ videoID, videoTitle }) => (
  <div
    className="relative overflow-hidden w-full"
    style={{ paddingTop: '56.25%' }}
  >
    <iframe
      src={'https://www.youtube.com/embed/' + videoID}
      title={videoTitle}
      frameBorder="0"
      className="absolute inset-0 w-full h-full"
    />
  </div>
)

export default Video
