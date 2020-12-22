import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import Layout from '@components/layout'
import SEO from '@seo'
import Hero from '@components/hero'
import Services from '@components/services'
import Team from '@components/team'
import Posts from '@components/posts'
import Contact from '@components/contact'
import useTeam from '@hooks/use-team'
import usePosts from '@hooks/use-posts'
import useSiteMetadata from '@hooks/use-site-metadata'

const IndexPage = () => {
  const intl = useIntl().formatMessage
  return (
    <Layout id={intl({ id: 'nav.home.url' })}>
      <SEO lang={intl({ id: 'lang' })} />
      <Hero
        title={intl({ id: 'welcome.title' })}
        bigger="Mars"
        lead={intl({ id: 'welcome.lead' })}
        buttonPrimary={intl({ id: 'welcome.buttonPrimary.label' })}
        buttonPrimaryUrl={intl({ id: 'welcome.buttonPrimary.url' })}
        buttonSecondary={intl({ id: 'welcome.buttonSecondary.label' })}
        buttonSecondaryUrl={intl({ id: 'welcome.buttonSecondary.url' })}
      />
      <Services id={intl({ id: 'nav.services.url' })} />
      <Team teamData={useTeam()} id={intl({ id: 'nav.about.url' })} />
      <Posts postsData={usePosts()} id={intl({ id: 'nav.blog.url' })} />
      <Contact
        title={intl({ id: 'contact.title' })}
        siteMetadata={useSiteMetadata()}
        titleForm={intl({ id: 'contact.form.title' })}
        name={intl({ id: 'contact.form.name' })}
        email={intl({ id: 'contact.form.email' })}
        message={intl({ id: 'contact.form.message' })}
        button={intl({ id: 'contact.form.button' })}
        successMessage={intl({ id: 'contact.form.successMessage' })}
        id={intl({ id: 'nav.contact.url' })}
      />
    </Layout>
  )
}

export default IndexPage
