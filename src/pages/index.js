import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Welcome from '../containers/Welcome'
import WhatWeDo from '../containers/WhatWeDo'
// import OurWork from '../containers/OurWork'
import WhoWeAre from '../containers/WhoWeAre'
// import Blog from '../containers/Blog'
import Contact from '../containers/Contact'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO lang={t('Lang')} />
      <Welcome />
      <WhatWeDo />
      {/* <OurWork /> */}
      <WhoWeAre />
      {/* <Blog /> */}
      <Contact />
    </Layout>
  )
}

export default IndexPage
