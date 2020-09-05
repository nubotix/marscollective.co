import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PortfolioItem from '../containers/PortfolioItem'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Portfolio = ({ data }) => {
  const { t } = useTranslation()
  const portfolioItem = data.markdownRemark

  const title = {
    en: portfolioItem.frontmatter.title,
    es: portfolioItem.frontmatter.titleES,
    pt: portfolioItem.frontmatter.titlePT
  }

  const description = {
    en: portfolioItem.frontmatter.description,
    es: portfolioItem.frontmatter.descriptionES,
    pt: portfolioItem.frontmatter.descriptionPT
  }

  return (
    <Layout>
      <SEO
        title={portfolioItem.frontmatter.title}
        description={portfolioItem.frontmatter.description}
        lang={t('Lang')}
      />
      <PortfolioItem
        title={title[t('Lang')]}
        description={description[t('Lang')]}
        content={portfolioItem.frontmatter.content}
        role={portfolioItem.frontmatter.role}
        team={portfolioItem.frontmatter.team}
        date={portfolioItem.frontmatter.date}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        titleES
        titlePT
        description
        descriptionES
        descriptionPT
        content {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        role
        team
        date
      }
    }
  }
`

export default Portfolio
