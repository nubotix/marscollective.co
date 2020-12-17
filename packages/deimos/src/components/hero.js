import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'
import Container from './container'
import { Bigger, H1, Lead } from './heading'
import Button from './button'

const Wrapper = tw.div`grid gap-8`
const Buttons = tw.div`flex flex-wrap justify-center space-y-6`

const Hero = ({ bigger, buttonPrimary, buttonSecondary, lead, title }) => (
  <Container>
    <Wrapper>
      <H1 center>
        {title} <Bigger mint>{bigger}</Bigger>
      </H1>
      <Lead center>{lead}</Lead>
      <Buttons>
        <Button primary>{buttonPrimary}</Button>
        <Button>{buttonSecondary}</Button>
      </Buttons>
    </Wrapper>
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
