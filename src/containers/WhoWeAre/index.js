import React from 'react'

import Team from '../../components/Team'
import { Container } from '../../components/Container'
import { injectIntl } from 'gatsby-plugin-intl'
import { Trans } from 'gatsby-plugin-react-i18next'

const WhoWeAre = ({ intl }) => (
  <Container id={intl.formatMessage({ id: 'nav.about.url' })}>
    <h2 data-sal="slide-up">
      <Trans>Who we are</Trans>
    </h2>
    <Team />
  </Container>
)

export default injectIntl(WhoWeAre)
