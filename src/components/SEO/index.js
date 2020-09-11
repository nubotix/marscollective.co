import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description {
              en
              es
              pt
            }
          }
        }
      }
    `
  )

  const { t } = useTranslation()
  const descriptionLocale = {
    en: site.siteMetadata.description.en,
    es: site.siteMetadata.description.es,
    pt: site.siteMetadata.description.pt
  }

  const metaTitle =
    (title && `${title} | ${site.siteMetadata.title}`) ||
    site.siteMetadata.title
  const metaDescription = description || descriptionLocale[t('Lang')]

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
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
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

export default SEO
