import { graphql, useStaticQuery } from 'gatsby'

export default function usePortfolioWebDesign() {
  const {
    portfolio: { edges }
  } = useStaticQuery(graphql`
    query {
      portfolio: allMarkdownRemark(
        filter: {
          frontmatter: {
            key: { eq: "portfolio-item" }
            role: { eq: "Web design" }
          }
        }
        limit: 4
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
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
                absolutePath
              }
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
