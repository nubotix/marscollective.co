import React from 'react'
import Layout from '@components/layout'
import Hero from '@components/hero'
import Services from '@components/services'
import Team from '@components/team'
import Contact from '@components/contact'

const servicesData = [
  {
    title: 'We design',
    text:
      'Inspired by simplicity, we design elegant solutions in branding, advertising and UI/UX, crafting the strong presence your brand needs to make a difference.'
  },
  {
    title: 'We develop',
    text:
      'Your website on the first page. Using modern technologies, we develop powerful websites optimized to your public and your company needs.'
  },
  {
    title: 'We write',
    text:
      'Your company is what it does; your brand is what it speaks. We craft strong, direct and compelling messages for all your communication needs.'
  },
  {
    title: 'We localize',
    text:
      'Does your audience hablas español or fala português? We can help you reach them. We do more than just a simple translation: we adapt your tone to their native language.'
  }
]

const teamData = [
  {
    member: 'Anderson Lima',
    position: 'Social Strategist'
  },
  {
    member: 'Daniel Soares',
    position: 'Web Developer'
  },
  {
    member: 'Etienne Bom',
    position: 'Graphic Designer'
  },
  {
    member: 'Frank Cedeño',
    position: 'UI Designer'
  }
]

const IndexPage = () => (
  <Layout>
    <Hero
      title="We are"
      bigger="Mars"
      lead="A collective of creative minds located in Brazil with an international mindset."
      buttonPrimary="Get in touch"
      buttonSecondary="See our work"
    />
    <Services title="What we do" servicesData={servicesData} />
    <Team title="Who we are" teamData={teamData} />
    <Contact title="Let's build amazing things together" />
  </Layout>
)

export default IndexPage
