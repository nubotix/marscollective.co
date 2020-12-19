import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import Layout from '@components/layout'
import Hero from '@components/hero'
import Services from '@components/services'
import Team from '@components/team'
import Contact from '@components/contact'
import useTeam from '@hooks/use-team'
import useServices from '@hooks/use-services'
import useSiteMetadata from '@hooks/use-site-metadata'

const IndexPage = () => {
  const intl = useIntl().formatMessage
  return (
    <Layout>
      <Hero
        title={intl({ id: 'welcome.title' })}
        bigger="Mars"
        lead={intl({ id: 'welcome.lead' })}
        buttonPrimary={intl({ id: 'welcome.buttonPrimary.label' })}
        buttonPrimaryUrl={intl({ id: 'welcome.buttonPrimary.url' })}
        buttonSecondary={intl({ id: 'welcome.buttonSecondary.label' })}
        buttonSecondaryUrl={intl({ id: 'welcome.buttonSecondary.url' })}
        id={intl({ id: 'nav.home.url' })}
      />
      <Services servicesData={useServices()} />
      <Team teamData={useTeam()} />
      <Contact
        title={intl({ id: 'contact.title' })}
        siteMetadata={useSiteMetadata()}
        titleForm={intl({ id: 'contact.form.title' })}
        name={intl({ id: 'contact.form.name' })}
        email={intl({ id: 'contact.form.email' })}
        message={intl({ id: 'contact.form.message' })}
        button={intl({ id: 'contact.form.button' })}
        successMessage={intl({ id: 'contact.form.successMessage' })}
      />
    </Layout>
  )
}

export default IndexPage
