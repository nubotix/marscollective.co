import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import tw from 'twin.macro'
import Container from '@components/container'
import ServicesItem from '@components/services-item'

const Services = ({ servicesData }) => {
  const intl = useIntl().formatMessage
  const title = {
    en: servicesData.title.en,
    es: servicesData.title.es,
    pt: servicesData.title.pt
  }
  return (
    <Container>
      <h2 className="center mint" data-sal="slide-up">
        {title[intl({ id: 'lang' })]}
      </h2>
      <div css={[tw`grid gap-8 sm:grid-cols-2 lg:(grid-cols-4 gap-10)`]}>
        {servicesData.items.map((item, i) => {
          const title = {
            en: item.title.en,
            es: item.title.es,
            pt: item.title.pt
          }
          const content = {
            en: item.content.en,
            es: item.content.es,
            pt: item.content.pt
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
