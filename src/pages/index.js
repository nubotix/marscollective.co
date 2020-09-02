import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Welcome from '../components/Welcome'
import WhatWeDo from '../components/WhatWeDo'
import WhoWeAre from '../components/WhoWeAre'
import Contact from '../components/Contact'
import { translate } from '../i18n/translate'

const IndexPage = ({ t }) => (
  <Layout>
    <SEO
      title="Home"
      description={t('siteMetaData.description')}
      lang={t('siteMetaData.lang')}
    />
    <Welcome />
    <WhatWeDo />
    <WhoWeAre />
    <Contact />
  </Layout>
)

export default translate(IndexPage)
