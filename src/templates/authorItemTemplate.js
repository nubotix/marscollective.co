import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const AuthorItemTemplate = ({ data }) => {
  const author = data.markdownRemark.frontmatter

  return (
    <Layout>
      <h1>{author.name}</h1>
      <p>{author.position.pt}</p>
    </Layout>
  )
}

export const query = graphql`
  query($author: String!) {
    markdownRemark(frontmatter: { name: { eq: $author } }) {
      frontmatter {
        name
        position {
          en
          es
          pt
        }
      }
    }
  }
`

export default AuthorItemTemplate
