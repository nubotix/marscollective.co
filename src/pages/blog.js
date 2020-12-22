import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby-plugin-intl'

import Layout from '@components/layout'
import Container from '@components/container'

const BlogPage = () => {
  const {
    posts: { edges }
  } = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "post-item" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              titles {
                pt
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Container>
        <ul>
          {edges.map(({ node }, i) => (
            <li key={i}>
              <Link to={node.fields.slug}>{node.frontmatter.titles.pt}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export default BlogPage
