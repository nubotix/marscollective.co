import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import WhoWeAre from '../components/WhoWeAre'
import Contact from '../components/Contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WhoWeAre />
    <Contact />
  </Layout>
)

export default IndexPage
