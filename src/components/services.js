import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'

import ServicesItem from '@components/services-item'
import weDesign from '@assets/weDesign.svg'
import weDevelop from '@assets/weDevelop.svg'
import weLocalize from '@assets/weLocalize.svg'
import weWrite from '@assets/weWrite.svg'

const Services = ({ id }) => {
  const intl = useIntl().formatMessage
  return (
    <section className="container" id={id}>
      <h2 className="center mint" data-sal="fade">
        {intl({ id: 'services.title' })}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <ServicesItem
          image={weDesign}
          title={intl({ id: 'services.design.title' })}
          content={intl({ id: 'services.design.content' })}
        />
        <ServicesItem
          image={weDevelop}
          title={intl({ id: 'services.develop.title' })}
          content={intl({ id: 'services.develop.content' })}
        />
        <ServicesItem
          image={weLocalize}
          title={intl({ id: 'services.write.title' })}
          content={intl({ id: 'services.write.content' })}
        />
        <ServicesItem
          image={weWrite}
          title={intl({ id: 'services.localize.title' })}
          content={intl({ id: 'services.localize.content' })}
        />
      </div>
    </section>
  )
}

export default Services

Services.propTypes = {
  id: PropTypes.string.isRequired
}
