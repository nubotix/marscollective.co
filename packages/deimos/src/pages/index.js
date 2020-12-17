import React from 'react'
import Layout from '@components/layout'
import Hero from '@components/hero'
import Services from '@components/services'
import Team from '@components/team'
import Contact from '@components/contact'
import useTeam from '../hooks/use-team'
import useServices from '../hooks/use-services'

const IndexPage = () => (
  <Layout>
    <Hero
      title="We are"
      bigger="Mars"
      lead="A collective of creative minds located in Brazil with an international mindset."
      buttonPrimary="Get in touch"
      buttonSecondary="See our work"
    />
    <Services servicesData={useServices()} />
    <Team teamData={useTeam()} />
    <Contact title="Let's build amazing things together" />
  </Layout>
)

export default IndexPage
