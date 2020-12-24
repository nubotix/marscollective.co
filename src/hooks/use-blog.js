import { graphql, useStaticQuery } from 'gatsby'

export default function useBlog() {
  const {
    blog: { edges }
  } = useStaticQuery(graphql`
    query {
      blog: allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "blog-item" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              image {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              titles {
                en
                es
                pt
              }
            }
          }
        }
      }
    }
  `)
  return edges
}
