import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Welcome from '../containers/Welcome'
import WhatWeDo from '../containers/WhatWeDo'
import WhoWeAre from '../containers/WhoWeAre'
import OurWork from '../containers/OurWork'
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
    <WhoWeAre />
    <OurWork />
    <Contact />
  </Layout>
)

export default translate(IndexPage)
