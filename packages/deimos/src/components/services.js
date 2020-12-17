import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import tw from 'twin.macro'
import Container from './container'
import { H2 } from './heading'
import ServicesItem from './services-item'

const Services = ({ servicesData }) => {
  const intl = useIntl()
  const title = {
    en: servicesData.title.en,
    es: servicesData.title.es,
    pt: servicesData.title.pt
  }
  return (
    <Container>
      <div css={[tw`space-y-8`]}>
        <H2 center mint>
          {title[intl.formatMessage({ id: 'lang' })]}
        </H2>
        <div css={[tw`grid gap-8`]}>
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
                title={title[intl.formatMessage({ id: 'lang' })]}
                content={content[intl.formatMessage({ id: 'lang' })]}
                key={i}
              />
            )
          })}
        </div>
      </div>
    </Container>
  )
}

export default Services
