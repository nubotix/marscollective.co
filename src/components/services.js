import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'
import tw from 'twin.macro'

import Container from '@components/container'
import ServicesItem from '@components/services-item'

const Services = ({ id, servicesData }) => {
  const intl = useIntl().formatMessage
  const title = {
    en: servicesData.titles.en,
    es: servicesData.titles.es,
    pt: servicesData.titles.pt
  }
  return (
    <Container id={id}>
      <h2 className="center mint" data-sal="slide-up">
        {title[intl({ id: 'lang' })]}
      </h2>
      <div css={[tw`grid gap-8 sm:grid-cols-2 lg:(grid-cols-4 gap-10)`]}>
        {servicesData.items.map((item, i) => {
          const title = {
            en: item.titles.en,
            es: item.titles.es,
            pt: item.titles.pt
          }
          const content = {
            en: item.contents.en,
            es: item.contents.es,
            pt: item.contents.pt
          }
          return (
            <ServicesItem
              image={item.image.publicURL}
              title={title[intl({ id: 'lang' })]}
              content={content[intl({ id: 'lang' })]}
              key={i}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default Services

Services.propTypes = {
  id: PropTypes.string.isRequired,
  servicesData: PropTypes.object.isRequired
}
