import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const TeamItemTemplate = ({ data }) => {
  const author = data.markdownRemark.frontmatter

  return (
    <Layout>
      <h1>{author.name}</h1>
      <p>{author.position.pt}</p>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
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

export default TeamItemTemplate
