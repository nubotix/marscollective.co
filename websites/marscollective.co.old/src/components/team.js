import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { useIntl } from 'gatsby-plugin-intl'

const Team = () => {
  const intl = useIntl()
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___name, order: ASC }
          filter: { frontmatter: { key: { eq: "team" }, member: { eq: true } } }
        ) {
          edges {
            node {
              frontmatter {
                name
                image {
                  childImageSharp {
                    fluid(maxWidth: 150, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                position {
                  en
                  es
                  pt
                }
              }
            }
          }
        }
      }
    `
  )

  const teamItems = allMarkdownRemark.edges

  return (
    <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
      {teamItems.map(({ node }, i) => {
        const position = {
          en: node.frontmatter.position.en,
          es: node.frontmatter.position.es,
          pt: node.frontmatter.position.pt
        }

        return (
          <div className="grid gap-8 items-center" data-sal="slide-up" key={i}>
            <Img
              fluid={node.frontmatter.image.childImageSharp.fluid}
              className="w-40 h-40 rounded-full"
            />
            <div>
              <h3>{node.frontmatter.name}</h3>
              <h4>{position[intl.formatMessage({ id: 'lang' })]}</h4>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Team
