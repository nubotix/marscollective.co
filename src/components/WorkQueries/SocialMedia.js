import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const SocialMedia = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          limit: 4
          filter: {
            frontmatter: {
              key: { eq: "portfolio" }
              role: { in: "Social Media" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                role
                key
                thumb {
                  childImageSharp {
                    fluid(maxWidth: 900, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  const items = allMarkdownRemark.edges

  return (
    <>
      {items.map(({ node }, i) => (
        <S.LinkItem to={node.fields.slug}>
          <S.Image
            fluid={node.frontmatter.thumb.childImageSharp.fluid}
            key={i}
          />
        </S.LinkItem>
      ))}
    </>
  )
}

export default SocialMedia
