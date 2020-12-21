import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import SEO from '@components/seo'
import useSiteMetadata from '@hooks/use-site-metadata'

const Redirect = () => {
  const intl = useIntl().formatMessage
  const data = useSiteMetadata()

  const descriptionLocale = {
    en: data.descriptions.en,
    es: data.descriptions.es,
    pt: data.descriptions.pt
  }

  const metaDescription = descriptionLocale[intl({ id: 'lang' })]

  return <SEO description={metaDescription} lang={intl({ id: 'lang' })} />
}

export default Redirect
