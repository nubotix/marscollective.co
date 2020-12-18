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
  const intl = useIntl()
  return (
    <Layout>
      <Hero
        title={intl.formatMessage({ id: 'welcome.title' })}
        bigger="Mars"
        lead={intl.formatMessage({ id: 'welcome.lead' })}
        buttonPrimary={intl.formatMessage({
          id: 'welcome.buttonPrimary.label'
        })}
        buttonPrimaryUrl={intl.formatMessage({
          id: 'welcome.buttonPrimary.url'
        })}
        buttonSecondary={intl.formatMessage({
          id: 'welcome.buttonSecondary.label'
        })}
        buttonSecondaryUrl={intl.formatMessage({
          id: 'welcome.buttonSecondary.url'
        })}
        id={intl.formatMessage({ id: 'nav.home.url' })}
      />
      <Services servicesData={useServices()} />
      <Team teamData={useTeam()} />
      <Contact
        title={intl.formatMessage({ id: 'contact.title' })}
        siteMetadata={useSiteMetadata()}
        titleForm={intl.formatMessage({ id: 'contact.form.title' })}
        name={intl.formatMessage({ id: 'contact.form.name' })}
        email={intl.formatMessage({ id: 'contact.form.email' })}
        message={intl.formatMessage({ id: 'contact.form.message' })}
        button={intl.formatMessage({ id: 'contact.form.button' })}
        successMessage={intl.formatMessage({
          id: 'contact.form.successMessage'
        })}
      />
    </Layout>
  )
}

export default IndexPage
