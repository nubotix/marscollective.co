import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useIntl } from 'gatsby-plugin-intl'

import useSiteMetadata from '@hooks/use-site-metadata'

function SEO({ description, lang, meta, title }) {
  const intl = useIntl().formatMessage
  const data = useSiteMetadata()

  const descriptionLocale = {
    en: data.descriptions.en,
    es: data.descriptions.es,
    pt: data.descriptions.pt
  }
  const metaTitle = (title && `${title} | ${data.title}`) || data.title
  const metaDescription = description || descriptionLocale[intl({ id: 'lang' })]

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: ``,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

export default SEO
