import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'
import { H3, H4 } from '../../components/Typography'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Team = () => {
  const { t } = useTranslation()
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___title, order: ASC }
          filter: { frontmatter: { key: { eq: "team" }, member: { eq: true } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                image {
                  childImageSharp {
                    fixed(width: 150, height: 150, quality: 100) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
                }
                position
                position_ES
                position_PT
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
          en: node.frontmatter.position,
          es: node.frontmatter.position_ES,
          pt: node.frontmatter.position_PT
        }

        return (
          <S.Item data-sal="slide-up" key={i}>
            <S.Image fixed={node.frontmatter.image.childImageSharp.fixed} />
            <S.TextWrapper>
              <H3>{node.frontmatter.title}</H3>
              <H4>{position[t('Lang')]}</H4>
            </S.TextWrapper>
          </S.Item>
        )
      })}
    </S.Itens>
  )
}

export default Team
