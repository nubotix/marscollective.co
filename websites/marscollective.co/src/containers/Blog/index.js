import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

const Blog = () => {
  const intl = useIntl()

  const Div = styled(Img)`
    border-radius: var(--borderRadius);
    max-height: 300px;

    :nth-child(1),
    :nth-child(4) {
      grid-column: span 2;
    }
  `

  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          limit: 4
          filter: { frontmatter: { templateKey: { eq: "blog" } } }
        ) {
          edges {
            node {
              frontmatter {
                image {
                  childImageSharp {
                    fluid(maxWidth: 900, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const items = allMarkdownRemark.edges

  return (
    <div className="container" id={intl.formatMessage({ id: 'nav.blog.url' })}>
      <h2 data-sal="slide-up">
        <FormattedMessage id="blog.title" />
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {items.map(({ node }, i) => (
          <Div fluid={node.frontmatter.image.childImageSharp.fluid} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Blog
