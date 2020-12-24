import React from 'react'
import PropTypes from 'prop-types'

import Video from '@components/video'

const PortfolioItem = ({
  children,
  date,
  dateTitle,
  description,
  role,
  roleTitle,
  title,
  team,
  teamTitle,
  video
}) => (
  <article className="container grid gap-8 xl:gap-16 lg:grid-cols-6">
    <div className="lg:col-span-2">
      <div className="sticky top-16 divide-y space-y-4 lg:bg-gray lg:rounded-3xl lg:p-8">
        <div>
          <h1 className="text-4xl mb-4">{title}</h1>
          {description && <p>{description}</p>}
        </div>
        <div className="pt-4">
          <h2 className="text-lg mb-0">{roleTitle}</h2>
          <p>{role}</p>
        </div>
        <div className="pt-4">
          <h2 className="text-lg mb-0">{teamTitle}</h2>
          <p>{team}</p>
        </div>
        <div className="pt-4">
          <h2 className="text-lg mb-0">{dateTitle}</h2>
          <p>{date}</p>
        </div>
      </div>
    </div>
    <div className="lg:col-span-4">
      <div className="rounded-3xl overflow-hidden">
        {children}
        {video && <Video videoID={video} videoTitle={title} />}
      </div>
    </div>
  </article>
)

export default PortfolioItem

PortfolioItem.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  dateTitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  role: PropTypes.string.isRequired,
  roleTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  teamTitle: PropTypes.string.isRequired,
  video: PropTypes.string
}
