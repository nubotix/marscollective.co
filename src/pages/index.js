import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Welcome from '../components/Welcome'
import WhatWeDo from '../components/WhatWeDo'
import WhoWeAre from '../components/WhoWeAre'
import Contact from '../components/Contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <WhatWeDo />
    <WhoWeAre />
    <Contact />
  </Layout>
)

export default IndexPage
