import React from 'react'

import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

const WorkItemDescription = ({ title, description, role, team, date }) => {
  const intl = useIntl()

  return (
    <div className="relative md:sticky top-16 md:py-16">
      <h3 className="text-left">{title}</h3>
      <p>{description}</p>

      <div className="border-t-2">
        <h3 className="text-left">
          <FormattedMessage id="portfolio.itemPage.role" />
        </h3>
        <p>
          {role
            .map(roleItem => intl.formatMessage({ id: roleItem }))
            .join(', ')}
        </p>
      </div>

      <div className="border-t-2">
        <h3 className="text-left">
          <FormattedMessage id="portfolio.itemPage.team" />
        </h3>
        <p>{team.join(', ')}</p>
      </div>

      {date && (
        <div className="border-t-2">
          <h3 className="text-left">
            <FormattedMessage id="portfolio.itemPage.finishedDate" />
          </h3>
          <p>{date}</p>
        </div>
      )}
    </div>
  )
}

export default WorkItemDescription
