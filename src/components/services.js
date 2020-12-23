import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'

import ServicesItem from '@components/services-item'
import WeDesign from '@assets/we-design'
import WeDevelop from '@assets/we-develop'
import WeLocalize from '@assets/we-localize'
import WeWrite from '@assets/we-write'

const Services = ({ id }) => {
  const intl = useIntl().formatMessage
  return (
    <section className="container" id={id}>
      <h2 className="center mint" data-sal="fade">
        {intl({ id: 'services.title' })}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <ServicesItem
          title={intl({ id: 'services.design.title' })}
          content={intl({ id: 'services.design.content' })}
        >
          <WeDesign />
        </ServicesItem>
        <ServicesItem
          title={intl({ id: 'services.develop.title' })}
          content={intl({ id: 'services.develop.content' })}
        >
          <WeDevelop />
        </ServicesItem>
        <ServicesItem
          title={intl({ id: 'services.write.title' })}
          content={intl({ id: 'services.write.content' })}
        >
          <WeLocalize />
        </ServicesItem>
        <ServicesItem
          title={intl({ id: 'services.localize.title' })}
          content={intl({ id: 'services.localize.content' })}
        >
          <WeWrite />
        </ServicesItem>
      </div>
    </section>
  )
}

export default Services

Services.propTypes = {
  id: PropTypes.string.isRequired
}
