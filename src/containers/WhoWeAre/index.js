import React from 'react'

import Team from '../../components/Team'
import { Container } from '../../components/Container'
import { Trans } from 'gatsby-plugin-react-i18next'

const WhoWeAre = () => (
  <Container id="who-we-are">
    <h2 data-sal="slide-up">
      <Trans>Who we are</Trans>
    </h2>
    <Team />
  </Container>
)

export default WhoWeAre
