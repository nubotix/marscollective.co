import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Welcome from '../containers/Welcome'
import WhatWeDo from '../containers/WhatWeDo'
import OurWork from '../containers/OurWork'
import WhoWeAre from '../containers/WhoWeAre'
import Blog from '../containers/Blog'
import Contact from '../containers/Contact'
import { translate } from '../i18n/translate'

const IndexPage = ({ t }) => (
  <Layout>
    <SEO
      description={t('siteMetaData.description')}
      lang={t('siteMetaData.lang')}
    />
    <Welcome />
    <WhatWeDo />
    <OurWork />
    <WhoWeAre />
    <Blog />
    <Contact />
  </Layout>
)

export default translate(IndexPage)
