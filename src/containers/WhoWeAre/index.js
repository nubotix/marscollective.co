import React from 'react'

import Team from '../../components/Team'
import { Container } from '../../components/Container'
import { H2 } from '../../components/Typography'
import { Trans } from 'gatsby-plugin-react-i18next'

const WhoWeAre = () => (
  <Container id="who-we-are">
    <H2 data-sal="slide-up">
      <Trans>Who we are</Trans>
    </H2>
    <Team />
  </Container>
)

export default WhoWeAre
