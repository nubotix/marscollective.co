import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Welcome from '../containers/Welcome'
import WhatWeDo from '../containers/WhatWeDo'
import OurWork from '../containers/OurWork'
import WhoWeAre from '../containers/WhoWeAre'
import Blog from '../containers/Blog'
import Contact from '../components/contact'
import { useIntl } from 'gatsby-plugin-intl'

const IndexPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO lang={intl.formatMessage({ id: 'lang' })} />
      <Welcome />
      <WhatWeDo />
      <OurWork />
      <WhoWeAre />
      <Blog />
      <Contact />
    </Layout>
  )
}

export default IndexPage
