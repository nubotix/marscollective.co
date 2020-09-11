import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Icons from './Icons'
import * as S from './styled'

const Social = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "socialLinks" } }) {
          frontmatter {
            social {
              label
              url
            }
          }
        }
      }
    `
  )

  const socialLinks = markdownRemark.frontmatter.social

  return (
    <S.Wrapper>
      {socialLinks.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.Item key={i}>
            <S.ItemLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.ItemLink>
          </S.Item>
        )
      })}
    </S.Wrapper>
  )
}

export default Social
