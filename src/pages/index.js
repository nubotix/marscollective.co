import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import WhoWeAre from '../components/WhoWeAre'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WhoWeAre />
  </Layout>
)

export default IndexPage
