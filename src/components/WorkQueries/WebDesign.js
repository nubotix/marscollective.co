import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const WebDesign = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          limit: 4
          filter: {
            frontmatter: {
              key: { eq: "portfolio" }
              role: { in: "Web design" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                role
                key
                image {
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
            fluid={node.frontmatter.image.childImageSharp.fluid}
            key={i}
          />
        </S.LinkItem>
      ))}
    </>
  )
}

export default WebDesign
