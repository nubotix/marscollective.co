import React from 'react'

import Team from '../../components/team'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

const WhoWeAre = () => {
  const intl = useIntl()

  return (
    <div className="container" id={intl.formatMessage({ id: 'nav.about.url' })}>
      <h2 data-sal="slide-up">
        <FormattedMessage id="about.title" />
      </h2>
      <Team />
    </div>
  )
}

export default WhoWeAre
