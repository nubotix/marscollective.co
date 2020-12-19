import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import SEO from '@components/seo'
import useSiteMetadata from '@hooks/use-site-metadata'

const Redirect = () => {
  const intl = useIntl().formatMessage
  const data = useSiteMetadata()

  const descriptionLocale = {
    en: data.desc.en,
    es: data.desc.es,
    pt: data.desc.pt
  }

  const metaTitle = data.title
  const metaDescription = descriptionLocale[intl({ id: 'lang' })]

  return (
    <SEO
      title={metaTitle}
      description={metaDescription}
      lang={intl({ id: 'lang' })}
    />
  )
}

export default Redirect
