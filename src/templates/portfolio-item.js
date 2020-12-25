import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

import Layout from '@components/layout'
import SEO from '@seo'
import PortfolioItem from '@components/portfolio-item'
import { Image } from '@components/image'

const PortfolioItemTemplate = ({ data }) => {
  const intl = useIntl()
  const portfolioItem = data.portfolioItem.frontmatter

  const description = {
    en: portfolioItem.descriptions?.en,
    es: portfolioItem.descriptions?.es,
    pt: portfolioItem.descriptions?.pt
  }

  return (
    <Layout>
      <SEO
        title={portfolioItem.title}
        description={description[intl.formatMessage({ id: 'lang' })]}
        lang={intl.formatMessage({ id: 'lang' })}
      />
      <PortfolioItem
        date={intl.formatDate(portfolioItem.date, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
        dateTitle={intl.formatMessage({
          id: 'portfolio.itemPage.finishedDate'
        })}
        description={
          portfolioItem.descriptions &&
          description[intl.formatMessage({ id: 'lang' })]
        }
        image={portfolioItem.image}
        role={portfolioItem.role
          .map(roleItem =>
            intl.formatMessage({ id: `portfolio.items.${roleItem}` })
          )
          .join(', ')}
        roleTitle={intl.formatMessage({ id: 'portfolio.itemPage.role' })}
        title={portfolioItem.title}
        team={portfolioItem.team.join(', ')}
        teamTitle={intl.formatMessage({ id: 'portfolio.itemPage.team' })}
        video={portfolioItem.video}
      >
        <Image src={portfolioItem.image} alt={portfolioItem.title} />
        {portfolioItem.content &&
          portfolioItem.content.map((contentItem, i) => (
            <Image src={contentItem} alt={portfolioItem.title} key={i} />
          ))}
      </PortfolioItem>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    portfolioItem: markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { key: { eq: "portfolio-item" } }
    ) {
      frontmatter {
        content {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        date
        descriptions {
          en
          es
          pt
        }
        image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
        role
        team
        video
      }
    }
  }
`

export default PortfolioItemTemplate
