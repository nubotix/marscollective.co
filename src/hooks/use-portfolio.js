import { graphql, useStaticQuery } from 'gatsby'

export default function usePortfolio() {
  const {
    portfolio: { edges }
  } = useStaticQuery(graphql`
    query {
      portfolio: allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "portfolio-item" } } }
        limit: 6
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              content {
                absolutePath
              }
              date
              descriptions {
                en
                es
                pt
              }
              image {
                childImageSharp {
                  fluid(maxWidth: 768, quality: 100) {
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
      }
    }
  `)
  return edges
}
