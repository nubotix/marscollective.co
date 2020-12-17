import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'
import Container from './container'
import { Bigger, H1, Lead } from './heading'
import Button from './button'

const Hero = ({ bigger, buttonPrimary, buttonSecondary, lead, title }) => (
  <Container>
    <div css={[tw`grid gap-8`]}>
      <H1 center>
        {title} <Bigger mint>{bigger}</Bigger>
      </H1>
      <Lead center>{lead}</Lead>
      <div css={[tw`flex flex-wrap justify-center space-y-6`]}>
        <Button primary label={buttonPrimary} />
        <Button label={buttonSecondary} />
      </div>
    </div>
  </Container>
)

export default Hero

Hero.propTypes = {
  bigger: PropTypes.string,
  buttonPrimary: PropTypes.string,
  buttonSecondary: PropTypes.string,
  lead: PropTypes.string,
  title: PropTypes.string
}
