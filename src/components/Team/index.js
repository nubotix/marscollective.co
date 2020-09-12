import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'
import { useIntl } from 'gatsby-plugin-intl'

const Team = () => {
  const intl = useIntl()
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___name, order: ASC }
          filter: {
            frontmatter: { templateKey: { eq: "team" }, member: { eq: true } }
          }
        ) {
          edges {
            node {
              frontmatter {
                name
                image {
                  childImageSharp {
                    fixed(width: 150, height: 150, quality: 100) {
                      ...GatsbyImageSharpFixed_withWebp
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
    <S.Itens>
      {teamItems.map(({ node }, i) => {
        const position = {
          en: node.frontmatter.position.en,
          es: node.frontmatter.position.es,
          pt: node.frontmatter.position.pt
        }

        return (
          <S.Item data-sal="slide-up" key={i}>
            <S.Image fixed={node.frontmatter.image.childImageSharp.fixed} />
            <S.TextWrapper>
              <h3>{node.frontmatter.name}</h3>
              <h4>{position[intl.formatMessage({ id: 'lang' })]}</h4>
            </S.TextWrapper>
          </S.Item>
        )
      })}
    </S.Itens>
  )
}

export default Team
