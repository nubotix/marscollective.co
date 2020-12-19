import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'

import Container from '@components/container'
import Button from '@components/button'
import Image from '../assets/welcome.svg'

const Hero = ({ bigger, buttonPrimary, buttonSecondary, lead, title }) => (
  <Container>
    <div
      css={[
        tw`grid gap-12 justify-items-center items-center text-center lg:(grid-cols-2)`
      ]}
    >
      <div css={[tw`space-y-8`]}>
        <h1 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
          {title}
          <span
            className="mint"
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease"
          >
            {bigger}
          </span>
        </h1>
        <p
          className="lead"
          data-sal="slide-up"
          data-sal-delay="900"
          data-sal-easing="ease"
        >
          {lead}
        </p>
        <div
          css={[tw`flex flex-wrap justify-center space-x-8`]}
          data-sal="slide-up"
          data-sal-delay="900"
          data-sal-easing="ease"
        >
          <Button primary label={buttonPrimary} />
          <Button label={buttonSecondary} />
        </div>
      </div>
      <img
        src={Image}
        alt={`${title} ${bigger}`}
        css={[tw`w-2/3 lg:w-full`]}
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      />
    </div>
  </Container>
)

export default Hero

Hero.propTypes = {
  bigger: PropTypes.string.isRequired,
  buttonPrimary: PropTypes.string.isRequired,
  buttonSecondary: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
