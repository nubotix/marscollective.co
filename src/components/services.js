import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'

import ServicesItem from '@components/services-item'
import WeDesign from '@assets/we-design'
import WeDevelop from '@assets/we-develop'
import WeLocalize from '@assets/we-localize'
import WeWrite from '@assets/we-write'

const data = [
  {
    image: <WeDesign />,
    title: 'services.design.title',
    content: 'services.design.content'
  },
  {
    image: <WeDevelop />,
    title: 'services.develop.title',
    content: 'services.develop.content'
  },
  {
    image: <WeWrite />,
    title: 'services.write.title',
    content: 'services.write.content'
  },
  {
    image: <WeLocalize />,
    title: 'services.localize.title',
    content: 'services.localize.content'
  }
]

const Services = ({ id }) => {
  const intl = useIntl().formatMessage
  return (
    <section className="container" id={id}>
      <h2 className="center mint" data-sal="fade">
        {intl({ id: 'services.title' })}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {data.map(({ content, image, title }, i) => (
          <ServicesItem
            title={intl({ id: title })}
            content={intl({ id: content })}
            key={i}
          >
            {image}
          </ServicesItem>
        ))}
      </div>
    </section>
  )
}

export default Services

Services.propTypes = {
  id: PropTypes.string.isRequired
}
