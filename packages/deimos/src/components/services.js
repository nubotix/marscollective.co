import React from 'react'
import tw from 'twin.macro'
import Container from './container'
import { H2 } from './heading'
import ServicesItem from './services-item'

const Wrapper = tw.div`space-y-8`
const AllServices = tw.div`grid gap-8`

const Services = ({ servicesData, title }) => (
  <Container>
    <Wrapper>
      <H2 center mint>
        {title}
      </H2>
      <AllServices>
        {servicesData.map((item, i) => (
          <ServicesItem title={item.title} text={item.text} key={i} />
        ))}
      </AllServices>
    </Wrapper>
  </Container>
)

export default Services
