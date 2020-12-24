import React from 'react'
import PropTypes from 'prop-types'
import { AnchorLink as Link } from 'gatsby-plugin-anchor-links'

import Button from '@components/button'
import Welcome from '@assets/welcome'

const Hero = ({
  bigger,
  buttonPrimary,
  buttonPrimaryUrl,
  buttonSecondary,
  buttonSecondaryUrl,
  lead,
  title
}) => (
  <section className="container">
    <div className="grid gap-12 justify-items-center items-center text-center lg:grid-cols-2">
      <div className="space-y-8">
        <h1 data-sal="slide-up" data-sal-delay="300">
          {title}
          <span className="mint" data-sal="slide-up" data-sal-delay="600">
            {bigger}
          </span>
        </h1>
        <p className="lead" data-sal="slide-up" data-sal-delay="900">
          {lead}
        </p>
        <div
          className="flex flex-wrap justify-center space-x-8"
          data-sal="slide-up"
          data-sal-delay="900"
        >
          <Link to={buttonPrimaryUrl}>
            <Button primary label={buttonPrimary} />
          </Link>
          <Link to={buttonSecondaryUrl}>
            <Button label={buttonSecondary} />
          </Link>
        </div>
      </div>
      <div className="w-2/3 lg:w-full" data-sal="slide-up" data-sal-delay="300">
        <Welcome />
      </div>
    </div>
  </section>
)

export default Hero

Hero.propTypes = {
  bigger: PropTypes.string.isRequired,
  buttonPrimary: PropTypes.string.isRequired,
  buttonPrimaryUrl: PropTypes.string.isRequired,
  buttonSecondary: PropTypes.string.isRequired,
  buttonSecondaryUrl: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
