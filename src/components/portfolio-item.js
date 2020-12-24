import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'

import { Image } from '@components/image'
import Video from '@components/video'

const PortfolioItem = ({
  content,
  date,
  description,
  image,
  role,
  title,
  team,
  video
}) => {
  const intl = useIntl().formatMessage
  return (
    <article className="container grid gap-8 xl:gap-16 lg:grid-cols-6">
      <div className="lg:col-span-2">
        <div className="sticky top-16 divide-y space-y-4 lg:bg-gray lg:rounded-3xl lg:p-8">
          <div>
            <h1 className="text-4xl mb-4">{title}</h1>
            {description && <p>{description}</p>}
          </div>
          <div className="pt-4">
            <h2 className="text-lg mb-0">
              {intl({ id: 'portfolio.itemPage.role' })}
            </h2>
            <p>{role.map(roleItem => intl({ id: roleItem })).join(', ')}</p>
          </div>
          <div className="pt-4">
            <h2 className="text-lg mb-0">
              {intl({ id: 'portfolio.itemPage.team' })}
            </h2>
            <p>{team.join(', ')}</p>
          </div>
          <div className="pt-4">
            <h2 className="text-lg mb-0">
              {intl({ id: 'portfolio.itemPage.finishedDate' })}
            </h2>
            <p>{date}</p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4">
        <div className="rounded-3xl overflow-hidden">
          <Image src={image} alt={title} />
          {content &&
            content.map((contentItem, i) => (
              <Image src={contentItem} alt={title} key={i} />
            ))}
          {video && <Video videoID={video} videoTitle={title} />}
        </div>
      </div>
    </article>
  )
}

export default PortfolioItem

PortfolioItem.propTypes = {
  content: PropTypes.array,
  date: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
  role: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  team: PropTypes.array.isRequired,
  video: PropTypes.string
}
