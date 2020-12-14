import React from 'react'

import Team from '../../components/Team'
import { Container } from '../../components/Container'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

const WhoWeAre = () => {
  const intl = useIntl()

  return (
    <Container id={intl.formatMessage({ id: 'nav.about.url' })}>
      <h2 data-sal="slide-up">
        <FormattedMessage id="about.title" />
      </h2>
      <Team />
    </Container>
  )
}

export default WhoWeAre
