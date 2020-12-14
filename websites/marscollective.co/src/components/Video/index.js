import React from 'react'

const Video = ({ videoID, videoTitle }) => (
  <div
    className="relative overflow-hidden w-full"
    style={{ paddingTop: '56.25%' }}
  >
    <iframe
      className="absolute inset-0 w-full h-full"
      src={'https://www.youtube.com/embed/' + videoID}
      title={videoTitle}
      frameBorder="0"
    />
  </div>
)

export default Video
