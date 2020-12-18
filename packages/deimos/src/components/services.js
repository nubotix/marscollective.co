import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import tw from 'twin.macro'
import Container from '@components/container'
import { H2 } from '@components/heading'
import ServicesItem from '@components/services-item'

const Services = ({ servicesData }) => {
  const intl = useIntl()
  const title = {
    en: servicesData.title.en,
    es: servicesData.title.es,
    pt: servicesData.title.pt
  }
  return (
    <Container>
      <div css={[tw`space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20`]}>
        <H2 center mint>
          {title[intl.formatMessage({ id: 'lang' })]}
        </H2>
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
